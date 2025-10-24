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
    /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      toast({ title: "Invalid Email", description: "Enter valid email", variant: "destructive" });
      return;
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      toast({ title: "Invalid Phone", description: "Enter valid phone", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "Thanks for reaching out!" });
    setFormData({
      name: "",
      email: "",
      phone: "",
      leasing: "buy",
      propertyType: "",
      priceRange: [500000, 1500000],
      timeline: [1, 6],
      bedrooms: [1, 5],
      bathrooms: [1, 3],
      message: "",
    });
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Connect</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Ready to find your dream property? Get in touch today.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <select
              value={formData.leasing}
              onChange={(e) => setFormData({ ...formData, leasing: e.target.value })}
              className="h-12 rounded-lg border px-3 w-full"
            >
              <option value="buy">Buying</option>
              <option value="sell">Selling</option>
              <option value="sell-buy">Selling & Buying</option>
              <option value="rent">Renting</option>
              <option value="lease">Leasing</option>
            </select>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="h-12 rounded-lg border px-3 w-full"
            >
              <option value="">Select Property Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="land">Land</option>
              <option value="multi-family">Multi-Family</option>
            </select>

            {/* Price Range */}
            <div className="flex flex-col">
              <label>Price Range: ${formData.priceRange[0]} - ${formData.priceRange[1]}</label>
              <RangeSlider
                min={50000}
                max={5000000}
                step={5000}
                values={formData.priceRange}
                onChange={(v) => setFormData({ ...formData, priceRange: v })}
              />
            </div>

            {/* Timeline */}
            <div className="flex flex-col">
              <label>Timeline: {formData.timeline[0]} - {formData.timeline[1]} Month(s)</label>
              <RangeSlider
                min={1}
                max={12}
                values={formData.timeline}
                onChange={(v) => setFormData({ ...formData, timeline: v })}
              />
            </div>

            {/* Bedrooms */}
            <div className="flex flex-col">
              <label>Bedrooms: {formData.bedrooms[0]} - {formData.bedrooms[1]}</label>
              <RangeSlider
                min={1}
                max={9}
                values={formData.bedrooms}
                onChange={(v) => setFormData({ ...formData, bedrooms: v })}
              />
            </div>

            {/* Bathrooms */}
            <div className="flex flex-col">
              <label>Bathrooms: {formData.bathrooms[0]} - {formData.bathrooms[1]}</label>
              <RangeSlider
                min={1}
                max={9}
                values={formData.bathrooms}
                onChange={(v) => setFormData({ ...formData, bathrooms: v })}
              />
            </div>

            <Textarea
              placeholder="Tell me about your property needs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px] rounded-lg"
            />

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 rounded-full">
              Send Message
            </Button>
          </form>

          {/* Contact Info + Business Hours */}
          <div className="flex flex-col gap-6">
            {/* Contact Information */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h3 className="font-sans text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Phone</div>
                    <div className="text-muted-foreground text-sm">(609) 558-6106</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Email</div>
                    <div className="text-muted-foreground text-sm">dhruvpatelrealtor@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Office</div>
                    <div className="text-muted-foreground text-sm">1213 Vineland Ct, Allen, TX 75002</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-sans text-lg font-bold text-foreground mb-3">
                Business Hours
              </h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
