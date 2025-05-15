'use client';
import { motion } from 'framer-motion';

export default function SolutionsCTA() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
} 