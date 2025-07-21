import { Globe, Shield, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Domain Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">gwadanegative.co</h3>
            <p className="text-muted-foreground text-sm">
              Medical domain for the newly discovered gwadanegative rare blood group. Perfect for research institutions and healthcare organizations.
            </p>
            <div className="flex items-center gap-2 text-sm text-trust">
              <Shield className="w-4 h-4" />
              <span>Secure Transfer Guaranteed</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Domain Features
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
              <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Domain History
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>domains@gwadanegative.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Worldwide availability</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 gwadanegative.co • Medical Domain for Rare Blood Group Research • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};