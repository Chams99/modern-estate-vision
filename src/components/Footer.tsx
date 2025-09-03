import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">RE</span>
              </div>
              <span className="font-semibold text-xl">Meridian Capital</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Premium real estate investment firm specializing in commercial and residential 
              properties across major metropolitan markets. Building wealth through strategic 
              property investments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">1200 Fifth Avenue, Suite 1800, Seattle, WA 98101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/80">+1 (206) 555-0100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80">info@meridiancapital.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="/" className="block text-background/80 hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="block text-background/80 hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/portfolio" className="block text-background/80 hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="/contact" className="block text-background/80 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Investment Focus</h3>
            <div className="space-y-3">
              <div className="text-background/80">Commercial Office</div>
              <div className="text-background/80">Multi-Family Residential</div>
              <div className="text-background/80">Mixed-Use Development</div>
              <div className="text-background/80">Industrial Properties</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm">
            © 2024 Meridian Capital. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Investor Relations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};