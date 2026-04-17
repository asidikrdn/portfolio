import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Github } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ahmad Sidik Rudini" },
      {
        name: "description",
        content:
          "Projects I've built — operational automation systems, LLM chatbots, data warehouses, monitoring dashboards, and backend development.",
      },
      { property: "og:title", content: "Portfolio — Ahmad Sidik Rudini" },
      {
        property: "og:description",
        content:
          "Real-world projects in backend engineering, n8n automation, and LLM integration.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Auto FAQ Chatbot + Auto-ticketing",
    category: "Automation · AI",
    desc: "LLM-powered chatbot that handles helpdesk FAQ routing and automatically creates support tickets when a question falls outside scope — significantly reducing manual workload.",
    stack: ["n8n", "LLM", "WhatsApp API", "Ticketing System"],
    github: null,
  },
  {
    title: "Ticket Generator via WhatsApp",
    category: "Automation",
    desc: "Lets the helpdesk team create support tickets directly from WhatsApp without switching to the ticketing system — cutting friction out of the incident response flow.",
    stack: ["n8n", "WhatsApp API", "Webhook"],
    github: null,
  },
  {
    title: "OCI Metrics & Backup Log Monitoring",
    category: "Automation · Integration",
    desc: "Automated pipeline that collects OCI monitoring metrics and backup logs, stores them in Lark Base, and distributes reports to each team's WhatsApp group and Lark chat channel — keeping every team informed without manual checks.",
    stack: ["n8n", "Oracle Cloud (OCI)", "Lark Base", "WhatsApp API", "Lark Chat"],
    github: null,
  },
  {
    title: "OCI Billing Monitoring Dashboard",
    category: "Automation · Integration",
    desc: "Automated billing monitor that pulls OCI cost data, persists it in Lark Base, and surfaces it through a dedicated Lark Dashboard — giving stakeholders clear visibility into cloud spend at a glance.",
    stack: ["n8n", "Oracle Cloud (OCI)", "Lark Base", "Lark Dashboard"],
    github: null,
  },
  {
    title: "Data Warehouse System",
    category: "Backend · Database",
    desc: "Data warehouse built to support the data engineering team's analytical needs — covering ingestion pipelines and centralized storage for strategic reporting.",
    stack: ["PostgreSQL", "Data Pipeline"],
    github: null,
  },
  {
    title: "Servant — Internal Backend App",
    category: "Backend",
    desc: "Backend development of the 'Servant' application supporting core business workflows for the Service Management division at PT Integrasi Logistik Cipta Solusi.",
    stack: ["Node.js", "PostgreSQL", "REST API", "Docker"],
    github: null,
  },
  {
    title: "Data Integration & Migration Automation",
    category: "Automation · n8n",
    desc: "n8n automation that handles cross-system data integration and migration — reducing manual errors and speeding up data synchronization across operational platforms.",
    stack: ["n8n", "PostgreSQL", "Webhook"],
    github: null,
  },
  {
    title: "Lark Project Management Automation",
    category: "Automation · n8n",
    desc: "End-to-end Lark workflow for the Digital Infra & Security division's project management flow — from receiving an RFI all the way through Pre-SPH issuance. Includes auto-generated BOQ documents, automated email notifications once a Pre-SPH is approved by manager and senior manager, and assessment team reminders before field visits and post-assessment if reports haven't been submitted.",
    stack: ["n8n", "Lark Base", "Lark Automation", "Document Generation"],
    github: null,
  },
];

function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="// portfolio"
        title="Selected projects."
        description="A look at what I've shipped — across backend systems, LLM-powered tools, and automated pipelines."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur transition-smooth hover:border-primary/30 hover:shadow-elegant"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-smooth group-hover:bg-primary/10" />
            <div className="relative flex flex-1 flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                {project.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {project.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-smooth hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground/50">
                    <Github className="h-3.5 w-3.5" />
                    Internal project
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
