import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darzi-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <img
              src="/darzi-logo-footer.png"
              alt="Darzi Logo"
              className="h-34 w-auto mb-4"
            />
          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-darzi-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/designs"
                  className="text-gray-300 hover:text-darzi-gold transition-colors"
                >
                  Designs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-darzi-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-darzi-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/order"
                  className="text-gray-300 hover:text-darzi-gold transition-colors"
                >
                  Place Order
                </Link>
              </li>
              <li>
                <Link
                  to="/track"
                  className="text-gray-300 hover:text-darzi-gold transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <span className="text-gray-300">Custom Tailoring</span>
              </li>
              <li>
                <span className="text-gray-300">Worldwide Delivery</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+93 XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@darzi.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Worldwide Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Darzi. All rights reserved.</p>
          <p className="mt-2">Delivery time: 10 days to 2 weeks</p>
        </div>
      </div>
    </footer>
  );
};
