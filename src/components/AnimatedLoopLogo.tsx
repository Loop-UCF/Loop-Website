import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import loopLogo from 'figma:asset/4d0ebd8c9a2240a718089f1af143edf6722409c1.png';

export default function AnimatedLoopLogo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger opening animation after component mounts
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Möbius strip wave animation for the L
  const mobiusVariants = {
    animate: {
      rotateY: [0, 180, 360],
      rotateX: [0, 15, -15, 0],
      scale: [1, 1.05, 0.95, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Left to right opening animation
  const containerVariants = {
    closed: {
      clipPath: "inset(0 100% 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    open: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="flex items-center gap-2"
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        {/* Your Loop logo with Möbius strip movement */}
        <motion.div
          variants={mobiusVariants}
          animate="animate"
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={loopLogo}
            alt="Loop Logo"
            className="w-80 h-auto drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}