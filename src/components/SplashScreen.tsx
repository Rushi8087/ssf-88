import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Determine screen size once on mount to avoid mixed-unit animation jumps
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    // Hide the entire splash screen after the animation sequence completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {dimensions.width > 0 && (
            <motion.div
              className="bg-[#0A0E2E] flex items-center justify-center relative overflow-hidden shadow-2xl"
              initial={{ width: 160, height: 90, borderRadius: 8 }}
              animate={{ 
                width: dimensions.width, 
                height: dimensions.height,
                borderRadius: 0
              }}
              transition={{ 
                delay: 1.0,
                duration: 1.0, 
                ease: [0.76, 0, 0.24, 1] 
              }}
            >
              <motion.div
                className="text-white font-anton text-3xl tracking-[0.2em] absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.0, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
              >
                SSF
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
