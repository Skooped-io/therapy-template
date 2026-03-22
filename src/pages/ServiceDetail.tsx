import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone, MapPin, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seoConfig, slugify, getServiceBySlug } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const serviceContent: Record<string, { paragraphs: string[]; includes: string[] }> = {
  "individual-therapy": {
    paragraphs: [
      "Individual therapy provides a confidential, one-on-one space where you can explore your thoughts, feelings, and behaviors with a trained professional. Whether you're navigating a difficult transition, managing anxiety or depression, or simply seeking personal growth, therapy offers the tools and support to help you move forward.",
      "In our sessions together, we'll work at your pace to identify patterns that may be holding you back and develop practical strategies for lasting change. I use evidence-based approaches tailored to your unique needs, creating a warm and non-judgmental environment where you can be fully yourself.",
      "Many people find that individual therapy helps them develop greater self-awareness, improve their relationships, and build resilience for life's challenges. You don't need to be in crisis to benefit — therapy is for anyone ready to invest in their well-being.",
    ],
    includes: [
      "Confidential 50-minute sessions",
      "Personalized treatment planning",
      "Evidence-based therapeutic techniques (CBT, EMDR, mindfulness)",
      "Regular progress check-ins and goal setting",
      "Between-session resources and exercises",
      "Flexible scheduling including telehealth options",
    ],
  },
  "couples-counseling": {
    paragraphs: [
      "Couples counseling offers a structured, supportive environment where partners can address challenges in their relationship with the guidance of a trained therapist. Whether you're dealing with communication breakdowns, trust issues, or simply feeling disconnected, therapy can help you rebuild and strengthen your bond.",
      "Together, we'll explore the dynamics in your relationship, identify unhelpful patterns, and develop new ways of connecting. I create a balanced space where both partners feel heard and respected, working collaboratively toward shared goals.",
      "Many couples find that even a few sessions can dramatically improve their communication and understanding of each other. You don't have to wait until things are falling apart — proactive couples counseling can deepen intimacy and prevent small issues from becoming larger ones.",
    ],
    includes: [
      "Joint 60-minute sessions for both partners",
      "Individual intake sessions to understand each perspective",
      "Communication skills training and practice",
      "Conflict resolution strategies",
      "Homework exercises to practice between sessions",
      "Ongoing relationship assessment and goal tracking",
    ],
  },
  "family-therapy": {
    paragraphs: [
      "Family therapy helps families navigate conflict, improve communication, and strengthen their connections. Whether your family is dealing with a major transition, behavioral challenges, or longstanding tensions, working with a therapist can create space for understanding and healing.",
      "In family sessions, we'll explore the dynamics and roles within your family system, identify sources of friction, and develop healthier ways of relating to one another. Every family member's voice matters, and I work to create an environment where everyone feels safe to share.",
      "Family therapy can be especially helpful during times of change — a divorce, a new blended family, adolescent challenges, or grief. By learning to communicate more effectively and support one another, families often find renewed closeness and resilience.",
    ],
    includes: [
      "Sessions tailored to your family's size and needs",
      "Assessment of family dynamics and communication patterns",
      "Collaborative goal-setting with all family members",
      "Conflict mediation and resolution techniques",
      "Parenting strategy support when applicable",
      "Referrals and coordination with other providers as needed",
    ],
  },
  "group-sessions": {
    paragraphs: [
      "Group therapy offers a unique opportunity to connect with others who share similar experiences in a guided, supportive setting. Led by a licensed therapist, small group sessions provide a space where you can give and receive support, learn from others' perspectives, and practice new skills in a safe environment.",
      "There's something powerful about realizing you're not alone. Group members often find that hearing others' stories helps normalize their own experience and provides fresh insights. The group setting also offers a natural space to practice communication, boundary-setting, and interpersonal skills.",
      "Groups are kept small — typically 6 to 8 participants — to ensure everyone has the opportunity to engage meaningfully. Topics and themes vary, and I'll help match you to a group that fits your needs and goals.",
    ],
    includes: [
      "Small groups of 6–8 participants",
      "Weekly 90-minute guided sessions",
      "Theme-focused groups (anxiety, grief, life transitions, etc.)",
      "Pre-group screening to ensure a good fit",
      "Confidential and supportive group agreements",
      "Individual check-ins as needed alongside group work",
    ],
  },
};

function getContentForService(slug: string, title: string) {
  if (serviceContent[slug]) return serviceContent[slug];
  return {
    paragraphs: [
      `${title} is designed to support you through challenges with compassionate, evidence-based care. Whether you're just beginning your journey or looking for continued support, this service provides a safe and confidential space to explore what matters most to you.`,
      `Every session is tailored to your unique needs and goals. Together, we'll develop practical strategies and build the skills you need for lasting positive change.`,
      `Taking the first step is often the hardest part. Reaching out shows strength, and I'm here to walk alongside you at your own pace.`,
    ],
    includes: [
      "Personalized treatment approach",
      "Confidential and supportive environment",
      "Evidence-based therapeutic techniques",
      "Flexible scheduling options",
      "Telehealth availability",
      "Regular progress evaluation",
    ],
  };
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service) return;

    document.title = `${service.title} in ${seoConfig.address.city}, ${seoConfig.address.state} | ${seoConfig.businessName}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `${service.title} in ${seoConfig.address.city}, ${seoConfig.address.state}. ${service.description} Contact ${seoConfig.businessName} today.`
      );
    }

    const existingScript = document.querySelector('script[data-schema="service"]');
    if (existingScript) existingScript.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      provider: {
        "@type": "LocalBusiness",
        name: seoConfig.businessName,
        telephone: seoConfig.phone,
      },
      areaServed: seoConfig.serviceArea,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "service");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [service]);

  if (!service || !slug) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 text-center">
          <h1 className="font-heading text-3xl text-secondary">Service Not Found</h1>
          <p className="mt-4 text-muted-foreground font-body">
            The service you're looking for doesn't exist.
          </p>
          <Button variant="default" className="mt-8" asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  const content = getContentForService(slug, service.title);
  const relatedServices = seoConfig.services.filter((s) => slugify(s.title) !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-body text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <a href="/#services" className="hover:text-primary transition-colors">Services</a>
              <ChevronRight size={14} />
              <span className="text-foreground">{service.title}</span>
            </nav>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-[1.1] text-balance">
              {service.title}
            </h1>
            <p className="mt-4 font-body text-lg text-foreground/65 max-w-2xl text-pretty">
              {service.description}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <RevealOnScroll>
                <div className="prose prose-lg max-w-none">
                  {content.paragraphs.map((p, i) => (
                    <p key={i} className="font-body text-foreground/75 leading-relaxed text-pretty mb-6">
                      {p}
                    </p>
                  ))}
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <div className="bg-muted/30 rounded-xl p-8 md:p-10">
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary mb-6">
                    What to Expect
                  </h2>
                  <ul className="space-y-3">
                    {content.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-foreground/70">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* CTA */}
              <RevealOnScroll delay={150}>
                <div className="bg-primary/5 rounded-xl p-8 md:p-10 text-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary mb-3">
                    Ready to Take the First Step?
                  </h2>
                  <p className="font-body text-foreground/65 mb-6 max-w-md mx-auto text-pretty">
                    Schedule a free 15-minute consultation to see if we're a good fit.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <a href="/#contact">Book a Consultation</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href={seoConfig.phoneHref} className="gap-2">
                        <Phone size={16} />
                        {seoConfig.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* NAP */}
              <RevealOnScroll delay={100}>
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-semibold text-secondary mb-4">
                    {seoConfig.businessName}
                  </h3>
                  <div className="space-y-3 font-body text-sm text-foreground/65">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span>{seoConfig.address.full}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="shrink-0 text-primary" />
                      <a href={seoConfig.phoneHref} className="hover:text-primary transition-colors">
                        {seoConfig.phone}
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground pt-1">
                      Serving {seoConfig.serviceArea}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Related Services */}
              <RevealOnScroll delay={200}>
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-semibold text-secondary mb-4">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.title}
                        to={`/services/${slugify(rs.title)}`}
                        className="block font-body text-sm text-foreground/65 hover:text-primary transition-colors duration-200 py-1.5 border-b border-border/40 last:border-0"
                      >
                        {rs.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Back link */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetail;
