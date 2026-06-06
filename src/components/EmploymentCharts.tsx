'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CYCLE_DATA = [
  { cycle: 'DAM',     label: 'Desarrollo de Apps Multiplataforma', sector: 55, other: 27, none: 18, color: '#a78bfa' },
  { cycle: 'CE-IABD', label: 'IA y Big Data',                      sector: 50, other: 20, none: 30, color: '#22d3ee' },
  { cycle: 'DAW',     label: 'Desarrollo de Apps Web',             sector: 50, other: 17, none: 33, color: '#34d399' },
  { cycle: 'ASIR',    label: 'Administración de Sistemas',         sector: 33, other: 17, none: 50, color: '#6366f1' },
];

const TIME_DATA = [
  { label: 'Menos de 3 meses', pct: 53, color: '#818cf8' },
  { label: '3 a 6 meses',      pct: 33, color: '#67e8f9' },
  { label: '6 a 12 meses',     pct: 7,  color: '#c4b5fd' },
  { label: 'Más de 12 meses',  pct: 7,  color: '#475569' },
];

// ── Barras horizontales por ciclo ──────────────────────────────────────────
function CycleBars({ isInView }: { isInView: boolean }) {
  return (
    <div className="space-y-5" role="list" aria-label="Inserción laboral por ciclo">
      {CYCLE_DATA.map((row, i) => (
        <div key={row.cycle} role="listitem">
          {/* Cabecera fila */}
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-sm font-bold text-slate-100">{row.cycle}</span>
              <span className="text-xs text-slate-400 ml-2 hidden sm:inline">{row.label}</span>
            </div>
            <span
              className="text-sm font-bold tabular-nums"
              style={{ color: row.color }}
              aria-label={`${row.sector}% trabaja en el sector`}
            >
              {row.sector}% en el sector
            </span>
          </div>

          {/* Barra apilada */}
          <div
            className="h-8 rounded-xl overflow-hidden flex w-full bg-white/5"
            role="img"
            aria-label={`${row.cycle}: ${row.sector}% en el sector, ${row.other}% otro empleo, ${row.none}% sin empleo`}
          >
            {/* Segmento 1: en el sector */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${row.sector}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: row.color }}
            >
              {row.sector >= 12 && (
                <span className="text-[11px] font-bold text-white drop-shadow">{row.sector}%</span>
              )}
            </motion.div>

            {/* Segmento 2: otro empleo */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${row.other}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.35 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full flex items-center justify-center shrink-0 bg-slate-500/60"
            >
              {row.other >= 12 && (
                <span className="text-[11px] font-semibold text-slate-200">{row.other}%</span>
              )}
            </motion.div>

            {/* Segmento 3: sin empleo — ocupa el resto */}
            <div className="h-full flex-1 flex items-center justify-center bg-white/[0.04]">
              {row.none >= 12 && (
                <span className="text-[11px] font-medium text-slate-500">{row.none}%</span>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Leyenda */}
      <div className="flex flex-wrap gap-4 pt-2" role="list" aria-label="Leyenda del gráfico">
        {[
          { label: 'Empleo en el sector', color: '#a78bfa' },
          { label: 'Otro tipo de empleo', color: '#64748b' },
          { label: 'Sin empleo registrado', color: 'rgba(255,255,255,0.08)', text: true },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-2" role="listitem">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: l.color, border: l.text ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
              aria-hidden="true"
            />
            <span className="text-xs text-slate-400">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EmploymentCharts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section
      ref={ref}
      id="datos"
      className="py-24 px-6 lg:px-8 relative"
      aria-labelledby="charts-heading"
    >
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.06)_0%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Inserción laboral real
          </span>
          <h2 id="charts-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Datos que hablan <span className="gradient-text">por sí solos</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            Resultados de la encuesta a egresados de los ciclos de informática del IES Albarregas.
          </p>
        </motion.div>

        {/* Charts grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">

          {/* Barras horizontales por ciclo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-2xl p-6 lg:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-slate-100 mb-1">
              Inserción por ciclo
            </h3>
            <p className="text-slate-400 text-sm mb-6">Estado laboral del alumnado al finalizar sus estudios</p>
            <CycleBars isInView={isInView} />
          </motion.div>

          {/* Time to employment */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-6 lg:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-slate-100 mb-1">
              ¿Cuánto tiempo hasta el primer empleo en el sector?
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              Del alumnado con inserción laboral relacionada con su formación
            </p>

          <div className="space-y-5" role="list" aria-label="Tiempo hasta primer empleo por categoría">
            {TIME_DATA.map((item, i) => (
              <motion.div
                key={item.label}
                role="listitem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="w-36 shrink-0 text-sm text-slate-400">{item.label}</span>
                <div className="flex-1 h-7 rounded-lg bg-white/5 overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full rounded-lg"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <span className="w-10 shrink-0 text-right text-sm font-semibold text-slate-300" aria-label={`${item.pct} por ciento`}>{item.pct}%</span>
              </motion.div>
            ))}
          </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-indigo-300 font-semibold">
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              El&nbsp;<strong>86&nbsp;%</strong> de quienes encontraron empleo en el sector lo hicieron en menos de 6&nbsp;meses.
            </p>
          </motion.div>

        </div>{/* end charts grid */}

      </div>
    </section>
  );
}
