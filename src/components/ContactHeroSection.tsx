'use client';
import { motion } from 'framer-motion';

export default function ContactHeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team of experts</p>
        </motion.div>
      </div>
    </section>
  );
} 