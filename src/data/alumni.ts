export type EmploymentStatus = 'related' | 'unrelated' | 'none';

export interface AlumniRecord {
  found: EmploymentStatus;
  cycle: 'ASIR' | 'CE-IABD' | 'DAM' | 'DAW';
  year: '2023/2024' | '2024/2025';
  company?: string;
  timeToJob?: '<3' | '3-6' | '6-12' | '>12';
  inExtremadura?: boolean;
  promoted?: boolean;
  leadership?: boolean;
  sectors?: string[];
  city?: string;
}

export const alumni: AlumniRecord[] = [
  // --- ASIR ---
  { found: 'none', cycle: 'ASIR', year: '2024/2025' },
  { found: 'related', cycle: 'ASIR', year: '2024/2025', company: 'Stemdo', timeToJob: '3-6', inExtremadura: true, promoted: true, leadership: false, sectors: ['Ciberseguridad'], city: 'Mérida' },
  { found: 'none', cycle: 'ASIR', year: '2024/2025' },
  { found: 'related', cycle: 'ASIR', year: '2023/2024', company: 'Diputación de Badajoz', timeToJob: '>12', inExtremadura: true, promoted: false, sectors: ['Soporte técnico', 'Administración pública'], city: 'Badajoz' },
  { found: 'unrelated', cycle: 'ASIR', year: '2023/2024', inExtremadura: true },
  { found: 'none', cycle: 'ASIR', year: '2024/2025', inExtremadura: false },
  // --- CE-IABD ---
  { found: 'related', cycle: 'CE-IABD', year: '2024/2025', company: 'Grupo Oesía', timeToJob: '6-12', inExtremadura: false, promoted: false, sectors: ['Desarrollo de software', 'Desarrollo web', 'Administración pública'], city: 'Zaragoza' },
  { found: 'related', cycle: 'CE-IABD', year: '2024/2025', company: 'Plexus', timeToJob: '<3', inExtremadura: true, promoted: true, sectors: ['Desarrollo de software', 'Automoción'] },
  { found: 'related', cycle: 'CE-IABD', year: '2023/2024', company: 'UTE SIRA', timeToJob: '<3', inExtremadura: true, promoted: false, sectors: ['Soporte técnico', 'Administración pública', 'Telecomunicaciones'], city: 'Mérida' },
  { found: 'none', cycle: 'CE-IABD', year: '2024/2025' },
  { found: 'related', cycle: 'CE-IABD', year: '2023/2024', company: 'Administración Pública', timeToJob: '3-6', inExtremadura: false, promoted: true, leadership: true, sectors: ['Desarrollo de software', 'Desarrollo web', 'Soporte técnico', 'Administración pública'], city: 'Madrid' },
  { found: 'none', cycle: 'CE-IABD', year: '2024/2025' },
  { found: 'none', cycle: 'CE-IABD', year: '2024/2025' },
  { found: 'unrelated', cycle: 'CE-IABD', year: '2024/2025', inExtremadura: true, sectors: ['Desarrollo de software', 'Administración pública'] },
  { found: 'related', cycle: 'CE-IABD', year: '2024/2025', company: 'Ayesa', timeToJob: '<3', inExtremadura: true, promoted: true, sectors: ['Desarrollo de software'], city: 'Mérida' },
  { found: 'unrelated', cycle: 'CE-IABD', year: '2024/2025', inExtremadura: true, sectors: ['Desarrollo de software'] },
  // --- DAM ---
  { found: 'related', cycle: 'DAM', year: '2024/2025', company: 'NTT Data', timeToJob: '<3', inExtremadura: true, promoted: true, sectors: ['Desarrollo de software', 'Desarrollo web', 'Ciberseguridad', 'Consultoría tecnológica'], city: 'Multinacional' },
  { found: 'unrelated', cycle: 'DAM', year: '2024/2025', inExtremadura: true, sectors: ['Alimentación'] },
  { found: 'none', cycle: 'DAM', year: '2023/2024' },
  { found: 'related', cycle: 'DAM', year: '2024/2025', company: 'NTT Data', timeToJob: '3-6', inExtremadura: false, promoted: false, sectors: ['Desarrollo de software', 'Desarrollo web'], city: 'Salamanca' },
  { found: 'related', cycle: 'DAM', year: '2024/2025', company: 'Resulto Consultoría', timeToJob: '<3', inExtremadura: true, promoted: false, sectors: ['Desarrollo de software', 'Desarrollo web', 'Consultoría tecnológica'], city: 'Mérida' },
  { found: 'related', cycle: 'DAM', year: '2023/2024', company: 'NTT Data', inExtremadura: false, promoted: true, sectors: ['Desarrollo de software'], city: 'Salamanca' },
  { found: 'unrelated', cycle: 'DAM', year: '2024/2025', inExtremadura: true, sectors: ['Administración pública', 'Consultoría tecnológica'] },
  { found: 'related', cycle: 'DAM', year: '2023/2024', company: 'EPAM Systems', timeToJob: '<3', inExtremadura: true, promoted: false, sectors: ['Consultoría tecnológica'], city: 'Cáceres' },
  { found: 'unrelated', cycle: 'DAM', year: '2024/2025', inExtremadura: true },
  { found: 'none', cycle: 'DAM', year: '2023/2024' },
  { found: 'related', cycle: 'DAM', year: '2024/2025', company: 'Stemdo', timeToJob: '3-6', inExtremadura: true, promoted: true, sectors: ['Desarrollo de software'], city: 'Mérida' },
  // --- DAW ---
  { found: 'none', cycle: 'DAW', year: '2024/2025' },
  { found: 'none', cycle: 'DAW', year: '2024/2025' },
  { found: 'unrelated', cycle: 'DAW', year: '2024/2025', sectors: ['Telecomunicaciones'] },
  { found: 'related', cycle: 'DAW', year: '2023/2024', company: 'Stemdo', timeToJob: '3-6', inExtremadura: true, promoted: true, sectors: ['Sistemas y redes'], city: 'Mérida' },
  { found: 'related', cycle: 'DAW', year: '2023/2024', company: 'Viewnext', timeToJob: '<3', inExtremadura: true, promoted: true, sectors: ['Desarrollo de software', 'Desarrollo web', 'Consultoría tecnológica'], city: 'Cáceres' },
  { found: 'related', cycle: 'DAW', year: '2023/2024', company: 'Hub Consultores', timeToJob: '<3', inExtremadura: false, promoted: false, sectors: ['Soporte técnico', 'Consultoría tecnológica'], city: 'Tenerife' },
];

// ─── Computed Statistics ───────────────────────────────────────────────────

const related = alumni.filter(a => a.found === 'related');
const withTimeData = related.filter(a => a.timeToJob);

export const stats = {
  total: alumni.length,
  relatedEmployment: related.length,
  anyEmployment: alumni.filter(a => a.found !== 'none').length,

  relatedRate: Math.round((related.length / alumni.length) * 100),

  timeToJob: {
    lessThan3: withTimeData.filter(a => a.timeToJob === '<3').length,
    between3and6: withTimeData.filter(a => a.timeToJob === '3-6').length,
    between6and12: withTimeData.filter(a => a.timeToJob === '6-12').length,
    moreThan12: withTimeData.filter(a => a.timeToJob === '>12').length,
    total: withTimeData.length,
    lessThan3Pct: Math.round((withTimeData.filter(a => a.timeToJob === '<3').length / withTimeData.length) * 100),
    within6MonthsPct: Math.round((withTimeData.filter(a => a.timeToJob === '<3' || a.timeToJob === '3-6').length / withTimeData.length) * 100),
  },

  inExtremadura: related.filter(a => a.inExtremadura === true).length,
  inExtremaduraPct: Math.round((related.filter(a => a.inExtremadura === true).length / related.filter(a => a.inExtremadura !== undefined).length) * 100),

  promoted: related.filter(a => a.promoted === true).length,
  promotedPct: Math.round((related.filter(a => a.promoted === true).length / related.length) * 100),
};

export const byCycle = (['ASIR', 'CE-IABD', 'DAM', 'DAW'] as const).map(cycle => {
  const records = alumni.filter(a => a.cycle === cycle);
  const rel = records.filter(a => a.found === 'related');
  const unrel = records.filter(a => a.found === 'unrelated');
  return {
    cycle,
    total: records.length,
    related: rel.length,
    unrelated: unrel.length,
    none: records.filter(a => a.found === 'none').length,
    relatedPct: Math.round((rel.length / records.length) * 100),
    anyPct: Math.round(((rel.length + unrel.length) / records.length) * 100),
  };
});

// Sector frequency across all related alumni
const sectorMap = new Map<string, number>();
related.forEach(a => {
  (a.sectors ?? []).forEach(s => sectorMap.set(s, (sectorMap.get(s) ?? 0) + 1));
});

export const topSectors = Array.from(sectorMap.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6)
  .map(([name, count]) => ({ name, count }));

export const companies = [
  'NTT Data', 'Stemdo', 'Viewnext', 'EPAM Systems',
  'Resulto Consultoría', 'Hub Consultores', 'Grupo Oesía',
  'Plexus', 'Ayesa', 'Diputación de Badajoz', 'UTE SIRA',
];
