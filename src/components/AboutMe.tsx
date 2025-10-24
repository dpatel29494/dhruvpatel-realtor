"use client";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Bio Section */}
          <div className="animate-fadeIn">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Dhruv Patel — Your Trusted Real Estate Partner
            </h2>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              As a dedicated Realtor® serving the North Texas area, I’m passionate about helping families and investors achieve their real estate goals. My background in analytics and market strategy allows me to guide each client with data-driven insights, ensuring confident and informed decisions.
            </p>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Whether you’re buying your first home, upgrading, or exploring investment opportunities, I combine local expertise with personalized service to deliver a smooth, rewarding experience from start to finish.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Real estate isn’t just about properties — it’s about people, community, and building a future. I’m here to make that journey exceptional for you.
            </p>

            {/* Contact & Social */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              {/* Contact Me Button */}
              <a
                href="mailto:dhruvpatelrealtor@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition h-12 font-medium"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>

              {/* Read Reviews Button */}
              <a
                href="https://www.zillow.com/profile/dhruvpatelrealtor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition h-12 font-medium"
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
          <div className="flex flex-col items-center animate-fadeIn delay-200">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-border mb-4">
              <img
                src="../assets/dp.jpg"
                alt="Dhruv Patel - Realtor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* License & Languages */}
            <div className="text-center">
              <h3 className="font-sans text-lg font-bold text-foreground">
                Dhruv Patel | REALTOR®
              </h3>
              <p className="text-muted-foreground text-sm">
                License #: 0840864
              </p>
              <p className="text-muted-foreground text-sm">
                English / Gujarati / Hindi
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
