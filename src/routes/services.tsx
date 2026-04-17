import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { Server, Bot, Workflow, Database, Cloud, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ahmad Sidik Rudini" },
      {
        name: "description",
        content:
          "Services offered by Ahmad Sidik Rudini: backend development, n8n workflow automation, LLM integration, database design (PostgreSQL, MySQL), and DevOps — VPS setup, Docker, Nginx, Cloudflare Tunnel.",
      },
      { property: "og:title", content: "Services — Ahmad Sidik Rudini" },
      {
        property: "og:description",
        content:
          "Backend development, n8n automation, LLM integration, database design, and DevOps — VPS, Docker, Nginx, Cloudflare Tunnel.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Server,
    title: "Backend Development",
    desc: "Server-side application development, REST APIs, tracing & debugging, and system integration — built to stay stable under real operational load.",
    features: ["REST API", "Tracing & Debugging", "System Integration"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "LLM-powered features built into real workflows using n8n or LangChain — RAG pipelines, FAQ chatbots, auto-ticketing, and intelligent process routing without constant human oversight.",
    features: ["LangChain", "RAG", "Chatbot"],
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    desc: "End-to-end automation workflows that connect systems, trigger notifications, migrate data across platforms, and keep SLA targets on track.",
    features: ["Workflow Design", "Self-hosted n8n", "Custom Nodes"],
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Schema design and data management for PostgreSQL and MySQL — including data warehouse architecture to support analytical and reporting needs.",
    features: ["PostgreSQL / MySQL", "Data Warehouse", "Schema Design"],
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    desc: "Set up a VPS from scratch to production-ready — containerized with Docker, exposed securely via Nginx reverse proxy or Cloudflare Tunnel.",
    features: ["VPS Setup", "Docker", "Nginx / Cloudflare Tunnel"],
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="// services"
        title="What I can help you build."
        description="From a single API endpoint to a fully automated LLM pipeline — pick what you need or combine them."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {services.map(({ icon: Icon, title, desc, features }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur transition-smooth hover:border-primary/30"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-smooth group-hover:bg-primary/10" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-5 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 font-mono text-xs text-foreground"
                  >
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* CTA card */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-7 backdrop-blur">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="relative flex h-full flex-col">
            <h3 className="text-xl font-semibold text-foreground">
              Something more custom in mind?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell me about your project — I'll suggest the cleanest and most efficient path to
              production.
            </p>
            <Link
              to="/contact"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:opacity-90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
