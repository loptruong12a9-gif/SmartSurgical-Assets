
// script.js - Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Check if data is already loaded, if not, wait
    const checkReady = setInterval(() => {
        if (typeof kitDefinitions !== 'undefined' && typeof allKitsData !== 'undefined') {
            clearInterval(checkReady);
            initApp();
        }
    }, 50);

    function initApp() {
        const kitGrid = document.getElementById('kitGrid');
        const searchInput = document.getElementById('searchInput');
        const modal = document.getElementById('detailModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalItemsList = document.getElementById('modalItemsList');
        const closeBtn = document.querySelector('.close-btn');
        const modalSelection = document.getElementById('modalSelection');
        const modalDetails = document.getElementById('modalDetails');
        const backBtn = document.getElementById('backBtn');
        const modalStatistics = document.getElementById('modalStatistics');
        const totalKitsSpan = document.getElementById('totalKits');
        const totalDamagedSpan = document.getElementById('totalDamaged');
        const damagedItemsList = document.getElementById('damagedItemsList');
        const categoryBreakdown = document.getElementById('categoryBreakdown');
        const exportStatsBtn = document.getElementById('exportStatsBtn');
        const bulkExportBtn = document.getElementById('bulkExportBtn');

        if (exportStatsBtn) exportStatsBtn.addEventListener('click', exportStatisticsToExcel);
        if (bulkExportBtn) bulkExportBtn.addEventListener('click', exportAllKitsToExcel);
        if (searchInput) searchInput.addEventListener('input', (e) => renderCategoryGrid(e.target.value));
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (backBtn) backBtn.addEventListener('click', () => { if (currentCategory) showSelectionView(currentCategory); });

        let currentCategory = null;
        let modifiedSTTs = JSON.parse(localStorage.getItem('kitModifiedSTTs') || '{}');
        let modifiedNames = JSON.parse(localStorage.getItem('kitModifiedNames') || '{}');
        let modifiedCodes = JSON.parse(localStorage.getItem('kitModifiedCodes') || '{}');
        let modifiedQuantities = JSON.parse(localStorage.getItem('kitModifiedQuantities') || '{}');
        let modifiedNotes = JSON.parse(localStorage.getItem('kitModifiedNotes') || '{}');

        const defaultItems = [
            { name: "Chưa cập nhật", code: "---", quantity: 0, note: "Đang chờ dữ liệu" }
        ];

        function calculateProposed(note) {
            if (!note) return 0;
            const keywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hhư", "mòn", "rỉ sét", "cong", "mất", "lệch", "thanh lý", "thanh lí"];
            const lowerNote = note.toLowerCase().normalize('NFC');

            // Tách ghi chú theo các dấu ngăn cách để xử lý từng mục (VD: "Gãy 1, Hư 2")
            const parts = lowerNote.split(/[,;+.]/);
            let totalProposed = 0;
            let hasAnyKeyword = false;

            parts.forEach(part => {
                const isDamagedPart = keywords.some(kw => part.includes(kw));
                if (isDamagedPart) {
                    hasAnyKeyword = true;
                    const matches = part.match(/\d+/g);
                    if (matches) {
                        matches.forEach(m => {
                            const val = parseInt(m);
                            // Chỉ cộng các số nhỏ (thường là số lượng), bỏ qua số lớn (thường là năm hoặc kích thước)
                            if (val > 0 && val < 50) {
                                totalProposed += val;
                            }
                        });
                    } else {
                        // Nếu có từ khóa nhưng không ghi số, mặc định tính là 1 cho phần đó
                        totalProposed += 1;
                    }
                }
            });

            // Nếu phát hiện từ khóa mà chưa có số lượng, mặc định đề xuất ít nhất 1
            if (totalProposed === 0 && hasAnyKeyword) return 1;

            return totalProposed;
        }

        function getProcessedItems(kitName) {
            const normalizedKey = kitName.normalize('NFC');
            let items = (allKitsData[normalizedKey] && allKitsData[normalizedKey].length > 0)
                ? JSON.parse(JSON.stringify(allKitsData[normalizedKey]))
                : JSON.parse(JSON.stringify(defaultItems));

            let sttCounter = 1;
            let totalQty = 0;
            let hasTotalRow = false;

            items.forEach((item, index) => {
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

                const isTotalRow = (item.name && item.name.toLowerCase().includes("tổng cộng")) || item.bold;
                if (isTotalRow) {
                    hasTotalRow = true;
                    item.name = "TỔNG CỘNG";
                    item.bold = true;
                } else {
                    totalQty += (item.quantity || 0);
                }
            });

            items.forEach((item, index) => {
                const sttKey = `${kitName}-stt-${index}`;
                const isTotalRow = item.bold || (item.name && item.name.toLowerCase().includes("tổng cộng"));

                if (isTotalRow) {
                    item.stt = modifiedSTTs[sttKey] !== undefined ? modifiedSTTs[sttKey] : "";
                    item.quantity = totalQty;
                } else {
                    if (modifiedSTTs[sttKey] !== undefined && modifiedSTTs[sttKey] !== "") {
                        item.stt = modifiedSTTs[sttKey];
                        if (!isNaN(parseInt(item.stt))) sttCounter = parseInt(item.stt) + 1;
                    } else {
                        item.stt = sttCounter++;
                    }
                }
            });

            const isDefault = items.length === 1 && items[0].name === "Chưa cập nhật";
            if (!hasTotalRow && !isDefault) {
                items.push({ stt: "", name: "TỔNG CỘNG", code: "", quantity: totalQty, bold: true });
            }
            return items;
        }

        function getDynamicFooter(rawFooter) {
            if (!rawFooter) return "";
            const now = new Date();
            const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
            if (rawFooter.toUpperCase().includes("ĐÃ KIỂM") || rawFooter.toUpperCase().includes("DA KIEM")) {
                return `ĐÃ KIỂM ${dateStr}`;
            }
            return rawFooter;
        }

        // --- EXPORT LOGIC ---
        function applyProfessionalStyle(worksheet) {
            worksheet.views = [{ showGridLines: false }];
            worksheet.pageSetup = {
                paperSize: 9, orientation: 'portrait', fitToPage: true, fitToWidth: 1,
                margins: { left: 0.5, right: 0.5, top: 0.5, bottom: 0.5, header: 0.3, footer: 0.3 }
            };
        }

        function setBorder(cell) {
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        }

        function setupExcelSheet(worksheet, kitName) {
            const items = getProcessedItems(kitName);
            const titleRow = worksheet.addRow([kitName.toUpperCase()]);
            worksheet.mergeCells(`A${titleRow.number}:E${titleRow.number}`);
            titleRow.getCell(1).font = { name: 'Times New Roman', size: 16, bold: true };
            titleRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2E8F0' } };
            titleRow.getCell(1).alignment = { horizontal: 'center', vertical: 'middle' };
            titleRow.height = 30;

            const headerRow = worksheet.addRow(['STT', 'DANH MỤC DỤNG CỤ', 'MÃ SỐ', 'SỐ LƯỢNG', 'GHI CHÚ']);
            headerRow.height = 25;
            for (let i = 1; i <= 5; i++) {
                const cell = headerRow.getCell(i);
                cell.font = { name: 'Times New Roman', size: 12, bold: true };
                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFCBD5E1' } };
                cell.alignment = { horizontal: 'center', vertical: 'middle' };
                setBorder(cell);
            }

            items.forEach((item) => {
                const row = worksheet.addRow([item.stt, item.name, item.code || '', item.quantity, item.note || '']);
                for (let i = 1; i <= 5; i++) {
                    const cell = row.getCell(i);
                    cell.font = { name: 'Times New Roman', size: 11, bold: !!item.bold };
                    cell.alignment = { vertical: 'middle', wrapText: true };
                    setBorder(cell);
                    if (i === 1 || i === 4) cell.alignment.horizontal = 'center';
                    if (item.bold) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF1F5F9' } };
                }
            });

            const normalizedKey = kitName.normalize('NFC');
            const footerText = (allKitsData[normalizedKey] && allKitsData[normalizedKey].footer) ? getDynamicFooter(allKitsData[normalizedKey].footer) : '';
            if (footerText) {
                const footerRow = worksheet.addRow([footerText]);
                worksheet.mergeCells(`A${footerRow.number}:E${footerRow.number}`);
                footerRow.getCell(1).font = { name: 'Times New Roman', size: 11, italic: true, bold: true };
                footerRow.getCell(1).alignment = { horizontal: 'right' };
            }
            worksheet.getColumn(1).width = 6; worksheet.getColumn(2).width = 40; worksheet.getColumn(3).width = 15; worksheet.getColumn(4).width = 10; worksheet.getColumn(5).width = 30;
        }

        function exportStatisticsToExcel() {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Báo Cáo Tổng Hợp');
            applyProfessionalStyle(worksheet);

            const now = new Date();
            const fullDateStr = `Thời gian lập: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} - Ngày ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

            const titleRow = worksheet.addRow(['BÁO CÁO TỔNG HỢP & THỐNG KÊ DỤNG CỤ']);
            worksheet.mergeCells('A1:F1');
            titleRow.getCell(1).font = { name: 'Times New Roman', size: 18, bold: true };
            titleRow.getCell(1).alignment = { horizontal: 'center' };
            titleRow.height = 35;

            const dateRow = worksheet.addRow([fullDateStr]);
            worksheet.mergeCells('A2:F2');
            dateRow.getCell(1).font = { name: 'Times New Roman', size: 11, italic: true };
            dateRow.getCell(1).alignment = { horizontal: 'center' };

            worksheet.addRow([]);
            const sec1Header = worksheet.addRow(['I. THỐNG KÊ SỬ DỤNG THEO DANH MỤC']);
            worksheet.mergeCells(`A${sec1Header.number}:F${sec1Header.number}`);
            sec1Header.getCell(1).font = { name: 'Times New Roman', size: 14, bold: true, color: { argb: 'FF1E3A8A' } };

            const table1Header = worksheet.addRow(['STT', 'DANH MỤC BỘ DỤNG CỤ', 'MÃ TIỀN TỐ', 'SỐ BỘ CON', 'TỔNG DỤNG CỤ', '']);
            worksheet.mergeCells(`E${table1Header.number}:F${table1Header.number}`);
            for (let i = 1; i <= 6; i++) {
                const cell = table1Header.getCell(i);
                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A8A' } };
                cell.font = { name: 'Times New Roman', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
                cell.alignment = { horizontal: 'center', vertical: 'middle' };
                setBorder(cell);
            }

            const sortedKits = [...kitDefinitions].sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true }));
            sortedKits.forEach((def, i) => {
                let subCount = def.count > 0 ? def.count : (def.extraSubKits ? def.extraSubKits.length : 1);
                let totalInCat = 0;
                const names = [];
                if (def.count === 1) names.push(def.prefix);
                else for (let j = 1; j <= def.count; j++) names.push(`${def.prefix} ${j}`);
                if (def.extraSubKits) def.extraSubKits.forEach(s => names.push(s));
                names.forEach(n => {
                    const items = getProcessedItems(n);
                    items.forEach(it => { if (!it.bold) totalInCat += (it.quantity || 0); });
                });
                const row = worksheet.addRow([i + 1, def.baseName, def.prefix || '---', subCount, totalInCat, '']);
                worksheet.mergeCells(`E${row.number}:F${row.number}`);
                for (let j = 1; j <= 6; j++) {
                    const cell = row.getCell(j);
                    cell.font = { name: 'Times New Roman', size: 12 };
                    setBorder(cell);
                    if (j !== 2) cell.alignment = { horizontal: 'center' };
                }
            });

            worksheet.addRow([]);
            const sec2Header = worksheet.addRow(['II. DANH SÁCH DỤNG CỤ HƯ HỎNG & ĐỀ XUẤT MUA MỚI']);
            worksheet.mergeCells(`A${sec2Header.number}:F${sec2Header.number}`);
            sec2Header.getCell(1).font = { name: 'Times New Roman', size: 14, bold: true, color: { argb: 'FFB91C1C' } };

            const table2Header = worksheet.addRow(['STT', 'BỘ DỤNG CỤ', 'TÊN DỤNG CỤ', 'SỐ LƯỢNG', 'GHI CHÚ', 'ĐỀ XUẤT MUA']);
            for (let i = 1; i <= 6; i++) {
                const cell = table2Header.getCell(i);
                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFB91C1C' } };
                cell.font = { name: 'Times New Roman', size: 12, bold: true, color: { argb: 'FFFFFFFF' } };
                cell.alignment = { horizontal: 'center', vertical: 'middle' };
                setBorder(cell);
            }

            const damagedArr = [];
            kitDefinitions.forEach(d => {
                const names = [];
                if (d.count === 1) names.push(d.prefix);
                else for (let j = 1; j <= d.count; j++) names.push(`${d.prefix} ${j}`);
                if (d.extraSubKits) d.extraSubKits.forEach(s => names.push(s));
                names.forEach(k => {
                    getProcessedItems(k).forEach(it => {
                        if (it.bold) return;
                        const nt = (it.note || "").toLowerCase();
                        const keywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hhư", "mòn", "rỉ sét", "cong", "mất", "lệch"];
                        if (keywords.some(kw => nt.includes(kw))) {
                            damagedArr.push({ kit: k, name: it.name, qty: it.quantity, note: it.note, proposed: calculateProposed(it.note) });
                        }
                    });
                });
            });

            if (damagedArr.length === 0) {
                const empty = worksheet.addRow(['', 'Không có dụng cụ hư hỏng', '', '', '', '']);
                worksheet.mergeCells(`B${empty.number}:F${empty.number}`);
                for (let i = 1; i <= 6; i++) {
                    const cell = empty.getCell(i);
                    setBorder(cell);
                    cell.font = { name: 'Times New Roman' };
                }
            } else {
                damagedArr.sort((a, b) => a.kit.localeCompare(b.kit, 'vi', { numeric: true })).forEach((d, i) => {
                    const row = worksheet.addRow([i + 1, d.kit, d.name, d.qty, d.note, d.proposed]);
                    for (let j = 1; j <= 6; j++) {
                        const cell = row.getCell(j);
                        cell.font = { name: 'Times New Roman', size: 12 };
                        cell.alignment = { vertical: 'middle', wrapText: true };
                        setBorder(cell);
                        if (j !== 2 && j !== 3 && j !== 5) cell.alignment.horizontal = 'center';
                        if (j === 6) { cell.font.bold = true; cell.font.color = { argb: 'FFB91C1C' }; }
                    }
                });
            }

            worksheet.addRow([]);
            const sign = worksheet.addRow(['', '', '', '', 'NGƯỜI LẬP BÁO CÁO', '']);
            worksheet.mergeCells(`E${sign.number}:F${sign.number}`);
            sign.getCell(5).font = { name: 'Times New Roman', size: 12, bold: true };
            sign.getCell(5).alignment = { horizontal: 'center' };
            const myNameSign = worksheet.addRow(['', '', '', '', 'NGUYỄN VĂN TÂN', '']);
            worksheet.mergeCells(`E${myNameSign.number}:F${myNameSign.number}`);
            myNameSign.getCell(5).font = { name: 'Times New Roman', size: 12, bold: true };
            myNameSign.getCell(5).alignment = { horizontal: 'center' };
            myNameSign.height = 70;

            worksheet.getColumn(1).width = 6; worksheet.getColumn(2).width = 20; worksheet.getColumn(3).width = 30; worksheet.getColumn(4).width = 10; worksheet.getColumn(5).width = 30; worksheet.getColumn(6).width = 15;
            workbook.xlsx.writeBuffer().then(buf => {
                saveAs(new Blob([buf]), `Bao_Cao_Tong_Hop_${now.toLocaleDateString('vi-VN').replace(/\//g, '-')}.xlsx`);
            });
        }

        function exportToExcel(kitName) {
            const workbook = new ExcelJS.Workbook();
            const sheetName = kitName.substring(0, 31).normalize('NFC').replace(/[\\\/\?\*\[\]]/g, '');
            const worksheet = workbook.addWorksheet(sheetName);
            applyProfessionalStyle(worksheet);
            setupExcelSheet(worksheet, kitName);
            workbook.xlsx.writeBuffer().then(buf => {
                saveAs(new Blob([buf]), `${kitName.replace(/\s+/g, '_')}.xlsx`);
            });
        }

        async function exportAllKitsToExcel() {
            if (!confirm('Xuất tất cả các bộ (mỗi bộ 1 Sheet)?')) return;
            const workbook = new ExcelJS.Workbook();
            const allKeys = [];
            kitDefinitions.sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true })).forEach(def => {
                if (def.count === 1) allKeys.push(def.prefix);
                else for (let i = 1; i <= def.count; i++) allKeys.push(`${def.prefix} ${i}`);
                if (def.extraSubKits) def.extraSubKits.forEach(s => allKeys.push(s));
            });
            allKeys.forEach(k => {
                const sn = k.substring(0, 31).normalize('NFC').replace(/[\\\/\?\*\[\]]/g, '');
                const ws = workbook.addWorksheet(sn);
                applyProfessionalStyle(ws); setupExcelSheet(ws, k);
            });
            workbook.xlsx.writeBuffer().then(buf => {
                const d = new Date().toLocaleDateString('vi-VN').replace(/\//g, '-');
                saveAs(new Blob([buf]), `TONG_HOP_TAT_CA_BO_${d}.xlsx`);
            });
        }

        // --- UI LOGIC ---
        function renderCategoryGrid(filterText = '') {
            kitGrid.innerHTML = '';
            const searchTerms = filterText.toLowerCase();
            const filtered = kitDefinitions.filter(def => {
                const mBase = def.baseName.toLowerCase().includes(searchTerms);
                const mExtra = def.extraSubKits && def.extraSubKits.some(sub => sub.toLowerCase().includes(searchTerms));
                let mNum = false;
                if (def.count > 1) { for (let i = 1; i <= def.count; i++) { if (`${def.prefix} ${i}`.toLowerCase().includes(searchTerms)) { mNum = true; break; } } }
                return mBase || mExtra || mNum;
            });
            filtered.sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true }));
            filtered.forEach(def => {
                const card = document.createElement('div');
                card.className = 'kit-card';
                card.innerHTML = `<div class="icon-wrapper ${def.color}"><i class="fa-solid ${def.icon} kit-icon"></i></div><div class="kit-name">${def.baseName}</div>`;
                card.addEventListener('click', () => handleCategoryClick(def));
                kitGrid.appendChild(card);
            });
            if (!filterText) {
                const statsCard = document.createElement('div');
                statsCard.className = 'kit-card';
                statsCard.innerHTML = `<div class="icon-wrapper icon-gray"><i class="fa-solid fa-chart-line kit-icon"></i></div><div class="kit-name">Báo cáo & Thống kê</div>`;
                statsCard.addEventListener('click', showStatisticsView);
                kitGrid.appendChild(statsCard);
            }
        }

        function showStatisticsView() {
            modalTitle.textContent = "Báo cáo Tổng hợp & Thống kê";
            modalSelection.style.display = 'none'; modalDetails.style.display = 'none'; modalStatistics.style.display = 'block';
            totalKitsSpan.textContent = kitDefinitions.length;

            const kitNames = [];
            kitDefinitions.forEach(def => {
                if (def.count === 1) kitNames.push(def.prefix);
                else if (def.count > 1) for (let i = 1; i <= def.count; i++) kitNames.push(`${def.prefix} ${i}`);
                if (def.extraSubKits) def.extraSubKits.forEach(sub => kitNames.push(sub));
            });

            let pieces = 0; const damaged = [];
            kitNames.forEach(key => {
                getProcessedItems(key).forEach((item) => {
                    if (item.bold) return;
                    pieces += (item.quantity || 0);
                    const nt = (item.note || "").toLowerCase();
                    const keywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hhư", "mòn", "rỉ sét", "cong", "mất", "lệch"];
                    if (keywords.some(kw => nt.includes(kw))) {
                        damaged.push({ kit: key, name: item.name, quantity: item.quantity, note: item.note, proposed: calculateProposed(item.note) });
                    }
                });
            });
            totalDamagedSpan.textContent = damaged.length;

            categoryBreakdown.innerHTML = '';
            kitDefinitions.sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true })).forEach(def => {
                let subCount = def.count > 0 ? def.count : (def.extraSubKits ? def.extraSubKits.length : 1);
                const badge = document.createElement('div');
                badge.className = 'category-stat-badge';
                badge.innerHTML = `<span class="cat-name">${def.baseName}</span><span class="cat-count">${subCount}</span>`;
                categoryBreakdown.appendChild(badge);
            });

            damagedItemsList.innerHTML = '';
            if (damaged.length === 0) damagedItemsList.innerHTML = `<tr><td colspan="5" style="text-align: center;">Không có hư hỏng.</td></tr>`;
            else {
                damaged.sort((a, b) => a.kit.localeCompare(b.kit, 'vi', { numeric: true })).forEach(it => {
                    const tr = document.createElement('tr');
                    const safeName = it.name || "---";
                    const safeQty = it.quantity !== undefined ? it.quantity : 0;
                    const safeNote = it.note || "";
                    const safeProposed = it.proposed !== undefined ? it.proposed : 0;
                    tr.innerHTML = `<td>${it.kit}</td><td>${safeName}</td><td>${safeQty}</td><td style="color:var(--danger)">${safeNote}</td><td style="font-weight:bold; color:var(--primary-color)">${safeProposed}</td>`;
                    damagedItemsList.appendChild(tr);
                });
            }
            modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
        }

        function handleCategoryClick(def) {
            currentCategory = def; modalTitle.textContent = def.baseName;
            if (def.count > 1 || (def.extraSubKits && def.extraSubKits.length > 0)) showSelectionView(def);
            else { showDetailsView(def.prefix); backBtn.style.display = 'none'; }
            modalStatistics.style.display = 'none'; modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
        }

        function showSelectionView(def) {
            modalSelection.innerHTML = ''; modalSelection.style.display = 'grid'; modalDetails.style.display = 'none';
            let sub = [];
            for (let i = 1; i <= def.count; i++) sub.push(`${def.prefix} ${i}`);
            if (def.extraSubKits) sub = sub.concat(def.extraSubKits);
            sub.sort((a, b) => a.localeCompare(b, 'vi', { numeric: true })).forEach(name => {
                const btn = document.createElement('button'); btn.className = 'sub-kit-btn'; btn.textContent = name;
                btn.addEventListener('click', () => showDetailsView(name, true));
                modalSelection.appendChild(btn);
            });
        }

        function showDetailsView(kitName, showBack = false) {
            modalSelection.style.display = 'none'; modalDetails.style.display = 'block'; modalTitle.textContent = kitName;
            backBtn.style.display = showBack ? 'flex' : 'none';
            let b = document.getElementById('exportBtn');
            if (!b) {
                b = document.createElement('button'); b.id = 'exportBtn'; b.className = 'back-btn';
                b.innerHTML = '<i class="fa-solid fa-file-excel"></i> Xuất Excel'; b.style.marginLeft = 'auto';
                const sc = document.querySelector('.search-in-modal'); if (sc) sc.appendChild(b);
            }
            b.onclick = () => exportToExcel(kitName);
            renderTable(kitName);
        }

        function renderTable(kitName) {
            modalItemsList.innerHTML = '';
            const items = getProcessedItems(kitName);
            items.forEach((item, index) => {
                const row = document.createElement('tr'); if (item.bold) row.classList.add('total-row');
                const sk = `${kitName}-stt-${index}`, nk = `${kitName}-name-${index}`, ck = `${kitName}-code-${index}`, qk = `${kitName}-qty-${index}`, ntk = `${kitName}-note-${index}`;
                row.innerHTML = `
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedSTTs[sk] ? 'note-edited' : ''}" data-key="${sk}" data-type="stt">${item.stt !== undefined ? item.stt : ''}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedNames[nk] ? 'note-edited' : ''}" data-key="${nk}" data-type="name">${item.name || ''}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedCodes[ck] ? 'note-edited' : ''}" data-key="${ck}" data-type="code">${item.code || ''}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedQuantities[qk] ? 'note-edited' : ''}" data-key="${qk}" data-type="qty">${item.quantity !== undefined ? item.quantity : 0}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedNotes[ntk] ? 'note-edited' : ''}" data-key="${ntk}" data-type="note">${item.note || ''}</td>
                `;
                modalItemsList.appendChild(row);
            });

            document.querySelectorAll('.edit-cell').forEach(c => {
                c.addEventListener('blur', (e) => {
                    let v = e.target.innerText.trim();
                    if (v === "undefined") v = ""; // Prevent saving the 'undefined' string literal
                    const k = e.target.dataset.key, t = e.target.dataset.type;
                    let store, skey;
                    if (t === 'stt') { store = modifiedSTTs; skey = 'kitModifiedSTTs'; }
                    else if (t === 'name') { store = modifiedNames; skey = 'kitModifiedNames'; }
                    else if (t === 'code') { store = modifiedCodes; skey = 'kitModifiedCodes'; }
                    else if (t === 'qty') { store = modifiedQuantities; skey = 'kitModifiedQuantities'; }
                    else if (t === 'note') { store = modifiedNotes; skey = 'kitModifiedNotes'; }
                    store[k] = v; localStorage.setItem(skey, JSON.stringify(store));
                    if (['qty', 'name', 'stt'].includes(t)) renderTable(kitName);
                });
            });

            const f = document.getElementById('modalFooter');
            if (f) {
                const normalizedKey = kitName.normalize('NFC');
                const rf = (allKitsData[normalizedKey] && allKitsData[normalizedKey].footer) ? allKitsData[normalizedKey].footer : '';
                f.textContent = getDynamicFooter(rf); f.style.display = rf ? 'block' : 'none';
            }
        }

        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => { modal.style.display = "none"; document.body.classList.remove('modal-open'); currentCategory = null; }, 300);
        }

        // --- Start initial render ---
        renderCategoryGrid();
        const bBadge = document.getElementById('appVersion');
        if (bBadge) bBadge.textContent = typeof APP_VERSION !== 'undefined' ? APP_VERSION : "v2.2 PRO (STABLE) (26/02/2026)";
    }
});
