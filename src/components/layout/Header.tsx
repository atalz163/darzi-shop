
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/designs", label: "Designs" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/track", label: "Track Order" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-darzi-taupe">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/darzi-logo.png"
              alt="Darzi Logo"
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-darzi-gold ${
                  isActive(link.path) ? "text-darzi-gold" : "text-darzi-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/order" className="btn-primary">
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-darzi-dark" />
            ) : (
              <Menu className="w-6 h-6 text-darzi-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-darzi-taupe">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-darzi-gold ${
                    isActive(link.path) ? "text-darzi-gold" : "text-darzi-dark"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/order"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center"
              >
                Order Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
