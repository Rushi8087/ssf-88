import React from 'react';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, Youtube, ArrowRight, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-gradient-to-br from-[#F0F4FC] to-[#E2EAF6] min-h-screen pt-24 font-barlow relative">
      <div className="relative z-10 max-w-[75rem] mx-auto px-8 pt-16 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <h1 className="font-anton text-[60px] md:text-[80px] leading-[1.1] text-[#1B30D6] uppercase tracking-wide mb-6">
            Let's Start The Conversation.
          </h1>
          <p className="text-[20px] md:text-[24px] text-gray-500 leading-relaxed font-medium">
            Whether you're an investor, a federation, a brand or a media partner — our team is ready to talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* CONTACT DETAILS BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 flex flex-col pt-4 lg:border-r lg:border-gray-200 lg:pr-12"
          >
            <div className="mb-14">
              <h2 className="font-anton text-[32px] uppercase tracking-wide mb-2 text-[#0A0E2E]">
                Sport Spirit Fed LLC
              </h2>
              <p className="text-[#1B30D6] font-semibold text-[16px] uppercase tracking-[0.15em] mb-10">
                Your Sports Wealth Developers
              </p>
              
              <div className="flex items-center gap-3 mb-10">
                <MapPin size={20} className="text-[#1B30D6]" />
                <p className="text-gray-600 text-[18px] leading-relaxed">
                  Dubai, United Arab Emirates
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="text-[12px] font-bold tracking-[0.15em] text-gray-400 uppercase flex items-center gap-2">
                  <Mail size={14} className="text-[#1B30D6]" /> Email Us
                </p>
                <a href="mailto:contact@ssf.ae" className="text-[20px] font-medium text-[#0A0E2E] hover:text-[#1B30D6] transition-colors w-fit border-b border-gray-300 pb-1 hover:border-[#1B30D6]">
                  contact@ssf.ae
                </a>
              </div>
            </div>

            <div>
               <p className="text-[12px] font-bold tracking-[0.15em] text-gray-400 uppercase mb-5">Global Network</p>
               <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-[#f0f2fa] hover:bg-[#1B30D6] hover:scale-110 flex items-center justify-center transition-all duration-300 group">
                     <Linkedin size={20} className="text-[#1B30D6] group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#f0f2fa] hover:bg-[#1B30D6] hover:scale-110 flex items-center justify-center transition-all duration-300 group">
                     <Instagram size={20} className="text-[#1B30D6] group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#f0f2fa] hover:bg-[#1B30D6] hover:scale-110 flex items-center justify-center transition-all duration-300 group">
                     <Twitter size={20} className="text-[#1B30D6] group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#f0f2fa] hover:bg-[#1B30D6] hover:scale-110 flex items-center justify-center transition-all duration-300 group">
                     <Youtube size={20} className="text-[#1B30D6] group-hover:text-white" />
                  </a>
               </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-xl"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold tracking-[0.1em] text-[#0A0E2E] uppercase">Full Name</label>
                  <input 
                    type="text" 
                    className="bg-[#F8F9FF] border border-[#0A0E2E]/10 rounded-lg p-4 text-[#0A0E2E] focus:outline-none focus:border-[#1B30D6] focus:ring-1 focus:ring-[#1B30D6]/50 transition-all shadow-sm"
                    placeholder="Enter your full name" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold tracking-[0.1em] text-[#0A0E2E] uppercase">Organisation</label>
                  <input 
                    type="text" 
                    className="bg-[#F8F9FF] border border-[#0A0E2E]/10 rounded-lg p-4 text-[#0A0E2E] focus:outline-none focus:border-[#1B30D6] focus:ring-1 focus:ring-[#1B30D6]/50 transition-all shadow-sm"
                    placeholder="Company or Federation name" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold tracking-[0.1em] text-[#0A0E2E] uppercase">Email Address</label>
                  <input 
                    type="email" 
                    className="bg-[#F8F9FF] border border-[#0A0E2E]/10 rounded-lg p-4 text-[#0A0E2E] focus:outline-none focus:border-[#1B30D6] focus:ring-1 focus:ring-[#1B30D6]/50 transition-all shadow-sm"
                    placeholder="you@company.com" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold tracking-[0.1em] text-[#0A0E2E] uppercase">Country</label>
                  <select 
                    className="bg-[#F8F9FF] border border-[#0A0E2E]/10 rounded-lg p-4 text-[#0A0E2E] focus:outline-none focus:border-[#1B30D6] focus:ring-1 focus:ring-[#1B30D6]/50 transition-all appearance-none cursor-pointer shadow-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>Select your location</option>
                    <option value="uae">United Arab Emirates</option>
                    <option value="ksa">Saudi Arabia</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="ind">India</option>
                    <option value="aus">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold tracking-[0.1em] text-[#0A0E2E] uppercase">Enquiry Type</label>
                <select 
                  className="bg-[#F8F9FF] border border-[#0A0E2E]/10 rounded-lg p-4 text-[#0A0E2E] focus:outline-none focus:border-[#1B30D6] focus:ring-1 focus:ring-[#1B30D6]/50 transition-all appearance-none cursor-pointer shadow-sm"
                  defaultValue=""
                >
                  <option value="" disabled>How can we help?</option>
                  <option value="investor">Investor</option>
                  <option value="partner">Partner</option>
                  <option value="media">Media</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold tracking-[0.1em] text-[#0A0E2E] uppercase">Message</label>
                <textarea 
                  rows={4} 
                  maxLength={400}
                  className="bg-[#F8F9FF] border border-[#0A0E2E]/10 rounded-lg p-4 text-[#0A0E2E] focus:outline-none focus:border-[#1B30D6] focus:ring-1 focus:ring-[#1B30D6]/50 transition-all resize-none shadow-sm"
                  placeholder="Tell us about your enquiry (max 400 characters)" 
                />
              </div>

              <button 
                type="submit" 
                className="mt-4 w-full md:w-auto self-start bg-[#1B30D6] text-white hover:bg-[#0A0E2E] transition-colors duration-300 h-[56px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-full flex items-center justify-center gap-2 group shadow-lg shadow-[#1B30D6]/20"
              >
                Send Enquiry
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}

