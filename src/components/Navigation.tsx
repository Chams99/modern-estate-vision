import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-premium transition-all duration-300 group-hover:scale-110">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                Meridian Capital
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
                REAL ESTATE INVESTMENT
              </span>
            </div>
          </NavLink>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-primary" : "text-muted-foreground"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button
              variant="default"
              size="sm"
              className="btn-modern shadow-elegant hover:shadow-premium bg-gradient-primary hover:bg-gradient-primary/90"
            >
              Work With Us
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-muted/50 rounded-lg"
            >
              <div
                className={`transition-all duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-border/50 space-y-4">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4">
              <Button
                variant="default"
                size="sm"
                className="w-full btn-modern bg-gradient-primary hover:bg-gradient-primary/90 shadow-elegant hover:shadow-premium"
              >
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
