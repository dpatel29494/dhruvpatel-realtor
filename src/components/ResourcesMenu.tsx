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
import { ChevronDown, ClipboardList, FileText, CheckCircle2 } from "lucide-react";

type ResourceKey =
  | "buyer"
  | "seller"
  | "firstTime"
  | "moving"
  | "documents";

const RESOURCES: Record<
  ResourceKey,
  { title: string; description: string; sections: { heading: string; items: string[] }[] }
> = {
  buyer: {
    title: "Home Buyer Checklist",
    description: "A step-by-step guide to buying your next home.",
    sections: [
      {
        heading: "Before You Shop",
        items: [
          "Review your credit report and improve your score",
          "Determine your budget and monthly payment comfort zone",
          "Save for down payment, closing costs, and reserves",
          "Get pre-approved with a trusted lender",
          "Make a list of must-haves vs. nice-to-haves",
        ],
      },
      {
        heading: "While Shopping",
        items: [
          "Tour homes with your Realtor",
          "Research neighborhoods, schools, and commute times",
          "Compare property taxes and HOA fees",
          "Check recent comparable sales",
        ],
      },
      {
        heading: "Under Contract",
        items: [
          "Submit earnest money",
          "Order home inspection and review report",
          "Complete appraisal through your lender",
          "Finalize loan and homeowner's insurance",
          "Schedule final walk-through before closing",
        ],
      },
    ],
  },
  seller: {
    title: "Home Seller Checklist",
    description: "Maximize your home's value and sell with confidence.",
    sections: [
      {
        heading: "Prepare to List",
        items: [
          "Meet with your Realtor for a market analysis",
          "Declutter and depersonalize each room",
          "Complete minor repairs and touch-up paint",
          "Deep clean carpets, windows, and exterior",
          "Stage rooms to highlight space and light",
        ],
      },
      {
        heading: "Marketing & Showings",
        items: [
          "Professional photos and virtual tour",
          "MLS listing and online syndication",
          "Open houses and private showings",
          "Review and negotiate offers",
        ],
      },
      {
        heading: "Closing",
        items: [
          "Cooperate with buyer's inspection and appraisal",
          "Negotiate any repair requests",
          "Gather warranties, manuals, and keys",
          "Schedule movers and utility transfers",
          "Sign closing documents",
        ],
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
          <DropdownMenuItem onSelect={() => setOpen("seller")} className="cursor-pointer gap-2">
            <ClipboardList className="w-4 h-4 text-primary" /> Home Seller Checklist
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
