import { Heart, Users, Home, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import { seoConfig, slugify } from "@/lib/config";

const iconMap: Record<string, any> = { Heart, Users, Home, CircleDot };

const ServicesOverview = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-secondary text-center leading-[1.15] text-balance">
            How I Can Help
          </h2>
          <p className="mt-4 text-center text-muted-foreground font-body max-w-lg mx-auto text-pretty">
            Every person's journey is unique. I offer several paths to support yours.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoConfig.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Heart;
            return (
              <RevealOnScroll key={s.title} delay={i * 80}>
                <Link
                  to={`/services/${slugify(s.title)}`}
                  className="block bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-foreground/65 leading-relaxed text-pretty">{s.description}</p>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
