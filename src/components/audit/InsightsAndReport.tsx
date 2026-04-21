import { motion } from "framer-motion";
import { Sparkles, FileText, Download, ShieldAlert, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { insights } from "@/lib/mock-data";
import { useThemeLang } from "./ThemeLangContext";

export function AIInsights() {
  const { t } = useThemeLang();
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t.aiInsights}</h3>
          <p className="text-xs text-muted-foreground">Executive summary · auto-generated</p>
        </div>
      </div>
      <div className="space-y-2">
        {insights.map((ins, i) => (
          <motion.div
            key={ins.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-3 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 transition-colors"
          >
            <div className="flex items-center gap-2">
              {ins.tone === "warning" ? (
                <ShieldAlert className="h-3.5 w-3.5 text-warning" />
              ) : (
                <TrendingUp className="h-3.5 w-3.5 text-success" />
              )}
              <div className="text-sm font-medium">{ins.title}</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{ins.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ReportPreview() {
  const { t } = useThemeLang();
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-secondary grid place-items-center">
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">{t.auditReport}</h3>
            <p className="text-xs text-muted-foreground">Q4 · Week 16</p>
          </div>
        </div>
        <Button size="sm" className="gap-1.5">
          <Download className="h-4 w-4" /> {t.download}
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-background/40 p-4 font-mono text-[11px] space-y-2">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <span className="text-foreground font-semibold">AuditAI · Risk Report</span>
          <span className="text-muted-foreground">v 4.2.1</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-muted-foreground">
          <div>Total scanned: <span className="text-foreground">12,438</span></div>
          <div>Flagged: <span className="text-primary">47</span></div>
          <div>High risk: <span className="text-destructive">9</span></div>
          <div>Coverage: <span className="text-success">98.2%</span></div>
        </div>
        <div className="border-t border-border pt-2 text-muted-foreground leading-relaxed">
          Key risks: vendor payment spike (+38%), 3 duplicate disbursements,
          policy threshold breaches in Travel category. Recommended actions
          attached on page 4.
        </div>
        <div className="flex items-center gap-1 text-muted-foreground/70 pt-1">
          <Clock className="h-3 w-3" /> Generated 3 min ago
        </div>
      </div>
    </div>
  );
}
