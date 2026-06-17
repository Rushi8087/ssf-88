// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'motion/react';

const adilImg = "/images/adil.png";
const saifImg = "/images/saif.png";

const milestones = [
  { year: "2021", text: "SSF Founded in Dubai", side: "left" },
  { year: "2022", text: "First Sports IP Delivered", side: "right" },
  { year: "2023", text: "ILT20 Partnership Secured", side: "left" },
  { year: "2024", text: "Dubai Pickleball Open Season 1 Delivered", side: "right" },
  { year: "2025", text: "8 Active Properties · International Kabaddi League Exhibition", side: "left" },
  { year: "2026", text: "Global Expansion Phase", side: "right" }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [nodeDelays, setNodeDelays] = useState<number[]>([]);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;
    
    const calculateDelays = () => {
      const lineLength = lineRef.current.offsetHeight;
      if (lineLength === 0) return;
      
      const containerTop = containerRef.current.getBoundingClientRect().top;
      
      const dots = containerRef.current.querySelectorAll('.timeline-dot');
      const delays = Array.from(dots).map(dot => {
        const dotTop = dot.getBoundingClientRect().top - containerTop;
        const distance = Math.max(0, dotTop + (dot.getBoundingClientRect().height / 2));
        const normalized = Math.min(1, distance / lineLength);
        return normalized * 1.8;
      });
      setNodeDelays(delays);
    };

    calculateDelays();
    const timeout = setTimeout(calculateDelays, 100);
    window.addEventListener('resize', calculateDelays);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', calculateDelays);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl pt-4 pb-12">
       {/* Center line */}
       <motion.div 
         ref={lineRef}
         initial={{ scaleY: 0 }}
         animate={controls}
         variants={{
           show: { scaleY: 1, transition: { duration: 1.8, ease: "linear" } }
         }}
         style={{ transformOrigin: "top" }}
         className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#1B30D6]" 
       />
       
       {milestones.map((item, idx) => {
         const isLeft = item.side === "left";
         const delay = nodeDelays[idx] !== undefined ? nodeDelays[idx] : (0.2 + idx * 0.3);
         
         const dotVariants = {
           hidden: { scale: 0.5, opacity: 0 },
           show: { scale: 1, opacity: 1, transition: { duration: 0.15, delay: delay } }
         };

         const desktopLeftVariants = {
           hidden: { opacity: 0, x: -20 },
           show: { opacity: 1, x: 0, transition: { duration: 0.25, delay: delay + 0.15 } }
         };

         const rightVariants = {
           hidden: { opacity: 0, x: 20 },
           show: { opacity: 1, x: 0, transition: { duration: 0.25, delay: delay + 0.15 } }
         };

         return (
          <div 
            key={idx}
            className="relative w-full flex flex-col md:flex-row justify-end md:justify-between items-start md:items-center mb-16 md:mb-24 last:mb-0"
          >
             {/* Desktop Left Content */}
             <div className={`hidden md:flex flex-col text-right w-[calc(50%-8rem)] ${!isLeft ? 'invisible' : ''}`}>
               {isLeft && (
                 <motion.div initial="hidden" animate={controls} variants={desktopLeftVariants} className="flex flex-col items-end">
                   <h3 className="font-anton text-[32px] md:text-[40px] text-[#1B30D6] leading-[1.1] m-0">{item.year}</h3>
                   <p className="font-barlow text-[#6B7280] text-[16px] md:text-[0.95rem] mt-2 m-0 leading-relaxed text-right">{item.text}</p>
                 </motion.div>
               )}
             </div>

             {/* Center Dot */}
             <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 z-10 flex justify-center items-center">
               <motion.div
                 initial="hidden"
                 animate={controls}
                 variants={dotVariants}
                 className="timeline-dot w-[12px] h-[12px] rounded-full bg-[#1B30D6]"
               />
             </div>

             {/* Right Content / Mobile Content */}
             <div className={`flex flex-col text-left w-full pl-[8rem] md:pl-0 md:w-[calc(50%-8rem)] ${isLeft ? 'md:hidden' : ''}`}>
               {(!isLeft || true) && (
                 <motion.div initial="hidden" animate={controls} variants={rightVariants} className="flex flex-col items-start">
                   <h3 className="font-anton text-[32px] md:text-[40px] text-[#1B30D6] leading-[1.1] m-0">{item.year}</h3>
                   <p className="font-barlow text-[#6B7280] text-[16px] md:text-[0.95rem] mt-2 m-0 leading-relaxed">{item.text}</p>
                 </motion.div>
               )}
             </div>
          </div>
         );
       })}
    </div>
  );
};

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const pillarContainerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  
  const pillarItemVars = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="bg-pure-white w-full">
      {/* 1. WHO WE ARE */}
      <section className="snap-start snap-always min-h-[80vh] flex flex-col justify-center bg-pure-white w-full px-8 py-24 md:py-32 pt-32">
        <div className="max-w-[70rem] mx-auto w-full flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="w-full flex flex-col items-center"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-royal-blue font-barlow font-semibold text-[12px] tracking-[0.15em] uppercase mb-8 block"
            >
              About SSF
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-[48px] md:text-[64px] leading-[1.1] font-anton text-[#0A0E2E] uppercase m-0 mb-6"
            >
              Sport Is a Business.<br className="hidden md:block" /> We Build It That Way.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="font-barlow text-[#6B7280] text-[18px] leading-relaxed mb-6 m-0 max-w-3xl"
            >
              Sport Spirit Fed LLC (SSF) is a Dubai-based sports services company built on one powerful conviction: sport is not an event, it is an asset. We create, develop and commercialise sports IP that generates income and appreciates in value — season after season.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="font-barlow text-[#6B7280] text-[18px] leading-relaxed mb-6 m-0 max-w-3xl"
            >
              From the concept table to the live broadcast, SSF manages the full journey. We build leagues. We structure franchises. We create media platforms. We secure investment. And we do it from the most powerful sports city in the world — Dubai.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="font-barlow text-[#0A0E2E] font-medium text-[18px] leading-relaxed mb-8 m-0 max-w-3xl"
            >
              We are not event organisers. We are sports economy builders.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-gold-accent italic font-barlow text-[24px] font-medium m-0"
            >
              "We turn sports ideas into sports businesses."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 1.5 TIMELINE SECTION */}
      <section className="snap-start snap-always w-full bg-pure-white py-24 md:py-32 px-8 overflow-hidden relative">
        <div className="max-w-[70rem] mx-auto w-full relative z-10 flex flex-col items-center">
            <motion.h2 
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}
              className="text-[36px] md:text-[48px] leading-[1.1] font-anton text-[#0A0E2E] uppercase m-0 mb-16 md:mb-24 text-center"
            >
              Our Milestones
            </motion.h2>
            
            <Timeline />
        </div>
      </section>

      {/* 2. VISION & MISSION SECTION */}
      <section className="snap-start snap-always w-full flex flex-col justify-center bg-pure-white px-8 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#EBF0FF]/50 to-transparent pointer-events-none" />
        <div className="max-w-[80rem] mx-auto w-full flex flex-col relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] md:text-[48px] leading-[1.1] font-anton text-blue-600 uppercase m-0">
              WHAT WE STAND FOR
            </h2>
          </motion.div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-4">
            {[
              {
                eyebrow: "OUR VISION",
                title: "Our Vision",
                desc: "Become one of the world's leading sports asset development and investment companies — building from Dubai to grow globally."
              },
              {
                eyebrow: "OUR MISSION",
                title: "Our Mission",
                desc: "Build sports properties, leagues, media platforms and investment opportunities that create long-term value for investors, governments and the next generation of sports fans."
              },
              {
                eyebrow: "OUR PROMISE",
                title: "Our Promise",
                desc: "Every project is built to last, built to grow, and built to deliver — not just on the day, but every year going forward."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative w-full h-full group"
              >
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-[3px] bg-[#4F65F1] z-20 rounded-t-[12px]"
                />
                <motion.div
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.2 + 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full bg-[#F8F9FF] border border-[rgba(0,0,0,0.04)] rounded-[12px] rounded-t-none p-[40px] flex flex-col shadow-sm group-hover:shadow-[0_8px_30px_rgba(27,48,214,0.08)] transition-all duration-300 mt-[3px]"
                >
                  <span className="text-[#4F65F1] font-barlow font-semibold text-[12px] tracking-[0.15em] uppercase mb-4 block">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-[28px] font-serif font-bold text-[#0A0E2E] mb-6 leading-tight m-0 tracking-wide">
                    {card.title}
                  </h3>
                  <p className="font-barlow text-[#6B7280] text-[15px] leading-relaxed m-0">
                    {card.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto w-full bg-[#EBF0FF] border border-[#D6E0FF] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 rounded-[10px] text-center mt-12"
          >
            <h4 className="font-barlow font-medium text-[#0A0E2E] text-[20px] md:text-[24px] leading-snug m-0 tracking-wide">
              "There is a real difference between filling a venue for one night and building an asset that keeps paying returns. SSF builds."
            </h4>
          </motion.div>
        </div>
      </section>

      {/* 3. THE BIGGER PICTURE */}
      <section className="snap-start snap-always min-h-[80vh] w-full flex flex-col justify-center bg-[#FAFAFA] py-24 md:py-32 px-8">
        <div className="max-w-[70rem] mx-auto w-full flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="w-full"
          >
            <span className="text-royal-blue font-barlow font-semibold text-[14px] tracking-[0.2em] uppercase mb-8 block">
              The Bigger Picture
            </span>
            
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] font-anton text-[#0A0E2E] uppercase m-0 mb-12">
              Building the commercial infrastructure<br className="hidden md:block" /> that sports deserve.
            </h2>
            
            <div className="flex flex-col gap-6 max-w-3xl mx-auto text-left md:text-center">
              <p className="font-barlow text-[#6B7280] text-[18px] md:text-[20px] leading-relaxed m-0">
                Sport belongs to everyone. It is played in every country, watched in every language, and brings people together like nothing else. But in this region, the business of sport has been underbuilt — rights undervalued, investors underserved, and opportunities left on the table.
              </p>
              <p className="font-barlow text-[#6B7280] text-[18px] md:text-[20px] leading-relaxed m-0">
                SSF is here to change that. We are building leagues that attract serious investors, properties that scale globally, and sports businesses that create generational value.
              </p>
            </div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 inline-block border-y-2 border-gold-accent py-6 px-4 md:px-12"
            >
              <span className="font-serif italic text-royal-blue text-[24px] md:text-[32px] m-0 tracking-wide">
                We started in Dubai. We are building for the world.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. LEADERSHIP / THE TEAM */}
      <section className="snap-start snap-always min-h-[100dvh] bg-black border-t border-royal-blue/20 w-full flex flex-col justify-center py-24 md:py-32 px-8 relative">
        <div className="max-w-[80rem] mx-auto w-full flex flex-col">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
            className="mb-24 flex flex-col items-center"
          >
            <h2 className="text-[40px] md:text-[56px] font-anton text-pure-white uppercase tracking-[0.15em] m-0 leading-[1.1]">
              LEADERSHIP
            </h2>
            <div className="w-[80px] h-[3px] bg-royal-blue mt-6 mx-auto" />
          </motion.div>
          
          <div className="flex flex-col gap-24 w-full mb-16">
            {[
              {
                name: "Mohammad Saif",
                role: "Founder and MD",
                bio: "Over a decade building sports businesses in the UAE. Founder of Sport Spirit Fed LLC with government and federation relationships including the Dubai Sports Council, Emirates Cricket Board and UAE Tennis Federation. A builder of sports economies, not events.",
                img: saifImg,
                quote: `"We are not building events. We are building sports economies."`,
                linkedin: "https://www.linkedin.com/in/mohammad-saiif-817191143?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              },
              {
                name: "Adil Memon",
                role: "CEO and Managing Partner",
                bio: "Business and media leader with a Masters in Management. Track record spanning broadcasting, commercial growth and organisational leadership. Drives investor relationships, media operations and international growth for SSF.",
                img: adilImg,
                linkedin: "https://www.linkedin.com/in/adil-adam-memon-68605a10?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              }
            ].map((leader, i) => (
               <motion.div 
                 key={leader.name}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2, duration: 0.8 }}
                 className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
               >
                 <div className="w-full lg:w-5/12 aspect-[4/5] relative overflow-hidden group">
                    <img 
                       src={leader.img} 
                       alt={leader.name} 
                       referrerPolicy="no-referrer"
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 border-4 border-royal-blue/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                 </div>
                 <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <span className="text-royal-blue font-barlow font-bold tracking-widest uppercase text-sm mb-4">{leader.role}</span>
                    <h3 className="text-5xl md:text-7xl font-anton text-pure-white uppercase tracking-wide mb-8">{leader.name}</h3>
                    <p className="font-barlow text-mid-grey text-xl leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    {leader.quote && (
                      <div className="mt-8 border-l-4 border-gold-accent pl-6">
                        <p className="text-pure-white italic font-barlow text-[18px] m-0">
                          {leader.quote}
                        </p>
                      </div>
                    )}

                    <div className="mt-12 flex gap-6 flex-wrap">
                      <button className="border border-pure-white text-pure-white hover:bg-pure-white hover:text-black transition-colors rounded-full px-8 py-3 text-xs uppercase tracking-widest font-bold font-barlow">
                        Full Biography
                      </button>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#0a66c2] text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-colors rounded-full px-8 py-3 text-xs uppercase tracking-widest font-bold font-barlow flex items-center gap-2"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        LinkedIn
                      </a>
                    </div>
                 </div>
               </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInUp}
            className="text-center w-full max-w-4xl mx-auto mt-8 border-t border-white/10 pt-10"
          >
            <p className="font-barlow text-mid-grey text-[14px] italic">
              SSF's team extends to a network of advisors, federation partners, sports operations professionals and commercial specialists. Additional profiles to be added at SSF's discretion.
            </p>
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
            variants={pillarContainerVars}
            className="text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-[12px] relative z-10 box-border px-8"
          >
            <motion.span variants={pillarItemVars} className="text-gold-accent font-barlow font-semibold text-[12px] tracking-[0.2em] uppercase">
              JOIN SSF · DUBAI · UAE
            </motion.span>

            <motion.h2 variants={pillarItemVars} className="text-[64px] leading-[1.1] font-anton text-pure-white uppercase tracking-wider m-0">
              READY TO LEARN MORE?
            </motion.h2>

            <motion.div variants={pillarItemVars} className="flex flex-col sm:flex-row justify-center gap-[16px] mt-2">
              <button className="bg-pure-white text-royal-blue hover:bg-transparent hover:text-pure-white border-[1.5px] border-pure-white transition-colors duration-250 w-max mx-auto h-[52px] px-[40px] text-sm font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center">
                Explore What We Do
              </button>
              <button className="bg-transparent text-pure-white hover:bg-pure-white hover:text-royal-blue border-[1.5px] border-pure-white transition-colors duration-250 w-max mx-auto h-[52px] px-[40px] text-sm font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center">
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