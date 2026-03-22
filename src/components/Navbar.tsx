import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { seoConfig } from "@/lib/config";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-heading text-2xl font-semibold text-secondary tracking-tight">
          {seoConfig.ownerName}
          <span className="block text-xs font-body font-normal text-muted-foreground tracking-wide uppercase">
            Licensed Therapist
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Book a Consultation</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-base text-foreground/70 hover:text-primary py-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="w-full" asChild>
            <a href="#contact">Book a Consultation</a>
          </Button>
          <a href={seoConfig.phoneHref} className="flex items-center gap-2 text-muted-foreground text-sm pt-2">
            <Phone size={14} /> {seoConfig.phone}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
