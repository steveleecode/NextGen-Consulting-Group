'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import { 
  ChartBarIcon, 
  BoltIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  ChartPieIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Advanced Analytics',
    description: 'Combined strategy experience and analytical expertise that enables decision-making and creates value.',
    icon: ChartBarIcon,
  },
  {
    title: 'Agile',
    description: 'We solve complex problems fast. Our cross-functional teams use structured and iterative approaches to get results.',
    icon: BoltIcon,
  },
  {
    title: 'Change Management',
    description: 'We predict, measure, and manage risks associated with change management.',
    icon: UserGroupIcon,
  },
  {
    title: 'Corporate Finance',
    description: 'We link corporate strategy, financial strategy, transactions, and a capital market perspective to create value.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Information Technology',
    description: 'We realize the full potential of IT resources, investments, and assets.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Organization',
    description: "We ensure that the entire organization is aligned and set up to successfully deliver the company's objectives.",
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Strategy',
    description: 'We tailor solutions that deliver results and achieve sustained growth.',
    icon: ChartPieIcon,
  },
  {
    title: 'Transformation',
    description: 'We utilize cross-functional efforts to alter the financial, operational, and strategic trajectory of a business.',
    icon: ArrowPathIcon,
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our company was started by a group of programmers and designers in college more than 21 years ago. 
              It was driven by a passion to prepare clients for business growth through information technology. 
              Since then, we have become the leading provider of the necessary tools, strategies, and resources 
              that manage our clients and ensure that they are on the right track.
            </p>
          </div>
        </div>
      </section>
      <ServicesGrid services={services} />
      {/* Footer */}
      <footer className="bg-white text-gray-900 py-12 border-t border-orange-100 dark:bg-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">NEXTGEN CONSULTING GROUP</h3>
            <p className="text-gray-500 mb-4">An Insured, Licensed, Bonded, and Registered Company</p>
            <div className="space-y-2">
              <p>Phone: <span className="text-orange-600 dark:text-orange-400">(888) 306-1115</span></p>
              <p>Email: <span className="text-orange-600 dark:text-orange-400">nextco1@nextcoglobal.com</span></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 