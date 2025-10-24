import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import FeaturedProperties from "@/components/FeaturedProperties";
import MortgageCalculator from "@/components/MortgageCalculator";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutMe />
      {/* <FeaturedProperties /> */}
      <MortgageCalculator />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
