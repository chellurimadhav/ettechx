import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Conference", href: "#conference" },
    { name: "Why Visit", href: "#why-visit" },
    { name: "Why Exhibit", href: "#why-exhibit" },
    { name: "Blog", href: "#blog" },
    { name: "Glimpse", href: "#glimpse" },
  ];

  const exhibitorLinks = [
    { name: "Exhibitor Registration", href: "#" },
    { name: "Exhibitor Profile", href: "#" },
    { name: "Why Exhibit?", href: "#why-exhibit" },
    { name: "Sponsorship", href: "#" },
    { name: "Stand Info", href: "#" },
  ];

  const usefulLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "GDPR Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg" />
                <div className="absolute inset-1 bg-foreground rounded-md flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">ET</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-background">
                  ET TECH <span className="text-primary">X</span>
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              A pioneering company dedicated to promoting excellence in education through innovative solutions and platforms. Edu Expo Global Pvt Ltd unites key figures in Education Technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6 text-background">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6 text-background">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-background/70">
                  <p className="font-semibold mb-2">Hyderabad Office:</p>
                  <p>
                    EDU EXPO GLOBAL PVT LTD<br />
                    Plot No. 47, PAR Richmond Park,<br />
                    Kondapur, Hyderabad, Telangana - 500084, India
                  </p>
                  <p className="font-semibold mt-4 mb-2">Noida Office:</p>
                  <p>
                    EDU EXPO GLOBAL PVT LTD<br />
                    B-820, 8th Floor, Tower-B, Noida One IT Park,<br />
                    Sector-62, Noida – 201309, India
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919346407359"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  +91-9346407359
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:ettechx@ettechx.com"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  ettechx@ettechx.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Exhibitor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6 text-background">Exhibitor</h3>
            <ul className="space-y-3">
              {exhibitorLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-display font-semibold text-lg mb-6 text-background">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60 text-center md:text-left">
            © 2025 ET TECH X. All rights reserved. | Edu Expo Global Pvt Ltd
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;