'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-700 text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          The Next Generation of Business Consulting
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
        >
          Helping Businesses Reach their Goal
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="tel:888-306-1115"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          888-306-1115
        </motion.a>
      </div>
    </section>
  );
} 