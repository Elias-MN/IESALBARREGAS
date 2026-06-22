export interface Partner {
  name: string;
  domain?: string;
  localLogo?: string;
  tier: 1 | 2 | 3;
}

export const partners: Partner[] = [
  // Tier 1
  { name: 'Plexus Tech',                              domain: 'plexus.es',             localLogo: '/images/Logo Plexus Tech.png',                     tier: 1 },
  { name: 'STEMDO',                                   domain: 'stemdo.io',              localLogo: '/images/Stemdo_Icono.png',                         tier: 1 },
  { name: 'GPEX',                                     domain: 'gpex.es',                localLogo: '/images/gpex.png',                                 tier: 1 },
  { name: 'Resulto Consultoría',                      domain: 'resultoconsultoria.com', localLogo: '/images/resulto-consultoria.png',                  tier: 1 },
  { name: 'VEYVE Tecnologic',                         domain: 'veyvetecnologic.com',    localLogo: '/images/logo veyve.webp',                          tier: 1 },
  { name: 'LogiRail',                                 domain: 'logirail.com',           localLogo: '/images/logiRAIL.png',                             tier: 1 },

  // Tier 2
  { name: 'NTT DATA',                                 domain: 'nttdata.com',            localLogo: '/images/Logo-Global-NTT-DATA-Future-Blue-RGB.png', tier: 2 },
  { name: 'Viewnext',                                 domain: 'viewnext.com',           tier: 2 },
  { name: 'Ibermática-Ayesa',                         domain: 'ayesa.com',              tier: 2 },
  { name: 'ALTEN Soluciones',                         domain: 'alten.es',               tier: 2 },
  { name: 'Inetum',                                   domain: 'inetum.com',             tier: 2 },
  { name: 'EPAM Systems',                             domain: 'epam.com',               tier: 2 },
  { name: 'Indra',                                    domain: 'indracompany.com',        tier: 2 },
  { name: 'Hub Consultores',                          domain: 'hubconsultores.com',      tier: 2 },
  { name: 'Zelenza',                                  domain: 'zelenza.com',             tier: 2 },
  { name: 'SOLTEL IT Systems',                        domain: 'soltel.es',               tier: 2 },
  { name: 'Fundecyt-PCTEX',                           domain: 'fundecyt-pctex.es',       tier: 2 },
  { name: 'Qraneos',                                  domain: 'qraneos.com',             tier: 2 },
  { name: 'PayperThink',                              domain: 'payperthink.es',          tier: 2 },
  { name: 'Makenai',                                  domain: 'makenai.es',              tier: 2 },
  { name: 'Synapse',                                  domain: 'synapse.es',              tier: 2 },
  { name: 'Decide4AI',                                domain: 'decide4ai.com',           tier: 2 },
  { name: 'Dirección General de Digitalización',      domain: 'juntaex.es',              tier: 2 },
  { name: 'Cámara de Comercio de Badajoz',            domain: 'camarabadajoz.es',        tier: 2 },
  { name: 'Área 10 (Grupo Albatros)',                 domain: 'area10.es',               tier: 2 },
  { name: 'Xone (CGS)',                               domain: 'xone.es',                 tier: 2 },
  { name: 'Tecnología Creativa',                                                          tier: 2 },

  // Tier 3
  { name: 'ACOPAEX',                                                                      tier: 3 },
  { name: 'AFIVEN Extremadura',                                                           tier: 3 },
  { name: 'AirMagic',                                 localLogo: '/images/LOGO_AIRMAGIC.jpg',  tier: 3 },
  { name: 'Alexander Vega',                                                               tier: 3 },
  { name: 'Antonio R. Campiñez',                                                          tier: 3 },
  { name: 'APIS (Carnes y Vegetales)',                                                     tier: 3 },
  { name: 'Bittácora',                                localLogo: '/images/Logo Bittacora.png', tier: 3 },
  { name: 'Blue Informática',                                                              tier: 3 },
  { name: 'CARNES Y VEGETALES',                                                            tier: 3 },
  { name: 'CEDESA',                                                                        tier: 3 },
  { name: 'CocoSolution',                                                                  tier: 3 },
  { name: 'Commons Mgmt.',                                                                 tier: 3 },
  { name: 'COMVIRAL',                                                                      tier: 3 },
  { name: 'Conkistadores',                                                                 tier: 3 },
  { name: 'CreoIdeas',                                                                     tier: 3 },
  { name: 'Daroma',                                                                        tier: 3 },
  { name: 'Doscar',                                                                        tier: 3 },
  { name: 'EEVAM Technologies',                                                            tier: 3 },
  { name: 'Fenles',                                                                        tier: 3 },
  { name: 'Fundación EBS',                                                                 tier: 3 },
  { name: 'Galper Informática',                                                            tier: 3 },
  { name: 'Gedauto',                                                                       tier: 3 },
  { name: 'Gow Tech',                                                                      tier: 3 },
  { name: 'Hercio Comunicaciones',                                                         tier: 3 },
  { name: 'Himalaya Computing',                                                            tier: 3 },
  { name: 'IAS 365',                                                                       tier: 3 },
  { name: 'Ilke Benson',                              localLogo: '/images/Ilke Benson.png',    tier: 3 },
  { name: 'Info Guadiana',                                                                 tier: 3 },
  { name: 'Inquiba',                                  localLogo: '/images/logoInquiba.png',    tier: 3 },
  { name: 'Instelca',                                                                      tier: 3 },
  { name: 'Integreellence',                                                                tier: 3 },
  { name: 'ISEMAT',                                                                        tier: 3 },
  { name: 'KINETICA',                                                                      tier: 3 },
  { name: 'KONEXUSERP',                                                                    tier: 3 },
  { name: 'MB3 Gestión',                                                                   tier: 3 },
  { name: 'Modular Box',                                                                   tier: 3 },
  { name: 'MTC',                                                                           tier: 3 },
  { name: 'MundoRed',                                                                      tier: 3 },
  { name: 'Negocio Potencial',                                                             tier: 3 },
  { name: 'NINVUS Solutions',                                                              tier: 3 },
  { name: 'Nito Motor',                                                                    tier: 3 },
  { name: 'NT Aplicaciones',                                                               tier: 3 },
  { name: 'Ovejero Sequeiro',                                                              tier: 3 },
  { name: 'Panorama Web',                                                                  tier: 3 },
  { name: 'Pixel Ratio',                                                                   tier: 3 },
  { name: 'PLASTYAGRO',                                                                    tier: 3 },
  { name: 'Quirón Salud',                             domain: 'quironsalud.es',            tier: 3 },
  { name: 'Renacen',                                                                       tier: 3 },
  { name: 'Rommel y Montgomery',                                                           tier: 3 },
  { name: 'Segurymat',                                                                     tier: 3 },
  { name: 'Sílice Tecnología',                                                             tier: 3 },
  { name: 'Software Profesional de Extremadura',                                           tier: 3 },
  { name: 'SOLUTE Ingenieros',                                                             tier: 3 },
  { name: 'SOLWED',                                   localLogo: '/images/LogoSolwed.jpeg',    tier: 3 },
  { name: 'Spain Gives Life',                                                              tier: 3 },
  { name: 'Thegeekes',                                                                     tier: 3 },
  { name: 'Transfinite S.L.',                                                              tier: 3 },
  { name: 'UTE Factoría Digital',                                                          tier: 3 },
  { name: 'Utopía',                                                                        tier: 3 },
  { name: 'Ventum Innovation',                                                             tier: 3 },
  { name: 'Viral Studios',                                                                 tier: 3 },
  { name: 'Virtual Air Sim',                                                               tier: 3 },
  { name: 'WINGED',                                                                        tier: 3 },
  { name: 'WordLine',                                                                      tier: 3 },
  { name: 'XTREM',                                                                         tier: 3 },
];

export function getGradient(): string {
  return 'from-blue-600 to-blue-800';
}

const STOP_WORDS = new Set(['de', 'la', 'el', 'los', 'las', 'y', 'e', 'o', 'en', 'del', 'al', 'un', 'una']);

export function getInitials(name: string): string {
  const words = name
    .replace(/[()[\]]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0 && !STOP_WORDS.has(w.toLowerCase()));
  return words
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}
