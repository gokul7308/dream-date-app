import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Smart Matching",
    description: "Our AI-powered algorithm finds your perfect match based on interests, values, and compatibility.",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Chat",
    description: "Connect instantly with your matches through our seamless messaging platform.",
    gradient: "from-primary/20 to-primary-glow/20",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy matters. We use advanced security to keep your data protected.",
    gradient: "from-accent/20 to-secondary/20",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Unlock unlimited swipes and exclusive features with our flexible subscription plans.",
    gradient: "from-primary-glow/20 to-accent/20",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Dream Date</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience dating reimagined with features designed for authentic connections
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 space-y-4 bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-soft`}>
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
