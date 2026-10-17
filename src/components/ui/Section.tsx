import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const Reveal: React.FC<{
  children: ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  index,
  label,
  title,
  subtitle,
  children,
}) => (
  <section id={id} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <span className="section-label">
        <span className="text-ink-500">{index}</span>
        <span className="h-px w-6 bg-accent/50" />
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-ink-300">{subtitle}</p>
      )}
    </Reveal>
    {children}
  </section>
);

export default Section;
