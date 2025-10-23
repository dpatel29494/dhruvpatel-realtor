import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-sans font-bold text-foreground">Premier Properties</h1>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            About
          </button>
          <button onClick={() => scrollToSection("properties")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Properties
          </button>
          <button onClick={() => scrollToSection("calculator")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Calculator
          </button>
          <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Services
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="bg-primary hover:bg-primary/90">
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
