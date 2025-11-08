import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Rahul",
      location: "Mumbai",
      rating: 5,
      text: "We matched on Dream Date 6 months ago, and it's been amazing! The compatibility score was spot on. We're planning our wedding now!",
      initials: "PR",
      color: "bg-primary/20 text-primary",
    },
    {
      name: "Sarah",
      location: "Delhi",
      rating: 5,
      text: "Finally, a dating app that actually works! Verified profiles gave me confidence, and I met my perfect match within weeks.",
      initials: "S",
      color: "bg-accent/20 text-accent",
    },
    {
      name: "Arjun & Meera",
      location: "Bangalore",
      rating: 5,
      text: "The smart matching is incredible. We had so much in common from day one. Dream Date helped us find each other in this busy world.",
      initials: "AM",
      color: "bg-primary/20 text-primary",
    },
    {
      name: "Anjali",
      location: "Hyderabad",
      rating: 5,
      text: "I was skeptical about dating apps, but Dream Date changed my mind. The interface is beautiful, and the people are genuine. Highly recommend!",
      initials: "A",
      color: "bg-accent/20 text-accent",
    },
    {
      name: "Vikram",
      location: "Pune",
      rating: 5,
      text: "Best investment I made! Premium features are worth every penny. Found someone special within a month. Thank you, Dream Date!",
      initials: "V",
      color: "bg-primary/20 text-primary",
    },
    {
      name: "Neha & Karan",
      location: "Chennai",
      rating: 5,
      text: "We connected over our love for travel and photography. Six months later, we're traveling the world together. Dream Date made it happen!",
      initials: "NK",
      color: "bg-accent/20 text-accent",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Success Stories from
            <span className="block text-primary">Real Couples</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of happy couples who found love on Dream Date. Your story could be next!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group p-6 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon background */}
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-primary/5 transform rotate-12" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* User info */}
                <div className="flex items-center gap-3">
                  <Avatar className={`${testimonial.color} border-2 border-border`}>
                    <AvatarFallback className={testimonial.color}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 pt-16 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Match Success</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">4.8★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
