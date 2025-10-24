"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-sans md:font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fadeIn">
          Your Dream Home Awaits
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-100">
          Expert guidance in real estate. Let's find the perfect property that matches your vision and lifestyle.
        </p>
        <Button
          onClick={scrollToContact}
          variant="default"
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 mx-auto animate-fadeIn delay-200 transition-transform hover:-translate-y-1"
        >
          Schedule a Consultation
          <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
