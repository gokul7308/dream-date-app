import { Shield, Lock, BadgeCheck, Heart, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const WhyDreamDate = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Your Safety First",
      description: "Advanced security measures and 24/7 moderation keep you safe from scams, bots, and inappropriate behavior.",
      color: "text-primary",
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your data is encrypted and never shared. Control who sees your profile and what information you share.",
      color: "text-primary",
    },
    {
      icon: BadgeCheck,
      title: "Verified Real Users",
      description: "Photo verification and ID checks ensure you're connecting with genuine people, not fake profiles.",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Quality Over Quantity",
      description: "Smart matching means fewer but better connections. Focus on meaningful conversations, not endless swiping.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join thousands of singles actively looking for relationships. New members join daily.",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Success Stories",
      description: "Hundreds of couples have found love through Dream Date. Read their stories and become one of them.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose
            <span className="block text-primary">Dream Date?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just another dating app. We're committed to creating a safe, authentic space for genuine connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className={`w-7 h-7 ${benefit.color} group-hover:text-primary-foreground transition-colors`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-primary" />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            <span>Data Protected</span>
          </div>
        </div>
      </div>
    </section>
  );
};
