"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import {siteConfig} from '@/config/site.config'


export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">

        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
            {/* SaaS-style background effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">Vaishali Jadon</div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Hello, I&apos;m Vaishali Jadon, a Software Engineering graduate from Toronto Metropolitan University
            who enjoys building scalable systems from the ground up. I&apos;m experienced across backend,
            frontend, automation, and cloud deployment, and I love bringing structure and polish to
            every project I take on.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;ve worked at theScore Media and Gaming, where I helped automate ESPN Bet&apos;s trading
            platform using Selenium, Cucumber BDD, and Kotlin—integrating everything into CI/CD
            pipelines with GitHub and Jenkins for smoother releases. At TMU, I led a full-stack
            FastAPI + MongoDB capstone deployed on Google Cloud with Docker and Kubernetes, and built
            several projects around encryption, distributed systems, and emotion recognition.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Outside of code, I&apos;ve served as Equity, Diversity, and Inclusivity Chair for Women in
            Engineering, organizing programs and mentoring students. I value collaboration, clear
            design, and continuous learning—and I&apos;m always excited to work on products that make an
            impact.
          </p>
        </CardContent>
    </Card>

    </motion.div>
  );
}
