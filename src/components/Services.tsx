"use client";
import { Home, TrendingUp, Key, FileText, Building, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Search",
      description:
        "Find your perfect home with personalized property searches tailored to your needs and preferences.",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Get comprehensive market insights and property valuations to make informed decisions.",
    },
    {
      icon: Key,
      title: "Buyer Representation",
      description:
        "Expert guidance through the entire buying process, from search to closing.",
    },
    {
      icon: FileText,
      title: "Seller Services",
      description:
        "Maximize your property's value with strategic marketing and professional listing services.",
    },
    {
      icon: Building,
      title: "Rental Management",
      description:
        "Professional rental property management to ensure steady income and hassle-free operations.",
    },
    {
      icon: DollarSign,
      title: "Investment Property",
      description:
        "Guidance on identifying and acquiring profitable investment properties for long-term wealth building.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Services
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Expert real estate services designed to simplify your journey and maximize the value of every transaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all flex flex-col items-start"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-sans text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
