import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2 font-mono text-sm font-medium">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/20 transition-smooth group-hover:bg-primary/20">
            {"</>"}
          </span>
          <span className="text-foreground">asidikrdn</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "rounded-md px-3 py-1.5 text-sm text-foreground bg-secondary",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-glow transition-smooth hover:opacity-90 md:inline-flex"
        >
          Let's talk
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "rounded-md px-3 py-2 text-sm text-foreground bg-secondary",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
