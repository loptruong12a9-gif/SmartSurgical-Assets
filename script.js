document.addEventListener('DOMContentLoaded', () => {
    const kitGrid = document.getElementById('kitGrid');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalItemsList = document.getElementById('modalItemsList');
    const emptyState = document.getElementById('emptyState');
    const closeBtn = document.querySelector('.close-btn');
    const modalSelection = document.getElementById('modalSelection');
    const modalDetails = document.getElementById('modalDetails');
    const backBtn = document.getElementById('backBtn');
    const modalStatistics = document.getElementById('modalStatistics');
    const totalKitsSpan = document.getElementById('totalKits');
    const totalDamagedSpan = document.getElementById('totalDamaged');
    const damagedItemsList = document.getElementById('damagedItemsList');
    const categoryBreakdown = document.getElementById('categoryBreakdown');
    const lastUpdateDateSpan = document.getElementById('lastUpdateDate');
    const exportStatsBtn = document.getElementById('exportStatsBtn');
    const bulkExportBtn = document.getElementById('bulkExportBtn');

    if (exportStatsBtn) {
        exportStatsBtn.addEventListener('click', exportStatisticsToExcel);
    }

    if (bulkExportBtn) {
        bulkExportBtn.addEventListener('click', exportAllKitsToExcel);
    }



    let currentCategory = null;

    // Persistence for all kit fields
    let modifiedSTTs = JSON.parse(localStorage.getItem('kitModifiedSTTs') || '{}');
    let modifiedNames = JSON.parse(localStorage.getItem('kitModifiedNames') || '{}');
    let modifiedCodes = JSON.parse(localStorage.getItem('kitModifiedCodes') || '{}');
    let modifiedQuantities = JSON.parse(localStorage.getItem('kitModifiedQuantities') || '{}');
    let modifiedNotes = JSON.parse(localStorage.getItem('kitModifiedNotes') || '{}');

    const defaultItems = [
        { name: "Chưa cập nhật", code: "---", quantity: 0, note: "Đang chờ dữ liệu" }
    ];

    /**
     * Centralized logic to process kit items:
     * 1. Merges data from allKitsData with localStorage modifications.
     * 2. Automatically calculates sequential STT (skipping bold/total rows).
     * 3. Automatically calculates sums for "Tổng cộng" row.
     */
    function getProcessedItems(kitName) {
        let items = (allKitsData[kitName] && allKitsData[kitName].length > 0)
            ? JSON.parse(JSON.stringify(allKitsData[kitName]))
            : JSON.parse(JSON.stringify(defaultItems));

        let sttCounter = 1;
        let totalQty = 0;
        let hasTotalRow = false;

        // 1. First pass: Apply modifications and find/calculate total
        items.forEach((item, index) => {
            const sttKey = `${kitName}-stt-${index}`;
            const nameKey = `${kitName}-name-${index}`;
            const codeKey = `${kitName}-code-${index}`;
            const qtyKey = `${kitName}-qty-${index}`;
            const noteKey = `${kitName}-note-${index}`;

            if (modifiedNames[nameKey] !== undefined) item.name = modifiedNames[nameKey];
            if (modifiedCodes[codeKey] !== undefined) item.code = modifiedCodes[codeKey];
            if (modifiedNotes[noteKey] !== undefined) item.note = modifiedNotes[noteKey];
            if (modifiedQuantities[qtyKey] !== undefined) {
                const qVal = modifiedQuantities[qtyKey];
                item.quantity = (qVal === '-' || qVal === '' || isNaN(parseInt(qVal))) ? 0 : parseInt(qVal);
            }

            const isTotalRow = (item.name && item.name.toLowerCase().includes("tông cộng")) || item.bold;
            if (isTotalRow) {
                hasTotalRow = true;
                item.name = "TỔNG CỘNG"; // Standardize name to Uppercase
                item.bold = true;
                // We'll set the quantity after the loop
            } else {
                totalQty += (item.quantity || 0);
            }
        });

        // 2. Second pass: Set STT and finalize Totals
        items.forEach((item, index) => {
            const sttKey = `${kitName}-stt-${index}`;
            const isTotalRow = item.bold || (item.name && item.name.toLowerCase().includes("tổng cộng"));

            if (isTotalRow) {
                item.stt = modifiedSTTs[sttKey] !== undefined ? modifiedSTTs[sttKey] : "";
                item.quantity = totalQty;
            } else {
                if (modifiedSTTs[sttKey] !== undefined && modifiedSTTs[sttKey] !== "") {
                    item.stt = modifiedSTTs[sttKey];
                    // If it's a number, update counter to maintain sequence
                    if (!isNaN(parseInt(item.stt))) sttCounter = parseInt(item.stt) + 1;
                } else {
                    item.stt = sttCounter++;
                }
            }
        });

        // 3. Add Total row if missing
        if (!hasTotalRow && items !== defaultItems) {
            items.push({
                stt: "",
                name: "TỔNG CỘNG",
                code: "",
                quantity: totalQty,
                bold: true
            });
        }

        return items;
    }

    /**
     * Helper to make footer dynamic if it contains "ĐÃ KIỂM"
     */
    function getDynamicFooter(rawFooter) {
        if (!rawFooter) return "";
        const now = new Date();
        const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

        // Match "ĐÃ KIỂM" or "DA KIEM" case-insensitively
        const footerNorm = rawFooter.toUpperCase();
        if (footerNorm.includes("ĐÃ KIỂM") || footerNorm.includes("DA KIEM")) {
            return `ĐÃ KIỂM ${dateStr}`;
        }
        return rawFooter;
    }

    function renderCategoryGrid(filterText = '') {
        kitGrid.innerHTML = '';
        const searchTerms = filterText.toLowerCase();

        const filteredCats = kitDefinitions.filter(def => {
            const matchesBase = def.baseName.toLowerCase().includes(searchTerms);
            const matchesExtra = def.extraSubKits && def.extraSubKits.some(sub => sub.toLowerCase().includes(searchTerms));

            let matchesNumbered = false;
            if (def.count > 1) {
                for (let i = 1; i <= def.count; i++) {
                    if (`${def.prefix} ${i}`.toLowerCase().includes(searchTerms)) {
                        matchesNumbered = true;
                        break;
                    }
                }
            }

            return matchesBase || matchesExtra || matchesNumbered;
        });

        // Sort alphabetically by baseName (ABC) with natural numeric sorting
        filteredCats.sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { sensitivity: 'base', numeric: true }));

        filteredCats.forEach(def => {
            const card = document.createElement('div');
            card.className = 'kit-card';
            card.innerHTML = `
                <div class="icon-wrapper ${def.color}">
                    <i class="fa-solid ${def.icon} kit-icon"></i>
                </div>
                <div class="kit-name">${def.baseName}</div>
            `;
            card.addEventListener('click', () => handleCategoryClick(def));
            kitGrid.appendChild(card);
        });

        // Add Statistics Card at the end if no searching
        if (!filterText) {
            const statsCard = document.createElement('div');
            statsCard.className = 'kit-card';
            statsCard.innerHTML = `
                <div class="icon-wrapper icon-gray">
                    <i class="fa-solid fa-chart-line kit-icon"></i>
                </div>
                <div class="kit-name">Báo cáo & Thống kê</div>
            `;
            statsCard.addEventListener('click', showStatisticsView);
            kitGrid.appendChild(statsCard);
        }
    }

    function showStatisticsView() {
        modalTitle.textContent = "Báo cáo Tổng hợp & Thống kê";
        modalSelection.style.display = 'none';
        modalDetails.style.display = 'none';
        modalStatistics.style.display = 'block';

        // Calculate Statistics - iterate through ALL possible kit names (aligned with initializeData)
        const kitNames = [];
        kitDefinitions.forEach(def => {
            if (def.count === 1) {
                kitNames.push(def.prefix);
            } else if (def.count > 1) {
                for (let i = 1; i <= def.count; i++) kitNames.push(`${def.prefix} ${i}`);
            } else if (!def.extraSubKits || def.extraSubKits.length === 0) {
                // If count is 0 and no extras, still might exist as a single kit
                kitNames.push(def.prefix);
            }
            if (def.extraSubKits) {
                def.extraSubKits.forEach(sub => kitNames.push(sub));
            }
        });

        let totalPieces = 0;
        const damagedItems = [];

        kitNames.forEach(key => {
            const items = getProcessedItems(key);

            items.forEach((item) => {
                // Skip total rows for damage tracking/summing (the loop will count them otherwise)
                if (item.bold) return;

                const currentName = item.name;
                const currentCode = item.code || '';
                const currentNote = item.note || '';
                const currentQtyValue = item.quantity || 0;

                totalPieces += currentQtyValue;

                // Identify damaged/broken items using whole-word matching
                const damageKeywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hư hỏng", "hhư", "mòn", "rỉ sét"];
                const boundary = "(^|[^a-z0-9àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])";
                const endBoundary = "($|[^a-z0-9àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])";
                const damageRegex = new RegExp(boundary + "(" + damageKeywords.join('|') + ")" + endBoundary, 'i');
                const isDamaged = damageRegex.test(currentNote) || damageRegex.test(currentName) || damageRegex.test(currentCode);

                if (isDamaged) {
                    damagedItems.push({
                        kit: key,
                        name: currentName,
                        quantity: currentQtyValue,
                        note: currentNote
                    });
                }
            });
        });

        // Update counts
        totalKitsSpan.textContent = kitDefinitions.length;
        totalDamagedSpan.textContent = damagedItems.length;

        // Categorical Breakdown - SORTED ABC
        categoryBreakdown.innerHTML = '';
        const sortedCats = [...kitDefinitions].sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { sensitivity: 'base', numeric: true }));

        sortedCats.forEach(def => {
            let subCount = def.count > 0 ? def.count : 0;
            if (def.extraSubKits) subCount += def.extraSubKits.length;
            if (subCount === 0 && def.count === 0) subCount = 1;

            const catBadge = document.createElement('div');
            catBadge.className = 'category-stat-badge';
            catBadge.innerHTML = `
                <span class="cat-name">${def.baseName}</span>
                <span class="cat-count">${subCount}</span>
            `;
            categoryBreakdown.appendChild(catBadge);
        });

        // Render damaged items - SORTED ABC
        damagedItemsList.innerHTML = '';
        if (damagedItems.length === 0) {
            damagedItemsList.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-secondary);">Không có dụng cụ hư hỏng được ghi nhận.</td></tr>`;
        } else {
            // Sort by kit name, then item name
            damagedItems.sort((a, b) => {
                const kitComp = a.kit.localeCompare(b.kit, 'vi', { numeric: true });
                if (kitComp !== 0) return kitComp;
                return a.name.localeCompare(b.name, 'vi');
            });

            damagedItems.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'stats-row-damaged';
                tr.innerHTML = `
                    <td>${item.kit}</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td><span class="damaged-tag">BÁO CÁO</span> ${item.note || 'Cần kiểm tra'}</td>
                `;
                damagedItemsList.appendChild(tr);
            });
        }

        // Update Timestamp
        const now = new Date();
        const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        const dateStr = now.toLocaleDateString('vi-VN');
        lastUpdateDateSpan.textContent = `${timeStr} ngày ${dateStr}`;

        modal.style.display = "block";
        void modal.offsetWidth;
        modal.classList.add('show');
    }

    function exportStatisticsToExcel() {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Bao Cao Tong Hop');

        // Define Columns
        worksheet.columns = [
            { key: 'stt', width: 8 },
            { key: 'name', width: 45 },
            { key: 'extra', width: 25 },
            { key: 'value', width: 35 }
        ];

        const now = new Date();
        const timestamp = `${now.toLocaleTimeString('vi-VN')} ngày ${now.toLocaleDateString('vi-VN')}`;

        // 1. Title Rows
        const titleRow = worksheet.addRow(['BÁO CÁO TỔNG HỢP & THỐNG KÊ DỤNG CỤ']);
        worksheet.mergeCells(`A${titleRow.number}:D${titleRow.number}`);
        titleRow.getCell(1).font = { name: 'Times New Roman', size: 18, bold: true };
        titleRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'center' };
        titleRow.height = 35;

        const subTitleRow = worksheet.addRow([`Thời điểm thống kê: ${timestamp}`]);
        worksheet.mergeCells(`A${subTitleRow.number}:D${subTitleRow.number}`);
        subTitleRow.getCell(1).font = { name: 'Times New Roman', size: 12, italic: true };
        subTitleRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'center' };
        subTitleRow.height = 20;

        worksheet.addRow([]); // Blank row

        // 2. Section I: Categories
        const sec1Row = worksheet.addRow(['I. THỐNG KÊ SỐ LƯỢNG THEO PHÂN LOẠI']);
        worksheet.mergeCells(`A${sec1Row.number}:D${sec1Row.number}`);
        sec1Row.getCell(1).font = { name: 'Times New Roman', size: 14, bold: true, color: { argb: 'FF1E40AF' } };
        sec1Row.height = 25;

        const header1Row = worksheet.addRow(['STT', 'LOẠI BỘ DỤNG CỤ', 'MÃ TIỀN TỐ', 'SỐ LƯỢNG BỘ CON']);
        header1Row.eachCell((cell) => {
            cell.font = { name: 'Times New Roman', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A8A' } }; // Use Deep Navy
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
        });

        const sortedCatsExport = [...kitDefinitions].sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { sensitivity: 'base', numeric: true }));
        sortedCatsExport.forEach((def, idx) => {
            let subCount = def.count > 0 ? def.count : 0;
            if (def.extraSubKits) subCount += def.extraSubKits.length;
            if (subCount === 0 && def.count === 0) subCount = 1;

            const row = worksheet.addRow([idx + 1, def.baseName, def.prefix || "---", subCount]);
            row.eachCell((cell, colNumber) => {
                cell.font = { name: 'Times New Roman', size: 12 };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                if (colNumber === 1 || colNumber === 4) cell.alignment = { horizontal: 'center' };
            });
        });

        worksheet.addRow([]); // Blank row
        worksheet.addRow([]); // Blank row

        // 3. Section II: Damaged Items
        const sec2Row = worksheet.addRow(['II. DANH SÁCH DỤNG CỤ HƯ HỎNG / CẦN BÁO CÁO']);
        worksheet.mergeCells(`A${sec2Row.number}:D${sec2Row.number}`);
        sec2Row.getCell(1).font = { name: 'Times New Roman', size: 14, bold: true, color: { argb: 'FFDC2626' } };
        sec2Row.height = 25;

        const header2Row = worksheet.addRow(['STT', 'BỘ DỤNG CỤ', 'TÊN DỤNG CỤ (SỐ LƯỢNG)', 'GHI CHÚ / TÌNH TRẠNG']);
        header2Row.eachCell((cell) => {
            cell.font = { name: 'Times New Roman', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDC2626' } };
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
        });

        // Collect damaged items logic
        const kitNames = [];
        kitDefinitions.forEach(def => {
            if (def.count === 1) kitNames.push(def.prefix);
            else if (def.count > 1) {
                for (let i = 1; i <= def.count; i++) kitNames.push(`${def.prefix} ${i}`);
            } else if (!def.extraSubKits || def.extraSubKits.length === 0) kitNames.push(def.prefix);
            if (def.extraSubKits) def.extraSubKits.forEach(sub => kitNames.push(sub));
        });

        const damagedItems = [];
        kitNames.forEach(key => {
            const items = getProcessedItems(key);
            items.forEach((item) => {
                if (item.bold) return;

                const currentName = item.name;
                const currentCode = item.code || '';
                const currentNote = item.note || '';
                const currentQty = item.quantity || 0;

                const damageKeywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hư hỏng", "hhư", "mòn", "rỉ sét"];
                const boundary = "(^|[^a-z0-9àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])";
                const endBoundary = "($|[^a-z0-9àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])";
                const damageRegex = new RegExp(boundary + "(" + damageKeywords.join('|') + ")" + endBoundary, 'i');
                if (damageRegex.test(currentNote) || damageRegex.test(currentName) || damageRegex.test(currentCode)) {
                    damagedItems.push({ kit: key, name: `${currentName} (${currentQty})`, note: currentNote });
                }
            });
        });

        damagedItems.sort((a, b) => a.kit.localeCompare(b.kit, 'vi', { numeric: true }));

        if (damagedItems.length === 0) {
            const emptyRow = worksheet.addRow(['', 'Không có dụng cụ hư hỏng ghi nhận', '', '']);
            worksheet.mergeCells(`B${emptyRow.number}:D${emptyRow.number}`);
            emptyRow.getCell(2).alignment = { horizontal: 'center' };
            emptyRow.eachCell(cell => {
                cell.font = { name: 'Times New Roman', size: 12 };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            });
        } else {
            damagedItems.forEach((item, idx) => {
                const row = worksheet.addRow([idx + 1, item.kit, item.name, item.note]);
                row.eachCell((cell, colNumber) => {
                    cell.font = { name: 'Times New Roman', size: 12 };
                    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    if (colNumber === 1) cell.alignment = { horizontal: 'center' };
                    if (colNumber === 4) cell.font.color = { argb: 'FFDC2626' };
                });
            });
        }

        worksheet.addRow([]); // Blank row
        worksheet.addRow([]); // Blank row

        // 4. Signoff section
        const signoffRow1 = worksheet.addRow(['', '', `Ngày ${now.getDate()} tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`]);
        worksheet.mergeCells(`C${signoffRow1.number}:D${signoffRow1.number}`);
        signoffRow1.getCell(3).alignment = { horizontal: 'center' };
        signoffRow1.getCell(3).font = { name: 'Times New Roman', size: 12, italic: true };

        const signoffRow2 = worksheet.addRow(['', '', 'NGƯỜI LẬP BÁO CÁO']);
        worksheet.mergeCells(`C${signoffRow2.number}:D${signoffRow2.number}`);
        signoffRow2.getCell(3).alignment = { horizontal: 'center' };
        signoffRow2.getCell(3).font = { name: 'Times New Roman', size: 12, bold: true };

        const signoffRow3 = worksheet.addRow(['', '', `(Phiên bản: ${APP_VERSION})`]);
        worksheet.mergeCells(`C${signoffRow3.number}:D${signoffRow3.number}`);
        signoffRow3.getCell(3).alignment = { horizontal: 'center' };
        signoffRow3.getCell(3).font = { name: 'Times New Roman', size: 9, italic: true };

        worksheet.addRow([]);
        worksheet.addRow([]);

        const signoffRow4 = worksheet.addRow(['', '', 'NGUYỄN VĂN TÂN']);
        worksheet.mergeCells(`C${signoffRow4.number}:D${signoffRow4.number}`);
        signoffRow4.getCell(3).alignment = { horizontal: 'center' };
        signoffRow4.getCell(3).font = { name: 'Times New Roman', size: 12, bold: true };

        // Save File
        const fileDate = now.toLocaleDateString('vi-VN').replace(/\//g, '-');
        workbook.xlsx.writeBuffer().then(buffer => {
            saveAs(new Blob([buffer]), `Bao_Cao_Tong_Hop_${fileDate}.xlsx`);
        });
    }

    function handleCategoryClick(def) {
        currentCategory = def;
        modalTitle.textContent = def.baseName;

        if (def.count > 1 || (def.extraSubKits && def.extraSubKits.length > 0)) {
            showSelectionView(def);
        } else {
            showDetailsView(def.prefix);
            backBtn.style.display = 'none';
        }

        modalStatistics.style.display = 'none';
        modal.style.display = "block";
        void modal.offsetWidth;
        modal.classList.add('show');
    }

    function showSelectionView(def) {
        modalSelection.innerHTML = '';
        modalSelection.style.display = 'grid';
        modalDetails.style.display = 'none';
        modalTitle.textContent = def.baseName;

        let allSubKits = [];

        for (let i = 1; i <= def.count; i++) {
            allSubKits.push(`${def.prefix} ${i}`);
        }

        if (def.extraSubKits) {
            allSubKits = allSubKits.concat(def.extraSubKits);
        }

        // Sort alphabetically (ABC) with natural numeric sorting (1, 2, 10...)
        allSubKits.sort((a, b) => a.localeCompare(b, 'vi', { sensitivity: 'base', numeric: true }));

        allSubKits.forEach(subName => {
            const btn = document.createElement('button');
            btn.className = 'sub-kit-btn';
            btn.textContent = subName;
            btn.addEventListener('click', () => showDetailsView(subName, true));
            modalSelection.appendChild(btn);
        });
    }

    function showDetailsView(kitName, showBack = false) {
        modalSelection.style.display = 'none';
        modalDetails.style.display = 'block';
        modalTitle.textContent = kitName;

        if (showBack) {
            backBtn.style.display = 'flex';
        }

        // Add Export Button if not exists
        let exportBtn = document.getElementById('exportBtn');
        if (!exportBtn) {
            exportBtn = document.createElement('button');
            exportBtn.id = 'exportBtn';
            exportBtn.className = 'back-btn'; // Reusing style
            exportBtn.innerHTML = '<i class="fa-solid fa-file-excel"></i> Xuất Excel';
            exportBtn.style.marginLeft = 'auto'; // Float right

            // Insert after Search Input or append to container
            const searchContainer = document.querySelector('.search-in-modal');
            if (searchContainer) {
                searchContainer.style.display = 'flex'; // Ensure flex layout
                searchContainer.style.gap = '10px';
                searchContainer.appendChild(exportBtn);
            }
        }

        // Update listener
        exportBtn.onclick = () => exportToExcel(kitName);

        renderTable(kitName);
    }



    // Export Functionality
    function exportToExcel(kitName) {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet(kitName.substring(0, 31)); // Excel limit

        setupExcelSheet(worksheet, kitName);

        // Save File
        workbook.xlsx.writeBuffer().then(buffer => {
            saveAs(new Blob([buffer]), `${kitName}.xlsx`);
        });
    }

    function exportAllKitsToExcel() {
        const workbook = new ExcelJS.Workbook();

        // Collect all kits names
        const allKitNames = [];
        kitDefinitions.forEach(def => {
            if (def.count === 1) allKitNames.push(def.prefix);
            else if (def.count > 1) {
                for (let i = 1; i <= def.count; i++) allKitNames.push(`${def.prefix} ${i}`);
            }
            if (def.extraSubKits) def.extraSubKits.forEach(sub => allKitNames.push(sub));
        });

        // Unique and sort
        const sortedKits = [...new Set(allKitNames)].sort((a, b) => a.localeCompare(b, 'vi', { numeric: true }));

        sortedKits.forEach(kitName => {
            const sheetName = kitName.replace(/[\\\/\?\*\[\]]/g, '').substring(0, 31);
            const worksheet = workbook.addWorksheet(sheetName);
            setupExcelSheet(worksheet, kitName);
        });

        // Save File
        const now = new Date();
        const dateStr = now.toLocaleDateString('vi-VN').replace(/\//g, '-');
        workbook.xlsx.writeBuffer().then(buffer => {
            saveAs(new Blob([buffer]), `TONG_HOP_TAT_CA_BO_DUNG_CU_${dateStr}.xlsx`);
        });
    }

    /**
     * Shared logic to setup an individual Excel sheet for a kit
     */
    function setupExcelSheet(worksheet, kitName) {
        // Define Columns
        worksheet.columns = [
            { key: 'stt', width: 8 },
            { key: 'name', width: 50 },
            { key: 'code', width: 20 },
            { key: 'quantity', width: 15 },
            { key: 'note', width: 35 }
        ];

        // 1. Kit Title Row
        const titleRow = worksheet.addRow([kitName.toUpperCase()]);
        worksheet.mergeCells(`A${titleRow.number}:E${titleRow.number}`);
        titleRow.getCell(1).font = { name: 'Times New Roman', size: 18, bold: true, color: { argb: 'FFFFFFFF' } };
        titleRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E40AF' } };
        titleRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'center' };
        titleRow.height = 35;

        // 2. Table Headers
        const headerRow = worksheet.addRow(['STT', 'DANH MỤC DỤNG CỤ', 'MÃ SỐ', 'SỐ LƯỢNG', 'GHI CHÚ']);
        headerRow.eachCell((cell) => {
            cell.font = { name: 'Times New Roman', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A8A' } }; // Deep Navy
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
        });

        // 3. Add Data Rows
        const items = getProcessedItems(kitName);
        items.forEach((item) => {
            const rowData = [item.stt, item.name, item.code || '', item.quantity, item.note || ''];
            const row = worksheet.addRow(rowData);
            row.eachCell((cell, colNumber) => {
                cell.font = { name: 'Times New Roman', size: 12 };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                if (colNumber === 1 || colNumber === 4) cell.alignment = { horizontal: 'center' };
                if (item.bold) {
                    cell.font.bold = true;
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF1F5F9' } };
                    cell.font.color = { argb: 'FF1E3A8A' };
                    if (item.name.toUpperCase().includes('TỔNG CỘNG')) cell.font.size = 15;
                }
            });
        });

        // 4. Footer Row
        const itemsArray = allKitsData[kitName];
        const rawFooter = (itemsArray && itemsArray.footer) ? itemsArray.footer : '';
        if (rawFooter) {
            const dynamicFooter = getDynamicFooter(rawFooter);
            const footerRow = worksheet.addRow([dynamicFooter]);
            worksheet.mergeCells(`A${footerRow.number}:E${footerRow.number}`);
            footerRow.getCell(1).font = { name: 'Times New Roman', size: 12, italic: true, bold: true };
            footerRow.getCell(1).alignment = { horizontal: 'right' };
            footerRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } };
            footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        }
    }



    function renderTable(kitName) {
        modalItemsList.innerHTML = '';
        const items = getProcessedItems(kitName);

        items.forEach((item, index) => {
            const row = document.createElement('tr');
            if (item.bold) {
                row.classList.add('total-row');
            }

            const sttKey = `${kitName}-stt-${index}`;
            const nameKey = `${kitName}-name-${index}`;
            const codeKey = `${kitName}-code-${index}`;
            const qtyKey = `${kitName}-qty-${index}`;
            const noteKey = `${kitName}-note-${index}`;

            const origSource = (allKitsData[kitName] && allKitsData[kitName][index]) ? allKitsData[kitName][index] : { stt: '', name: '', code: '', quantity: 0 };
            const defQty = origSource.quantity > 0 ? origSource.quantity : (origSource.quantity === 0 ? '0' : '-');

            row.innerHTML = `
                <td contenteditable="${!item.bold}" class="edit-cell ${modifiedSTTs[sttKey] ? 'note-edited' : ''}" data-key="${sttKey}" data-type="stt" data-original="${origSource.stt || ''}">${item.stt}</td>
                <td contenteditable="${!item.bold}" class="edit-cell ${modifiedNames[nameKey] ? 'note-edited' : ''}" data-key="${nameKey}" data-type="name" data-original="${origSource.name || ''}">${item.name}</td>
                <td contenteditable="${!item.bold}" class="edit-cell ${modifiedCodes[codeKey] ? 'note-edited' : ''}" data-key="${codeKey}" data-type="code" data-original="${origSource.code || ''}">${item.code || ''}</td>
                <td contenteditable="${!item.bold}" class="edit-cell ${modifiedQuantities[qtyKey] ? 'note-edited' : ''}" data-key="${qtyKey}" data-type="qty" data-original="${defQty}">${item.quantity}</td>
                <td contenteditable="${!item.bold}" class="edit-cell ${modifiedNotes[noteKey] ? 'note-edited' : ''}" data-key="${noteKey}" data-type="note" data-original="${origSource.note || ''}">${item.note || ''}</td>
            `;
            modalItemsList.appendChild(row);
        });

        // Add Listeners for all editable cells
        document.querySelectorAll('.edit-cell').forEach(cell => {
            cell.addEventListener('click', (e) => {
                if (!e.target.innerText.trim()) e.target.focus();
            });

            cell.addEventListener('blur', (e) => {
                const key = e.target.getAttribute('data-key');
                const type = e.target.getAttribute('data-type');
                const originalValue = String(e.target.getAttribute('data-original')).trim();
                const newValue = e.target.innerText.trim();

                let store;
                let storageKey;

                switch (type) {
                    case 'stt': store = modifiedSTTs; storageKey = 'kitModifiedSTTs'; break;
                    case 'name': store = modifiedNames; storageKey = 'kitModifiedNames'; break;
                    case 'code': store = modifiedCodes; storageKey = 'kitModifiedCodes'; break;
                    case 'qty': store = modifiedQuantities; storageKey = 'kitModifiedQuantities'; break;
                    case 'note': store = modifiedNotes; storageKey = 'kitModifiedNotes'; break;
                }

                if (newValue !== originalValue) {
                    store[key] = newValue;
                    e.target.classList.add('note-edited');
                } else {
                    delete store[key];
                    e.target.classList.remove('note-edited');
                }
                localStorage.setItem(storageKey, JSON.stringify(store));

                // Auto-refresh automation if needed
                if (type === 'qty' || type === 'name' || type === 'stt') {
                    renderTable(kitName);
                }
            });

            cell.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.blur();
                }
            });
        });

        const footerDiv = document.getElementById('modalFooter');
        if (footerDiv) {
            const itemsArray = allKitsData[kitName];
            const rawFooter = (itemsArray && itemsArray.footer) ? itemsArray.footer : '';
            const dynamicFooter = getDynamicFooter(rawFooter);
            footerDiv.textContent = dynamicFooter;
            footerDiv.style.display = dynamicFooter ? 'block' : 'none';
        }
    }

    backBtn.addEventListener('click', () => {
        if (currentCategory) {
            showSelectionView(currentCategory);
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
            modalSelection.style.display = 'none';
            modalDetails.style.display = 'none';
            currentCategory = null;
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    searchInput.addEventListener('input', (e) => {
        renderCategoryGrid(e.target.value);
    });

    // Smart Data Loading - Fetch from GitHub if configured
    const token = localStorage.getItem('githubToken');
    const owner = localStorage.getItem('ghOwner');
    const repo = localStorage.getItem('ghRepo');

    if (token && owner && repo) {
        console.log("Fetching from GitHub...");
        fetch(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/data.js`, {
            headers: { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' }
        })
            .then(r => r.ok ? r.json() : Promise.reject())
            .then(data => {
                const script = document.createElement('script');
                script.textContent = decodeURIComponent(escape(atob(data.content)));
                document.body.appendChild(script);
                console.log("GitHub data loaded");
                renderCategoryGrid();
                updateVersionBadge();
            })
            .catch(() => {
                console.warn("GitHub failed, loading local");
                loadLocal();
            });
    } else {
        loadLocal();
    }

    function loadLocal() {
        const s = document.createElement('script');
        s.src = 'data.js?v=' + Date.now();
        s.onload = () => { renderCategoryGrid(); updateVersionBadge(); };
        s.onerror = () => alert("Lỗi tải dữ liệu!");
        document.body.appendChild(s);
    }

    function updateVersionBadge() {
        const badge = document.getElementById('appVersion');
        const footerUpdate = document.getElementById('lastUpdateFooter');
        const versionStr = typeof APP_VERSION !== 'undefined' ? APP_VERSION : "v2.0 PRO (FINAL)";

        if (badge) {
            badge.textContent = versionStr;
            badge.addEventListener('click', () => {
                const orig = badge.textContent;
                badge.textContent = "✓ Sẵn sàng";
                badge.style.background = "#22c55e";
                setTimeout(() => { badge.textContent = orig; badge.style.background = ""; }, 2000);
            });
        }

        if (footerUpdate) {
            footerUpdate.textContent = versionStr;
        }
    }
});
