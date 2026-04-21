import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/audit/Dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AuditAI — Financial Anomaly Detection & Reporting" },
      {
        name: "description",
        content:
          "Enterprise-grade AI auditing dashboard for real-time financial anomaly detection, risk scoring, and reporting.",
      },
      { property: "og:title", content: "AuditAI — Financial Anomaly Detection" },
      {
        property: "og:description",
        content: "Real-time AI-powered fraud detection and audit reporting for finance teams.",
      },
    ],
  }),
  component: Dashboard,
});
