import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["1200 Fifth Avenue", "Suite 1800", "Seattle, WA 98101"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (206) 555-0100", "Investment Inquiries: Ext. 1", "General Info: Ext. 2"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@meridiancapital.com", "investments@meridiancapital.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"]
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to explore investment opportunities? Our team is here to discuss 
              how we can help you build wealth through strategic real estate investments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="p-8 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="investmentAmount">Investment Interest</Label>
                  <Input id="investmentAmount" placeholder="$500K - $1M" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your investment goals and interests..." 
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-elegant">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Reach out to discuss investment opportunities, schedule a consultation, 
                  or learn more about our portfolio. We're committed to providing 
                  personalized service to each of our investors.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-card">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-muted-foreground">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-4">Our Location</h3>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Interactive Map</p>
                    <p className="text-sm">1200 Fifth Avenue, Seattle, WA</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;