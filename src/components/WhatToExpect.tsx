import { MessageCircle, CalendarCheck, Sprout } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { seoConfig } from "@/lib/config";

const iconMap: Record<string, any> = { MessageCircle, CalendarCheck, Sprout };

const WhatToExpect = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-secondary text-center leading-[1.15] text-balance">
            Your First Session
          </h2>
          <p className="mt-4 text-center text-muted-foreground font-body max-w-lg mx-auto text-pretty">
            Not sure what to expect? Here's how we get started — it's simpler than you think.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {seoConfig.steps.map((step, i) => {
            const Icon = iconMap[step.icon] || MessageCircle;
            return (
              <RevealOnScroll key={step.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/40 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-secondary mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-foreground/65 leading-relaxed text-pretty">{step.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
