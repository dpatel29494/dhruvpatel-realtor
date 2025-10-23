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
    <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all duration-300 border-border">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded font-bold">
          {price}
        </div>
      </div>
      <CardContent className="p-6 bg-card">
        <h3 className="font-sans text-xl font-bold text-foreground mb-4">{title}</h3>
        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4" />
            <span>{sqft}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
