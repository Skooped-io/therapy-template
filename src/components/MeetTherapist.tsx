import therapistImg from "@/assets/therapist-portrait.jpg";
import RevealOnScroll from "@/components/RevealOnScroll";

const specialties = [
  "Anxiety & Stress",
  "Depression",
  "Trauma & PTSD",
  "Grief & Loss",
  "Relationship Issues",
  "Life Transitions",
  "Self-Esteem",
  "Burnout",
];

const MeetTherapist = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="relative">
              <img
                src={therapistImg}
                alt="Sarah Mitchell, Licensed Professional Counselor"
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
                Sarah Mitchell, LPC
              </h2>
              <p className="mt-6 text-foreground/70 font-body leading-relaxed text-pretty">
                I believe everyone deserves a space where they feel truly heard. With over 12 years of
                experience, I specialize in helping individuals navigate anxiety, depression, and major
                life transitions with compassion and evidence-based approaches.
              </p>
              <p className="mt-4 text-foreground/70 font-body leading-relaxed text-pretty">
                My approach is warm, collaborative, and tailored to you. I draw from CBT, EMDR, and
                mindfulness-based techniques to help you build the tools you need — not just for today,
                but for the long run.
              </p>

              <div className="mt-8">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((s) => (
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
