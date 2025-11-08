import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { SwipePreview } from "@/components/SwipePreview";
import { WhyDreamDate } from "@/components/WhyDreamDate";
import { CallToAction } from "@/components/CallToAction";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <SwipePreview />
      <WhyDreamDate />
      <CallToAction />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
