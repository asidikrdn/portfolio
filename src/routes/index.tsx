import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Database, Workflow, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Sidik Rudini — Backend Developer & Automation Engineer" },
      {
        name: "description",
        content:
          "Ahmad Sidik Rudini — Backend Developer & Automation Engineer with 3+ years of experience. Specializing in n8n automation, LLM integration, backend development, and Oracle Cloud Infrastructure.",
      },
      {
        property: "og:title",
        content: "Ahmad Sidik Rudini — Backend Developer & Automation Engineer",
      },
      {
        property: "og:description",
        content:
          "Backend Developer & Automation Engineer specializing in n8n, LLM integration, PostgreSQL, Oracle, and Oracle Cloud Infrastructure.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-hero-gradient" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              Available for new projects
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Building the <span className="text-gradient">backend backbone</span> of modern
              products.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Backend Developer & Automation Engineer focused on{" "}
              <span className="text-foreground">backend engineering</span>,{" "}
              <span className="text-foreground">LLM integration</span>, and{" "}
              <span className="text-foreground">workflow automation</span> with n8n.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:opacity-90"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-smooth hover:border-primary/40"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 font-mono text-xs text-muted-foreground">
              <span>JavaScript</span>
              <span className="text-border">·</span>
              <span>Node.js</span>
              <span className="text-border">·</span>
              <span>PostgreSQL</span>
              <span className="text-border">·</span>
              <span>Oracle</span>
              <span className="text-border">·</span>
              <span>n8n</span>
              <span className="text-border">·</span>
              <span>LLM</span>
              <span className="text-border">·</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Database,
              title: "Backend Engineering",
              desc: "Server-side application development, tracing & debugging, and stable architecture design that holds up under real-world load.",
            },
            {
              icon: Bot,
              title: "AI Integration",
              desc: "LLM-powered features built into real products — FAQ chatbots, auto-ticketing systems, and intelligent workflow routing.",
            },
            {
              icon: Workflow,
              title: "n8n Automation",
              desc: "End-to-end workflows that connect your tools, trigger automated notifications, and run business processes around the clock.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-smooth hover:border-primary/30"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-smooth group-hover:bg-primary/10" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 text-center backdrop-blur sm:p-16">
          <div className="absolute inset-0 bg-hero-gradient opacity-60" />
          <div className="relative">
            <Sparkles className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Got a process worth automating?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Let's design a system that runs while you sleep.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:opacity-90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
