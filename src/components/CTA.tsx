import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

export const CTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (206) 555-0100",
      action: "Call Now",
      href: "tel:+12065550100"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "info@meridiancapital.com",
      action: "Send Email",
      href: "mailto:info@meridiancapital.com"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      action: "Book Now",
      href: "#"
    }
  ];

  return (
    <section className="section-modern bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1)_0px,transparent_100px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1)_0px,transparent_100px)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container-modern relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in-up">
              <span className="block">Ready to Start</span>
              <span className="block heading-gradient">Your Investment Journey?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up text-balance" style={{ animationDelay: '200ms' }}>
              Take the first step towards building your real estate portfolio. Our team of experts 
              is ready to guide you through every aspect of your investment journey.
            </p>

            {/* Enhanced Main CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Button 
                size="lg" 
                className="btn-modern bg-gradient-primary hover:bg-gradient-primary/90 shadow-premium hover:shadow-hover group text-lg px-10 py-6 h-auto"
              >
                <span className="relative z-10">Start Investing Today</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-modern border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6 h-auto group"
              >
                <span className="relative z-10">Download Investment Guide</span>
                <div className="ml-3 w-6 h-6 rounded-full border-2 border-primary group-hover:border-primary-foreground transition-colors duration-300" />
              </Button>
            </div>
          </div>

          {/* Enhanced Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className="card-glass p-8 text-center relative h-full group-hover:shadow-hover transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                  {/* Enhanced Icon Container */}
                  <div className="relative mx-auto w-16 h-16 bg-gradient-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8 text-primary" />
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {method.description}
                  </p>
                  
                  <a
                    href={method.href}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-300 group-hover:underline underline-offset-4"
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  {/* Enhanced Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            <p className="text-muted-foreground text-lg mb-6">
              Trusted by leading institutions and individual investors worldwide
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[
                "SEC Registered",
                "FINRA Member",
                "BBB Accredited",
                "ISO 27001 Certified"
              ].map((badge, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-foreground"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
