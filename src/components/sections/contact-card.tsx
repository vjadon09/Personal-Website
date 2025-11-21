"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/sections/contact-form';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function ContactCard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* animated subtle background behind the card */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        aria-hidden
      />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl">Contact Me</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">Reach out, I would love to connect! </p>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <ContactForm />
            </div>

            <h3 className="mt-6 mb-3 text-lg sm:text-xl font-medium">FAQ</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>How long will it take to hear a reply from you?</AccordionTrigger>
                <AccordionContent>It typically takes 24 hours for me to respond. Thanks for your patience.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>I have not heard back yet — what should I do?</AccordionTrigger>
                <AccordionContent>
                  Apologies if you haven&apos;t heard back from me yet. I may have missed your message or been busy. Feel free to send another email and I&apos;ll get back to you as soon as I can.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
