'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CYCLE_DATA = [
  { cycle: 'DAM',     label: 'Desarrollo de Apps Multiplataforma', sector: 55, other: 27, none: 18, color: '#7c3aed' },
  { cycle: 'CE-IABD', label: 'IA y Big Data',                      sector: 50, other: 20, none: 30, color: '#0891b2' },
  { cycle: 'DAW',     label: 'Desarrollo de Apps Web',             sector: 50, other: 17, none: 33, color: '#059669' },
  { cycle: 'ASIR',    label: 'Administración de Sistemas',         sector: 33, other: 17, none: 50, color: '#2563eb' },
];

const TIME_DATA = [
  { label: 'Menos de 3 meses', pct: 53, color: '#2563eb' },
  { label: '3 a 6 meses',      pct: 33, color: '#4f46e5' },
  { label: '6 a 12 meses',     pct: 7,  color: '#7c3aed' },
  { label: 'Más de 12 meses',  pct: 7,  color: '#94a3b8' },
];

// ── Barras horizontales por ciclo ──────────────────────────────────────────
function CycleBars({ isInView }: { isInView: boolean }) {
  return (
    <div>
      <div className="space-y-5" role="list" aria-label="Inserción laboral por ciclo">
      {CYCLE_DATA.map((row, i) => (
        <div key={row.cycle} role="listitem">
          {/* Cabecera fila */}
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-sm font-bold text-slate-800">{row.cycle}</span>
              <span className="text-xs text-slate-500 ml-2 hidden sm:inline">{row.label}</span>
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
            className="h-8 rounded-xl overflow-hidden flex w-full bg-slate-100"
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
              className="h-full flex items-center justify-center shrink-0 bg-slate-400"
            >
              {row.other >= 12 && (
                <span className="text-[11px] font-semibold text-white">{row.other}%</span>
              )}
            </motion.div>

            {/* Segmento 3: sin empleo — ocupa el resto */}
            <div className="h-full flex-1 flex items-center justify-center bg-slate-200">
              {row.none >= 12 && (
                <span className="text-[11px] font-medium text-slate-500">{row.none}%</span>
              )}
            </div>
          </div>
        </div>
      ))}

      </div>

      {/* Leyenda — fuera del list principal para evitar ARIA nesting inválido */}
      <div className="flex flex-wrap gap-4 pt-2" role="list" aria-label="Leyenda del gráfico">
        {[
          { label: 'Empleo en el sector', color: '#2563eb' },
          { label: 'Otro tipo de empleo', color: '#94a3b8' },
          { label: 'Sin empleo registrado', color: '#e2e8f0', text: true },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-2" role="listitem">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: l.color, border: l.text ? '1px solid rgba(0,0,0,0.1)' : 'none' }}
              aria-hidden="true"
            />
            <span className="text-xs text-slate-500">{l.label}</span>
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
      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Inserción laboral real
          </span>
          <h2 id="charts-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Datos que hablan <span className="gradient-text">por sí solos</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base lg:text-lg">
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
            className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm"
          >
            <h3 className="font-display text-lg font-semibold text-slate-800 mb-1">
              Inserción por ciclo
            </h3>
            <p className="text-slate-500 text-sm mb-6">Estado laboral del alumnado al finalizar sus estudios</p>
            <CycleBars isInView={isInView} />
          </motion.div>

          {/* Time to employment */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm"
          >
            <h3 className="font-display text-lg font-semibold text-slate-800 mb-1">
              ¿Cuánto tiempo hasta el primer empleo en el sector?
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Del alumnado con inserción laboral relacionada con su formación
            </p>

          <div className="space-y-4" role="list" aria-label="Tiempo hasta primer empleo por categoría">
            {TIME_DATA.map((item, i) => (
              <motion.div
                key={item.label}
                role="listitem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Label + % — encima en móvil, integrado en línea en desktop */}
                <div className="flex items-center justify-between mb-1.5 sm:hidden">
                  <span className="text-sm text-slate-500">{item.label}</span>
                  <span className="text-sm font-semibold tabular-nums" style={{ color: item.color }}>{item.pct}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:block w-36 shrink-0 text-sm text-slate-500">{item.label}</span>
                  <div className="flex-1 h-7 rounded-lg bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full rounded-lg"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <span
                    className="hidden sm:block w-10 shrink-0 text-right text-sm font-semibold tabular-nums text-slate-700"
                    aria-label={`${item.pct} por ciento`}
                  >
                    {item.pct}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

            <div className="mt-8 flex items-start gap-2.5 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
              <svg className="w-4 h-4 shrink-0 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-blue-700 leading-relaxed">
                El <strong className="font-bold">86 %</strong> de quienes encontraron empleo en el sector lo hicieron en menos de 6 meses.
              </p>
            </div>
          </motion.div>

        </div>{/* end charts grid */}

      </div>
    </section>
  );
}
