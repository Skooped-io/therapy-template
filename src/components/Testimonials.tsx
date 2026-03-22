import RevealOnScroll from "@/components/RevealOnScroll";
import { seoConfig } from "@/lib/config";

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-secondary text-center leading-[1.15] text-balance">
            Words from Clients
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {seoConfig.testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 90}>
              <blockquote className="bg-card rounded-lg p-8 shadow-sm border border-border/50 h-full flex flex-col justify-between">
                <p className="font-body text-foreground/70 leading-relaxed text-pretty italic">
                  "{t.text}"
                </p>
                <cite className="mt-6 block font-body text-xs text-muted-foreground not-italic tracking-wide">
                  {t.author}
                </cite>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
