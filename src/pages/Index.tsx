import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import MeetTherapist from "@/components/MeetTherapist";
import ApproachSection from "@/components/ApproachSection";
import WhatToExpect from "@/components/WhatToExpect";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead page="home" />
      <Navbar />
      <Hero />
      <ServicesOverview />
      <MeetTherapist />
      <ApproachSection />
      <WhatToExpect />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
