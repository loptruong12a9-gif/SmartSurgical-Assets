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

    if (exportStatsBtn) {
        exportStatsBtn.addEventListener('click', exportStatisticsToExcel);
    }



    let currentCategory = null;

    const defaultItems = [
        { name: "Chưa cập nhật", code: "---", quantity: 0, note: "Đang chờ dữ liệu" }
    ];

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
            const items = (allKitsData[key] && allKitsData[key].length > 0) ? allKitsData[key] : defaultItems;

            items.forEach((item, index) => {
                // Skip total rows
                if (item.name && item.name.toLowerCase().includes("tổng cộng")) return;

                // Use modified notes/names from localStorage if they exist
                const noteKey = `${key}-${index}`;
                const nameKey = `${key}-name-${index}`;

                const currentNote = modifiedNotes[noteKey] !== undefined ? modifiedNotes[noteKey] : (item.note || '');
                const currentName = modifiedNames[nameKey] !== undefined ? modifiedNames[nameKey] : item.name;
                const currentCode = (item.code || "");

                totalPieces += (item.quantity || 0);

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
                        quantity: item.quantity,
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
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E40AF' } };
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
            const items = (allKitsData[key] && allKitsData[key].length > 0) ? allKitsData[key] : defaultItems;
            items.forEach((item, index) => {
                if (item.name && item.name.toLowerCase().includes("tổng cộng")) return;
                const noteKey = `${key}-${index}`;
                const nameKey = `${key}-name-${index}`;
                const currentNote = modifiedNotes[noteKey] !== undefined ? modifiedNotes[noteKey] : (item.note || '');
                const currentName = modifiedNames[nameKey] !== undefined ? modifiedNames[nameKey] : item.name;
                const damageKeywords = ["hư", "gãy", "cùn", "mẻ", "hỏng", "thiếu", "rỉ", "set", "hư hỏng", "hhư", "mòn", "rỉ sét"];
                const boundary = "(^|[^a-z0-9àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])";
                const endBoundary = "($|[^a-z0-9àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ])";
                const damageRegex = new RegExp(boundary + "(" + damageKeywords.join('|') + ")" + endBoundary, 'i');
                if (damageRegex.test(currentNote) || damageRegex.test(currentName)) {
                    damagedItems.push({ kit: key, name: `${currentName} (${item.quantity})`, note: currentNote });
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

    // Persistence for modified notes AND names
    let modifiedNotes = JSON.parse(localStorage.getItem('kitModifiedNotes') || '{}');
    let modifiedNames = JSON.parse(localStorage.getItem('kitModifiedNames') || '{}');

    // Export Functionality
    function exportToExcel(kitName) {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet(kitName.substring(0, 31)); // Excel limit

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
            cell.font = { name: 'Times New Roman', size: 12, bold: true };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2E8F0' } };
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
        });

        // 3. Add Data Rows
        const items = allKitsData[kitName] && allKitsData[kitName].length > 0 ? allKitsData[kitName] : defaultItems;
        items.forEach((item, index) => {
            const sttDisplay = item.stt !== undefined ? item.stt : (item.name.toLowerCase().includes('tổng cộng') ? '' : (index + 1));

            const noteKey = `${kitName}-${index}`;
            const currentNote = modifiedNotes[noteKey] !== undefined ? modifiedNotes[noteKey] : (item.note || '');

            const nameKey = `${kitName}-name-${index}`;
            const currentName = modifiedNames[nameKey] !== undefined ? modifiedNames[nameKey] : item.name;

            const rowData = [
                sttDisplay,
                currentName,
                item.code || '',
                item.quantity > 0 ? item.quantity : (item.quantity === 0 ? '0' : '-'),
                currentNote || ''
            ];

            const row = worksheet.addRow(rowData);
            row.eachCell((cell, colNumber) => {
                cell.font = { name: 'Times New Roman', size: 12 };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };

                // Alignment
                if (colNumber === 1 || colNumber === 4) cell.alignment = { horizontal: 'center' };

                // Bold logic
                if (item.bold || currentName.toLowerCase().includes('tổng cộng')) {
                    cell.font.bold = true;
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF1F5F9' } };
                    if (currentName.toLowerCase().includes('tổng cộng')) {
                        cell.font.size = 14;
                    }
                }
            });
        });

        // 4. Footer Row (Optional)
        const footerDiv = document.getElementById('modalFooter');
        if (footerDiv && footerDiv.style.display !== 'none' && footerDiv.textContent) {
            const footerRow = worksheet.addRow([footerDiv.textContent]);
            worksheet.mergeCells(`A${footerRow.number}:E${footerRow.number}`);
            footerRow.getCell(1).font = { name: 'Times New Roman', size: 12, italic: true, bold: true };
            footerRow.getCell(1).alignment = { horizontal: 'right' };
            footerRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } };
            footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        }

        // Save File
        workbook.xlsx.writeBuffer().then(buffer => {
            saveAs(new Blob([buffer]), `${kitName}.xlsx`);
        });
    }

    function renderTable(kitName) {
        modalItemsList.innerHTML = '';

        const items = allKitsData[kitName] && allKitsData[kitName].length > 0 ? allKitsData[kitName] : defaultItems;

        items.forEach((item, index) => {
            const row = document.createElement('tr');
            if (item.bold) {
                row.style.fontWeight = "bold";
                row.style.backgroundColor = "#e2e8f0";
            }

            const sttDisplay = item.stt !== undefined ? item.stt : (item.name.toLowerCase().includes('tổng cộng') ? '' : (index + 1));

            // Handle editable note logic
            const noteKey = `${kitName}-${index}`;
            const currentNote = modifiedNotes[noteKey] !== undefined ? modifiedNotes[noteKey] : (item.note || '');
            const isNoteEdited = modifiedNotes[noteKey] !== undefined && modifiedNotes[noteKey] !== (item.note || '');

            // Handle editable name logic
            const nameKey = `${kitName}-name-${index}`;
            const currentName = modifiedNames[nameKey] !== undefined ? modifiedNames[nameKey] : item.name;
            const isNameEdited = modifiedNames[nameKey] !== undefined && modifiedNames[nameKey] !== item.name;

            row.innerHTML = `
                <td>${sttDisplay}</td>
                <td contenteditable="${!item.bold}" 
                    class="name-cell ${isNameEdited ? 'note-edited' : ''}" 
                    data-key="${nameKey}"
                    data-original="${item.name}">${currentName}</td>
                <td>${item.code || ''}</td>
                <td>${item.quantity > 0 ? item.quantity : (item.quantity === 0 ? '0' : '-')}</td>
                <td contenteditable="${!item.bold}" 
                    class="note-cell ${isNoteEdited ? 'note-edited' : ''}" 
                    data-key="${noteKey}"
                    data-original="${item.note || ''}">${currentNote}</td>
            `;
            modalItemsList.appendChild(row);
        });

        // Add listeners for the newly created editable cells
        // Listeners for Notes
        document.querySelectorAll('.note-cell').forEach(cell => {
            cell.addEventListener('blur', (e) => {
                const key = e.target.getAttribute('data-key');
                const originalValue = e.target.getAttribute('data-original');
                const newValue = e.target.innerText.trim();

                if (newValue !== originalValue) {
                    modifiedNotes[key] = newValue;
                    e.target.classList.add('note-edited');
                } else {
                    delete modifiedNotes[key];
                    e.target.classList.remove('note-edited');
                }
                localStorage.setItem('kitModifiedNotes', JSON.stringify(modifiedNotes));
            });

            cell.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.blur();
                }
            });
        });

        // Listeners for Names
        document.querySelectorAll('.name-cell').forEach(cell => {
            // Highlight on click logic
            cell.addEventListener('click', (e) => {
                // Toggle highlight class
                if (e.target.classList.contains('highlight-bold')) {
                    e.target.classList.remove('highlight-bold');
                } else {
                    e.target.classList.add('highlight-bold');
                }
            });

            cell.addEventListener('blur', (e) => {
                const key = e.target.getAttribute('data-key');
                const originalValue = e.target.getAttribute('data-original');
                const newValue = e.target.innerText.trim();

                if (newValue !== originalValue) {
                    modifiedNames[key] = newValue;
                    e.target.classList.add('note-edited');
                } else {
                    delete modifiedNames[key];
                    e.target.classList.remove('note-edited');
                }
                localStorage.setItem('kitModifiedNames', JSON.stringify(modifiedNames));
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
            const footerText = (itemsArray && itemsArray.footer) ? itemsArray.footer : '';
            footerDiv.textContent = footerText;
            footerDiv.style.display = footerText ? 'block' : 'none';
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
        if (badge) {
            badge.textContent = typeof APP_VERSION !== 'undefined' ? APP_VERSION : "v1.3 PRO";
            badge.addEventListener('click', () => {
                const orig = badge.textContent;
                badge.textContent = "✓ Đã cập nhật";
                badge.style.background = "#22c55e";
                setTimeout(() => { badge.textContent = orig; badge.style.background = ""; }, 2000);
            });
        }
    }
});
