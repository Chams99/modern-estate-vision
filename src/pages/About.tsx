import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Michael Sterling",
      role: "Managing Partner",
      experience: "20+ years in commercial real estate",
      email: "michael@meridiancapital.com"
    },
    {
      name: "Sarah Chen", 
      role: "Investment Director",
      experience: "15+ years in portfolio management",
      email: "sarah@meridiancapital.com"
    },
    {
      name: "David Rodriguez",
      role: "Senior Analyst",
      experience: "12+ years in market analysis", 
      email: "david@meridiancapital.com"
    }
  ];

  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story & Mission
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2008, Meridian Capital has established itself as a trusted partner 
              for sophisticated real estate investments across major metropolitan markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Building Wealth Through Strategic Real Estate
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our investment philosophy is grounded in thorough market analysis, 
                  strategic location selection, and long-term value creation. We focus 
                  on properties with strong fundamentals in growing markets.
                </p>
                <p>
                  With over $2.8 billion in assets under management, we've consistently 
                  delivered above-market returns while maintaining a conservative risk profile 
                  that protects our investors' capital.
                </p>
                <p>
                  Our team combines deep local market knowledge with institutional-grade 
                  investment processes, ensuring every opportunity is thoroughly vetted 
                  and aligned with our strict investment criteria.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2.8B</div>
                <div className="text-muted-foreground">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">18.5%</div>
                <div className="text-muted-foreground">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Investors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced team brings decades of combined expertise in real estate 
              investment, portfolio management, and market analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-muted-foreground mb-6">
                  {member.experience}
                </p>
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;