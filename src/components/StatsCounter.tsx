'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
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
    color: 'from-indigo-400 to-indigo-600',
    glow: 'rgba(99,102,241,0.25)',
  },
  {
    value: 53,
    suffix: '%',
    label: 'Empleo en < 3 meses',
    sublabel: 'desde que finalizaron',
    color: 'from-cyan-400 to-cyan-600',
    glow: 'rgba(34,211,238,0.2)',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Empresas socias',
    sublabel: 'Que contratan regularmente',
    color: 'from-violet-400 to-violet-600',
    glow: 'rgba(167,139,250,0.2)',
  },
  {
    value: 70,
    suffix: '%',
    label: 'Trabaja en Extremadura',
    sublabel: 'empleo local de calidad',
    color: 'from-emerald-400 to-emerald-600',
    glow: 'rgba(52,211,153,0.2)',
  },
];

function Counter({ value, suffix, prefix = '', duration = 1800, start }: {
  value: number; suffix: string; prefix?: string; duration?: number; start: boolean;
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

  return (
    <span aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 lg:px-8"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          id="stats-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-12"
        >
          Datos reales · {new Date().getFullYear()} encuesta a egresados
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div
                className="glass glass-hover rounded-2xl p-6 lg:p-8 flex flex-col gap-3 h-full"
                style={{ boxShadow: `0 0 40px ${stat.glow}` }}
              >
                <div
                  className={`font-display text-4xl lg:text-5xl font-extrabold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent tabular-nums`}
                >
                  <Counter value={stat.value} suffix={stat.suffix} start={isInView} />
                </div>
                <div>
                  <p className="text-slate-100 font-semibold text-sm lg:text-base leading-tight">{stat.label}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-snug">{stat.sublabel}</p>
                </div>
              </div>
            </motion.div>
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
