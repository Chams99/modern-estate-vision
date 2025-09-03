import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, MapPin, DollarSign, TrendingUp, Calendar, Eye } from "lucide-react";
import portfolioImage from "@/assets/portfolio-showcase.jpg";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const properties = [
    {
      id: 1,
      name: "Metropolitan Office Tower",
      location: "Downtown Seattle, WA",
      type: "Commercial Office",
      value: "$45.2M",
      roi: "22.3%",
      acquired: "2022",
      status: "Active"
    },
    {
      id: 2,
      name: "Luxury Residential Complex",
      location: "Austin, TX", 
      type: "Multi-Family",
      value: "$32.8M",
      roi: "19.7%",
      acquired: "2021",
      status: "Active"
    },
    {
      id: 3,
      name: "Tech Campus Development",
      location: "Denver, CO",
      type: "Mixed-Use",
      value: "$78.5M", 
      roi: "16.2%",
      acquired: "2023",
      status: "Development"
    },
    {
      id: 4,
      name: "Retail Distribution Center",
      location: "Phoenix, AZ",
      type: "Industrial",
      value: "$28.9M",
      roi: "18.9%",
      acquired: "2022",
      status: "Active"
    }
  ];

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app would validate against backend
    if (password === "investor2024") {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div>
        <Navigation />
        
        {/* Password Protection Screen */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-secondary">
          <Card className="w-full max-w-md p-8 shadow-premium">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Portfolio Access
              </h1>
              <p className="text-muted-foreground">
                This section contains confidential investment information. 
                Please enter your access credentials to continue.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <Label htmlFor="password">Access Code</Label>
                <Input
                  id="password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter portfolio access code"
                  className="mt-2"
                />
                <p className="text-xs text-primary mt-1 text-center">
                  💡 Test Password: <strong>investor2024</strong>
                </p>
              </div>
              
              <Button type="submit" className="w-full shadow-elegant">
                Access Portfolio
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Don't have access? <span className="text-primary cursor-pointer">Contact us</span> to request investor credentials.
              </p>
            </form>
          </Card>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Investment Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our current portfolio of premium commercial and residential properties 
              across major metropolitan markets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${portfolioImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-hero opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {property.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {property.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      Acquired {property.acquired}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Property Value
                      </div>
                      <div className="font-semibold text-foreground">{property.value}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-muted-foreground text-sm mb-1">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Current ROI
                      </div>
                      <div className="font-semibold text-primary">{property.roi}</div>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full group">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{property.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div 
                          className="h-48 bg-cover bg-center rounded-lg"
                          style={{ backgroundImage: `url(${portfolioImage})` }}
                        />
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Property Details</h4>
                            <div className="space-y-2 text-sm">
                              <div><strong>Type:</strong> {property.type}</div>
                              <div><strong>Location:</strong> {property.location}</div>
                              <div><strong>Acquired:</strong> {property.acquired}</div>
                              <div><strong>Status:</strong> {property.status}</div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Financial Metrics</h4>
                            <div className="space-y-2 text-sm">
                              <div><strong>Current Value:</strong> {property.value}</div>
                              <div><strong>ROI:</strong> {property.roi}</div>
                              <div><strong>Occupancy:</strong> 94%</div>
                              <div><strong>Cap Rate:</strong> 6.8%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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

export default Portfolio;