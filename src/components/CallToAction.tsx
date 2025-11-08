import { Check, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CallToAction = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "Limited to first 10 users",
      features: [
        "Create detailed profile",
        "Basic matching algorithm",
        "5 likes per day",
        "Limited chat messages",
        "Standard profile visibility",
      ],
      highlighted: false,
      badge: "Limited Offer",
    },
    {
      name: "Premium",
      price: "₹499",
      period: "/month",
      features: [
        "Everything in Free",
        "Unlimited likes & swipes",
        "See who liked you",
        "Advanced matching filters",
        "Unlimited messaging",
        "Boost profile visibility",
        "Rewind last swipe",
        "Read receipts",
        "Priority customer support",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your
            <span className="block text-primary">Perfect Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start for free or unlock premium features to supercharge your dating experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 md:p-10 transition-all duration-300 animate-fade-in ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary shadow-2xl md:scale-105 hover:scale-110"
                  : "bg-card hover:shadow-lg hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {plan.highlighted ? <Crown className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  {plan.badge}
                </div>
              )}

              {/* Plan details */}
              <div className="text-center mb-8 mt-4">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-primary" : ""}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "bg-primary/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-primary" : "text-primary"}`} />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className={`w-full text-lg ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {plan.highlighted ? "Get Premium Now" : "Start Free"}
              </Button>

              {plan.highlighted && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Cancel anytime • No hidden fees
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p>All plans include basic features and customer support</p>
        </div>
      </div>
    </section>
  );
};
