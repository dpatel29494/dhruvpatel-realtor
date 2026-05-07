"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
          <span className="inline-block">Your Dream Home</span>
          <span className="block bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent">
            Awaits
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in backdrop-blur-sm bg-black/10 p-4 rounded-2xl">
          Expert guidance in real estate. Let's find the perfect property that matches your vision and lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-scale-in">
          <Button
            onClick={scrollToContact}
            variant="default"
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-glow flex items-center justify-center gap-2 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full shadow-2xl hover:shadow-glow flex items-center justify-center gap-2 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
          >
            <a href="https://dhruvpatel.matrix.ntreis.net/Matrix/Public/?L=1" target="_blank" rel="noopener noreferrer">
              <Search className="w-5 h-5 mr-1" />
              Search Properties
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
