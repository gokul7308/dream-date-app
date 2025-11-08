import { Heart, Users, Sparkles, Shield } from "lucide-react";

export const About = () => {
  const steps = [
    {
      icon: Users,
      title: "Create Your Profile",
      description: "Share your interests, hobbies, and what makes you unique. Our smart algorithm learns what you're looking for.",
    },
    {
      icon: Sparkles,
      title: "Get Smart Matches",
      description: "Our AI analyzes compatibility based on interests, personality traits, and preferences to find your perfect match.",
    },
    {
      icon: Heart,
      title: "Connect & Chat",
      description: "Swipe, match, and start conversations with verified users. Real-time chat keeps the spark alive.",
    },
    {
      icon: Shield,
      title: "Stay Safe & Verified",
      description: "All profiles are verified for authenticity. Your privacy and safety are our top priorities.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How <span className="text-primary">Dream Date</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Finding your perfect match has never been easier. Our smart algorithm does the heavy lifting for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
