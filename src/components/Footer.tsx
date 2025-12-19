import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0px,transparent_50px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0px,transparent_50px)]" />

      <div className="container-modern relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-bold text-lg">
                    MC
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">Meridian Capital</span>
                <span className="text-background/60 text-sm font-medium tracking-wider">
                  REAL ESTATE INVESTMENT
                </span>
              </div>
            </div>

            <p className="text-background/80 mb-8 max-w-lg leading-relaxed text-lg">
              We are a boutique real estate investment firm that combines deep
              market knowledge with innovative strategies to deliver exceptional
              returns for our investors.
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/80 group-hover:text-background transition-colors duration-300">
                  1200 Fifth Avenue, Suite 1800, Seattle, WA 98101
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/80 group-hover:text-background transition-colors duration-300">
                  +1 (206) 555-0100
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/80 group-hover:text-background transition-colors duration-300">
                  info@meridiancapital.com
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-background">
              Quick Links
            </h3>
            <div className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
                { name: "Investment Guide", path: "/guide" },
                { name: "Market Insights", path: "/insights" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block text-background/70 hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Services */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-background">
              Investment Focus
            </h3>
            <div className="space-y-4">
              {[
                "Commercial Office",
                "Multi-Family Residential",
                "Mixed-Use Development",
                "Industrial Properties",
                "Retail Centers",
                "Hospitality Assets",
              ].map((service, index) => (
                <div
                  key={index}
                  className="text-background/70 hover:text-primary transition-colors duration-300 cursor-pointer group"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4 text-background">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-background/10 hover:bg-primary/20 rounded-xl transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-background/70 group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-background/20 pt-8 pb-6 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 lg:mb-0">
            © {currentYear} Meridian Capital. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Investor Relations",
              "Cookie Policy",
              "Accessibility",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-background/60 hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground rounded-full shadow-premium hover:shadow-hover transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};
