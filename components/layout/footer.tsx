import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              WebCraft<span className="text-blue-500">Studio</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              We build stunning, custom websites that help businesses stand out and grow online.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-muted-foreground hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-blue-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#custom-design" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Custom Website Design
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services#portfolio" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Portfolio Websites
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  SEO & Performance
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-blue-500" />
                <span className="text-muted-foreground">123 Web Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500" />
                <span className="text-muted-foreground">hello@webcraftstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-muted-foreground">
          <p>&copy; {currentYear} WebCraftStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}