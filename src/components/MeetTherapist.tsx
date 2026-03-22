import therapistImg from "@/assets/therapist-portrait.jpg";
import RevealOnScroll from "@/components/RevealOnScroll";
import { seoConfig, getImage } from "@/lib/config";

const MeetTherapist = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="relative">
              <img
                src={getImage(null, 'about', therapistImg)}
                alt={`${seoConfig.ownerName}, ${seoConfig.credentials}`}
                className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg bg-accent/30 -z-10" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div>
              <p className="text-primary font-body text-sm font-semibold uppercase tracking-widest mb-2">
                Meet Your Therapist
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-secondary leading-[1.15]">
                {seoConfig.ownerName}, {seoConfig.credentials}
              </h2>
              <p className="mt-6 text-foreground/70 font-body leading-relaxed text-pretty">
                {seoConfig.about}
              </p>
              <p className="mt-4 text-foreground/70 font-body leading-relaxed text-pretty">
                {seoConfig.aboutExtended}
              </p>

              <div className="mt-8">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {seoConfig.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-primary/8 text-primary font-body text-sm px-3 py-1.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default MeetTherapist;
