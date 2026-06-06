'use client';

import { motion } from 'framer-motion';

const COMPANIES = [
  { name: 'NTT Data', tag: 'Multinacional' },
  { name: 'Stemdo', tag: 'Mérida' },
  { name: 'Viewnext', tag: 'Cáceres' },
  { name: 'EPAM Systems', tag: 'Cáceres' },
  { name: 'Resulto Consultoría', tag: 'Mérida' },
  { name: 'Hub Consultores', tag: 'Tenerife' },
  { name: 'Grupo Oesía', tag: 'Zaragoza' },
  { name: 'Plexus', tag: 'Extremadura' },
  { name: 'Ayesa', tag: 'Mérida' },
  { name: 'Diputación de Badajoz', tag: 'Badajoz' },
  { name: 'UTE SIRA', tag: 'Mérida' },
];

function CompanyChip({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 glass rounded-xl shrink-0 select-none">
      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
        <span className="text-indigo-300 font-bold text-xs">{name[0]}</span>
      </div>
      <div>
        <p className="text-slate-200 font-semibold text-sm whitespace-nowrap">{name}</p>
        <p className="text-slate-400 text-xs">{tag}</p>
      </div>
    </div>
  );
}

export function CompaniesMarquee() {
  const doubled = [...COMPANIES, ...COMPANIES];

  return (
    <section className="py-20 relative overflow-hidden" aria-labelledby="companies-heading">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Empresas que confían en nuestros alumnos
          </span>
          <h2 id="companies-heading" className="font-display text-2xl sm:text-3xl font-bold text-white mt-3">
            Ellos te están esperando
          </h2>
        </motion.div>
      </div>

      <div
        className="flex gap-4 animate-marquee"
        style={{ width: 'max-content' }}
        aria-label="Lista de empresas contratantes"
        role="list"
      >
        {doubled.map((c, i) => (
          <div key={i} role="listitem">
            <CompanyChip name={c.name} tag={c.tag} />
          </div>
        ))}
      </div>

      {/* Location split */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 lg:p-8"
        >
          <p className="text-center text-sm text-slate-400 mb-6">Distribución geográfica del empleo</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="text-center p-5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <div className="font-display text-4xl font-extrabold text-indigo-400 tabular-nums">70%</div>
              <div className="text-slate-300 font-semibold text-sm mt-1">Extremadura</div>
              <div className="text-slate-400 text-xs mt-0.5">Mérida, Badajoz, Cáceres</div>
            </div>
            <div className="text-center p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <div className="font-display text-4xl font-extrabold text-cyan-400 tabular-nums">30%</div>
              <div className="text-slate-300 font-semibold text-sm mt-1">Resto de España</div>
              <div className="text-slate-400 text-xs mt-0.5">Salamanca, Zaragoza, Madrid…</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
