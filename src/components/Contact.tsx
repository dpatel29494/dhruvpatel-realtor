"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
}

const RangeSlider = ({ min, max, step = 1, values, onChange }: RangeSliderProps) => {
  const [minVal, maxVal] = values;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal);
    onChange([value, maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal);
    onChange([minVal, value]);
  };

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={handleMinChange}
        className="absolute pointer-events-none w-full h-2 bg-transparent appearance-none"
        style={{ zIndex: minVal > max - 100 ? 5 : 10 }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={handleMaxChange}
        className="absolute pointer-events-none w-full h-2 bg-transparent appearance-none"
        style={{ zIndex: 10 }}
      />
      <div className="relative h-2 bg-gray-300 rounded">
        <div
          className="absolute h-2 bg-primary rounded"
          style={{
            left: `${((minVal - min) / (max - min)) * 100}%`,
            width: `${((maxVal - minVal) / (max - min)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    leasing: "buy",
    propertyType: "",
    priceRange: [500000, 1500000] as [number, number],
    timeline: [1, 6] as [number, number],
    bedrooms: [1, 5] as [number, number],
    bathrooms: [1, 3] as [number, number],
    message: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})
