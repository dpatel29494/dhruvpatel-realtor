"use client";
import { CheckCircle2, Printer, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const SellerChecklist = () => {
  const handleDownload = () => {
    window.print(); // Triggers the browser print/save-as-pdf dialog
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section - This stays visible on screen, but we can hide it in print if wanted */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Home Seller Checklist</h1>
            <p className="text-slate-600 mt-2">Prepared by Dhruv Patel | VP Realty Services</p>
          </div>
          <Button 
            onClick={handleDownload}
            className="mt-6 md:mt-0 bg-primary hover:bg-primary/90 text-white gap-2 print:hidden"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* The actual checklist content */}
        <div id="printable-checklist" className="space-y-10">
           {/* Add your sections here (Pre-Listing, Home Prep, etc.) */}
           {/* Tip: Use the code structure from our previous message for the mapping */}
        </div>

        {/* Footer for the PDF */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-slate-500">
          <p>Dhruv Patel | REALTOR® | License #: 0840864</p>
          <p>dhruvpatelrealtor@gmail.com | (609) 558-6106</p>
        </div>
      </div>

      {/* Print-specific Styles */}
      <style jsx global>{`
        @media print {
          .print\:hidden { display: none !important; }
          body { background: white; }
          .container { max-width: 100% !important; padding: 0; }
          h1 { color: black !important; }
        }
      `}</style>
    </div>
  );
};
