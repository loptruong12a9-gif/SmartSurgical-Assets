
let saveBtn, refreshBtn;

document.addEventListener('DOMContentLoaded', () => {
    saveBtn = document.getElementById('saveToGithubBtn');
    refreshBtn = document.getElementById('refreshFromGithubBtn');
    initializeGitHubSync();
    setupListeners();
});

function setupListeners() {
    if (refreshBtn) refreshBtn.addEventListener('click', handleSyncClick);
    if (saveBtn) saveBtn.addEventListener('click', handleSaveClick);

    const configBtn = document.getElementById('configGithubBtn');
    if (configBtn) configBtn.addEventListener('click', openGhModal);

    const closeGhBtn = document.getElementById('closeGithubModal');
    if (closeGhBtn) closeGhBtn.addEventListener('click', closeGhModal);

    const saveConfigBtn = document.getElementById('saveConfigBtn');
    if (saveConfigBtn) saveConfigBtn.addEventListener('click', handleSaveConfig);

    const checkConnBtn = document.getElementById('checkConnBtn');
    if (checkConnBtn) checkConnBtn.addEventListener('click', handleCheckConnection);
}

function b64ToUtf8(str) {
    try {
        const binary = atob(str);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return new TextDecoder().decode(bytes);
    } catch (e) {
        console.error("Decode error:", e);
        return "";
    }
}

function utf8ToB64(str) {
    const utf8Bytes = new TextEncoder().encode(str);
    let binary = "";
    const len = utf8Bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(utf8Bytes[i]);
    }
    return btoa(binary);
}

async function initializeGitHubSync() {
    const token = (localStorage.getItem('githubToken') || '').trim();
    const owner = (localStorage.getItem('ghOwner') || '').trim();
    const repo = (localStorage.getItem('ghRepo') || '').trim();

    if (!token || !owner || !repo || /[^\x00-\x7F]/.test(token)) return;
    if (!window.navigator.onLine) return;

    try {
        const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/data.js?t=${Date.now()}`;
        const r = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!r.ok) return;

        const data = await r.json();
        const scriptText = b64ToUtf8(data.content);
        if (!scriptText) return;

        const script = document.createElement('script');
        script.id = 'githubDataScript';
        script.textContent = scriptText;
        const old = document.getElementById('githubDataScript');
        if (old) old.remove();
        document.body.appendChild(script);

        if (typeof renderCategoryGrid === 'function') renderCategoryGrid();
        const badge = document.getElementById('appVersion');
        if (badge && typeof APP_VERSION !== 'undefined') badge.textContent = APP_VERSION;
    } catch (err) {
        console.warn("Auto sync failed.");
    }
}

async function handleSyncClick() {
    const token = (localStorage.getItem('githubToken') || '').trim();
    const owner = (localStorage.getItem('ghOwner') || '').trim();
    const repo = (localStorage.getItem('ghRepo') || '').trim();

    if (!token || !owner || !repo) {
        alert('Chưa cấu hình!');
        return;
    }

    refreshBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    refreshBtn.disabled = true;

    try {
        const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/data.js?t=${Date.now()}`;
        const r = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github.v3+json' }
        });

        if (!r.ok) throw new Error('HTTP ' + r.status);
        const data = await r.json();
        const scriptText = b64ToUtf8(data.content);

        const script = document.createElement('script');
        script.id = 'githubDataScript';
        script.textContent = scriptText;
        const old = document.getElementById('githubDataScript');
        if (old) old.remove();
        document.body.appendChild(script);

        if (typeof renderCategoryGrid === 'function') renderCategoryGrid();
        const badge = document.getElementById('appVersion');
        if (badge && typeof APP_VERSION !== 'undefined') badge.textContent = APP_VERSION;

        alert('✓ Đã đồng bộ thành công!');
    } catch (err) {
        alert('❌ Lỗi: ' + err.message);
    } finally {
        refreshBtn.innerHTML = '<i class="fa-solid fa-sync"></i> <span>Đồng bộ</span>';
        refreshBtn.disabled = false;
    }
}

async function saveDataToGitHub() {
    const token = (localStorage.getItem('githubToken') || '').trim();
    const owner = (localStorage.getItem('ghOwner') || '').trim();
    const repo = (localStorage.getItem('ghRepo') || '').trim();
    const path = 'data.js';

    const getUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${path}`;
    const getResp = await fetch(getUrl, {
        headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github.v3+json' }
    });

    let sha = null;
    if (getResp.ok) {
        const getData = await getResp.json();
        sha = getData.sha;
    }

    const mods = {
        notes: JSON.parse(localStorage.getItem('kitModifiedNotes') || '{}'),
        names: JSON.parse(localStorage.getItem('kitModifiedNames') || '{}'),
        stts: JSON.parse(localStorage.getItem('kitModifiedSTTs') || '{}'),
        codes: JSON.parse(localStorage.getItem('kitModifiedCodes') || '{}'),
        qtys: JSON.parse(localStorage.getItem('kitModifiedQuantities') || '{}')
    };

    const dateStr = new Date().toLocaleString('vi-VN');
    // USE var INSTEAD OF const TO ALLOW RE-DECLARATION
    let content = `var APP_VERSION = "v2.1 PRO (FINAL) (${dateStr})";\n`;
    content += `var kitDefinitions = ${JSON.stringify(kitDefinitions, null, 4)};\n`;
    content += `var allKitsData = allKitsData || {};\n\nfunction initializeData() {\n    kitDefinitions.forEach(def => {\n        const prefix = def.prefix.normalize('NFC');\n        if (def.count === 1) { if (!allKitsData[prefix]) allKitsData[prefix] = []; }\n        else if (def.count > 1) {\n            for (let i = 1; i <= def.count; i++) {\n                const key = \`\${prefix} \${i}\`;\n                if (!allKitsData[key]) allKitsData[key] = [];\n            }\n        }\n        if (def.extraSubKits) { def.extraSubKits.forEach(name => { const sub = name.normalize('NFC'); if (!allKitsData[sub]) allKitsData[sub] = []; }); }\n    });\n}\ninitializeData();\n\n`;

    const keys = Object.keys(allKitsData).sort((a, b) => a.localeCompare(b, 'vi', { numeric: true }));

    for (let keyRaw of keys) {
        const key = keyRaw.normalize('NFC');
        const raw = allKitsData[keyRaw];
        const processed = [];
        let total = 0;
        let sttCounter = 1;

        for (let i = 0; i < raw.length; i++) {
            const item = { ...raw[i] };
            const kName = `${key}-name-${i}`;
            const kCode = `${key}-code-${i}`;
            const kQty = `${key}-qty-${i}`;
            const kNote = `${key}-note-${i}`;
            const kStt = `${key}-stt-${i}`;

            if (mods.names[kName] !== undefined) item.name = mods.names[kName] === "undefined" ? "" : mods.names[kName];
            if (mods.codes[kCode] !== undefined) item.code = mods.codes[kCode] === "undefined" ? "" : mods.codes[kCode];
            if (mods.notes[kNote] !== undefined) item.note = mods.notes[kNote] === "undefined" ? "" : mods.notes[kNote];
            if (mods.qtys[kQty] !== undefined) {
                const q = mods.qtys[kQty];
                item.quantity = (q === '-' || q === '' || isNaN(q) || q === "undefined") ? 0 : parseInt(q);
            }

            const isTotal = (item.name && item.name.toLowerCase().includes("tổng cộng")) || item.bold;
            if (isTotal) {
                item.name = "TỔNG CỘNG";
                item.bold = true;
                item.stt = mods.stts[kStt] !== undefined ? mods.stts[kStt] : "";
            } else {
                total += (item.quantity || 0);
                if (mods.stts[kStt] !== undefined && mods.stts[kStt] !== "") {
                    item.stt = mods.stts[kStt];
                    if (!isNaN(item.stt)) sttCounter = parseInt(item.stt) + 1;
                } else {
                    item.stt = sttCounter++;
                }
            }
            processed.push(item);
        }

        let totalExist = false;
        for (let p of processed) {
            if (p.bold && p.name === "TỔNG CỘNG") {
                p.quantity = total;
                totalExist = true;
                break;
            }
        }
        if (!totalExist && raw.length > 0) {
            processed.push({ stt: "", name: "TỔNG CỘNG", code: "", quantity: total, bold: true });
        }

        content += `// Data for ${key}\nallKitsData["${key}"] = ${JSON.stringify(processed, null, 2)};\n`;
        let footerText = raw.footer || "";
        if (key === "DỤNG CỤ MỔ HỞ LẺ" && (footerText === "" || footerText.includes("ĐANG CHỜ"))) {
            footerText = "ĐÃ KIỂM";
        }
        if (footerText) {
            content += `allKitsData["${key}"].footer = ${JSON.stringify(footerText)};\n`;
        }
    }

    const b64 = utf8ToB64(content);

    const putResp = await fetch(getUrl, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({ message: `Update Assets (${dateStr})`, content: b64, sha })
    });

    if (!putResp.ok) throw new Error('Status: ' + putResp.status);

    localStorage.removeItem('kitModifiedNotes');
    localStorage.removeItem('kitModifiedNames');
    localStorage.removeItem('kitModifiedSTTs');
    localStorage.removeItem('kitModifiedCodes');
    localStorage.removeItem('kitModifiedQuantities');
    alert('✓ Đã sao lưu thành công!');
    location.reload();
}

async function handleSaveClick() {
    if (!confirm('Lưu dữ liệu?')) return;
    const oldHtml = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    saveBtn.disabled = true;
    try { await saveDataToGitHub(); }
    catch (e) { alert('Lỗi: ' + e.message); }
    finally {
        saveBtn.innerHTML = oldHtml;
        saveBtn.disabled = false;
    }
}

function openGhModal() {
    const m = document.getElementById('githubModal');
    if (m) {
        m.style.display = 'block'; m.classList.add('show');
        document.getElementById('ghToken').value = localStorage.getItem('githubToken') || '';
        document.getElementById('ghOwner').value = localStorage.getItem('ghOwner') || '';
        document.getElementById('ghRepo').value = localStorage.getItem('ghRepo') || '';
    }
}

function closeGhModal() {
    const m = document.getElementById('githubModal');
    if (m) { m.classList.remove('show'); setTimeout(() => m.style.display = 'none', 300); }
}

function handleSaveConfig() {
    const t = document.getElementById('ghToken').value.trim();
    const o = document.getElementById('ghOwner').value.trim();
    const r = document.getElementById('ghRepo').value.trim();
    if (t && o && r) {
        localStorage.setItem('githubToken', t); localStorage.setItem('ghOwner', o); localStorage.setItem('ghRepo', r);
        alert('Đã lưu!'); closeGhModal();
    } else alert('Điền đủ thông tin!');
}

async function handleCheckConnection() {
    const t = document.getElementById('ghToken').value.trim();
    const o = document.getElementById('ghOwner').value.trim();
    const r = document.getElementById('ghRepo').value.trim();
    const btn = document.getElementById('checkConnBtn');
    if (!btn) return;
    btn.disabled = true;
    try {
        const res = await fetch(`https://api.github.com/repos/${encodeURIComponent(o)}/${encodeURIComponent(r)}/contents/data.js`, {
            headers: { 'Authorization': `Bearer ${t}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        alert(res.ok ? '✓ OK' : '❌ ' + res.status);
    } catch (e) { alert('❌ ' + e.message); }
    finally { btn.disabled = false; }
}
