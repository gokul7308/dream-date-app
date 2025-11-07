import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";

const profileCards = [
  {
    name: "Sarah",
    age: 28,
    location: "New York, NY",
    occupation: "Product Designer",
    interests: ["Travel", "Photography", "Yoga"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
  },
  {
    name: "Michael",
    age: 32,
    location: "Los Angeles, CA",
    occupation: "Software Engineer",
    interests: ["Hiking", "Gaming", "Cooking"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
  },
  {
    name: "Emily",
    age: 26,
    location: "Chicago, IL",
    occupation: "Marketing Manager",
    interests: ["Art", "Wine", "Reading"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
  },
];

export const SwipePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipe = (liked: boolean) => {
    setDirection(liked ? 'right' : 'left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % profileCards.length);
      setDirection(null);
    }, 300);
  };

  const currentProfile = profileCards[currentIndex];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Swipe Your Way to <span className="bg-gradient-accent bg-clip-text text-transparent">Love</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our unique card design makes browsing profiles a delightful experience
          </p>
        </div>

        <div className="max-w-md mx-auto relative">
          {/* Preview card stack effect */}
          <div className="absolute inset-0 -z-10">
            <Card className="absolute inset-0 bg-muted/50 -rotate-3 scale-95 blur-sm" />
            <Card className="absolute inset-0 bg-muted/30 rotate-2 scale-[0.97] blur-sm" />
          </div>

          {/* Main profile card */}
          <Card 
            className={`relative overflow-hidden shadow-elevated transition-all duration-300 ${
              direction === 'left' ? '-translate-x-full opacity-0 -rotate-12' : 
              direction === 'right' ? 'translate-x-full opacity-0 rotate-12' : 
              'translate-x-0 opacity-100 rotate-0'
            }`}
          >
            {/* Profile Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={currentProfile.image} 
                alt={currentProfile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Profile Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <h3 className="text-3xl font-bold">
                  {currentProfile.name}, {currentProfile.age}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{currentProfile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>{currentProfile.occupation}</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="p-6 space-y-3">
              <h4 className="font-semibold text-foreground">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {currentProfile.interests.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground border border-border"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 p-6 pt-0">
              <Button 
                size="icon" 
                variant="outline"
                className="w-16 h-16 rounded-full shadow-card hover:shadow-elevated hover:scale-110 transition-all border-2"
                onClick={() => handleSwipe(false)}
              >
                <X className="w-8 h-8 text-destructive" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                className="w-16 h-16 rounded-full shadow-card hover:shadow-elevated hover:scale-110 transition-all border-2"
                onClick={() => handleSwipe(true)}
              >
                <Heart className="w-8 h-8 text-secondary" fill="currentColor" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
