import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-sm text-foreground">asidikrdn</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Backend · AI · Automation — building reliable systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/asidikrdn"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/asidikrdn"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Crafted with care.
        </p>
      </div>
    </footer>
  );
}
