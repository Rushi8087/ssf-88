// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Permanent Right Blue Line */}
      <div className="fixed top-0 right-0 bottom-0 w-2 lg:w-4 bg-[#1B30D6] z-40 pointer-events-none" />

      {/* SSF Logo (Top Left) */}
      <div className="fixed top-6 left-6 lg:left-10 z-[52] flex items-center pointer-events-none">
        <Link to="/" className="flex flex-col items-center justify-center pointer-events-auto group bg-[#0A0E2E] px-4 pt-3 pb-2 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-105">
          <span className="text-white font-anton text-[28px] lg:text-[34px] leading-none tracking-wide">SSF</span>
          <div className="w-full h-[2.5px] bg-[#E8C84A] mt-[3px] scale-x-100 transition-transform duration-300 origin-center group-hover:scale-x-0" />
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="fixed top-6 right-6 lg:right-10 z-50 flex justify-end items-center pointer-events-none">
        <div className="pointer-events-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-[#0A0E2E]/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[45vw] bg-[#1B30D6] z-[60] flex flex-col pt-24 px-10 md:px-16 lg:px-20 pb-10 overflow-y-auto"
            >
              <div className="absolute top-6 right-6 lg:right-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-sm bg-transparent border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="mb-6 uppercase tracking-widest text-xs font-bold text-white/70">
                  Sport Spirit Fed
                </div>

                <nav className="flex flex-col gap-5 mb-10">
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'About', path: '/about' },
                    { label: 'Services', path: '/services' },
                    { label: 'Properties', path: '/properties' },
                    { label: 'Celebrities', path: '/celebrities' },
                    { label: 'Sponsors & Partners', path: '/sponsors' },
                    { label: 'Future Projects', path: '/pipeline' },
                    { label: 'Invest', path: '/invest' }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + (idx * 0.05) }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="font-anton text-4xl md:text-5xl text-white hover:text-white/80 transition-colors duration-300 block tracking-wide"
                      >
                        {item.label.toUpperCase()}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <nav className="flex flex-col gap-4 mt-auto mb-16">
                  {[
                    { label: 'Contact', path: '/contact' }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + (idx * 0.05) }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="font-inter font-bold text-lg md:text-xl text-white hover:text-white/80 transition-colors duration-300 block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <Link 
                    to="/invest"
                    onClick={() => setIsOpen(false)}
                    className="bg-white text-[#1B30D6] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                  >
                    Invest Now
                  </Link>
                  <Link 
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent text-white border border-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
