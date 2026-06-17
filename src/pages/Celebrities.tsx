import React, { useState, useRef } from 'react';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const mainCelebs = [
  {
    id: "ronaldinho",
    name: "Ronaldinho",
    sport: "Football",
    property: "Soccer 60",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",
    bio: "One of the greatest and most skillful players of his generation. Winner of the FIFA World Cup and Ballon d'Or.",
  },
  {
    id: "kaka",
    name: "Kaká",
    sport: "Football",
    property: "Soccer 60",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1200&auto=format&fit=crop",
    bio: "An elegant playmaker known for his vision and passing. FIFA World Player of the Year and World Cup champion.",
  },
  {
    id: "seedorf",
    name: "Clarence Seedorf",
    sport: "Football",
    property: "Soccer 60",
    image: "https://images.unsplash.com/photo-1518605368461-1e12d5ee5574?q=80&w=1200&auto=format&fit=crop",
    bio: "The only player to have won the UEFA Champions League with three distinct clubs. A true midfield maestro.",
  },
  {
    id: "totti",
    name: "Francesco Totti",
    sport: "Football",
    property: "Soccer 60",
    image: "https://images.unsplash.com/photo-1550993179-8809aa1ba4e3?q=80&w=1200&auto=format&fit=crop",
    bio: "The Golden Boy of Rome. A creative playmaker and legendary forward who defined loyalty in modern football.",
  }
];

const ambassadorStrip = [
  { id: "a1", name: "To Be Announced", sport: "Cricket", property: "DOCA", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop", bio: "Updates coming soon for our newest Cricket ambassadors representing the Dubai Open for Cricket Championship." },
  { id: "a2", name: "To Be Announced", sport: "Tennis", property: "Dubai Open", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", bio: "Updates coming soon for our elite Tennis ambassadors joining the Dubai Open." },
  { id: "a3", name: "To Be Announced", sport: "Entertainment", property: "SSF Media", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", bio: "Celebrity entertainment icons bridging sports and media culture." },
  { id: "a4", name: "To Be Announced", sport: "Pickleball", property: "Dubai Padel", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=800&auto=format&fit=crop", bio: "Global champions elevating the fast-growing racket sport ecosystem." },
  { id: "a5", name: "To Be Announced", sport: "Kabaddi", property: "IKL", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", bio: "Strategic alliances with top-tier international Kabaddi athletes." },
  { id: "a6", name: "To Be Announced", sport: "Cricket", property: "DOCA", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", bio: "Updates coming soon for our newest Cricket ambassadors." },
  { id: "a7", name: "To Be Announced", sport: "Football", property: "Soccer 60", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", bio: "Next generation legends expanding the global footprint of Soccer 60." },
  { id: "a8", name: "To Be Announced", sport: "Tennis", property: "Dubai Open", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop", bio: "Updates coming soon for our elite Tennis ambassadors." },
];

export default function Celebrities() {
  const [selectedAmbassador, setSelectedAmbassador] = useState<any>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (person: any) => {
    setSelectedAmbassador(person);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedAmbassador(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="bg-white w-full min-h-screen font-barlow relative text-[#0A0E2E]">

      {/* Hero Section */}
      <section className="relative w-full pt-[160px] pb-[80px] px-8 bg-white border-b border-[#0A0E2E]/10">
        <div className="max-w-[75rem] mx-auto w-full relative">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <motion.p 
                className="text-[#1B30D6] uppercase tracking-[0.2em] font-semibold text-[13px] mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Global Network
              </motion.p>

              <motion.h1 
                className="font-anton text-[72px] md:text-[110px] text-blue-600 leading-[1.1] uppercase tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                OUR CELEBRITIES<br/>& AMBASSADORS
              </motion.h1>
            </div>
          </div>

          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[18px] md:text-[22px] text-[#6B7280] leading-[1.6]">
              SSF's properties are anchored by the world's greatest sports legends. Their names open doors. Their faces fill seats. Their stories inspire the next generation of fans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Celebrity Grid */}
      <section className="w-full px-8 py-[100px] bg-[#F8F9FF] overflow-hidden">
        <div className="max-w-[75rem] mx-auto w-full">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            {mainCelebs.map((celeb) => (
              <motion.div 
                key={celeb.id}
                variants={{
                  hidden: { opacity: 1 }, // Keep opacity 1 so it doesn't fade twice, just acts as a stagger placeholder
                  visible: { opacity: 1 }
                }}
                className="aspect-[3/4]"
              >
                <motion.div 
                  variants={{
                    hidden: { x: -700, opacity: 0, filter: "blur(14px)" },
                    visible: { 
                      x: 0, 
                      opacity: 1, 
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                  className="w-full h-full group relative bg-white overflow-hidden cursor-pointer shadow-sm border border-[#0A0E2E]/5 rounded-xl"
                  onClick={() => handleOpenModal(celeb)}
                >
                  {/* Image */}
                  <img 
                    src={celeb.image} 
                    alt={celeb.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle dark overlay for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0E2E]/80 to-transparent pointer-events-none" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-anton text-[32px] md:text-[36px] text-white leading-[1.1] uppercase tracking-wide mb-2">
                      {celeb.name}
                    </h3>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span className="font-semibold text-[13px] text-white uppercase tracking-wider transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                        {celeb.sport}
                      </span>
                      <span className="font-medium text-[11px] text-white/70 uppercase tracking-widest transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {celeb.property}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Ambassador Strip */}
      <section className="w-full py-[100px] bg-white border-y border-[#0A0E2E]/10 overflow-hidden relative">
        <div className="max-w-[75rem] mx-auto w-full px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <h2 className="font-anton text-[64px] md:text-[80px] text-blue-600 leading-[1.1] uppercase tracking-wide mb-4">
               More From The Network
            </h2>
            <p className="text-[#6B7280] text-[16px] max-w-2xl">
               Upcoming ambassadors across cricket, tennis, pickleball and entertainment. Integrating global talent directly into new IP structures.
            </p>
          </div>
          
          <div className="flex gap-4 shrink-0 mt-4 md:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-[#0A0E2E]/10 flex items-center justify-center text-[#0A0E2E] hover:bg-[#1B30D6] hover:text-white transition-colors hover:border-transparent"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-[#0A0E2E]/10 flex items-center justify-center text-[#0A0E2E] hover:bg-[#1B30D6] hover:text-white transition-colors hover:border-transparent"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div className="w-full relative px-8">
           <motion.div 
             ref={scrollContainerRef}
             className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar max-w-[75rem] mx-auto scroll-smooth"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={{
               visible: {
                 transition: {
                   staggerChildren: 0.12,
                   staggerDirection: -1
                 }
               }
             }}
           >
             {ambassadorStrip.map((item) => (
                <motion.div 
                   key={item.id}
                   variants={{
                     hidden: { opacity: 1 }, // Keep opacity 1 so it doesn't fade twice, acts as a stagger placeholder
                     visible: { opacity: 1 }
                   }}
                   className="shrink-0 w-[240px] md:w-[280px] aspect-[3/4] snap-start"
                >
                  <motion.div
                     variants={{
                       hidden: { x: 700, opacity: 0, filter: "blur(14px)" },
                       visible: { 
                         x: 0, 
                         opacity: 1, 
                         filter: "blur(0px)",
                         transition: {
                           duration: 0.5,
                           ease: [0.16, 1, 0.3, 1]
                         }
                       }
                     }}
                     className="w-full h-full relative overflow-hidden group cursor-pointer bg-[#F8F9FF] border border-[#0A0E2E]/5 rounded-xl"
                     onClick={() => handleOpenModal(item)}
                  >
                    <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E2E]/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 p-6 pt-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                      <h4 className="font-anton text-[24px] md:text-[28px] text-white leading-[1.1] uppercase tracking-wide mb-1">{item.name}</h4>
                      <span className="font-medium text-[12px] text-white/70 uppercase tracking-wider">{item.property}</span>
                    </div>
                  </motion.div>
                </motion.div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* Stat Callout Block */}
      <section className="w-full py-[120px] px-8 bg-white border-y border-[#0A0E2E]/10">
        <div className="max-w-[75rem] mx-auto w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col md:flex-row border border-[#0A0E2E]/10 shadow-[0_8px_30px_rgba(10,14,46,0.03)] bg-white rounded-sm overflow-hidden"
          >
            
            {/* Left Col */}
            <div className="w-full md:w-5/12 bg-[#F8F9FF] border-b md:border-b-0 md:border-r border-[#0A0E2E]/10 relative overflow-hidden">
              <motion.div
                variants={{
                  hidden: { clipPath: "inset(100% 0 0 0)" },
                  visible: { clipPath: "inset(0% 0 0 0)" }
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full h-full flex flex-col justify-center items-center text-center p-12 lg:p-20"
              >
                <div className="relative mb-6 px-4">
                  <div className="font-anton text-[100px] lg:text-[140px] text-[#1B30D6] leading-[1.1] tracking-wide relative z-0">
                     40+
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="font-anton text-[32px] md:text-[42px] text-[#0A0E2E] uppercase leading-[1.1] tracking-wide max-w-sm m-0">
                     Global Sports<br/>Celebrities Associated<br/>With SSF
                  </h3>
                </div>
              </motion.div>

              {/* The traveling blue line */}
              <motion.div
                variants={{
                  hidden: { top: "100%" },
                  visible: { top: "0%" }
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute left-0 w-full h-[4px] bg-[#1B30D6] z-10"
              />
            </div>

            {/* Right Col */}
            <div className="w-full md:w-7/12 bg-white relative overflow-hidden">
               <motion.div
                 variants={{
                   hidden: { clipPath: "inset(0 100% 0 0)" },
                   visible: { clipPath: "inset(0 0% 0 0)" }
                 }}
                 transition={{ duration: 0.9, ease: "easeOut" }}
                 className="w-full h-full p-12 lg:p-20 flex flex-col justify-center gap-16"
               >
                 <div>
                   <div className="relative pb-4 mb-6">
                     <h4 className="font-semibold text-[13px] text-[#1B30D6] uppercase tracking-[0.2em] relative z-0">
                       Sports Represented
                     </h4>
                     <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0A0E2E]/10" />
                   </div>
                   <div className="text-[20px] md:text-[24px] text-[#0A0E2E] font-anton tracking-wide flex flex-wrap gap-x-6 gap-y-3">
                     <span>Football</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Cricket</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Tennis</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Kabaddi</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Pickleball</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Entertainment</span>
                   </div>
                 </div>

                 <div>
                   <div className="relative pb-4 mb-6">
                     <h4 className="font-semibold text-[13px] text-[#1B30D6] uppercase tracking-[0.2em] relative z-0">
                       Regions Covered
                     </h4>
                     <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0A0E2E]/10" />
                   </div>
                   <div className="text-[20px] md:text-[24px] text-[#0A0E2E] font-anton tracking-wide flex flex-wrap gap-x-6 gap-y-3">
                     <span>Europe</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Americas</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>Asia</span> <span className="text-[#1B30D6]/30">•</span>
                     <span>MENA</span>
                   </div>
                 </div>
               </motion.div>

               {/* The traveling blue line */}
               <motion.div
                 variants={{
                   hidden: { left: "0%" },
                   visible: { left: "100%" }
                 }}
                 transition={{ duration: 0.9, ease: "easeOut" }}
                 className="absolute top-0 h-full w-[4px] bg-[#1B30D6] z-10"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full border-t border-[#0A0E2E]/10 py-[120px] px-8 bg-white text-[#0A0E2E]">
         <div className="max-w-[75rem] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-anton text-[56px] md:text-[80px] leading-[1.1] uppercase tracking-wide max-w-2xl m-0">
               Integrate The Icons
            </h2>
            <Link to="/contact" className="bg-[#1B30D6] text-white hover:bg-[#0A0E2E] transition-colors duration-300 h-[56px] px-[40px] text-[14px] font-bold uppercase tracking-[0.1em] rounded-sm flex items-center justify-center gap-3 w-fit shrink-0">
              Partner With Us
              <ArrowRight size={18} />
            </Link>
         </div>
      </section>

      <Footer />

      {/* Ambassador Modal Overlay */}
      <AnimatePresence>
        {selectedAmbassador && (
          <>
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-[#0A0E2E]/60 backdrop-blur-sm"
                onClick={handleCloseModal}
             />
             
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
             >
                <div className="bg-white w-full h-[90vh] sm:h-auto sm:max-h-[90vh] max-w-5xl rounded-sm overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative">
                  
                  <button 
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#0A0E2E] hover:bg-[#1B30D6] hover:text-white transition-colors shadow-sm"
                    onClick={handleCloseModal}
                  >
                    <X size={20} />
                  </button>

                  <div className="w-full md:w-5/12 h-[35vh] md:h-[600px] relative">
                     <img src={selectedAmbassador.image} className="w-full h-full object-cover" alt={selectedAmbassador.name} />
                  </div>

                  <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col overflow-y-auto bg-white">
                    <span className="font-semibold text-[13px] text-[#1B30D6] uppercase tracking-[0.2em] mb-4">
                      {selectedAmbassador.sport}
                    </span>
                    <h3 className="font-anton text-[48px] md:text-[64px] text-[#0A0E2E] leading-[1.1] uppercase tracking-wide mb-4">
                       {selectedAmbassador.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-[#F8F9FF] text-[#1B30D6] border border-[#1B30D6]/20 px-4 py-2 mb-8 self-start rounded-sm">
                       <span className="font-semibold text-[11px] uppercase tracking-widest text-[#0A0E2E]">Associated Property:</span>
                       <span className="font-bold text-[11px] uppercase tracking-widest">{selectedAmbassador.property}</span>
                    </div>

                    <p className="text-[16px] md:text-[18px] text-[#6B7280] leading-relaxed mb-12">
                      {selectedAmbassador.bio || "Full biography and associated media package available upon request for strategic partners and investors."}
                    </p>

                    <div className="mt-auto pt-8 border-t border-[#0A0E2E]/10 flex flex-col sm:flex-row gap-4">
                      <button className="h-[56px] px-8 border border-[#0A0E2E]/20 text-[#0A0E2E] font-bold text-[14px] rounded-sm uppercase tracking-wider hover:bg-[#F8F9FF] transition-colors flex items-center justify-center gap-2">
                         <Play size={18} />
                         View Gallery
                      </button>
                    </div>
                  </div>
                </div>
             </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
