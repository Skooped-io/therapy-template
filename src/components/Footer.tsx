const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-xl font-semibold text-secondary">Sarah Mitchell, LPC</p>
            <p className="mt-2 font-body text-sm text-foreground/60 leading-relaxed">
              Compassionate therapy for individuals,
              couples, and families in Portland, OR.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Contact
            </p>
            <div className="font-body text-sm text-foreground/60 space-y-1">
              <p>(555) 123-4567</p>
              <p>sarah@sarahmitchelltherapy.com</p>
              <p>123 Healing Way, Suite 204</p>
              <p>Portland, OR 97201</p>
            </div>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Hours
            </p>
            <div className="font-body text-sm text-foreground/60 space-y-1">
              <p>Monday – Thursday: 9am – 6pm</p>
              <p>Friday: 9am – 3pm</p>
              <p>Telehealth available</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center">
          <p className="font-body text-xs text-foreground/40">
            © {new Date().getFullYear()} Sarah Mitchell Therapy. All rights reserved. Everything shared is confidential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
