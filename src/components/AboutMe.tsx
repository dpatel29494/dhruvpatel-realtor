"use client";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import dpImage from "@/assets/dp.jpg";
import iabs from "@/assets/IABS-2025.pdf";

const AboutMe = () => {
  return (
    <section
      id="AboutMe"
      className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio Section */}
          <div className="animate-fade-in">
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Meet Dhruv Patel
              </span>
              <span className="block text-foreground mt-2">
                Your Trusted Real Estate Partner
              </span>
            </h2>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              As a dedicated Realtor® serving the North Texas area, I’m passionate
              about helping families and investors achieve their real estate goals.
              My background in analytics and market strategy allows me to guide each
              client with data-driven insights, ensuring confident and informed
              decisions.
            </p>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Whether you’re buying your first home, upgrading, or exploring
              investment opportunities, I combine local expertise with personalized
              service to deliver a smooth, rewarding experience from start to
              finish.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Real estate isn’t just about properties — it’s about people, community,
              and building a future. I’m here to make that journey exceptional for
              you.
            </p>

            {/* Contact & Social */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              {/* Contact Me Button */}
              <a
                href="mailto:dhruvpatelrealtor@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-glow hover:bg-primary/90 transition-all duration-300 h-12 font-medium hover:scale-105 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>

              {/* Read Reviews Button */}
              <a
                href="https://www.har.com/dhruv-patel/agent_ntreis-0840864"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-full shadow-lg hover:shadow-elegant hover:bg-foreground/90 transition-all duration-300 h-12 font-medium hover:scale-105 hover:-translate-y-1"
              >
                View Profile
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                {/* <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  <Facebook className="w-6 h-6" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Right: Photo & Info Section */}
          <div className="flex flex-col items-center animate-scale-in">
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow border-2 border-primary/20 hover:border-primary/40 mb-4 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={dpImage}
                alt="Dhruv Patel - Realtor"
                className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* License & Links */}
            <div className="text-center">
              <h3 className="font-sans text-lg font-bold text-foreground">
                Dhruv Patel | REALTOR®
              </h3>
              <p className="text-muted-foreground text-sm">License #: 0840864</p>
              <p className="text-muted-foreground text-sm mt-1">
                English / Gujarati / Hindi
              </p>

              {/* IABS Link */}
              <a
                href={iabs}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary text-sm hover:underline mt-1"
              >
                TREC - Information About Brokerage Services (IABS)
              </a>

              {/* Consumer Protection Notice */}
              <a
                href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary text-sm hover:underline"
              >
                TREC - Consumer Protection Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
