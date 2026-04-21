export type RiskLevel = "Low" | "Medium" | "High";

export type Anomaly = {
  id: string;
  amount: number;
  risk: RiskLevel;
  reason: string;
  timestamp: string;
  vendor: string;
  category: string;
  confidence: number;
  tags: string[];
};

const vendors = [
  "Acme Corp",
  "Globex Ltd",
  "Initech",
  "Umbrella Inc",
  "Wayne Enterprises",
  "Stark Industries",
  "Soylent Co",
  "Hooli",
];

const reasons = [
  "Unusual spike compared to weekly average",
  "Duplicate payment detected within 2h window",
  "Vendor not in approved list",
  "Off-hours weekend transaction",
  "Amount exceeds department policy threshold",
  "Sudden change in spending pattern",
];

const categories = ["Vendor Payment", "Payroll", "Travel", "Software", "Utilities"];
const tagsPool = ["duplicate-payment", "unusual-spike", "policy-violation", "off-hours", "new-vendor"];

function pick<T>(arr: T[], i: number) {
  return arr[i % arr.length];
}

export const anomalies: Anomaly[] = Array.from({ length: 14 }).map((_, i) => {
  const risk: RiskLevel = i % 5 === 0 ? "High" : i % 3 === 0 ? "Medium" : "Low";
  return {
    id: `TXN-${(98421 + i * 17).toString()}`,
    amount: Math.round((Math.random() * 48000 + 1200) * 100) / 100,
    risk,
    reason: pick(reasons, i),
    timestamp: `${Math.floor(Math.random() * 23)}:${String(Math.floor(Math.random() * 59)).padStart(2, "0")}`,
    vendor: pick(vendors, i),
    category: pick(categories, i),
    confidence: Math.round((0.7 + Math.random() * 0.29) * 100),
    tags: [pick(tagsPool, i), pick(tagsPool, i + 2)],
  };
});

export const volumeSeries = Array.from({ length: 24 }).map((_, i) => ({
  hour: `${i}:00`,
  volume: Math.round(40000 + Math.sin(i / 3) * 18000 + Math.random() * 12000),
  anomalies: Math.max(0, Math.round(2 + Math.sin(i / 2) * 2 + Math.random() * 3)),
}));

export const categorySpend = [
  { name: "Vendor", value: 482000 },
  { name: "Payroll", value: 312000 },
  { name: "Travel", value: 86000 },
  { name: "Software", value: 154000 },
  { name: "Utilities", value: 62000 },
];

export const heatmap = (() => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data: { day: string; hour: number; value: number }[] = [];
  days.forEach((d, di) => {
    for (let h = 0; h < 24; h++) {
      const weekend = di >= 5;
      const peak = h >= 9 && h <= 18;
      const base = (peak ? 4 : 1) + (weekend ? 2 : 0);
      data.push({ day: d, hour: h, value: Math.max(0, Math.round(base + Math.random() * 5 - 1)) });
    }
  });
  return data;
})();

export const insights = [
  {
    title: "Spike in vendor payments",
    body: "Vendor disbursements rose 38% in the last 24h, driven by 3 outliers above ₹40k.",
    tone: "warning" as const,
  },
  {
    title: "Unusual weekend activity",
    body: "12 transactions executed Sat–Sun outside business hours. Review recommended.",
    tone: "warning" as const,
  },
  {
    title: "Healthy compliance score",
    body: "98.2% of transactions matched policy rules this week — up 1.4 pts.",
    tone: "success" as const,
  },
];
