import { Home, TrendingUp, Key, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Search",
      description: "Find your perfect home with personalized property searches tailored to your needs and preferences.",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Get comprehensive market insights and property valuations to make informed decisions.",
    },
    {
      icon: Key,
      title: "Buyer Representation",
      description: "Expert guidance through the entire buying process, from search to closing.",
    },
    {
      icon: FileText,
      title: "Seller Services",
      description: "Maximize your property's value with strategic marketing and professional listing services.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Services
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Full-service real estate solutions designed to exceed your expectations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded border border-border hover:shadow-soft transition-all"
              >
                <div className="bg-primary/10 w-14 h-14 rounded flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-sans text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
