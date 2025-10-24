"use client";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-sans font-bold text-foreground relative">
          <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            Dhruv Patel
          </span>
          <span className="text-foreground"> | REALTOR®</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About Me", id: "AboutMe" },
            { label: "Calculator", id: "calculator" },
            { label: "Services", id: "services" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* Contact Button - Rounded */}
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-6 py-2.5 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
