import { motion } from 'motion/react';
import loopLogo from 'figma:asset/4d0ebd8c9a2240a718089f1af143edf6722409c1.png';

export default function Header() {
  const logoVariants = {
    animate: {
      rotateY: [0, 180, 360],
      rotateX: [0, 5, -5, 0],
      scale: [1, 1.02, 0.98, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              variants={logoVariants}
              animate="animate"
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={loopLogo}
                alt="Loop Logo"
                className="h-10 w-auto"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl text-gray-900 tracking-tight">Loop</span>
              <span className="text-xs text-blue-600 tracking-wide">UCF Product Management</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#events" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Events
            </a>
            <a href="#officers" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Officers
            </a>
            <a href="#join" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Join Us
            </a>
          </nav>

          {/* CTA Button */}
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/25"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Community
          </motion.button>
        </div>
      </div>
    </header>
  );
}