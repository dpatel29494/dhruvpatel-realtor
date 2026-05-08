"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ClipboardList, FileText, CheckCircle2, Download } from "lucide-react";

type ResourceKey =
  | "buyer"
  | "firstTime"
  | "moving"
  | "documents";

const RESOURCES: Record<
  ResourceKey,
  { title: string; description: string; sections: { heading: string; items: string[] }[] }
> = {
  buyer: {
    title: "Let's Get Started on Your Home Search 🏡",
    description:
      "I'll be with you every step of the way to make the process smooth and stress-free.",
    sections: [
      {
        heading: "1. Preparation & Planning",
        items: ["We'll start by reviewing your finances, setting a budget, and identifying your home goals."],
      },
      {
        heading: "2. Mortgage Pre-Approval",
        items: ["You'll connect with a lender, submit documents, and get pre-approved so we know your price range."],
      },
      {
        heading: "3. Home Search",
        items: ["We'll explore neighborhoods, tour homes, and narrow down your top choices based on your needs."],
      },
      {
        heading: "4. Making an Offer",
        items: ["When you find the right home, I'll help you submit a strong offer and negotiate the best terms."],
      },
      {
        heading: "5. Under Contract (Escrow Period)",
        items: ["Once accepted, we'll schedule inspections, submit earnest money, and handle any repair negotiations."],
      },
      {
        heading: "6. Financing & Appraisal",
        items: ["Your lender will finalize your loan and order an appraisal to confirm the home's value."],
      },
      {
        heading: "7. Final Approval & Closing Prep",
        items: ["You'll receive final loan approval, review your closing details, and complete a final walkthrough."],
      },
      {
        heading: "8. Closing Day",
        items: ["You'll sign the paperwork, finalize everything, and officially become a homeowner!"],
      },
      {
        heading: "9. After Closing",
        items: ["Time to move in, set up utilities, and make your new house feel like home."],
      },
    ],
  },
  firstTime: {
    title: "First-Time Buyer Checklist",
    description: "Everything you need to know as a first-time homebuyer.",
    sections: [
      {
        heading: "Get Educated",
        items: [
          "Understand the difference between pre-qualification and pre-approval",
          "Learn about loan types: Conventional, FHA, VA, USDA",
          "Research first-time buyer assistance programs in Texas",
          "Estimate total monthly costs (PITI + HOA + utilities)",
        ],
      },
      {
        heading: "Build Your Team",
        items: [
          "Choose a Realtor experienced with first-time buyers",
          "Select a reputable lender",
          "Identify a home inspector and insurance agent",
        ],
      },
      {
        heading: "Avoid Common Mistakes",
        items: [
          "Don't open new credit lines before closing",
          "Don't change jobs during the loan process",
          "Don't make large purchases or deposits",
          "Always get a home inspection",
        ],
      },
    ],
  },
  moving: {
    title: "Moving & Closing Checklist",
    description: "Stay organized leading up to closing day.",
    sections: [
      {
        heading: "2–4 Weeks Before",
        items: [
          "Book movers or rental truck",
          "Submit address change with USPS",
          "Notify employer, banks, and subscriptions",
          "Transfer or set up utilities at the new home",
        ],
      },
      {
        heading: "1 Week Before",
        items: [
          "Confirm final walk-through with your Realtor",
          "Wire closing funds (verify wiring instructions by phone)",
          "Bring valid government-issued ID to closing",
          "Pack essentials box for first night",
        ],
      },
      {
        heading: "Closing Day",
        items: [
          "Review the Closing Disclosure carefully",
          "Sign all documents and receive keys",
          "Take meter readings at both properties",
          "Celebrate — you're home!",
        ],
      },
    ],
  },
  documents: {
    title: "Important Documents",
    description: "Key documents you'll see during a real estate transaction.",
    sections: [
      {
        heading: "For Buyers",
        items: [
          "Pre-Approval Letter from your lender",
          "One Page Texas Promulgated Contract (TREC 20-17)",
          "Seller's Disclosure Notice",
          "Third Party Financing Addendum",
          "Option Period & Earnest Money receipts",
          "Survey, Title Commitment, and HOA documents",
          "Home Inspection Report",
          "Closing Disclosure (CD)",
        ],
      },
      {
        heading: "For Sellers",
        items: [
          "Listing Agreement (Residential Real Estate Listing)",
          "Seller's Disclosure Notice",
          "Lead-Based Paint Disclosure (homes built pre-1978)",
          "MUD / PID / HOA Addendum (if applicable)",
          "Survey and existing Title Policy",
          "Mortgage Payoff Statement",
          "Closing Disclosure (CD)",
        ],
      },
      {
        heading: "Always Have Ready",
        items: [
          "Government-issued photo ID",
          "Proof of homeowner's insurance",
          "Wiring instructions verified by phone",
          "Most recent utility bills and HOA statements",
        ],
      },
    ],
  },
};

const ResourcesMenu = () => {
  const [open, setOpen] = useState<ResourceKey | null>(null);

  const active = open ? RESOURCES[open] : null;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-base group inline-flex items-center gap-1">
            Resources
            <ChevronDown className="w-4 h-4" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background border-border/50 shadow-xl rounded-xl mt-2 w-64">
          <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Checklists
          </DropdownMenuLabel>
          
          <DropdownMenuItem onSelect={() => setOpen("buyer")} className="cursor-pointer gap-2">
            <ClipboardList className="w-4 h-4 text-primary" /> Home Buyer Checklist
          </DropdownMenuItem>

          {/* UPDATED: Opens in a new tab AND allows download */}
          <DropdownMenuItem className="cursor-pointer gap-2" asChild>
            <a 
              href="./seller-checklist.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Dhruv-Patel-Seller-Checklist.pdf"
              className="flex items-center w-full"
            >
              <Download className="w-4 h-4 text-primary" /> Home Seller Checklist (PDF)
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={() => setOpen("firstTime")} className="cursor-pointer gap-2">
            <ClipboardList className="w-4 h-4 text-primary" /> First-Time Buyer Checklist
          </DropdownMenuItem>
          
          <DropdownMenuItem onSelect={() => setOpen("moving")} className="cursor-pointer gap-2">
            <ClipboardList className="w-4 h-4 text-primary" /> Moving / Closing Checklist
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
            Documents
          </DropdownMenuLabel>
          <DropdownMenuItem onSelect={() => setOpen("documents")} className="cursor-pointer gap-2">
            <FileText className="w-4 h-4 text-primary" /> Important Documents
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.description}</DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[65vh] pr-4">
                <div className="space-y-6 py-2">
                  {active.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="font-semibold text-foreground mb-3 text-base">
                        {section.heading}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResourcesMenu;
