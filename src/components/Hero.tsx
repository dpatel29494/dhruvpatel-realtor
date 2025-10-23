import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Your Dream Home Awaits
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Expert guidance in luxury real estate. Let's find the perfect property that matches your vision and lifestyle.
        </p>
        <Button onClick={scrollToContact} variant="default" size="lg" className="group bg-primary hover:bg-primary/90">
          Schedule a Consultation
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
