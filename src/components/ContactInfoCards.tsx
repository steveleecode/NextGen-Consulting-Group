'use client';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactInfoCards() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
          >
            <PhoneIcon className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a href="tel:888-306-1115" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
              888-306-1115
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
          >
            <EnvelopeIcon className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:nextco1@nextcoglobal.com" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
              nextco1@nextcoglobal.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
          >
            <MapPinIcon className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <a
              href="https://www.google.com/maps/place/Nextgen+Consulting+Group+LLC/@47.7087506,-122.1919538,17z/data=!3m2!4b1!5s0x54901278cfa798c7:0x2d358b59f450aeac!4m6!3m5!1s0x5490132f03b2a0f9:0x696fb745f1fe63f!8m2!3d47.7087506!4d-122.1893789!16s%2Fg%2F11jy0653jz?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Kirkland, Washington
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 