import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "10 swipes per day",
      "Basic matching",
      "Limited messages",
      "Profile customization",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    features: [
      "Unlimited swipes",
      "Advanced matching",
      "Unlimited messages",
      "See who liked you",
      "Priority support",
      "Ad-free experience",
    ],
    highlighted: true,
  },
  {
    name: "Premium Plus",
    price: "$19.99",
    period: "per month",
    features: [
      "Everything in Premium",
      "Profile boost",
      "Super likes",
      "Rewind feature",
      "Travel mode",
      "VIP badge",
    ],
    highlighted: false,
  },
];

export const CallToAction = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your <span className="bg-gradient-hero bg-clip-text text-transparent">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade anytime to unlock unlimited possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 space-y-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-slide-up ${
                plan.highlighted 
                  ? 'bg-gradient-hero border-primary shadow-elevated scale-105' 
                  : 'bg-gradient-card border-border shadow-card'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}

              <div className="space-y-2">
                <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white' : 'text-primary'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlighted ? "secondary" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
