import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Award, ArrowRight, Sparkles } from "lucide-react";

export const CompanyOverview = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Full transparency in all investments with detailed reporting and regular updates.",
      highlight: "100% Transparent",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description:
        "Data-driven investment strategies focusing on high-growth metropolitan markets.",
      highlight: "Data-Driven",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "15+ years of consistent returns with a track record of successful property investments.",
      highlight: "15+ Years",
    },
  ];

  return (
    <section className="section-modern bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0px,transparent_50px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0px,transparent_50px)]" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative">
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-glass backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Why Choose Meridian Capital
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="block">Building Tomorrow's</span>
            <span className="block heading-gradient">
              Real Estate Portfolio
            </span>
          </h2>

          <p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up text-balance"
            style={{ animationDelay: "400ms" }}
          >
            Our expertise lies in identifying undervalued properties with high
            growth potential. We leverage market insights and strategic
            partnerships to create exceptional value for our investors through
            carefully curated real estate portfolios.
          </p>
        </div>

        {/* Enhanced Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="card-glass p-10 text-center relative h-full group-hover:shadow-hover transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Enhanced Icon Container */}
                <div className="relative mx-auto w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="h-10 w-10 text-primary-foreground" />
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                </div>

                {/* Enhanced Highlight Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-6">
                  {value.highlight}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {value.description}
                </p>

                {/* Enhanced Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "1200ms" }}
        >
          <Button
            size="lg"
            variant="outline"
            className="btn-modern group shadow-elegant hover:shadow-premium text-lg px-10 py-6 h-auto border-2 border-primary hover:border-primary/80"
          >
            <span className="relative z-10">Learn More About Us</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "$2.8B+", label: "Portfolio Value" },
            { number: "500+", label: "Happy Investors" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${1400 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
