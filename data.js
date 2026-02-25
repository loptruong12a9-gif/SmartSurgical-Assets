const APP_VERSION = "v2.0 PRO (FINAL) (19:41:40 25/2/2026)";
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

// Data for BẮT CON 1
allKitsData["BẮT CON 1"] = [
  {
    "stt": 1,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 6
  },
  {
    "stt": 2,
    "name": "FIXANG",
    "code": "BF432R+431R +436R",
    "quantity": 4
  },
  {
    "stt": 3,
    "name": "KÉO MAYO",
    "code": "LAWTON",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KÉO EACULAP",
    "code": "BC557R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1,
    "note": "2 CÁI"
  },
  {
    "stt": 6,
    "name": "NHÍP CÓ MẤU",
    "code": "HB0302",
    "quantity": 3,
    "note": "1"
  },
  {
    "stt": 7,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD051R",
    "quantity": 3,
    "note": "1"
  },
  {
    "stt": 8,
    "name": "KOCHER THẲNG",
    "code": "BH646R",
    "quantity": 2,
    "note": "3 Cái"
  },
  {
    "stt": 9,
    "name": "KẸP TAM GIÁC",
    "code": "EA061R",
    "quantity": 1,
    "note": "3"
  },
  {
    "stt": 10,
    "name": "KẸP TĂM BÔNG",
    "code": "BF122R",
    "quantity": 1,
    "note": "2"
  },
  {
    "stt": 11,
    "name": "VAN SẢN",
    "code": "BV668R",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "PARAPOP",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "VAN VỆ",
    "code": "EL638",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 28,
    "bold": true
  }
];
allKitsData["BẮT CON 1"].footer = "ĐÃ KIỂM 01/2026";
// Data for BẮT CON 2
allKitsData["BẮT CON 2"] = [
  {
    "stt": 1,
    "name": "KELLY TRUNG",
    "code": "BH165R",
    "quantity": 4,
    "note": "6"
  },
  {
    "stt": 2,
    "name": "FIXANG",
    "code": "BF473R",
    "quantity": 2
  },
  {
    "stt": 3,
    "name": "FIXANG",
    "code": "BF432R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "FIXANG",
    "code": "140740",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "KÉO CẮT CHỈ",
    "code": "50121",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 6,
    "name": "KÉO MAYO",
    "code": "BC557R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "BM249R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "NHÍP CÓ MẤU",
    "code": "BD557R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KOCHER THẲNG",
    "code": "BH646R",
    "quantity": 3
  },
  {
    "stt": 12,
    "name": "KẸP TAM GIÁC",
    "code": "EA061R",
    "quantity": 3
  },
  {
    "stt": 13,
    "name": "KẸP TĂM BÔNG",
    "code": "BF122R",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "VAN VỆ",
    "code": "EL638R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "PARAPOP",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "CÁN DAO SỐ 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 26,
    "bold": true
  }
];
allKitsData["BẮT CON 2"].footer = "ĐÃ KIỂM";
// Data for BẮT CON 3
allKitsData["BẮT CON 3"] = [
  {
    "stt": 1,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 6,
    "note": "GÃY 2"
  },
  {
    "stt": 2,
    "name": "FIXANG",
    "code": "BF431R<br>BF437R<br>BF436R",
    "quantity": 4
  },
  {
    "stt": 3,
    "name": "KÉO CẮT CHỈ",
    "code": "54-4034",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 4,
    "name": "KÉO MAYO",
    "code": "BC557R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 5,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "KOCHER THẲNG",
    "code": "BH646R",
    "quantity": 3
  },
  {
    "stt": 10,
    "name": "KẸP TAM GIÁC",
    "code": "EA061R",
    "quantity": 3
  },
  {
    "stt": 11,
    "name": "KẸP TĂM BÔNG",
    "code": "BF123R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "VAN SẢN",
    "code": "BV608R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 26,
    "bold": true
  }
];
allKitsData["BẮT CON 3"].footer = "ĐÃ KIỂM";
// Data for BỘ CẮT A MỚI 2
allKitsData["BỘ CẮT A MỚI 2"] = [
  {
    "stt": 1,
    "name": "ĐÈ LƯỠI",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 2,
    "name": "BANH MIỆNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "ALISS",
    "code": "EA026R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CÁN DAO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "VÉN TRỤ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "NHÍP",
    "code": "BD230R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "KELLY",
    "code": "29180",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "FIXANG",
    "code": "BF432R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 14,
    "bold": true
  }
];
allKitsData["BỘ CẮT A MỚI 2"].footer = "ĐÃ KIỂM";
// Data for BỘ CẮT AMIDAN CŨ
allKitsData["BỘ CẮT AMIDAN CŨ"] = [
  {
    "stt": 1,
    "name": "ĐÈ LƯỠI THẲNG",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 2,
    "name": "ĐÈ LƯỠI CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "SÚNG CẮT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "BANH MIỆNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "NHÍP",
    "code": "BD031R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "KELLY",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "FIXANG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "ALISS",
    "code": "",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 11,
    "name": "KÉO MAYO",
    "code": "BC557R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 12,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 13,
    "name": "VÉN TRỤ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 15,
    "bold": true
  }
];
allKitsData["BỘ CẮT AMIDAN CŨ"].footer = "ĐÃ KIỂM";
// Data for BỘ CẮT AMIDAN MỚI 1
allKitsData["BỘ CẮT AMIDAN MỚI 1"] = [
  {
    "stt": 1,
    "name": "ĐÈ LƯỠI",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 2,
    "name": "BANH MIỆNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KỀM KẸP KIM",
    "code": "08-0100",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "ALISS",
    "code": "EA026R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 6,
    "name": "KÉO CẮT CHỈ",
    "code": "BC346R",
    "quantity": 1,
    "note": "CÙN, MẺ"
  },
  {
    "stt": 7,
    "name": "CÁN DAO",
    "code": "BB078R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "VÉN TRỤ",
    "code": "OM666R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "SÚNG CẮT A",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "NHÍP",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "KELLY",
    "code": "",
    "quantity": 1,
    "note": "CỨNG, RỈ SÉT"
  },
  {
    "stt": 13,
    "name": "FIXANG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 16,
    "bold": true
  }
];
allKitsData["BỘ CẮT AMIDAN MỚI 1"].footer = "ĐÃ KIỂM";
// Data for BỘ LẤY DÂY CHẰNG
allKitsData["BỘ LẤY DÂY CHẰNG"] = [
  {
    "stt": 1,
    "name": "MÓC CHỈ CÁN VÀNG",
    "code": "C6105",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "MŨI KHOAN 3 CẠNH",
    "code": "128",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "MŨI KHOAN 4 CẠNH 8MM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "MŨI KHOAN 4 CẠNH 7MM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "MŨI KHOAN 4 CẠNH 9MM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "MÀI SỤN 9MM",
    "code": "120374",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "MÓC LẤY GÂN NHỎ",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 8,
    "name": "TAY CẦM MÓC",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "MÓC LẤY GÂN TRUNG CÁN XANH",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "MÓC LẤY GÂN LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "CÒ THẲNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "GẤP THẲNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "GẤP TRÁI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "GẤP PHẢI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "THƯỚC ĐO",
    "code": "20256",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "ĐẦU VÍT BÁT NEO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "CÁN VÍT BÁT NEO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "CÂY DẪN ĐƯỜNG",
    "code": "1112",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "CÂY THĂM DÒ",
    "code": "20856",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "KHUNG NHẮM NỘI SOI",
    "code": "8731",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "ỐNG DẪN ĐƯỜNG ĐẾ VÀNG",
    "code": "8719",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "ỐNG DẪN ĐƯỜNG ĐẾ TRẮNG",
    "code": "8728",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 27,
    "bold": true
  }
];
allKitsData["BỘ LẤY DÂY CHẰNG"].footer = "ĐÃ KIỂM";
// Data for BỘ LẤY GÂN - DÂY CHẰNG
allKitsData["BỘ LẤY GÂN - DÂY CHẰNG"] = [
  {
    "stt": 1,
    "name": "MÓC CHỈ CÁN VÀNG",
    "code": "C6105",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "MŨI KHOAN 3 CẠNH",
    "code": "128",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "MŨI KHOAN 4 CẠNH 7MM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "MŨI KHOAN 4 CẠNH 8MM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "MŨI KHOAN 4 CẠNH 9MM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "MÀI SỤN 9MM",
    "code": "120374",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "MÓC LẤY GÂN NHỎ",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 8,
    "name": "TAY CẦM MÓC",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "MÓC LẤY GÂN TRUNG CÁN XANH",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "MÓC LẤY GÂN LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "CÒ THẲNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "GẮP THẲNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "GẮP TRÁI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "GẮP PHẢI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "THƯỚC ĐO",
    "code": "20256",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "ĐẦU VIS BẮT NEO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "CÁN VIS BẮT NEO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "CÂY DẪN ĐƯỜNG",
    "code": "1112",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "CÂY THĂM DÒ",
    "code": "20856",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "KHUNG NHẮM NỘI SOI",
    "code": "8731",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "ỐNG DẪN ĐƯỜNG ĐẾ VÀNG",
    "code": "8719",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "ỐNG DẪN ĐƯỜNG ĐẾ TRẮNG",
    "code": "8728",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 27,
    "bold": true
  }
];
allKitsData["BỘ LẤY GÂN - DÂY CHẰNG"].footer = "ĐÃ KIỂM 02/2026";
// Data for BỘ NẠO VA
allKitsData["BỘ NẠO VA"] = [
  {
    "stt": 1,
    "name": "NHÍP",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "MUỖNG NẠO",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 3,
    "name": "CÂY NẠO",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 4,
    "name": "CÂY GỌT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 7,
    "bold": true
  }
];
allKitsData["BỘ NẠO VA"].footer = "ĐÃ KIỂM";
// Data for BỘ NONG NIỆU ĐẠO
allKitsData["BỘ NONG NIỆU ĐẠO"] = [
  {
    "stt": 1,
    "name": "cây nong số 28",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "cây nong số 30",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "cây nong số 24",
    "code": "RZ 253-330-335",
    "quantity": 2
  },
  {
    "stt": 4,
    "name": "cây nong số 22",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "cây nong số 26",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "cây nong số 18",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "cây nong số 15",
    "code": "RZ 253-325-356",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "cây nong số 17",
    "code": "RZ 253-326-356",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "cây nong số 19",
    "code": "RZ 253-327-356",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "cây nong số 20",
    "code": "RZ 253-328-335",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "cây nong số 18",
    "code": "RZ 253-327-335",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "cây nong số 14",
    "code": "RZ 253-325-335",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "cây nong số 21",
    "code": "RZ 253-328-356",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "cây nong số 16",
    "code": "RZ 253-326-335",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "cây nong số 23",
    "code": "RZ 253-329-356",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "ống hút số 6",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 18,
    "bold": true
  }
];
allKitsData["BỘ NONG NIỆU ĐẠO"].footer = "ĐÃ KIỂM";
// Data for BỘ NS LẤY GÂN MÁC
allKitsData["BỘ NS LẤY GÂN MÁC"] = [
  {
    "stt": 1,
    "name": "CÂY DẪN ĐƯỜNG LẤY GÂN",
    "code": "L.166460",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "CÂY TẠO KHOANG",
    "code": "TS8850",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "MŨI KHOAN 1 RĂNG",
    "code": "C8675",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "MŨI KHOAN CÓ RĂNG",
    "code": "Không mã",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 4,
    "bold": true
  }
];
allKitsData["BỘ NS LẤY GÂN MÁC"].footer = "ĐÃ KIỂM 02/2026";
// Data for BỘ TAI
allKitsData["BỘ TAI"] = [
  {
    "stt": 1,
    "name": "CÂY BẤM DỊ VẬT",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 2,
    "name": "GẤP DỊ VẬT 45 ĐỘ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "ỐNG HÚT THẲNG",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 4,
    "name": "ỐNG HÚT CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "LƯỠI DAO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CÂY ĐỊNH VỊ",
    "code": "",
    "quantity": 1,
    "note": "GÃY ĐẦU"
  },
  {
    "stt": 7,
    "name": "CÂY ĐẦU NHỌN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "QUE THĂM DÒ",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "NHÍP KHỦY",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "KÉO CẮT",
    "code": "22260",
    "quantity": 3
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 16,
    "bold": true
  }
];
allKitsData["BỘ TAI"].footer = "ĐÃ KIỂM";
// Data for BỘ THÁO VIS ĐA NĂNG
allKitsData["BỘ THÁO VIS ĐA NĂNG"] = [
  {
    "stt": 1,
    "name": "Mũi đầu vuông 1.1mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "Mũi đầu vuông 1.2mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "Mũi khoan rỗng 1.7mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "Mũi khoan rỗng 2.0mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "Mũi khoan rỗng 2.7mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "Mũi khoan rỗng 4.0mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "Mũi khoan rỗng 5.5mm",
    "code": "",
    "quantity": 1,
    "note": "Gãy đầu"
  },
  {
    "stt": 8,
    "name": "Mũi khoan rỗng 6.5mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "Mũi khoan rỗng 8.5mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "Mũi hoa mai T7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "Mũi hoa mai T8",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "Mũi hoa mai T10",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "Mũi hoa mai T15",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "Mũi hoa mai T18",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "Mũi hoa mai T20",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "Mũi hoa mai T27",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "Mũi hoa mai T30",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "Mũi tam giác",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "Mũi lục giác SW1.5",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 20,
    "name": "Mũi lục giác SW2.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "Mũi lục giác SW2.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "Mũi lục giác SW3.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "Mũi lục giác SW3.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "Mũi lục giác SW4.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "Mũi lục giác SW4.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "Mũi lục giác SW5.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "Mũi lục giác SW5.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "Mũi khoét lấy vít",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 29,
    "name": "Mũi khoét lấy vít 2.5*0.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "Mũi khoét lấy vít 2.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "Mũi khoét lấy vít 3.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "Mũi khoét lấy vít 4.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 33,
    "name": "Mũi khoét lấy vít 4.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "Đầu ren trong Ø 3.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "Đầu ren trong Ø 4.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "Đầu ren trong Ø 6.5",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 37,
    "name": "Đầu vít dẹp 3.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 38,
    "name": "Đầu vít dẹp 6.0",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 39,
    "name": "Đầu chữ thập nhỏ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 40,
    "name": "Đầu chữ thập lớn",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 41,
    "name": "Mũi khoan dẫn",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 42,
    "name": "Đục thẳng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 43,
    "name": "Kìm gắp đinh",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 44,
    "name": "Cây kéo vít cố định",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 45,
    "name": "Dụng cụ giữ vít g ã y.",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 46,
    "name": "Tay chữ T",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 47,
    "name": "Tay thẳng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 48,
    "name": "Móc nhọn",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 49,
    "name": "Dùi lòng tủy",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 50,
    "name": "Hộp đựng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 54,
    "bold": true
  }
];
allKitsData["BỘ THÁO VIS ĐA NĂNG"].footer = "ĐÃ KIỂM";
// Data for CAPPA 1
allKitsData["CAPPA 1"] = [
  {
    "stt": 1,
    "name": "Càng banh da",
    "code": "BV812R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "Móc nhỏ 35mm",
    "code": "BV870R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "Móc trung 40mm",
    "code": "BV871R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "Móc trung 45mm",
    "code": "BV872R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "Móc trung 50mm",
    "code": "BV873R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "Móc trung 55mm",
    "code": "BV874R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "Banh da 40mm",
    "code": "BV799R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "Banh da 45mm",
    "code": "BV800R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "Banh da 50mm",
    "code": "BV801R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "Banh da 55mm",
    "code": "BV802R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 10,
    "bold": true
  }
];
allKitsData["CAPPA 1"].footer = "ĐÃ KIỂM";
// Data for CAPPA 2
allKitsData["CAPPA 2"] = [
  {
    "stt": 1,
    "name": "Càng banh da",
    "code": "BV812R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "Móc nhỏ 35mm",
    "code": "BV870R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "Móc trung 40mm",
    "code": "BV871R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "Móc trung 45mm",
    "code": "BV872R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "Móc trung 50mm",
    "code": "BV873R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "Móc trung 55mm",
    "code": "BV874R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "Banh da 40mm",
    "code": "BV799R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "Banh da 45mm",
    "code": "BV800R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "Banh da 50mm",
    "code": "BV801R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "Banh da 55mm",
    "code": "BV802R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 10,
    "bold": true
  }
];
allKitsData["CAPPA 2"].footer = "ĐÃ KIỂM";
// Data for CTC 1
allKitsData["CTC 1"] = [
  {
    "stt": 1,
    "name": "BANH BỤNG TỰ ĐỘNG",
    "code": "BV605R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "VAN SẢN",
    "code": "EL638",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "VAN VỆ LỚN VUÔNG",
    "code": "EL638R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "VAN ÂM ĐẠO",
    "code": "EL445R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "VAN ÂM ĐẠO",
    "code": "EL455R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "DIVER LỚN",
    "code": "BT614R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "MALEAP LỚN",
    "code": "BT758R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "MALEAP NHỎ",
    "code": "BT750R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "RECHARSON LỚN",
    "code": "BT472R",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "RECHARSON NHỎ",
    "code": "BT471R",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "PARAPOP",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "ỐNG HÚT",
    "code": "GF944R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "THƯỚC ĐO TỬ CUNG",
    "code": "EO101R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "KỀM KẸP KIM LỚN",
    "code": "BM068R",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "KỀM KẸP KIM NHỎ",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "KỀM KẸP KIM CONG",
    "code": "BM096R",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "KELLY ĐẠI",
    "code": "BH475R",
    "quantity": 4
  },
  {
    "stt": 20,
    "name": "POZZI",
    "code": "EO125R",
    "quantity": 2
  },
  {
    "stt": 21,
    "name": "FIX SANG",
    "code": "BF431R",
    "quantity": 5
  },
  {
    "stt": 22,
    "name": "XÀ MÂU",
    "code": "CH1725",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "ALISS DÀI",
    "code": "EA020R",
    "quantity": 2
  },
  {
    "stt": 24,
    "name": "ALISS NGẮN",
    "code": "EA016R",
    "quantity": 2
  },
  {
    "stt": 25,
    "name": "KELLY NHỎ DÀI",
    "code": "BH211R",
    "quantity": 3
  },
  {
    "stt": 26,
    "name": "KELLY TRUNG",
    "code": "BH165R",
    "quantity": 8,
    "note": "LỆCH HÀM 1"
  },
  {
    "stt": 27,
    "name": "HENEAY",
    "code": "BT520R",
    "quantity": 4
  },
  {
    "stt": 28,
    "name": "BẮT CÓC LỚN",
    "code": "FB934R +936",
    "quantity": 3
  },
  {
    "stt": 29,
    "name": "BẮT CONG TRUNG",
    "code": "EA033R",
    "quantity": 3
  },
  {
    "stt": 30,
    "name": "KOCHER NGẮN",
    "code": "BH646R",
    "quantity": 2
  },
  {
    "stt": 31,
    "name": "KOCHER DÀI",
    "code": "BH650R",
    "quantity": 2
  },
  {
    "stt": 32,
    "name": "TAM GIÁC",
    "code": "EA042R",
    "quantity": 3
  },
  {
    "stt": 33,
    "name": "KÉO MESS",
    "code": "BC277R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 34,
    "name": "KÉO CẮT CHỈ",
    "code": "120031170",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 35,
    "name": "NHÍP DÀI KHÔNG MẤU",
    "code": "BVHD",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 36,
    "name": "NHÍP TRUNG KHÔNG MẤU",
    "code": "GERMAN",
    "quantity": 1
  },
  {
    "stt": 37,
    "name": "NHÍP CÓ MẤU",
    "code": "ROLAN",
    "quantity": 1
  },
  {
    "stt": 38,
    "name": "KỀM TĂM BÔNG",
    "code": "BF120",
    "quantity": 1
  },
  {
    "stt": 39,
    "name": "ERCARTO VENE",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 72,
    "bold": true
  }
];
allKitsData["CTC 1"].footer = "ĐÃ KIỂM";
// Data for CTC 2
allKitsData["CTC 2"] = [
  {
    "stt": 1,
    "name": "KELLY CONG TRUNG",
    "code": "BH165R",
    "quantity": 8
  },
  {
    "stt": 2,
    "name": "KELLY CONG ỐM DÀI",
    "code": "BH211",
    "quantity": 3
  },
  {
    "stt": 3,
    "name": "KELLY LỚN",
    "code": "BH 449",
    "quantity": 4
  },
  {
    "stt": 4,
    "name": "ALISS DÀI",
    "code": "EA020",
    "quantity": 4
  },
  {
    "stt": 5,
    "name": "ALISS NGẮN",
    "code": "EA016",
    "quantity": 2,
    "note": "LỆCH HÀM 1"
  },
  {
    "stt": 6,
    "name": "FIXANG",
    "code": "BF431",
    "quantity": 5,
    "note": "HƯ 1"
  },
  {
    "stt": 7,
    "name": "KOCHER THẲNG DÀI",
    "code": "BH 650",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "KOCHER THẲNG NGẮN",
    "code": "BH 646",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "KẸP TĂM BÔNG",
    "code": "16008225",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "BABCOCK NHỎ",
    "code": "EA 033R",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "BABCOCK LỚN",
    "code": "FB936R",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "XÀ MÂU",
    "code": "BJ 057",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "KẸP TAM GIÁC",
    "code": "EA 042R",
    "quantity": 3
  },
  {
    "stt": 14,
    "name": "KẸP HELEY",
    "code": "BJ 520",
    "quantity": 4
  },
  {
    "stt": 15,
    "name": "KẸP POZZI",
    "code": "EO125",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "KỀM KẸP KIM DÀI",
    "code": "BM 068",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "KỀM KẸP KIM NGẮN",
    "code": "BM 066",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "KỀM KẸP KIM CONG",
    "code": "BM096",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "KÉO CẮT CHỈ",
    "code": "LAWTON",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 20,
    "name": "KÉO MESK (CÙN)",
    "code": "BC277",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 21,
    "name": "ECARTER",
    "code": "RZ 170",
    "quantity": 2
  },
  {
    "stt": 22,
    "name": "CÁN DAO SỐ 4",
    "code": "BB 084",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "NHÍP KHÔNG MẤU",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 25,
    "name": "THƯỚC ĐO TỬ CUNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "PARAPOP LỚN",
    "code": "BT021",
    "quantity": 2
  },
  {
    "stt": 27,
    "name": "MALEAP NHỎ",
    "code": "BT 750",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "MALEAP LỚN",
    "code": "BT 758",
    "quantity": 1
  },
  {
    "stt": 29,
    "name": "ỐNG HÚT",
    "code": "GF 944",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "RECHARSON NHỎ",
    "code": "BT 472R",
    "quantity": 2
  },
  {
    "stt": 31,
    "name": "RECHARSON LỚN",
    "code": "BT 471R",
    "quantity": 2
  },
  {
    "stt": 32,
    "name": "DIVER NHỎ",
    "code": "BT 611",
    "quantity": 2
  },
  {
    "stt": 33,
    "name": "DIVER LỚN",
    "code": "BT 614",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "VAN SẢN",
    "code": "BV605R",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "VAN TỰ ĐỘNG",
    "code": "BV 605",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 70,
    "bold": true
  }
];
allKitsData["CTC 2"].footer = "ĐÃ KIỂM";
// Data for CTC 3
allKitsData["CTC 3"] = [
  {
    "stt": 1,
    "name": "BANH BỤNG TỰ ĐỘNG",
    "code": "BV605R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "VAN SẢN",
    "code": "BV611",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "DIVER LỚN",
    "code": "BT614R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "MALEAP LỚN",
    "code": "BT758R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "MALEAP NHỎ",
    "code": "BT750R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "RECHARSON LỚN",
    "code": "BT472R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "RECHARSON NHỎ",
    "code": "M62",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "PARAPOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 10,
    "name": "ỐNG HÚT",
    "code": "GF944R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "THƯỚC ĐO TỬ CUNG",
    "code": "EO101R",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "KỀM KẸP KIM LỚN",
    "code": "BM070",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "KỀM KẸP KIM NHỎ",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KỀM KẸP KIM CONG",
    "code": "BM096R",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "POZZI",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 17,
    "name": "FIXXANG",
    "code": "BF431R",
    "quantity": 5,
    "note": "HƯ 4"
  },
  {
    "stt": 18,
    "name": "XÀ MÂU",
    "code": "BJ057",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "ALISS DÀI",
    "code": "EA020R",
    "quantity": 4
  },
  {
    "stt": 20,
    "name": "ALISS NGẮN",
    "code": "EA016R",
    "quantity": 2,
    "note": "HƯ 2"
  },
  {
    "stt": 21,
    "name": "KELLY NHỎ ỐM DÀI",
    "code": "BH211R",
    "quantity": 4
  },
  {
    "stt": 22,
    "name": "KELLY TRUNG",
    "code": "BH165R",
    "quantity": 8
  },
  {
    "stt": 23,
    "name": "KẸP HEANY",
    "code": "BT520R",
    "quantity": 4
  },
  {
    "stt": 24,
    "name": "BABCOK",
    "code": "EA052R",
    "quantity": 2
  },
  {
    "stt": 25,
    "name": "KOCHER NGẮN",
    "code": "BH646R",
    "quantity": 2
  },
  {
    "stt": 26,
    "name": "KOCHER DÀI",
    "code": "BH648R",
    "quantity": 2
  },
  {
    "stt": 27,
    "name": "KẸP TAM GIÁC",
    "code": "EA061R",
    "quantity": 3
  },
  {
    "stt": 28,
    "name": "KÉO MESK",
    "code": "BC277R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 29,
    "name": "KÉO CẮT CHỈ",
    "code": "LAWTON",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 30,
    "name": "NHÍP DÀI KHÔNG MẤU",
    "code": "BVHD",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "NHÍP TRUNG KHÔNG MẤU",
    "code": "GERMAN",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "NHÍP CÓ MẤU",
    "code": "ROLAN",
    "quantity": 1
  },
  {
    "stt": 33,
    "name": "KỀM TĂM BÔNG",
    "code": "BF120",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "ERCARTO VENE",
    "code": "RZ170",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 64,
    "bold": true
  }
];
allKitsData["CTC 3"].footer = "ĐÃ KIỂM";
// Data for DỤNG CỤ MỔ HỞ LẺ
allKitsData["DỤNG CỤ MỔ HỞ LẺ"] = [
  {
    "stt": 1,
    "name": "Banh da",
    "code": "",
    "quantity": 7
  },
  {
    "stt": 2,
    "name": "Banh miệng",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 3,
    "name": "Banh tự động",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "Bắt cóc",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "Ben net xương",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "Búa lớn",
    "code": "FE060R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "Búa nhỏ",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "Cán dao số 3",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "Cán dao số 4",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 10,
    "name": "Cán dao số 7",
    "code": "",
    "quantity": 5
  },
  {
    "stt": 11,
    "name": "Cây nọng hậu môn",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "Cây thông tiểu khó",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "CLAMP CONG",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 14,
    "name": "CLAMP CONG",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 15,
    "name": "CLAMP THẲNG",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 16,
    "name": "Cờ lê",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "Curet",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 18,
    "name": "Chén chum",
    "code": "",
    "quantity": 26
  },
  {
    "stt": 19,
    "name": "Dao bào da",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "Davier",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 21,
    "name": "Diver nhỏ",
    "code": "BT611R",
    "quantity": 3
  },
  {
    "stt": 22,
    "name": "Dụng cụ móc chỉ thép",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "Đục lòng máng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "Ercartor ven",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 25,
    "name": "Gu lớn",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "Gu nhỏ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "Giỏ gà",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 28,
    "name": "Kelly lớn",
    "code": "",
    "quantity": 12
  },
  {
    "stt": 29,
    "name": "Kéo cắt chỉ",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 30,
    "name": "Kéo mét",
    "code": "BC271R",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "Kẹp săng AO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "Kẹp tăm bông",
    "code": "",
    "quantity": 7
  },
  {
    "stt": 33,
    "name": "Kềm cắt chỉ thép",
    "code": "",
    "quantity": 2,
    "note": "HƯ 1"
  },
  {
    "stt": 34,
    "name": "Kềm cắt chỉ thép",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "Kềm cắt đinh",
    "code": "LX157R",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "Kềm cắt xương, móng",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 37,
    "name": "Kềm cộng lực cắt đinh",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 38,
    "name": "Kềm giữ xương thẳng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 39,
    "name": "Kềm kẹp kim",
    "code": "BM236R",
    "quantity": 1
  },
  {
    "stt": 40,
    "name": "Kềm khóa",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 41,
    "name": "Kềm may chỉ thép",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 42,
    "name": "Kềm rút đinh",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 43,
    "name": "Kềm xoắn chỉ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 44,
    "name": "Khoan tay",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 45,
    "name": "Maleap",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 46,
    "name": "Mỏ vịt",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 47,
    "name": "Nội soi dây thanh",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 48,
    "name": "Nội soi xoang bướm",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 49,
    "name": "Nhíp có mấu lớn",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 50,
    "name": "Nhíp có mấu nhỏ",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 51,
    "name": "Nhíp không mấu nhỏ",
    "code": "",
    "quantity": 5
  },
  {
    "stt": 52,
    "name": "Nhíp không mấu lớn",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 53,
    "name": "Nhíp mạch máu",
    "code": "",
    "quantity": 7
  },
  {
    "stt": 54,
    "name": "Ống hút bụng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 55,
    "name": "Ống hút dài",
    "code": "GF944R",
    "quantity": 1
  },
  {
    "stt": 56,
    "name": "Ống hút Tai mũi họng",
    "code": "",
    "quantity": 8
  },
  {
    "stt": 57,
    "name": "PARAPOP LỚN",
    "code": "Không mã",
    "quantity": 8
  },
  {
    "stt": 58,
    "name": "PARAPOP NHỎ",
    "code": "Không mã",
    "quantity": 4
  },
  {
    "stt": 59,
    "name": "Puzzi",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 60,
    "name": "Que thăm dò hậu môn",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 61,
    "name": "Randal gắp sỏi",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 62,
    "name": "Richecson nhỏ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 63,
    "name": "Richeson",
    "code": "BT472R",
    "quantity": 1
  },
  {
    "stt": 64,
    "name": "Ruzin",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 65,
    "name": "Ruzin lớn",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 66,
    "name": "Ruzin nhỏ",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 67,
    "name": "Tay đèn",
    "code": "",
    "quantity": 32
  },
  {
    "stt": 68,
    "name": "Tua vít xương",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 69,
    "name": "Thước đo tử cung",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 70,
    "name": "Thước đo tử cung",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 71,
    "name": "Van âm đạo",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 72,
    "name": "Van vệ sản",
    "code": "",
    "quantity": 4
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 241,
    "bold": true
  }
];
allKitsData["DỤNG CỤ MỔ HỞ LẺ"].footer = "ĐANG CHỜ DỮ LIỆU";
// Data for DỤNG CỤ NỘI SOI LẺ
allKitsData["DỤNG CỤ NỘI SOI LẺ"] = [
  {
    "stt": 1,
    "name": "Clip nội soi",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 2,
    "name": "Hemolock 10mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "Hemolock 5mm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "Puzzi",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 5,
    "name": "Kiềm kẹp Kim nội soi",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "Kim vê sản",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "Dây dẫn sáng",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "Optic nội soi 0° MGB",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "Optic nội soi 0° Karlstorz",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "Optic nội soi 45° Karlstorz",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "Optic nội soi 70° Karlstorz",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "Optic nội soi 30° Karlstorz",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "Optic nội soi 0° 5mm Karlstorz",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "Optic nội soi 30° MGB Karlstorz",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "Oftic nịu",
    "code": "",
    "quantity": 2,
    "note": "HƯ 1"
  },
  {
    "stt": 16,
    "name": "Bộ xay tử cung",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "Bơm rửa bàng quang thủy tinh",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "Dụng cụ nội soi bàng quang (Bộ Trocal)",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 19,
    "name": "Cây vén gan",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 20,
    "name": "Lưỡi dao nội soi",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "Troca 5 xoắn",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "Cây nạy sỏi",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 23,
    "name": "Bộ dụng cụ đốt hạch giao cảm",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "Bộ dụng cụ đốt tuyền liệt tuyến",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "Vỏ nội soi",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 26,
    "name": "Ống hút",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "Móc đốt nội soi",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 28,
    "name": "Tay cầm Biboler",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 29,
    "name": "Biboler nhi",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "Nội soi bàng quang mới",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "Kéo mesk nội soi nhi",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 32,
    "name": "Graper nội soi nhi",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 33,
    "name": "Ruột Bibolec nội soi nhi",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "Kéo Mesk nội soi",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 35,
    "name": "Bộ Bibolec",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "Bộ Robi",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 37,
    "name": "Que bơm từ cung",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 38,
    "name": "Dây Bibolec nội soi",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 39,
    "name": "Dây đốt nội soi",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 40,
    "name": "Dây bơm CO2",
    "code": "",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 64,
    "bold": true
  }
];
allKitsData["DỤNG CỤ NỘI SOI LẺ"].footer = "ĐÃ KIỂM 02/2026";
// Data for ĐẠI PHẪU
allKitsData["ĐẠI PHẪU"] = [
  {
    "stt": 1,
    "name": "FIXANG",
    "code": "BF433R",
    "quantity": 10
  },
  {
    "stt": 2,
    "name": "BANH BỤNG",
    "code": "BV608R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "VAN BỤNG + VAN SẢN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "PARAPOP",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "ỐNG HÚT",
    "code": "GF944R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "CÁN DAO SỐ 3",
    "code": "BB073R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "TĂM BÔNG",
    "code": "BF120R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "BABCOCK LỚN",
    "code": "EA052R",
    "quantity": 2
  },
  {
    "stt": 10,
    "name": "KOCHER THẲNG",
    "code": "BH648R",
    "quantity": 4
  },
  {
    "stt": 11,
    "name": "KELLY LỚN",
    "code": "BH449R",
    "quantity": 4
  },
  {
    "stt": 12,
    "name": "KELLY THẲNG",
    "code": "BH474R",
    "quantity": 4
  },
  {
    "stt": 13,
    "name": "KELLY THẲNG",
    "code": "BH210R",
    "quantity": 6
  },
  {
    "stt": 14,
    "name": "KELLY THẲNG",
    "code": "BH166R",
    "quantity": 6
  },
  {
    "stt": 15,
    "name": "KELLY CONG",
    "code": "BH135R",
    "quantity": 9
  },
  {
    "stt": 16,
    "name": "KELLY CONG",
    "code": "BH141R",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "ALISS DÀI",
    "code": "EA020R",
    "quantity": 4
  },
  {
    "stt": 18,
    "name": "ALISS NGẮN",
    "code": "EA016R",
    "quantity": 4,
    "note": "HƯ 3"
  },
  {
    "stt": 19,
    "name": "KỀM KẸP KIM LỚN",
    "code": "BM070R",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "KỀM KẸP KIM",
    "code": "BM236R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 21,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 22,
    "name": "NHÍP KHÔNG MẤU DÀI",
    "code": "BD031R",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "NHÍP KHÔNG MẤU NGẮN",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "NHÍP CÓ MẤU",
    "code": "RZ 130-110-145",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "DIVER LỚN",
    "code": "BV HD",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 2
  },
  {
    "stt": 27,
    "name": "RECHARSON",
    "code": "BT472R",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "KÉO MESK",
    "code": "SNOW",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 73,
    "bold": true
  }
];
allKitsData["ĐẠI PHẪU"].footer = "ĐÃ KIỂM";
// Data for HC Ố CỔ TAY
allKitsData["HC Ố CỔ TAY"] = [
  {
    "stt": 1,
    "name": "KÉO CẮT CHỈ",
    "code": "LAWTON",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 2,
    "name": "KÉO MESS CÁN VÀNG",
    "code": "BC271R",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 3,
    "name": "KÉO MESS NHỌN",
    "code": "BC157R",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 4,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 2,
    "note": ""
  },
  {
    "stt": 5,
    "name": "ALISS",
    "code": "AE016R",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 6,
    "name": "CÁN DAO SỐ 3",
    "code": "BB073",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 7,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 10,
    "note": ""
  },
  {
    "stt": 8,
    "name": "NHÍP VI PHẪU KO MẤU",
    "code": "",
    "quantity": 2,
    "note": ""
  },
  {
    "stt": 9,
    "name": "NHÍP VI PHẪU CÓ MẤU",
    "code": "",
    "quantity": 2,
    "note": ""
  },
  {
    "stt": 10,
    "name": "KÌỀM KẸP KIM",
    "code": "BM016R",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 11,
    "name": "FIX SÁNG",
    "code": "BF432R+B7013+BF437R",
    "quantity": 4,
    "note": ""
  },
  {
    "stt": 12,
    "name": "BĂNG DA NHỎ",
    "code": "BVHD",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 13,
    "name": "PARAPOP MÓC",
    "code": "",
    "quantity": 2,
    "note": "Hư 1"
  },
  {
    "stt": 14,
    "name": "QUẺ DẪN ĐƯỜNG",
    "code": "",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 15,
    "name": "PARAPOP NHỌ",
    "code": "BT020",
    "quantity": 2,
    "note": ""
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 32,
    "bold": true
  }
];
allKitsData["HC Ố CỔ TAY"].footer = "ĐÃ KIỂM";
// Data for KHOAN PIN
allKitsData["KHOAN PIN"] = [
  {
    "stt": 1,
    "name": "TAY KHOAN",
    "code": "PRO7200B",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "ĐẦU KHOAN",
    "code": "PRO2041<br>PRO2030",
    "quantity": 2
  },
  {
    "stt": 3,
    "name": "ĐẦU KHÓA KHOAN",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 4,
    "name": "MŨI KHOAN 3.2MM",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "HỘP ĐỰNG PIN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 8,
    "bold": true
  }
];
allKitsData["KHOAN PIN"].footer = "ĐÃ KIỂM";
// Data for LÕM NGỰC
allKitsData["LÕM NGỰC"] = [
  {
    "stt": 1,
    "name": "PARAPOP NHỎ",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 2,
    "name": "KELLY",
    "code": "",
    "quantity": 8
  },
  {
    "stt": 3,
    "name": "ALLISS",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 4,
    "name": "KOCHER THẲNG",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 5,
    "name": "KÈM KẸP KIM",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 6,
    "name": "XÀ MÂU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NHÍP CÓ MẤU - NHÍP KHÔNG MẤU",
    "code": "",
    "quantity": 2,
    "note": "1-1 ADSON"
  },
  {
    "stt": 8,
    "name": "KÉO",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "FIXXANG",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 10,
    "name": "CÁN DAO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "PARAPOP LỚN",
    "code": "",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 29,
    "bold": true
  }
];
allKitsData["LÕM NGỰC"].footer = "ĐÃ KIỂM";
// Data for NIỆU 1
allKitsData["NIỆU 1"] = [
  {
    "stt": 1,
    "name": "VAN SẢN",
    "code": "EL 638R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "VAN VỆ",
    "code": "BV606R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "DIVER LỚN",
    "code": "BT614R",
    "quantity": 2
  },
  {
    "stt": 4,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "MALEAP",
    "code": "BT758R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "RICHARSON LỚN",
    "code": "BT472R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "RICHARSON NHỎ",
    "code": "BT471R",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "KÌM CẮT SƯỜN",
    "code": "FB878R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "BANH TỰ ĐỘNG",
    "code": "BV615R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "GU GẶM XƯƠNG",
    "code": "FO530R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KẸP CUỐNG THẬN",
    "code": "BT057R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "MÓC DA NHỎ",
    "code": "BT 244R",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "ECARTO",
    "code": "BT184R",
    "quantity": 2
  },
  {
    "stt": 15,
    "name": "BẮT CÓC",
    "code": "BB936+BB033R",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "THÔNG TIỂU SẮT LỚN",
    "code": "EF218C",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "THÔNG TIỂU SẮT LỚN",
    "code": "EF220C",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "THÔNG TIỂU SẮT TRUNG",
    "code": "EF212C",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "THÔNG TIỂU SẮT TRUNG",
    "code": "EF214C",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "THÔNG TIỂU SẮT NHỎ",
    "code": "EF210C",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "THÔNG TIỂU SẮT NHỎ",
    "code": "EF208C",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "FIXANG THẲNG",
    "code": "BF426R",
    "quantity": 9
  },
  {
    "stt": 23,
    "name": "KELLY CONG NHỎ",
    "code": "BH165R",
    "quantity": 10
  },
  {
    "stt": 24,
    "name": "XÀ MÂU",
    "code": "BJ 057R",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "ALISS",
    "code": "EA106R",
    "quantity": 2
  },
  {
    "stt": 26,
    "name": "RANDAN CONG",
    "code": "EF052R",
    "quantity": 2
  },
  {
    "stt": 27,
    "name": "RANDAN THẲNG",
    "code": "EF051R",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD051R",
    "quantity": 1
  },
  {
    "stt": 29,
    "name": "NHÍP KHÔNG MẤU NHỎ",
    "code": "BD027R",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "CLAMP THẲNG",
    "code": "EA202R",
    "quantity": 2
  },
  {
    "stt": 32,
    "name": "CLAMP CONG",
    "code": "EA203R",
    "quantity": 2
  },
  {
    "stt": 33,
    "name": "CLAMP CONG",
    "code": "FB465R",
    "quantity": 2
  },
  {
    "stt": 34,
    "name": "ỐNG HÚT",
    "code": "GF944",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "KỀM KẸP KIM",
    "code": "BM275R",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "KÉO CẮT CHỈ",
    "code": "05-0114",
    "quantity": 1
  },
  {
    "stt": 37,
    "name": "KÉO MESK",
    "code": "BC607R",
    "quantity": 1
  },
  {
    "stt": 38,
    "name": "PATUYN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 66,
    "bold": true
  }
];
allKitsData["NIỆU 1"].footer = "ĐÃ KIỂM";
// Data for NIỆU 2
allKitsData["NIỆU 2"] = [
  {
    "stt": 1,
    "name": "VAN SẢN",
    "code": "EL638R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "VAN VỆ",
    "code": "BV609R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "DIVER LỚN",
    "code": "BT614R",
    "quantity": 2
  },
  {
    "stt": 4,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "MALEAP",
    "code": "BT758R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "RICHARSON LỚN",
    "code": "BT472R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "RICHARSON NHỎ",
    "code": "BT471R",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "KÌM CẮT SƯỜN",
    "code": "FB878R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "BANH TỰ ĐỘNG",
    "code": "BV615R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "GU GẶM XƯƠNG",
    "code": "FO530R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KẸP CUỐNG THẬN",
    "code": "BJ 581R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "MÓC DA NHỎ",
    "code": "BT244R",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "ECARTER VENE",
    "code": "BT184R",
    "quantity": 2
  },
  {
    "stt": 15,
    "name": "PARAPOP LỚN",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "THÔNG TIỂU SẮT LỚN",
    "code": "EF218C",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "THÔNG TIỂU SẮT LỚN",
    "code": "EF212C",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "THÔNG TIỂU SẮT TRUNG",
    "code": "EF214C",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "THÔNG TIỂU SẮT TRUNG",
    "code": "E208C",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "THÔNG TIỂU SẮT NHỎ",
    "code": "EF210C",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "THÔNG TIỂU SẮT NHỎ",
    "code": "EF220C",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "FIXANG THẲNG",
    "code": "BF426R",
    "quantity": 10
  },
  {
    "stt": 23,
    "name": "KELLY CONG NHỎ",
    "code": "BH165R",
    "quantity": 10
  },
  {
    "stt": 24,
    "name": "KELLY CONG NHỎ",
    "code": "BH467R",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "ALISS",
    "code": "EA014R + EA016R",
    "quantity": 2,
    "note": "HƯ CẢ 2"
  },
  {
    "stt": 26,
    "name": "RANGDAN CONG",
    "code": "EF053R",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "RANGDAN THẲNG",
    "code": "EF051R",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BVHD",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 29,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD032R",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "NHÍP CÓ MẤU",
    "code": "BD537R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 31,
    "name": "CLAMP THẲNG",
    "code": "EA202R",
    "quantity": 2
  },
  {
    "stt": 32,
    "name": "CLAMP CONG",
    "code": "EA211R + EA203R",
    "quantity": 4
  },
  {
    "stt": 33,
    "name": "CLAMP CONG ( BỎ QUA NIỆU 3)",
    "code": "FB465R",
    "quantity": 1,
    "note": "BỎ QUA NIỆU 3"
  },
  {
    "stt": 34,
    "name": "ỐNG HÚT",
    "code": "GF 944R",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "KỀM KẸP KIM",
    "code": "BM275R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 36,
    "name": "KÈM KẸP KIM",
    "code": "BM236R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 37,
    "name": "KÉO CẮT CHỈ",
    "code": "BVHD",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 38,
    "name": "KÉO MESK",
    "code": "GERMANY",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 39,
    "name": "KÉO MESK CẮN VÀNG",
    "code": "BC606",
    "quantity": 1
  },
  {
    "stt": 40,
    "name": "PATUYN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 41,
    "name": "BẮT CÓC",
    "code": "EA 032R",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 71,
    "bold": true
  }
];
allKitsData["NIỆU 2"].footer = "ĐÃ KIỂM";
// Data for NIỆU 3
allKitsData["NIỆU 3"] = [
  {
    "stt": 1,
    "name": "KELLY CONG TRÒN",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 2,
    "name": "KELLY CONG",
    "code": "",
    "quantity": 20
  },
  {
    "stt": 3,
    "name": "ALISS LỚN",
    "code": "BVHD",
    "quantity": 2
  },
  {
    "stt": 4,
    "name": "ALISS TRUNG",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 5,
    "name": "FIXANG",
    "code": "",
    "quantity": 10
  },
  {
    "stt": 6,
    "name": "KÈM KẸP KIM NHỎ",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 7,
    "name": "KOCHER THẲNG DÀI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "KOCHER THẲNG NGẮN",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "XÀ MÂU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "KẸP TAM GIÁC DÀI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KẸP TAM GIÁC NGẮN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "BABCOCK DÀI",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "BABCOCK NGẮN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "KÈM CẮT SƯỜN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "DIVER CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "DIVER 90 ĐỘ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "KẸP TĂM BÔNG",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 18,
    "name": "RECHARSON",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 19,
    "name": "HEALLEY",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 20,
    "name": "THƯỚC ĐO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "CÂY NAO",
    "code": "BVHD",
    "quantity": 2
  },
  {
    "stt": 22,
    "name": "KẸP CUỐNG THẬN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "CLAMP CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "RANDAL CONG 90 ĐỘ",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 25,
    "name": "RANDAL LỚ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "CLAMP RUỘT",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 27,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "KÈM GẤP SOI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 77,
    "bold": true
  }
];
allKitsData["NIỆU 3"].footer = "ĐÃ KIỂM";
// Data for NS SẢN
allKitsData["NS SẢN"] = [
  {
    "stt": 1,
    "name": "VỎ NGOÀI",
    "code": "LOTX064, LOTW583, LOTX171",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "TAY CẦM CÓ KHÓA",
    "code": "33122",
    "quantity": 4
  },
  {
    "stt": 3,
    "name": "TAY CẦM KHÔNG KHÓA",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "TROCA 10MM TRƠN",
    "code": "LOTYT20",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "TROCA 10MM XOẮN",
    "code": "LOT2T01",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "NÒNG NHỌN 10MM TRƠN",
    "code": "LOTYT132",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NÒNG NHỌN 10MM XOẮN",
    "code": "LOTMA, LOT2T01",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "TROCA 5MM XOẮN",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 9,
    "name": "NÒNG NHỌN 5MM XOẮN",
    "code": "LOT2T01",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "KÉO MESK",
    "code": "LOTXT26",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "KÉO CẮT CHỈ",
    "code": "LOTTV02",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "ALISS",
    "code": "LOTX003",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "BẮT CÓC",
    "code": "LOTMA31 02R",
    "quantity": 1,
    "note": "1 GÃY"
  },
  {
    "stt": 14,
    "name": "GRAPER",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KELLY",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "MÓC ĐỐT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "ỐNG HÚT",
    "code": "LOTST02",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "QUE ĐẨY CHỈ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 31,
    "bold": true
  }
];
allKitsData["NS SẢN"].footer = "ĐÃ KIỂM";
// Data for NS TAI MŨI HỌNG
allKitsData["NS TAI MŨI HỌNG"] = [
  {
    "stt": 1,
    "name": "PATUYN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "QUE THĂM DÒ CONG",
    "code": "629825",
    "quantity": 2
  },
  {
    "stt": 3,
    "name": "QUE THĂM DÒ MÓC",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "DAO LƯỠI CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "DAO LƯỠI THẲNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "ĐỤC LÒNG MÁNG",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "BÚA",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "NHÍP KHỦY",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "NHÍP CÓ MẤU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "BANH MŨI",
    "code": "",
    "quantity": 4
  },
  {
    "stt": 12,
    "name": "FIXXANG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "KÉO THẲNG",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 14,
    "name": "KÉO CONG",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 15,
    "name": "KELLY CONG",
    "code": "SU2723",
    "quantity": 1,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 16,
    "name": "KỀM KẸP KIM",
    "code": "BM237R",
    "quantity": 1,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 17,
    "name": "CURET 2 ĐẦU",
    "code": "479100",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "ĐÈ LƯỠI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "BẺ CUỐN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "HÚT CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "PATUYN HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "LICK",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "LÒ XO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "LICK GẤP",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 29,
    "bold": true
  }
];
allKitsData["NS TAI MŨI HỌNG"].footer = "ĐÃ KIỂM";
// Data for NS TỔNG QUÁT 1
allKitsData["NS TỔNG QUÁT 1"] = [
  {
    "stt": 1,
    "name": "TAY CẦM CÓ KHÓA",
    "code": "",
    "quantity": 2,
    "note": "1 GÃY"
  },
  {
    "stt": 2,
    "name": "TAY CẦM KHÔNG KHÓA",
    "code": "",
    "quantity": 4,
    "note": "1 HƯ"
  },
  {
    "stt": 3,
    "name": "VỎ LẮP DỤNG CỤ",
    "code": "",
    "quantity": 8
  },
  {
    "stt": 4,
    "name": "LAM KẸP RUỘT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "BẮT CÓC",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "KELLY",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "KELLY NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "TROCA 10MM",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 10,
    "name": "NẮP TROCA 10MM",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "TROCA 5MM",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 12,
    "name": "NẮP TROCA 5MM",
    "code": "",
    "quantity": 3
  },
  {
    "stt": 13,
    "name": "ỐNG GIẢM",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "NÒNG TROCA 10MM",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "NÒNG TROCA 5MM",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 17,
    "name": "MÓC ĐỐT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "CÂY ĐẨY CHỈ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 38,
    "bold": true
  }
];
allKitsData["NS TỔNG QUÁT 1"].footer = "ĐÃ KIỂM";
// Data for NS TỔNG QUÁT 2
allKitsData["NS TỔNG QUÁT 2"] = [
  {
    "stt": 1,
    "name": "Dây dẫn sáng",
    "code": "495NCS",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 2,
    "name": "Nòng trong troca(5mm)",
    "code": "30160P",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 3,
    "name": "Nòng trong troca(10mm)",
    "code": "30103P",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 4,
    "name": "Ống thông không van(5mm)",
    "code": "30160H2",
    "quantity": 3,
    "note": "KARL-STORZ"
  },
  {
    "stt": 5,
    "name": "Ống thông không van(10mm)",
    "code": "30103H2",
    "quantity": 2,
    "note": "KARL-STORZ"
  },
  {
    "stt": 6,
    "name": "Van đa năng(10mm)",
    "code": "30103M1",
    "quantity": 2,
    "note": "KARL-STORZ"
  },
  {
    "stt": 7,
    "name": "Van đa năng(5mm)",
    "code": "30160M1",
    "quantity": 3,
    "note": "KARL-STORZ"
  },
  {
    "stt": 8,
    "name": "Dụng cụ giảm",
    "code": "30141DB",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 9,
    "name": "Tay cầm nhựa có khóa",
    "code": "33122",
    "quantity": 3,
    "note": "KARL-STORZ"
  },
  {
    "stt": 10,
    "name": "Tay cầm nhựa không khóa",
    "code": "33121",
    "quantity": 3,
    "note": "KARL-STORZ"
  },
  {
    "stt": 11,
    "name": "Vỏ ngoài",
    "code": "33300",
    "quantity": 6,
    "note": "KARL-STORZ"
  },
  {
    "stt": 12,
    "name": "Ruột kẹp KELLY",
    "code": "33310ML",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 13,
    "name": "Ruột kẹp klamp kẹp ruột",
    "code": "33310C",
    "quantity": 2,
    "note": "KARL-STORZ"
  },
  {
    "stt": 14,
    "name": "Ruột kẹp RAPPER",
    "code": "33310UL",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 15,
    "name": "Ruột kẹp phẫu tích BABCOCK",
    "code": "33310A",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 16,
    "name": "Ruột kéo METZENBAUN",
    "code": "34310MS",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 17,
    "name": "Ruột kéo cắt chỉ",
    "code": "34310EH",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 18,
    "name": "Móc đốt",
    "code": "26775UF",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 19,
    "name": "Tay cầm BIPOLAR",
    "code": "26296HM",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 20,
    "name": "Ống vỏ ngoài BIPOLAR",
    "code": "26276A",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 21,
    "name": "Vỏ trong BIPOLAR",
    "code": "26276B",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 22,
    "name": "Ruột kẹp BIPOLAR",
    "code": "26176HW",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 23,
    "name": "Kim mang kim KOH phải",
    "code": "26173KC",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 24,
    "name": "Dụng cụ chắn gan",
    "code": "30623FP",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 25,
    "name": "Ống hút",
    "code": "26173BN",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 26,
    "name": "Hộp đựng dụng cụ",
    "code": "27717D",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 27,
    "name": "Que đẩy chỉ",
    "code": "26596D",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": 28,
    "name": "Kim mang kim KOH trái",
    "code": "26596D",
    "quantity": 1,
    "note": "KARL-STORZ"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 44,
    "bold": true
  }
];
allKitsData["NS TỔNG QUÁT 2"].footer = "ĐÃ KIỂM 01/2026";
// Data for SỌ NÃO
allKitsData["SỌ NÃO"] = [
  {
    "stt": 1,
    "name": "KERICSON",
    "code": "3MM FK902",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "KERICSON",
    "code": "4MM FK903",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KERICSON",
    "code": "5MM FK904",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "CURET LỚN",
    "code": "FK632",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "CURET TRUNG",
    "code": "FK631",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CURET NHỎ",
    "code": "FK630",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "MALEAP NHỎ",
    "code": "BT750",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "MAI XƯƠNG 2 ĐẦU LỚN",
    "code": "FF202",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "MAI XƯƠNG 2 ĐẦU NHỎ",
    "code": "FF201",
    "quantity": 2
  },
  {
    "stt": 10,
    "name": "KELLY CONG",
    "code": "BH135",
    "quantity": 20
  },
  {
    "stt": 11,
    "name": "MŨI KHOAN TRÒN",
    "code": "FF038R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "MŨI KHOAN NHỌN",
    "code": "FF035R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "NHÍP KHÔNG MẤU LỚN",
    "code": "BD197R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "NHÍP KHÔNG MẤU TRUNG",
    "code": "BD256R",
    "quantity": 2
  },
  {
    "stt": 15,
    "name": "NHÍP KHÔNG MẤU NHỎ",
    "code": "BD220R",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "NHÍP CÓ MẤU LỚN",
    "code": "BD563R",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "TAY KHOAN",
    "code": "FF052",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "THÂN KHOAN",
    "code": "FF053",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "DỤC THẲNG",
    "code": "FL564",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "KOCHER THẲNG",
    "code": "BH648R",
    "quantity": 6
  },
  {
    "stt": 23,
    "name": "FIXANG",
    "code": "BF436R",
    "quantity": 4
  },
  {
    "stt": 24,
    "name": "ĐÀY CƯA",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 25,
    "name": "ĐÀY ĐỘ",
    "code": "FF130",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "PATUYN",
    "code": "OL635",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "ĐẤC KÉO CƯA",
    "code": "FH480R",
    "quantity": 2
  },
  {
    "stt": 28,
    "name": "ĐẤC MÓC THẲNG",
    "code": "FD376R",
    "quantity": 2
  },
  {
    "stt": 29,
    "name": "ỐNG HÚT LỚN",
    "code": "GF953R",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "ỐNG HÚT VÀNG",
    "code": "FF124R",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "ỐNG HÚT TRUNG",
    "code": "GF373R",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "ỐNG HÚT NHỎ",
    "code": "GF351R",
    "quantity": 1
  },
  {
    "stt": 33,
    "name": "KÉO MESK CONG",
    "code": "BC606R",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "KÉO MESK TRUNG",
    "code": "BC605R",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "KÉO MESK NHỎ",
    "code": "BC156R",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "KÉO CẮT CHỈ",
    "code": "BC548R",
    "quantity": 1
  },
  {
    "stt": 37,
    "name": "BANH DA CONG",
    "code": "BV271R",
    "quantity": 1
  },
  {
    "stt": 38,
    "name": "BANH DA THẲNG",
    "code": "BV205R",
    "quantity": 1
  },
  {
    "stt": 39,
    "name": "KẸP TĂM BÔNG",
    "code": "ER122R",
    "quantity": 1
  },
  {
    "stt": 40,
    "name": "CỌ THẲNG",
    "code": "ER071R",
    "quantity": 1
  },
  {
    "stt": 41,
    "name": "KÈM KẸP KIM",
    "code": "BM016R",
    "quantity": 1
  },
  {
    "stt": 42,
    "name": "KÈM KẸP KIM",
    "code": "BM247R",
    "quantity": 1
  },
  {
    "stt": 43,
    "name": "CÂY SỦI",
    "code": "FK341R",
    "quantity": 1
  },
  {
    "stt": 44,
    "name": "CÂY SỦI",
    "code": "FK309R",
    "quantity": 1
  },
  {
    "stt": 45,
    "name": "MÓC DA",
    "code": "OL612R",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 82,
    "bold": true
  }
];
allKitsData["SỌ NÃO"].footer = "ĐÃ KIỂM";
// Data for SOI TREO TMH
allKitsData["SOI TREO TMH"] = [
  {
    "stt": 1,
    "name": "DỤNG CỤ CỐ ĐỊNH TREO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "DỤNG CỤ SOI DÂY THANH",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "ĐỆ LƯỠI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "FIXANG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 2,
    "note": "1 NHỎ,1 LỚN"
  },
  {
    "stt": 6,
    "name": "KÉO LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "KÉO NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "KÉO CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "DỤNG CỤ GẮP TRÁI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "DỤNG CỤ GẮP PHẢI",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "DỤNG CỤ GẮP THẲNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "DỤNG CỤ GẮP CONG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "HỘP ĐỰNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 14,
    "bold": true
  }
];
allKitsData["SOI TREO TMH"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 1
allKitsData["THẦN KINH 1"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R, BH141R, BH125R, HB0602 (HEBU)",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R, BD029R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "ALISS",
    "code": "5.EA016R, 1.HB4302",
    "quantity": 6
  },
  {
    "stt": 6,
    "name": "KỀM KẸP KIM",
    "code": "BM237R",
    "quantity": 1,
    "note": "LAWTON"
  },
  {
    "stt": 7,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "FIX XĂNG",
    "code": "BF431R, BF437R",
    "quantity": 6
  },
  {
    "stt": 9,
    "name": "KÉO MESK",
    "code": "ROLAN",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 10,
    "name": "KÉO CẮT CHỈ",
    "code": "GERMANY",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 11,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 7",
    "code": "KHÔNG MÃ",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 44,
    "bold": true
  }
];
allKitsData["THẦN KINH 1"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 2
allKitsData["THẦN KINH 2"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "KELLY TRUNG",
    "code": "BH141R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KELLY TRUNG",
    "code": "HB0602 (HEBU)",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "HB0302",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 7,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD030R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "ALISS",
    "code": "4.HB4302, 2.EA016R (HEBU)",
    "quantity": 6,
    "note": "2.EA016R  (HƯ)"
  },
  {
    "stt": 9,
    "name": "KỀM KẸP KIM",
    "code": "LAWTON",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 4
  },
  {
    "stt": 13,
    "name": "KÉO MESK",
    "code": "BC271R",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 14,
    "name": "KÉO CẮT CHỈ",
    "code": "BV HỒNG ĐỨC",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 17,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 46,
    "bold": true
  }
];
allKitsData["THẦN KINH 2"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 3
allKitsData["THẦN KINH 3"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 12
  },
  {
    "stt": 3,
    "name": "KELLY TRUNG",
    "code": "BH141R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KELLY TRUNG",
    "code": "HB0602 (HEBU)",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "HB0302 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R",
    "quantity": 1,
    "note": "MÒN"
  },
  {
    "stt": 8,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 6
  },
  {
    "stt": 9,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 4
  },
  {
    "stt": 13,
    "name": "KÉO MESK",
    "code": "BC265R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 14,
    "name": "KÉO CẮT CHỈ",
    "code": "LAWTON",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 15,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "CÁN DAO",
    "code": "BB073R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 42,
    "bold": true
  }
];
allKitsData["THẦN KINH 3"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 4
allKitsData["THẦN KINH 4"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ 111R",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 12
  },
  {
    "stt": 3,
    "name": "KELLY TRUNG",
    "code": "HB0602 (HEBU)",
    "quantity": 2
  },
  {
    "stt": 4,
    "name": "NHÍP CÓ MẤU",
    "code": "HB0302 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225 (HEBU)",
    "quantity": 2
  },
  {
    "stt": 6,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1,
    "note": "HƯ, MÒN"
  },
  {
    "stt": 7,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 4,
    "note": "HƯ 4"
  },
  {
    "stt": 8,
    "name": "ALISS",
    "code": "HB4302 (HEBU)",
    "quantity": 2
  },
  {
    "stt": 9,
    "name": "KỀM KẸP KIM",
    "code": "BM 066R",
    "quantity": 1,
    "note": "HƯ, MÒN"
  },
  {
    "stt": 10,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 6
  },
  {
    "stt": 12,
    "name": "KÉO MESK",
    "code": "BC271R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 1,
    "note": "CÙN,MẺ"
  },
  {
    "stt": 14,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 15,
    "name": "PARABOP LỚN",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "CÁN DAO",
    "code": "SỐ 7",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 44,
    "bold": true
  }
];
allKitsData["THẦN KINH 4"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 5
allKitsData["THẦN KINH 5"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH141R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 14
  },
  {
    "stt": 4,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1,
    "note": "HƯ,MÒN"
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 6
  },
  {
    "stt": 8,
    "name": "KỀM KẸP KIM",
    "code": "HB2202 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 4
  },
  {
    "stt": 11,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "KÉO MESK",
    "code": "CÁN VÀNG",
    "quantity": 1,
    "note": "CÙN,MÒN"
  },
  {
    "stt": 13,
    "name": "KÉO CẮT CHỈ",
    "code": "LAWTON",
    "quantity": 1,
    "note": "CÙN, MÒN"
  },
  {
    "stt": 14,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 15,
    "name": "CÁN DAO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 44,
    "bold": true
  }
];
allKitsData["THẦN KINH 5"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 6
allKitsData["THẦN KINH 6"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ 111R",
    "code": "",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "",
    "quantity": 14,
    "note": "GÃY 1"
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "ALISS",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 6,
    "name": "KỀM KẸP KIM",
    "code": "",
    "quantity": 1,
    "note": "MÒN, HƯ"
  },
  {
    "stt": 7,
    "name": "XÀ MÂU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "FIX XĂNG",
    "code": "",
    "quantity": 6
  },
  {
    "stt": 9,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 10,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 11,
    "name": "PARABOP NHỎ",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARABOP LỚN",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "CÁN DAO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 43,
    "bold": true
  }
];
allKitsData["THẦN KINH 6"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 7
allKitsData["THẦN KINH 7"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ 111R",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 12
  },
  {
    "stt": 3,
    "name": "KELLY TRUNG",
    "code": "BH141R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KELLY TRUNG",
    "code": "HB0602 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "BD519R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 6,
    "note": "HƯ 3"
  },
  {
    "stt": 9,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 3
  },
  {
    "stt": 12,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "FIX XĂNG",
    "code": "KHÔNG MÃ",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "KÉO MESK",
    "code": "BC606R",
    "quantity": 1,
    "note": "CÙN,HƯ"
  },
  {
    "stt": 15,
    "name": "KÉO CẮT CHỈ",
    "code": "05-121",
    "quantity": 1,
    "note": "CÙN, MẺ"
  },
  {
    "stt": 16,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 17,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 18,
    "name": "CÁN DAO",
    "code": "SỐ 3",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 43,
    "bold": true
  }
];
allKitsData["THẦN KINH 7"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 8
allKitsData["THẦN KINH 8"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ 111R",
    "code": "BH111R",
    "quantity": 4,
    "note": "HEBU"
  },
  {
    "stt": 2,
    "name": "KELLY NHỎ 111R",
    "code": "HB05015",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 3,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 11
  },
  {
    "stt": 4,
    "name": "KELLY TRUNG",
    "code": "BH141R",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 5,
    "name": "KELLY TRUNG",
    "code": "HB0602",
    "quantity": 2,
    "note": "HEBU"
  },
  {
    "stt": 6,
    "name": "NHÍP CÓ MẤU",
    "code": "BD519R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 4,
    "note": "HƯ 1"
  },
  {
    "stt": 10,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 2,
    "note": "HEBU"
  },
  {
    "stt": 11,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 4
  },
  {
    "stt": 14,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "FIX XĂNG",
    "code": "PAKISTAN",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "KÉO MESK",
    "code": "HB2258",
    "quantity": 1,
    "note": "CÙN, MÒN,MẺ"
  },
  {
    "stt": 17,
    "name": "KÉO CẮT CHỈ",
    "code": "BC346R",
    "quantity": 1,
    "note": "CÙN, MÒN"
  },
  {
    "stt": 18,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "PARABOP NHỎ",
    "code": "KHÔNG SỐ",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 21,
    "name": "CÁN DAO SỐ 7",
    "code": "BB077R",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "NHÍP VI PHẪU",
    "code": "PAKISTAN",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 44,
    "bold": true
  }
];
allKitsData["THẦN KINH 8"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 9
allKitsData["THẦN KINH 9"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R, HB0515",
    "quantity": 5,
    "note": "HEBU"
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R, BH141R, BH135R",
    "quantity": 15,
    "note": "3 LỆCH HÀM"
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R, BD047R",
    "quantity": 2,
    "note": "HƯ 1, MÒN"
  },
  {
    "stt": 5,
    "name": "ALISS",
    "code": "EA016R, HB4302",
    "quantity": 6,
    "note": "HƯ 2, HỞ HÀM"
  },
  {
    "stt": 6,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "FIX XĂNG",
    "code": "BF431R, BF437R",
    "quantity": 6
  },
  {
    "stt": 9,
    "name": "KÉO MESK",
    "code": "B0271R",
    "quantity": 1,
    "note": "CÙN,, MẺ"
  },
  {
    "stt": 10,
    "name": "KÉO CẮT CHỈ",
    "code": "ROLAN 04113016",
    "quantity": 1,
    "note": "CÙN, MẺ"
  },
  {
    "stt": 11,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 7",
    "code": "KHÔNG MÃ",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 44,
    "bold": true
  }
];
allKitsData["THẦN KINH 9"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 10
allKitsData["THẦN KINH 10"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ 111R",
    "code": "BH111R",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 14
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 5
  },
  {
    "stt": 7,
    "name": "ALISS",
    "code": "HB4302 (HEBU)",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "KỀM KẸP KIM",
    "code": "HB2202 (HEBU)",
    "quantity": 1,
    "note": "HƯ thay tạm pakistan"
  },
  {
    "stt": 9,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "FIX XĂNG",
    "code": "BF431R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 3
  },
  {
    "stt": 12,
    "name": "FIX XĂNG",
    "code": "BF432R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "FIX XĂNG",
    "code": "LAWTON",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "KÉO MESK",
    "code": "05-0620",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 15,
    "name": "KÉO CẮT CHỈ",
    "code": "HB1706 (HEBU)",
    "quantity": 1,
    "note": "CÙN, MẺ"
  },
  {
    "stt": 16,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 17,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 18,
    "name": "CÁN DAO",
    "code": "BD077R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 43,
    "bold": true
  }
];
allKitsData["THẦN KINH 10"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 11
allKitsData["THẦN KINH 11"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "HB0515",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "HB0602",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "HB302",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 6
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1,
    "note": "HƯ"
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "HB0684-20",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "FIX XĂNG",
    "code": "HB0772",
    "quantity": 6
  },
  {
    "stt": 10,
    "name": "KÉO MESK",
    "code": "HB2285",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 11,
    "name": "KÉO CẮT CHỈ",
    "code": "HB1706",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 12,
    "name": "PARABOP NHỎ",
    "code": "HB3160",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "PARABOP LỚN",
    "code": "HB3161",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "CÁN DAO",
    "code": "HB1097",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KÉO MAYO",
    "code": "HB1798",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 45,
    "bold": true
  }
];
allKitsData["THẦN KINH 11"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 12
allKitsData["THẦN KINH 12"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "HB51525",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "HB0602",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "KHÔNG MÃ",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223",
    "quantity": 2,
    "note": "1"
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 6
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "HB0684-20",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "FIX XĂNG",
    "code": "HB0772",
    "quantity": 6
  },
  {
    "stt": 10,
    "name": "KÉO MESK",
    "code": "HB2285",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KÉO CẮT CHỈ",
    "code": "HB1706",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "PARABOP NHỎ",
    "code": "HB3160, 1.KHÔNG TÊN",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "PARABOP TRUNG",
    "code": "HB3161, 1.KHÔNG TÊN",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "CÁN DAO",
    "code": "HB1097",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KÉO MAYO",
    "code": "HB1798",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 46,
    "bold": true
  }
];
allKitsData["THẦN KINH 12"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 13
allKitsData["THẦN KINH 13"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "HB51525",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "HB0602",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "HB302",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 6
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "HB0684-20",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "FIX XĂNG",
    "code": "HB0772",
    "quantity": 6,
    "note": "HƯ 1"
  },
  {
    "stt": 10,
    "name": "KÉO MESK",
    "code": "HB2285",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 11,
    "name": "KÉO CẮT CHỈ",
    "code": "HB1706",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 12,
    "name": "PARABOP NHỎ",
    "code": "HB3160",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "PARABOP LỚN",
    "code": "HB3161",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "CÁN DAO",
    "code": "HB1097",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KÉO MAYO",
    "code": "HB1798",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 45,
    "bold": true
  }
];
allKitsData["THẦN KINH 13"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 14
allKitsData["THẦN KINH 14"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "HB0515",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "HB0602",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "HB302",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 6,
    "note": "HƯ 1"
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "HB0684-20",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "FIX XĂNG",
    "code": "HB0772",
    "quantity": 6
  },
  {
    "stt": 10,
    "name": "KÉO MESK",
    "code": "HB2285",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 11,
    "name": "KÉO CẮT CHỈ (GÃY)",
    "code": "HB1706",
    "quantity": 1,
    "note": "GÃY 1"
  },
  {
    "stt": 12,
    "name": "PARABOP NHỎ",
    "code": "HB3160",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "PARABOP LỚN",
    "code": "HB3161",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "CÁN DAO",
    "code": "HB1097",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KÉO MAYO (GÃY)",
    "code": "HB1798",
    "quantity": 1,
    "note": "GÃY"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 45,
    "bold": true
  }
];
allKitsData["THẦN KINH 14"].footer = "ĐÃ KIỂM";
// Data for THẦN KINH 15
allKitsData["THẦN KINH 15"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "HB0515",
    "quantity": 5
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "HB0602",
    "quantity": 15
  },
  {
    "stt": 3,
    "name": "NHÍP CÓ MẤU",
    "code": "HB302",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0225",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 6
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "HB0684-20",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "FIX XĂNG",
    "code": "HB0772",
    "quantity": 6
  },
  {
    "stt": 10,
    "name": "KÉO MESK",
    "code": "HB2285",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KÉO CẮT CHỈ",
    "code": "HB1706",
    "quantity": 1,
    "note": ""
  },
  {
    "stt": 12,
    "name": "PARABOP NHỎ",
    "code": "HB3160",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "PARABOP LỚN",
    "code": "HB3161",
    "quantity": 2
  },
  {
    "stt": 14,
    "name": "CÁN DAO",
    "code": "HB1097",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KÉO MAYO",
    "code": "HB1798",
    "quantity": 1,
    "note": "HƯ, LỆCH"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 45,
    "bold": true
  }
];
allKitsData["THẦN KINH 15"].footer = "ĐÃ KIỂM";
// Data for TIỂU PHẪU 1
allKitsData["TIỂU PHẪU 1"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 2
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 4
  },
  {
    "stt": 3,
    "name": "KELLY THẲNG",
    "code": "BH134R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "HB0302",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "FIX XĂNG",
    "code": "3 BF437<br>1",
    "quantity": 4
  },
  {
    "stt": 8,
    "name": "KÉO MESK NHỌN",
    "code": "BC157",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "KÉO MESK DÀI",
    "code": "LAWTON<br>050620",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "KÉO CẮT CHỈ",
    "code": "BC326R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 3",
    "code": "5530",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KỀM KẸP KIM",
    "code": "1545023",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 24,
    "bold": true
  }
];
allKitsData["TIỂU PHẪU 1"].footer = "ĐÃ KIỂM";
// Data for TIỂU PHẪU 2
allKitsData["TIỂU PHẪU 2"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "HB0515",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 3
  },
  {
    "stt": 3,
    "name": "KELLY THẲNG",
    "code": "BH134R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 7,
    "name": "FIX XĂNG",
    "code": "BF437R",
    "quantity": 4,
    "note": "HƯ 1"
  },
  {
    "stt": 8,
    "name": "KÉO MESK NHỌN",
    "code": "BC161R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 9,
    "name": "KÉO MESK DÀI",
    "code": "BC217R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 10,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 11,
    "name": "PARABOP NHỎ",
    "code": "BT020R<br>1 Cái không mã",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 3",
    "code": "không mã",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 16,
    "name": "BỒN HẠT ĐẬU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 23,
    "bold": true
  }
];
allKitsData["TIỂU PHẪU 2"].footer = "ĐÃ KIỂM";
// Data for TIỂU PHẪU 3
allKitsData["TIỂU PHẪU 3"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "BH111R",
    "quantity": 2,
    "note": "HEBU-0515"
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 4
  },
  {
    "stt": 3,
    "name": "KELLY THẲNG",
    "code": "BH134R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R<br>BD069R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "EA016R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "FIX XĂNG",
    "code": "2.437R<br>2.431R",
    "quantity": 4
  },
  {
    "stt": 8,
    "name": "KÉO MESK DÀI",
    "code": "BC271",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "KÉO CẮT CHỈ",
    "code": "Không mã",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "CÁN DAO SỐ 3",
    "code": "không mã",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "(ĐÃ KIỂM 01/2026)",
    "quantity": 24,
    "bold": true
  }
];
allKitsData["TIỂU PHẪU 3"].footer = "ĐÃ KIỂM 01/2026";
// Data for TIỂU PHẪU 4
allKitsData["TIỂU PHẪU 4"] = [
  {
    "stt": 1,
    "name": "KELLY NHỎ",
    "code": "4101",
    "quantity": 2
  },
  {
    "stt": 2,
    "name": "KELLY TRUNG",
    "code": "BH135R",
    "quantity": 4
  },
  {
    "stt": 3,
    "name": "KELLY THẲNG",
    "code": "BH134R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP KHÔNG MẤU",
    "code": "HB0223",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 5,
    "name": "NHÍP CÓ MẤU",
    "code": "HB0302",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 6,
    "name": "ALISS",
    "code": "HB4302",
    "quantity": 1,
    "note": "HEBU"
  },
  {
    "stt": 7,
    "name": "FIX XĂNG",
    "code": "2.BF437R, 2.BF431R",
    "quantity": 4
  },
  {
    "stt": 8,
    "name": "KÉO MESK NHỌN",
    "code": "BC157R",
    "quantity": 0,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 9,
    "name": "KÉO MESK DÀI",
    "code": "BC271R",
    "quantity": 1,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 10,
    "name": "KÉO CẮT CHỈ",
    "code": "50114",
    "quantity": 1,
    "note": "MÒN,HƯ"
  },
  {
    "stt": 11,
    "name": "PARABOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARABOP TRUNG",
    "code": "BT021R",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "CÁN DAO SỐ 3",
    "code": "BB073R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "KỀM KẸP KIM",
    "code": "80100",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 23,
    "bold": true
  }
];
allKitsData["TIỂU PHẪU 4"].footer = "ĐÃ KIỂM";
// Data for TRUNG PHẪU 1
allKitsData["TRUNG PHẪU 1"] = [
  {
    "stt": 1,
    "name": "KELLY CONG",
    "code": "BH135R",
    "quantity": 11,
    "note": "GÃY 3"
  },
  {
    "stt": 2,
    "name": "KELLY CONG",
    "code": "BH141R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KỀM KẸP KIM",
    "code": "HB2202",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "KỀM KẸP KIM DÀI",
    "code": "BM240",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "KÉO CẮT CHỈ",
    "code": "HB1706",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "KÉO MESK",
    "code": "BC271",
    "quantity": 1,
    "note": "MÒN,HƯ, CÙN"
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "",
    "quantity": 1,
    "note": "MÒN,HƯ, CÙN"
  },
  {
    "stt": 9,
    "name": "ALISS NGẮN",
    "code": "HB4302",
    "quantity": 4
  },
  {
    "stt": 10,
    "name": "ALISS DÀI",
    "code": "EA020",
    "quantity": 3
  },
  {
    "stt": 11,
    "name": "FIXANG",
    "code": "BF437",
    "quantity": 5
  },
  {
    "stt": 12,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R",
    "quantity": 1,
    "note": "MÒN,HƯ, CÙN"
  },
  {
    "stt": 13,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD029R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "NHÍP CÓ MẤU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "CÁN DAO SỐ 3",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "CÁN DAO SỐ 4",
    "code": "BB084R",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "PARAPOP NHỎ",
    "code": "BT020",
    "quantity": 2
  },
  {
    "stt": 19,
    "name": "KẸP TAM GIÁC LỚN",
    "code": "EA042R",
    "quantity": 2
  },
  {
    "stt": 20,
    "name": "KẸP TAM GIÁC NHỎ",
    "code": "EA037R",
    "quantity": 2
  },
  {
    "stt": 21,
    "name": "BABCOCK",
    "code": "(FB032,EA032,<br>FB936)",
    "quantity": 3
  },
  {
    "stt": 22,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "KẸP TĂM BÔNG",
    "code": "",
    "quantity": 1,
    "note": "MÒN,HƯ, CÙN"
  },
  {
    "stt": 24,
    "name": "DIVER LỚN",
    "code": "BT614R",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "RECHARSON",
    "code": "BT472R",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 51,
    "bold": true
  }
];
allKitsData["TRUNG PHẪU 1"].footer = "ĐÃ KIỂM";
// Data for TRUNG PHẪU 2
allKitsData["TRUNG PHẪU 2"] = [
  {
    "stt": 1,
    "name": "DIVER LỚN",
    "code": "BT614R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "DIVER NHỎ",
    "code": "BT611R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "RICHARSON LỚN",
    "code": "BT472R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "RICHARSON NHỎ",
    "code": "BT471R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "ỐNG HÚT",
    "code": "GF944R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "KỀM KẸP KIM",
    "code": "BM240R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1,
    "note": "Mẻ đầu"
  },
  {
    "stt": 8,
    "name": "KỀM KẸP KIM",
    "code": "LAWTON",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "BABCOCK LỚN",
    "code": "FB934R",
    "quantity": 2
  },
  {
    "stt": 10,
    "name": "BABCOCK NHỎ",
    "code": "EA033R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "KẸP TAM GIÁC LỚN",
    "code": "EA042R",
    "quantity": 4
  },
  {
    "stt": 12,
    "name": "KẸP TAM GIÁC NHỎ",
    "code": "EA037R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "KELLY CONG NHỎ",
    "code": "EA315R",
    "quantity": 15,
    "note": "3 LỆCH ĐẦU"
  },
  {
    "stt": 14,
    "name": "ALISS NHỎ",
    "code": "HB4302",
    "quantity": 4,
    "note": "1 LỆCH ĐẦU"
  },
  {
    "stt": 15,
    "name": "ALISS LỚN",
    "code": "EA020R",
    "quantity": 3
  },
  {
    "stt": 16,
    "name": "FIXANG",
    "code": "BF433R",
    "quantity": 5
  },
  {
    "stt": 17,
    "name": "PARAPOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 18,
    "name": "CÁN DAO SỐ 3",
    "code": "BB073R",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "CÁN DAO SỐ 4",
    "code": "BVHD",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "XÀ MÂU",
    "code": "BJ057R",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "NHÍP CÓ MẤU",
    "code": "BD559R",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "NHÍP CÓ MẤU",
    "code": "BVHD",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD030R",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD031R",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "KÉO MESK",
    "code": "BC670R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 26,
    "name": "KÉO MAYO",
    "code": "",
    "quantity": 1,
    "note": "MÒN,HƯ, CÙN"
  },
  {
    "stt": 27,
    "name": "QUE THĂM DÒ",
    "code": "BN095",
    "quantity": 1,
    "note": "Ép lẻ"
  },
  {
    "stt": 28,
    "name": "KẸP TĂM BÔNG",
    "code": "BF122R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 57,
    "bold": true
  }
];
allKitsData["TRUNG PHẪU 2"].footer = "ĐÃ KIỂM";
// Data for TV CỔ
allKitsData["TV CỔ"] = [
  {
    "stt": 1,
    "name": "KELLY CONG",
    "code": "PMP",
    "quantity": 2
  },
  {
    "stt": 2,
    "name": "KERICSON 1MM",
    "code": "FK900",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KERICSON 2MM",
    "code": "FK901",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KERICSON 3MM",
    "code": "FK902",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "CÒ CONG",
    "code": "ROLAND",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CÒ THẲNG",
    "code": "ROLAND",
    "quantity": 1,
    "note": "ĐÃ THANH LÝ 1"
  },
  {
    "stt": 7,
    "name": "CÒ THẲNG ROLAND + FF533R",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "BANH DẪN KHOAN",
    "code": "FF907R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "TAY CẦM BANH CONG 134",
    "code": "BW010R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "TAY ĐINH",
    "code": "FF906R",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "ĐINH KHOAN",
    "code": "BW010R",
    "quantity": 4
  },
  {
    "stt": 12,
    "name": "MŨI KHOAN",
    "code": "FF908",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "BANH GẤP KHÚC",
    "code": "FF891",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "VÉN CƠ CỔ 30MM",
    "code": "BW151",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "VÉN CƠ CỔ 35MM",
    "code": "BW152",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "VÉN CƠ CỔ 40MM",
    "code": "BW153",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "VÉN CƠ CỔ 45MM",
    "code": "BW154",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "VÉN CƠ CỔ 50MM",
    "code": "BW155",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "QUE THĂM RỄ",
    "code": "BT088",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "VÉN RỄ",
    "code": "FF216",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "BANH DA CONG",
    "code": "BV067",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "PATUYN",
    "code": "OL165",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "CURET",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "CÁN DAO 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "CÁN DAO 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "NHÍP MẤU",
    "code": "BD557R",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD197R",
    "quantity": 2
  },
  {
    "stt": 28,
    "name": "FIXANG",
    "code": "BF433R/GERMANI",
    "quantity": 2
  },
  {
    "stt": 29,
    "name": "XÀ MÂU",
    "code": "BV HD",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "KỀM KẸP KIM",
    "code": "ROLAND",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "KỀM KẸP KIM NHỎ",
    "code": "ROLAND",
    "quantity": 1
  },
  {
    "stt": 33,
    "name": "KỀM TĂM BÔNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "PARAPOP NHỎ",
    "code": "BT020R",
    "quantity": 2
  },
  {
    "stt": 35,
    "name": "GU GẶM XƯƠNG",
    "code": "FO532R",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "CỐP LỚN",
    "code": "FK148R",
    "quantity": 1
  },
  {
    "stt": 37,
    "name": "THƯỚC ĐO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 46,
    "bold": true
  }
];
allKitsData["TV CỔ"].footer = "ĐÃ KIỂM";
// Data for TV LƯNG 1
allKitsData["TV LƯNG 1"] = [
  {
    "stt": 1,
    "name": "CỐP LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "GU GẶM XƯƠNG",
    "code": "ROLAND 15.112808",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KERICSON 3MM",
    "code": "45-1428",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KERICSON 2MM",
    "code": "FK901R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "KERICSON 5MM",
    "code": "FK904R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CURET",
    "code": "FK662R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "CURET",
    "code": "FK 675R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "CÒ THẲNG",
    "code": "FF533R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "CÒ NGỬA (GÃY)",
    "code": "FF543R",
    "quantity": 1,
    "note": "Gãy"
  },
  {
    "stt": 10,
    "name": "CÒ NGỬA",
    "code": "18-5729.03",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "CÒ THẲNG",
    "code": "18-563403",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "KỀM KẸP KIM",
    "code": "SU 16060",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "KỀM KẸP KIM",
    "code": "BM 236R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "ĐỤC THẲNG",
    "code": "153057,04",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "TAYLO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "FIXANG",
    "code": "BF432R",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "FIXANG",
    "code": "BF433R",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "KÉO CẮT CHỈ",
    "code": "BC547R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 19,
    "name": "KÉO MESK",
    "code": "BC607R",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 20,
    "name": "ỐNG HÚT",
    "code": "60,1014",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "ỐNG HÚT",
    "code": "60.1009-03",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "BANH DA",
    "code": "BV067R",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "NHÍP CÓ MẤU",
    "code": "ROLAND 0612016",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD 269R",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "NHÍP KHÔNG MẤU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "PATUYN NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "PATUYN LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 29,
    "name": "CÂY THĂM RỄ",
    "code": "BT 088R",
    "quantity": 1
  },
  {
    "stt": 30,
    "name": "VÉN MÀNG CỨNG",
    "code": "606.990.006",
    "quantity": 1
  },
  {
    "stt": 31,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "CÁN DAO SỐ 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 33,
    "name": "KELLY LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "KELLY NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "PARAPOP NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 36,
    "name": "PARAPOP LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 36,
    "bold": true
  }
];
allKitsData["TV LƯNG 1"].footer = "ĐÃ KIỂM";
// Data for TV LƯNG 2
allKitsData["TV LƯNG 2"] = [
  {
    "stt": 1,
    "name": "CỐP LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "GU GẶM XƯƠNG",
    "code": "F0532R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "TAYLO",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "KERICSON 2MM",
    "code": "FK901",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "KERICSON 3MM",
    "code": "451428",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CÒ THẲNG",
    "code": "18563403",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "CÒ THẲNG",
    "code": "530522",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "CÒ NGỬA",
    "code": "18572903",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "CÒ NGỬA",
    "code": "FF543R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "CURET ĐẦU LỚN",
    "code": "152170.20CE",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "CURET ĐẦU NHỎ",
    "code": "152171.24CE",
    "quantity": 1
  },
  {
    "stt": 12,
    "name": "QUE THĂM RỄ",
    "code": "PT080R",
    "quantity": 1
  },
  {
    "stt": 13,
    "name": "QUE VÉN RỄ",
    "code": "FF216R",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "ỐNG HÚT",
    "code": "GF933R",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "ỐNG HÚT CONG",
    "code": "ROLAND 601009",
    "quantity": 1
  },
  {
    "stt": 16,
    "name": "ỐNG HÚT THẲNG",
    "code": "15305701",
    "quantity": 1
  },
  {
    "stt": 17,
    "name": "ĐỤC THẲNG",
    "code": "150057",
    "quantity": 1
  },
  {
    "stt": 18,
    "name": "NHÍP MẤU",
    "code": "BD577R",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD195R",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "NHÍP KHÔNG MẤU",
    "code": "RJ290550240",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "CÁN DAO SỐ 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "PARAPOP LỚN",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "PARAPOP NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "PATUYN TRUNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "PATUY NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 27,
    "name": "KÉO CẮT CHỈ",
    "code": "4113016",
    "quantity": 1
  },
  {
    "stt": 28,
    "name": "KÉO MESK",
    "code": "BC271",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 29,
    "name": "KỀM KẸP KIM",
    "code": "125,45018",
    "quantity": 1,
    "note": "MÒN"
  },
  {
    "stt": 30,
    "name": "KỀM KẸP KIM",
    "code": "SU 16062",
    "quantity": 1,
    "note": "MÒN"
  },
  {
    "stt": 31,
    "name": "KỀM TĂM BÔNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 32,
    "name": "FIXANG",
    "code": "BF433R",
    "quantity": 2
  },
  {
    "stt": 33,
    "name": "KELLY CONG DÀI",
    "code": "MC1700",
    "quantity": 1
  },
  {
    "stt": 34,
    "name": "KELLY CONG NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 35,
    "name": "BANH DA",
    "code": "BV067R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 36,
    "bold": true
  }
];
allKitsData["TV LƯNG 2"].footer = "ĐÃ KIỂM";
// Data for VI PHẪU BS PHƯỚC
allKitsData["VI PHẪU BS PHƯỚC"] = [
  {
    "stt": 1,
    "name": "KẸP MẠCH MÁU",
    "code": "FB328R",
    "quantity": 4
  },
  {
    "stt": 2,
    "name": "KỀM KẸP KIM",
    "code": "BM036R",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KÉO MESK",
    "code": "lawton",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP VI PHẪU FC411R",
    "code": "FC411R",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "ỐNG HÚT FB153R",
    "code": "FB153R",
    "quantity": 1
  },
  {
    "stt": 6,
    "name": "CÂY NONG MẠCH MÁU FB165R",
    "code": "FB165R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "CÂY NONG MẠCH MÁU FB166R",
    "code": "FB166R",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "CÂY NONG MẠCH MÁU FB167R",
    "code": "FB167R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "NHÍP VI PHẪU FC412R",
    "code": "FC412R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "KỀM KẸP KIM VI PHẪU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "NHÍP KHỦY",
    "code": "",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 14,
    "bold": true
  }
];
allKitsData["VI PHẪU BS PHƯỚC"].footer = "ĐÃ KIỂM";
// Data for VI PHẪU CŨ (MỔ HỞ)
allKitsData["VI PHẪU CŨ (MỔ HỞ)"] = [
  {
    "stt": 1,
    "name": "KELLY CONG",
    "code": "",
    "quantity": 5,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 2,
    "name": "PARAPOP MÓC",
    "code": "",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 3,
    "name": "SODE CÁNH BƯỚM",
    "code": "",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 4,
    "name": "MÓC DA 4 RĂNG",
    "code": "",
    "quantity": 3,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 5,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 6,
    "name": "KỀM KẸP KIM",
    "code": "",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 7,
    "name": "FIXANG",
    "code": "",
    "quantity": 5,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 8,
    "name": "XÀ MÂU",
    "code": "",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 9,
    "name": "ỐNG HÚT SỐ 6",
    "code": "",
    "quantity": 2,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 10,
    "name": "CÁN DAO SỐ 3",
    "code": "",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 11,
    "name": "MÓC DA NHỌN 1 RĂNG",
    "code": "",
    "quantity": 3,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 12,
    "name": "NHÍP MẤU",
    "code": "proset",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": 13,
    "name": "LƯỠI CƯA DỌC",
    "code": "hall (5023-131)",
    "quantity": 1,
    "note": "Nguyên bộ rỉ sét"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 26,
    "bold": true
  }
];
allKitsData["VI PHẪU CŨ (MỔ HỞ)"].footer = "ĐÃ KIỂM";
// Data for VP CỘT SỐNG
allKitsData["VP CỘT SỐNG"] = [
  {
    "stt": 1,
    "name": "KÉO MESK",
    "code": "FD061R",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 0,
    "note": "Gãy, đã thanh lí"
  },
  {
    "stt": 3,
    "name": "KỀM KẸP KIM",
    "code": "FD096R",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP NHỌN",
    "code": "BD850R",
    "quantity": 2
  },
  {
    "stt": 5,
    "name": "NHÍP GẤP",
    "code": "FD202R",
    "quantity": 2
  },
  {
    "stt": 6,
    "name": "QUE NẠO CURET",
    "code": "FD866R",
    "quantity": 1
  },
  {
    "stt": 7,
    "name": "NHÍP GẤP",
    "code": "FD200R",
    "quantity": 2
  },
  {
    "stt": 8,
    "name": "QUE THĂM DÒ",
    "code": "BT088R",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "QUE THĂM DÒ",
    "code": "FF643R",
    "quantity": 1
  },
  {
    "stt": 10,
    "name": "NHÍP NHỌN",
    "code": "BD851R",
    "quantity": 1
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 12,
    "bold": true
  }
];
allKitsData["VP CỘT SỐNG"].footer = "ĐÃ KIỂM";
// Data for XƯƠNG CHI DƯỚI
allKitsData["XƯƠNG CHI DƯỚI"] = [
  {
    "stt": 1,
    "name": "CÁN DAO SỐ 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "CÁN DAO SỐ 7",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "NHÍP KHÔNG MẤU",
    "code": "BD030",
    "quantity": 1
  },
  {
    "stt": 4,
    "name": "NHÍP CÓ MẤU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 5,
    "name": "KELLY CONG",
    "code": "BH167",
    "quantity": 6,
    "note": "GÃY 1 (đã thanh lí), Hư 2"
  },
  {
    "stt": 6,
    "name": "FIXANG",
    "code": "BF432",
    "quantity": 6,
    "note": "GÃY 1 (đã thanh lí), Hư 3"
  },
  {
    "stt": 7,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 8,
    "name": "TĂM BÔNG",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "ALISS",
    "code": "AE026",
    "quantity": 4,
    "note": "HƯ 4"
  },
  {
    "stt": 10,
    "name": "PARAPOP MÓC",
    "code": "BT504",
    "quantity": 2
  },
  {
    "stt": 11,
    "name": "PARAPOP LỚN",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARAPOP 1 ĐẦU",
    "code": "RJ170",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "GU GẶM XƯƠNG",
    "code": "FO192",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "THƯỚC ĐO",
    "code": "AA846",
    "quantity": 1
  },
  {
    "stt": 15,
    "name": "GIÒ GÀ",
    "code": "FO192",
    "quantity": 2
  },
  {
    "stt": 16,
    "name": "ĐỤC LÒNG MÁNG",
    "code": "FL574",
    "quantity": 2,
    "note": "Mẻ 2"
  },
  {
    "stt": 17,
    "name": "ĐỤC THẲNG",
    "code": "FL524",
    "quantity": 2,
    "note": "Mẻ 2"
  },
  {
    "stt": 18,
    "name": "ĐỤC LÒNG MÁNG",
    "code": "FL134",
    "quantity": 1,
    "note": "Mẻ"
  },
  {
    "stt": 19,
    "name": "DÙI NHỌN",
    "code": "FR120",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "DÙI NHỌN XOẮN",
    "code": "FO435",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "CURET LỚN",
    "code": "280374",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "CURET NHỎ",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "DAVIE CONG",
    "code": "FO1706",
    "quantity": 1
  },
  {
    "stt": 24,
    "name": "THƯỚC ĐO",
    "code": "KH099",
    "quantity": 1
  },
  {
    "stt": 25,
    "name": "KỀM KẸP KIM",
    "code": "BM066R",
    "quantity": 1
  },
  {
    "stt": 26,
    "name": "KÉO CẮT CHỈ",
    "code": "5060",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 27,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 46,
    "bold": true
  }
];
allKitsData["XƯƠNG CHI DƯỚI"].footer = "ĐÃ KIỂM";
// Data for XƯƠNG CHI TRÊN
allKitsData["XƯƠNG CHI TRÊN"] = [
  {
    "stt": 1,
    "name": "CÁN DAO SỐ 4",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 2,
    "name": "CÁN DAO SỐ 3",
    "code": "BB073",
    "quantity": 1
  },
  {
    "stt": 3,
    "name": "KELLY CONG DÀI",
    "code": "BH 183",
    "quantity": 8,
    "note": "GÃY 1 đã gửi thanh lý"
  },
  {
    "stt": 4,
    "name": "ALISS",
    "code": "EA020",
    "quantity": 3
  },
  {
    "stt": 5,
    "name": "FIXANG",
    "code": "",
    "quantity": 5
  },
  {
    "stt": 6,
    "name": "KÉO CẮT CHỈ",
    "code": "",
    "quantity": 1,
    "note": "CÙN"
  },
  {
    "stt": 7,
    "name": "KÉO MESK",
    "code": "",
    "quantity": 1,
    "note": "Cùn"
  },
  {
    "stt": 8,
    "name": "KỀM KẸP KIM",
    "code": "BM249",
    "quantity": 1
  },
  {
    "stt": 9,
    "name": "KỀM KẸP KIM NGẮN",
    "code": "",
    "quantity": 1,
    "note": "HƯ 1 đã gửi thanh lý"
  },
  {
    "stt": 10,
    "name": "NHÍP CÓ MẤU",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 11,
    "name": "NHÍP KHÔNG MẤU",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 12,
    "name": "PARAPOP NHỎ",
    "code": "",
    "quantity": 2
  },
  {
    "stt": 13,
    "name": "ỐNG HÚT",
    "code": "",
    "quantity": 1
  },
  {
    "stt": 14,
    "name": "GIÒ GÀ",
    "code": "FO190R",
    "quantity": 2
  },
  {
    "stt": 15,
    "name": "ĐỤC LÒNG MÁNG NHỎ",
    "code": "FL136R",
    "quantity": 1,
    "note": "Mẻ"
  },
  {
    "stt": 16,
    "name": "ĐỤC LÒNG MÁNG LỚN",
    "code": "FL574",
    "quantity": 2,
    "note": "Mẻ"
  },
  {
    "stt": 17,
    "name": "ĐỤC THẲNG",
    "code": "FL524",
    "quantity": 2,
    "note": "Mẻ 2"
  },
  {
    "stt": 18,
    "name": "CURET NHỎ",
    "code": "FK841R",
    "quantity": 1
  },
  {
    "stt": 19,
    "name": "CURET LỚN",
    "code": "FK842R",
    "quantity": 1
  },
  {
    "stt": 20,
    "name": "GU LỚN",
    "code": "F0530R",
    "quantity": 1
  },
  {
    "stt": 21,
    "name": "DÙI NHỌN",
    "code": "FR120R",
    "quantity": 1
  },
  {
    "stt": 22,
    "name": "THƯỚC ĐO",
    "code": "AA846R",
    "quantity": 1
  },
  {
    "stt": 23,
    "name": "KỀM GIỮ XƯƠNG THẲNG",
    "code": "",
    "quantity": 2
  },
  {
    "stt": "",
    "name": "TỔNG CỘNG",
    "code": "",
    "quantity": 42,
    "bold": true
  }
];
allKitsData["XƯƠNG CHI TRÊN"].footer = "ĐÃ KIỂM";