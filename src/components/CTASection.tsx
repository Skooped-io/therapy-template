import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { seoConfig } from "@/lib/config";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-section text-dark-section-foreground">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <RevealOnScroll>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.15] text-balance">
            Taking the first step is the hardest part
          </h2>
          <p className="mt-5 font-body text-dark-section-foreground/70 text-lg leading-relaxed text-pretty">
            I'm here when you're ready. Whether you have questions or want to schedule
            a free consultation, don't hesitate to reach out.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="warm" size="xl" asChild>
              <a href={`mailto:${seoConfig.email}`}>Book a Consultation</a>
            </Button>
            <a
              href={seoConfig.phoneHref}
              className="flex items-center gap-2 font-body text-dark-section-foreground/70 hover:text-dark-section-foreground transition-colors"
            >
              <Phone size={16} />
              {seoConfig.phone}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
