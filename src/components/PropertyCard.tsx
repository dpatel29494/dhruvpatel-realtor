import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
}

const PropertyCard = ({ image, title, price, beds, baths, sqft }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-500 border-border hover:border-primary/30 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold shadow-lg backdrop-blur-sm">
          {price}
        </div>
      </div>
      <CardContent className="p-6 bg-card group-hover:bg-secondary/50 transition-colors duration-300">
        <h3 className="font-sans text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
            <Bed className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
            <Maximize className="w-4 h-4" />
            <span>{sqft}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
