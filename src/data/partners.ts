export interface Partner {
  name: string;
  domain?: string;
  tier: 1 | 2 | 3;
  tag?: string;
}

// Ordered by importance: tier 1 first, then alphabetically within tier
export const partners: Partner[] = [
  // ── Tier 1: Principales colaboradores (seleccionados por el centro) ──
  { name: 'Plexus Tech', domain: 'plexus.es', tier: 1, tag: '20 años en EX' },
  { name: 'STEMDO', domain: 'stemdo.io', tier: 1, tag: 'Mérida' },
  { name: 'GPEX', domain: 'gpex.es', tier: 1, tag: 'Extremadura' },
  { name: 'Resulto', domain: 'resultoconsultoria.com', tier: 1, tag: 'Mérida' },
  { name: 'VEYVE', tier: 1 },
  { name: 'LogiRail', domain: 'logirail.com', tier: 1, tag: 'Grupo Renfe' },

  // ── Tier 2: Empresas regionales consolidadas ──
  { name: 'Indra', domain: 'indracompany.com', tier: 2, tag: 'Multinacional' },
  { name: 'Fundecyt', domain: 'fundecyt-pctex.es', tier: 2, tag: 'Parque Científico' },
  { name: 'Qraneos', domain: 'qraneos.com', tier: 2, tag: 'Consultoría TIC' },
  { name: 'PayperThink', domain: 'payperthink.es', tier: 2, tag: 'Mérida' },
  { name: 'Makenai', domain: 'makenai.es', tier: 2, tag: 'Transformación digital' },
  { name: 'Synapse', domain: 'synapse.es', tier: 2, tag: 'Mérida' },
  { name: 'Cámara Badajoz', tier: 2, tag: 'Institución' },
  { name: 'Cjría Economía', tier: 2, tag: 'Junta EX' },
  { name: 'Tecnología Creativa', tier: 2 },
  { name: 'Grupo Albatros', tier: 2 },
  { name: 'Xone (CGS)', tier: 2 },

  // ── Tier 3: Empresas especializadas y emergentes ──
  { name: 'Blue Informática', tier: 3 },
  { name: 'Viral Studios', tier: 3 },
  { name: 'Modular Box', tier: 3 },
  { name: 'WINGED', tier: 3 },
  { name: 'Daroma', tier: 3 },
  { name: 'Doscar', tier: 3 },
  { name: 'Fenles', tier: 3 },
  { name: 'Gedauto', tier: 3 },
  { name: 'Conkistadores', tier: 3 },
  { name: 'ACOPAEX', tier: 3 },
  { name: 'AirMagic', tier: 3 },
  { name: 'Bittácora', tier: 3 },
  { name: 'Ilke Benson', tier: 3 },
  { name: 'Inquiba', tier: 3 },
  { name: 'MTC', tier: 3, tag: 'Madrid' },
  { name: 'Nito Motor', tier: 3 },
  { name: 'Ovejero Sequeiro', tier: 3 },
  { name: 'Renacen', tier: 3 },
  { name: 'Segurymat', tier: 3 },
  { name: 'SOLWED', tier: 3 },
  { name: 'Spain Gives Life', tier: 3 },
  { name: 'Ventum', tier: 3 },
];

// Paletas por tier: lilas → verdes → azules
const TIER_GRADIENTS: Record<1 | 2 | 3, string[]> = {
  1: [
    'from-violet-500 to-purple-600',
    'from-purple-500 to-fuchsia-600',
    'from-indigo-500 to-violet-600',
    'from-fuchsia-500 to-purple-600',
    'from-violet-600 to-indigo-600',
    'from-purple-600 to-violet-700',
  ],
  2: [
    'from-emerald-500 to-teal-600',
    'from-teal-500 to-emerald-600',
    'from-green-500 to-emerald-600',
    'from-emerald-600 to-green-700',
    'from-teal-600 to-cyan-600',
    'from-green-600 to-teal-600',
  ],
  3: [
    'from-blue-500 to-sky-600',
    'from-sky-500 to-blue-600',
    'from-cyan-500 to-sky-600',
    'from-blue-600 to-indigo-600',
    'from-sky-600 to-blue-700',
    'from-cyan-600 to-blue-600',
  ],
};

export function getGradient(name: string, tier: 1 | 2 | 3 = 1): string {
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const palette = TIER_GRADIENTS[tier];
  return palette[hash % palette.length];
}

export function getInitials(name: string): string {
  return name
    .replace(/[()[\]]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}
