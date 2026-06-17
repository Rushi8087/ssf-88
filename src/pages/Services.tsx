// @ts-nocheck
import React from 'react';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  LineChart, Hexagon, Compass, Landmark, Network, RadioTower, 
  Building2, Trophy, Flag, Layers, Gavel, Map 
} from 'lucide-react';

export default function Services() {
  const verticals = [
    { 
      num: "01",
      title: "Sports Investment Platform", 
      desc: "We package sports businesses into structured, investable opportunities for sovereign funds, family offices and private equity partners.",
      borderColor: "border-l-[#1B30D6]",
      icon: <LineChart strokeWidth={1.25} className="w-8 h-8 text-[#1B30D6]" />
    },
    { 
      num: "02",
      title: "Sports IP Development", 
      desc: "We create original leagues, tournament formats and branded sports properties from scratch — ownable, scalable, commercially viable.",
      borderColor: "border-l-[#0EA5E9]",
      icon: <Hexagon strokeWidth={1.25} className="w-8 h-8 text-[#0EA5E9]" />
    },
    { 
      num: "03",
      title: "Sports Consultancy & Advisory", 
      desc: "Strategic counsel for governments, federations, investors and sports clubs navigating the commercial sports landscape.",
      borderColor: "border-l-[#06B6D4]",
      icon: <Compass strokeWidth={1.25} className="w-8 h-8 text-[#06B6D4]" />
    },
    { 
      num: "04",
      title: "Commercial Rights Management", 
      desc: "End-to-end management of sponsorship, media, franchise and digital rights — ensuring every asset generates maximum value.",
      borderColor: "border-l-[#10B981]",
      icon: <Landmark strokeWidth={1.25} className="w-8 h-8 text-[#10B981]" />
    },
    { 
      num: "05",
      title: "Sports Technology & AI", 
      desc: "Performance tracking, AI talent identification, smart venue systems and fan engagement technology built into every SSF property.",
      borderColor: "border-l-[#8B5CF6]",
      icon: <Network strokeWidth={1.25} className="w-8 h-8 text-[#8B5CF6]" />
    },
    { 
      num: "06",
      title: "SportsCast Global", 
      desc: "SSF's live broadcasting, streaming, sports news and AI-driven content division — giving every property a media voice and a digital audience.",
      borderColor: "border-l-[#F59E0B]",
      icon: <RadioTower strokeWidth={1.25} className="w-8 h-8 text-[#F59E0B]" />
    },
    { 
      num: "07",
      title: "Sports Facility Commercialisation", 
      desc: "Unlocking revenue from sports venues through naming rights, hospitality tiers, premium event activation and long-term commercial programming.",
      borderColor: "border-l-[#EF4444]",
      icon: <Building2 strokeWidth={1.25} className="w-8 h-8 text-[#EF4444]" />
    },
    { 
      num: "08",
      title: "Sports Club Commercial Rights", 
      desc: "Sponsorship structures, digital revenue programmes and international partnership frameworks for clubs at every level.",
      borderColor: "border-l-[#EC4899]",
      icon: <Trophy strokeWidth={1.25} className="w-8 h-8 text-[#EC4899]" />
    },
    { 
      num: "09",
      title: "Federation Advisory & League Management", 
      desc: "Full operational support for national federations: franchise structure design, sponsorship strategy, governance and season management.",
      borderColor: "border-l-[#14B8A6]",
      icon: <Flag strokeWidth={1.25} className="w-8 h-8 text-[#14B8A6]" />
    },
    { 
      num: "10",
      title: "Sports Tourism Development", 
      desc: "Designing sports events, athlete experiences and fan travel programmes that position destination cities on the global sports map.",
      borderColor: "border-l-[#F97316]",
      icon: <Layers strokeWidth={1.25} className="w-8 h-8 text-[#F97316]" />
    }
  ];

  const fadeUpContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-pure-white w-full">
      {/* 1. HERO SECTION */}
      <section className="snap-start snap-always min-h-[100dvh] bg-[#F8F9FF] w-full flex flex-col justify-center px-8 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-royal-blue/10 pointer-events-none" />
        <div className="max-w-[90rem] mx-auto w-full relative z-10 flex flex-col items-center text-center justify-center h-full pt-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-royal-blue font-barlow font-bold text-[14px] tracking-[0.2em] uppercase mb-6 block"
          >
            SPORTS. MEDIA. TECHNOLOGY. INVESTMENT.
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[72px] md:text-[120px] lg:text-[140px] leading-[1.1] font-anton text-blue-600 uppercase m-0 max-w-6xl"
          >
            WE BUILD SPORTS ECONOMIES.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-barlow text-[#6B7280] text-[18px] md:text-[22px] mt-10 max-w-4xl leading-relaxed"
          >
            SSF is a Dubai-based sports services company that creates, develops and commercialises world-class sports IP — from leagues and franchises to media platforms and investment products.
          </motion.p>
        </div>
      </section>

      {/* 2. INTRO STRIP */}
      <section className="snap-start snap-always min-h-[100dvh] flex flex-col justify-center bg-pure-white w-full py-[60px] px-8 border-b border-[#E8ECFF]">
        <div className="max-w-[90rem] mx-auto flex flex-col items-center text-center">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-[36px] md:text-[48px] font-anton text-royal-blue uppercase m-0 leading-[1.1] max-w-4xl"
           >
             FROM CONCEPT TO COMMERCIAL LAUNCH — WE MANAGE EVERY DIMENSION OF SPORT
           </motion.h2>
           <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="w-[60px] h-[3px] bg-royal-blue mt-8 origin-center"
           />
        </div>
      </section>

      {/* 3. TWELVE VERTICALS GRID */}
      <section className="snap-start snap-always min-h-[100dvh] flex flex-col justify-center bg-pure-white w-full py-24 md:py-32 px-8">
        <div className="max-w-[90rem] mx-auto w-full flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 flex flex-col items-center text-center w-full"
          >
            <span className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] font-anton text-blue-600 uppercase m-0 mb-4 block tracking-wide">
              WHAT WE DO
            </span>
            <p className="font-barlow text-[#6B7280] text-[18px] md:text-[20px] lg:text-[22px] m-0 max-w-3xl">
              Our 10 services span every dimension of sports IP, media, investment and technology
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
             {verticals.map((v, i) => {
               const colorCode = v.borderColor.split('[')[1].split(']')[0];
               return (
                <div key={i} className="relative h-full w-full group overflow-hidden rounded-[4px] min-h-[240px] shadow-[0_2px_12px_rgba(27,48,214,0.06)] hover:shadow-[0_6px_24px_rgba(27,48,214,0.12)] transition-shadow duration-300 bg-[#F8F9FF] hover:bg-[#EEF1FF]">
                  <motion.div 
                    variants={{
                      hidden: { left: "100%", opacity: 0 },
                      show: { left: "0%", opacity: 1, transition: { left: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } } }
                    }}
                    className="absolute top-0 bottom-0 w-[4px] z-20"
                    style={{ backgroundColor: colorCode }}
                  />
                  <motion.div 
                    variants={{
                      hidden: { clipPath: "inset(0 0 0 100%)" },
                      show: { clipPath: "inset(0 0 0 0%)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="flex flex-col items-start justify-start h-full border border-[rgba(27,48,214,0.06)] border-l-0 p-[28px] pl-[32px] relative z-10"
                  >
                     <div className="flex justify-between w-full items-start mb-6">
                        <div className="relative z-10">{v.icon}</div>
                        <span className="font-anton text-[28px] text-[#0A0E2E]/20 leading-[1.1]">{v.num}</span>
                     </div>
                     <h3 className="font-anton text-[24px] text-[#0A0E2E] uppercase m-0 leading-tight relative z-10 mb-3">{v.title}</h3>
                     <p className="font-barlow text-[14px] text-[#6B7280] leading-relaxed m-0 relative z-10 mt-auto">{v.desc}</p>
                  </motion.div>
                </div>
             )})}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY SSF SECTION */}
      <section className="snap-start snap-always min-h-[100dvh] flex flex-col justify-center bg-[#F4F6FF] w-full py-24 md:py-32 px-8">
        <div className="max-w-[90rem] mx-auto w-full flex flex-col items-center">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-[52px] md:text-[72px] lg:text-[80px] font-anton text-blue-600 uppercase text-center mb-16 md:mb-24 leading-[1.1] m-0"
           >
             ONE PARTNER. EVERY DIMENSION OF SPORT.
           </motion.h2>

           <motion.div 
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.3 }}
             variants={fadeUpContainer}
             className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-7xl"
           >
              {[
                { title: "End-to-End Expertise", desc: "From the concept table to the live broadcast, SSF manages the complete journey — concept, structure, launch, revenue." },
                { title: "Dubai-Based, Globally Scaled", desc: "Built in the most powerful sports city in the world, structured to operate globally from day one." },
                { title: "Investment-Grade Thinking", desc: "We are not event organisers. We are sports economy builders — every property built to generate returns season after season." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUpItem} className="flex flex-col items-center text-center border-t border-royal-blue/20 pt-10 px-4">
                   <h4 className="font-barlow font-bold text-[20px] md:text-[24px] text-[#0A0E2E] mb-4">{item.title}</h4>
                   <p className="font-barlow text-[16px] md:text-[18px] lg:text-[20px] text-[#6B7280] leading-relaxed max-w-sm">{item.desc}</p>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA STRIP & FOOTER */}
      <section className="snap-end snap-always min-h-[100dvh] flex flex-col justify-between w-full relative bg-black">
        <div className="w-full relative bg-[linear-gradient(135deg,#1B30D6_0%,#0A0E2E_100%)] flex flex-col justify-center items-center py-[80px] z-10 overflow-hidden border-b border-white/10 flex-grow">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)]"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
               hidden: { opacity: 0 },
               show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-[12px] relative z-10"
          >
            <motion.span variants={fadeUpItem} className="text-gold-accent font-barlow font-semibold text-[12px] tracking-[0.2em] uppercase">
               LET'S BUILD TOGETHER
            </motion.span>

            <motion.h2 variants={fadeUpItem} className="text-[48px] md:text-[56px] leading-[1.1] font-anton text-pure-white uppercase tracking-wider m-0">
               READY TO EXPLORE A PARTNERSHIP?
            </motion.h2>

            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row justify-center gap-[16px] mt-6 w-full sm:w-auto px-4">
              <button className="bg-pure-white text-royal-blue hover:bg-transparent hover:text-pure-white border-[1.5px] border-pure-white transition-colors duration-250 w-full sm:w-max mx-auto h-[52px] px-[40px] text-sm font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center whitespace-nowrap">
                Explore Our Properties
              </button>
              <button className="bg-transparent text-pure-white hover:bg-pure-white hover:text-royal-blue border-[1.5px] border-pure-white transition-colors duration-250 w-full sm:w-max mx-auto h-[52px] px-[40px] text-sm font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center whitespace-nowrap">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

