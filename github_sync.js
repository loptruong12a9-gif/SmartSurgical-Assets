
// GitHub Sync Logic
document.addEventListener('DOMContentLoaded', () => {
    initializeGitHubSync();
});

function initializeGitHubSync() {
    // Check if token exists
    const token = localStorage.getItem('githubToken');
    const saveBtn = document.getElementById('saveToGithubBtn');
    const refreshBtn = document.getElementById('refreshFromGithubBtn');

    if (token) {
        if (saveBtn) saveBtn.style.display = 'inline-flex';
        if (refreshBtn) refreshBtn.style.display = 'inline-flex';
    }

    // Refresh button handler
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
            refreshBtn.disabled = true;

            // Force reload from GitHub with cache busting
            const owner = localStorage.getItem('ghOwner');
            const repo = localStorage.getItem('ghRepo');

            fetch(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/data.js?t=${Date.now()}`, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Cache-Control': 'no-cache'
                }
            })
                .then(r => r.ok ? r.json() : Promise.reject('Failed'))
                .then(data => {
                    // Clear old data
                    if (typeof allKitsData !== 'undefined') {
                        Object.keys(allKitsData).forEach(k => delete allKitsData[k]);
                    }

                    // Load new data
                    const script = document.createElement('script');
                    script.textContent = decodeURIComponent(escape(atob(data.content)));
                    document.body.appendChild(script);

                    // Re-render
                    renderCategoryGrid();

                    // Update version badge
                    const badge = document.getElementById('appVersion');
                    if (badge && typeof APP_VERSION !== 'undefined') {
                        badge.textContent = APP_VERSION;
                    }

                    alert('Đã tải dữ liệu mới từ GitHub!');
                    refreshBtn.innerHTML = '<i class="fa-solid fa-sync"></i>';
                    refreshBtn.disabled = false;
                })
                .catch(err => {
                    alert('Lỗi tải dữ liệu: ' + err);
                    refreshBtn.innerHTML = '<i class="fa-solid fa-sync"></i>';
                    refreshBtn.disabled = false;
                });
        });
    }

    const configBtn = document.getElementById('configGithubBtn');
    if (configBtn) {
        configBtn.addEventListener('click', () => {
            const modal = document.getElementById('githubModal');
            if (modal) {
                modal.style.display = 'block';
                // Force layout reflow for animation if needed, or just display
                void modal.offsetWidth;
                modal.classList.add('show');

                document.getElementById('ghToken').value = localStorage.getItem('githubToken') || '';
                document.getElementById('ghOwner').value = localStorage.getItem('ghOwner') || '';
                document.getElementById('ghRepo').value = localStorage.getItem('ghRepo') || '';
            }
        });
    }

    const closeGhModal = document.getElementById('closeGithubModal');
    if (closeGhModal) {
        closeGhModal.addEventListener('click', () => {
            const modal = document.getElementById('githubModal');
            modal.classList.remove('show');
            setTimeout(() => { modal.style.display = 'none'; }, 300);
        });
    }

    const saveConfig = document.getElementById('saveConfigBtn');
    if (saveConfig) {
        saveConfig.addEventListener('click', () => {
            const token = document.getElementById('ghToken').value.trim();
            const owner = document.getElementById('ghOwner').value.trim();
            const repo = document.getElementById('ghRepo').value.trim();

            if (token && owner && repo) {
                localStorage.setItem('githubToken', token);
                localStorage.setItem('ghOwner', owner);
                localStorage.setItem('ghRepo', repo);
                alert('Đã lưu cấu hình!');
                const modal = document.getElementById('githubModal');
                modal.classList.remove('show');
                setTimeout(() => { modal.style.display = 'none'; }, 300);

                if (saveBtn) saveBtn.style.display = 'inline-flex';
            } else {
                alert('Vui lòng điền đủ thông tin!');
            }
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', async () => {
            if (!confirm('Bạn có chắc muốn lưu dữ liệu lên GitHub?')) return;

            const originalHtml = saveBtn.innerHTML;
            saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang lưu...';
            saveBtn.disabled = true;

            try {
                await saveDataToGitHub();
            } catch (e) {
                console.error(e);
                alert('Lỗi: ' + e.message);
            } finally {
                saveBtn.innerHTML = originalHtml;
                saveBtn.disabled = false;
            }
        });
    }
}

async function saveDataToGitHub() {
    const token = (localStorage.getItem('githubToken') || '').trim();
    const owner = (localStorage.getItem('ghOwner') || '').trim();
    const repo = (localStorage.getItem('ghRepo') || '').trim();
    const path = 'data.js';

    if (!token || !owner || !repo) throw new Error("Chưa cấu hình GitHub!");

    // Validate Token (Simple check for non-ASCII)
    if (/[^\x00-\x7F]/.test(token)) {
        throw new Error("Token chứa ký tự không hợp lệ (có thể do lỗi copy-paste). Vui lòng nhập lại Token.");
    }

    // 1. Get current SHA
    // Encode components to ensure valid URL
    const getUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${path}`;
    const getResp = await fetch(getUrl, {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    let sha = null;
    if (getResp.ok) {
        const getData = await getResp.json();
        sha = getData.sha;
    } else if (getResp.status !== 404) {
        throw new Error("Không thể kết nối GitHub (Get SHA) - Kiểm tra Token/Mạng");
    }

    // 2. Construct Content
    let modifiedNotes = JSON.parse(localStorage.getItem('kitModifiedNotes') || '{}');
    let modifiedNames = JSON.parse(localStorage.getItem('kitModifiedNames') || '{}');
    let modifiedSTTs = JSON.parse(localStorage.getItem('kitModifiedSTTs') || '{}');
    let modifiedCodes = JSON.parse(localStorage.getItem('kitModifiedCodes') || '{}');
    let modifiedQuantities = JSON.parse(localStorage.getItem('kitModifiedQuantities') || '{}');

    // Use global kitDefinitions and allKitsData
    // We assume they are available globally
    const dateStr = new Date().toLocaleString('vi-VN');

    // Optimization: Use an array and join for faster large string building
    const contentLines = [
        `const APP_VERSION = "v1.7 PRO (${dateStr})";`,
        `const kitDefinitions = ${JSON.stringify(kitDefinitions, null, 4)};`,
        `let allKitsData = {};`,
        '',
        `function initializeData() {`,
        `    kitDefinitions.forEach(def => {`,
        `        if (def.count === 1) {`,
        `            if (!allKitsData[def.prefix]) allKitsData[def.prefix] = [];`,
        `        } else if (def.count > 1) {`,
        `            for (let i = 1; i <= def.count; i++) {`,
        `                const key = \`\${def.prefix} \${i}\`;`,
        `                if (!allKitsData[key]) allKitsData[key] = [];`,
        `            }`,
        `        }`,
        `        if (def.extraSubKits) {`,
        `            def.extraSubKits.forEach(subName => {`,
        `                if (!allKitsData[subName]) allKitsData[subName] = [];`,
        `            });`,
        `        }`,
        `    });`,
        `}`,
        `initializeData();`,
        ''
    ];

    const keys = Object.keys(allKitsData).sort((a, b) => a.localeCompare(b, 'vi', { numeric: true }));

    for (const key of keys) {
        const rawItems = allKitsData[key];
        let sttCounter = 1;
        let totalQty = 0;
        let hasTotalRow = false;

        // 1. First pass: Apply modifications and find/calculate total
        const mergedItems = rawItems.map((item, index) => {
            const newItem = { ...item };
            const nameKey = `${key}-name-${index}`;
            const codeKey = `${key}-code-${index}`;
            const qtyKey = `${key}-qty-${index}`;
            const noteKey = `${key}-note-${index}`;

            if (modifiedNames[nameKey] !== undefined) newItem.name = modifiedNames[nameKey];
            if (modifiedCodes[codeKey] !== undefined) newItem.code = modifiedCodes[codeKey];
            if (modifiedNotes[noteKey] !== undefined) newItem.note = modifiedNotes[noteKey];
            if (modifiedQuantities[qtyKey] !== undefined) {
                const q = modifiedQuantities[qtyKey];
                newItem.quantity = (q === '-' || q === '' || isNaN(parseInt(q))) ? 0 : parseInt(q);
            }

            const isTotalRow = (newItem.name && newItem.name.toLowerCase().includes("tông cộng")) || newItem.bold;
            if (isTotalRow) {
                hasTotalRow = true;
                newItem.name = "TỔNG CỘNG";
                newItem.bold = true;
            } else {
                totalQty += (newItem.quantity || 0);
            }
            return newItem;
        });

        // 2. Second pass: Set STT and finalize Totals
        const finalItems = mergedItems.map((item, index) => {
            const sttKey = `${key}-stt-${index}`;
            const isTotalRow = item.bold || (item.name && item.name.toUpperCase().includes("TỔNG CỘNG"));

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
            return item;
        });

        // 3. Add Total row if missing
        if (!hasTotalRow && rawItems.length > 0) {
            finalItems.push({
                stt: "",
                name: "TỔNG CỘNG",
                code: "",
                quantity: totalQty,
                bold: true
            });
        }

        contentLines.push(`// Data for ${key}`);
        contentLines.push(`allKitsData["${key}"] = ${JSON.stringify(finalItems, null, 2)};`);

        if (rawItems.footer) {
            contentLines.push(`allKitsData["${key}"].footer = ${JSON.stringify(rawItems.footer)};`);
        }
    }

    const fileContent = contentLines.join('\n');

    // Encode
    // handling utf8 strings for base64
    const contentEncoded = btoa(unescape(encodeURIComponent(fileContent)));

    // 3. PUT
    const putBody = {
        message: `Cập nhật dữ liệu từ App (${dateStr})`,
        content: contentEncoded
    };
    if (sha) putBody.sha = sha;

    const putResp = await fetch(getUrl, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(putBody)
    });

    if (!putResp.ok) {
        const err = await putResp.json().catch(() => ({ message: putResp.statusText }));
        const errorMsg = `Lỗi GitHub (${putResp.status}): ${err.message}\nURL: ${getUrl}`;
        console.error("GitHub Sync Error:", putResp, err);
        throw new Error(errorMsg);
    }

    if (confirm('Lưu thành công! Dữ liệu đã được cập nhật trên GitHub.\nBạn có muốn tải lại trang để xóa các chỉnh sửa tạm thời?')) {
        // Clear temp storage because we saved it permanently
        localStorage.removeItem('kitModifiedNotes');
        localStorage.removeItem('kitModifiedNames');
        location.reload();
    }
}
