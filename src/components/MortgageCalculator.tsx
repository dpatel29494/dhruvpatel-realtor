import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [hoaFees, setHoaFees] = useState(0);

  const calculateMortgage = () => {
    const principal = homePrice - (homePrice * downPayment) / 100;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPrincipalAndInterest =
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const monthlyPropertyTax = (homePrice * (propertyTax / 100)) / 12;
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
    };
  };

  const results = calculateMortgage();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mortgage Calculator
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estimate your monthly mortgage payment and plan your budget
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-playfair">
                <Calculator className="w-6 h-6 text-accent" />
                Loan Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="homePrice" className="text-base font-semibold">
                  Home Price
                </Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="downPayment" className="text-base font-semibold">
                  Down Payment (%)
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                  min="0"
                  max="100"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {formatCurrency((homePrice * downPayment) / 100)}
                </p>
              </div>

              <div>
                <Label htmlFor="interestRate" className="text-base font-semibold">
                  Interest Rate (%)
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="loanTerm" className="text-base font-semibold">
                  Loan Term (Years)
                </Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="propertyTax" className="text-base font-semibold">
                  Annual Property Tax (%)
                </Label>
                <Input
                  id="propertyTax"
                  type="number"
                  step="0.1"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="homeInsurance" className="text-base font-semibold">
                  Annual Home Insurance
                </Label>
                <Input
                  id="homeInsurance"
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                />
              </div>

              <div>
                <Label htmlFor="hoaFees" className="text-base font-semibold">
                  Monthly HOA Fees
                </Label>
                <Input
                  id="hoaFees"
                  type="number"
                  value={hoaFees}
                  onChange={(e) => setHoaFees(Number(e.target.value))}
                  className="mt-2 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-accent text-accent-foreground border-2 border-accent">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-lg mb-2 font-semibold">Estimated Monthly Payment</p>
                  <p className="text-5xl font-bold font-playfair">
                    {formatCurrency(results.monthlyPayment)}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="font-playfair">Payment Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Principal & Interest</span>
                  <span className="font-semibold">{formatCurrency(results.principalAndInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Property Tax</span>
                  <span className="font-semibold">{formatCurrency(results.propertyTax)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Home Insurance</span>
                  <span className="font-semibold">{formatCurrency(results.insurance)}</span>
                </div>
                {results.hoa > 0 && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">HOA Fees</span>
                    <span className="font-semibold">{formatCurrency(results.hoa)}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="font-playfair">Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Loan Amount</span>
                  <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Total Interest Paid</span>
                  <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t-2 pt-4">
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
