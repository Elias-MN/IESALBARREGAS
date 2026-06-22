'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { partners, getInitials, type Partner } from '../data/partners';

// ── Tarjeta uniforme cuadrada ─────────────────────────────────────────────────
function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const [hovered, setHovered] = useState(false);

  // Los localLogos son de confianza: empezamos en true.
  // Las URLs de Clearbit son inciertas: empezamos en false y solo
  // activamos si la imagen confirma que tiene contenido real (probe).
  const isClearbit = !partner.localLogo && !!partner.domain;
  const [logoReady, setLogoReady] = useState(!isClearbit);

  const src = partner.localLogo
    ?? (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : null);

  // Pre-sondeo: descarga la imagen antes de mostrar el layout de logo
  useEffect(() => {
    if (!isClearbit || !partner.domain) return;
    const probe = new Image();
    probe.onload  = () => setLogoReady(probe.naturalWidth > 1 && probe.naturalHeight > 1);
    probe.onerror = () => setLogoReady(false);
    probe.src = `https://logo.clearbit.com/${partner.domain}`;
    return () => { probe.onload = null; probe.onerror = null; };
  }, [isClearbit, partner.domain]);

  const showImage = logoReady && !!src;
  const initials  = getInitials(partner.name);
  const len       = partner.name.length;
  const nameSz    = len <= 6 ? 'text-base' : len <= 12 ? 'text-sm' : len <= 20 ? 'text-xs' : 'text-[10px]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.6), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.06, transition: { type: 'spring', stiffness: 500, damping: 22 } }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="aspect-square rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-[0_8px_24px_rgba(37,99,235,0.18)] hover:border-blue-200 transition-shadow duration-200 relative"
      title={partner.name}
    >
      {showImage ? (
        /* ── Logo confirmado ── */
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center bg-white p-3 min-h-0">
            <img
              src={src!}
              alt=""
              className="max-h-full max-w-full object-contain"
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
        /* ── Sin logo (o mientras carga Clearbit): tipografía institucional ── */
        <div className="h-full relative overflow-hidden flex items-center justify-center px-2">
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundColor: hovered ? '#eff6ff' : '#ffffff' }}
            transition={{ duration: 0.25 }}
          />
          <span
            className="absolute font-black leading-none select-none pointer-events-none"
            style={{
              fontSize: '4.5rem',
              color: hovered ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.08)',
              transition: 'color 0.25s',
            }}
            aria-hidden="true"
          >
            {initials}
          </span>
          <motion.span
            className={`relative z-10 ${nameSz} font-bold text-blue-700 text-center leading-tight`}
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {partner.name}
          </motion.span>
        </div>
      )}

      {/* Shimmer diagonal en hover — solo si hay logo */}
      {showImage && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="shimmer"
              initial={{ x: '-120%' }}
              animate={{ x: '220%' }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%)',
              }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
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
