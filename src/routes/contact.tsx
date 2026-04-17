import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MessageSquare, Github, Linkedin, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ahmad Sidik Rudini" },
      {
        name: "description",
        content:
          "Get in touch with Ahmad Sidik Rudini to discuss backend projects, n8n automation, or LLM integration. Usually replies within 24 hours.",
      },
      { property: "og:title", content: "Contact — Ahmad Sidik Rudini" },
      {
        property: "og:description",
        content:
          "Hubungi Ahmad Sidik Rudini untuk proyek backend, n8n automation, dan AI integration.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="// contact"
        title="Let's build something."
        description="Got a project in mind, a workflow to automate, or just want to talk about LLMs? Drop a message — I usually reply within 24 hours."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Info */}
        <div className="space-y-4 lg:col-span-2">
          <a
            href="mailto:sidikrudini16@gmail.com"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-smooth hover:border-primary/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">email</p>
              <p className="mt-1 text-sm font-medium text-foreground transition-smooth group-hover:text-primary">
                sidikrudini16@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                response time
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">Within 24 hours</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">also on</p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://github.com/asidikrdn"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/asidikrdn"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-primary">
                Name
              </label>
              <input
                required
                type="text"
                className="mt-2 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wider text-primary">
                Email
              </label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="font-mono text-xs uppercase tracking-wider text-primary">
              Subject
            </label>
            <input
              required
              type="text"
              className="mt-2 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder="What's this about?"
            />
          </div>

          <div className="mt-4">
            <label className="font-mono text-xs uppercase tracking-wider text-primary">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-smooth placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:opacity-90 disabled:opacity-70 sm:w-auto"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" />
                Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
