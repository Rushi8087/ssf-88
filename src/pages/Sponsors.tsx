import React from 'react';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const govPartners = [
  "Dubai Sports Council",
  "Emirates Cricket Board",
  "UAE Tennis Federation",
  "ILT20",
  "UAE Ministry of Sport (Pickleball)"
];

const commercialCategories = [
  "Title",
  "Venue Naming",
  "Kit",
  "Digital",
  "Hospitality",
  "Automotive",
  "Financial",
  "Airline"
];

const mediaPartners = [
  { name: "SportsCast Global", description: "Internal Media Division" },
  { name: "Official Broadcast Partner", description: "Open for Enquiries" },
  { name: "Official Streaming Partner", description: "Open for Enquiries" },
  { name: "Data Insights Partner", description: "Open for Enquiries" }
];

const fadeUpItem: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Sponsors() {
  return (
    <div className="bg-white min-h-screen font-barlow text-[#0A0E2E]">

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8 relative">
        <div className="max-w-[75rem] mx-auto w-full">
          <motion.p 
            className="text-[#1B30D6] uppercase tracking-[0.2em] font-semibold text-[13px] mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ecosystem
          </motion.p>
          <motion.h1 
            className="font-anton text-[72px] md:text-[110px] text-[#0A0E2E] leading-[1.1] uppercase tracking-wide max-w-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            OUR SPONSORS<br/>& PARTNERS
          </motion.h1>
        </div>
      </section>

      {/* Tier 1 - Government */}
      <motion.section 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="w-full bg-[#1B30D6] py-12 px-8 origin-left"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <div className="max-w-[75rem] mx-auto w-full">
            <motion.h2 
              className="font-anton text-white text-[48px] md:text-[64px] uppercase leading-[1.1] tracking-wide mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.5 } }
              }}
            >
              Government & Federation Partners
            </motion.h2>
            <motion.p 
              className="text-white/80 text-[18px] md:text-[20px] max-w-3xl leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut", delay: 0.65 } }
              }}
            >
               SSF's institutional partnerships form the bedrock of our credibility and our licence to operate at the highest level.
            </motion.p>
          </div>
        </motion.div>
        <div className="px-8 mt-12">
          <div className="max-w-[75rem] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {govPartners.map((partner, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                      delay: 1.0 + idx * 0.12
                    }
                  }
                }}
                className="bg-white border border-[#1B30D6] h-[160px] flex items-center justify-center p-6 text-center group transition-colors duration-300 hover:bg-[#1B30D6]"
              >
                <span className="font-anton text-[24px] text-[#0A0E2E]/60 group-hover:text-white transition-colors duration-300 uppercase tracking-wide leading-tight">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tier 2 - Commercial */}
      <motion.section 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="w-full bg-[#E8C84A] py-12 px-8 origin-left"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <div className="max-w-[75rem] mx-auto w-full">
            <motion.h2 
              className="font-anton text-[#0A0E2E] text-[48px] md:text-[64px] uppercase leading-[1.1] tracking-wide mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.5 } }
              }}
            >
              Commercial Sponsors
            </motion.h2>
            <motion.p 
              className="text-[#0A0E2E]/80 text-[18px] md:text-[20px] max-w-3xl leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut", delay: 0.65 } }
              }}
            >
               Our commercial sponsorship base spans regional and international brands across title rights, venue naming, kit, digital and hospitality categories.
            </motion.p>
          </div>
        </motion.div>
        <div className="px-8 mt-12">
          <div className="max-w-[75rem] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                      delay: 1.0 + idx * 0.1
                    }
                  }
                }}
                className="bg-[#F8F9FF] border border-[#0A0E2E]/10 flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:border-[#1B30D6] transition-all duration-300 h-[200px]"
              >
                <span className="font-semibold text-[11px] text-[#0A0E2E]/50 tracking-[0.2em] uppercase mb-2 group-hover:text-[#1B30D6] transition-colors duration-300">
                  Official {category} Sponsor
                </span>
                <span className="font-anton text-[32px] text-[#0A0E2E]/30 uppercase tracking-wider mb-4 group-hover:text-[#0A0E2E] transition-colors duration-300">
                  OPEN
                </span>
                <Link to="/contact" className="font-barlow font-bold text-[13px] text-[#1B30D6] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Enquire &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tier 3 - Media & Tech */}
      <motion.section 
        className="mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="w-full bg-[#0A0E2E] py-12 px-8 origin-left"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } }
          }}
        >
          <div className="max-w-[75rem] mx-auto w-full">
            <motion.h2 
              className="font-anton text-white text-[48px] md:text-[64px] uppercase leading-[1.1] tracking-wide mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.5 } }
              }}
            >
              Media & Technology Partners
            </motion.h2>
            <motion.p 
              className="text-white/80 text-[18px] md:text-[20px] max-w-3xl leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut", delay: 0.65 } }
              }}
            >
               SSF's media and technology partnerships power our broadcasting, streaming, data infrastructure and digital reach.
            </motion.p>
          </div>
        </motion.div>
        <div className="px-8 mt-12">
          <div className="max-w-[75rem] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaPartners.map((partner, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                      delay: 1.0 + idx * 0.12
                    }
                  }
                }}
                className="bg-white border border-[#0A0E2E]/10 flex flex-col p-8 group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(10,14,46,0.06)] hover:border-[#1B30D6]"
              >
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${partner.name === "SportsCast Global" ? "bg-[#1B30D6]" : "bg-[#F8F9FF]"}`}>
                  {partner.name === "SportsCast Global" ? (
                      <span className="font-anton text-white text-xl">SCG</span>
                  ) : (
                      <span className="font-anton text-[#0A0E2E]/30 text-xl">TBA</span>
                  )}
                </div>
                <h3 className={`font-anton text-[28px] uppercase leading-[1.1] tracking-wide mb-2 ${partner.name === "SportsCast Global" ? "text-[#0A0E2E]" : "text-[#0A0E2E]/50"}`}>{partner.name}</h3>
                <p className="text-[14px] text-[#6B7280]">{partner.description}</p>
                {partner.name !== "SportsCast Global" && (
                    <Link to="/contact" className="mt-6 font-barlow font-bold text-[13px] text-[#1B30D6] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Enquire &rarr;
                    </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative px-8 py-32 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-[#1B30D6]"
          variants={{
            hidden: { clipPath: "inset(0 0 100% 0)" },
            visible: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, ease: "easeOut" } }
          }}
        />

        <div className="max-w-[75rem] mx-auto w-full flex flex-col items-center relative z-10">
          <motion.h2 
            className="font-anton text-[64px] md:text-[80px] leading-[1.1] uppercase tracking-wide mb-6 max-w-3xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.7 } }
            }}
          >
             Join The SSF Partner Network.
          </motion.h2>
          <motion.p 
            className="text-[18px] md:text-[22px] text-white/80 max-w-2xl mb-12 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.85 } }
            }}
          >
             From title sponsorships to technology integration, SSF offers bespoke partnership packages across all properties. Our commercial team will build a structure that works for your brand, your budget and your audience.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 1.0 } }
            }}
          >
            <Link to="/contact" className="bg-white text-[#1B30D6] hover:bg-[#F8F9FF] transition-colors duration-300 h-[60px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center">
              Download Partnership Pack
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-[#1B30D6] hover:border-white transition-colors duration-300 h-[60px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center">
              Speak to Our Commercial Team
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
