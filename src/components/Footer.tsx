import { seoConfig } from "@/lib/config";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <p className="font-heading text-xl font-semibold text-secondary">
              {seoConfig.ownerName}, {seoConfig.credentials}
            </p>
            <p className="mt-2 font-body text-sm text-foreground/60 leading-relaxed">
              Compassionate therapy for individuals,
              couples, and families in {seoConfig.address.city}, {seoConfig.address.state}.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Contact
            </p>
            <div className="font-body text-sm text-foreground/60 space-y-1">
              <p>{seoConfig.phone}</p>
              <p>{seoConfig.email}</p>
              <p>{seoConfig.address.street}</p>
              <p>{seoConfig.address.city}, {seoConfig.address.state} {seoConfig.address.zip}</p>
            </div>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Hours
            </p>
            <div className="font-body text-sm text-foreground/60 space-y-1">
              <p>{seoConfig.hours.weekdays}</p>
              <p>{seoConfig.hours.friday}</p>
              <p>{seoConfig.hours.note}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center">
          <p className="font-body text-xs text-foreground/40">
            © {new Date().getFullYear()} {seoConfig.businessName}. All rights reserved. Everything shared is confidential.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
