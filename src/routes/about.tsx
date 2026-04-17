import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ahmad Sidik Rudini" },
      {
        name: "description",
        content:
          "About Ahmad Sidik Rudini — Backend Developer & Automation Engineer. Background, education, and skills in n8n, LLM integration, PostgreSQL, Docker, VPS setup, and Nginx / Cloudflare Tunnel.",
      },
      { property: "og:title", content: "About — Ahmad Sidik Rudini" },
      {
        property: "og:description",
        content:
          "Backend Developer & Automation Engineer — background, education, and skills of Ahmad Sidik Rudini.",
      },
    ],
  }),
  component: AboutPage,
});

const skillGroups = [
  {
    label: "Backend",
    items: ["Fullstack Web", "Node.js", "REST API", "Tracing & Debugging"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    label: "Automation & AI",
    items: [
      "n8n",
      "LangChain",
      "LLM Integration",
      "RAG",
      "Custom Nodes",
      "Chatbot",
      "Auto-ticketing",
      "Workflow Design",
    ],
  },
  {
    label: "DevOps",
    items: ["Docker", "VPS Setup", "Nginx", "Cloudflare Tunnel", "Git / GitHub"],
  },
  {
    label: "Tools",
    items: ["Lark"],
  },
];

const education = [
  {
    title: "S1 Informatika",
    org: "Universitas Siber Asia",
    period: "2023 — 2025",
    location: "Indonesia",
  },
  {
    title: "Fullstack Web Development Bootcamp",
    org: "Dumbways Indonesia",
    period: "2022 — 2023",
    location: "Indonesia",
  },
  {
    title: "S1 Teknik Informatika",
    org: "Universitas Ibn Khaldun Bogor",
    period: "2020 — 2023",
    location: "Bogor, Indonesia",
  },
  {
    title: "Teknik Komputer dan Jaringan",
    org: "SMK Negeri 3 Kota Bogor",
    period: "2014 — 2017",
    location: "Bogor, Indonesia",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="about me"
        title="Backend Developer & Automation Engineer."
        description="I like systems that quietly do their job — a solid backend, AI that delivers real value, and automations that eliminate repetitive work. Currently focused on backend development, LLM integration, and n8n workflow automation."
      />

      {/* Story */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card/40 p-8 backdrop-blur">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
              // background
            </h3>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                I'm a Backend Developer & Automation Engineer at PT Integrasi Logistik Cipta Solusi,
                where I build and maintain ship service applications running across{" "}
                <span className="text-foreground">Pelindo ports throughout Indonesia</span>.
              </p>
              <p>
                On the automation side, I design end-to-end workflows with{" "}
                <span className="text-foreground">n8n</span> — from automated notifications that
                push SLA numbers higher, to LLM-powered chatbots that handle FAQ routing and
                auto-ticket creation without human intervention.
              </p>
              <p>
                On the backend, I own server-side development, build data warehouses that give the
                data engineering team a reliable foundation to work from, and wire up automation
                workflows that keep systems observable and teams informed.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">focus</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">Backend · AI · Automation</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">experience</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">3+ years</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">location</p>
            <p className="mt-2 flex items-center gap-2 text-lg font-medium text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-20">
        <SectionHeader eyebrow="// skills" title="Tools I work with daily." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-smooth hover:border-primary/30"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <SectionHeader eyebrow="// education" title="Education." />
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.title}</h3>
                  <p className="text-sm text-muted-foreground">{edu.org}</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 font-mono text-xs text-muted-foreground sm:items-end">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
