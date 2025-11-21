"use client";

import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function AboutHeader() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="text-center mb-16"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge
          variant="outline"
          className="mb-6 bg-primary/5 text-primary border-primary/20"
        >
          <User className="mr-1 h-3 w-3" aria-hidden="true" />
          About Me
        </Badge>

        <h1
          id="about-heading"
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6"
        >
          {siteConfig.author.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {siteConfig.author.split(" ")[1]}
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Full-stack developer passionate about building modern, scalable web
          applications that make technology more human and approachable.
        </p>
      </motion.div>
    </section>
  );
}
