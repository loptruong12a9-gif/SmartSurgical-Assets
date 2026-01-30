const kitDefinitions = [
    { id: 1, baseName: "Bá»˜ Cáº®T Tá»¬ CUNG", prefix: "CTC", count: 3, icon: "fa-scissors", color: "icon-pink" },
    { id: 2, baseName: "KHá»šP Gá»I", prefix: "KHá»šP Gá»I", count: 0, icon: "fa-bone", color: "icon-blue", extraSubKits: ["Bá»˜ Láº¤Y DÃ‚Y CHáº°NG"] },
    { id: 3, baseName: "HC á» Cá»” TAY", prefix: "HC á» Cá»” TAY", count: 1, icon: "fa-hand-paper", color: "icon-teal" },
    { id: 4, baseName: "NIá»†U", prefix: "NIá»†U", count: 3, icon: "fa-filter", color: "icon-orange", extraSubKits: ["Bá»˜ NONG NIá»†U Äáº O"] },
    { id: 5, baseName: "Ná»˜I SOI Sáº¢N", prefix: "NS Sáº¢N", count: 1, icon: "fa-baby", color: "icon-pink" },
    { id: 6, baseName: "Ná»˜I SOI Tá»”NG QUÃT", prefix: "NS Tá»”NG QUÃT", count: 2, icon: "fa-microscope", color: "icon-indigo" },
    { id: 7, baseName: "Sá»Œ NÃƒO", prefix: "Sá»Œ NÃƒO", count: 1, icon: "fa-brain", color: "icon-purple" },
    { id: 8, baseName: "TAI MÅ¨I Há»ŒNG", prefix: "TAI MÅ¨I Há»ŒNG", count: 0, icon: "fa-head-side-virus", color: "icon-pink", extraSubKits: ["NS TAI MÅ¨I Há»ŒNG", "SOI TREO TMH", "Bá»˜ Náº O VA", "Bá»˜ Cáº®T AMIDAN CÅ¨", "Bá»˜ Cáº®T AMIDAN Má»šI 1", "Bá»˜ Cáº®T A Má»šI 2", "Bá»˜ TAI"] },
    { id: 9, baseName: "VI PHáºªU", prefix: "VI PHáºªU", count: 0, icon: "fa-microscope", color: "icon-teal", extraSubKits: ["VI PHáºªU BS PHÆ¯á»šC", "VP Cá»˜T Sá»NG", "VI PHáºªU CÅ¨ (Má»” Há»ž)"] },
    { id: 10, baseName: "Bá»˜ THáº¦N KINH Máº CH MÃU", prefix: "THáº¦N KINH", count: 15, icon: "fa-heart-pulse", color: "icon-red" },
    { id: 11, baseName: "Bá»˜ TIá»‚U PHáºªU", prefix: "TIá»‚U PHáºªU", count: 4, icon: "fa-syringe", color: "icon-green" },
    { id: 12, baseName: "Äáº I PHáºªU", prefix: "Äáº I PHáºªU", count: 1, icon: "fa-user-nurse", color: "icon-red" },
    { id: 13, baseName: "TRUNG PHáºªU", prefix: "TRUNG PHáºªU", count: 2, icon: "fa-user-md", color: "icon-blue" },
    { id: 14, baseName: "XÆ¯Æ NG CHI TRÃŠN", prefix: "XÆ¯Æ NG CHI TRÃŠN", count: 1, icon: "fa-hand-holding-medical", color: "icon-orange" },
    { id: 15, baseName: "XÆ¯Æ NG CHI DÆ¯á»šI", prefix: "XÆ¯Æ NG CHI DÆ¯á»šI", count: 1, icon: "fa-wheelchair", color: "icon-purple" },
    { id: 16, baseName: "CAPPA", prefix: "CAPPA", count: 2, icon: "fa-notes-medical", color: "icon-indigo" },
    { id: 17, baseName: "THOÃT Vá»Š LÆ¯NG", prefix: "TV LÆ¯NG", count: 2, icon: "fa-crutch", color: "icon-blue" },
    { id: 18, baseName: "THOÃT Vá»Š Cá»”", prefix: "TV Cá»”", count: 1, icon: "fa-head-side-mask", color: "icon-green" },
    { id: 19, baseName: "Bá»˜ KHOAN PIN", prefix: "KHOAN PIN", count: 1, icon: "fa-screwdriver", color: "icon-blue" },
    { id: 20, baseName: "Bá»˜ Báº®T CON", prefix: "Báº®T CON", count: 3, icon: "fa-child", color: "icon-green" },
    { id: 21, baseName: "Bá»˜ LÃ•M NGá»°C", prefix: "LÃ•M NGá»°C", count: 1, icon: "fa-lungs", color: "icon-blue" }
];

let allKitsData = {};

function initializeData() {
    kitDefinitions.forEach(def => {
        if (def.count === 1) {
            if (!allKitsData[def.prefix]) allKitsData[def.prefix] = [];
        } else if (def.count > 1) {
            for (let i = 1; i <= def.count; i++) {
                const key = `${def.prefix} ${i}`;
                if (!allKitsData[key]) allKitsData[key] = [];
            }
        }

        if (def.extraSubKits) {
            def.extraSubKits.forEach(subName => {
                if (!allKitsData[subName]) {
                    allKitsData[subName] = [];
                }
            });
        }
    });
}
initializeData();

// Data for Báº®T CON 1
allKitsData["Báº®T CON 1"] = [
    { stt: 1, name: "KELLY TRUNG", code: "BH135R", quantity: 6 },
    { stt: 2, name: "FIXANG", code: "BF432R+431R<br>+436R", quantity: 4 },
    { stt: 3, name: "KÃ‰O MAYO", code: "LAWTON", quantity: 1 },
    { stt: "", name: "KÃ‰O EACULAP", code: "BC557R", quantity: 1 },
    { stt: 4, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "HB0302", quantity: 3 },
    { stt: 6, name: "NHÃP KHÃ”NG Máº¤U", code: "BD051R", quantity: 3 },
    { stt: 7, name: "KOCHER THáº²NG", code: "BH646R", quantity: 2 },
    { stt: 8, name: "Káº¸P TAM GIÃC", code: "EA061R", quantity: 1 },
    { stt: 9, name: "Káº¸P TÄ‚M BÃ”NG", code: "BF122R", quantity: 1 },
    { stt: 10, name: "VAN Sáº¢N", code: "BV668R", quantity: 1 },
    { stt: 11, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 12, name: "PARAPOP", code: "BT021R", quantity: 2 },
    { stt: 13, name: "VAN Vá»†", code: "EL638", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 28, bold: true }
];

// Data Input: HC á» Cá»” TAY
allKitsData["HC á» Cá»” TAY"] = [
    { stt: 1, name: "KÃ‰O Cáº®T CHá»ˆ", code: "LAWTON", quantity: 1, note: "" },
    { stt: 2, name: "KÃ‰O MESS Äáº¦N Cáº®N VÃ€NG", code: "BC271R", quantity: 1, note: "" },
    { stt: 3, name: "KÃ‰O MESS NHá»ŒN", code: "BC157R", quantity: 1, note: "" },
    { stt: 4, name: "ALISS", code: "HB4302", quantity: 2, note: "" },
    { stt: 5, name: "ALISS", code: "AE016R", quantity: 1, note: "" },
    { stt: 5, name: "CÃN DAO Sá» 3", code: "BB073", quantity: 1, note: "" },
    { stt: 6, name: "KELLY NHá»Ž", code: "BH111R", quantity: 10, note: "" },
    { stt: 7, name: "NHÃP VI PHáºªU KO Máº¤U", code: "", quantity: 2, note: "" },
    { stt: 8, name: "NHÃP VI PHáºªU CÃ“ Máº¤U", code: "", quantity: 2, note: "" },
    { stt: 9, name: "KÃŒá»€M Káº¸P KIM", code: "BM016R", quantity: 1, note: "" },
    { stt: 10, name: "FIX SÃNG", code: "BF432R+B7013+BF437R", quantity: 4, note: "" },
    { stt: 11, name: "BÄ‚NG DA NHá»Ž", code: "BVHD", quantity: 1, note: "" },
    { stt: 12, name: "PARAPOP MÃ“C", code: "", quantity: 2, note: "" },
    { stt: 13, name: "QUáºº DáºªN ÄÆ¯á»œNG", code: "", quantity: 1, note: "" },
    { stt: 14, name: "PARAPOP NHá»Œ", code: "BT020", quantity: 2, note: "" },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 31, bold: true }
];
allKitsData["HC á» Cá»” TAY"].footer = "ÄÃƒ KIá»‚M";
allKitsData["Báº®T CON 1"].footer = "ÄÃƒ KIá»‚M 01/2026";

// Data for TIá»‚U PHáºªU 3
allKitsData["TIá»‚U PHáºªU 3"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R", quantity: 2 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 4 },
    { stt: 3, name: "KELLY THáº²NG", code: "BH134R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R<br>BD069R", quantity: 2 },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 6, name: "ALISS", code: "EA016R", quantity: 1 },
    { stt: 7, name: "FIX XÄ‚NG", code: "2.437R<br>2.431R", quantity: 4 },
    { stt: 8, name: "KÃ‰O MESK DÃ€I", code: "BC271", quantity: 1 },
    { stt: 9, name: "KÃ‰O Cáº®T CHá»ˆ", code: "KhÃ´ng mÃ£", quantity: 1 },
    { stt: 10, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 11, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 12, name: "CÃN DAO Sá» 3", code: "khÃ´ng mÃ£", quantity: 1 },
    { stt: 14, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 15, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1, note: "HEBU" },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "(ÄÃƒ KIá»‚M 01/2026)", quantity: 24, bold: true }
];
allKitsData["TIá»‚U PHáºªU 3"].footer = "ÄÃƒ KIá»‚M 01/2026";

// Data for TIá»‚U PHáºªU 4
allKitsData["TIá»‚U PHáºªU 4"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "4101", quantity: 2 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 4 },
    { stt: 3, name: "KELLY THáº²NG", code: "BH134R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223", quantity: 1, note: "HEBU" },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "HB0302", quantity: 1, note: "HEBU" },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 1, note: "HEBU" },
    { stt: 7, name: "FIX XÄ‚NG", code: "2.BF437R, 2.BF431R", quantity: 4 },
    { stt: 8, name: "KÃ‰O MESK NHá»ŒN", code: "BC157R", quantity: 0 }, // Row exists but quantity empty in image
    { stt: 9, name: "KÃ‰O MESK DÃ€I", code: "BC271R", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ", code: "50114", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO Sá» 3", code: "BB073R", quantity: 1 },
    { stt: 14, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 15, name: "Ká»€M Káº¸P KIM", code: "80100", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 23, bold: true }
];
allKitsData["TIá»‚U PHáºªU 4"].footer = "ÄÃƒ KIá»‚M";

// Data for TRUNG PHáºªU 1
allKitsData["TRUNG PHáºªU 1"] = [
    { stt: 1, name: "KELLY CONG", code: "BH135R", quantity: 11, note: "GÃƒY 3" },
    { stt: 2, name: "KELLY CONG", code: "BH141R", quantity: 1 },
    { stt: 3, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 4, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 5, name: "Ká»€M Káº¸P KIM DÃ€I", code: "BM240", quantity: 1 },
    { stt: 6, name: "KÃ‰O Cáº®T CHá»ˆ", code: "HB1706", quantity: 1 },
    { stt: 7, name: "KÃ‰O MESK", code: "BC271", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "", quantity: 1 },
    { stt: 9, name: "ALISS NGáº®N", code: "HB4302", quantity: 4 },
    { stt: 10, name: "ALISS DÃ€I", code: "EA020", quantity: 3 },
    { stt: 11, name: "FIXANG", code: "BF437", quantity: 5 },
    { stt: 12, name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R", quantity: 1 },
    { stt: 13, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: 14, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 15, name: "NHÃP CÃ“ Máº¤U", code: "", quantity: 1 },
    { stt: 16, name: "CÃN DAO Sá» 3", code: "", quantity: 1 },
    { stt: 17, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 18, name: "PARAPOP NHá»Ž", code: "BT020", quantity: 2 },
    { stt: 19, name: "Káº¸P TAM GIÃC Lá»šN", code: "EA042R", quantity: 2 },
    { stt: 20, name: "Káº¸P TAM GIÃC NHá»Ž", code: "EA037R", quantity: 2 },
    { stt: 21, name: "BABCOCK", code: "(FB032,EA032,<br>FB936)", quantity: 3 },
    { stt: 22, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 23, name: "Káº¸P TÄ‚M BÃ”NG", code: "", quantity: 1 },
    { stt: 24, name: "DIVER Lá»šN", code: "BT614R", quantity: 1 },
    { stt: 25, name: "DIVER NHá»Ž", code: "BT611R", quantity: 1 },
    { stt: 26, name: "RECHARSON", code: "BT472R", quantity: 2 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 51, bold: true }
];
allKitsData["TRUNG PHáºªU 1"].footer = "ÄÃƒ KIá»‚M";

// Data for Äáº I PHáºªU
allKitsData["Äáº I PHáºªU"] = [
    { stt: 1, name: "FIXANG", code: "BF433R", quantity: 10 },
    { stt: 2, name: "BANH Bá»¤NG", code: "BV608R", quantity: 1 },
    { stt: 3, name: "VAN Bá»¤NG + VAN Sáº¢N", code: "", quantity: 1 },
    { stt: 4, name: "PARAPOP", code: "BT020R", quantity: 2 },
    { stt: 5, name: "á»NG HÃšT", code: "GF944R", quantity: 1 },
    { stt: 6, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 7, name: "CÃN DAO Sá» 3", code: "BB073R", quantity: 1 },
    { stt: 8, name: "TÄ‚M BÃ”NG", code: "BF120R", quantity: 1 },
    { stt: 9, name: "BABCOCK Lá»šN", code: "EA052R", quantity: 2 },
    { stt: 10, name: "KOCHER THáº²NG", code: "BH648R", quantity: 4 },
    { stt: 11, name: "KELLY Lá»šN", code: "BH449R", quantity: 4 },
    { stt: 12, name: "KELLY THáº²NG", code: "BH474R", quantity: 4 },
    { stt: 13, name: "KELLY THáº²NG", code: "BH210R", quantity: 6 },
    { stt: 14, name: "KELLY THáº²NG", code: "BH166R", quantity: 6 },
    { stt: 15, name: "KELLY CONG", code: "BH135R", quantity: 9 },
    { stt: 16, name: "KELLY CONG", code: "BH141R", quantity: 1 },
    { stt: 17, name: "ALISS DÃ€I", code: "EA020R", quantity: 4 },
    { stt: 18, name: "ALISS NGáº®N", code: "EA016R", quantity: 4 },
    { stt: 19, name: "Ká»€M Káº¸P KIM Lá»šN", code: "BM070R", quantity: 1 },
    { stt: 20, name: "Ká»€M Káº¸P KIM", code: "BM236R", quantity: 1 },
    { stt: 21, name: "KÃ‰O Cáº®T CHá»ˆ", code: "", quantity: 1 },
    { stt: 22, name: "NHÃP KHÃ”NG Máº¤U DÃ€I", code: "BD031R", quantity: 1 },
    { stt: 23, name: "NHÃP KHÃ”NG Máº¤U NGáº®N", code: "BD029R", quantity: 1 },
    { stt: 24, name: "NHÃP CÃ“ Máº¤U", code: "RZ 130-110-145", quantity: 1 },
    { stt: 25, name: "DIVER Lá»šN", code: "BV HD", quantity: 1 },
    { stt: 26, name: "DIVER NHá»Ž", code: "BT611R", quantity: 2 },
    { stt: 27, name: "RECHARSON", code: "BT472R", quantity: 1 },
    { stt: 28, name: "KÃ‰O MESK", code: "SNOW", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 73, bold: true }
];
allKitsData["Äáº I PHáºªU"].footer = "ÄÃƒ KIá»‚M";

// Data for TRUNG PHáºªU 2
allKitsData["TRUNG PHáºªU 2"] = [
    { stt: 1, name: "DIVER Lá»šN", code: "BT614R", quantity: 1 },
    { stt: 2, name: "DIVER NHá»Ž", code: "BT611R", quantity: 1 },
    { stt: 3, name: "RICHARSON Lá»šN", code: "BT472R", quantity: 1 },
    { stt: 4, name: "RICHARSON NHá»Ž", code: "BT471R", quantity: 2 },
    { stt: 5, name: "á»NG HÃšT", code: "GF944R", quantity: 1 },
    { stt: 6, name: "Ká»€M Káº¸P KIM", code: "BM240R", quantity: 1 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 8, name: "Ká»€M Káº¸P KIM", code: "LAWTON", quantity: 1 },
    { stt: 8, name: "BABCOCK Lá»šN", code: "FB934R", quantity: 2 },
    { stt: 9, name: "BABCOCK NHá»Ž", code: "EA033R", quantity: 1 },
    { stt: 10, name: "Káº¸P TAM GIÃC Lá»šN", code: "EA042R", quantity: 4 },
    { stt: 11, name: "Káº¸P TAM GIÃC NHá»Ž", code: "EA037R", quantity: 1 },
    { stt: 12, name: "KELLY CONG NHá»Ž", code: "EA315R", quantity: 15 },
    { stt: 13, name: "ALISS NHá»Ž", code: "HB4302", quantity: 4, note: "Ä‘Ã£ thay 4 aliss hebu" },
    { stt: 14, name: "ALISS Lá»šN", code: "EA020R", quantity: 3 },
    { stt: 15, name: "FIXANG", code: "BF433R", quantity: 5 },
    { stt: 16, name: "PARAPOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 17, name: "CÃN DAO Sá» 3", code: "BB073R", quantity: 1 },
    { stt: 18, name: "CÃN DAO Sá» 4", code: "BVHD", quantity: 1 },
    { stt: 19, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 20, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: "", name: "NHÃP CÃ“ Máº¤U", code: "BVHD", quantity: 1 },
    { stt: 21, name: "NHÃP KHÃ”NG Máº¤U", code: "BD030R", quantity: 1 },
    { stt: 22, name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R", quantity: 1 },
    { stt: 23, name: "KÃ‰O MESK", code: "BC670R", quantity: 1 },
    { stt: 24, name: "KÃ‰O MAYO", code: "", quantity: 1 },
    { stt: 25, name: "QUE THÄ‚M DÃ’", code: "BN095", quantity: 1 },
    { stt: 26, name: "Káº¸P TÄ‚M BÃ”NG", code: "BF122R", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 57, bold: true }
];
allKitsData["TRUNG PHáºªU 2"].footer = "ÄÃƒ KIá»‚M";

// Data for XÆ¯Æ NG CHI DÆ¯á»šI
allKitsData["XÆ¯Æ NG CHI DÆ¯á»šI"] = [
    { stt: 1, name: "CÃN DAO Sá» 4", code: "", quantity: 1 },
    { stt: 2, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: 3, name: "NHÃP KHÃ”NG Máº¤U", code: "BD030", quantity: 1 },
    { stt: 4, name: "NHÃP CÃ“ Máº¤U", code: "", quantity: 1 },
    { stt: 5, name: "KELLY CONG", code: "BH167", quantity: 6 },
    { stt: 6, name: "FIXANG", code: "BF432", quantity: 6, note: "GÃƒY 1" },
    { stt: 7, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 8, name: "TÄ‚M BÃ”NG", code: "", quantity: 1 },
    { stt: 9, name: "ALISS", code: "AE026", quantity: 4 },
    { stt: 10, name: "PARAPOP MÃ“C", code: "BT504", quantity: 2 },
    { stt: 11, name: "PARAPOP Lá»šN", code: "", quantity: 2 },
    { stt: 12, name: "PARAPOP 1 Äáº¦U", code: "RJ170", quantity: 2 },
    { stt: 13, name: "GU Gáº¶M XÆ¯Æ NG", code: "FO192", quantity: 1 },
    { stt: 14, name: "THÆ¯á»šC ÄO", code: "AA846", quantity: 1 },
    { stt: 15, name: "GIÃ’ GÃ€", code: "FO192", quantity: 2 },
    { stt: 16, name: "Äá»¤C LÃ’NG MÃNG", code: "FL574", quantity: 2 },
    { stt: 17, name: "Äá»¤C THáº²NG", code: "FL524", quantity: 2 },
    { stt: 18, name: "Äá»¤C LÃ’NG MÃNG", code: "FL134", quantity: 1 },
    { stt: 19, name: "DÃ™I NHá»ŒN", code: "FR120", quantity: 1 },
    { stt: 20, name: "DÃ™I NHá»ŒN XOáº®N", code: "FO435", quantity: 1 },
    { stt: 21, name: "CURET Lá»šN", code: "280374", quantity: 1 },
    { stt: 22, name: "CURET NHá»Ž", code: "", quantity: 1 },
    { stt: 23, name: "DAVIE CONG", code: "FO1706", quantity: 1 },
    { stt: 24, name: "THÆ¯á»šC ÄO", code: "KH099", quantity: 1 },
    { stt: 25, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 26, name: "KÃ‰O Cáº®T CHá»ˆ", code: "5060", quantity: 1 },
    { stt: 27, name: "KÃ‰O MESK", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 44, bold: true }
];
allKitsData["XÆ¯Æ NG CHI DÆ¯á»šI"].footer = "ÄÃƒ KIá»‚M";

// Data for XÆ¯Æ NG CHI TRÃŠN
allKitsData["XÆ¯Æ NG CHI TRÃŠN"] = [
    { stt: 1, name: "CÃN DAO Sá» 4", code: "", quantity: 1 },
    { stt: 2, name: "CÃN DAO Sá» 3", code: "BB073", quantity: 1 },
    { stt: 3, name: "KELLY CONG DÃ€I", code: "BH 183", quantity: 8, note: "GÃƒY 1" },
    { stt: 4, name: "ALISS", code: "EA020", quantity: 3 },
    { stt: 5, name: "FIXANG", code: "", quantity: 5 },
    { stt: 6, name: "KÃ‰O Cáº®T CHá»ˆ", code: "", quantity: 1 },
    { stt: 7, name: "KÃ‰O MESK", code: "", quantity: 1 },
    { stt: 8, name: "Ká»€M Káº¸P KIM", code: "BM249", quantity: 1 },
    { stt: 9, name: "Ká»€M Káº¸P KIM NGáº®N", code: "", quantity: 1, note: "HÆ¯" },
    { stt: 10, name: "NHÃP CÃ“ Máº¤U", code: "", quantity: 1 },
    { stt: 11, name: "NHÃP KHÃ”NG Máº¤U", code: "", quantity: 2 },
    { stt: 12, name: "PARAPOP NHá»Ž", code: "", quantity: 2 },
    { stt: 13, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 14, name: "GIÃ’ GÃ€", code: "FO190R", quantity: 2 },
    { stt: 15, name: "Äá»¤C LÃ’NG MÃNG NHá»Ž", code: "FL136R", quantity: 1 },
    { stt: 16, name: "Äá»¤C LÃ’NG MÃNG Lá»šN", code: "FL574", quantity: 2 },
    { stt: 17, name: "Äá»¤C THáº²NG", code: "FL524", quantity: 2 },
    { stt: 18, name: "CURET NHá»Ž", code: "FK841R", quantity: 1 },
    { stt: 19, name: "CURET Lá»šN", code: "FK842R", quantity: 1 },
    { stt: 20, name: "GU Lá»šN", code: "F0530R", quantity: 1 },
    { stt: 21, name: "DÃ™I NHá»ŒN", code: "FR120R", quantity: 1 },
    { stt: 22, name: "THÆ¯á»šC ÄO", code: "AA846R", quantity: 1 },
    { stt: 23, name: "Ká»€M GIá»® XÆ¯Æ NG THáº²NG", code: "", quantity: 2 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 42, bold: true }
];
allKitsData["XÆ¯Æ NG CHI TRÃŠN"].footer = "ÄÃƒ KIá»‚M";

// Data for Cáº®T Tá»¬ CUNG 3 (Assuming CTC 3)
allKitsData["CTC 3"] = [
    { stt: 1, name: "BANH Bá»¤NG Tá»° Äá»˜NG", code: "BV605R", quantity: 1 },
    { stt: 2, name: "VAN Sáº¢N", code: "BV611", quantity: 1 },
    { stt: 3, name: "DIVER Lá»šN", code: "BT614R", quantity: 1 },
    { stt: 4, name: "DIVER NHá»Ž", code: "BT611R", quantity: 2 },
    { stt: 5, name: "MALEAP Lá»šN", code: "BT758R", quantity: 1 },
    { stt: 6, name: "MALEAP NHá»Ž", code: "BT750R", quantity: 1 },
    { stt: 7, name: "RECHARSON Lá»šN", code: "BT472R", quantity: 1 },
    { stt: 8, name: "RECHARSON NHá»Ž", code: "M62", quantity: 1 },
    { stt: 9, name: "PARAPOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 10, name: "á»NG HÃšT", code: "GF944R", quantity: 1 },
    { stt: 11, name: "THÆ¯á»šC ÄO Tá»¬ CUNG", code: "EO101R", quantity: 1 },
    { stt: 12, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 13, name: "Ká»€M Káº¸P KIM Lá»šN", code: "BM070", quantity: 1 },
    { stt: 14, name: "Ká»€M Káº¸P KIM NHá»Ž", code: "BM066R", quantity: 1 },
    { stt: 15, name: "Ká»€M Káº¸P KIM CONG", code: "BM096R", quantity: 1 },
    { stt: 16, name: "POZZI", code: "", quantity: 2 },
    { stt: 17, name: "FIX SANG", code: "BF431R", quantity: 5 },
    { stt: 18, name: "XÃ€ MÃ‚U", code: "BJ057", quantity: 1 },
    { stt: 19, name: "ALISS DÃ€I", code: "EA020R", quantity: 4 },
    { stt: 20, name: "ALISS NGáº®N", code: "EA016R", quantity: 2 },
    { stt: 21, name: "KELLY NHá»Ž á»M DÃ€I", code: "BH211R", quantity: 4 },
    { stt: 22, name: "KELLY TRUNG", code: "BH165R", quantity: 8 },
    { stt: 23, name: "Káº¸P HEANY", code: "BT520R", quantity: 4 },
    { stt: 24, name: "BABCOK", code: "EA052R", quantity: 2 },
    { stt: 25, name: "KOCHER NGáº®N", code: "BH646R", quantity: 2 },
    { stt: 26, name: "KOCHER DÃ€I", code: "BH648R", quantity: 2 },
    { stt: 27, name: "Káº¸P TAM GIÃC", code: "EA061R", quantity: 3 },
    { stt: 28, name: "KÃ‰O MESK", code: "BC277R", quantity: 1 },
    { stt: 29, name: "KÃ‰O Cáº®T CHá»ˆ", code: "LAWTON", quantity: 1 },
    { stt: 30, name: "NHÃP DÃ€I KHÃ”NG Máº¤U", code: "BVHD", quantity: 1 },
    { stt: 31, name: "NHÃP TRUNG KHÃ”NG Máº¤U", code: "GERMAN", quantity: 1 },
    { stt: 32, name: "NHÃP CÃ“ Máº¤U", code: "ROLAN", quantity: 1 },
    { stt: 33, name: "Ká»€M TÄ‚M BÃ”NG", code: "BF120", quantity: 1 },
    { stt: 34, name: "ERCARTO VENE", code: "RZ170", quantity: 2 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 64, bold: true }
];
allKitsData["CTC 3"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ NONG NIá»†U Äáº O
allKitsData["Bá»˜ NONG NIá»†U Äáº O"] = [
    { stt: 1, name: "cÃ¢y nong sá»‘ 28", code: "", quantity: 1 },
    { stt: 2, name: "cÃ¢y nong sá»‘ 30", code: "", quantity: 1 },
    { stt: 3, name: "cÃ¢y nong sá»‘ 24", code: "RZ 253-330-335", quantity: 2 },
    { stt: 4, name: "cÃ¢y nong sá»‘ 22", code: "", quantity: 1 },
    { stt: 5, name: "cÃ¢y nong sá»‘ 26", code: "", quantity: 1 },
    { stt: 6, name: "cÃ¢y nong sá»‘ 18", code: "", quantity: 1 },
    { stt: 7, name: "cÃ¢y nong sá»‘ 15", code: "RZ 253-325-356", quantity: 1 },
    { stt: 8, name: "cÃ¢y nong sá»‘ 17", code: "RZ 253-326-356", quantity: 1 },
    { stt: 9, name: "cÃ¢y nong sá»‘ 19", code: "RZ 253-327-356", quantity: 1 },
    { stt: 10, name: "cÃ¢y nong sá»‘ 20", code: "RZ 253-328-335", quantity: 2 },
    { stt: 11, name: "cÃ¢y nong sá»‘ 18", code: "RZ 253-327-335", quantity: 1 },
    { stt: 12, name: "cÃ¢y nong sá»‘ 14", code: "RZ 253-325-335", quantity: 1 },
    { stt: 13, name: "cÃ¢y nong sá»‘ 21", code: "RZ 253-328-356", quantity: 1 },
    { stt: 14, name: "cÃ¢y nong sá»‘ 16", code: "RZ 253-326-335", quantity: 1 },
    { stt: 15, name: "cÃ¢y nong sá»‘ 23", code: "RZ 253-329-356", quantity: 1 },
    { stt: 16, name: "á»‘ng hÃºt sá»‘ 6", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 18, bold: true }
];
allKitsData["Bá»˜ NONG NIá»†U Äáº O"].footer = "ÄÃƒ KIá»‚M";

// Data for Cáº®T Tá»¬ CUNG 1 (CTC 1)
allKitsData["CTC 1"] = [
    { stt: 1, name: "BANH Bá»¤NG Tá»° Äá»˜NG", code: "BV605R", quantity: 1 },
    { stt: 2, name: "VAN Sáº¢N", code: "EL638", quantity: 1 },
    { stt: 3, name: "VAN Vá»† Lá»šN VUÃ”NG", code: "EL638R", quantity: 1 },
    { stt: 4, name: "VAN Ã‚M Äáº O", code: "EL445R", quantity: 1 },
    { stt: 5, name: "VAN Ã‚M Äáº O", code: "EL455R", quantity: 1 },
    { stt: 6, name: "DIVER Lá»šN", code: "BT614R", quantity: 1 },
    { stt: 7, name: "DIVER NHá»Ž", code: "BT611R", quantity: 2 },
    { stt: 8, name: "MALEAP Lá»šN", code: "BT758R", quantity: 1 },
    { stt: 9, name: "MALEAP NHá»Ž", code: "BT750R", quantity: 1 },
    { stt: 10, name: "RECHARSON Lá»šN", code: "BT472R", quantity: 2 },
    { stt: 11, name: "RECHARSON NHá»Ž", code: "BT471R", quantity: 1 },
    { stt: 12, name: "PARAPOP", code: "BT021R", quantity: 2 },
    { stt: 13, name: "á»NG HÃšT", code: "GF944R", quantity: 1 },
    { stt: 14, name: "THÆ¯á»šC ÄO Tá»¬ CUNG", code: "EO101R", quantity: 1 },
    { stt: 15, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 16, name: "Ká»€M Káº¸P KIM Lá»šN", code: "BM068R", quantity: 1 },
    { stt: 17, name: "Ká»€M Káº¸P KIM NHá»Ž", code: "BM066R", quantity: 1 },
    { stt: 18, name: "Ká»€M Káº¸P KIM CONG", code: "BM096R", quantity: 1 },
    { stt: 19, name: "KELLY Äáº I", code: "BH475R", quantity: 4 },
    { stt: 20, name: "POZZI", code: "EO125R", quantity: 2 },
    { stt: 21, name: "FIX SANG", code: "BF431R", quantity: 5 },
    { stt: 22, name: "XÃ€ MÃ‚U", code: "CH1725", quantity: 1 },
    { stt: 23, name: "ALISS DÃ€I", code: "EA020R", quantity: 2 },
    { stt: 24, name: "ALISS NGáº®N", code: "EA016R", quantity: 2 },
    { stt: 25, name: "KELLY NHá»Ž DÃ€I", code: "BH211R", quantity: 3 },
    { stt: 26, name: "KELLY TRUNG", code: "BH165R", quantity: 8 },
    { stt: 27, name: "HENEAY", code: "BT520R", quantity: 4 },
    { stt: 28, name: "Báº®T CÃ“C Lá»šN", code: "FB934R +936", quantity: 3 },
    { stt: 29, name: "Báº®T CONG TRUNG", code: "EA033R", quantity: 3 },
    { stt: 30, name: "KOCHER NGáº®N", code: "BH646R", quantity: 2 },
    { stt: 31, name: "KOCHER DÃ€I", code: "BH650R", quantity: 2 },
    { stt: 32, name: "TAM GIÃC", code: "EA042R", quantity: 3 },
    { stt: 33, name: "KÃ‰O MESS", code: "BC277R", quantity: 1 },
    { stt: 34, name: "KÃ‰O Cáº®T CHá»ˆ", code: "120031170", quantity: 1 },
    { stt: 35, name: "NHÃP DÃ€I KHÃ”NG Máº¤U", code: "BVHD", quantity: 1 },
    { stt: 36, name: "NHÃP TRUNG KHÃ”NG Máº¤U", code: "GERMAN", quantity: 1 },
    { stt: 37, name: "NHÃP CÃ“ Máº¤U", code: "ROLAN", quantity: 1 },
    { stt: 38, name: "Ká»€M TÄ‚M BÃ”NG", code: "BF120", quantity: 1 },
    { stt: 39, name: "ERCARTO VENE", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 72, bold: true }
];
allKitsData["CTC 1"].footer = "ÄÃƒ KIá»‚M";

// Data for Ná»˜I SOI Tá»”NG QUÃT 1 (Bá»˜ Dá»¤NG Cá»¤ Ná»˜I SOI Tá»”NG QUÃT CÅ¨)
allKitsData["NS Tá»”NG QUÃT 1"] = [
    { stt: 1, name: "TAY Cáº¦M CÃ“ KHÃ“A", code: "", quantity: 2, note: "1 GÃƒY" },
    { stt: 2, name: "TAY Cáº¦M KHÃ”NG KHÃ“A", code: "", quantity: 4, note: "1 HÆ¯" },
    { stt: 3, name: "Vá»Ž Láº®P Dá»¤NG Cá»¤", code: "", quantity: 8 },
    { stt: 4, name: "LAM Káº¸P RUá»˜T", code: "", quantity: 1 },
    { stt: 5, name: "Báº®T CÃ“C", code: "", quantity: 1 },
    { stt: 6, name: "KELLY", code: "", quantity: 1 },
    { stt: 7, name: "KÃ‰O MESK", code: "", quantity: 2 },
    { stt: 9, name: "KELLY NHá»Ž", code: "", quantity: 1 },
    { stt: 10, name: "TROCA 10MM", code: "", quantity: 2 },
    { stt: 11, name: "Náº®P TROCA 10MM", code: "", quantity: 2 },
    { stt: 12, name: "TROCA 5MM", code: "", quantity: 3 },
    { stt: 13, name: "Náº®P TROCA 5MM", code: "", quantity: 3 },
    { stt: 14, name: "á»NG GIáº¢M", code: "", quantity: 1 },
    { stt: 15, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 16, name: "NÃ’NG TROCA 10MM", code: "", quantity: 2 },
    { stt: 17, name: "NÃ’NG TROCA 5MM", code: "", quantity: 2 },
    { stt: 18, name: "MÃ“C Äá»T", code: "", quantity: 1 },
    { stt: 19, name: "CÃ‚Y Äáº¨Y CHá»ˆ", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 38, bold: true }
];
allKitsData["NS Tá»”NG QUÃT 1"].footer = "ÄÃƒ KIá»‚M";

// Data for Ná»˜I SOI Tá»”NG QUÃT 2
allKitsData["NS Tá»”NG QUÃT 2"] = [
    { stt: 1, name: "DÃ¢y dáº«n sÃ¡ng", code: "495NCS", quantity: 1, note: "KARL-STORZ" },
    { stt: 2, name: "NÃ²ng trong troca(5mm)", code: "30160P", quantity: 1, note: "KARL-STORZ" },
    { stt: 3, name: "NÃ²ng trong troca(10mm)", code: "30103P", quantity: 1, note: "KARL-STORZ" },
    { stt: 4, name: "á»ng thÃ´ng khÃ´ng van(5mm)", code: "30160H2", quantity: 3, note: "KARL-STORZ" },
    { stt: 5, name: "á»ng thÃ´ng khÃ´ng van(10mm)", code: "30103H2", quantity: 2, note: "KARL-STORZ" },
    { stt: 6, name: "Van Ä‘a nÄƒng(10mm)", code: "30103M1", quantity: 2, note: "KARL-STORZ" },
    { stt: 7, name: "Van Ä‘a nÄƒng(5mm)", code: "30160M1", quantity: 3, note: "KARL-STORZ" },
    { stt: 8, name: "Dá»¥ng cá»¥ giáº£m", code: "30141DB", quantity: 1, note: "KARL-STORZ" },
    { stt: 9, name: "Tay cáº§m nhá»±a cÃ³ khÃ³a", code: "33122", quantity: 3, note: "KARL-STORZ" },
    { stt: 10, name: "Tay cáº§m nhá»±a khÃ´ng khÃ³a", code: "33121", quantity: 3, note: "KARL-STORZ" },
    { stt: 11, name: "Vá» ngoÃ i", code: "33300", quantity: 6, note: "KARL-STORZ" },
    { stt: 12, name: "Ruá»™t káº¹p KELLY", code: "33310ML", quantity: 1, note: "KARL-STORZ" },
    { stt: 13, name: "Ruá»™t káº¹p klamp káº¹p ruá»™t", code: "33310C", quantity: 2, note: "KARL-STORZ" },
    { stt: 14, name: "Ruá»™t káº¹p RAPPER", code: "33310UL", quantity: 1, note: "KARL-STORZ" },
    { stt: 15, name: "Ruá»™t káº¹p pháº«u tÃ­ch BABCOCK", code: "33310A", quantity: 1, note: "KARL-STORZ" },
    { stt: 16, name: "Ruá»™t kÃ©o METZENBAUN", code: "34310MS", quantity: 1, note: "KARL-STORZ" },
    { stt: 17, name: "Ruá»™t kÃ©o cáº¯t chá»‰", code: "34310EH", quantity: 1, note: "KARL-STORZ" },
    { stt: 18, name: "mÃ³c Ä‘á»‘t", code: "26775UF", quantity: 1, note: "KARL-STORZ" },
    { stt: 19, name: "Tay cáº§m BIPOLAR", code: "26296HM", quantity: 1, note: "KARL-STORZ" },
    { stt: 20, name: "á»ng vá» ngoÃ i BIPOLAR", code: "26276A", quantity: 1, note: "KARL-STORZ" },
    { stt: 21, name: "Vá» trong BIPOLAR", code: "26276B", quantity: 1, note: "KARL-STORZ" },
    { stt: 22, name: "Ruá»™t káº¹p BIPOLAR", code: "26176HW", quantity: 1, note: "KARL-STORZ" },
    { stt: 23, name: "Kim mang kim KOH pháº£i", code: "26173KC", quantity: 1, note: "KARL-STORZ" },
    { stt: 24, name: "Dá»¥ng cá»¥ cháº¯n gan", code: "30623FP", quantity: 1, note: "KARL-STORZ" },
    { stt: 25, name: "á»ng hÃºt", code: "26173BN", quantity: 1, note: "KARL-STORZ" },
    { stt: 26, name: "Há»™p Ä‘á»±ng dá»¥ng cá»¥", code: "27717D", quantity: 1, note: "KARL-STORZ" },
    { stt: 27, name: "Que Ä‘áº©y chá»‰", code: "26596D", quantity: 1, note: "KARL-STORZ" },
    { stt: 28, name: "Kim mang kim KOH trÃ¡i", code: "26596D", quantity: 1, note: "KARL-STORZ" }
];
allKitsData["NS Tá»”NG QUÃT 2"].footer = "ÄÃƒ KIá»‚M 01/2026";

// Data for Cáº®T Tá»¬ CUNG 2 (Assumed)
allKitsData["CTC 2"] = [
    { stt: 1, name: "KELLY CONG TRUNG", code: "BH165R", quantity: 8 },
    { stt: 2, name: "KELLY CONG á»M DÃ€I", code: "BH211", quantity: 3 },
    { stt: 3, name: "KELLY Lá»šN", code: "BH 449", quantity: 4 },
    { stt: 4, name: "ALISS DÃ€I", code: "EA020", quantity: 4 },
    { stt: 5, name: "ALISS NGáº®N", code: "EA016", quantity: 2 },
    { stt: 6, name: "FIXANG", code: "BF431", quantity: 5 },
    { stt: 7, name: "KOCHER THáº²NG DÃ€I", code: "BH 650", quantity: 2 },
    { stt: 8, name: "KOCHER THáº²NG NGáº®N", code: "BH 646", quantity: 2 },
    { stt: 9, name: "Káº¸P TÄ‚M BÃ”NG", code: "16008225", quantity: 1 },
    { stt: 10, name: "BABCOCK NHá»Ž", code: "EA 033R", quantity: 2 },
    { stt: 11, name: "BABCOCK Lá»šN", code: "FB936R", quantity: 1 },
    { stt: 12, name: "XÃ€ MÃ‚U", code: "BJ 057", quantity: 1 },
    { stt: 13, name: "Káº¸P TAM GIÃC", code: "EA 042R", quantity: 3 },
    { stt: 14, name: "Káº¸P HELEY", code: "BJ 520", quantity: 4 },
    { stt: 15, name: "Káº¸P POZZI", code: "EO125", quantity: 2 },
    { stt: 16, name: "Ká»€M Káº¸P KIM DÃ€I", code: "BM 068", quantity: 1 },
    { stt: 17, name: "Ká»€M Káº¸P KIM NGáº®N", code: "BM 066", quantity: 1 },
    { stt: 18, name: "Ká»€M Káº¸P KIM CONG", code: "BM096", quantity: 1 },
    { stt: 19, name: "KÃ‰O Cáº®T CHá»ˆ", code: "LAWTON", quantity: 1 },
    { stt: 20, name: "KÃ‰O MESK (CÃ™N)", code: "BC277", quantity: 1 },
    { stt: 21, name: "ECARTER", code: "RZ 170", quantity: 2 },
    { stt: 22, name: "CÃN DAO Sá» 4", code: "BB 084", quantity: 1 },
    { stt: 23, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 24, name: "NHÃP KHÃ”NG Máº¤U", code: "", quantity: 2 },
    { stt: 25, name: "THÆ¯á»šC ÄO Tá»¬ CUNG", code: "", quantity: 1 },
    { stt: 26, name: "PARAPOP Lá»šN", code: "BT021", quantity: 2 },
    { stt: 27, name: "MALEAP NHá»Ž", code: "BT 750", quantity: 1 },
    { stt: 28, name: "MALEAP Lá»šN", code: "BT 758", quantity: 1 },
    { stt: 29, name: "á»NG HÃšT", code: "GF 944", quantity: 1 },
    { stt: 30, name: "RECHARSON NHá»Ž", code: "BT 472R", quantity: 2 },
    { stt: 31, name: "RECHARSON Lá»šN", code: "BT 471R", quantity: 2 },
    { stt: 32, name: "DIVER NHá»Ž", code: "BT 611", quantity: 2 },
    { stt: 33, name: "DIVER Lá»šN", code: "BT 614", quantity: 1 },
    { stt: 34, name: "VAN Sáº¢N", code: "BV605R", quantity: 1 },
    { stt: 35, name: "VAN Tá»° Äá»˜NG", code: "BV 605", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 70, bold: true }
];
allKitsData["CTC 2"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Báº®T CON 3
allKitsData["Báº®T CON 3"] = [
    { stt: 1, name: "KELLY TRUNG", code: "BH135R", quantity: 6, note: "GÃƒY 2" },
    { stt: 2, name: "FIXANG", code: "BF431R<br>BF437R<br>BF436R", quantity: 4 },
    { stt: 3, name: "KÃ‰O Cáº®T CHá»ˆ (CÃ™N)", code: "54-4034", quantity: 1 },
    { stt: 4, name: "KÃ‰O MAYO (CÃ™N)", code: "BC557R", quantity: 1 },
    { stt: 5, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: "", name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 6, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 7, name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R", quantity: 1 },
    { stt: 8, name: "KOCHER THáº²NG", code: "BH646R", quantity: 3 },
    { stt: 9, name: "Káº¸P TAM GIÃC", code: "EA061R", quantity: 3 },
    { stt: 10, name: "Káº¸P TÄ‚M BÃ”NG", code: "BF123R", quantity: 2 },
    { stt: 11, name: "VAN Sáº¢N", code: "BV608R", quantity: 1 },
    { stt: 12, name: "CÃN DAO Sá» 4", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 26, bold: true }
];
allKitsData["Báº®T CON 3"].footer = "ÄÃƒ KIá»‚M";

// Data for TIá»‚U PHáºªU 1
allKitsData["TIá»‚U PHáºªU 1"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R", quantity: 2 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 4 },
    { stt: 3, name: "KELLY THáº²NG", code: "BH134R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "HB0302", quantity: 1, note: "HEBU" },
    { stt: 6, name: "ALISS", code: "EA016R", quantity: 1 },
    { stt: 7, name: "FIX XÄ‚NG", code: "3 BF437<br>1", quantity: 4 },
    { stt: 8, name: "KÃ‰O MESK NHá»ŒN", code: "BC157", quantity: 1 },
    { stt: 9, name: "KÃ‰O MESK DÃ€I", code: "LAWTON<br>050620", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BC326R", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO Sá» 3", code: "5530", quantity: 1 },
    { stt: 14, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 15, name: "Ká»€M Káº¸P KIM", code: "1545023", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG (ÄÃƒ KIá»‚M)", code: "", quantity: 24, bold: true }
];
allKitsData["TIá»‚U PHáºªU 1"].footer = "ÄÃƒ KIá»‚M";

// Data for TIá»‚U PHáºªU 2
allKitsData["TIá»‚U PHáºªU 2"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "HB0515", quantity: 1, note: "HEBU" },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 3 },
    { stt: 3, name: "KELLY THáº²NG", code: "BH134R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 1, note: "HEBU" },
    { stt: 7, name: "FIX XÄ‚NG", code: "BF437R", quantity: 4 },
    { stt: 8, name: "KÃ‰O MESK NHá»ŒN", code: "BC161R", quantity: 1 },
    { stt: 9, name: "KÃ‰O MESK DÃ€I", code: "BC217R", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ", code: "", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R<br>1 CÃ¡i khÃ´ng mÃ£", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO Sá» 3", code: "khÃ´ng mÃ£", quantity: 1 },
    { stt: 14, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 15, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1, note: "HEBU" },
    { stt: 16, name: "Bá»’N Háº T Äáº¬U", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG (ÄÃƒ KIá»‚M)", code: "", quantity: 23, bold: true }
];
allKitsData["TIá»‚U PHáºªU 2"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Báº®T CON 2
allKitsData["Báº®T CON 2"] = [
    { stt: 1, name: "KELLY TRUNG", code: "BH165R", quantity: 4 },
    { stt: 2, name: "FIXANG", code: "BF473R", quantity: 2 },
    { stt: 3, name: "FIXANG", code: "BF432R", quantity: 1 },
    { stt: 4, name: "FIXANG", code: "140740", quantity: 1 },
    { stt: 5, name: "KÃ‰O Cáº®T CHá»ˆ", code: "50121", quantity: 1 },
    { stt: 6, name: "KÃ‰O MAYO", code: "BC557R", quantity: 1 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "BM249R", quantity: 1 },
    { stt: 8, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 9, name: "NHÃP CÃ“ Máº¤U", code: "BD557R", quantity: 1 },
    { stt: 10, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225", quantity: 1 },
    { stt: 11, name: "KOCHER THáº²NG", code: "BH646R", quantity: 3 },
    { stt: 12, name: "Káº¸P TAM GIÃC", code: "EA061R", quantity: 3 },
    { stt: 13, name: "Káº¸P TÄ‚M BÃ”NG", code: "BF122R", quantity: 2 },
    { stt: 14, name: "VAN Vá»†", code: "EL638R", quantity: 1 },
    { stt: 15, name: "PARAPOP", code: "BT021R", quantity: 2 },
    { stt: 16, name: "CÃN DAO Sá» 4", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 26, bold: true }
];
allKitsData["Báº®T CON 2"].footer = "ÄÃƒ KIá»‚M";

// Data for Ná»˜I SOI TAI MÅ¨I Há»ŒNG
allKitsData["NS TAI MÅ¨I Há»ŒNG"] = [
    { stt: 1, name: "PATUYN", code: "", quantity: 1 },
    { stt: 2, name: "QUE THÄ‚M DÃ’ CONG", code: "629825", quantity: 2 },
    { stt: 3, name: "QUE THÄ‚M DÃ’ MÃ“C", code: "", quantity: 1 },
    { stt: 4, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: 5, name: "DAO LÆ¯á» I CONG", code: "", quantity: 1 },
    { stt: 6, name: "DAO LÆ¯á» I THáº²NG", code: "", quantity: 1 },
    { stt: 7, name: "Äá»¤C LÃ’NG MÃNG", code: "", quantity: 2 },
    { stt: 8, name: "BÃšA", code: "", quantity: 1 },
    { stt: 9, name: "NHÃP KHá»¦Y", code: "", quantity: 1 },
    { stt: 10, name: "NHÃP CÃ“ Máº¤U", code: "", quantity: 1 },
    { stt: 11, name: "BANH MÅ¨I", code: "", quantity: 4 },
    { stt: 13, name: "FIXXANG", code: "", quantity: 1 },
    { stt: 14, name: "KÃ‰O THáº²NG", code: "", quantity: 1 },
    { stt: 15, name: "KÃ‰O CONG", code: "", quantity: 1 },
    { stt: 16, name: "KELLY CONG", code: "SU2723", quantity: 1 },
    { stt: 17, name: "Ká»€M Káº¸P KIM", code: "BM237R", quantity: 1 },
    { stt: 18, name: "CURET 2 Äáº¦U", code: "479100", quantity: 1 },
    { stt: 19, name: "ÄÃˆ LÆ¯á» I", code: "", quantity: 1 },
    { stt: 20, name: "Báºº CUá»N", code: "", quantity: 1 },
    { stt: 21, name: "HÃšT CONG", code: "", quantity: 1 },
    { stt: 22, name: "PATUYN HÃšT", code: "", quantity: 1 },
    { stt: 23, name: "LICK", code: "", quantity: 1 },
    { stt: 24, name: "LÃ’ XO", code: "", quantity: 1 },
    { stt: 25, name: "LICK Gáº¤P", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 29, bold: true }
];
allKitsData["NS TAI MÅ¨I Há»ŒNG"].footer = "ÄÃƒ KIá»‚M";

// Data for NIá»†U 1 (Bá»™ niá»‡u má»›i 1)
allKitsData["NIá»†U 1"] = [
    { stt: 1, name: "VAN Sáº¢N", code: "EL 638R", quantity: 1 },
    { stt: 2, name: "VAN Vá»†", code: "BV606R", quantity: 1 },
    { stt: 3, name: "DIVER Lá»šN", code: "BT614R", quantity: 2 },
    { stt: 4, name: "DIVER NHá»Ž", code: "BT611R", quantity: 1 },
    { stt: 5, name: "MALEAP", code: "BT758R", quantity: 1 },
    { stt: 6, name: "RICHARSON Lá»šN", code: "BT472R", quantity: 1 },
    { stt: 7, name: "RICHARSON NHá»Ž", code: "BT471R", quantity: 2 },
    { stt: 8, name: "KÃŒM Cáº®T SÆ¯á»œN", code: "FB878R", quantity: 1 },
    { stt: 9, name: "BANH Tá»° Äá»˜NG", code: "BV615R", quantity: 1 },
    { stt: 10, name: "GU Gáº¶M XÆ¯Æ NG", code: "FO530R", quantity: 1 },
    { stt: 11, name: "Káº¸P CUá»NG THáº¬N", code: "BT057R", quantity: 2 },
    { stt: 12, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 13, name: "MÃ“C DA NHá»Ž", code: "BT 244R", quantity: 2 },
    { stt: 14, name: "ECARTO", code: "BT184R", quantity: 2 },
    { stt: 15, name: "Báº®T CÃ“C", code: "BB936+BB033R", quantity: 2 },
    { stt: 16, name: "THÃ”NG TIá»‚U Sáº®T Lá»šN", code: "EF218C", quantity: 1 },
    { stt: 17, name: "THÃ”NG TIá»‚U Sáº®T Lá»šN", code: "EF220C", quantity: 1 },
    { stt: 18, name: "THÃ”NG TIá»‚U Sáº®T TRUNG", code: "EF212C", quantity: 1 },
    { stt: 19, name: "THÃ”NG TIá»‚U Sáº®T TRUNG", code: "EF214C", quantity: 1 },
    { stt: 20, name: "THÃ”NG TIá»‚U Sáº®T NHá»Ž", code: "EF210C", quantity: 1 },
    { stt: 21, name: "THÃ”NG TIá»‚U Sáº®T NHá»Ž", code: "EF208C", quantity: 1 },
    { stt: 22, name: "FIXANG THáº²NG", code: "BF426R", quantity: 9 },
    { stt: 23, name: "KELLY CONG NHá»Ž", code: "BH165R", quantity: 10 },
    { stt: 24, name: "XÃ€ MÃ‚U", code: "BJ 057R", quantity: 1 },
    { stt: 25, name: "ALISS", code: "EA106R", quantity: 2 },
    { stt: 26, name: "RANDAN CONG", code: "EF052R", quantity: 2 },
    { stt: 27, name: "RANDAN THáº²NG", code: "EF051R", quantity: 1 },
    { stt: 28, name: "NHÃP KHÃ”NG Máº¤U", code: "BD051R", quantity: 1 },
    { stt: 29, name: "NHÃP KHÃ”NG Máº¤U NHá»Ž", code: "BD027R", quantity: 1 },
    { stt: 30, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 31, name: "CLAMP THáº²NG", code: "EA202R", quantity: 2 },
    { stt: 32, name: "CLAMP CONG", code: "EA203R", quantity: 2 },
    { stt: 33, name: "CLAMP CONG", code: "FB465R", quantity: 2 },
    { stt: 34, name: "á»NG HÃšT", code: "GF944", quantity: 1 },
    { stt: 35, name: "Ká»€M Káº¸P KIM", code: "BM275R", quantity: 1 },
    { stt: 36, name: "KÃ‰O Cáº®T CHá»ˆ", code: "05-0114", quantity: 1 },
    { stt: 37, name: "KÃ‰O MESK", code: "BC607R", quantity: 1 },
    { stt: 38, name: "PATUYN", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 66, bold: true }
];
allKitsData["NIá»†U 1"].footer = "ÄÃƒ KIá»‚M";

// Data for NIá»†U 2 (Bá»™ niá»‡u má»›i 2)
allKitsData["NIá»†U 2"] = [
    { stt: 1, name: "VAN Sáº¢N", code: "EL638R", quantity: 1 },
    { stt: 2, name: "VAN Vá»†", code: "BV609R", quantity: 1 },
    { stt: 3, name: "DIVER Lá»šN", code: "BT614R", quantity: 2 },
    { stt: 4, name: "DIVER NHá»Ž", code: "BT611R", quantity: 1 },
    { stt: 5, name: "MALEAP", code: "BT758R", quantity: 1 },
    { stt: 6, name: "RICHARSON Lá»šN", code: "BT472R", quantity: 1 },
    { stt: 7, name: "RICHARSON NHá»Ž", code: "BT471R", quantity: 2 },
    { stt: 8, name: "KÃŒM Cáº®T SÆ¯á»œN", code: "FB878R", quantity: 1 },
    { stt: 9, name: "BANH Tá»° Äá»˜NG", code: "BV615R", quantity: 1 },
    { stt: 10, name: "GU Gáº¶M XÆ¯Æ NG", code: "FO530R", quantity: 1 },
    { stt: 11, name: "Káº¸P CUá»NG THáº¬N", code: "BJ 581R", quantity: 2 },
    { stt: 12, name: "CÃN DAO Sá» 4", code: "BB084R", quantity: 1 },
    { stt: 13, name: "MÃ“C DA NHá»Ž", code: "BT244R", quantity: 2 },
    { stt: 14, name: "ECARTER VENE", code: "BT184R", quantity: 2 },
    { stt: 15, name: "PARAPOP Lá»šN", code: "BT021R", quantity: 2 },
    { stt: 16, name: "THÃ”NG TIá»‚U Sáº®T Lá»šN", code: "EF218C", quantity: 1 },
    { stt: 17, name: "THÃ”NG TIá»‚U Sáº®T Lá»šN", code: "EF212C", quantity: 1 },
    { stt: 18, name: "THÃ”NG TIá»‚U Sáº®T TRUNG", code: "EF214C", quantity: 1 },
    { stt: 19, name: "THÃ”NG TIá»‚U Sáº®T TRUNG", code: "E208C", quantity: 1 },
    { stt: 20, name: "THÃ”NG TIá»‚U Sáº®T NHá»Ž", code: "EF210C", quantity: 1 },
    { stt: 21, name: "THÃ”NG TIá»‚U Sáº®T NHá»Ž", code: "EF220C", quantity: 1 },
    { stt: 22, name: "FIXANG THáº²NG", code: "BF426R", quantity: 10 },
    { stt: 23, name: "KELLY CONG NHá»Ž", code: "BH165R", quantity: 10 },
    { stt: 24, name: "KELLY CONG NHá»Ž", code: "BH467R", quantity: 1 },
    { stt: 25, name: "ALISS", code: "EA014R + EA016R", quantity: 2 },
    { stt: 26, name: "RANGDAN CONG", code: "EF053R", quantity: 1 },
    { stt: 27, name: "RANGDAN THáº²NG", code: "EF051R", quantity: 1 },
    { stt: 28, name: "NHÃP KHÃ”NG Máº¤U", code: "BVHD", quantity: 1 },
    { stt: 29, name: "NHÃP KHÃ”NG Máº¤U", code: "BD032R", quantity: 1 },
    { stt: 30, name: "NHÃP CÃ“ Máº¤U", code: "BD537R", quantity: 1 },
    { stt: 31, name: "CLAMP THáº²NG", code: "EA202R", quantity: 2 },
    { stt: 32, name: "CLAMP CONG", code: "EA211R + EA203R", quantity: 4 },
    { stt: 33, name: "CLAMP CONG", code: "FB465R", quantity: 1 },
    { stt: 34, name: "á»NG HÃšT", code: "GF 944R", quantity: 1 },
    { stt: 35, name: "Ká»€M Káº¸P KIM", code: "BM275R", quantity: 1 },
    { stt: 36, name: "KÃˆM Káº¸P KIM", code: "BM236R", quantity: 1 },
    { stt: 37, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BVHD", quantity: 1 },
    { stt: 38, name: "KÃ‰O MESK", code: "GERMANY", quantity: 1 },
    { stt: 39, name: "KÃ‰O MESK Cáº®N VÃ€NG", code: "BC606", quantity: 1 },
    { stt: 40, name: "PATUYN", code: "", quantity: 1 },
    { stt: 41, name: "Báº®T CÃ“C", code: "EA 032R", quantity: 2 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 70, bold: true }
];
allKitsData["NIá»†U 2"].footer = "ÄÃƒ KIá»‚M";

// Data for NIá»†U 3 (Bá»™ niá»‡u cÅ©)
allKitsData["NIá»†U 3"] = [
    { stt: 1, name: "KELLY CONG TRÃ’N", code: "", quantity: 3 },
    { stt: 2, name: "KELLY CONG", code: "", quantity: 20 },
    { stt: 3, name: "ALISS Lá»šN", code: "BVHD", quantity: 2 },
    { stt: 4, name: "ALISS TRUNG", code: "", quantity: 6 },
    { stt: 5, name: "FIXANG", code: "", quantity: 10 },
    { stt: 7, name: "KÃˆM Káº¸P KIM NHá»Ž", code: "", quantity: 3 },
    { stt: 8, name: "KOCHER THáº²NG DÃ€I", code: "", quantity: 1 },
    { stt: 9, name: "KOCHER THáº²NG NGáº®N", code: "", quantity: 2 },
    { stt: 10, name: "XÃ€ MÃ‚U", code: "", quantity: 1 },
    { stt: 11, name: "Káº¸P TAM GIÃC DÃ€I", code: "", quantity: 1 },
    { stt: 12, name: "Káº¸P TAM GIÃC NGáº®N", code: "", quantity: 1 },
    { stt: 13, name: "BABCOCK DÃ€I", code: "", quantity: 2 },
    { stt: 14, name: "BABCOCK NGáº®N", code: "", quantity: 1 },
    { stt: 15, name: "KÃˆM Cáº®T SÆ¯á»œN", code: "", quantity: 1 },
    { stt: 16, name: "DIVER CONG", code: "", quantity: 1 },
    { stt: 17, name: "DIVER 90 Äá»˜", code: "", quantity: 1 },
    { stt: 18, name: "Káº¸P TÄ‚M BÃ”NG", code: "", quantity: 2 },
    { stt: 19, name: "RECHARSON", code: "", quantity: 2 },
    { stt: 20, name: "HEALLEY", code: "", quantity: 4 },
    { stt: 21, name: "THÆ¯á»šC ÄO", code: "", quantity: 1 },
    { stt: 22, name: "CÃ‚Y NAO", code: "BVHD", quantity: 2 },
    { stt: 23, name: "Káº¸P CUá»NG THáº¬N", code: "", quantity: 1 },
    { stt: 24, name: "CLAMP CONG", code: "", quantity: 1 },
    { stt: 25, name: "RANDAL CONG 90 Äá»˜", code: "", quantity: 3 },
    { stt: 26, name: "RANDAL Lá»š", code: "", quantity: 1 },
    { stt: 27, name: "CLAMP RUá»˜T", code: "", quantity: 2 },
    { stt: 29, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 31, name: "KÃˆM Gáº¤P SOI", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 77, bold: true }
];
allKitsData["NIá»†U 3"].footer = "ÄÃƒ KIá»‚M";

// Data for Sá»Œ NÃƒO
allKitsData["Sá»Œ NÃƒO"] = [
    { stt: 1, name: "KERICSON", code: "3MM FK902", quantity: 1 },
    { stt: 2, name: "KERICSON", code: "4MM FK903", quantity: 1 },
    { stt: 3, name: "KERICSON", code: "5MM FK904", quantity: 1 },
    { stt: 4, name: "CURET Lá»šN", code: "FK632", quantity: 1 },
    { stt: 5, name: "CURET TRUNG", code: "FK631", quantity: 1 },
    { stt: 6, name: "CURET NHá»Ž", code: "FK630", quantity: 1 },
    { stt: 7, name: "MALEAP NHá»Ž", code: "BT750", quantity: 1 },
    { stt: 8, name: "MAI XÆ¯Æ NG 2 Äáº¦U Lá»šN", code: "FF202", quantity: 2 },
    { stt: 9, name: "MAI XÆ¯Æ NG 2 Äáº¦U NHá»Ž", code: "FF201", quantity: 2 },
    { stt: 10, name: "KELLY CONG", code: "BH135", quantity: 20 },
    { stt: 11, name: "MÅ¨I KHOAN TRÃ’N", code: "FF038R", quantity: 2 },
    { stt: 12, name: "MÅ¨I KHOAN NHá»ŒN", code: "FF035R", quantity: 2 },
    { stt: 13, name: "NHÃP KHÃ”NG Máº¤U Lá»šN", code: "BD197R", quantity: 1 },
    { stt: 14, name: "NHÃP KHÃ”NG Máº¤U TRUNG", code: "BD256R", quantity: 2 },
    { stt: 15, name: "NHÃP KHÃ”NG Máº¤U NHá»Ž", code: "BD220R", quantity: 2 },
    { stt: 16, name: "NHÃP CÃ“ Máº¤U Lá»šN", code: "BD563R", quantity: 1 },
    { stt: 17, name: "TAY KHOAN", code: "FF052", quantity: 1 },
    { stt: 18, name: "THÃ‚N KHOAN", code: "FF053", quantity: 1 },
    { stt: 19, name: "Dá»¤C THáº²NG", code: "FL564", quantity: 1 },
    { stt: 20, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: 21, name: "CÃN DAO Sá» 4", code: "BB084", quantity: 1 },
    { stt: 22, name: "KOCHER THáº²NG", code: "BH648R", quantity: 6 },
    { stt: 23, name: "FIXANG", code: "BF436R", quantity: 4 },
    { stt: 24, name: "ÄÃ€Y CÆ¯A", code: "", quantity: 2 },
    { stt: 25, name: "ÄÃ€Y Äá»˜", code: "FF130", quantity: 1 },
    { stt: 26, name: "PATUYN", code: "OL635", quantity: 1 },
    { stt: 27, name: "Äáº¤C KÃ‰O CÆ¯A", code: "FH480R", quantity: 2 },
    { stt: 28, name: "Äáº¤C MÃ“C THáº²NG", code: "FD376R", quantity: 2 },
    { stt: 30, name: "á»NG HÃšT Lá»šN", code: "GF953R", quantity: 1 },
    { stt: 31, name: "á»NG HÃšT VÃ€NG", code: "FF124R", quantity: 1 },
    { stt: 32, name: "á»NG HÃšT TRUNG", code: "GF373R", quantity: 1 },
    { stt: 33, name: "á»NG HÃšT NHá»Ž", code: "GF351R", quantity: 1 },
    { stt: 34, name: "KÃ‰O MESK CONG", code: "BC606R", quantity: 1 },
    { stt: 35, name: "KÃ‰O MESK TRUNG", code: "BC605R", quantity: 1 },
    { stt: 36, name: "KÃ‰O MESK NHá»Ž", code: "BC156R", quantity: 1 },
    { stt: 37, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BC548R", quantity: 1 },
    { stt: 38, name: "BANH DA CONG", code: "BV271R", quantity: 1 },
    { stt: 39, name: "BANH DA THáº²NG", code: "BV205R", quantity: 1 },
    { stt: 40, name: "Káº¸P TÄ‚M BÃ”NG", code: "ER122R", quantity: 1 },
    { stt: 41, name: "Cá»Œ THáº²NG", code: "ER071R", quantity: 1 },
    { stt: 42, name: "KÃˆM Káº¸P KIM", code: "BM016R", quantity: 1 },
    { stt: 43, name: "KÃˆM Káº¸P KIM", code: "BM247R", quantity: 1 },
    { stt: 44, name: "CÃ‚Y Sá»¦I", code: "FK341R", quantity: 1 },
    { stt: 45, name: "CÃ‚Y Sá»¦I", code: "FK309R", quantity: 1 },
    { stt: 46, name: "MÃ“C DA", code: "OL612R", quantity: 2 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 82, bold: true }
];
allKitsData["Sá»Œ NÃƒO"].footer = "ÄÃƒ KIá»‚M";

// Data for SOI TREO TMH
allKitsData["SOI TREO TMH"] = [
    { stt: 1, name: "Dá»¤NG Cá»¤ Cá» Äá»ŠNH TREO", code: "", quantity: 1 },
    { stt: 2, name: "Dá»¤NG Cá»¤ SOI DÃ‚Y THANH", code: "", quantity: 1 },
    { stt: 3, name: "Äá»† LÆ¯á» I", code: "", quantity: 1 },
    { stt: 4, name: "FIXANG", code: "", quantity: 1 },
    { stt: 5, name: "á»NG HÃšT", code: "", quantity: 2, note: "1 NHá»Ž,1 Lá»šN" },
    { stt: 6, name: "KÃ‰O Lá»šN", code: "", quantity: 1 },
    { stt: 7, name: "KÃ‰O NHá»Ž", code: "", quantity: 1 },
    { stt: 8, name: "KÃ‰O CONG", code: "", quantity: 1 },
    { stt: 9, name: "Dá»¤NG Cá»¤ Gáº®P TRÃI", code: "", quantity: 1 },
    { stt: 10, name: "Dá»¤NG Cá»¤ Gáº®P PHáº¢I", code: "", quantity: 1 },
    { stt: 11, name: "Dá»¤NG Cá»¤ Gáº®P THáº²NG", code: "", quantity: 1 },
    { stt: 12, name: "Dá»¤NG Cá»¤ Gáº®P CONG", code: "", quantity: 1 },
    { stt: 13, name: "Há»˜P Äá»°NG", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 14, bold: true }
];
allKitsData["SOI TREO TMH"].footer = "ÄÃƒ KIá»‚M";

// Data for LÃ•M NGá»°C
allKitsData["LÃ•M NGá»°C"] = [
    { stt: 1, name: "PARAPOP NHá»Ž", code: "", quantity: 2 },
    { stt: 2, name: "KELLY", code: "", quantity: 8 },
    { stt: 4, name: "ALLISS", code: "", quantity: 3 },
    { stt: 5, name: "KOCHER THáº²NG", code: "", quantity: 3 },
    { stt: 6, name: "KÃˆM Káº¸P KIM", code: "", quantity: 2 },
    { stt: 7, name: "XÃ€ MÃ‚U", code: "", quantity: 1 },
    { stt: 8, name: "NHÃP", code: "", quantity: 2 },
    { stt: 9, name: "KÃ‰O", code: "", quantity: 2 },
    { stt: 10, name: "FIXXANG", code: "", quantity: 3 },
    { stt: 11, name: "CÃN DAO", code: "", quantity: 1 },
    { stt: 12, name: "PARAPOP Lá»šN", code: "", quantity: 2 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 29, bold: true }
];
allKitsData["LÃ•M NGá»°C"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Náº O VA
allKitsData["Bá»˜ Náº O VA"] = [
    { stt: 1, name: "NHÃP", code: "", quantity: 1 },
    { stt: 2, name: "MUá»–NG Náº O", code: "", quantity: 2 },
    { stt: 3, name: "CÃ‚Y Náº O", code: "", quantity: 3 },
    { stt: 4, name: "CÃ‚Y Gá»ŒT", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 7, bold: true }
];
allKitsData["Bá»˜ Náº O VA"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Cáº®T AMIDAN CÅ¨
allKitsData["Bá»˜ Cáº®T AMIDAN CÅ¨"] = [
    { stt: 1, name: "ÄÃˆ LÆ¯á» I THáº²NG", code: "", quantity: 3 },
    { stt: 2, name: "ÄÃˆ LÆ¯á» I CONG", code: "", quantity: 1 },
    { stt: 3, name: "SÃšNG Cáº®T", code: "", quantity: 1 },
    { stt: 4, name: "BANH MIá»†NG", code: "", quantity: 1 },
    { stt: 5, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: 6, name: "NHÃP", code: "BD031R", quantity: 1 },
    { stt: 7, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 8, name: "KELLY", code: "", quantity: 1 },
    { stt: 9, name: "FIXANG", code: "", quantity: 1 },
    { stt: 10, name: "ALISS", code: "", quantity: 1 },
    { stt: 11, name: "KÃ‰O MAYO", code: "BC557R", quantity: 1 },
    { stt: 12, name: "KÃ‰O MESK", code: "", quantity: 1 },
    { stt: 13, name: "VÃ‰N TRá»¤", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 15, bold: true }
];
allKitsData["Bá»˜ Cáº®T AMIDAN CÅ¨"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Cáº®T AMIDAN Má»šI 1
allKitsData["Bá»˜ Cáº®T AMIDAN Má»šI 1"] = [
    { stt: 1, name: "ÄÃˆ LÆ¯á» I", code: "", quantity: 3 },
    { stt: 2, name: "BANH MIá»†NG", code: "", quantity: 1 },
    { stt: 3, name: "Ká»€M Káº¸P KIM", code: "08-0100", quantity: 1 },
    { stt: 4, name: "ALISS", code: "EA026R", quantity: 2 },
    { stt: 5, name: "KÃ‰O MESK", code: "", quantity: 1 },
    { stt: 6, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BC346R", quantity: 1 },
    { stt: 7, name: "CÃN DAO", code: "BB078R", quantity: 1 },
    { stt: 8, name: "VÃ‰N TRá»¤", code: "OM666R", quantity: 1 },
    { stt: 9, name: "SÃšNG Cáº®T A", code: "", quantity: 1 },
    { stt: 11, name: "NHÃP", code: "", quantity: 1 },
    { stt: 12, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 13, name: "KELLY", code: "", quantity: 1 },
    { stt: 14, name: "FIXANG", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 16, bold: true }
];
allKitsData["Bá»˜ Cáº®T AMIDAN Má»šI 1"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Cáº®T A Má»šI 2
allKitsData["Bá»˜ Cáº®T A Má»šI 2"] = [
    { stt: 1, name: "ÄÃˆ LÆ¯á» I", code: "", quantity: 3 },
    { stt: 3, name: "BANH MIá»†NG", code: "", quantity: 1 },
    { stt: 4, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 5, name: "ALISS", code: "EA026R", quantity: 2 },
    { stt: 7, name: "KÃ‰O Cáº®T CHá»ˆ", code: "", quantity: 1 },
    { stt: 8, name: "CÃN DAO", code: "", quantity: 1 },
    { stt: 9, name: "VÃ‰N TRá»¤", code: "", quantity: 1 },
    { stt: 10, name: "NHÃP", code: "BD230R", quantity: 1 },
    { stt: 11, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 12, name: "KELLY", code: "29180", quantity: 1 },
    { stt: 13, name: "FIXANG", code: "BF432R", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 14, bold: true }
];
allKitsData["Bá»˜ Cáº®T A Má»šI 2"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ TAI (Dá»¤NG Cá»¤ Má»” TAI)
allKitsData["Bá»˜ TAI"] = [
    { stt: 1, name: "CÃ‚Y Báº¤M Dá»Š Váº¬T", code: "", quantity: 2 },
    { stt: 2, name: "Gáº¤P Dá»Š Váº¬T 45 Äá»˜", code: "", quantity: 1 },
    { stt: 3, name: "á»NG HÃšT THáº²NG", code: "", quantity: 3 },
    { stt: 4, name: "á»NG HÃšT CONG", code: "", quantity: 1 },
    { stt: 5, name: "LÆ¯á» I DAO", code: "", quantity: 1 },
    { stt: 6, name: "CÃ‚Y Äá»ŠNH Vá»Š", code: "", quantity: 1 },
    { stt: 7, name: "CÃ‚Y Äáº¦U NHá»ŒN", code: "", quantity: 1 },
    { stt: 8, name: "QUE THÄ‚M DÃ’", code: "", quantity: 2 },
    { stt: 9, name: "NHÃP KHá»¦Y", code: "", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T", code: "22260", quantity: 3 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 16, bold: true }
];
allKitsData["Bá»˜ TAI"].footer = "ÄÃƒ KIá»‚M";

// Data for VI PHáºªU BS PHÆ¯á»šC (VI PHáºªU Máº CH MÃU - bs PhÆ°á»›c)
allKitsData["VI PHáºªU BS PHÆ¯á»šC"] = [
    { stt: 1, name: "Káº¸P Máº CH MÃU", code: "FB328R", quantity: 4 },
    { stt: 2, name: "Ká»€M Káº¸P KIM", code: "BM036R", quantity: 1 },
    { stt: 3, name: "KÃ‰O MESK", code: "lawton", quantity: 1 },
    { stt: 4, name: "NHÃP VI PHáºªU FC411R", code: "FC411R", quantity: 1 },
    { stt: 5, name: "á»NG HÃšT FB153R", code: "FB153R", quantity: 1 },
    { stt: 6, name: "CÃ‚Y NONG Máº CH MÃU FB165R", code: "FB165R", quantity: 1 },
    { stt: 7, name: "CÃ‚Y NONG Máº CH MÃU FB166R", code: "FB166R", quantity: 1 },
    { stt: 8, name: "CÃ‚Y NONG Máº CH MÃU FB167R", code: "FB167R", quantity: 1 },
    { stt: 9, name: "NHÃP VI PHáºªU FC412R", code: "FC412R", quantity: 1 },
    { stt: 10, name: "Ká»€M Káº¸P KIM VI PHáºªU", code: "", quantity: 1 },
    { stt: 11, name: "NHÃP KHá»¦Y", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 14, bold: true }
];
allKitsData["VI PHáºªU BS PHÆ¯á»šC"].footer = "ÄÃƒ KIá»‚M";

// Data for VP Cá»˜T Sá»NG (Vi pháº«u cá»™t sá»‘ng)
allKitsData["VP Cá»˜T Sá»NG"] = [
    { stt: 1, name: "KÃ‰O MESK", code: "FD061R", quantity: 1 },
    { stt: 2, name: "KÃ‰O Cáº®T CHá»ˆ", code: "", quantity: 0, note: "gÃ£y" },
    { stt: 3, name: "Ká»€M Káº¸P KIM", code: "FD096R", quantity: 1 },
    { stt: 4, name: "NHÃP NHá»ŒN", code: "BD850R", quantity: 2 },
    { stt: 5, name: "NHÃP Gáº¤P", code: "FD202R", quantity: 2 },
    { stt: 6, name: "QUE Náº O CURET", code: "FD866R", quantity: 1 },
    { stt: 7, name: "NHÃP Gáº¤P", code: "FD200R", quantity: 2 },
    { stt: 8, name: "QUE THÄ‚M DÃ’", code: "BT088R", quantity: 1 },
    { stt: 9, name: "QUE THÄ‚M DÃ’", code: "FF643R", quantity: 1 },
    { stt: 10, name: "NHÃP NHá»ŒN", code: "BD851R", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 12, bold: true }
];
allKitsData["VP Cá»˜T Sá»NG"].footer = "ÄÃƒ KIá»‚M";

// Data for VI PHáºªU CÅ¨ (Má»” Há»ž)
allKitsData["VI PHáºªU CÅ¨ (Má»” Há»ž)"] = [
    { stt: 1, name: "KELLY CONG", code: "", quantity: 5 },
    { stt: 2, name: "PARAPOP MÃ“C", code: "", quantity: 1 },
    { stt: 3, name: "SODE CÃNH BÆ¯á»šM", code: "", quantity: 1 },
    { stt: 4, name: "MÃ“C DA 4 RÄ‚NG", code: "", quantity: 3 },
    { stt: 5, name: "KÃ‰O MESK", code: "", quantity: 1 },
    { stt: 6, name: "Ká»€M Káº¸P KIM", code: "", quantity: 1 },
    { stt: 7, name: "FIXANG", code: "", quantity: 5 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "", quantity: 1 },
    { stt: 9, name: "á»NG HÃšT Sá» 6", code: "", quantity: 2 },
    { stt: 10, name: "CÃN DAO Sá» 3", code: "", quantity: 1 },
    { stt: 11, name: "MÃ“C DA NHá»ŒN 1 RÄ‚NG", code: "", quantity: 3 },
    { stt: 12, name: "NHÃP Máº¤U", code: "proset", quantity: 1 },
    { stt: 13, name: "LÆ¯á» I CÆ¯A Dá»ŒC", code: "hall (5023-131)", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 26, bold: true }
];
allKitsData["VI PHáºªU CÅ¨ (Má»” Há»ž)"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ KHOAN PIN
allKitsData["KHOAN PIN"] = [
    { stt: 1, name: "TAY KHOAN", code: "PRO7200B", quantity: 1 },
    { stt: 2, name: "Äáº¦U KHOAN", code: "PRO2041<br>PRO2030", quantity: 2 },
    { stt: 3, name: "Äáº¦U KHÃ“A KHOAN", code: "", quantity: 2 },
    { stt: 4, name: "MÅ¨I KHOAN 3.2MM", code: "", quantity: 2 },
    { stt: 5, name: "Há»˜P Äá»°NG PIN", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 8, bold: true }
];
allKitsData["KHOAN PIN"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ TV ÄÄ¨A Äá»†M Cá»” (TV Cá»”)
allKitsData["TV Cá»”"] = [
    { stt: 1, name: "KELLY CONG", code: "PMP", quantity: 2 },
    { stt: 2, name: "KERICSON 1MM", code: "FK900", quantity: 1 },
    { stt: 3, name: "KERICSON 2MM", code: "FK901", quantity: 1 },
    { stt: 4, name: "KERICSON 3MM", code: "FK902", quantity: 1 },
    { stt: 5, name: "CÃ’ CONG", code: "ROLAND", quantity: 1 },
    { stt: 6, name: "CÃ’ THáº²NG", code: "ROLAND", quantity: 1 },
    { stt: 7, name: "CÃ’ THáº²NG ROLAND + FF533R", code: "", quantity: 2 },
    { stt: 8, name: "BANH DáºªN KHOAN", code: "FF907R", quantity: 1 },
    { stt: 9, name: "TAY Cáº¦M BANH CONG 134", code: "BW010R", quantity: 1 },
    { stt: 10, name: "TAY ÄINH", code: "FF906R", quantity: 1 },
    { stt: 11, name: "ÄINH KHOAN", code: "BW010R", quantity: 4 },
    { stt: 12, name: "MÅ¨I KHOAN", code: "FF908", quantity: 2 },
    { stt: 16, name: "BANH Gáº¤P KHÃšC", code: "FF891", quantity: 1 },
    { stt: 16, name: "VÃ‰N CÆ  Cá»” 30MM", code: "BW151", quantity: 1 },
    { stt: 17, name: "VÃ‰N CÆ  Cá»” 35MM", code: "BW152", quantity: 1 },
    { stt: 18, name: "VÃ‰N CÆ  Cá»” 40MM", code: "BW153", quantity: 1 },
    { stt: 19, name: "VÃ‰N CÆ  Cá»” 45MM", code: "BW154", quantity: 1 },
    { stt: 20, name: "VÃ‰N CÆ  Cá»” 50MM", code: "BW155", quantity: 1 },
    { stt: 21, name: "QUE THÄ‚M Rá»„", code: "BT088", quantity: 1 },
    { stt: 22, name: "VÃ‰N Rá»„", code: "FF216", quantity: 1 },
    { stt: 23, name: "BANH DA CONG", code: "BV067", quantity: 1 },
    { stt: 24, name: "PATUYN", code: "OL165", quantity: 1 },
    { stt: 25, name: "CURET", code: "", quantity: 1 },
    { stt: 26, name: "CÃN DAO 4", code: "", quantity: 1 },
    { stt: 27, name: "CÃN DAO 7", code: "", quantity: 1 },
    { stt: 28, name: "NHÃP Máº¤U", code: "BD557R", quantity: 1 },
    { stt: 29, name: "NHÃP KHÃ”NG Máº¤U", code: "BD197R", quantity: 2 },
    { stt: 30, name: "FIXANG", code: "BF433R/GERMANI", quantity: 2 },
    { stt: 31, name: "XÃ€ MÃ‚U", code: "BV HD", quantity: 1 },
    { stt: 32, name: "KÃ‰O MESK", code: "", quantity: 1 },
    { stt: 34, name: "Ká»€M Káº¸P KIM", code: "ROLAND", quantity: 1 },
    { stt: 35, name: "Ká»€M Káº¸P KIM NHá»Ž", code: "ROLAND", quantity: 1 },
    { stt: 36, name: "Ká»€M TÄ‚M BÃ”NG", code: "", quantity: 1 },
    { stt: 37, name: "PARAPOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 38, name: "GU Gáº¶M XÆ¯Æ NG", code: "FO532R", quantity: 1 },
    { stt: 39, name: "Cá»P Lá»šN", code: "FK148R", quantity: 1 },
    { stt: 40, name: "THÆ¯á»šC ÄO", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 46, bold: true }
];
allKitsData["TV Cá»”"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ TV ÄÄ¨A Äá»†M LÆ¯NG 2 (TV LÆ¯NG 2)
allKitsData["TV LÆ¯NG 2"] = [
    { stt: 1, name: "Cá»P Lá»šN", code: "", quantity: 1 },
    { stt: 2, name: "GU Gáº¶M XÆ¯Æ NG", code: "F0532R", quantity: 1 },
    { stt: 3, name: "TAYLO", code: "", quantity: 1 },
    { stt: 4, name: "KERICSON 2MM", code: "FK901", quantity: 1 },
    { stt: 5, name: "KERICSON 3MM", code: "451428", quantity: 1 },
    { stt: 6, name: "CÃ’ THáº²NG", code: "18563403", quantity: 1 },
    { stt: 7, name: "CÃ’ THáº²NG", code: "530522", quantity: 1 },
    { stt: 8, name: "CÃ’ NGá»¬A", code: "18572903", quantity: 1 },
    { stt: 9, name: "CÃ’ NGá»¬A", code: "FF543R", quantity: 1 },
    { stt: 10, name: "CURET Äáº¦U Lá»šN", code: "152170.20CE", quantity: 1 },
    { stt: 11, name: "CURET Äáº¦U NHá»Ž", code: "152171.24CE", quantity: 1 },
    { stt: 12, name: "QUE THÄ‚M Rá»„", code: "PT080R", quantity: 1 },
    { stt: 13, name: "QUE VÃ‰N Rá»„", code: "FF216R", quantity: 1 },
    { stt: 14, name: "á»NG HÃšT", code: "GF933R", quantity: 1 },
    { stt: 15, name: "á»NG HÃšT CONG", code: "ROLAND 601009", quantity: 1 },
    { stt: 16, name: "á»NG HÃšT THáº²NG", code: "15305701", quantity: 1 },
    { stt: 17, name: "Äá»¤C THáº²NG", code: "150057", quantity: 1 },
    { stt: 18, name: "NHÃP Máº¤U", code: "BD577R", quantity: 1 },
    { stt: 19, name: "NHÃP KHÃ”NG Máº¤U", code: "BD195R", quantity: 1 },
    { stt: 20, name: "NHÃP KHÃ”NG Máº¤U", code: "RJ290550240", quantity: 1 },
    { stt: 21, name: "CÃN DAO Sá» 4", code: "", quantity: 1 },
    { stt: 22, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: 23, name: "PARAPOP Lá»šN", code: "", quantity: 1 },
    { stt: 24, name: "PARAPOP NHá»Ž", code: "", quantity: 1 },
    { stt: 25, name: "PATUYN TRUNG", code: "", quantity: 1 },
    { stt: 26, name: "PATUY NHá»Ž", code: "", quantity: 1 },
    { stt: 27, name: "KÃ‰O Cáº®T CHá»ˆ", code: "4113016", quantity: 1 },
    { stt: 28, name: "KÃ‰O MESK", code: "BC271", quantity: 1 },
    { stt: 29, name: "Ká»€M Káº¸P KIM", code: "125,45018", quantity: 1 },
    { stt: 30, name: "Ká»€M Káº¸P KIM", code: "SU 16062", quantity: 1 },
    { stt: 31, name: "Ká»€M TÄ‚M BÃ”NG", code: "", quantity: 1 },
    { stt: 32, name: "FIXANG", code: "BF433R", quantity: 2 },
    { stt: 33, name: "KELLY CONG DÃ€I", code: "MC1700", quantity: 1 },
    { stt: 34, name: "KELLY CONG NHá»Ž", code: "", quantity: 1 },
    { stt: 35, name: "BANH DA", code: "BV067R", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 36, bold: true }
];
// Data for Bá»˜ TV ÄÄ¨A Äá»†M LÆ¯NG 1 (TV LÆ¯NG 1)
allKitsData["TV LÆ¯NG 1"] = [
    { stt: 1, name: "Cá»P Lá»šN", code: "", quantity: 1 },
    { stt: 2, name: "GU Gáº¶M XÆ¯Æ NG", code: "ROLAND 15.112808", quantity: 1 },
    { stt: 3, name: "KERICSON 3MM", code: "45-1428", quantity: 1 },
    { stt: 4, name: "KERICSON 2MM", code: "FK901R", quantity: 1 },
    { stt: 5, name: "KERICSON 5MM", code: "FK904R", quantity: 1 },
    { stt: 6, name: "CURET", code: "FK662R", quantity: 1 },
    { stt: 7, name: "CURET", code: "FK 675R", quantity: 1 },
    { stt: 8, name: "CÃ’ THáº²NG", code: "FF533R", quantity: 1 },
    { stt: 9, name: "CÃ’ NGá»¬A (GÃƒY)", code: "FF543R", quantity: 1, note: "GÃ£y" },
    { stt: 10, name: "CÃ’ NGá»¬A", code: "18-5729.03", quantity: 1 },
    { stt: 11, name: "CÃ’ THáº²NG", code: "18-563403", quantity: 1 },
    { stt: 12, name: "Ká»€M Káº¸P KIM", code: "SU 16060", quantity: 1 },
    { stt: 13, name: "Ká»€M Káº¸P KIM", code: "BM 236R", quantity: 1 },
    { stt: 14, name: "Äá»¤C THáº²NG", code: "153057,04", quantity: 1 },
    { stt: 15, name: "TAYLO", code: "", quantity: 1 },
    { stt: 16, name: "FIXANG", code: "BF432R", quantity: 1 },
    { stt: 17, name: "FIXANG", code: "BF433R", quantity: 1 },
    { stt: 18, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BC547R", quantity: 1 },
    { stt: 19, name: "KÃ‰O MESK", code: "BC607R", quantity: 1 },
    { stt: 20, name: "á»NG HÃšT", code: "60,1014", quantity: 1 },
    { stt: 21, name: "á»NG HÃšT", code: "60.1009-03", quantity: 1 },
    { stt: 22, name: "á»NG HÃšT", code: "", quantity: 1 },
    { stt: 23, name: "BANH DA", code: "BV067R", quantity: 1 },
    { stt: 24, name: "NHÃP CÃ“ Máº¤U", code: "ROLAND 0612016", quantity: 1 },
    { stt: 25, name: "NHÃP KHÃ”NG Máº¤U", code: "BD 269R", quantity: 1 },
    { stt: 26, name: "NHÃP KHÃ”NG Máº¤U", code: "", quantity: 1 },
    { stt: 27, name: "PATUYN NHá»Ž", code: "", quantity: 1 },
    { stt: 28, name: "PATUYN Lá»šN", code: "", quantity: 1 },
    { stt: 29, name: "CÃ‚Y THÄ‚M Rá»„", code: "BT 088R", quantity: 1 },
    { stt: 30, name: "VÃ‰N MÃ€NG Cá»¨NG", code: "606.990.006", quantity: 1 },
    { stt: 31, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: 32, name: "CÃN DAO Sá» 4", code: "", quantity: 1 },
    { stt: 33, name: "KELLY Lá»šN", code: "", quantity: 1 },
    { stt: 34, name: "KELLY NHá»Ž", code: "", quantity: 1 },
    { stt: 35, name: "PARAPOP NHá»Ž", code: "", quantity: 1 },
    { stt: 36, name: "PARAPOP Lá»šN", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG", code: "", quantity: 36, bold: true }
];
allKitsData["TV LÆ¯NG 1"].footer = "ÄÃƒ KIá»‚M";

allKitsData["TV LÆ¯NG 2"].footer = "ÄÃƒ KIá»‚M";

// Data for Ná»˜I SOI Sáº¢N (Bá»™ ná»™i soi sáº£n khoa Karl Storz)
allKitsData["NS Sáº¢N"] = [
    { stt: 1, name: "Vá»Ž NGOÃ€I", code: "LOTX064, LOTW583, LOTX171", quantity: 5 },
    { stt: "", name: "TAY Cáº¦M CÃ“ KHÃ“A", code: "33122", quantity: 4 },
    { stt: 2, name: "TAY Cáº¦M KHÃ”NG KHÃ“A", code: "", quantity: 1 },
    { stt: 3, name: "TROCA 10MM TRÆ N", code: "LOTYT20", quantity: 2 },
    { stt: 4, name: "TROCA 10MM XOáº®N", code: "LOT2T01", quantity: 1 },
    { stt: 5, name: "NÃ’NG NHá»ŒN 10MM TRÆ N", code: "LOTYT132", quantity: 1 },
    { stt: 6, name: "NÃ’NG NHá»ŒN 10MM XOáº®N", code: "LOTMA, LOT2T01", quantity: 2 },
    { stt: 7, name: "TROCA 5MM XOáº®N", code: "", quantity: 3 },
    { stt: 8, name: "NÃ’NG NHá»ŒN 5MM XOáº®N", code: "LOT2T01", quantity: 1 },
    { stt: 9, name: "KÃ‰O MESK", code: "LOTXT26", quantity: 2 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ", code: "LOTTV02", quantity: 1 },
    { stt: 11, name: "ALISS", code: "LOTX003", quantity: 2 },
    { stt: 12, name: "Báº®T CÃ“C", code: "LOTMA31 02R", quantity: 1, note: "1 GÃƒY" },
    { stt: 13, name: "GRAPER", code: "", quantity: 1 },
    { stt: 14, name: "KELLY", code: "", quantity: 1 },
    { stt: 15, name: "MÃ“C Äá»T", code: "", quantity: 1 },
    { stt: 16, name: "á»NG HÃšT", code: "LOTST02", quantity: 1 },
    { stt: 17, name: "QUE Äáº¨Y CHá»ˆ", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 31, bold: true }
];
allKitsData["NS Sáº¢N"].footer = "ÄÃƒ KIá»‚M";

// Data for Bá»˜ Láº¤Y DÃ‚Y CHáº°NG (Trong má»¥c KHá»šP Gá»I)
allKitsData["Bá»˜ Láº¤Y DÃ‚Y CHáº°NG"] = [
    { stt: 1, name: "MÃ“C CHá»ˆ CÃN VÃ€NG", code: "C6105", quantity: 1 },
    { stt: 2, name: "MÅ¨I KHOAN 3 Cáº NH", code: "128", quantity: 1 },
    { stt: 3, name: "MÅ¨I KHOAN 4 Cáº NH 8MM", code: "", quantity: 1 },
    { stt: 4, name: "MÅ¨I KHOAN 4 Cáº NH 7MM", code: "", quantity: 1 },
    { stt: 5, name: "MÅ¨I KHOAN 4 Cáº NH 9MM", code: "", quantity: 1 },
    { stt: 6, name: "MÃ€I Sá»¤N 9MM", code: "120374", quantity: 1 },
    { stt: 7, name: "MÃ“C Láº¤Y GÃ‚N NHá»Ž", code: "", quantity: 6 },
    { stt: 8, name: "TAY Cáº¦M MÃ“C", code: "", quantity: 1 },
    { stt: 9, name: "MÃ“C Láº¤Y GÃ‚N TRUNG CÃN XANH", code: "", quantity: 1 },
    { stt: 10, name: "MÃ“C Láº¤Y GÃ‚N Lá»šN", code: "", quantity: 1 },
    { stt: 11, name: "CÃ’ THáº²NG", code: "", quantity: 1 },
    { stt: 12, name: "Gáº¤P THáº²NG", code: "", quantity: 1 },
    { stt: 13, name: "Gáº¤P TRÃI", code: "", quantity: 1 },
    { stt: 14, name: "Gáº¤P PHáº¢I", code: "", quantity: 1 },
    { stt: 15, name: "THÆ¯á»šC ÄO", code: "20256", quantity: 1 },
    { stt: 16, name: "Äáº¦U VÃT BÃT NEO", code: "", quantity: 1 },
    { stt: 17, name: "CÃN VÃT BÃT NEO", code: "", quantity: 1 },
    { stt: 18, name: "CÃ‚Y DáºªN ÄÆ¯á»œNG", code: "1112", quantity: 1 },
    { stt: 19, name: "CÃ‚Y THÄ‚M DÃ’", code: "20856", quantity: 1 },
    { stt: 20, name: "KHUNG NHáº®M Ná»˜I SOI", code: "8731", quantity: 1 },
    { stt: 21, name: "á»NG DáºªN ÄÆ¯á»œNG Äáº¾ VÃ€NG", code: "8719", quantity: 1 },
    { stt: 22, name: "á»NG DáºªN ÄÆ¯á»œNG Äáº¾ TRáº®NG", code: "8728", quantity: 1 },
    { stt: "", name: "Tá»”NG", code: "", quantity: 27, bold: true }
];
allKitsData["Bá»˜ Láº¤Y DÃ‚Y CHáº°NG"].footer = "ÄÃƒ KIá»‚M";

// Data for CAPPA 1
allKitsData["CAPPA 1"] = [
    { stt: 1, name: "CÃ ng banh da", code: "BV812R", quantity: 1 },
    { stt: 2, name: "MÃ³c nhá» 35mm", code: "BV870R", quantity: 1 },
    { stt: 3, name: "MÃ³c trung 40mm", code: "BV871R", quantity: 1 },
    { stt: 4, name: "MÃ³c trung 45mm", code: "BV872R", quantity: 1 },
    { stt: 5, name: "MÃ³c trung 50mm", code: "BV873R", quantity: 1 },
    { stt: 6, name: "MÃ³c trung 55mm", code: "BV874R", quantity: 1 },
    { stt: 7, name: "Banh da 40mm", code: "BV799R", quantity: 1 },
    { stt: 8, name: "Banh da 45mm", code: "BV800R", quantity: 1 },
    { stt: 9, name: "Banh da 50mm", code: "BV801R", quantity: 1 },
    { stt: 10, name: "Banh da 55mm", code: "BV802R", quantity: 1 },
    { stt: "", name: "Tá»”NG", code: "", quantity: 10, bold: true }
];
allKitsData["CAPPA 1"].footer = "ÄÃƒ KIá»‚M";

// Data for CAPPA 2
allKitsData["CAPPA 2"] = [
    { stt: 1, name: "CÃ ng banh da", code: "BV812R", quantity: 1 },
    { stt: 2, name: "MÃ³c nhá» 35mm", code: "BV870R", quantity: 1 },
    { stt: 3, name: "MÃ³c trung 40mm", code: "BV871R", quantity: 1 },
    { stt: 4, name: "MÃ³c trung 45mm", code: "BV872R", quantity: 1 },
    { stt: 5, name: "MÃ³c trung 50mm", code: "BV873R", quantity: 1 },
    { stt: 6, name: "MÃ³c trung 55mm", code: "BV874R", quantity: 1 },
    { stt: 7, name: "Banh da 40mm", code: "BV799R", quantity: 1 },
    { stt: 8, name: "Banh da 45mm", code: "BV800R", quantity: 1 },
    { stt: 9, name: "Banh da 50mm", code: "BV801R", quantity: 1 },
    { stt: 10, name: "Banh da 55mm", code: "BV802R", quantity: 1 },
    { stt: "", name: "Tá»”NG", code: "", quantity: 10, bold: true }
];
allKitsData["CAPPA 2"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 1
allKitsData["THáº¦N KINH 1"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R, BH141R, BH125R, HB0602 (HEBU)", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R, BD029R", quantity: 2 },
    { stt: 5, name: "ALISS", code: "5.EA016R, 1.HB4302", quantity: 6 },
    { stt: 6, name: "Ká»€M Káº¸P KIM", code: "BM237R", quantity: 1 },
    { stt: 7, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 8, name: "FIX XÄ‚NG", code: "BF431R, BF437R", quantity: 6 },
    { stt: 9, name: "KÃ‰O MESK", code: "ROLAN", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ", code: "GERMANY", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO Sá» 7", code: "KHÃ”NG MÃƒ", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 44, bold: true }
];
allKitsData["THáº¦N KINH 1"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 2
allKitsData["THáº¦N KINH 2"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 15 },
    { stt: 3, name: "KELLY TRUNG", code: "BH141R", quantity: 1 },
    { stt: 4, name: "KELLY TRUNG", code: "HB0602 (HEBU)", quantity: 1 },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "HB0302", quantity: 1 },
    { stt: 6, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: 7, name: "NHÃP KHÃ”NG Máº¤U", code: "BD030R", quantity: 1 },
    { stt: 8, name: "ALISS", code: "4.HB4302, 2.EA016R (HEBU)", quantity: 6 },
    { stt: 9, name: "Ká»€M Káº¸P KIM", code: "LAWTON", quantity: 1 },
    { stt: 10, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 11, name: "FIX XÄ‚NG", code: "BF431R", quantity: 2 },
    { stt: 12, name: "FIX XÄ‚NG", code: "BF437R", quantity: 4 },
    { stt: 13, name: "KÃ‰O MESK", code: "BC271R", quantity: 1 },
    { stt: 14, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BV Há»’NG Äá»¨C", quantity: 1 },
    { stt: 15, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 16, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 17, name: "CÃN DAO Sá» 7", code: "", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 46, bold: true }
];
allKitsData["THáº¦N KINH 2"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 3
allKitsData["THáº¦N KINH 3"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 12 },
    { stt: 3, name: "KELLY TRUNG", code: "BH141R", quantity: 1 },
    { stt: 4, name: "KELLY TRUNG", code: "HB0602 (HEBU)", quantity: 2 },
    { stt: 5, name: "NHÃP CÃ“ Máº¤U", code: "HB0302 (HEBU)", quantity: 1 },
    { stt: 6, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223 (HEBU)", quantity: 1 },
    { stt: 7, name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R", quantity: 1 },
    { stt: 8, name: "ALISS", code: "EA016R", quantity: 6 },
    { stt: 9, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 10, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 11, name: "FIX XÄ‚NG", code: "BF431R", quantity: 2 },
    { stt: 12, name: "FIX XÄ‚NG", code: "BF437R", quantity: 4 },
    { stt: 13, name: "KÃ‰O MESK", code: "BC265R", quantity: 1 },
    { stt: 14, name: "KÃ‰O Cáº®T CHá»ˆ", code: "LAWTON", quantity: 1 },
    { stt: 15, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 16, name: "CÃN DAO", code: "BB073R", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 42, bold: true }
];
allKitsData["THáº¦N KINH 3"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 4
allKitsData["THáº¦N KINH 4"] = [
    { stt: 1, name: "KELLY NHá»Ž 111R", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 12 },
    { stt: 3, name: "KELLY TRUNG", code: "HB0602 (HEBU)", quantity: 2 },
    { stt: 4, name: "NHÃP CÃ“ Máº¤U", code: "HB0302 (HEBU)", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225 (HEBU)", quantity: 2 },
    { stt: 6, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: 7, name: "ALISS", code: "EA016R", quantity: 4 },
    { stt: 8, name: "ALISS", code: "HB4302 (HEBU)", quantity: 2 },
    { stt: 9, name: "Ká»€M Káº¸P KIM", code: "BM 066R", quantity: 1 },
    { stt: 10, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 11, name: "FIX XÄ‚NG", code: "BF431R", quantity: 6 },
    { stt: 12, name: "KÃ‰O MESK", code: "BC271R", quantity: 1 },
    { stt: 13, name: "KÃ‰O Cáº®T CHá»ˆ", code: "", quantity: 1, note: "cÃ¹n, máº» Ä‘áº§u" },
    { stt: 14, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 15, name: "PARABOP Lá»šN", code: "", quantity: 2 },
    { stt: 16, name: "CÃN DAO", code: "Sá» 7", quantity: 1 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 44, bold: true }
];
allKitsData["THáº¦N KINH 4"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 5
allKitsData["THáº¦N KINH 5"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH141R", quantity: 1 },
    { stt: 3, name: "KELLY TRUNG", code: "BH135R", quantity: 14 },
    { stt: 4, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: 6, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225 (HEBU)", quantity: 1 },
    { stt: 7, name: "ALISS", code: "EA016R", quantity: 6 },
    { stt: 8, name: "Ká»€M Káº¸P KIM", code: "HB2202 (HEBU)", quantity: 1 },
    { stt: 9, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 10, name: "FIX XÄ‚NG", code: "BF431R", quantity: 4 },
    { stt: 11, name: "FIX XÄ‚NG", code: "BF437R", quantity: 2 },
    { stt: 12, name: "KÃ‰O MESK (CÃ™N)", code: "CÃN VÃ€NG", quantity: 1 },
    { stt: 13, name: "KÃ‰O Cáº®T CHá»ˆ (CÃ™N)", code: "LAWTON", quantity: 1 },
    { stt: 14, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 15, name: "CÃN DAO", code: "", quantity: 1 },
    { stt: 16, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: "", name: "Tá»”NG Cá»˜NG", code: "", quantity: 44, bold: true }
];
allKitsData["THáº¦N KINH 5"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 6
allKitsData["THáº¦N KINH 6"] = [
    { stt: 1, name: "KELLY NHá»Ž 111R", code: "", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "", quantity: 14, note: "GÃ£y 1" },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "", quantity: 2 },
    { stt: 5, name: "ALISS", code: "", quantity: 6 },
    { stt: 6, name: "Ká»€M Káº¸P KIM ( mÃ²n rÄƒng )", code: "", quantity: 1 },
    { stt: 7, name: "XÃ€ MÃ‚U", code: "", quantity: 1 },
    { stt: 8, name: "FIX XÄ‚NG", code: "", quantity: 6 },
    { stt: 9, name: "KÃ‰O MESK (cÃ¹n)", code: "", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ (cÃ¹n)", code: "", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "", quantity: 2 },
    { stt: 12, name: "PARABOP Lá»šN", code: "", quantity: 2 },
    { stt: 13, name: "CÃN DAO", code: "", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 43, bold: true }
];
allKitsData["THáº¦N KINH 6"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 7
allKitsData["THáº¦N KINH 7"] = [
    { stt: 1, name: "KELLY NHá»Ž 111R", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 12 },
    { stt: 3, name: "KELLY TRUNG", code: "BH141R", quantity: 1 },
    { stt: 4, name: "KELLY TRUNG", code: "HB0602 (HEBU)", quantity: 1 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "BD519R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: "", name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225 (HEBU)", quantity: 1 },
    { stt: 5, name: "ALISS", code: "EA016R", quantity: 6 },
    { stt: 6, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 7, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 8, name: "FIX XÄ‚NG", code: "BF437R", quantity: 3 },
    { stt: "", name: "FIX XÄ‚NG", code: "BF431R", quantity: 2 },
    { stt: "", name: "FIX XÄ‚NG", code: "KHÃ”NG MÃƒ", quantity: 1 },
    { stt: 9, name: "KÃ‰O MESK", code: "BC606R", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ", code: "05-121", quantity: 1, note: "cÃ¹n, máº» Ä‘áº§u" },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO", code: "Sá» 3", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 43, bold: true }
];
allKitsData["THáº¦N KINH 7"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 8
allKitsData["THáº¦N KINH 8"] = [
    { stt: 1, name: "KELLY NHá»Ž 111R", code: "BH111R", quantity: 4, note: "HEBU" },
    { stt: "", name: "KELLY NHá»Ž 111R", code: "HB05015", quantity: 1, note: "HEBU" },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 11 },
    { stt: 3, name: "KELLY TRUNG", code: "BH141R", quantity: 1, note: "HEBU" },
    { stt: "", name: "KELLY TRUNG", code: "HB0602", quantity: 2, note: "HEBU" },
    { stt: 4, name: "NHÃP CÃ“ Máº¤U", code: "BD519R", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: "", name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R", quantity: 1 },
    { stt: 6, name: "ALISS", code: "EA016R", quantity: 4, note: "HEBU" },
    { stt: "", name: "ALISS", code: "HB4302", quantity: 2, note: "HEBU" },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 9, name: "FIX XÄ‚NG", code: "BF437R", quantity: 4 },
    { stt: "", name: "FIX XÄ‚NG", code: "BF431R", quantity: 1 },
    { stt: "", name: "FIX XÄ‚NG", code: "PAKISTAN", quantity: 1 },
    { stt: 10, name: "KÃ‰O MESK", code: "HB2258", quantity: 1 },
    { stt: 11, name: "KÃ‰O Cáº®T CHá»ˆ", code: "BC346R", quantity: 1 },
    { stt: 12, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 1 },
    { stt: "", name: "PARABOP NHá»Ž", code: "KHÃ”NG Sá»", quantity: 1 },
    { stt: 13, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 14, name: "CÃN DAO Sá» 7", code: "BB077R", quantity: 1 },
    { stt: 15, name: "NHÃP VI PHáºªU", code: "PAKISTAN", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 44, bold: true }
];
allKitsData["THáº¦N KINH 8"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 9
allKitsData["THáº¦N KINH 9"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "BH111R, HB0515", quantity: 5, note: "HEBU" },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R, BH141R, BH135R", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD031R, BD047R", quantity: 2 },
    { stt: 5, name: "ALISS", code: "EA016R, HB4302", quantity: 6 },
    { stt: 6, name: "Ká»€M Káº¸P KIM", code: "BM066R", quantity: 1 },
    { stt: 7, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 8, name: "FIX XÄ‚NG", code: "BF431R, BF437R", quantity: 6 },
    { stt: 9, name: "KÃ‰O MESK ( CÃ¹n )", code: "B0271R", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ ( CÃ¹n )", code: "ROLAN 04113016", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO Sá» 7", code: "KHÃ”NG MÃƒ", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 44, bold: true }
];
allKitsData["THáº¦N KINH 9"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 10
allKitsData["THáº¦N KINH 10"] = [
    { stt: 1, name: "KELLY NHá»Ž 111R", code: "BH111R", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "BH135R", quantity: 14 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "BD559R", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "BD029R", quantity: 1 },
    { stt: "", name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225 (HEBU)", quantity: 1 },
    { stt: 5, name: "ALISS", code: "EA016R", quantity: 5 },
    { stt: "", name: "ALISS", code: "HB4302 (HEBU)", quantity: 1 },
    { stt: 6, name: "Ká»€M Káº¸P KIM", code: "HB2202 (HEBU)", quantity: 1 },
    { stt: 7, name: "XÃ€ MÃ‚U", code: "BJ057R", quantity: 1 },
    { stt: 8, name: "FIX XÄ‚NG", code: "BF431R", quantity: 1 },
    { stt: "", name: "FIX XÄ‚NG", code: "BF437R", quantity: 3 },
    { stt: "", name: "FIX XÄ‚NG", code: "BF432R", quantity: 1 },
    { stt: "", name: "FIX XÄ‚NG", code: "LAWTON", quantity: 1 },
    { stt: 9, name: "KÃ‰O MESK", code: "05-0620", quantity: 1 },
    { stt: 10, name: "KÃ‰O Cáº®T CHá»ˆ ( cÃ¹n, máº» Ä‘áº§u )", code: "HB1706 (HEBU)", quantity: 1 },
    { stt: 11, name: "PARABOP NHá»Ž", code: "BT020R", quantity: 2 },
    { stt: 12, name: "PARABOP TRUNG", code: "BT021R", quantity: 2 },
    { stt: 13, name: "CÃN DAO", code: "BD077R", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 43, bold: true }
];
allKitsData["THáº¦N KINH 10"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 11 (Bá»™ tháº§n kinh HeBu sá»‘ 11)
allKitsData["THáº¦N KINH 11"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "HB0515", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "HB0602", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "HB302", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225", quantity: 1 },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 6 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "HB0684-20", quantity: 1 },
    { stt: 9, name: "FIX XÄ‚NG", code: "HB0772", quantity: 6 },
    { stt: 10, name: "KÃ‰O MESK (cÃ¹n)", code: "HB2285", quantity: 1 },
    { stt: 11, name: "KÃ‰O Cáº®T CHá»ˆ", code: "HB1706", quantity: 1 },
    { stt: 12, name: "PARABOP NHá»Ž", code: "HB3160", quantity: 2 },
    { stt: 13, name: "PARABOP Lá»šN", code: "HB3161", quantity: 2 },
    { stt: 14, name: "CÃN DAO", code: "HB1097", quantity: 1 },
    { stt: 15, name: "KÃ‰O MAYO", code: "HB1798", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 45, bold: true }
];
allKitsData["THáº¦N KINH 11"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 12 (Bá»™ tháº§n kinh HaBu sá»‘ 12)
allKitsData["THáº¦N KINH 12"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "HB51525", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "HB0602", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "KHÃ”NG MÃƒ", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223", quantity: 2 },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 6 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "HB0684-20", quantity: 1 },
    { stt: 9, name: "FIX XÄ‚NG", code: "HB0772", quantity: 6 },
    { stt: 10, name: "KÃ‰O MESK", code: "HB2285", quantity: 1 },
    { stt: 11, name: "KÃ‰O Cáº®T CHá»ˆ", code: "HB1706", quantity: 1 },
    { stt: 12, name: "PARABOP NHá»Ž", code: "HB3160, 1.KHÃ”NG TÃŠN", quantity: 2 },
    { stt: 13, name: "PARABOP TRUNG", code: "HB3161, 1.KHÃ”NG TÃŠN", quantity: 2 },
    { stt: 14, name: "CÃN DAO", code: "HB1097", quantity: 1 },
    { stt: 15, name: "KÃ‰O MAYO", code: "HB1798", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 46, bold: true }
];
allKitsData["THáº¦N KINH 12"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 13 (Bá»™ tháº§n kinh HaBu sá»‘ 13)
allKitsData["THáº¦N KINH 13"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "HB51525", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "HB0602", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "HB302", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225", quantity: 1 },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 6 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "HB0684-20", quantity: 1 },
    { stt: 9, name: "FIX XÄ‚NG", code: "HB0772", quantity: 6 },
    { stt: 10, name: "KÃ‰O MESK", code: "HB2285", quantity: 1 },
    { stt: 11, name: "KÃ‰O Cáº®T CHá»ˆ", code: "HB1706", quantity: 1 },
    { stt: 12, name: "PARABOP NHá»Ž", code: "HB3160", quantity: 2 },
    { stt: 13, name: "PARABOP Lá»šN", code: "HB3161", quantity: 2 },
    { stt: 14, name: "CÃN DAO", code: "HB1097", quantity: 1 },
    { stt: 15, name: "KÃ‰O MAYO", code: "HB1798", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 45, bold: true }
];
allKitsData["THáº¦N KINH 13"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 14 (Bá»™ tháº§n kinh HaBu sá»‘ 14)
allKitsData["THáº¦N KINH 14"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "HB0515", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "HB0602", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "HB302", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225", quantity: 1 },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 6 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "HB0684-20", quantity: 1 },
    { stt: 9, name: "FIX XÄ‚NG", code: "HB0772", quantity: 6 },
    { stt: 10, name: "KÃ‰O MESK", code: "HB2285", quantity: 1 },
    { stt: 11, name: "KÃ‰O Cáº®T CHá»ˆ (GÃƒY)", code: "HB1706", quantity: 1, note: "GÃ£y" },
    { stt: 12, name: "PARABOP NHá»Ž", code: "HB3160", quantity: 2 },
    { stt: 13, name: "PARABOP Lá»šN", code: "HB3161", quantity: 2 },
    { stt: 14, name: "CÃN DAO", code: "HB1097", quantity: 1 },
    { stt: 15, name: "KÃ‰O MAYO (GÃƒY)", code: "HB1798", quantity: 1, note: "GÃ£y" },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 45, bold: true }
];
allKitsData["THáº¦N KINH 14"].footer = "ÄÃƒ KIá»‚M";

// Data for THáº¦N KINH 15 (Bá»™ tháº§n kinh HaBu sá»‘ 15)
allKitsData["THáº¦N KINH 15"] = [
    { stt: 1, name: "KELLY NHá»Ž", code: "HB0515", quantity: 5 },
    { stt: 2, name: "KELLY TRUNG", code: "HB0602", quantity: 15 },
    { stt: 3, name: "NHÃP CÃ“ Máº¤U", code: "HB302", quantity: 1 },
    { stt: 4, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0223", quantity: 1 },
    { stt: 5, name: "NHÃP KHÃ”NG Máº¤U", code: "HB0225", quantity: 1 },
    { stt: 6, name: "ALISS", code: "HB4302", quantity: 6 },
    { stt: 7, name: "Ká»€M Káº¸P KIM", code: "HB2202", quantity: 1 },
    { stt: 8, name: "XÃ€ MÃ‚U", code: "HB0684-20", quantity: 1 },
    { stt: 9, name: "FIX XÄ‚NG", code: "HB0772", quantity: 6 },
    { stt: 10, name: "KÃ‰O MESK", code: "HB2285", quantity: 1 },
    { stt: 11, name: "KÃ‰O Cáº®T CHá»ˆ", code: "HB1706", quantity: 1 },
    { stt: 12, name: "PARABOP NHá»Ž", code: "HB3160", quantity: 2 },
    { stt: 13, name: "PARABOP Lá»šN", code: "HB3161", quantity: 2 },
    { stt: 14, name: "CÃN DAO", code: "HB1097", quantity: 1 },
    { stt: 15, name: "KÃ‰O MAYO", code: "HB1798", quantity: 1 },
    { stt: "", name: "Tá»•ng cá»™ng", code: "", quantity: 45, bold: true }
];
allKitsData["THáº¦N KINH 15"].footer = "ÄÃƒ KIá»‚M";
