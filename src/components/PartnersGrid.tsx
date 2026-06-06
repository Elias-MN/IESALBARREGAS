'use client';

import { motion } from 'framer-motion';
import { partners, getGradient, getInitials, type Partner } from '../data/partners';

// ── Monograma ───────────────────────────────────────────────────────────────
function Logo({ partner, size }: { partner: Partner; size: 'lg' | 'md' | 'sm' }) {
  const gradient = getGradient(partner.name, partner.tier);
  const initials = getInitials(partner.name);

  const dim = size === 'lg' ? 'w-14 h-14' : size === 'md' ? 'w-11 h-11' : 'w-9 h-9';
  const text = size === 'lg' ? 'text-base' : 'text-xs';
  const radius = size === 'lg' ? 'rounded-2xl' : 'rounded-xl';

  return (
    <div
      className={`${dim} ${radius} shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      aria-hidden="true"
    >
      <span className={`text-white font-bold ${text} tracking-tight select-none`}>
        {initials}
      </span>
    </div>
  );
}

// ── Single card ─────────────────────────────────────────────────────────────
function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const isFeatured = partner.tier === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6), ease: 'easeOut' }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="h-full"
    >
      <div
        className={`
          group flex flex-col items-center gap-3 rounded-2xl p-4 text-center
          border transition-all duration-200 cursor-default h-full
          ${isFeatured
            ? 'glass border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_28px_rgba(99,102,241,0.18)]'
            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10'
          }
        `}
      >
        <Logo partner={partner} size={isFeatured ? 'lg' : partner.tier === 2 ? 'md' : 'sm'} />

        <div className="min-w-0 w-full flex-1 flex flex-col justify-center">
          <p
            className={`font-semibold leading-tight truncate ${
              isFeatured ? 'text-sm text-slate-100' : 'text-xs text-slate-300'
            }`}
            title={partner.name}
          >
            {partner.name}
          </p>
          {/* Siempre ocupa espacio, aunque no haya tag, para altura uniforme */}
          <p className="text-[11px] text-slate-500 mt-0.5 truncate h-4 leading-4">
            {partner.tag ?? ''}
          </p>
        </div>

        {isFeatured && (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-[10px] font-semibold text-indigo-400 uppercase tracking-wide">
            Colaborador
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────────────────────
export function PartnersGrid() {
  const tier1 = partners.filter(p => p.tier === 1);
  const tier2 = partners.filter(p => p.tier === 2);
  const tier3 = partners.filter(p => p.tier === 3);

  return (
    <section
      id="empresas-colaboradoras"
      className="py-24 px-6 lg:px-8 relative"
      aria-labelledby="partners-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Red de colaboradores
          </span>
          <h2
            id="partners-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3"
          >
            Empresas que <span className="gradient-text">confían en nosotros</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base lg:text-lg">
            Más de 50 empresas colaboran con el IES Albarregas para ofrecer
            prácticas en empresas y empleo directo a nuestros alumnos.
          </p>
        </motion.div>

        {/* ── Tier 1 Featured ── */}
        <div className="mb-5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4 px-1">
            Principales colaboradores
          </p>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            role="list"
            aria-label="Principales empresas colaboradoras"
          >
            {tier1.map((p, i) => (
              <div key={p.name} role="listitem" className="h-full">
                <PartnerCard partner={p} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="section-divider my-6" role="separator" aria-hidden="true" />

        {/* ── Tier 2 ── */}
        <div className="mb-5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4 px-1">
            Colaboradores regionales
          </p>
          <div
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2.5"
            role="list"
            aria-label="Empresas colaboradoras regionales"
          >
            {tier2.map((p, i) => (
              <div key={p.name} role="listitem" className="h-full">
                <PartnerCard partner={p} index={tier1.length + i} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="section-divider my-6" role="separator" aria-hidden="true" />

        {/* ── Tier 3 ── */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4 px-1">
            Empresas especializadas
          </p>
          <div
            className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2"
            role="list"
            aria-label="Empresas especializadas colaboradoras"
          >
            {tier3.map((p, i) => (
              <div key={p.name} role="listitem" className="h-full">
                <PartnerCard partner={p} index={tier1.length + tier2.length + i} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-slate-500 mt-10"
        >
          Empresas que han acogido alumnos en prácticas o contratado egresados del IES Albarregas
        </motion.p>
      </div>
    </section>
  );
}
