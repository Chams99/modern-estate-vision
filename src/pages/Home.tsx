import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CompanyOverview } from "@/components/CompanyOverview";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CompanyOverview />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;