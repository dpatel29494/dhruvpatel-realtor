import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      image: property1,
      title: "Modern Luxury Estate",
      price: "$2,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,500 sqft",
    },
    {
      image: property2,
      title: "Contemporary Villa",
      price: "$1,950,000",
      beds: 4,
      baths: 3,
      sqft: "3,800 sqft",
    },
    {
      image: property3,
      title: "Waterfront Paradise",
      price: "$3,200,000",
      beds: 6,
      baths: 5,
      sqft: "5,200 sqft",
    },
  ];

  return (
    <section id="properties" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Explore our handpicked selection of exceptional properties that define luxury living
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
