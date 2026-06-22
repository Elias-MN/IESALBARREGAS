'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion, useInView,
  useMotionTemplate, useMotionValue, useSpring, useTransform,
} from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  glow: string;
}

const STATS: StatItem[] = [
  {
    value: 87,
    suffix: '%',
    label: 'Inserción laboral',
    sublabel: 'en menos de 6 meses',
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(37,99,235,0.12)',
  },
  {
    value: 53,
    suffix: '%',
    label: 'Empleo en < 3 meses',
    sublabel: 'desde que finalizaron',
    color: 'from-cyan-500 to-cyan-700',
    glow: 'rgba(8,145,178,0.12)',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Empresas socias',
    sublabel: 'Que contratan regularmente',
    color: 'from-violet-500 to-violet-700',
    glow: 'rgba(109,40,217,0.12)',
  },
  {
    value: 70,
    suffix: '%',
    label: 'Trabaja en Extremadura',
    sublabel: 'empleo local de calidad',
    color: 'from-emerald-500 to-emerald-700',
    glow: 'rgba(5,150,105,0.12)',
  },
];

function Counter({ value, suffix, duration = 1800, start }: {
  value: number; suffix: string; duration?: number; start: boolean;
}) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [start, value, duration]);

  return <span aria-label={`${value}${suffix}`}>{count}{suffix}</span>;
}

// ── Tarjeta con 3D tilt + spotlight de cursor ─────────────────────────────────
function TiltCard({ stat, i, isInView }: { stat: StatItem; i: number; isInView: boolean }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 300, damping: 25 });

  const spotX = useTransform(mouseX, [0, 1], ['0%', '100%']);
  const spotY = useTransform(mouseY, [0, 1], ['0%', '100%']);
  const spotBg = useMotionTemplate`radial-gradient(220px circle at ${spotX} ${spotY}, rgba(37,99,235,0.11), transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }
  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group"
    >
      <div
        className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col gap-3 h-full shadow-sm group-hover:shadow-lg group-hover:border-blue-100 transition-shadow duration-200"
        style={{ boxShadow: `0 2px 16px ${stat.glow}, 0 1px 4px rgba(0,0,0,0.04)` }}
      >
        <div className={`font-display text-4xl lg:text-5xl font-extrabold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent tabular-nums`}>
          <Counter value={stat.value} suffix={stat.suffix} start={isInView} />
        </div>
        <div>
          <p className="text-slate-800 font-semibold text-sm lg:text-base leading-tight">{stat.label}</p>
          <p className="text-slate-500 text-xs mt-1 leading-snug">{stat.sublabel}</p>
        </div>

        {/* Cursor spotlight — encima de todo, sin interactividad */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: spotBg }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 lg:px-8 bg-slate-50"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          id="stats-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500 mb-12"
        >
          Datos reales · {new Date().getFullYear()} encuesta a egresados
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <TiltCard key={stat.label} stat={stat} i={i} isInView={isInView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          Basado en encuesta a todo el alumnado egresado de DAW, DAM, ASIR y CE-IABD (cursos 2023/24 y 2024/25)
        </motion.p>
      </div>
    </section>
  );
}
