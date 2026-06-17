import React, { useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const nodes = [
  {
    name: "Dubai Open for Cricket Championship (DOCA)",
    status: "2027 LAUNCH",
    statusType: "launch",
    desc: "A major new cricket championship for Dubai. Franchise structure from day one. Targeting international TV rights, title sponsorship and 6 investable franchise slots. Investment enquiries open."
  },
  {
    name: "Champions United",
    status: "2027–28 SEASON 1",
    statusType: "launch",
    desc: "A cross-sport legends tournament bringing together champions from multiple disciplines. Global broadcast potential. Celebrity lineup currently in discussion."
  },
  {
    name: "Soccer 60 Legend League — Season 2 & Global Expansion",
    status: "2027 ONWARDS",
    statusType: "launch",
    desc: "Expansion from 4 to 7 franchises across UAE emirates. International broadcast rights. Sovereign partnership under discussion. Franchise slots open for investment."
  },
  {
    name: "International Kabaddi League — Full Commercial Launch",
    status: "IN DEVELOPMENT",
    statusType: "development",
    desc: "Following a successful exhibition in 2025, the full franchise Kabaddi league targeting the 500M+ South Asian fanbase is in commercial structure development. Investor and franchise partner discussions underway."
  },
  {
    name: "UAE Table Tennis Premier League (UATTPL)",
    status: "IN DEVELOPMENT",
    statusType: "development",
    desc: "A franchise-based table tennis league for the UAE, developed in cooperation with the national federation. Four founding franchises. Global format rights with expansion potential."
  },
  {
    name: "UAE Federation International League Franchise Blueprint",
    status: "CONCEPT STAGE",
    statusType: "concept",
    desc: "SSF's visionary concept to work with UAE national sports federations to establish exclusive international franchise leagues across multiple sports simultaneously — creating a UAE-anchored multi-sport investment ecosystem."
  },
  {
    name: "AI-Driven Sports Platforms",
    status: "IN DEVELOPMENT",
    statusType: "development",
    desc: "Multiple AI-powered platforms in development covering fan engagement, athlete analytics, broadcast enhancement and sports business intelligence. Details available under NDA to qualified investors."
  },
  {
    name: "Dubai Sports Expo",
    status: "2029",
    statusType: "launch",
    desc: "A landmark global sports business and investment expo hosted in Dubai. Bringing together federations, investors, clubs, technology companies and sports celebrities. Sponsorship and exhibition opportunities open."
  }
];

const getStatusColor = (type: string) => {
  switch (type) {
    case 'launch':
      return "bg-[#1B30D6] text-white";
    case 'development':
      return "bg-[#E8C84A] text-[#0A0E2E]";
    case 'concept':
      return "bg-transparent border border-[#0A0E2E]/30 text-[#0A0E2E]";
    default:
      return "bg-black text-white";
  }
};

const renderDescWithHighlights = (desc: string, nodeDelay: number) => {
  const phrases = [
    "6 investable franchise slots",
    "Investment enquiries open",
    "Global broadcast potential",
    "4 to 7 franchises",
    "Franchise slots open for investment",
    "500M+ South Asian fanbase",
    "Four founding franchises",
    "UAE-anchored multi-sport investment ecosystem",
    "under NDA to qualified investors",
    "Sponsorship and exhibition opportunities open"
  ];

  let result: React.ReactNode[] = [desc];
  let hIndex = 0;

  phrases.forEach(phrase => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const parts = part.split(phrase);
      if (parts.length === 1) return [part];
      
      const newParts: React.ReactNode[] = [];
      parts.forEach((p, i) => {
        if (i > 0) {
          const highlightDelay = nodeDelay + 0.35 + 0.2 + (hIndex * 0.15);
          newParts.push(
            <span key={`${phrase}-${hIndex}`} className="relative inline-block px-1 -mx-1 z-0">
              <motion.span 
                className="absolute inset-0 bg-[#E8C84A]/30 z-[-1] origin-left"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut", delay: highlightDelay } }
                }}
              />
              <span className="relative z-10">{phrase}</span>
            </span>
          );
          hIndex++;
        }
        newParts.push(p);
      });
      return newParts;
    });
  });

  return result;
};

export default function Pipeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if ((e.deltaY > 0 && el.scrollLeft >= maxScroll - 1) || 
            (e.deltaY < 0 && el.scrollLeft <= 1)) {
          return;
        }
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen font-barlow text-[#0A0E2E] relative overflow-hidden flex flex-col">
      <div className="relative w-full pt-32 pb-12 mb-12 flex-shrink-0">
        <motion.div 
          className="absolute inset-0 bg-[#0A0E2E] z-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="w-full max-w-[75rem] mx-auto px-8 relative z-10">
          <motion.h1 
            className="font-anton text-[64px] md:text-[80px] text-[#1B30D6] leading-[1.1] uppercase tracking-wide mb-6 text-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.35, ease: "easeOut" }}
          >
            Future Projects & Pipeline
          </motion.h1>
          <motion.p 
            className="text-[18px] md:text-[22px] text-[#A0AABF] max-w-3xl leading-relaxed text-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.35, ease: "easeOut" }}
          >
            SSF's pipeline extends well beyond our current portfolio. These are the projects in active development, advanced planning, or awaiting strategic partnership to launch. The sports economy of the future is being built now.
          </motion.p>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div className="w-full relative z-10 py-12 flex-grow">
        
        {/* Desktop Horizontal Layout */}
        <motion.div 
          className="hidden lg:block w-full overflow-x-auto hide-scrollbar pb-16 cursor-grab active:cursor-grabbing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          ref={scrollRef}
        >
          <div className="flex items-stretch space-x-12 relative w-max px-8 py-12">
            
            {/* Horizontal Line connecting nodes */}
            <motion.div 
              className="absolute left-[202px] right-[202px] top-1/2 h-[3px] bg-[#1B30D6] shadow-[0_0_15px_rgba(27,48,214,0.6)] -translate-y-1/2 z-0 origin-left pointer-events-none"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 1.8, ease: "linear" } }
              }}
            />
            
            {nodes.map((node, idx) => {
              const nodeDelay = (idx / (nodes.length - 1)) * 1.8;
              return (
                <motion.div 
                  key={idx}
                  className="relative w-[340px] z-10 flex flex-col"
                  variants={{
                    hidden: { opacity: 0, y: idx % 2 === 0 ? 30 : -30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut", delay: nodeDelay } }
                  }}
                >
                  {/* Top Half */}
                  <div className="flex-1 flex flex-col justify-end pb-[40px] relative">
                    {idx % 2 !== 0 && (
                      <div className="p-8 bg-[#F8F9FF] border border-[#0A0E2E]/10 w-full hover:border-[#1B30D6] hover:shadow-[0_8px_30px_rgba(10,14,46,0.06)] transition-all duration-300">
                        <span className={`inline-block px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-widest ${getStatusColor(node.statusType)}`}>
                          {node.status}
                        </span>
                        <h3 className="font-anton text-3xl uppercase tracking-wide mb-3 leading-tight text-[#0A0E2E]">{node.name}</h3>
                        <p className="text-[#0A0E2E]/70 text-[15px] leading-relaxed">{renderDescWithHighlights(node.desc, nodeDelay)}</p>
                      </div>
                    )}
                  </div>

                  {/* Node */}
                  <div className="h-0 relative flex justify-center items-center z-20 w-full">
                  </div>

                  {/* Bottom Half */}
                  <div className="flex-1 flex flex-col justify-start pt-[40px] relative">
                    {idx % 2 === 0 && (
                      <div className="p-8 bg-[#F8F9FF] border border-[#0A0E2E]/10 w-full hover:border-[#1B30D6] hover:shadow-[0_8px_30px_rgba(10,14,46,0.06)] transition-all duration-300">
                        <span className={`inline-block px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-widest ${getStatusColor(node.statusType)}`}>
                          {node.status}
                        </span>
                        <h3 className="font-anton text-3xl uppercase tracking-wide mb-3 leading-tight text-[#0A0E2E]">{node.name}</h3>
                        <p className="text-[#0A0E2E]/70 text-[15px] leading-relaxed">{renderDescWithHighlights(node.desc, nodeDelay)}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile / Tablet Vertical Layout */}
        <motion.div 
          className="lg:hidden flex flex-col relative px-8 gap-10 mt-8 pb-16 min-h-screen"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-[42px] top-[40px] bottom-16 w-[3px] bg-[#1B30D6] shadow-[0_0_15px_rgba(27,48,214,0.6)] z-0 origin-top pointer-events-none"
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 1, transition: { duration: 1.8, ease: "linear" } }
            }}
          />
          
          {nodes.map((node, idx) => {
            const nodeDelay = (idx / (nodes.length - 1)) * 1.8;
            return (
            <motion.div 
              key={idx}
              className="relative z-10 flex ml-12 sm:ml-16"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut", delay: nodeDelay } }
              }}
            >


              {/* Card */}
              <div className="p-6 sm:p-8 bg-[#F8F9FF] border border-[#0A0E2E]/10 w-full hover:border-[#1B30D6] hover:shadow-[0_8px_30px_rgba(10,14,46,0.06)] transition-all duration-300">
                <span className={`inline-block px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-widest ${getStatusColor(node.statusType)}`}>
                  {node.status}
                </span>
                <h3 className="font-anton text-3xl uppercase tracking-wide mb-3 leading-tight text-[#0A0E2E]">{node.name}</h3>
                <p className="text-[#0A0E2E]/70 text-[15px] leading-relaxed">{renderDescWithHighlights(node.desc, nodeDelay)}</p>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* QUOTE AND CTA */}
      <div className="max-w-[75rem] mx-auto w-full px-8 relative z-10 text-center pb-24 pt-12">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           className="flex flex-col items-center"
        >
          <motion.div 
            className="text-[#1B30D6] font-anton text-[36px] md:text-[48px] leading-[1.1] uppercase tracking-wide mb-16 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, scale: 0.96, y: 15 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
          >
            "The pipeline is the proof. SSF does not wait for opportunity — we create it."
          </motion.div>

          <div className="flex flex-col items-center justify-center relative pt-16 w-full">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[1px] bg-[#0A0E2E]/10 origin-left"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.4, delay: 0.6, ease: "easeOut" } }
              }}
            />
            <motion.h2 
              className="font-anton text-[48px] md:text-[64px] leading-[1.1] uppercase tracking-wide mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 1.0, ease: "easeOut" } }
              }}
            >
              Join the Ecosystem
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8 w-full sm:w-auto">
              <motion.div
                className="w-full sm:w-auto"
                variants={{
                  hidden: { opacity: 0, y: 15, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, delay: 1.25, ease: "easeOut" } }
                }}
              >
                <Link 
                  to="/contact" 
                  className="bg-[#1B30D6] text-white hover:bg-[#1525A6] transition-colors duration-300 h-[60px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center w-full"
                >
                  Register for Early Access
                </Link>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                variants={{
                  hidden: { opacity: 0, y: 15, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, delay: 1.35, ease: "easeOut" } }
                }}
              >
                <Link 
                  to="/contact" 
                  className="bg-transparent border border-[#0A0E2E]/30 text-[#0A0E2E] hover:bg-[#0A0E2E]/5 transition-colors duration-300 h-[60px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center w-full"
                >
                  Request Full Pipeline Overview
                </Link>
              </motion.div>
            </div>
            <motion.p 
              className="text-[#0A0E2E]/60 text-[15px] max-w-2xl leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 1.5, ease: "easeOut" } }
              }}
            >
              Early registration gives priority access to franchise slots, investment rounds and exclusive commercial partnerships across all SSF properties.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
