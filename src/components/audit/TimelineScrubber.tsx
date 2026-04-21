import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Clock } from "lucide-react";
import { volumeSeries } from "@/lib/mock-data";

export function TimelineScrubber() {
  const [hour, setHour] = useState(14);
  const max = Math.max(...volumeSeries.map((v) => v.anomalies));
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Anomaly Timeline · Last 24h</h3>
        </div>
        <div className="text-xs text-muted-foreground">
          Scrubbing to <span className="text-foreground font-mono">{String(hour).padStart(2, "0")}:00</span>
        </div>
      </div>
      <div className="relative h-16 mb-2">
        <div className="absolute inset-0 flex items-end gap-[3px]">
          {volumeSeries.map((v, i) => {
            const h = (v.anomalies / max) * 100;
            const active = i === hour;
            return (
              <div
                key={i}
                className="flex-1 rounded-sm transition-all"
                style={{
                  height: `${Math.max(8, h)}%`,
                  background: active
                    ? "var(--primary)"
                    : `color-mix(in oklab, var(--primary) ${30 + h * 0.4}%, var(--secondary))`,
                  opacity: active ? 1 : 0.7,
                }}
              />
            );
          })}
        </div>
      </div>
      <Slider value={[hour]} onValueChange={(v) => setHour(v[0])} min={0} max={23} step={1} />
    </div>
  );
}
