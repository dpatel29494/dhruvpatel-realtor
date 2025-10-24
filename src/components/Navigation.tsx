"use client";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
          Dhruv Patel | REALTOR®
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
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-base"
            >
              {item.label}
            </button>
          ))}

          {/* Contact Button - Rounded */}
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-5 py-2 rounded-full shadow-md transition"
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
