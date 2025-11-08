import { Smartphone } from "lucide-react";

export const SwipePreview = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Experience the
                <span className="block text-primary">Future of Dating</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our intuitive interface makes finding your perfect match effortless. Swipe through profiles, discover shared interests, and start meaningful conversations—all in a beautiful, modern design.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Intuitive Swiping</h4>
                    <p className="text-sm text-muted-foreground">Swipe right to like, left to pass. It's that simple!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Detailed Profiles</h4>
                    <p className="text-sm text-muted-foreground">See photos, interests, and compatibility scores at a glance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant Matches</h4>
                    <p className="text-sm text-muted-foreground">When both like each other, start chatting immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative animate-fade-in">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-card to-card/80 rounded-[3rem] p-4 border-8 border-foreground/10 shadow-2xl w-80 h-[600px] hover:scale-105 transition-transform duration-500">
                  {/* Screen content */}
                  <div className="bg-gradient-to-br from-background to-secondary/20 rounded-[2.5rem] w-full h-full overflow-hidden relative">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-foreground/5 to-transparent"></div>
                    
                    {/* Profile card mockup */}
                    <div className="absolute inset-8 top-16 bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-3xl border border-border shadow-xl flex flex-col justify-between p-6">
                      <div className="flex-1 flex items-center justify-center">
                        <Smartphone className="w-24 h-24 text-primary/30" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-8 bg-foreground/10 rounded-full w-3/4"></div>
                        <div className="h-4 bg-foreground/10 rounded-full w-1/2"></div>
                        <div className="flex gap-2 pt-2">
                          <div className="h-8 bg-primary/20 rounded-full flex-1"></div>
                          <div className="h-8 bg-primary/20 rounded-full flex-1"></div>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons mockup */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
                      <div className="w-16 h-16 rounded-full bg-foreground/10 border-2 border-border animate-pulse"></div>
                      <div className="w-20 h-20 rounded-full bg-primary shadow-lg animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-16 h-16 rounded-full bg-foreground/10 border-2 border-border animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
