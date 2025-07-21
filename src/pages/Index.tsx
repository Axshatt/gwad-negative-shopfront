import { DomainHero } from "@/components/DomainHero";
import { DomainFeatures } from "@/components/DomainFeatures";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DomainHero />
      <DomainFeatures />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
