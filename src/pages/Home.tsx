// @ts-nocheck
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
const adilImg = "/images/adil.png";
const saifImg = "/images/saif.png";
import { motion, useInView, animate, useScroll, useTransform, useSpring } from "motion/react";
import {
  ChevronRight,
  ArrowDown,
  Activity,
  Tv,
  Cpu,
  TrendingUp,
  Users,
  BadgeDollarSign,
  Trophy,
  RadioTower,
  Building2,
  Star,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";

export function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center px-8 bg-deep-navy overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/hero-bg.png"
          alt="Sports Stadium"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/70 to-deep-navy/30" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVars}
        className="text-center flex flex-col items-center z-10 max-w-5xl"
      >
        <motion.span
          variants={itemVars}
          className="text-gold-accent font-barlow text-sm font-bold tracking-[0.2em] mb-6 uppercase"
        >
          Dubai, UAE · Sports. Media. Technology. Investment.
        </motion.span>

        <motion.div variants={itemVars} className="relative inline-block mb-6 w-full px-4">
          <h1 className="text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] leading-[1.1] font-anton text-pure-white uppercase m-0 p-0 break-words">
            WE BUILD SPORTS ECONOMIES
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-royal-blue origin-center"
          />
        </motion.div>

        <motion.p
          variants={itemVars}
          className="font-barlow text-mid-grey text-lg max-w-3xl mb-12"
        >
          SSF is a Dubai-based sports services company that creates, develops and commercialises world-class sports IP — from leagues and franchises to media platforms and investment products.
        </motion.p>

        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
        >
          <button className="bg-royal-blue text-pure-white hover:bg-pure-white hover:text-royal-blue transition-colors px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] font-barlow flex items-center justify-center gap-2">
            Explore Our Properties
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="bg-transparent border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-navy transition-colors px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] font-barlow flex items-center justify-center gap-2">
            Investor Deck
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center text-pure-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
}

/** STATS STRIP SECTION */
function AnimatedNumber({ value }: { value: string }) {
  const nodeRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!nodeRef.current || !inView) return;

    const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
    if (!match) return;

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    const controls = animate(0, target, {
      duration: 2,
      delay: 0.2,
      ease: "easeOut",
      onUpdate(currentValue) {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${prefix}${Math.round(currentValue)}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <h2
      ref={nodeRef}
      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-anton text-royal-blue leading-[1.1] mb-4 tracking-tighter whitespace-nowrap drop-shadow-sm"
    >
      {value.replace(/[0-9]+/, "0")}
    </h2>
  );
}

function StatsStrip() {
  const stats = [
    { number: "10+", label: "Sports IP Properties Built & Delivered" },
    { number: "40+", label: "Global Sports Celebrities" },
    { number: "8", label: "Active Sports Properties" },
    { number: "$317M", label: "Projected 10-Year Revenue" },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVars = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, type: "spring", bounce: 0.4 },
    },
  };

  return (
    <section className="min-h-screen shrink-0 w-full relative bg-pure-white flex items-center justify-center px-8 z-10 py-20">
      <div className="max-w-[90rem] w-full mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVars}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 lg:divide-x divide-pale-blue"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              className="flex flex-col items-center justify-center pt-8 md:pt-0"
            >
              <AnimatedNumber value={stat.number} />
              <p className="font-barlow text-deep-navy font-bold text-xl tracking-[0.1em] uppercase text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** SIX PILLARS SECTION */
function SixPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-2020px"]);
  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 25,
    mass: 0.8,
  });

  const pillars = [
    {
      tag: "FRANCHISE",
      icon: <Activity className="w-full h-full" />,
      title: "Sports",
      desc: "Leagues, franchises and sports properties taken from concept to commercial launch. SSF designs, structures and executes.",
    },
    {
      tag: "BROADCAST",
      icon: <Tv className="w-full h-full" />,
      title: "Media",
      desc: "Broadcasting rights, streaming platforms and athlete content networks. SSF's SportsCast Global division drives this.",
    },
    {
      tag: "AI & TECH",
      icon: <Cpu className="w-full h-full" />,
      title: "Technology",
      desc: "AI and data tools for athlete performance tracking, fan engagement apps, smart venue systems and sports business intelligence.",
    },
    {
      tag: "CAPITAL",
      icon: <TrendingUp className="w-full h-full" />,
      title: "Investment",
      desc: "Franchise models, equity participation and commercial rights packages structured to deliver genuine long-term upside for investors.",
    },
    {
      tag: "GRASSROOTS",
      icon: <Users className="w-full h-full" />,
      title: "Community",
      desc: "Fan bases, youth talent development, women's sport and grassroots connection. Sport's soul — and its future commercial base.",
    },
    {
      tag: "REVENUE",
      icon: <BadgeDollarSign className="w-full h-full" />,
      title: "Commercialisation",
      desc: "Sponsorship, naming rights, media deals and digital income streams — every right activated and monetised to its full potential.",
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVars = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section ref={containerRef} className="w-full relative bg-[#f8f9fc] z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-[100px] z-20">
        <div className="w-full mx-auto flex flex-col">
          <motion.div
            className="text-center mb-6 flex flex-col items-center px-4 max-w-[90rem] mx-auto w-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-anton text-royal-blue uppercase tracking-[0.15em] m-0 break-words">
              OUR ECOSYSTEM
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-[80px] h-[3px] bg-royal-blue mt-6 origin-center"
            />
            <p className="mt-6 font-barlow text-[#6B7280] text-[16px]">
              The six forces that power everything SSF builds
            </p>
          </motion.div>

          <div className="w-full overflow-hidden pt-8 pb-16">
            <motion.div
              style={{
                x: smoothX,
                willChange: "transform",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                width: "max-content",
                paddingLeft: "calc(50vw - 190px)",
                paddingRight: "calc(50vw - 190px)",
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVars}
            >
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={itemVars}
                  style={{ minWidth: "380px", maxWidth: "380px", height: "420px" }}
                  className="group shrink-0 relative overflow-hidden bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col p-6 sm:p-8 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-[16px] bg-[#EEF1FF] flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-colors duration-300">
                      <div className="w-7 h-7">{pillar.icon}</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 text-gray-500 px-4 py-[6px] text-[11px] font-bold font-barlow tracking-wider rounded-full uppercase">
                      {pillar.tag}
                    </div>
                  </div>

                  <h3 className="font-anton text-[32px] text-deep-navy mb-4">
                    {pillar.title}
                  </h3>

                  <p className="font-barlow text-[15px] sm:text-[16px] text-[#6B7280] leading-relaxed mb-8 flex-grow">
                    {pillar.desc}
                  </p>

                  <button className="w-full bg-deep-navy text-white group-hover:bg-royal-blue transition-colors duration-300 py-[14px] rounded-full font-barlow font-bold text-[15px] tracking-wide mt-auto">
                    Explore
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Dummy space for scroll tracking */}
      <div className="relative z-10 -mt-[100vh] snap-none">
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
      </div>
    </section>
  );
}

/** FLAGSHIP PROPERTIES SECTION */
function FlagshipProperties() {
  const properties = [
    {
      title: "Soccer 60 — Legend League",
      desc: "A world-class legends football league featuring Ronaldinho, Kaká, Clarence Seedorf and Francesco Totti. $317M projected 10-year revenue.",
      tag: "LAUNCHING 2027",
      emoji: "⚽",
      gradient: "from-deep-navy to-royal-blue",
    },
    {
      title: "Dubai Open Tennis (DOTA)",
      desc: "A flagship professional tennis championship in Dubai. Two successful seasons delivered with the UAE Tennis Federation. Season 3 in planning.",
      tag: "TENNIS",
      emoji: "🎾",
      gradient: "from-deep-navy to-[#1a1c3a]",
    },
    {
      title: "Camp With The Champ",
      desc: "A multi-season cricket platform combining celebrity coaching camps with the world's first mixed-gender cricket format.",
      tag: "CRICKET",
      emoji: "🏕️",
      gradient: "from-deep-navy to-[#0f2922]",
    },
    {
      title: "International Kabaddi League",
      desc: "Exhibition season delivered in 2025. Full franchise Kabaddi league targeting the 500M+ South Asian fanbase globally.",
      tag: "ASIA",
      emoji: "🤼",
      gradient: "from-deep-navy to-[#30161d]",
    },
    {
      title: "Dubai Pickleball Open",
      tag: "PICKLEBALL",
      desc: "Season 1 successfully delivered in 2025. SSF is also driving the UAE Pickleball Federation registration — submitted to the UAE Ministry of Sport.",
      emoji: "🏓",
      gradient: "from-deep-navy to-[#0f1a30]",
    },
    {
      title: "Dubai Open for Cricket Championship (DOCA)",
      tag: "CRICKET 2027",
      desc: "A major new cricket championship for Dubai targeting 2027. Designed as an investable franchise structure from day one.",
      emoji: "🏏",
      gradient: "from-deep-navy to-[#1a0f2e]",
    },
    {
      title: "Champions United",
      tag: "MULTI-SPORT",
      desc: "A cross-sport legends tournament bringing together champions from multiple disciplines. Season 1 targeted for 2027–28.",
      emoji: "🏆",
      gradient: "from-deep-navy to-[#1a2a0f]",
    },
    {
      title: "Dubai Sports Expo",
      tag: "2029",
      desc: "A landmark global sports business, investment and lifestyle expo hosted in Dubai. Targeting investors, federations, clubs and sports technology companies.",
      emoji: "🌐",
      gradient: "from-deep-navy to-[#0f2229]",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  // 8 cards of 380px + 7 gaps of 24px = 2828px shift needed
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-3200px"]);
  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 25,
    mass: 0.8,
  });

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section ref={containerRef} className="w-full relative bg-deep-navy z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-[100px] z-20">
        <div className="w-full mx-auto flex flex-col">
          <motion.div
            className="text-center mb-12 flex flex-col items-center px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-anton text-pure-white uppercase tracking-[0.15em] m-0 break-words">
              FLAGSHIP SPORTS PROPERTIES
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="w-[80px] h-[3px] bg-royal-blue mt-6 origin-center"
            />
            <p className="mt-6 font-barlow text-[#6B7280] text-[16px]">
              Our portfolio of globally scalable sports intellectual properties
            </p>
          </motion.div>

          <div className="w-full overflow-hidden pt-8 pb-16">
            <motion.div
              style={{
                x: smoothX,
                willChange: "transform",
                display: "flex",
                flexDirection: "row",
                gap: "24px",
                width: "max-content",
                paddingLeft: "calc(50vw - 190px)",
                paddingRight: "calc(50vw - 190px)",
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVars}
            >
              {properties.map((prop, i) => (
                <motion.div
                  key={i}
                  variants={itemVars}
                  style={{ minWidth: "380px", maxWidth: "380px", height: "460px" }}
                  className={`group shrink-0 relative overflow-hidden rounded-sm bg-gradient-to-br ${prop.gradient} p-8 flex flex-col items-start border border-transparent hover:border-royal-blue hover:shadow-[0_0_20px_rgba(27,48,214,0.4)] transition-all duration-300 z-10`}
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>

                  <div className="absolute -bottom-8 -right-4 text-[120px] lg:text-[140px] leading-[1.1] opacity-[0.08] select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    {prop.emoji}
                  </div>

                  <div className="bg-gold-accent text-deep-navy px-3 py-1 text-[11px] font-bold font-barlow tracking-wider rounded-full mb-6 mt-2 relative z-10 w-max uppercase">
                    {prop.tag}
                  </div>

                  <h3 className="font-anton text-[28px] lg:text-[32px] leading-[1.1] text-pure-white mb-4 uppercase relative z-10">
                    {prop.title}
                  </h3>
                  <p className="font-barlow text-[15px] text-[#6B7280] group-hover:text-gray-300 transition-colors duration-300 mb-8 flex-grow relative z-10">
                    {prop.desc}
                  </p>

                  <a
                    href="#"
                    className="group/link relative font-barlow font-bold text-royal-blue uppercase tracking-widest text-[13px] transition-colors flex items-center gap-2 mt-auto z-10 pb-1 w-max"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-royal-blue origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex justify-center w-full"
          >
            <button className="border-2 border-royal-blue text-royal-blue font-barlow font-semibold uppercase tracking-widest px-8 py-4 text-sm hover:bg-royal-blue hover:text-pure-white transition-colors duration-300">
              View All Properties
            </button>
          </motion.div>
        </div>
      </div>
      {/* Dummy space for scroll tracking (8 items = 8 screens of scrolling) */}
      <div className="relative z-10 -mt-[100vh] snap-none">
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
        <div className="h-screen w-full pointer-events-none" />
      </div>
    </section>
  );
}

/** WHY INVEST SECTION */
function WhyInvest() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      title: "We Deliver, Not Just Plan",
      desc: "We have built real sports properties from the ground up and delivered them to audiences. Our track record is not a pitch — it is a portfolio.",
      icon: Trophy,
    },
    {
      title: "Structured for Investor Returns",
      desc: "Our franchise models give investors genuine long-term equity upside, not just sponsorship plaques. Six revenue streams per property.",
      icon: TrendingUp,
    },
    {
      title: "Government & Federation Access",
      desc: "Relationships with the Dubai Sports Council, Emirates Cricket Board, UAE Tennis Federation and Ministry of Sport — earned through years of real work.",
      icon: Building2,
    },
    {
      title: "Global Celebrity Network",
      desc: "Access to 40+ sports celebrities — Ronaldinho, Kaká, Seedorf, Totti and more — who add authenticity, media reach and commercial pull to every property.",
      icon: Star,
    },
    {
      title: "Based Where It Matters",
      desc: "Dubai is one of the world's most powerful sports and investment hubs. SSF is embedded here — with the connections, credibility and context to move fast.",
      icon: MapPin,
    },
    {
      title: "Built for the Future",
      desc: "AI integration, media platforms and digital revenue architecture built into every SSF property from day one — not retrofitted later.",
      icon: Cpu,
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const itemVars = {
    hidden: { opacity: 0, x: -40, filter: "blur(2px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen shrink-0 w-full relative bg-pure-white flex flex-col justify-center items-center py-20 px-8 z-10">
      <div className="max-w-[90rem] w-full mx-auto flex flex-col h-full justify-center">
        <motion.h2
          className="text-center text-3xl md:text-5xl font-anton text-deep-navy mb-12 uppercase tracking-[0.15em] shrink-0 break-words"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          WHY WORK WITH SSF
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVars}
        >
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            const isHovered = hoveredCard === i;
            return (
              <motion.div
                key={i}
                variants={itemVars}
                className="group relative overflow-hidden bg-white rounded-xl p-10 lg:p-12 border border-[rgba(27,48,214,0.1)] shadow-[0_4px_24px_rgba(27,48,214,0.07)] hover:border-royal-blue hover:shadow-[0_8px_32px_rgba(27,48,214,0.15)] transition-all duration-300 flex flex-col"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: 'inherit',
                  backgroundImage: `radial-gradient(circle, rgba(27,48,214,${isHovered ? '0.12' : '0.07'}) 1px, transparent 1px)`,
                  backgroundSize: '18px 18px',
                  transition: 'background-image 0.5s ease',
                  pointerEvents: 'none'
                }} />
                <IconComponent className="absolute bottom-4 right-4 w-32 h-32 text-deep-navy opacity-[0.04] group-hover:opacity-[0.07] scale-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-[40px] h-[3px] bg-blue-600 mb-4"></div>
                  <div className="bg-blue-600 text-pure-white px-4 py-1.5 text-[15px] lg:text-[17px] font-anton rounded-full w-max">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="font-anton text-[24px] lg:text-[28px] text-deep-navy uppercase mt-6 mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-barlow text-[16px] lg:text-[18px] text-[#6B7280] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-16 bg-blue-600 text-pure-white rounded-xl px-10 py-10 lg:py-12 font-barlow font-bold text-[20px] lg:text-[24px] italic text-center max-w-4xl mx-auto shadow-xl">
          "SSF builds. There is a real difference between filling a venue for one night and building an asset that keeps paying returns."
        </div>
      </div>
    </section>
  );
}

/** LEADERSHIP SECTION */
function Leadership() {
  const leaders = [
    {
      name: "Mohammad Saif",
      title: "Founder and MD",
      img: saifImg,
      linkedin: "https://www.linkedin.com/in/mohammad-saif-0a884814b"
    },
    {
      name: "Adil Memon",
      title: "CEO and Managing Partner",
      img: adilImg,
      linkedin: "https://www.linkedin.com/in/adil-memon-47b19612"
    },
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVars = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", bounce: 0.3 },
    },
  };

  return (
    <section className="min-h-screen shrink-0 w-full relative bg-pale-blue flex flex-col justify-center items-center py-20 px-8 z-10">
      <div className="max-w-[90rem] w-full mx-auto relative z-10">
        <motion.h2
          className="text-center text-3xl md:text-5xl font-anton text-deep-navy uppercase tracking-[0.15em] break-words"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          OUR LEADERSHIP
        </motion.h2>
        <p className="text-center font-barlow text-[#6B7280] text-[16px] mt-4 mb-12 md:mb-16">
          The people building the future of sports from Dubai
        </p>

        <motion.div
          className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVars}
        >
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              className="w-[380px] min-h-[540px] bg-pure-white border border-[rgba(27,48,214,0.15)] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(27,48,214,0.18)] transition-all duration-300 hover:scale-[1.03] flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-[360px]">
                <img
                  src={leader.img}
                  alt={leader.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="bg-gradient-to-t from-pure-white to-transparent absolute bottom-0 left-0 right-0 h-16 pointer-events-none"></div>
              </div>
              <div className="bg-pure-white px-6 py-5 flex flex-col items-start flex-1 text-left relative">
                <div className="w-8 h-[3px] bg-gold-accent mb-3"></div>
                <h3 className="font-anton text-[24px] text-deep-navy uppercase leading-[1.1] break-words pr-8">
                  {leader.name}
                </h3>
                <p className="font-barlow text-royal-blue font-bold text-[11px] tracking-[0.2em] uppercase mt-1">
                  {leader.title}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 right-6 w-9 h-9 rounded-xl border-[2.5px] border-[#0a66c2] flex items-center justify-center text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-colors duration-300"
                  aria-label={`Visit ${leader.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-[18px] h-[18px]" strokeWidth={3} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/** TRUSTED PARTNERS SECTION */
function TrustedPartners() {
  const row1Base = [
    "Dubai Sports Council",
    "UAE Tennis Federation",
    "Emirates Cricket Board",
    "Ministry of Sport",
    "ILT20",
    "UAE Pickleball Federation",
  ];

  const row2Base = [
    "DP World Tour",
    "FIFA",
    "Rolex",
    "Emirates",
    "Abu Dhabi Sports Council",
    "FIVB",
  ];

  // Repeat the arrays so scrolling by 50% contains plenty of content for seamless infinite looping
  const row1 = [...row1Base, ...row1Base, ...row1Base, ...row1Base, ...row1Base, ...row1Base, ...row1Base, ...row1Base];
  const row2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base, ...row2Base, ...row2Base, ...row2Base, ...row2Base];

  return (
    <section className="shrink-0 w-full relative bg-pure-white py-20 px-8 overflow-hidden z-10 flex flex-col justify-center items-center">
      <motion.div
        className="w-full flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-barlow text-[11px] font-bold tracking-[0.3em] text-royal-blue uppercase text-center mb-4 block">
          TRUSTED PARTNERS & FEDERATIONS
        </span>
        <h2 className="font-anton text-3xl md:text-4xl text-deep-navy uppercase text-center mb-6">
          OUR NETWORK
        </h2>
        <motion.div
          className="w-[80px] h-[3px] bg-royal-blue mx-auto origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="relative flex flex-col gap-8 w-full max-w-[120rem] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <style>{`
          @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .marquee-left { animation: marquee-left 60s linear infinite; }
          .marquee-right { animation: marquee-right 70s linear infinite; }
          .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
        `}</style>

        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, white, transparent)', zIndex: 10 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, white, transparent)', zIndex: 10 }} />

          <div className="marquee-left" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
            {[...row1, ...row1].map((brand, i) => (
              <div key={i} style={{
                padding: '16px 28px', border: '1px solid rgba(27,48,214,0.1)',
                borderRadius: '12px', background: 'white',
                boxShadow: '0 2px 12px rgba(27,48,214,0.06)',
                whiteSpace: 'nowrap', cursor: 'default',
                transition: 'all 0.25s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1B30D6'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(27,48,214,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#0A0E2E', letterSpacing: '0.05em' }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, white, transparent)', zIndex: 10 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, white, transparent)', zIndex: 10 }} />

          <div className="marquee-right" style={{ display: 'flex', gap: '16px', width: 'max-content' }}>
            {[...row2, ...row2].map((brand, i) => (
              <div key={i} style={{
                padding: '16px 28px', border: '1px solid rgba(27,48,214,0.1)',
                borderRadius: '12px', background: 'white',
                boxShadow: '0 2px 12px rgba(27,48,214,0.06)',
                whiteSpace: 'nowrap', cursor: 'default',
                transition: 'all 0.25s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1B30D6'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(27,48,214,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#0A0E2E', letterSpacing: '0.05em' }}>
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/** FINAL CTA STRIP */
function FinalCTA() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="shrink-0 w-full relative bg-[linear-gradient(135deg,#1B30D6_0%,#0A0E2E_100%)] flex flex-col justify-center items-center py-[80px] z-10 overflow-hidden min-h-[320px]">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]"></div>
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)]"></div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVars}
        className="text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-[12px] relative z-10"
      >
        <motion.span
          variants={itemVars}
          className="text-gold-accent font-barlow font-semibold text-[12px] tracking-[0.2em] uppercase"
        >
          THE FUTURE OF SPORT IS BEING BUILT NOW
        </motion.span>
        <motion.h2
          variants={itemVars}
          className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1] md:leading-[1.1] font-anton text-pure-white uppercase tracking-wider m-0 break-words"
        >
          BE PART OF IT.
        </motion.h2>
        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row justify-center gap-[16px] mt-2"
        >
          <button className="bg-pure-white text-royal-blue hover:bg-transparent hover:text-pure-white border-[1.5px] border-pure-white transition-colors duration-250 w-max mx-auto h-[52px] px-[40px] text-sm font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center">
            Partner With Us
          </button>
          <button className="bg-transparent text-pure-white hover:bg-pure-white hover:text-royal-blue border-[1.5px] border-pure-white transition-colors duration-250 w-max mx-auto h-[52px] px-[40px] text-sm font-bold uppercase tracking-[0.15em] font-barlow rounded-[4px] flex items-center justify-center">
            Request Investment Details
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}




export default function Home() {
  return (
    <div className="w-full relative bg-[#F0F2F8] snap-y snap-proximity">
      <div className="snap-start snap-always w-full">
        <Hero />
      </div>

      <div className="snap-start snap-always w-full">
        <StatsStrip />
      </div>

      <div className="w-full snap-none">
        <SixPillars />
      </div>

      <div className="snap-start snap-always w-full">
        <FlagshipProperties />
      </div>

      <div className="snap-start snap-always w-full">
        <WhyInvest />
      </div>

      <div className="snap-start w-full">
        <Leadership />
      </div>

      <div className="w-full">
        <TrustedPartners />
      </div>

      <div className="snap-end snap-always w-full flex flex-col justify-between">
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
