import RevealOnScroll from "@/components/RevealOnScroll";

const ApproachSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <RevealOnScroll>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-secondary leading-[1.15] text-balance">
            My Approach to Therapy
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <p className="mt-6 text-foreground/70 font-body leading-relaxed text-pretty">
            Therapy isn't about fixing what's "broken" — it's about understanding yourself more deeply
            and learning new ways to navigate life's challenges. I use a combination of approaches
            tailored to what works best for you.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Cognitive Behavioral Therapy",
              desc: "Identifying and reshaping thought patterns that hold you back, building practical coping skills.",
            },
            {
              title: "EMDR",
              desc: "Processing trauma and difficult memories in a safe, structured way that helps your brain heal naturally.",
            },
            {
              title: "Mindfulness-Based",
              desc: "Building present-moment awareness and self-compassion to reduce stress and increase emotional resilience.",
            },
          ].map((item, i) => (
            <RevealOnScroll key={item.title} delay={120 + i * 80}>
              <div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/65 leading-relaxed text-pretty">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
