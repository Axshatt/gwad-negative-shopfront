import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, DollarSign, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    offer: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", offer: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Secure This Medical Domain
              </h2>
              <p className="text-xl text-muted-foreground">
                Perfect for medical institutions, research centers, and healthcare organizations working with the gwadanegative blood group.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Medical Institution Pricing</h3>
                  <p className="text-muted-foreground text-sm">Starting at $25,000 with flexible payment options for qualified medical organizations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                <div className="p-2 bg-trust/10 rounded-lg">
                  <Clock className="w-5 h-5 text-trust" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Response</h3>
                  <p className="text-muted-foreground text-sm">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                <div className="p-2 bg-premium/10 rounded-lg">
                  <Mail className="w-5 h-5 text-premium" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure Transfer</h3>
                  <p className="text-muted-foreground text-sm">Safe, escrow-protected domain transfers</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Escrow Protection</Badge>
              <Badge variant="outline">Payment Plans Available</Badge>
              <Badge variant="outline">Fast Transfer</Badge>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="offer">Your Offer (USD)</Label>
                  <Input
                    id="offer"
                    name="offer"
                    type="number"
                    value={formData.offer}
                    onChange={handleChange}
                    placeholder="25000"
                    min="10000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your medical research or organization's interest in this domain..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};