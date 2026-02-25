// classification.js - Surgical Classification Logic (FIXED v4)

/**
 * Core classification function based on user's absolute rules.
 */
function classifyName(name) {
    if (!name) return "Loại II";

    // Normalize Unicode (NFC) and clean string
    const str = name.toString().toLowerCase().normalize('NFC').trim().replace(/\s+/g, ' ');

    // 1. RULE: K EXCEPTIONS -> LOẠI II (HIGHEST PRIORITY)
    const kExceptions = [
        "td k", "theo dõi k",
        "tái phát", // Covers "K giáp đã mổ tái phát"
        "đã mổ", "đã phẫu thuật", "hậu phẫu", "sau mổ", "đã mỗ"
    ];

    if (kExceptions.some(ex => str.includes(ex.normalize('NFC')))) {
        return "Loại II";
    }

    // 2. RULE: CANCER (K) -> LOẠI I
    // Match "K" as a separate word OR starting with "K." or "K:"
    const kRegex = /(^|[\s.,;:/])k([\s.,;:/]|$)/;
    const isCancer = kRegex.test(str) || str.includes("ung thư");

    if (isCancer) return "Loại I";

    // 3. RULE: OTHER LOẠI I
    const type1Keywords = [
        "polyp trực tràng", "ligasure", "sa tử cung", "xơ gan",
        "cắt dạ dày", "hậu môn nhân tạo", "hẹp tâm vị",
        "u bàng quang", "u k "
    ];
    if (type1Keywords.some(kw => str.includes(kw.normalize('NFC')))) return "Loại I";

    // 4. RULE: LOẠI III
    const type3Keywords = [
        "sonde jj", "còn sonde jj", "rút sonde",
        "bướu thành ngực", "bướu vùng",
        "bọc bã", "bướu bã",
        "bướu vú p", "bướu vú t",
        "bướu vú (p)", "bướu vú (t)",
        "bướu vú phải", "bướu vú trái",
        "nang giáp lưỡi", "hạch cổ", "nang bartholin",
        "cắt mí", "dư da mi", "bướu mỡ"
    ];
    if (type3Keywords.some(kw => str.includes(kw.normalize('NFC')))) return "Loại III";

    // 5. DEFAULT -> LOẠI II
    return "Loại II";
}

// --- EXCEL PROCESSING LOGIC ---

let originalWorksheet = null;
let originalData = [];
let nameColIndex = -1;
let classColIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('uploadExcel');
    if (uploadInput) uploadInput.addEventListener('change', handleFileUpload);
});

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (typeof XLSX === 'undefined') {
        alert("Lỗi: Thư viện XLSX chưa tải xong.");
        return;
    }

    const fileNameDisplay = document.getElementById('fileName');
    fileNameDisplay.textContent = "Đang xử lý...";

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            originalData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            processExcelData(originalData);
            fileNameDisplay.textContent = file.name;
        } catch (err) {
            alert("Lỗi: " + err.message);
            fileNameDisplay.textContent = "Lỗi!";
        }
    };
    reader.readAsArrayBuffer(file);
}

function processExcelData(rows) {
    const resultBody = document.getElementById('classificationResultBody');
    resultBody.innerHTML = '';
    if (rows.length === 0) return;

    let headerRowIndex = -1;
    nameColIndex = -1;
    classColIndex = -1;

    // STEP 1: Find the REAL header row (skip metadata like "KHOA:", dates, etc.)
    // Look for a row that contains procedure-related keywords AND patient name column
    for (let i = 0; i < Math.min(rows.length, 30); i++) {
        const row = rows[i];
        if (!row) continue;

        // Check if this row looks like a data header (has multiple meaningful columns)
        let hasPatientCol = false;
        let hasProcedureCol = false;

        row.forEach(cell => {
            if (!cell) return;
            const cellStr = cell.toString().toLowerCase().normalize('NFC').trim();

            // Patient name column indicators
            if (cellStr.includes("tên bệnh nhân") || cellStr.includes("họ và tên") || cellStr === "tên bn") {
                hasPatientCol = true;
            }

            // Procedure column indicators  
            if (cellStr.includes("phẫu thuật") || cellStr.includes("phẩu thuật") || cellStr.includes("thủ thuật") || cellStr.includes("dịch vụ") || cellStr.includes("chẩn đoán")) {
                hasProcedureCol = true;
            }
        });

        // If we found both patient and procedure columns, this is likely the header
        if (hasPatientCol || hasProcedureCol) {
            headerRowIndex = i;
            break;
        }
    }

    // Fallback: If no clear header, assume row 0
    if (headerRowIndex === -1) headerRowIndex = 0;

    // STEP 2: Find the PROCEDURE column (NOT patient name)
    const headerRow = rows[headerRowIndex];
    let columnScores = headerRow.map(() => 0);

    headerRow.forEach((cell, idx) => {
        if (!cell) return;
        const cellStr = cell.toString().trim().toLowerCase().normalize('NFC');

        // HIGH PRIORITY: Procedure-related columns
        if (cellStr.includes("phẫu thuật") || cellStr.includes("phẩu thuật") || cellStr.includes("thủ thuật")) {
            columnScores[idx] += 1000;
        }
        else if (cellStr.includes("chẩn đoán") || cellStr.includes("dịch vụ") || cellStr.includes("tên pt")) {
            columnScores[idx] += 500;
        }

        // PENALTY: Patient name columns (we DON'T want these)
        if (cellStr.includes("tên bệnh nhân") || cellStr.includes("họ và tên") || cellStr.includes("tên bn") || cellStr.includes("bệnh nhân")) {
            columnScores[idx] -= 2000; // Strong penalty
        }

        // PENALTY: Other metadata
        if (cellStr.includes("bác sĩ") || cellStr.includes("ngày") || cellStr.includes("khoa") || cellStr.includes("số") || cellStr.includes("stt")) {
            columnScores[idx] -= 500;
        }

        // Find Class Column
        if (cellStr.includes("loại") || cellStr.includes("phân loại")) classColIndex = idx;
    });

    // STEP 3: Data Sampling - Find column with medical keywords
    for (let col = 0; col < headerRow.length; col++) {
        for (let r = headerRowIndex + 1; r < Math.min(rows.length, headerRowIndex + 30); r++) {
            const val = (rows[r][col] || "").toString().toLowerCase().normalize('NFC');

            // Medical procedure keywords
            if (val.includes(" k ") || val.startsWith("k ") || val.includes("ung thư") ||
                val.includes("bướu") || val.includes("mổ") || val.includes("sonde") ||
                val.includes("cắt") || val.includes("phẫu thuật") || val.includes("nang")) {
                columnScores[col] += 50;
            }

            // Penalty for person names (2-4 Vietnamese words, no medical terms)
            const words = val.trim().split(/\s+/);
            if (words.length >= 2 && words.length <= 4 && words.every(w => /^[a-zà-ỹ]+$/i.test(w))) {
                const hasMedical = val.includes("k ") || val.includes("bướu") || val.includes("mổ");
                if (!hasMedical) columnScores[col] -= 30;
            }
        }
    }

    // OVERRIDE: Check if column F (index 5) exists and looks like procedure column
    // User confirmed column F is the procedure column
    if (headerRow.length > 5) {
        const colF = headerRow[5];
        if (colF) {
            const colFStr = colF.toString().toLowerCase().normalize('NFC').trim();
            // If column F contains procedure keywords, force select it
            if (colFStr.includes("phẩu thuật") || colFStr.includes("phẫu thuật") || colFStr.includes("thủ thuật") || colFStr.includes("chẩn đoán")) {
                nameColIndex = 5; // Force column F
                // Column F manually verified by user as procedure column
            }
        }
    }

    // If column F wasn't selected, use voting system
    if (nameColIndex === -1) {
        // Pick top scoring column
        let maxScore = -9999;
        columnScores.forEach((score, idx) => {
            if (score > maxScore) {
                maxScore = score;
                nameColIndex = idx;
            }
        });
    }

    // Final Fallback
    if (nameColIndex === -1) nameColIndex = 1;

    // Finalizing classification result

    // Add Column if missing for export
    if (classColIndex === -1) {
        classColIndex = nameColIndex + 1;
        rows[headerRowIndex].splice(classColIndex, 0, "Phân loại (TT50)");
    }

    // STEP 4: Classify Rows
    let count = 1;
    for (let i = headerRowIndex + 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row || !row[nameColIndex]) continue;

        const rawName = row[nameColIndex].toString().trim();
        if (rawName.length < 3) continue;

        const lowerName = rawName.toLowerCase().normalize('NFC');
        if (["ngày", "tháng", "báo cáo", "tên bệnh nhân", "bác sĩ", "ký tên"].some(sk => lowerName.includes(sk))) {
            if (row.length < classColIndex + 1) row.splice(classColIndex, 0, "");
            continue;
        }

        const classification = classifyName(rawName);

        // Update row for export
        if (rows[headerRowIndex][classColIndex] === "Phân loại (TT50)") {
            if (row.length < classColIndex + 1) row.splice(classColIndex, 0, classification);
            else row[classColIndex] = classification;
        } else {
            row[classColIndex] = classification;
        }

        // Add to UI
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${count++}</td><td>${rawName}</td><td><span class="badge ${getClassBadge(classification)}">${classification}</span></td><td>Đã điền</td>`;
        resultBody.appendChild(tr);
    }

    document.getElementById('resultArea').style.display = 'block';
    document.getElementById('resultArea').scrollIntoView({ behavior: 'smooth' });
}

function getClassBadge(cls) {
    if (cls === "Loại I") return "badge-1";
    if (cls === "Loại II") return "badge-2";
    if (cls === "Loại III") return "badge-3";
    return "";
}

function exportClassificationResult() {
    if (!originalData || originalData.length === 0) return;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(originalData);
    const wscols = originalData[0].map(() => ({ wch: 15 }));
    wscols[nameColIndex] = { wch: 50 };
    ws['!cols'] = wscols;
    XLSX.utils.book_append_sheet(wb, ws, "KetQua");
    XLSX.writeFile(wb, `PhanLoai_${Date.now()}.xlsx`);
}

function toggleClassification() {
    const body = document.getElementById('classificationBody');
    const icon = document.getElementById('classToggleIcon');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
        body.style.display = 'none';
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
}
