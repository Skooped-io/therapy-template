import { Button } from "@/components/ui/button";
import botanicalAccent from "@/assets/botanical-accent.png";
import RevealOnScroll from "@/components/RevealOnScroll";
import { seoConfig, getImage } from "@/lib/config";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, hsl(36 33% 97%) 0%, hsl(160 18% 92%) 50%, hsl(36 33% 97%) 100%)",
        }}
      />

      {/* Botanical accents */}
      <img
        src={getImage(null, 'hero_accent_top', botanicalAccent)}
        alt=""
        className="absolute top-12 right-0 w-48 opacity-20 pointer-events-none select-none"
        aria-hidden="true"
      />
      <img
        src={getImage(null, 'hero_accent_bottom', botanicalAccent)}
        alt=""
        className="absolute bottom-0 left-0 w-40 opacity-15 pointer-events-none select-none rotate-180"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 text-center max-w-3xl">
        <RevealOnScroll>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-secondary leading-[1.1] tracking-tight text-balance">
            {seoConfig.seo.home.h1}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 font-body leading-relaxed max-w-xl mx-auto text-pretty">
            {seoConfig.tagline}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <div className="mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book a Consultation</a>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;
