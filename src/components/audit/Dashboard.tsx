import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { StatCards } from "./StatCards";
import { VolumeChart, CategoryChart, Heatmap } from "./Charts";
import { AnomalyFeed } from "./AnomalyFeed";
import { AnomalyDetail } from "./AnomalyDetail";
import { AIInsights, ReportPreview } from "./InsightsAndReport";
import { TimelineScrubber } from "./TimelineScrubber";
import { ChatAssistant } from "./ChatAssistant";
import { ThemeLangProvider } from "./ThemeLangContext";
import { anomalies } from "@/lib/mock-data";

export function Dashboard() {
  const [selected, setSelected] = useState(anomalies[0]);

  return (
    <ThemeLangProvider>
      <div className="min-h-screen w-full flex bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col">
          <Topbar />
          <main className="flex-1 p-4 lg:p-6 space-y-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Financial Anomaly Overview</h1>
              <p className="text-sm text-muted-foreground">
                Real-time monitoring across 12,438 transactions · Last sync just now
              </p>
            </div>

            <StatCards />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="xl:col-span-2">
                <VolumeChart />
              </div>
              <CategoryChart />
            </div>

            <Heatmap />

            <TimelineScrubber />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="xl:col-span-1 min-h-[560px]">
                <AnomalyFeed selectedId={selected.id} onSelect={setSelected} />
              </div>
              <div className="xl:col-span-2 space-y-4">
                <AnomalyDetail anomaly={selected} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <AIInsights />
                  <ReportPreview />
                </div>
              </div>
            </div>

            <footer className="pt-4 pb-2 text-xs text-muted-foreground text-center">
              AuditAI · Enterprise Financial Anomaly Detection · v4.2.1
            </footer>
          </main>
        </div>
        <ChatAssistant />
      </div>
    </ThemeLangProvider>
  );
}
