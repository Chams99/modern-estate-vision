import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

export const Hero = () => {
  const metrics = [
    { icon: Building2, label: "Properties Managed", value: "$2.8B+" },
    { icon: TrendingUp, label: "Average ROI", value: "18.5%" },
    { icon: Users, label: "Satisfied Investors", value: "500+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Premium Real Estate
            <span className="block text-primary-muted">Investment Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Building wealth through strategic property investments. 
            Partner with us for institutional-grade real estate opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-premium group">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Download Prospectus
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-card/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <metric.icon className="h-6 w-6 text-primary-muted" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm font-medium">
                    {metric.label}
                  </span>
                </div>
                <div className="text-3xl font-bold text-primary-foreground">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};