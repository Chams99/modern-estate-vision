import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CompanyOverview } from "@/components/CompanyOverview";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <CompanyOverview />
      <Footer />
    </div>
  );
};

export default Home;