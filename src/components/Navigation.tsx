import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-playfair font-bold text-primary">Premier Properties</h1>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("properties")} className="text-foreground hover:text-accent transition-colors">
            Properties
          </button>
          <button onClick={() => scrollToSection("calculator")} className="text-foreground hover:text-accent transition-colors">
            Calculator
          </button>
          <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors">
            Services
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="hero" size="sm">
            <Phone className="w-4 h-4" />
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
