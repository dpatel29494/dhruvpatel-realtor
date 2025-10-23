import { Award, Users, Home } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Home, value: "500+", label: "Properties Sold" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Real Estate Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              With over 15 years of experience in luxury real estate, I specialize in helping clients find their perfect property. My approach combines market expertise, personalized service, and a deep understanding of what makes a house a home.
            </p>
            <p className="text-muted-foreground text-lg">
              Whether you're buying your first home, upgrading to your dream property, or investing in real estate, I'm here to guide you through every step of the journey with professionalism and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground font-playfair">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
