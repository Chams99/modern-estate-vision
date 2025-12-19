import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

export const Hero = () => {
  const metrics = [
    {
      icon: Building2,
      label: "Properties Managed",
      value: "$2.8B+",
      description: "Total portfolio value",
    },
    {
      icon: TrendingUp,
      label: "Average ROI",
      value: "18.5%",
      description: "Annual returns",
    },
    {
      icon: Users,
      label: "Satisfied Investors",
      value: "500+",
      description: "Active partnerships",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Enhanced Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Enhanced Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float" />
      </div>

      {/* Enhanced Content */}
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-glass backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              Premium Investment Solutions
            </span>
          </div>

          {/* Enhanced Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-tight animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="block">Premium Real Estate</span>
            <span className="block heading-gradient">Investment Solutions</span>
          </h1>

          {/* Enhanced Subtitle */}
          <p
            className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-12 max-w-3xl leading-relaxed animate-fade-in-up text-balance"
            style={{ animationDelay: "400ms" }}
          >
            Building wealth through strategic property investments. Partner with
            us for institutional-grade real estate opportunities that deliver
            consistent, above-market returns.
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 mb-20 animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="btn-modern bg-gradient-primary hover:bg-gradient-primary/90 shadow-premium hover:shadow-hover group text-lg px-8 py-6 h-auto"
            >
              <span className="relative z-10">Explore Opportunities</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-modern border-primary/40 text-primary/90 hover:bg-primary/20 hover:border-primary hover:text-primary backdrop-blur-sm text-lg px-8 py-6 h-auto group"
            >
              <span className="relative z-10">Download Prospectus</span>
              <div className="ml-3 w-6 h-6 rounded-full border-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
            </Button>
          </div>

          {/* Enhanced Metrics Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${1000 + index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-glass group-hover:shadow-hover transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2" />
                <div className="relative p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-primary/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <metric.icon className="h-7 w-7 text-primary-muted" />
                    </div>
                    <div>
                      <span className="text-primary-foreground/80 text-sm font-medium block">
                        {metric.label}
                      </span>
                      <span className="text-primary-foreground/60 text-xs">
                        {metric.description}
                      </span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary-foreground group-hover:text-primary transition-colors duration-300">
                    {metric.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
