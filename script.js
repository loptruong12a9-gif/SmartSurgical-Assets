
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
        // --- DOM Elements ---
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
        const dashboardBtn = document.getElementById('dashboardBtn');
        const dashboardView = document.getElementById('dashboardView');
        const sterilMgmtBtn = document.getElementById('sterilMgmtBtn');
        const sterilizationMgmtView = document.getElementById('sterilizationMgmtView');
        const sterilAllKitsList = document.getElementById('sterilAllKitsList');
        const refreshAllExpiredBtn = document.getElementById('refreshAllExpiredBtn');

        // Return Management Elements
        const modalReturnManagement = document.getElementById('modalReturnManagement');
        const returnMainView = document.getElementById('returnMainView');
        const newReturnForm = document.getElementById('newReturnForm');
        const returnHistoryList = document.getElementById('returnHistoryList');
        const selectableDamagedList = document.getElementById('selectableDamagedList');
        const returnBatchNameInput = document.getElementById('returnBatchName');
        const createNewReturnBtn = document.getElementById('createNewReturnBtn');
        const backToReturnMainBtn = document.getElementById('backToReturnMainBtn');
        const confirmReturnBtn = document.getElementById('confirmReturnBtn');
        const selectAllDamaged = document.getElementById('selectAllDamaged');

        const mobileSaveBtn = document.getElementById('mobileSaveBtn');

        // --- State ---
        let currentCategory = null;
        let modifiedSTTs = JSON.parse(localStorage.getItem('kitModifiedSTTs') || '{}');
        let modifiedNames = JSON.parse(localStorage.getItem('kitModifiedNames') || '{}');
        let modifiedCodes = JSON.parse(localStorage.getItem('kitModifiedCodes') || '{}');
        let modifiedQuantities = JSON.parse(localStorage.getItem('kitModifiedQuantities') || '{}');
        let modifiedNotes = JSON.parse(localStorage.getItem('kitModifiedNotes') || '{}');
        let returnHistory = JSON.parse(localStorage.getItem('kitReturnHistory') || '[]');
        let sterilizationDates = JSON.parse(localStorage.getItem('kitSterilizationDates') || 'null');
        if (!sterilizationDates) {
            sterilizationDates = (typeof window.sterilizationDates !== 'undefined') ? { ...window.sterilizationDates } : {};
        }

        const defaultItems = [
            { name: "Chưa cập nhật", code: "---", quantity: 0, note: "Đang chờ dữ liệu" }
        ];

        // --- Event Listeners ---
        if (exportStatsBtn) exportStatsBtn.addEventListener('click', exportStatisticsToExcel);
        if (bulkExportBtn) bulkExportBtn.addEventListener('click', exportAllKitsToExcel);
        if (dashboardBtn) dashboardBtn.addEventListener('click', () => showDashboard(true));
        if (sterilMgmtBtn) sterilMgmtBtn.addEventListener('click', () => window.showSterilMgmt(true));
        if (refreshAllExpiredBtn) refreshAllExpiredBtn.addEventListener('click', () => handleRefreshAllExpired());
        if (searchInput) searchInput.addEventListener('input', (e) => renderCategoryGrid(e.target.value));
        if (closeBtn) closeBtn.addEventListener('click', () => window.closeModal());
        if (backBtn) backBtn.addEventListener('click', () => { if (currentCategory) showSelectionView(currentCategory); });

        if (createNewReturnBtn) createNewReturnBtn.addEventListener('click', showNewReturnForm);
        if (backToReturnMainBtn) backToReturnMainBtn.addEventListener('click', showReturnHistoryView);
        if (confirmReturnBtn) confirmReturnBtn.addEventListener('click', handleConfirmReturn);
        if (selectAllDamaged) selectAllDamaged.addEventListener('change', (e) => {
            const checkboxes = selectableDamagedList.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => {
                cb.checked = e.target.checked;
                const row = cb.closest('tr');
                if (e.target.checked) row.classList.add('row-selected');
                else row.classList.remove('row-selected');
            });
        });

        if (mobileSaveBtn) mobileSaveBtn.addEventListener('click', () => {
            if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
            const saveBtn = document.getElementById('saveToGithubBtn');
            if (saveBtn) saveBtn.click();
        });

        const refreshSterilBtn = document.getElementById('refreshSterilBtn');
        if (refreshSterilBtn) {
            refreshSterilBtn.onclick = () => {
                const kitName = modalTitle.textContent.trim();
                const now = new Date().toISOString();
                sterilizationDates[kitName] = now;
                localStorage.setItem('kitSterilizationDates', JSON.stringify(sterilizationDates));
                updateSterilizationInfo(kitName);
                if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(30);
            };
        }

        // --- Helper Functions ---
        function calculateProposed(note) {
            if (!note) return 0;
            const keywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hhư", "mòn", "rỉ sét", "cong", "mất", "lệch", "thanh lý", "thanh lí"];
            const lowerNote = note.toLowerCase().normalize('NFC');
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
                            if (val > 0 && val < 50) totalProposed += val;
                        });
                    } else {
                        totalProposed += 1;
                    }
                }
            });
            return (totalProposed === 0 && hasAnyKeyword) ? 1 : totalProposed;
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

            if (!hasTotalRow && items[0].name !== "Chưa cập nhật") {
                items.push({ stt: "", name: "TỔNG CỘNG", code: "", quantity: totalQty, bold: true });
            }
            return items;
        }

        function getDynamicFooter(rawFooter) {
            if (!rawFooter) return "";
            const now = new Date();
            const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
            return (rawFooter.toUpperCase().includes("ĐÃ KIỂM") || rawFooter.toUpperCase().includes("DA KIEM")) ? `ĐÃ KIỂM ${dateStr}` : rawFooter;
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

            const nKey = kitName.normalize('NFC');
            const footerText = (allKitsData[nKey] && allKitsData[nKey].footer) ? getDynamicFooter(allKitsData[nKey].footer) : '';
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
                    cell.font = { name: 'Times New Roman', size: 12 }; setBorder(cell);
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
                cell.alignment = { horizontal: 'center', vertical: 'middle' }; setBorder(cell);
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
                for (let i = 1; i <= 6; i++) { setBorder(empty.getCell(i)); empty.getCell(i).font = { name: 'Times New Roman' }; }
            } else {
                damagedArr.sort((a, b) => a.kit.localeCompare(b.kit, 'vi', { numeric: true })).forEach((d, i) => {
                    const row = worksheet.addRow([i + 1, d.kit, d.name, d.qty, d.note, d.proposed]);
                    for (let j = 1; j <= 6; j++) {
                        const cell = row.getCell(j); cell.font = { name: 'Times New Roman', size: 12 };
                        cell.alignment = { vertical: 'middle', wrapText: true }; setBorder(cell);
                        if (j !== 2 && j !== 3 && j !== 5) cell.alignment.horizontal = 'center';
                        if (j === 6) { cell.font.bold = true; cell.font.color = { argb: 'FFB91C1C' }; }
                    }
                });
            }

            worksheet.addRow([]);
            const sign = worksheet.addRow(['', '', '', '', 'NGƯỜI LẬP BÁO CÁO', '']);
            worksheet.mergeCells(`E${sign.number}:F${sign.number}`);
            sign.getCell(5).font = { name: 'Times New Roman', size: 12, bold: true }; sign.getCell(5).alignment = { horizontal: 'center' };
            const mns = worksheet.addRow(['', '', '', '', 'NGUYỄN VĂN TÂN', '']);
            worksheet.mergeCells(`E${mns.number}:F${mns.number}`);
            mns.getCell(5).font = { name: 'Times New Roman', size: 12, bold: true }; mns.getCell(5).alignment = { horizontal: 'center' }; mns.height = 70;

            worksheet.getColumn(1).width = 6; worksheet.getColumn(2).width = 20; worksheet.getColumn(3).width = 30; worksheet.getColumn(4).width = 10; worksheet.getColumn(5).width = 30; worksheet.getColumn(6).width = 15;
            workbook.xlsx.writeBuffer().then(buf => { saveAs(new Blob([buf]), `Bao_Cao_Tong_Hop_${now.toLocaleDateString('vi-VN').replace(/\//g, '-')}.xlsx`); });
        }

        function exportToExcel(kitName) {
            const workbook = new ExcelJS.Workbook();
            const sheetName = kitName.substring(0, 31).normalize('NFC').replace(/[\\\/\?\*\[\]]/g, '');
            const worksheet = workbook.addWorksheet(sheetName);
            applyProfessionalStyle(worksheet); setupExcelSheet(worksheet, kitName);
            workbook.xlsx.writeBuffer().then(buf => { saveAs(new Blob([buf]), `${kitName.replace(/\s+/g, '_')}.xlsx`); });
        }

        async function exportAllKitsToExcel() {
            if (!confirm('Xuất tất cả các bộ (mỗi bộ 1 Sheet)?')) return;
            const workbook = new ExcelJS.Workbook(); const allKeys = [];
            kitDefinitions.sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true })).forEach(def => {
                if (def.count === 1) allKeys.push(def.prefix);
                else for (let i = 1; i <= def.count; i++) allKeys.push(`${def.prefix} ${i}`);
                if (def.extraSubKits) def.extraSubKits.forEach(s => allKeys.push(s));
            });
            allKeys.forEach(k => {
                const sn = k.substring(0, 31).normalize('NFC').replace(/[\\\/\?\*\[\]]/g, '');
                const ws = workbook.addWorksheet(sn); applyProfessionalStyle(ws); setupExcelSheet(ws, k);
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
            }).sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true }));

            filtered.forEach(def => {
                const card = document.createElement('div'); card.className = 'kit-card';
                card.innerHTML = `<div class="icon-wrapper ${def.color}"><i class="fa-solid ${def.icon} kit-icon"></i></div><div class="kit-name">${def.baseName}</div>`;
                card.addEventListener('click', () => handleCategoryClick(def));
                kitGrid.appendChild(card);
            });

            if (!filterText) {
                const statsCard = document.createElement('div'); statsCard.className = 'kit-card';
                statsCard.innerHTML = `<div class="icon-wrapper icon-gray" style="background: #94a3b8"><i class="fa-solid fa-chart-line kit-icon"></i></div><div class="kit-name">Báo cáo & Thống kê</div>`;
                statsCard.addEventListener('click', showStatisticsView); kitGrid.appendChild(statsCard);

                const returnCard = document.createElement('div'); returnCard.className = 'kit-card';
                returnCard.innerHTML = `<div class="icon-wrapper icon-teal" style="background: linear-gradient(135deg, #0f766e, #14b8a6);"><i class="fa-solid fa-truck-ramp-box kit-icon"></i></div><div class="kit-name">Quản lý Đợt Trả</div>`;
                returnCard.addEventListener('click', showReturnManagementView); kitGrid.appendChild(returnCard);
            }
        }

        function showStatisticsView() {
            modalTitle.textContent = "Báo cáo Tổng hợp & Thống kê";
            modalSelection.style.display = 'none'; modalDetails.style.display = 'none'; modalReturnManagement.style.display = 'none'; modalStatistics.style.display = 'block';
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
                const badge = document.createElement('div'); badge.className = 'category-stat-badge';
                badge.innerHTML = `<span class="cat-name">${def.baseName}</span><span class="cat-count">${subCount}</span>`;
                categoryBreakdown.appendChild(badge);
            });

            damagedItemsList.innerHTML = '';
            if (damaged.length === 0) damagedItemsList.innerHTML = `<tr><td colspan="5" style="text-align: center;">Không có hư hỏng.</td></tr>`;
            else {
                damaged.sort((a, b) => a.kit.localeCompare(b.kit, 'vi', { numeric: true })).forEach(it => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${it.kit}</td><td>${it.name || "---"}</td><td>${it.quantity || 0}</td><td style="color:var(--danger)">${it.note || ""}</td><td style="font-weight:bold; color:var(--primary-color)">${it.proposed || 0}</td>`;
                    damagedItemsList.appendChild(tr);
                });
            }
            modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
        }

        let statusChartInst = null;
        let categoryChartInst = null;
        let sterilChartInst = null;

        function showDashboard(show) {
            if (show) {
                modalTitle.textContent = "THỐNG KÊ CHI TIẾT & BIỂU ĐỒ";
                modalSelection.style.display = 'none';
                modalDetails.style.display = 'none';
                modalStatistics.style.display = 'none';
                modalReturnManagement.style.display = 'none';
                sterilizationMgmtView.style.display = 'none';
                dashboardView.style.display = 'block';
                renderDashboardData();
                modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
            } else {
                closeModal();
            }
        }
        window.showDashboard = showDashboard;

        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
                dashboardView.style.display = 'none';
                sterilizationMgmtView.style.display = 'none';
                currentCategory = null;
            }, 300);
        }
        window.closeModal = closeModal;

        function renderDashboardData() {
            let totalItemsCount = 0;
            let totalDamagedCount = 0;
            const categoryStats = {};

            kitDefinitions.forEach(def => {
                const prefix = def.prefix.normalize('NFC');
                let subKits = [];
                if (def.count > 0) {
                    for (let i = 1; i <= def.count; i++) subKits.push(`${prefix} ${i}`);
                }
                if (def.extraSubKits) subKits = subKits.concat(def.extraSubKits);
                if (subKits.length === 0) subKits = [prefix];

                let catDamaged = 0;
                subKits.forEach(name => {
                    const items = getProcessedItems(name);
                    items.forEach(it => {
                        if (!it.bold) {
                            totalItemsCount += (it.quantity || 0);
                            const q = calculateProposed(it.note);
                            if (q > 0) {
                                totalDamagedCount += q;
                                catDamaged += q;
                            }
                        }
                    });
                });
                categoryStats[def.baseName] = catDamaged;
            });

            // Sterilization Stats
            let goodS = 0, warnS = 0, expS = 0;
            const allKitNames = [];
            kitDefinitions.forEach(def => {
                const prefix = def.prefix.normalize('NFC');
                if (def.count > 0) { for (let i = 1; i <= def.count; i++) allKitNames.push(`${prefix} ${i}`); }
                if (def.extraSubKits) def.extraSubKits.forEach(sk => allKitNames.push(sk.normalize('NFC')));
                if (def.count === 0 && (!def.extraSubKits || def.extraSubKits.length === 0)) allKitNames.push(prefix);
            });

            allKitNames.forEach(kn => {
                const sDate = sterilizationDates[kn] || (allKitsData[kn] && allKitsData[kn].sterilDate);
                if (!sDate) { expS++; return; }
                const last = new Date(sDate);
                let limit = 7;
                const up = kn.toUpperCase();
                if (up.includes("NỘI SOI SẢN") || up.includes("NỘI SOI TỔNG QUÁT") || up.includes("SOI TREO TMH")) limit = 30;

                const diffDays = Math.floor(Math.abs(new Date() - last) / (1000 * 60 * 60 * 24));
                if (diffDays >= limit) expS++;
                else if (diffDays >= (limit - 2)) warnS++;
                else goodS++;
            });

            document.getElementById('totalKitsVal').textContent = kitDefinitions.length;
            document.getElementById('totalItemsVal').textContent = totalItemsCount;
            document.getElementById('damagedItemsVal').textContent = totalDamagedCount;
            document.getElementById('readyItemsVal').textContent = totalItemsCount - totalDamagedCount;
            document.getElementById('expiredSterilVal').textContent = expS;

            renderCharts(totalItemsCount - totalDamagedCount, totalDamagedCount, categoryStats, { goodS, warnS, expS });
        }
        window.renderDashboardData = renderDashboardData;

        function renderCharts(readyCount, damagedCount, categoryStats, sterilData) {
            const ctxStatus = document.getElementById('statusChart').getContext('2d');
            const ctxCat = document.getElementById('categoryChart').getContext('2d');
            const ctxSteril = document.getElementById('sterilChart').getContext('2d');

            if (statusChartInst) statusChartInst.destroy();
            if (categoryChartInst) categoryChartInst.destroy();
            if (sterilChartInst) sterilChartInst.destroy(); // Destroy existing steril chart

            statusChartInst = new Chart(ctxStatus, {
                type: 'doughnut',
                data: {
                    labels: ['Sẵn sàng', 'Hư hỏng'],
                    datasets: [{
                        data: [readyCount, damagedCount],
                        backgroundColor: ['#10b981', '#f43f5e'],
                        borderWidth: 0
                    }]
                },
                options: { cutout: '70%', plugins: { legend: { position: 'bottom' } } }
            });

            const labels = Object.keys(categoryStats).filter(k => categoryStats[k] >= 0);
            const values = labels.map(k => categoryStats[k]);

            categoryChartInst = new Chart(ctxCat, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Số lượng hư hỏng',
                        data: values,
                        backgroundColor: '#4f46e5',
                        borderRadius: 8
                    }]
                },
                options: {
                    indexAxis: 'y',
                    plugins: { legend: { display: false } },
                    scales: { x: { beginAtZero: true }, y: { ticks: { font: { size: 10 } } } }
                }
            });

            sterilChartInst = new Chart(ctxSteril, {
                type: 'pie',
                data: {
                    labels: ['Còn hạn', 'Sắp hết', 'Hết hạn'],
                    datasets: [{
                        data: [sterilData.goodS, sterilData.warnS, sterilData.expS],
                        backgroundColor: ['#10b981', '#f59e0b', '#f43f5e']
                    }]
                },
                options: { plugins: { legend: { position: 'bottom' } } }
            });
        }
        window.renderCharts = renderCharts;

        function handleCategoryClick(def) {
            currentCategory = def; modalTitle.textContent = def.baseName;
            modalStatistics.style.display = 'none'; modalReturnManagement.style.display = 'none';
            document.getElementById('dashboardView').style.display = 'none';
            sterilizationMgmtView.style.display = 'none';
            document.getElementById('sterilizationInfo').style.display = 'none';
            if (def.count > 1 || (def.extraSubKits && def.extraSubKits.length > 0)) showSelectionView(def);
            else { showDetailsView(def.prefix); backBtn.style.display = 'none'; }
            modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
        }

        function showSelectionView(def) {
            modalSelection.innerHTML = ''; modalSelection.style.display = 'grid'; modalDetails.style.display = 'none';
            document.getElementById('dashboardView').style.display = 'none';
            sterilizationMgmtView.style.display = 'none';
            let sub = [];
            for (let i = 1; i <= def.count; i++) sub.push(`${def.prefix} ${i}`);
            if (def.extraSubKits) sub = sub.concat(def.extraSubKits);
            sub.sort((a, b) => a.localeCompare(b, 'vi', { numeric: true })).forEach(name => {
                const btn = document.createElement('button'); btn.className = 'sub-kit-btn'; btn.textContent = name;
                btn.onclick = () => showDetailsView(name, true); modalSelection.appendChild(btn);
            });
        }

        function showDetailsView(kitName, showBack = false) {
            modalSelection.style.display = 'none'; modalDetails.style.display = 'block'; modalTitle.textContent = kitName;
            document.getElementById('dashboardView').style.display = 'none';
            sterilizationMgmtView.style.display = 'none';
            updateSterilizationInfo(kitName);
            backBtn.style.display = showBack ? 'flex' : 'none';
            let b = document.getElementById('exportBtn');
            if (!b) {
                b = document.createElement('button'); b.id = 'exportBtn'; b.className = 'back-btn';
                b.innerHTML = '<i class="fa-solid fa-file-excel"></i> Xuất Excel'; b.style.marginLeft = 'auto';
                const sc = document.querySelector('.search-in-modal'); if (sc) sc.appendChild(b);
            }
            b.onclick = () => exportToExcel(kitName); renderTable(kitName);
        }

        function updateSterilizationInfo(kitName) {
            const infoBox = document.getElementById('sterilizationInfo');
            const dateText = document.getElementById('lastSterilDate');
            const badge = document.getElementById('sterilStatusBadge');

            infoBox.style.display = 'flex';
            const normKey = kitName.normalize('NFC');
            const savedDate = sterilizationDates[normKey] || (allKitsData[normKey] && allKitsData[normKey].sterilDate);

            if (!savedDate) {
                dateText.textContent = "Chưa có dữ liệu";
                badge.textContent = "CHƯA KIỂM TRA";
                badge.className = "steril-status-badge status-expired";
                return;
            }

            const lastDate = new Date(savedDate);
            dateText.textContent = `${lastDate.getDate()}/${lastDate.getMonth() + 1}/${lastDate.getFullYear()}`;

            // Rules
            let limitDays = 7;
            const upperName = kitName.toUpperCase();
            if (upperName.includes("NỘI SOI SẢN") || upperName.includes("NỘI SOI TỔNG QUÁT") || upperName.includes("SOI TREO TMH")) {
                limitDays = 30;
            }

            const diffTime = Math.abs(new Date() - lastDate);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays >= limitDays) {
                badge.textContent = "HẾT HẠN";
                badge.className = "steril-status-badge status-expired";
            } else if (diffDays >= (limitDays - 2)) {
                badge.textContent = "SẮP HẾT HẠN";
                badge.className = "steril-status-badge status-warning";
            } else {
                badge.textContent = "CÒN HẠN";
                badge.className = "steril-status-badge status-good";
            }
        }

        function renderTable(kitName) {
            modalItemsList.innerHTML = ''; const items = getProcessedItems(kitName);
            items.forEach((item, index) => {
                const row = document.createElement('tr'); if (item.bold) row.classList.add('total-row');
                const sk = `${kitName}-stt-${index}`, nk = `${kitName}-name-${index}`, ck = `${kitName}-code-${index}`, qk = `${kitName}-qty-${index}`, ntk = `${kitName}-note-${index}`;
                row.innerHTML = `
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedSTTs[sk] ? 'note-edited' : ''}" data-key="${sk}" data-type="stt">${item.stt !== undefined ? item.stt : ''}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedNames[nk] ? 'note-edited' : ''}" data-key="${nk}" data-type="name">${item.name || ''}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedCodes[ck] ? 'note-edited' : ''}" data-key="${ck}" data-type="code">${item.code || ''}</td>
                    <td contenteditable="${!item.bold}" inputmode="numeric" class="edit-cell ${modifiedQuantities[qk] ? 'note-edited' : ''}" data-key="${qk}" data-type="qty">${item.quantity !== undefined ? item.quantity : 0}</td>
                    <td contenteditable="${!item.bold}" class="edit-cell ${modifiedNotes[ntk] ? 'note-edited' : ''}" data-key="${ntk}" data-type="note">${item.note || ''}</td>
                `;
                modalItemsList.appendChild(row);
            });

            document.querySelectorAll('.edit-cell').forEach(c => {
                c.onblur = (e) => {
                    let v = e.target.innerText.trim(); if (v === "undefined") v = "";
                    const k = e.target.dataset.key, t = e.target.dataset.type;
                    let store, skey;
                    if (t === 'stt') { store = modifiedSTTs; skey = 'kitModifiedSTTs'; }
                    else if (t === 'name') { store = modifiedNames; skey = 'kitModifiedNames'; }
                    else if (t === 'code') { store = modifiedCodes; skey = 'kitModifiedCodes'; }
                    else if (t === 'qty') { store = modifiedQuantities; skey = 'kitModifiedQuantities'; }
                    else if (t === 'note') { store = modifiedNotes; skey = 'kitModifiedNotes'; }
                    store[k] = v; localStorage.setItem(skey, JSON.stringify(store));
                    if (['qty', 'name', 'stt'].includes(t)) renderTable(kitName);
                };
            });

            const f = document.getElementById('modalFooter');
            if (f) { const nKey = kitName.normalize('NFC'); const rf = (allKitsData[nKey] && allKitsData[nKey].footer) ? allKitsData[nKey].footer : ''; f.textContent = getDynamicFooter(rf); f.style.display = rf ? 'block' : 'none'; }
        }

        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => { modal.style.display = "none"; document.body.classList.remove('modal-open'); currentCategory = null; }, 300);
        }

        // --- RETURN MANAGEMENT LOGIC ---
        function showReturnManagementView() {
            modalTitle.textContent = "Quản Lý Đợt Trả Dụng Cụ (6 Tháng)";
            modalSelection.style.display = 'none'; modalDetails.style.display = 'none'; modalStatistics.style.display = 'none';
            dashboardView.style.display = 'none'; sterilizationMgmtView.style.display = 'none';
            modalReturnManagement.style.display = 'block'; showReturnHistoryView();
            modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
        }

        function showReturnHistoryView() {
            returnMainView.style.display = 'block'; newReturnForm.style.display = 'none'; renderReturnHistory();
        }

        function renderReturnHistory() {
            returnHistoryList.innerHTML = '';
            if (returnHistory.length === 0) { returnHistoryList.innerHTML = '<div class="empty-state">Chưa có lịch sử đợt trả nào.</div>'; return; }
            returnHistory.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(batch => {
                const item = document.createElement('div'); item.className = 'return-history-item';
                const dObj = new Date(batch.date);
                const dStr = `${dObj.getHours()}:${String(dObj.getMinutes()).padStart(2, '0')} - ${dObj.getDate()}/${dObj.getMonth() + 1}/${dObj.getFullYear()}`;
                item.innerHTML = `
                    <div class="return-info">
                        <div class="return-name">${batch.name || 'Đợt trả'}</div>
                        <div class="return-meta"><span><i class="fa-solid fa-calendar-day"></i> ${dStr}</span><span><i class="fa-solid fa-boxes-stacked"></i> ${batch.items.length} món</span></div>
                    </div>
                    <div class="return-item-actions">
                        <button class="btn-icon-only btn-download" title="Tải lại"><i class="fa-solid fa-file-excel"></i></button>
                        <button class="btn-icon-only btn-delete" title="Xóa"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                `;
                item.querySelector('.btn-download').onclick = () => exportReturnBatchToWord(batch);
                item.querySelector('.btn-delete').onclick = () => {
                    if (confirm('Xóa lịch sử đợt trả này?')) {
                        returnHistory = returnHistory.filter(h => h.id !== batch.id);
                        localStorage.setItem('kitReturnHistory', JSON.stringify(returnHistory)); renderReturnHistory();
                    }
                };
                returnHistoryList.appendChild(item);
            });
        }

        function showNewReturnForm() {
            returnMainView.style.display = 'none'; newReturnForm.style.display = 'block';
            returnBatchNameInput.value = `TRẢ DỤNG CỤ HƯ HỎNG HK${new Date().getMonth() < 6 ? '1' : '2'}/${new Date().getFullYear()}`;
            renderSelectableDamagedItems();
        }

        function renderSelectableDamagedItems() {
            selectableDamagedList.innerHTML = ''; const damaged = []; const kitNames = [];
            kitDefinitions.forEach(def => {
                if (def.count === 1) kitNames.push(def.prefix);
                else if (def.count > 1) for (let i = 1; i <= def.count; i++) kitNames.push(`${def.prefix} ${i}`);
                if (def.extraSubKits) def.extraSubKits.forEach(sub => kitNames.push(sub));
            });
            kitNames.forEach(key => {
                getProcessedItems(key).forEach((item, idx) => {
                    if (item.bold) return;
                    const nt = (item.note || "").toLowerCase();
                    const kws = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hhư", "mòn", "rỉ sét", "cong", "mất", "lệch", "thanh lý", "thanh lí"];
                    if (kws.some(kw => nt.includes(kw))) damaged.push({ kit: key, name: item.name, code: item.code || '---', quantity: item.quantity, note: item.note, idx: idx });
                });
            });
            if (damaged.length === 0) { selectableDamagedList.innerHTML = '<tr><td colspan="4" class="empty-state">Không có dụng cụ hư hỏng nào.</td></tr>'; return; }
            damaged.sort((a, b) => a.kit.localeCompare(b.kit, 'vi', { numeric: true })).forEach((it, i) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td style="text-align: center;"><input type="checkbox" checked></td><td>${it.kit}</td><td>${it.name}</td><td style="color:var(--danger)">${it.note}</td>`;
                tr.onclick = (e) => { if (e.target.tagName !== 'INPUT') { const cb = tr.querySelector('input'); cb.checked = !cb.checked; tr.classList.toggle('row-selected', cb.checked); } };
                tr.querySelector('input').onchange = (e) => tr.classList.toggle('row-selected', e.target.checked);
                tr.classList.add('row-selected'); selectableDamagedList.appendChild(tr); tr.dataset.itemJson = JSON.stringify(it);
            });
            if (selectAllDamaged) selectAllDamaged.checked = true;
        }

        async function handleConfirmReturn() {
            const selectedRows = selectableDamagedList.querySelectorAll('tr.row-selected');
            if (selectedRows.length === 0) { alert('Vui lòng chọn ít nhất một dụng cụ.'); return; }
            const batchName = returnBatchNameInput.value.trim() || 'Đợt trả dụng cụ';
            const sItems = Array.from(selectedRows).map(row => JSON.parse(row.dataset.itemJson));
            const newBatch = { id: Date.now(), name: batchName, date: new Date().toISOString(), items: sItems };
            returnHistory.push(newBatch); localStorage.setItem('kitReturnHistory', JSON.stringify(returnHistory));
            await exportReturnBatchToWord(newBatch);
            if (confirm('BẠN CÓ MUỐN LÀM SẠCH DỮ LIỆU?\nHệ thống sẽ xóa ghi chú của các món vừa trả.')) {
                sItems.forEach(it => {
                    const noteKey = `${it.kit}-note-${it.idx}`;
                    if (modifiedNotes[noteKey]) delete modifiedNotes[noteKey];
                    const kData = allKitsData[it.kit.normalize('NFC')];
                    if (kData && kData[it.idx]) kData[it.idx].note = "";
                });
                localStorage.setItem('kitModifiedNotes', JSON.stringify(modifiedNotes)); alert('Đã làm sạch dữ liệu!');
            }
            showReturnHistoryView();
        }

        async function exportReturnBatchToWord(batch) {
            const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, VerticalAlign, BorderStyle } = docx;
            const now = new Date(batch.date);
            const dLine = `TP.HCM ngày ${now.getDate()} tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`;

            const doc = new Document({
                sections: [{
                    properties: { page: { margins: { top: 720, bottom: 720, left: 720, right: 720 } } },
                    children: [
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            borders: docx.TableBorders.NONE,
                            rows: [new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 50, type: WidthType.PERCENTAGE }, children: [
                                            new Paragraph({ children: [new TextRun({ text: "CÔNG TY TNHH BVĐK HỒNG ĐỨC", bold: true, size: 22 })] }),
                                            new Paragraph({ children: [new TextRun({ text: "BỆNH VIỆN ĐK HỒNG ĐỨC III", bold: true, size: 22 })] }),
                                        ]
                                    }),
                                    new TableCell({
                                        width: { size: 50, type: WidthType.PERCENTAGE }, children: [
                                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", bold: true, size: 22 })] }),
                                            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Độc lập – Tự do – Hạnh phúc", bold: true, size: 22 })] }),
                                        ]
                                    })
                                ]
                            })]
                        }),
                        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: "BIÊN BẢN THANH LÝ THU HỒI TÀI SẢN", bold: true, size: 32 })] }),
                        new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: dLine, italic: true, size: 24 })] }),
                        new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "BÊN NHẬN: BỆNH VIỆN ĐA KHOA HỒNG ĐỨC III", bold: true, size: 24 })] }),
                        new Paragraph({ children: [new TextRun({ text: "1. TRẦN NHẬT ANH\tChức vụ: Nhân viên T.TBYT", size: 24 })] }),
                        new Paragraph({ children: [new TextRun({ text: "2. LÊ NGỌC TIỀN\tChức vụ: Kế toán tài sản", size: 24 })] }),
                        new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "BÊN GIAO: KHOA PHẪU THUẬT GÂY MÊ HỒI SỨC- BỆNH VIỆN ĐA KHOA HỒNG ĐỨC III", bold: true, size: 24 })] }),
                        new Paragraph({ children: [new TextRun({ text: "1. PHẠM TRUNG NGHĨA\tChức vụ: Trưởng khoa", size: 24 })] }),
                        new Paragraph({ children: [new TextRun({ text: "2. LÊ THỊ TUYỀN\tChức vụ: Điều Dưỡng trưởng", size: 24 })] }),
                        new Paragraph({ children: [new TextRun({ text: "3. NGUYỄN VĂN TÂN\tChức vụ: Trưởng nhóm Y cụ", size: 24 })] }),
                        new Paragraph({ spacing: { before: 300, after: 100 }, children: [new TextRun({ text: "I. NỘI DUNG BÀN GIAO", bold: true, size: 24 })] }),
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "STT", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "THIẾT BỊ", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Bộ gốc/Mã", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số lượng", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tình trạng", bold: true, size: 22 })] })] }),
                                    ]
                                }),
                                ...batch.items.map((it, i) => new TableRow({
                                    children: [
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: (i + 1).toString(), size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: it.name, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${it.kit}/${it.code}`, size: 18 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: it.quantity.toString(), size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: it.note, size: 18 })] })] }),
                                    ]
                                }))
                            ]
                        }),
                        new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "Bàn giao lại thiết bị hư hỏng không sử dụng của khoa Phẫu thuật cho KTTS thu hồi về kho.", size: 24 })] }),
                        new Paragraph({ children: [new TextRun({ text: "Hai bên thống nhất lập biên bản thu hồi theo những nội dung như trên và biên bản thiết bị được lập thành 2 bản giống nhau, Các bên liên quan mỗi bên giữ một bản có giá trị tương đương nhau.", size: 24 })] }),
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            borders: docx.TableBorders.NONE,
                            spacing: { before: 400 },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "BÊN GIAO", bold: true, size: 24 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "BÊN NHẬN", bold: true, size: 24 })] })] }),
                                    ]
                                }),
                                // Spacer for signatures 1
                                new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] })] }),
                                new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] })] }),
                                // Name Row 1
                                new TableRow({
                                    children: [
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PHẠM TRUNG NGHĨA", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TRẦN NHẬT ANH", bold: true, size: 22 })] })] }),
                                    ]
                                }),
                                // Spacer for signatures 2
                                new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] })] }),
                                new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] })] }),
                                // Name Row 2
                                new TableRow({
                                    children: [
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "LÊ THỊ TUYỀN", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "LÊ NGỌC TIỀN", bold: true, size: 22 })] })] }),
                                    ]
                                }),
                                // Spacer for signatures 3
                                new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] })] }),
                                new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }), new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] })] }),
                                // Name Row 3
                                new TableRow({
                                    children: [
                                        new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NGUYỄN VĂN TÂN", bold: true, size: 22 })] })] }),
                                        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "" })] })] }),
                                    ]
                                }),
                                // Final Row: BAN GIAM DOC
                                new TableRow({
                                    children: [
                                        new TableCell({ columnSpan: 2, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 800 }, children: [new TextRun({ text: "BAN GIÁM ĐỐC BỆNH VIỆN", bold: true, size: 24 })] })] }),
                                    ]
                                })
                            ]
                        })
                    ]
                }]
            });
            const buffer = await Packer.toBlob(doc);
            saveAs(buffer, `Bien_Ban_Thanh_Ly_${now.toLocaleDateString('vi-VN').replace(/\//g, '-')}.docx`);
        }

        // --- Initial Render ---
        renderCategoryGrid();
        const bB = document.getElementById('appVersion');
        if (bB) bB.textContent = typeof APP_VERSION !== 'undefined' ? APP_VERSION : "v3.5 GOLD (FINAL) (23:13:14 06/03/2026)";

        function showSterilMgmt(show) {
            if (show) {
                modalTitle.textContent = "TRUNG TÂM QUẢN LÝ HẤP TIỆT TRÙNG";
                modalSelection.style.display = 'none';
                modalDetails.style.display = 'none';
                modalStatistics.style.display = 'none';
                modalReturnManagement.style.display = 'none';
                dashboardView.style.display = 'none';
                sterilizationMgmtView.style.display = 'block';
                renderSterilMgmtData();
                modal.style.display = "block"; modal.classList.add('show'); document.body.classList.add('modal-open');
            } else {
                closeModal();
            }
        }
        window.showSterilMgmt = showSterilMgmt;

        function renderSterilMgmtData() {
            sterilAllKitsList.innerHTML = '';
            const allKitNames = [];
            kitDefinitions.sort((a, b) => a.baseName.localeCompare(b.baseName, 'vi', { numeric: true })).forEach(def => {
                const prefix = def.prefix.normalize('NFC');
                if (def.count > 0) { for (let i = 1; i <= def.count; i++) allKitNames.push(`${prefix} ${i}`); }
                if (def.extraSubKits) def.extraSubKits.forEach(sk => allKitNames.push(sk.normalize('NFC')));
                if (def.count === 0 && (!def.extraSubKits || def.extraSubKits.length === 0)) allKitNames.push(prefix);
            });

            allKitNames.forEach(kn => {
                const sDate = sterilizationDates[kn] || (allKitsData[kn] && allKitsData[kn].sterilDate);
                let badgeClass = "status-expired";
                let badgeText = "HẾT HẠN / CHƯA CÓ";
                let dateDisplay = "---";
                let limit = 7;
                const up = kn.toUpperCase();
                if (up.includes("NỘI SOI SẢN") || up.includes("NỘI SOI TỔNG QUÁT") || up.includes("SOI TREO TMH")) limit = 30;

                if (sDate) {
                    const last = new Date(sDate);
                    dateDisplay = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`;
                    const diffDays = Math.floor(Math.abs(new Date() - last) / (1000 * 60 * 60 * 24));
                    if (diffDays >= limit) {
                        badgeClass = "status-expired"; badgeText = "HẾT HẠN";
                    } else if (diffDays >= (limit - 2)) {
                        badgeClass = "status-warning"; badgeText = "SẮP HẾT HẠN";
                    } else {
                        badgeClass = "status-good"; badgeText = "CÒN HẠN";
                    }
                }

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td style="font-weight:600; font-size: 0.9rem;">${kn}</td>
                    <td style="font-size: 0.85rem; color: #64748b;">${dateDisplay} <span style="font-size:0.75rem">(${limit} ngày)</span></td>
                    <td><span class="steril-status-badge ${badgeClass}" style="font-size:0.7rem; padding: 4px 8px;">${badgeText}</span></td>
                    <td>
                        <button class="refresh-steril-btn" style="padding: 6px 12px; font-size: 0.75rem;" onclick="refreshSterilForKit('${kn}')">
                            <i class="fa-solid fa-sync"></i> Hấp lại
                        </button>
                    </td>
                `;
                sterilAllKitsList.appendChild(tr);
            });
        }

        function refreshSterilForKit(kn) {
            const now = new Date().toISOString();
            sterilizationDates[kn] = now;
            localStorage.setItem('kitSterilizationDates', JSON.stringify(sterilizationDates));
            renderSterilMgmtData();
            if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(30);
        }
        window.refreshSterilForKit = refreshSterilForKit;

        function handleRefreshAllExpired() {
            if (!confirm("Bạn có chắc chắn muốn xác nhận hấp lại cho TẤT CẢ các bộ đã hết hạn?")) return;
            const allKitNames = [];
            kitDefinitions.forEach(def => {
                const prefix = def.prefix.normalize('NFC');
                if (def.count > 0) { for (let i = 1; i <= def.count; i++) allKitNames.push(`${prefix} ${i}`); }
                if (def.extraSubKits) def.extraSubKits.forEach(sk => allKitNames.push(sk.normalize('NFC')));
                if (def.count === 0 && (!def.extraSubKits || def.extraSubKits.length === 0)) allKitNames.push(prefix);
            });

            const now = new Date().toISOString();
            let count = 0;
            allKitNames.forEach(kn => {
                const sDate = sterilizationDates[kn] || (allKitsData[kn] && allKitsData[kn].sterilDate);
                let limit = 7;
                const up = kn.toUpperCase();
                if (up.includes("NỘI SOI SẢN") || up.includes("NỘI SOI TỔNG QUÁT") || up.includes("SOI TREO TMH")) limit = 30;

                let isExpired = true;
                if (sDate) {
                    const diffDays = Math.floor(Math.abs(new Date() - new Date(sDate)) / (1000 * 60 * 60 * 24));
                    isExpired = (diffDays >= limit);
                }

                if (isExpired) {
                    sterilizationDates[kn] = now;
                    count++;
                }
            });

            localStorage.setItem('kitSterilizationDates', JSON.stringify(sterilizationDates));
            renderSterilMgmtData();
            alert(`Đã cập nhật ngày hấp cho ${count} bộ dụng cụ.`);
        }
    }
});
