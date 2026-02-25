const APP_VERSION = "v2.1 PRO (FINAL) (00:01:59 26/2/2026)";
const kitDefinitions = [
    {
        "id": 1,
        "baseName": "BỘ CẮT TỬ CUNG",
        "prefix": "CTC",
        "count": 3,
        "icon": "fa-scissors",
        "color": "icon-pink"
    },
    {
        "id": 2,
        "baseName": "KHỚP GỐI",
        "prefix": "KHỚP GỐI",
        "count": 0,
        "icon": "fa-bone",
        "color": "icon-blue",
        "extraSubKits": [
            "BỘ LẤY DÂY CHẰNG"
        ]
    },
    {
        "id": 3,
        "baseName": "HC Ố CỔ TAY",
        "prefix": "HC Ố CỔ TAY",
        "count": 1,
        "icon": "fa-hand-paper",
        "color": "icon-teal"
    },
    {
        "id": 4,
        "baseName": "NIỆU",
        "prefix": "NIỆU",
        "count": 3,
        "icon": "fa-filter",
        "color": "icon-orange",
        "extraSubKits": [
            "BỘ NONG NIỆU ĐẠO"
        ]
    },
    {
        "id": 5,
        "baseName": "NỘI SOI SẢN",
        "prefix": "NS SẢN",
        "count": 1,
        "icon": "fa-baby",
        "color": "icon-pink"
    },
    {
        "id": 6,
        "baseName": "NỘI SOI TỔNG QUÁT",
        "prefix": "NS TỔNG QUÁT",
        "count": 2,
        "icon": "fa-microscope",
        "color": "icon-indigo"
    },
    {
        "id": 7,
        "baseName": "SỌ NÃO",
        "prefix": "SỌ NÃO",
        "count": 1,
        "icon": "fa-brain",
        "color": "icon-purple"
    },
    {
        "id": 8,
        "baseName": "TAI MŨI HỌNG",
        "prefix": "TAI MŨI HỌNG",
        "count": 0,
        "icon": "fa-head-side-virus",
        "color": "icon-pink",
        "extraSubKits": [
            "NS TAI MŨI HỌNG",
            "SOI TREO TMH",
            "BỘ NẠO VA",
            "BỘ CẮT AMIDAN CŨ",
            "BỘ CẮT AMIDAN MỚI 1",
            "BỘ CẮT A MỚI 2",
            "BỘ TAI"
        ]
    },
    {
        "id": 9,
        "baseName": "VI PHẪU",
        "prefix": "VI PHẪU",
        "count": 0,
        "icon": "fa-microscope",
        "color": "icon-teal",
        "extraSubKits": [
            "VI PHẪU BS PHƯỚC",
            "VP CỘT SỐNG",
            "VI PHẪU CŨ (MỔ HỞ)"
        ]
    },
    {
        "id": 10,
        "baseName": "BỘ THẦN KINH MẠCH MÁU",
        "prefix": "THẦN KINH",
        "count": 15,
        "icon": "fa-heart-pulse",
        "color": "icon-red"
    },
    {
        "id": 11,
        "baseName": "BỘ TIỂU PHẪU",
        "prefix": "TIỂU PHẪU",
        "count": 4,
        "icon": "fa-syringe",
        "color": "icon-green"
    },
    {
        "id": 12,
        "baseName": "ĐẠI PHẪU",
        "prefix": "ĐẠI PHẪU",
        "count": 1,
        "icon": "fa-user-nurse",
        "color": "icon-red"
    },
    {
        "id": 13,
        "baseName": "TRUNG PHẪU",
        "prefix": "TRUNG PHẪU",
        "count": 2,
        "icon": "fa-user-md",
        "color": "icon-blue"
    },
    {
        "id": 14,
        "baseName": "XƯƠNG CHI TRÊN",
        "prefix": "XƯƠNG CHI TRÊN",
        "count": 1,
        "icon": "fa-hand-holding-medical",
        "color": "icon-orange"
    },
    {
        "id": 15,
        "baseName": "XƯƠNG CHI DƯỚI",
        "prefix": "XƯƠNG CHI DƯỚI",
        "count": 1,
        "icon": "fa-wheelchair",
        "color": "icon-purple"
    },
    {
        "id": 16,
        "baseName": "CAPPA",
        "prefix": "CAPPA",
        "count": 2,
        "icon": "fa-notes-medical",
        "color": "icon-indigo"
    },
    {
        "id": 17,
        "baseName": "THOÁT VỊ LƯNG",
        "prefix": "TV LƯNG",
        "count": 2,
        "icon": "fa-crutch",
        "color": "icon-blue"
    },
    {
        "id": 18,
        "baseName": "THOÁT VỊ CỔ",
        "prefix": "TV CỔ",
        "count": 1,
        "icon": "fa-head-side-mask",
        "color": "icon-green"
    },
    {
        "id": 19,
        "baseName": "BỘ KHOAN PIN",
        "prefix": "KHOAN PIN",
        "count": 1,
        "icon": "fa-screwdriver",
        "color": "icon-blue"
    },
    {
        "id": 20,
        "baseName": "BỘ BẮT CON",
        "prefix": "BẮT CON",
        "count": 3,
        "icon": "fa-child",
        "color": "icon-green"
    },
    {
        "id": 21,
        "baseName": "BỘ LÕM NGỰC",
        "prefix": "LÕM NGỰC",
        "count": 1,
        "icon": "fa-lungs",
        "color": "icon-blue"
    },
    {
        "id": 22,
        "baseName": "BỘ THÁO VIS ĐA NĂNG",
        "prefix": "BỘ THÁO VIS ĐA NĂNG",
        "count": 1,
        "icon": "fa-screwdriver-wrench",
        "color": "icon-blue"
    },
    {
        "id": 23,
        "baseName": "BỘ DỤNG CỤ NS DÂY CHẰNG",
        "prefix": "NS DÂY CHẰNG",
        "count": 0,
        "icon": "fa-joint",
        "color": "icon-teal",
        "extraSubKits": [
            "BỘ LẤY GÂN - DÂY CHẰNG",
            "BỘ NS LẤY GÂN MÁC"
        ]
    },
    {
        "id": 24,
        "baseName": "DỤNG CỤ LẺ",
        "prefix": "DỤNG CỤ LẺ",
        "count": 0,
        "icon": "fa-toolbox",
        "color": "icon-orange",
        "extraSubKits": [
            "DỤNG CỤ MỔ HỞ LẺ",
            "DỤNG CỤ NỘI SOI LẺ"
        ]
    }
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
                if (!allKitsData[subName]) allKitsData[subName] = [];
            });
        }
    });
}
initializeData();
