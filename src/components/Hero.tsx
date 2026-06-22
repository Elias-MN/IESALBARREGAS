'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';

const HERO_IMAGE = '/images/iesAlbarregas.jpg';
const TAGS = ['DAW', 'DAM', 'ASIR', 'IA & Big Data', 'Cloud CE'];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
      aria-label="FP Informática · IES Albarregas"
    >
      {/* ── Fondo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/45" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="absolute inset-0 dot-grid opacity-[0.10] z-[1]" />
      <Spotlight className="top-0 left-1/2 -translate-x-1/2" fill="rgba(37,99,235,0.07)" />

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full px-6 lg:px-8 py-32">
        <motion.div
          style={{ opacity, y }}
          className="mx-auto max-w-2xl flex flex-col items-center gap-6 text-center"
        >

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-blue-50 border border-blue-200 text-blue-700">
              <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              IES Albarregas · Mérida, Extremadura
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none tracking-tight w-full"
          >
            <span
              className="block font-bold text-slate-700"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)' }}
            >
              Formación Profesional
            </span>
            <span
              className="block font-black gradient-text-animated mt-1"
              style={{ fontSize: 'clamp(2.8rem, 8.5vw, 5.5rem)' }}
            >
              Informática
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="w-full rounded-2xl px-5 py-3.5 bg-white/75 backdrop-blur-md border border-white/60 shadow-sm"
          >
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Ciclos superiores con la mayor inserción laboral de Extremadura.
              El{' '}
              <strong className="text-slate-900 font-bold">87 %</strong>
              {' '}de nuestros egresados trabaja en el sector en menos de 6 meses.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap justify-center gap-2"
            role="list"
            aria-label="Ciclos formativos"
          >
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                role="listitem"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                className="px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 text-sm text-slate-700 font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            className="flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto"
          >
            <motion.a
              href="#datos"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Ver datos reales
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="#empresas-colaboradoras"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white/70 backdrop-blur-sm text-slate-700 font-semibold text-sm hover:bg-white hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Ver empresas
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}
