'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ContactHeroSection from '@/components/ContactHeroSection';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
    const formspreeAction = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`;
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        <ContactHeroSection />

        <ContactInfoCards />

        <ContactForm />
      </main>
    </>
  );
} 