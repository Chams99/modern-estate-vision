import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  Building2, 
  BarChart3,
  Globe,
  Zap
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Advanced analytics and market research to identify high-growth opportunities.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for all investments.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Data-driven investment strategies tailored to market conditions and trends.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Investor Relations",
      description: "Transparent communication and regular updates on portfolio performance.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Building2,
      title: "Property Management",
      description: "Professional management services ensuring optimal property performance.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time tracking and comprehensive reporting on investment returns.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Diversified portfolio across major metropolitan markets worldwide.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Embracing cutting-edge technology and sustainable development practices.",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="section-modern bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03)_0px,transparent_50px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03)_0px,transparent_50px)]" />
      
      <div className="container-modern relative">
        {/* Enhanced Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
            <span className="block">Why Investors</span>
            <span className="block heading-gradient">Choose Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
            Our comprehensive approach to real estate investment combines market expertise, 
            risk management, and innovative strategies to deliver exceptional returns.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="card-glass p-8 text-center relative h-full group-hover:shadow-hover transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Enhanced Icon Container */}
                <div className={`relative mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Enhanced Hover Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
