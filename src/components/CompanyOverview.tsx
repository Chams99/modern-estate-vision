import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Award, ArrowRight } from "lucide-react";

export const CompanyOverview = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Full transparency in all investments with detailed reporting and regular updates."
    },
    {
      icon: Target,
      title: "Strategic Focus", 
      description: "Data-driven investment strategies focusing on high-growth metropolitan markets."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "15+ years of consistent returns with a track record of successful property investments."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building Tomorrow's
            <span className="block text-primary">Real Estate Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Meridian Capital specializes in identifying and acquiring premium commercial and 
            residential properties that deliver consistent, above-market returns for our investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group shadow-elegant">
            Learn More About Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};