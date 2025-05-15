'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  BoltIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  ChartPieIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'Advanced Analytics',
    description: 'We have a combined strategy experience and analytical expertise that enables decision-making and creates value.',
    icon: ChartBarIcon,
    features: [
      'Data-driven decision making',
      'Predictive analytics',
      'Business intelligence',
      'Performance metrics',
    ],
  },
  {
    title: 'Agile Solutions',
    description: 'We solve complex problems fast. Our cross-functional teams use structured and iterative approaches to get results.',
    icon: BoltIcon,
    features: [
      'Rapid prototyping',
      'Iterative development',
      'Cross-functional teams',
      'Continuous improvement',
    ],
  },
  {
    title: 'Change Management',
    description: 'We predict, measure, and manage risks associated with change management.',
    icon: UserGroupIcon,
    features: [
      'Organizational change',
      'Risk assessment',
      'Stakeholder management',
      'Training and development',
    ],
  },
  {
    title: 'Corporate Finance',
    description: 'We link corporate strategy, financial strategy, transactions, and a capital market perspective to create value.',
    icon: CurrencyDollarIcon,
    features: [
      'Financial planning',
      'Investment strategy',
      'Risk management',
      'Capital optimization',
    ],
  },
  {
    title: 'Information Technology',
    description: 'We realize the full potential of IT resources, investments, and assets.',
    icon: ComputerDesktopIcon,
    features: [
      'Digital transformation',
      'IT infrastructure',
      'Cybersecurity',
      'Cloud solutions',
    ],
  },
  {
    title: 'Organization Development',
    description: "We ensure that the entire organization is aligned and set up to successfully deliver the company's objectives.",
    icon: BuildingOfficeIcon,
    features: [
      'Organizational design',
      'Talent management',
      'Culture transformation',
      'Leadership development',
    ],
  },
  {
    title: 'Strategic Planning',
    description: 'We tailor solutions that deliver results and achieve sustained growth.',
    icon: ChartPieIcon,
    features: [
      'Market analysis',
      'Competitive strategy',
      'Growth planning',
      'Performance optimization',
    ],
  },
  {
    title: 'Business Transformation',
    description: 'We utilize cross-functional efforts to alter the financial, operational, and strategic trajectory of a business.',
    icon: ArrowPathIcon,
    features: [
      'Process optimization',
      'Digital transformation',
      'Change management',
      'Performance improvement',
    ],
  },
];

export default function Solutions() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4">Business Solutions</h1>
              <p className="text-xl">Comprehensive solutions for your business needs</p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="min-h-screen py-20 bg-gradient-to-r from-orange-500 to-orange-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-16">Business Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={solution.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-t-4 border-orange-500">
                  <solution.icon className="h-12 w-12 text-orange-600 dark:text-orange-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
    </>
  );
} 