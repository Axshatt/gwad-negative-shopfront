import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Zap, TrendingUp, Heart, Users } from "lucide-react";

export const DomainFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Premium .co Extension",
      description: "Highly sought-after .co domains are perfect for companies, brands, and startups worldwide.",
      badge: "Popular"
    },
    {
      icon: Zap,
      title: "Short & Memorable",
      description: "Easy to type, remember, and share. Perfect for building a strong brand identity.",
      badge: "Brandable"
    },
    {
      icon: Shield,
      title: "Clean History",
      description: "No spam, penalties, or negative associations. Fresh start for your business.",
      badge: "Verified"
    },
    {
      icon: TrendingUp,
      title: "SEO Potential",
      description: "Build your search engine presence from day one with this versatile domain.",
      badge: "Growth"
    },
    {
      icon: Heart,
      title: "Creative Potential",
      description: "Perfect for creative agencies, photography, art, or any innovative business.",
      badge: "Creative"
    },
    {
      icon: Users,
      title: "Global Appeal",
      description: "The .co extension is recognized worldwide and trusted by major brands.",
      badge: "Trusted"
    }
  ];

  const badgeVariants = {
    "Popular": "bg-primary text-primary-foreground",
    "Brandable": "bg-trust text-trust-foreground", 
    "Verified": "bg-premium text-premium-foreground",
    "Growth": "bg-trust text-trust-foreground",
    "Creative": "bg-premium text-premium-foreground",
    "Trusted": "bg-primary text-primary-foreground"
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why This Domain Stands Out
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just a web address – it's your digital foundation for success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={badgeVariants[feature.badge as keyof typeof badgeVariants]}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};