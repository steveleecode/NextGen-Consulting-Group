'use client';
import { motion } from 'framer-motion';

export default function SolutionsGrid({ solutions }: { solutions: any[] }) {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-r from-orange-500 to-orange-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Business Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-t-4 border-orange-500"
            >
              <solution.icon className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 