// @ts-nocheck
import React, { useRef } from 'react';
import { Footer } from '../components/Footer';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, CircleDashed, Users, Shield, Zap, Circle, Briefcase, ArrowRight } from 'lucide-react';

export default function Properties() {
  const properties = [
    {
      name: "SOCCER 60",
      pill: "FOOTBALL · SEASON 1 DELIVERED",
      gradient: "from-[#1B30D6] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop",
      tagline: "Next-Generation Shortened Football Format",
      desc: "Soccer 60 is SSF's flagship legends football league, featuring global icons Ronaldinho, Kaká, Clarence Seedorf and Francesco Totti. Season 1 delivered; Season 2 in development, with a global press conference scheduled for November 2026 ahead of a 10-year, 7-franchise expansion across the UAE emirates.",
      icon: <Trophy size={32} className="text-white opacity-60" />
    },
    {
      name: "DOTA OPEN",
      pill: "TENNIS · SEASONS 1 & 2 DELIVERED",
      gradient: "from-[#0A4D8C] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop",
      tagline: "Premier Tennis Championship Series for the GCC",
      desc: "Dubai Open Tennis Championship (DOTA) is SSF's flagship professional tennis property, delivered across two successful seasons in partnership with the UAE Tennis Federation. Season 3 is currently in planning.",
      icon: <CircleDashed size={32} className="text-white opacity-60" />
    },
    {
      name: "CAMP WITH THE CHAMP",
      pill: "CRICKET · SEASONS 1-3 DELIVERED",
      gradient: "from-[#1A5C2A] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop",
      tagline: "Elite Youth Training With Global Legends",
      desc: "Camp With The Champ combines celebrity coaching camps with the world's first mixed-gender cricket format. SSF has delivered three consecutive seasons in Dubai.",
      icon: <Users size={32} className="text-white opacity-60" />
    },
    {
      name: "DOCA CRICKET",
      pill: "CRICKET · SEASON 1 — 2027",
      gradient: "from-[#5D6B19] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
      tagline: "Major New Cricket Championship for Dubai",
      desc: "DOCA is a major new cricket championship for Dubai, targeting 2027 — designed as an investable franchise structure from day one.",
      icon: <Users size={32} className="text-white opacity-60" />
    },
    {
      name: "CHAMPIONS UNITED",
      pill: "MULTI-SPORT · SEASON 1 — 2027–28",
      gradient: "from-[#5C1A1A] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607fa8211?q=80&w=800&auto=format&fit=crop",
      tagline: "A Multi-Sport Championship Platform",
      desc: "Champions United is SSF's cross-sport legends tournament, bringing together champions from multiple disciplines under one championship format. Season 1 is targeted for 2027–28.",
      icon: <Shield size={32} className="text-white opacity-60" />
    },
    {
      name: "KABADDI LEAGUE",
      pill: "KABADDI · EXHIBITION 2025",
      gradient: "from-[#4A1A5C] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
      tagline: "Professional Franchise League Expanding Across Asia",
      desc: "International Kabaddi League is SSF's franchise-based league bringing Kabaddi to the massive South Asian fanbase across the UAE and globally. Exhibition season delivered in 2025; full commercial launch in planning.",
      icon: <Zap size={32} className="text-white opacity-60" />
    },
    {
      name: "PICKLEBALL OPEN",
      pill: "PICKLEBALL · SEASON 1 DELIVERED 2025",
      gradient: "from-[#1A4A5C] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a631d6?q=80&w=800&auto=format&fit=crop",
      tagline: "The World's Fastest Growing Racket Sport",
      desc: "Dubai Pickleball Open delivered a successful Season 1 in 2025. SSF is also the driving force behind the UAE Pickleball Federation registration, submitted to the UAE Ministry of Sport.",
      icon: <Circle size={32} className="text-white opacity-60" />
    },
    {
      name: "SPORTS EXPO",
      pill: "EXPO · SCHEDULED 2029",
      gradient: "from-[#5C4A0A] to-[#0A0E2E]",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      tagline: "The Region's Premier Sports Business Event",
      desc: "Dubai Sports Expo is SSF's landmark sports business, investment and lifestyle event — bringing together global investors, federations, clubs and sports technology companies in Dubai. Scheduled for 2029.",
      icon: <Briefcase size={32} className="text-white opacity-60" />
    }
  ];

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // 8 cards of 480px wide + 32px gap = 512px distance between centers.
  // To reach the last card (8th total), need to shift 7 * 512 = 3584px
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-3584px"]);
  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 25,
    mass: 0.8,
  });

  return (
    <div className="bg-pure-white w-full">
      {/* 1. HERO SECTION */}
      <section className="snap-start snap-always min-h-[100dvh] bg-slate-50 w-full flex flex-col justify-center px-8 py-24 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto w-full relative z-10 flex flex-col items-center justify-center h-full pt-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold-accent font-barlow font-semibold text-[14px] md:text-[16px] tracking-[0.2em] uppercase mb-8 block"
          >
            SSF SPORTS IP PORTFOLIO · DUBAI · GLOBAL
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[80px] md:text-[120px] leading-[1.1] font-anton text-slate-900 uppercase m-0 max-w-6xl"
          >
            OUR FLAGSHIP SPORTS PROPERTIES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-barlow text-[#4B5563] text-[20px] md:text-[24px] mt-10 max-w-4xl leading-relaxed"
          >
            SSF owns, develops and scales a portfolio of globally ambitious sports intellectual properties — built for long-term commercial value and international reach.
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
             EIGHT PROPERTIES. ONE VISION. GLOBAL SCALE.
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

      {/* 3. HORIZONTAL PROPERTIES SHOWCASE */}
      <section ref={containerRef} className="w-full relative bg-white z-10 h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-[100px] z-20">
          <div className="w-full mx-auto flex flex-col">
            <motion.div
              className="text-center mb-16 flex flex-col items-center px-4 max-w-[90rem] mx-auto w-full"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[64px] md:text-[96px] font-anton text-blue-600 uppercase tracking-wider m-0 break-words leading-[1.1]">
                PROPERTIES SHOWCASE
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-[120px] h-[4px] bg-royal-blue mt-8 origin-center"
              />
            </motion.div>

            <div className="w-full overflow-hidden pt-8 pb-16">
              <motion.div
                style={{
                  x: smoothX,
                  willChange: "transform",
                  display: "flex",
                  flexDirection: "row",
                  gap: "32px",
                  width: "max-content",
                  paddingLeft: "calc(50vw - 240px)",
                  paddingRight: "calc(50vw - 240px)",
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
                }}
              >
                {properties.map((prop, idx) => {
                  const formatIdx = String(idx + 1).padStart(2, '0');
                  return (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                      }}
                      style={{ minWidth: "480px", maxWidth: "480px", height: "580px" }}
                      className="w-full h-[580px] flex flex-col bg-white rounded-[16px] border border-[rgba(27,48,214,0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(27,48,214,0.15)] transition-all duration-300 cursor-pointer shrink-0"
                    >
                      {/* IMAGE AREA */}
                      <div className="w-full h-[240px] relative overflow-hidden flex-shrink-0">
                        <img src={prop.image} alt={prop.name} crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-20 mix-blend-multiply`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E2E]/60 via-transparent to-transparent"></div>
                        
                        {/* Card Number top-left */}
                        <div className="absolute top-6 left-6 z-20 font-barlow font-semibold text-[14px] text-white tracking-wider">
                          /{formatIdx}
                        </div>
                        
                        {/* Pill Tag bottom-left */}
                        <div className="absolute bottom-6 left-6 z-20">
                          <div className="bg-[#E8C84A] rounded-[20px] px-[14px] py-[6px]">
                            <span className="font-barlow font-bold text-[12px] tracking-[0.1em] text-[#0A0E2E] uppercase">
                              {prop.pill}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CONTENT AREA */}
                      <div className="w-full h-[340px] p-[40px] flex flex-col bg-white items-center text-center">
                          <h3 className="font-anton text-[40px] md:text-[48px] text-[#0A0E2E] uppercase m-0 leading-[1.1] mb-4 tracking-wide truncate shrink-0 w-full">
                            {prop.name}
                          </h3>
                          
                          <p className="font-barlow text-[#4B5563] text-[18px] md:text-[20px] leading-[1.6] mb-6 grow overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}>
                            {prop.desc}
                          </p>
                          
                          <div className="mt-auto shrink-0 flex items-center justify-center w-full pt-2">
                            <button className="bg-royal-blue text-white hover:bg-[#0A0E2E] rounded-full px-8 py-3.5 font-barlow font-bold text-[16px] tracking-wide transition-colors whitespace-nowrap shadow-md hover:shadow-lg">
                              EXPLORE DETAILS
                            </button>
                          </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Dummy space for scroll tracking */}
        <div className="relative z-10 -mt-[100vh] snap-none bg-transparent">
          <div className="h-screen w-full pointer-events-none" />
          <div className="h-screen w-full pointer-events-none" />
          <div className="h-screen w-full pointer-events-none" />
          <div className="h-screen w-full pointer-events-none" />
        </div>
      </section>

      {/* 4. INVESTMENT OPPORTUNITY STRIP */}
      <section className="snap-start snap-always min-h-[100dvh] flex flex-col justify-center bg-white w-full py-[80px] px-8 relative z-20">
        <div className="max-w-[70rem] mx-auto w-full flex flex-col items-center text-center">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-[64px] md:text-[96px] font-anton text-blue-600 uppercase mb-8 leading-[1.1] m-0"
           >
             INVEST IN AN SSF PROPERTY
           </motion.h2>

           <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="font-barlow text-[20px] md:text-[24px] text-[#4B5563] leading-relaxed max-w-[800px] mb-12 m-0"
           >
             Each SSF property offers structured investment, sponsorship, franchise and commercial rights opportunities. Contact our team to explore how you can participate.
           </motion.p>
           
           <motion.button
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="bg-royal-blue text-pure-white hover:bg-deep-navy transition-colors duration-250 h-[64px] px-[56px] text-[16px] md:text-[18px] font-bold uppercase tracking-[0.15em] font-barlow rounded-full flex items-center justify-center whitespace-nowrap shadow-md hover:shadow-lg"
           >
             Explore Investment Opportunities
           </motion.button>
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
            <motion.span variants={fadeUpItem} className="text-[#E8C84A] font-barlow font-semibold text-[12px] tracking-[0.2em] uppercase">
               BUILD WITH SSF
            </motion.span>

            <motion.h2 variants={fadeUpItem} className="text-[48px] md:text-[56px] leading-[1.1] font-anton text-pure-white uppercase tracking-wider m-0">
               PARTNER WITH A FLAGSHIP PROPERTY
            </motion.h2>

            <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row justify-center gap-[16px] mt-6 w-full sm:w-auto px-4">
              <button className="bg-pure-white text-royal-blue hover:bg-transparent hover:text-pure-white border-[1.5px] border-pure-white transition-colors duration-250 w-full sm:w-max mx-auto h-[52px] px-[40px] text-[14px] font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center whitespace-nowrap">
                Contact Us
              </button>
              <button className="bg-transparent text-pure-white hover:bg-pure-white hover:text-royal-blue border-[1.5px] border-pure-white transition-colors duration-250 w-full sm:w-max mx-auto h-[52px] px-[40px] text-[14px] font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center whitespace-nowrap">
                Explore Investment
              </button>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
