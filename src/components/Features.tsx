import { Brain, MessageCircle, ShieldCheck, Crown, Heart, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Interest-Based Matching",
      description: "Our AI algorithm analyzes your interests, hobbies, and personality to find compatible matches that share your passions.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: MessageCircle,
      title: "Real-Time Chat",
      description: "Instant messaging with your matches. Share photos, voice messages, and keep the conversation flowing seamlessly.",
      gradient: "from-accent/20 to-primary/20",
    },
    {
      icon: ShieldCheck,
      title: "Verified Profiles",
      description: "Every profile goes through verification to ensure authenticity. Connect with real people, not fake accounts.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Crown,
      title: "Premium Subscription",
      description: "Unlock advanced features: unlimited likes, see who liked you, rewind swipes, and boost your profile visibility.",
      gradient: "from-accent/20 to-primary/20",
    },
    {
      icon: Heart,
      title: "Compatibility Score",
      description: "See how well you match with others based on shared interests, values, and lifestyle preferences before swiping.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Never miss a match or message. Get real-time notifications when someone likes you or sends a message.",
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Powerful Features for
            <span className="block text-primary">Meaningful Connections</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to find, connect, and build relationships with like-minded people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
