import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import { motion, useInView, animate } from 'motion/react';
import { ArrowRight, TrendingUp, Globe, ShieldCheck, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const sportsInvestmentData = [
  { year: "2018", value: 250 },
  { year: "2020", value: 350 },
  { year: "2022", value: 490 },
  { year: "2024", value: 680 },
  { year: "2026E", value: 850 },
];

const CountUpText = ({ value, prefix = "", suffix = "", decimals = 0, duration = 1.2, delay = 0, trigger = false }: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
  trigger?: boolean;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (trigger && ref.current) {
      animate(0, value, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
          }
        }
      });
    }
  }, [trigger, value, duration, delay, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

export default function Invest() {
  const ssfModelRef = useRef<HTMLElement>(null);
  const ssfModelInView = useInView(ssfModelRef, { once: true, amount: 0.25 });

  const dataSecRef = useRef<HTMLElement>(null);
  const dataSecInView = useInView(dataSecRef, { once: true, amount: 0.25 });

  const marketPoints = [
    {
      icon: <TrendingUp size={24} className="text-[#1B30D6]" />,
      title: "Institutional Capital Flow",
      desc: "Sovereign wealth funds and private equity firms are investing in sports at unprecedented rates. The asset class is formally recognized."
    },
    {
      icon: <BarChart3 size={24} className="text-[#1B30D6]" />,
      title: "Exploding Franchise Values",
      desc: "Media rights are breaking records. Franchise valuations are climbing. Early investors in these structures generate generational returns."
    },
    {
      icon: <Users size={24} className="text-[#1B30D6]" />,
      title: "Limitless Fanbase Growth",
      desc: "Sport commands massive global audiences and consumer passion that no other sector can replicate. The next billion fans are arriving."
    },
    {
      icon: <Globe size={24} className="text-[#1B30D6]" />,
      title: "UAE: The Global Hub",
      desc: "The UAE has positioned itself as the world's most exciting sports destination — attracting world-class events, athletes, and investment."
    }
  ];

  const modelLayers = [
    { name: "Investor Returns", desc: "Season-on-season appreciation. Recurring revenue. Growing franchise value." },
    { name: "Media & Tech Integration", desc: "SportsCast Global and AI tools amplify reach and create digital revenue." },
    { name: "Commercial Rights", desc: "Sponsorship, naming rights, broadcast, digital — all packaged and activated." },
    { name: "Franchise Structuring", desc: "Every property is structured with investable franchise slots and equity positions." },
    { name: "Sports Property Creation", desc: "The foundation. SSF creates owned IP from concept to contract." }
  ];

  return (
    <div className="bg-white w-full font-barlow text-[#0A0E2E]">
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-[160px] pb-[100px] px-8 bg-[#0A0E2E]">
        <div className="max-w-[75rem] mx-auto w-full">
          <div className="max-w-4xl">
            <motion.p 
              className="text-[#1B30D6] uppercase tracking-[0.2em] font-semibold text-[13px] mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Investment Opportunities
            </motion.p>

            <motion.h1 
              className="font-anton text-[72px] md:text-[110px] text-white leading-[1.1] uppercase tracking-wide mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building the Future of Global Sport
            </motion.h1>

            <motion.p 
              className="text-[#A0AABF] text-[18px] md:text-[22px] leading-[1.6] max-w-2xl mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SSF offers structured investment opportunities across sports assets, franchises, media platforms, and technology ventures — designed for long-term commercial value generation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <Link to="/contact" className="bg-white text-[#0A0E2E] hover:bg-[#1B30D6] hover:text-white transition-colors duration-300 h-[56px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center">
                Request Prospectus
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DATA / MARKET METRICS */}
      <section ref={dataSecRef} className="w-full bg-[#F8F9FF] border-b border-[#0A0E2E]/10 py-12 px-8">
        <div className="max-w-[75rem] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-anton text-[40px] text-[#0A0E2E] leading-[1.1] mb-1">
              <CountUpText value={700} prefix="$" suffix="B+" duration={1.2} trigger={dataSecInView} />
            </div>
            <div className="text-[13px] font-semibold tracking-wider text-[#6B7280] uppercase">Global Sports Industry</div>
          </div>
          <div>
            <div className="font-anton text-[40px] text-[#0A0E2E] leading-[1.1] mb-1">
              <CountUpText value={6} suffix="+" duration={1.2} delay={0.2} trigger={dataSecInView} />
            </div>
            <div className="text-[13px] font-semibold tracking-wider text-[#6B7280] uppercase">Flagship IPs</div>
          </div>
          <div>
            <div className="font-anton text-[40px] text-[#0A0E2E] leading-[1.1] mb-1">
              <CountUpText value={12} suffix="+" duration={1.2} delay={0.4} trigger={dataSecInView} />
            </div>
            <div className="text-[13px] font-semibold tracking-wider text-[#6B7280] uppercase">Business Verticals</div>
          </div>
          <div>
            <div className="font-anton text-[40px] text-[#0A0E2E] leading-[1.1] mb-1">
              <CountUpText value={2027} duration={1.2} delay={0.6} trigger={dataSecInView} />
            </div>
            <div className="text-[13px] font-semibold tracking-wider text-[#6B7280] uppercase">Soccer 60 Launch</div>
          </div>
        </div>
      </section>

      {/* THE MARKET CONDITION */}
      <section className="w-full px-8 py-[120px]">
        <div className="max-w-[75rem] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Chart & Stats */}
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="font-anton text-[48px] md:text-[64px] text-[#1B30D6] leading-[1.05] uppercase tracking-wide mb-4">
                  The Market Condition
                </h2>
                <p className="text-[18px] text-[#6B7280] leading-relaxed">
                  The sports sector has evolved into a highly resilient, high-growth asset class attracting institutional capital from across the globe.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F8F9FF] p-8 md:p-10 border border-[#0A0E2E]/10"
              >
                <div className="mb-10">
                  <span className="font-semibold text-[13px] tracking-wider text-[#1B30D6] uppercase block mb-1">
                     Investment Projection
                  </span>
                  <h3 className="font-anton text-[36px] text-[#0A0E2E] leading-[1.1] uppercase tracking-wide">
                    Global Sports Market Target
                  </h3>
                </div>

                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sportsInvestmentData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1B30D6" stopOpacity={0.2}/>
                          <stop offset="100%" stopColor="#1B30D6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: '#6B7280', fontFamily: 'Inter' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 13, fill: '#6B7280', fontFamily: 'Inter' }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '4px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}
                        itemStyle={{ color: '#0A0E2E', fontWeight: 600, fontFamily: 'Inter' }}
                        labelStyle={{ color: '#6B7280', fontFamily: 'Inter', fontWeight: 500, marginBottom: '4px' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#1B30D6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* Right: Points */}
            <div className="flex flex-col gap-10 lg:pt-[110px]">
              {marketPoints.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 shrink-0 border border-[#1B30D6]/20 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[20px] text-[#0A0E2E] mb-2 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-[16px] text-[#6B7280] leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE SSF INVESTMENT MODEL */}
      <motion.section 
        ref={ssfModelRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full relative px-8 py-[120px] text-white bg-white"
      >
         <motion.div 
           className="absolute inset-0 bg-[#0A0E2E] z-0"
           variants={{
             hidden: { clipPath: "inset(0 100% 0 0)" },
             visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.7, ease: "easeOut" } }
           }}
         />
         <div className="max-w-[75rem] mx-auto w-full relative z-10">
            <div className="mb-16">
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                className="font-anton text-[48px] md:text-[64px] leading-[1.1] uppercase tracking-wide mb-4"
              >
                The SSF Model
              </motion.h2>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.15 } }
                }}
                className="text-[18px] text-[#A0AABF] max-w-2xl leading-relaxed"
              >
                A structured, vertically integrated approach designed to maximize asset value and ensure long-term commercial sustainability.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Layers List (Replaces Pyramid) */}
              <div className="flex flex-col gap-[2px]">
                {modelLayers.slice().reverse().map((layer, index) => {
                  return (
                    <motion.div
                      key={`layer-${index}`}
                      className="relative bg-white p-8 pl-9 flex flex-col justify-center overflow-hidden group"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-[#0A0E2E] z-0"
                        variants={{
                          hidden: { clipPath: "inset(0 100% 0 0)" },
                          visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.35, ease: "easeOut", delay: 0.8 + index * 0.12 } }
                        }}
                      >
                        <div className="absolute inset-0 bg-white/5 transition-colors group-hover:bg-white/10" />
                      </motion.div>
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="absolute -left-9 top-[-32px] bottom-[-32px] w-1 origin-top"
                          style={{ backgroundColor: index === 0 ? '#1B30D6' : index === 4 ? '#ffffff' : 'rgba(255,255,255,0.2)' }}
                          variants={{
                            hidden: { scaleY: 0 },
                            visible: { scaleY: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.8 + index * 0.12 + 0.2 } }
                          }}
                        />
                        <h4 className={`font-anton text-[28px] tracking-wide leading-[1.1] mb-2 ${index === 0 ? 'text-[#1B30D6]' : 'text-white'}`}>
                          {index + 1}. {layer.name}
                        </h4>
                        <p className="text-[15px] font-medium leading-relaxed text-[#A0AABF]">
                          {layer.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Data Cards beside Layers */}
              <div className="flex flex-col gap-6">
                 {/* Card 1 */}
                 <motion.div 
                   className="bg-white p-10 md:p-12 relative overflow-hidden flex flex-col"
                 >
                   <motion.div 
                     className="absolute inset-0 bg-[#1B30D6] z-0"
                     variants={{
                       hidden: { clipPath: "inset(0 100% 0 0)" },
                       visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.35, ease: "easeOut", delay: 1.4 } }
                     }}
                   />
                   <div className="relative z-10 flex flex-col flex-1">
                     <div className="self-start bg-white px-3 py-1 mb-10 border border-[#0A0E2E]/10">
                       <span className="font-bold text-[11px] tracking-widest text-[#0A0E2E] uppercase">
                         Flagship Property Example
                       </span>
                     </div>
                     <div className="font-anton text-[72px] md:text-[96px] text-white leading-[1.1] mb-2">
                       <CountUpText value={317} prefix="$" suffix="M" duration={1.2} delay={1.4} trigger={ssfModelInView} />
                     </div>
                     <span className="font-medium text-[15px] text-white/90 uppercase tracking-widest block">
                       Projected Total Revenue (Soccer 60, 10-Yr)
                     </span>
                   </div>
                 </motion.div>

                 {/* Grid for smaller cards */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <motion.div 
                     className="bg-white p-8 border border-white/10 relative overflow-hidden"
                   >
                     <motion.div 
                       className="absolute inset-0 bg-[#0A0E2E] z-0"
                       variants={{
                         hidden: { clipPath: "inset(0 100% 0 0)" },
                         visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.35, ease: "easeOut", delay: 1.4 } }
                       }}
                     >
                       <div className="absolute inset-0 bg-white/5" />
                     </motion.div>
                     <div className="relative z-10">
                       <div className="font-anton text-[48px] text-white leading-[1.1] mb-2">
                         <CountUpText value={116.7} decimals={1} prefix="$" suffix="M" duration={1.2} delay={1.4} trigger={ssfModelInView} />
                       </div>
                       <span className="font-medium text-[13px] text-[#A0AABF] uppercase tracking-wider block leading-tight">
                         Projected 10-Year <br/>Net Income
                       </span>
                     </div>
                   </motion.div>

                   <motion.div 
                     className="bg-white p-8 border border-white/10 relative overflow-hidden"
                   >
                     <motion.div 
                       className="absolute inset-0 bg-[#0A0E2E] z-0"
                       variants={{
                         hidden: { clipPath: "inset(0 100% 0 0)" },
                         visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.35, ease: "easeOut", delay: 1.4 } }
                       }}
                     >
                       <div className="absolute inset-0 bg-white/5" />
                     </motion.div>
                     <div className="relative z-10">
                       <div className="font-anton text-[48px] text-white leading-[1.1] mb-2">
                         <CountUpText value={6} duration={0.6} delay={1.4} trigger={ssfModelInView} />
                       </div>
                       <span className="font-medium text-[13px] text-[#A0AABF] uppercase tracking-wider block leading-tight">
                         Revenue Streams <br/>Per Property
                       </span>
                     </div>
                   </motion.div>
                 </div>
              </div>
            </div>

         </div>
      </motion.section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#F8F9FF] border-t border-[#0A0E2E]/10 px-8 py-[100px]">
        <div className="max-w-[75rem] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 border-b border-[#0A0E2E]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <h2 className="font-anton text-[56px] md:text-[80px] text-[#0A0E2E] leading-[1.1] uppercase max-w-3xl tracking-wide m-0">
              The sports economy is being built now.
            </h2>
            <Link to="/contact" className="shrink-0 bg-[#1B30D6] text-white hover:bg-[#0A0E2E] transition-colors duration-300 h-[56px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center w-fit">
              Request Details
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* CTA CARD 1 */}
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.1 }}
               className="flex flex-col"
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#0A0E2E]/10 rounded-full">
                    <Globe size={20} className="text-[#1B30D6]" />
                  </div>
                  <h3 className="font-anton text-[32px] text-[#0A0E2E] uppercase m-0 leading-[1.1] tracking-wide">
                    Partner With Us
                  </h3>
                </div>
                <p className="text-[#6B7280] text-[16px] leading-[1.7] mb-8 max-w-md">
                  Join SSF's ecosystem as a strategic partner. Bring your federation, venue, or club into the most connected sports business network in the region.
                </p>
                <Link to="/contact" className="mt-auto font-bold text-[14px] text-[#1B30D6] hover:text-[#0A0E2E] uppercase tracking-wider flex items-center gap-2 group transition-colors w-fit">
                  Become a Partner
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </motion.div>

             {/* CTA CARD 2 */}
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.2 }}
               className="flex flex-col"
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#0A0E2E]/10 rounded-full">
                    <TrendingUp size={20} className="text-[#1B30D6]" />
                  </div>
                  <h3 className="font-anton text-[32px] text-[#0A0E2E] uppercase m-0 leading-[1.1] tracking-wide">
                    Build With Us
                  </h3>
                </div>
                <p className="text-[#6B7280] text-[16px] leading-[1.7] mb-8 max-w-md">
                  Have a sports idea? We have the network, structure, and execution capability to build it into a commercial reality. From concept to launch.
                </p>
                <Link to="/contact" className="mt-auto font-bold text-[14px] text-[#1B30D6] hover:text-[#0A0E2E] uppercase tracking-wider flex items-center gap-2 group transition-colors w-fit">
                  Start a Conversation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
