'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  const tags = ['DAW', 'DAM', 'ASIR', 'IA & Big Data', 'Cloud'];

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh flex items-center overflow-hidden bg-mesh"
      aria-label="Presentación FP Informática IES Albarregas"
    >
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Spotlight */}
      <Spotlight
        className="-top-40 -left-20 md:left-40 md:-top-32"
        fill="rgba(99,102,241,0.5)"
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-dvh py-28 lg:py-0">

          {/* ── Left: Text ── */}
          <motion.div style={{ opacity, y }} className="flex flex-col gap-7">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                </span>
                IES Albarregas · Mérida, Extremadura
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight"
            >
              <span className="text-white">Forma tu futuro</span>
              <br />
              <span className="gradient-text">en tecnología</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Ciclos superiores de informática con la mayor inserción laboral de Extremadura.
              El&nbsp;<strong className="text-slate-200 font-semibold">87&nbsp;%</strong> de nuestros
              egresados trabaja en el sector en menos de&nbsp;6&nbsp;meses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
              role="list"
              aria-label="Ciclos formativos disponibles"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#ciclos"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm transition-all duration-200 hover:bg-indigo-500 hover:shadow-[0_0_32px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
              >
                Explorar ciclos
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#datos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
              >
                Ver datos reales
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: 3D Scene slot (filled by SplineHero client:idle island) ── */}
          <motion.div
            id="hero-spline-slot"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
            className="relative h-[400px] md:h-[520px] lg:h-[640px] hidden md:block"
            aria-hidden="true"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18)_0%,transparent_70%)] pointer-events-none" />

            {/* Fade inferior para disimular el corte del modelo */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent pointer-events-none z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
