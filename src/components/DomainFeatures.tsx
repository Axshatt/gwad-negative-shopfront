import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Zap, TrendingUp, Heart, Users } from "lucide-react";

export const DomainFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Medical Authority Domain",
      description: "Perfect for medical institutions, research centers, and healthcare organizations studying the gwadanegative blood group.",
      badge: "Medical"
    },
    {
      icon: Zap,
      title: "Scientific Relevance",
      description: "Directly relates to the newly discovered rare blood group, making it highly valuable for research purposes.",
      badge: "Research"
    },
    {
      icon: Shield,
      title: "Clean Medical History",
      description: "No previous medical associations or conflicts. Perfect fresh start for official gwadanegative research.",
      badge: "Verified"
    },
    {
      icon: TrendingUp,
      title: "Future-Proof Investment",
      description: "As research into gwadanegative blood group expands, this domain becomes increasingly valuable.",
      badge: "Growth"
    },
    {
      icon: Heart,
      title: "Patient Education Hub",
      description: "Ideal for creating resources and information for patients with the gwadanegative blood type.",
      badge: "Education"
    },
    {
      icon: Users,
      title: "Global Medical Recognition",
      description: "The .co extension is trusted by medical organizations worldwide for official communications.",
      badge: "Trusted"
    }
  ];

  const badgeVariants = {
    "Medical": "bg-primary text-primary-foreground",
    "Research": "bg-trust text-trust-foreground", 
    "Verified": "bg-premium text-premium-foreground",
    "Growth": "bg-trust text-trust-foreground",
    "Education": "bg-premium text-premium-foreground",
    "Trusted": "bg-primary text-primary-foreground"
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perfect for Medical & Research Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ideal domain for institutions working with the newly discovered gwadanegative blood group
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