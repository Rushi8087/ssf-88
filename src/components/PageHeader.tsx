// @ts-nocheck
import React from 'react';
import { motion } from 'motion/react';

export function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-anton text-pure-white uppercase mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-barlow text-mid-grey max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
