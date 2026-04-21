import { motion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, EyeOff, ArrowUpRight } from "lucide-react";
import type { Anomaly } from "@/lib/mock-data";
import { useThemeLang } from "./ThemeLangContext";

export function AnomalyDetail({ anomaly }: { anomaly: Anomaly }) {
  const { t } = useThemeLang();
  const compareData = Array.from({ length: 14 }).map((_, i) => ({
    day: `D${i + 1}`,
    normal: Math.round(8000 + Math.sin(i / 2) * 2200 + Math.random() * 1500),
    anomaly: i === 12 ? anomaly.amount : Math.round(8500 + Math.cos(i / 2) * 1800 + Math.random() * 1200),
  }));

  return (
    <motion.div
      key={anomaly.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">{anomaly.id}</span>
            <Badge className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/15">
              {anomaly.risk} risk
            </Badge>
          </div>
          <h3 className="mt-1 text-xl font-semibold">
            ₹ {anomaly.amount.toLocaleString()} · {anomaly.vendor}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{anomaly.reason}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">{t.confidence}</div>
          <div className="text-2xl font-semibold text-primary">{anomaly.confidence}%</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {anomaly.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
          {anomaly.category}
        </span>
      </div>

      <div className="mt-4 h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={compareData} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "var(--muted-foreground)", fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "var(--popover)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                fontSize: 12,
              }}
            />
            <Line type="monotone" dataKey="normal" stroke="var(--muted-foreground)" strokeWidth={2} dot={false} name="Normal" />
            <Line type="monotone" dataKey="anomaly" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 3 }} name="Observed" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" className="gap-1.5">
          <CheckCircle2 className="h-4 w-4" /> {t.review}
        </Button>
        <Button size="sm" variant="outline" className="gap-1.5">
          <EyeOff className="h-4 w-4" /> {t.ignore}
        </Button>
        <Button size="sm" variant="outline" className="gap-1.5 border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive">
          <ArrowUpRight className="h-4 w-4" /> {t.escalate}
        </Button>
      </div>
    </motion.div>
  );
}
