"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(20);
  const [downPaymentType, setDownPaymentType] = useState<"%" | "$">("%");
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [propertyTaxType, setPropertyTaxType] = useState<"%" | "$">("%");
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [hoaFees, setHoaFees] = useState(0);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const calculatorSection = document.getElementById("calculator");
      if (!calculatorSection) return;
      const rect = calculatorSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateMortgage = () => {
    const downPaymentValue = downPaymentType === "%" ? (homePrice * downPayment) / 100 : downPayment;
    const principal = homePrice - downPaymentValue;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPrincipalAndInterest =
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyPropertyTax =
      propertyTaxType === "%" ? (homePrice * (propertyTax / 100)) / 12 : propertyTax / 12;

    const monthlyInsurance = homeInsurance / 12;
    const monthlyHOA = hoaFees;

    const totalMonthlyPayment =
      monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA;

    const totalPayment = monthlyPrincipalAndInterest * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: totalMonthlyPayment,
      principalAndInterest: monthlyPrincipalAndInterest,
      propertyTax: monthlyPropertyTax,
      insurance: monthlyInsurance,
      hoa: monthlyHOA,
      totalInterest,
      totalPayment,
      loanAmount: principal,
      downPaymentValue,
    };
  };

  const results = calculateMortgage();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  return (
    <section id="calculator" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">Mortgage Calculator</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Estimate your monthly mortgage payment with real-time results and an easy-to-use interface.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left - Input Section */}
          <Card className="border shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-sans text-lg">
                <Calculator className="w-5 h-5 text-primary" /> Loan Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* Home Price */}
              <div>
                <Label htmlFor="homePrice" className="text-base font-semibold">Home Price</Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="mt-2 h-12 text-lg rounded-lg"
                />
              </div>

              {/* Down Payment */}
              <div>
                <Label htmlFor="downPayment" className="text-base font-semibold">Down Payment</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="downPayment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="h-12 text-lg rounded-lg flex-1"
                  />
                  <select
                    value={downPaymentType}
                    onChange={(e) => setDownPaymentType(e.target.value as "%" | "$")}
                    className="h-12 rounded-lg border border-border px-3"
                  >
                    <option value="%">%</option>
                    <option value="$">$</option>
                  </select>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {formatCurrency(results.downPaymentValue)}
                </p>
              </div>

              {/* Interest Rate */}
              <div>
                <Label htmlFor="interestRate" className="text-base font-semibold">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2 h-12 text-lg rounded-lg"
                />
              </div>

              {/* Loan Term */}
              <div>
                <Label htmlFor="loanTerm" className="text-base font-semibold">Loan Term (Years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="mt-2 h-12 text-lg rounded-lg"
                />
              </div>

              {/* Property Tax */}
              <div>
                <Label htmlFor="propertyTax" className="text-base font-semibold">Annual Property Tax</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="propertyTax"
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="h-12 text-lg rounded-lg flex-1"
                  />
                  <select
                    value={propertyTaxType}
                    onChange={(e) => setPropertyTaxType(e.target.value as "%" | "$")}
                    className="h-12 rounded-lg border border-border px-3"
                  >
                    <option value="%">%</option>
                    <option value="$">$</option>
                  </select>
                </div>
              </div>

              {/* Home Insurance */}
              <div>
                <Label htmlFor="homeInsurance" className="text-base font-semibold">Annual Home Insurance</Label>
                <Input
                  id="homeInsurance"
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  className="mt-2 h-12 text-lg rounded-lg"
                />
              </div>

              {/* HOA Fees */}
              <div>
                <Label htmlFor="hoaFees" className="text-base font-semibold">Monthly HOA Fees</Label>
                <Input
                  id="hoaFees"
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                  className="mt-2 h-12 text-lg rounded-lg"
                />
              </div>

            </CardContent>
          </Card>

          {/* Right - Results Section */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-none shadow-md rounded-2xl">
              <CardContent className="pt-6 text-center">
                <p className="text-base mb-2 font-semibold">Estimated Monthly Payment</p>
                <p className="text-4xl font-bold font-sans">{formatCurrency(results.monthlyPayment)}</p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="font-sans text-lg">Payment Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Principal & Interest</span>
                  <span className="font-semibold">{formatCurrency(results.principalAndInterest)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Property Tax</span>
                  <span className="font-semibold">{formatCurrency(results.propertyTax)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Home Insurance</span>
                  <span className="font-semibold">{formatCurrency(results.insurance)}</span>
                </div>
                {results.hoa > 0 && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">HOA Fees</span>
                    <span className="font-semibold">{formatCurrency(results.hoa)}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="font-sans text-lg">Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Loan Amount</span>
                  <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Total Interest Paid</span>
                  <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
                </div>
                <div className="flex justify-between py-2 border-t pt-4">
                  <span className="text-muted-foreground font-semibold">Total Amount Paid</span>
                  <span className="font-bold text-lg">{formatCurrency(results.totalPayment)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
