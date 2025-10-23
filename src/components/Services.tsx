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
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-service real estate solutions designed to exceed your expectations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
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
