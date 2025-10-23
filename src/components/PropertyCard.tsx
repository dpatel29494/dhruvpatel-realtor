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
    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
          {price}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">{title}</h3>
        <div className="flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-5 h-5" />
            <span>{sqft}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
