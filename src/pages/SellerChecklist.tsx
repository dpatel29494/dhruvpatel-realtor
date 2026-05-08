"use client";
import { CheckCircle2, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SellerChecklist = () => {
  // Robust print function
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const sections = [
    {
      title: "Pre-Listing Preparation",
      items: [
        "Schedule listing consultation",
        "Review pricing strategy and market conditions",
        "Gather property documents (survey, HOA info, warranties)",
        "Complete Texas seller disclosure form"
      ]
    },
    {
      title: "Home Preparation (Market-Ready)",
      items: [
        "Deep clean entire home (floors, baseboards, windows)",
        "Declutter all rooms and remove personal items",
        "Complete minor repairs (leaks, doors, drywall)",
        "Improve curb appeal (mow lawn, trim landscaping)",
        "Remove odors and ensure fresh airflow"
      ]
    },
    {
      title: "Marketing & Showings",
      items: [
        "Schedule professional photography",
        "Keep home show-ready daily",
        "Open blinds and turn on lights before showings",
        "Secure valuables and important documents"
      ]
    },
    {
      title: "Closing Preparation",
      items: [
        "Confirm closing date and location",
        "Cancel or transfer utilities",
        "Remove all personal belongings",
        "Bring valid ID to closing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation - Hidden during Print */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </Button>
          
          <Button 
            onClick={handlePrint}
            className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* Brand Header - Visible on PDF */}
        <div className="text-center mb-12 border-b pb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Home Seller Checklist</h1>
          <p className="text-xl text-primary font-semibold">Dhruv Patel | VP Realty Services</p>
          <p className="text-slate-500 text-sm mt-1">Texas REALTOR® | License #: 0840864</p>
        </div>

        {/* Checklist Content */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx} className="break-inside-avoid">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3 border-l-4 border-primary pl-4">
                {section.title}
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PDF Footer */}
        <div className="mt-16 pt-8 border-t text-center">
          <p className="font-bold text-slate-900">Let's get your home sold.</p>
          <p className="text-slate-600">dhruvpatelrealtor@gmail.com | (609) 558-6106</p>
          <p className="text-xs text-slate-400 mt-4 italic">© 2026 Dhruv Patel. All rights reserved.</p>
        </div>
      </div>

      {/* Critical CSS for Print Layout */}
      <style jsx global>{`
        @media print {
          .print\:hidden {
            display: none !important;
          }
          body {
            background-color: white !important;
            color: black !important;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 100% !important;
            width: 100% !important;
          }
          .break-inside-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default SellerChecklist;
