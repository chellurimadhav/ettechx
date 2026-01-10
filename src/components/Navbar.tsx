import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Conference", href: "#conference" },
  { name: "Why Visit", href: "#why-visit" },
  { name: "Why Exhibit", href: "#why-exhibit" },
  { name: "Blog", href: "#blog" },
  { name: "Glimpse", href: "#glimpse" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919346407359" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+91-9346407359</span>
            </a>
            <a href="mailto:ettechx@ettechx.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">ettechx@ettechx.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span className="text-xs sm:text-sm">11-12-13 December 2025 • HITEX Exhibition Centre, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md" />
                <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm md:text-base">ET</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl tracking-wide text-foreground">
                  ET TECH <span className="text-primary">X</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  Education & Technology Expo
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                onClick={() => {
                  const event = new CustomEvent('openRegistration');
                  window.dispatchEvent(event);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
                Visitor Registration
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    const event = new CustomEvent('openRegistration');
                    window.dispatchEvent(event);
                  }}
                  className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                >
                  Visitor Registration
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;