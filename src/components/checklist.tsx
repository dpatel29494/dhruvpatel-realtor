import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Checklist() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Button 
        asChild 
        className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 py-6 rounded-xl transition-all hover:scale-[1.02]"
      >
        <a 
          href="/seller-checklist.pdf" 
          download="Dhruv-Patel-Seller-Checklist.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-5 h-5" />
          Download Checklist (PDF)
        </a>
      </Button>
    </div>
  );
}
