window.industryConfigs = window.industryConfigs || {};
window.industryConfigs["コインランドリー"] = {
  inputMode: "quantity",
  equipment: ["乾燥機", "洗濯乾燥機", "洗濯機", "業務用エアコン"],
  maxQty: {
    "乾燥機": 10,
    "洗濯乾燥機": 10,
    "洗濯機": 10,
    "業務用エアコン": 4
  },
  overLabel: {
    "乾燥機": "10台以上",
    "洗濯乾燥機": "10台以上",
    "洗濯機": "10台以上"
  },
  scores: {
    "乾燥機": [3, "間欠"],
    "洗濯乾燥機": [4, "間欠"],
    "洗濯機": [1.5, "間欠"],
    "業務用エアコン": [5, "半常時"]
  }
};
