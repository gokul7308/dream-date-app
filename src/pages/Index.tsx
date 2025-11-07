import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SwipePreview } from "@/components/SwipePreview";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SwipePreview />
      <CallToAction />
    </div>
  );
};

export default Index;
