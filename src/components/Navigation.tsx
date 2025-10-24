"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Phone, ExternalLink } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex flex-col leading-tight">
          <span className="text-foreground font-bold text-lg md:text-xl">
            Dhruv Patel
          </span>
          <span className="text-red-600 font-semibold text-sm md:text-base tracking-wide">
            REALTOR® | VP Realty Services
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("AboutMe")}
            className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base group"
          >
            About Me
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>

          <a
            href="https://www.vprealtyservices.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base group"
          >
            About Broker
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Calculator Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base group inline-flex items-center gap-1">
                Calculator
                <ChevronDown className="w-4 h-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border/50 shadow-xl rounded-xl mt-2">
              <DropdownMenuItem asChild className="cursor-pointer text-muted-foreground hover:text-primary">
                <a
                  href="https://www.bankrate.com/mortgages/mortgage-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full"
                >
                  Mortgage Calculator <ExternalLink className="w-4 h-4" />
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="cursor-pointer text-muted-foreground hover:text-primary">
                <a
                  href="https://www.bankrate.com/calculators/mortgages/rent-vs-buy-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full"
                >
                  Rent vs Buy <ExternalLink className="w-4 h-4" />
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild className="cursor-pointer text-muted-foreground hover:text-primary">
                <a
                  href="https://smartasset.com/taxes/property-taxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full"
                >
                  Property Tax Calculator <ExternalLink className="w-4 h-4" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button */}
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
