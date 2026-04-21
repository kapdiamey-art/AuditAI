export type Lang = "en" | "hi" | "kok";

type Dict = {
  dashboard: string; transactions: string; anomalies: string; reports: string;
  insights: string; settings: string; search: string; totalTx: string;
  anomDetected: string; riskScore: string; finVolume: string; txVolume: string;
  anomFreq: string; spendCat: string; liveFeed: string; aiInsights: string;
  auditReport: string; download: string; review: string; ignore: string;
  escalate: string; confidence: string; askAi: string; risk: string;
};

export const translations: Record<Lang, Dict> = {
  en: {
    dashboard: "Dashboard",
    transactions: "Transactions",
    anomalies: "Anomalies",
    reports: "Reports",
    insights: "Insights",
    settings: "Settings",
    search: "Search transactions, IDs, vendors...",
    totalTx: "Total Transactions Today",
    anomDetected: "Anomalies Detected",
    riskScore: "Risk Score",
    finVolume: "Financial Volume",
    txVolume: "Transaction Volume (24h)",
    anomFreq: "Anomaly Frequency",
    spendCat: "Spending by Category",
    liveFeed: "Live Anomaly Feed",
    aiInsights: "AI Insights",
    auditReport: "Audit Report",
    download: "Download PDF",
    review: "Review",
    ignore: "Ignore",
    escalate: "Escalate",
    confidence: "Confidence",
    askAi: "Ask AuditAI...",
    risk: "Risk",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    transactions: "लेन-देन",
    anomalies: "विसंगतियाँ",
    reports: "रिपोर्ट",
    insights: "अंतर्दृष्टि",
    settings: "सेटिंग्स",
    search: "लेन-देन, आईडी, विक्रेता खोजें...",
    totalTx: "आज के कुल लेन-देन",
    anomDetected: "पाई गई विसंगतियाँ",
    riskScore: "जोखिम स्कोर",
    finVolume: "वित्तीय मात्रा",
    txVolume: "लेन-देन मात्रा (24घं)",
    anomFreq: "विसंगति आवृत्ति",
    spendCat: "श्रेणी अनुसार खर्च",
    liveFeed: "लाइव विसंगति फ़ीड",
    aiInsights: "एआई अंतर्दृष्टि",
    auditReport: "ऑडिट रिपोर्ट",
    download: "पीडीएफ डाउनलोड",
    review: "समीक्षा",
    ignore: "अनदेखा",
    escalate: "एस्केलेट",
    confidence: "विश्वास",
    askAi: "AuditAI से पूछें...",
    risk: "जोखिम",
  },
  kok: {
    dashboard: "डॅशबोर्ड",
    transactions: "व्यवहार",
    anomalies: "विसंगती",
    reports: "अहवाल",
    insights: "अंतर्दृश्टी",
    settings: "सेटिंग्स",
    search: "व्यवहार, आयडी, विक्रेते सोदात...",
    totalTx: "आजचे एकूण व्यवहार",
    anomDetected: "सोदून काडिल्ल्यो विसंगती",
    riskScore: "धोको स्कोर",
    finVolume: "अर्थीक प्रमाण",
    txVolume: "व्यवहार प्रमाण (24घं)",
    anomFreq: "विसंगती वारंवारता",
    spendCat: "वर्गांप्रमाण खर्च",
    liveFeed: "थेट विसंगती फीड",
    aiInsights: "एआय अंतर्दृश्टी",
    auditReport: "ऑडिट अहवाल",
    download: "पीडीएफ डाउनलोड",
    review: "तपासात",
    ignore: "सोडात",
    escalate: "वयर धाडात",
    confidence: "आत्मविस्वास",
    askAi: "AuditAI कडेन विचारात...",
    risk: "धोको",
  },
};

export type T = Dict;
