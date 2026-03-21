import { Heart, Users, Home, CircleDot } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  {
    icon: Heart,
    title: "Individual Therapy",
    description: "A private space to explore your thoughts, process emotions, and build resilience at your own pace.",
  },
  {
    icon: Users,
    title: "Couples Counseling",
    description: "Strengthen your connection, improve communication, and navigate challenges together.",
  },
  {
    icon: Home,
    title: "Family Therapy",
    description: "Heal family dynamics, build understanding, and create a healthier home environment.",
  },
  {
    icon: CircleDot,
    title: "Group Sessions",
    description: "Find support and shared understanding in a small, guided group setting.",
  },
];

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
          {services.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 80}>
              <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">{s.title}</h3>
                <p className="font-body text-sm text-foreground/65 leading-relaxed text-pretty">{s.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
