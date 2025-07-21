import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Sparkles, Zap } from "lucide-react";

export const DomainHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-primary text-primary-foreground overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center space-y-8">
          {/* Domain status badge */}
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Rare Blood Group Domain • Medical Premium
          </Badge>
          
          {/* Main domain display */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              gwadanegative.co
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Perfect domain for the newly discovered rare blood group research, medical institutions, and healthcare organizations
            </p>
          </div>
          
          {/* Value propositions */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>Medical .co Domain</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Scientific Authority</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Rare Blood Group</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-primary hover:bg-white/90"
            >
              Make an Offer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Owner
            </Button>
          </div>
          
          {/* Price hint */}
          <p className="text-white/70 text-sm">
            Starting at <span className="font-semibold text-white">$25,000</span> • Medical/Research institutions priority
          </p>
        </div>
      </div>
    </section>
  );
};