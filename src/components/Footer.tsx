// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, RadioTower } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-deep-navy">
      <div className="absolute inset-0 bg-[radial-gradient(#1B30D6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      
      <div className="relative z-10 max-w-[90rem] mx-auto w-full pt-16 px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <h2 className="text-pure-white font-anton text-[40px] leading-none">SSF</h2>
            <div className="w-[40px] h-[3px] bg-gold-accent my-4" />
            <p className="font-barlow text-pure-white text-[14px]">Your Sports Wealth Developers.</p>
            <p className="font-barlow text-[#A0AACC] text-[12px] tracking-wide mt-1">Sports. Media. Technology. Investment.</p>
            <p className="font-barlow text-[#A0AACC] text-[12px] tracking-wide mt-4">Dubai, United Arab Emirates</p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Linkedin, Twitter, RadioTower].map((Icon, idx) => (
                <div key={idx} className="w-8 h-8 rounded-full border border-pure-white/20 flex items-center justify-center text-pure-white hover:border-gold-accent hover:text-gold-accent transition-colors duration-300 cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-barlow text-[10px] tracking-[0.2em] text-gold-accent uppercase mb-4">QUICK LINKS</h3>
            <ul className="flex flex-col gap-2">
              {[
                { name: 'About SSF', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Sports Properties', path: '/properties' },
                { name: 'Celebrities', path: '/celebrities' },
                { name: 'Sponsors & Partners', path: '/sponsors' },
                { name: 'Future Projects', path: '/pipeline' },
                { name: 'Investors', path: '/invest' },
                { name: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="font-barlow text-[13px] text-[#A0AACC] hover:text-gold-accent transition-colors flex items-center gap-2 group">
                    <span className="text-[14px] leading-none mb-[2px] group-hover:translate-x-1 transition-transform">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Properties */}
          <div className="flex flex-col">
            <h3 className="font-barlow text-[10px] tracking-[0.2em] text-gold-accent uppercase mb-4">OUR PROPERTIES</h3>
            <ul className="flex flex-col gap-2">
              {['Soccer 60 Legend League', 'Dubai Open Tennis Championship', 'Camp With The Champ', 'Dubai Open for Cricket Championship (DOCA)', 'Dubai Pickleball Open', 'International Kabaddi League', 'Champions United', 'Dubai Sports Expo 2029'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="font-barlow text-[13px] text-[#A0AACC] hover:text-gold-accent transition-colors flex items-center gap-2 group">
                    <span className="text-[14px] leading-none mb-[2px] group-hover:translate-x-1 transition-transform">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col h-full">
            <h3 className="font-barlow text-[10px] tracking-[0.2em] text-gold-accent uppercase mb-4">GET IN TOUCH</h3>
            <p className="font-barlow font-bold text-pure-white text-[14px]">Sport Spirit Fed LLC</p>
            <p className="font-barlow text-[#A0AACC] text-[13px] mb-2 mt-1">Dubai, United Arab Emirates</p>
            <a href="mailto:contact@ssf.ae" className="font-barlow text-royal-blue text-[13px] hover:underline mb-4">contact@ssf.ae</a>
            <button className="w-full mt-4 px-5 py-2 border border-gold-accent text-gold-accent font-barlow font-bold tracking-[0.1em] uppercase text-[11px] hover:bg-gold-accent hover:text-deep-navy transition-colors duration-300">
              Request Investor Deck
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gold-accent pt-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-barlow text-[#7080AA] text-[11px] text-center md:text-left">
            © 2026 Sport Spirit Fed LLC. All Rights Reserved. | Dubai, UAE
          </p>
          <p className="font-barlow text-[#505880] text-[10px] italic max-w-md text-center md:text-right">
            All financial projections are estimates and for indicative purposes only. Past performance is not a guarantee of future results.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
