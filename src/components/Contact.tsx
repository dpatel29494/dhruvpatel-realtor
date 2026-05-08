"use client";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Connect</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Ready to find your dream property? Get in touch today to start your real estate journey.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Youform CTA */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full justify-center text-center md:text-left">
            <h3 className="font-sans text-2xl font-bold text-foreground mb-4">
              Start Your Inquiry
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              To provide the best service, I've created a quick inquiry form. 
              Share your property needs, timeline, and budget, and I'll prepare a personalized strategy for you.
            </p>
            
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white py-8 rounded-xl text-xl font-semibold transition-all hover:scale-[1.02] shadow-lg hover:shadow-primary/20 group"
              >
                <a 
                  href="https://app.youform.com/forms/7pfkodpw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  Open Inquiry Form
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground italic">
                *Form opens in a secure new tab via Youform.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Info & Hours */}
          <div className="flex flex-col gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-sans text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:6095586106" 
                  className="flex items-center gap-4 group hover:bg-secondary/50 p-2 rounded-lg transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Phone</div>
                    <div className="text-muted-foreground text-sm group-hover:text-primary">(609) 558-6106</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:dhruvpatelrealtor@gmail.com" 
                  className="flex items-center gap-4 group hover:bg-secondary/50 p-2 rounded-lg transition-colors"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Email</div>
                    <div className="text-muted-foreground text-sm group-hover:text-primary">dhruvpatelrealtor@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Office</div>
                    <div className="text-muted-foreground text-sm">1213 Vineland Ct, Allen, TX 75002</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-sans text-lg font-bold text-foreground mb-3">
                Business Hours
              </h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
