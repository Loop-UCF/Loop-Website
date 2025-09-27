import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import loopLogo from 'figma:asset/4d0ebd8c9a2240a718089f1af143edf6722409c1.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ucfloop@gmail.com', label: 'Email' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ 
                  rotateY: [0, 180, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <img
                  src={loopLogo}
                  alt="Loop Logo"
                  className="h-10 w-auto"
                />
              </motion.div>
              <div>
                <span className="text-2xl">Loop</span>
                <div className="text-blue-400 text-sm">UCF Product Management</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              UCF's premier student organization for product management and technology innovation. 
              Connecting minds, building products, shaping the future.
            </p>
            
            {/* Quick Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                  required
                />
                <Button 
                  type="submit"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  {isSubscribed ? '✓' : 'Subscribe'}
                </Button>
              </form>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Events', href: '#events' },
                { name: 'Officers', href: '#officers' },
                { name: 'Join Us', href: '#join' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 text-blue-400">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href="mailto:ucfloop@gmail.com" className="hover:text-blue-400 transition-colors">
                  ucfloop@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>University of Central Florida</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-3">📍</span>
                <span>Orlando, FL 32816</span>
              </div>
            </div>

            {/* Meeting Info */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-lg border border-blue-800/30">
              <h5 className="text-blue-300 mb-2">Weekly Meetings</h5>
              <p className="text-gray-300 text-sm">Thursdays at 7:00 PM</p>
              <p className="text-gray-300 text-sm">Student Union, Room 316</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Loop UCF. All rights reserved.
            </p>
            <span className="text-gray-600 hidden md:inline">•</span>
            <p className="text-gray-400 text-sm">
              Proudly part of the University of Central Florida
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Code of Conduct
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Student Org Policies
            </a>
          </div>
        </div>

        {/* UCF Acknowledgment */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Loop is a registered student organization at the University of Central Florida
          </p>
        </div>
      </div>
    </footer>
  );
}