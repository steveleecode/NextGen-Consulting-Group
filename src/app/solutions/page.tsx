'use client';

import SolutionsHeroSection from '@/components/SolutionsHeroSection';
import SolutionsGrid from '@/components/SolutionsGrid';
import SolutionsCTA from '@/components/SolutionsCTA';
import Navigation from '@/components/Navigation';
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
      <SolutionsHeroSection />
      <SolutionsGrid solutions={solutions} />
      <SolutionsCTA />
    </>
  );
} 