'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { partners, getInitials, type Partner } from '../data/partners';

// ── Tarjeta uniforme cuadrada ─────────────────────────────────────────────────
function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const [failed, setFailed] = useState(false);

  const src       = partner.localLogo ?? (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : null);
  const hasImage  = src !== null && !failed;
  const initials  = getInitials(partner.name);
  const len       = partner.name.length;
  const nameSz    = len <= 6 ? 'text-base' : len <= 12 ? 'text-sm' : len <= 20 ? 'text-xs' : 'text-[10px]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.5) }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="aspect-square rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-shadow duration-200"
      title={partner.name}
    >
      {hasImage ? (
        /* ── Con logo: imagen arriba, nombre abajo ── */
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center bg-white p-3 min-h-0">
            <img
              src={src!}
              alt=""
              className="max-h-full max-w-full object-contain"
              onError={() => setFailed(true)}
              loading="lazy"
            />
          </div>
          <div className="shrink-0 border-t border-slate-100 px-2 py-1.5 flex items-center justify-center">
            <p className="text-[10px] font-semibold text-slate-600 text-center leading-tight line-clamp-2">
              {partner.name}
            </p>
          </div>
        </div>
      ) : (
        /* ── Sin logo: nombre tipográfico en azul institucional ── */
        <div className="h-full relative overflow-hidden bg-white flex items-center justify-center px-2">
          <span
            className="absolute font-black text-blue-100 leading-none select-none pointer-events-none"
            style={{ fontSize: '4.5rem' }}
            aria-hidden="true"
          >
            {initials}
          </span>
          <span className={`relative z-10 ${nameSz} font-bold text-blue-700 text-center leading-tight`}>
            {partner.name}
          </span>
        </div>
      )}
    </motion.article>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────
export function PartnersGrid() {
  const sorted = [...partners].sort((a, b) => {
    const rank = (p: typeof a) => p.localLogo ? 2 : p.domain ? 1 : 0;
    return rank(b) - rank(a);
  });

  return (
    <section
      id="empresas-colaboradoras"
      className="py-24 px-6 lg:px-8 bg-slate-50"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Red de colaboradores
          </span>
          <h2
            id="partners-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3"
          >
            Empresas que <span className="gradient-text">confían en nosotros</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            Más de 70 empresas colaboran con el IES Albarregas para ofrecer
            prácticas y empleo directo a nuestros alumnos.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
          role="list"
          aria-label="Empresas colaboradoras"
        >
          {sorted.map((p, i) => (
            <div key={p.name} role="listitem">
              <PartnerCard partner={p} index={i} />
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-slate-400 mt-10"
        >
          Empresas que han acogido alumnos en prácticas o contratado egresados del IES Albarregas
        </motion.p>
      </div>
    </section>
  );
}
