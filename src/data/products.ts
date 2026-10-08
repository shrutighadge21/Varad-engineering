export interface Product {
  id: string;
  name: string;
  category: 'connectors' | 'clamps' | 'terminals' | 'suspension-tension' | 'earthing' | 'custom';
  categoryLabel: string;
  material: string;
  conductorRange?: string;
  description: string;
  application: string;
  image?: string;
  specPage?: number;
  featured?: boolean;
}

export interface CategoryInfo {
  id: 'connectors' | 'clamps' | 'terminals' | 'suspension-tension' | 'earthing' | 'custom';
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  keyProducts: string[];
  materials: string[];
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'connectors',
    title: 'Electrical Connectors',
    shortTitle: 'Connectors',
    subtitle: 'Palm, C.T., and T-Connectors for H.T. & EHV Lines',
    description: 'Precision-engineered electrical connectors engineered for optimal conductivity, low resistance, and maximum thermal and mechanical strength across sub-stations and transmission lines.',
    keyProducts: ['Palm Connectors (4/6/9 Hole)', 'C.T. Connectors (Single & Twin)', 'T-Connectors', 'Parallel Groove (PG) Clamps'],
    materials: ['High Conductivity Aluminium Alloy', 'Bimetallic Options'],
    icon: 'Zap'
  },
  {
    id: 'clamps',
    title: 'Clamps & Support Systems',
    shortTitle: 'Clamps & Supports',
    subtitle: 'BPI Clamps, Bus Post Clamps & Angular Clamps',
    description: 'Robust support clamping hardware for IPS tubes, post insulators, and multi-conductor configurations designed to withstand seismic and electrodynamic fault stresses.',
    keyProducts: ['BPI Support Clamps (Single/Twin/Quad)', 'Through Type Bus Post Clamps (4" IPS)', 'Angular Clamps', 'Inverted V Clamps'],
    materials: ['Cast Aluminium Alloy', 'Hot-Dip Galvanised Fasteners'],
    icon: 'ShieldCheck'
  },
  {
    id: 'terminals',
    title: 'Terminal & Equipment Connections',
    shortTitle: 'Terminal Connections',
    subtitle: 'Rigid & Expansion Connectors for Switchgear & Equipment',
    description: 'Specialized substation connectors for connecting IPS aluminum tubes to circuit breakers, current transformers (CT), capacitive voltage transformers (CVT), isolators, and earth switches.',
    keyProducts: ['Expansion Type Connectors (CB/PG/CT)', 'Rigid Type Terminal Connectors', 'Stud to Conductor Connectors', 'CVT & Isolator Terminals'],
    materials: ['Aluminium Alloy A6', 'Flexible Aluminium Stranded Jumper'],
    icon: 'Cpu'
  },
  {
    id: 'suspension-tension',
    title: 'Suspension, Tension & Hardware',
    shortTitle: 'Suspension & Tension',
    subtitle: 'Single/Twin Conductor Suspension & Dead-End Assemblies',
    description: 'Engineered hardware fittings for stringing power conductors on transmission towers, providing superior vibration dampening, mechanical grip, and corona-free operation.',
    keyProducts: ['Suspension Hardware (Single & Twin)', 'Tension Dead-End Assemblies', 'Rigid & Quadruple Spacers', 'Clevis & Link Hardware'],
    materials: ['Aluminium Alloy', 'Mild Steel (Hot Dip Galvanized - MS HDGI)'],
    icon: 'Layers'
  },
  {
    id: 'earthing',
    title: 'Earthing Components',
    shortTitle: 'Earthing',
    subtitle: 'Bonding Straps & Earthwire Clamping Hardware',
    description: 'Reliable grounding and fault current dissipation components for substation earthing grids and tower shielding earthwires.',
    keyProducts: ['Flexible Copper Earth Bond', 'Earthwire Tension Clamp', 'Grounding Studs & Jumpers'],
    materials: ['Electrolytic Grade Copper', 'Forged MS (HDGI)'],
    icon: 'Activity'
  },
  {
    id: 'custom',
    title: 'Custom Engineering Solutions',
    shortTitle: 'Custom Solutions',
    subtitle: 'Tailored Tooling & High-Voltage Hardware Fabrications',
    description: 'Custom-built engineering hardware fabricated to precise utility specifications and technical drawings, tested and verified to C.P.R.I. standards.',
    keyProducts: ['U-Type Breaker Connecting Plates', 'Special Bimetallic Transition Clamps', 'Bespoke Substation Bus Adaptors'],
    materials: ['Aluminium', 'Copper', 'Brass', 'MS (HDGI)'],
    icon: 'Wrench'
  }
];

export const PRODUCTS: Product[] = [
  // 1. PALM CONNECTORS
  {
    id: 'palm-80x80x16',
    name: '80X80X16MM Palm Connector',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'High-conductivity aluminium palm connector with 4-hole mounting pad for heavy-duty electrical conductor terminations.',
    application: 'Substation conductor termination to equipment terminal palms (H.T. / EHV).',
    specPage: 1,
    featured: true
  },
  {
    id: 'palm-100x100x16',
    name: '100X100X16MM Palm Connector',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Heavy-gauge aluminium 4-hole palm connector designed for medium-to-large cross-section ACSR conductors.',
    application: 'Switchyard busbar and transformer terminal connections.',
    specPage: 2,
    featured: false
  },
  {
    id: 'palm-100x100x22',
    name: '100X100X22MM Palm Connector',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'High-ampacity 22mm thick palm connector for high thermal and fault current handling.',
    application: 'High-current transmission and EHV substation terminal interfaces.',
    specPage: 3,
    featured: false
  },
  {
    id: 'palm-125x120x22-9hole',
    name: '125X120X22 MM Palm Connector (9 Hole)',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Heavy-duty 9-hole NEMA palm connector providing ultra-low contact resistance for maximum power transfer.',
    application: 'Large power transformer bushings and high-capacity circuit breaker terminals.',
    specPage: 4,
    featured: true
  },

  // 2. CT CONNECTORS
  {
    id: 'ct-connector-std',
    name: 'CT Connector',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Precision-cast aluminium CT clamp connector with bolted keeper for secure conductor connection to current transformers.',
    application: 'Current transformer (CT) primary terminal connection.',
    specPage: 5,
    featured: true
  },
  {
    id: 'palm-type-ct-twin',
    name: 'Palm Type CT Connector (Stud Twin)',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Dual-barrel twin conductor palm CT connector for multi-bundle transmission lines entering substation CT bays.',
    application: 'Twin conductor termination on CT primary terminal studs.',
    specPage: 6,
    featured: false
  },
  {
    id: 'palm-type-ct-single',
    name: 'Palm Type CT Connector (Stud Single)',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Single-barrel stud clamp CT connector engineered for seamless current transfer and vibration resistance.',
    application: 'Single conductor CT terminal connection.',
    specPage: 7,
    featured: false
  },

  // 3. T-CONNECTORS
  {
    id: 't-connector-single-single',
    name: 'T Connector Single to Single Conductor',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: '90-degree tee connector for tapping a single drop conductor from a continuous overhead main run.',
    application: 'Overhead busbar tee tapping and bypass connections.',
    specPage: 11,
    featured: false
  },
  {
    id: 't-connector-twin-single',
    name: 'T Connector Twin to Single Conductor',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Asymmetric tee clamp connecting a single dropline tap to twin bundled horizontal conductors.',
    application: 'Substation bay tap-offs from bundled bus conductors.',
    specPage: 12,
    featured: false
  },
  {
    id: 't-connector-twin-twin',
    name: 'T Connector Twin to Twin Conductor',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Dual bundled tee clamp connector for high-voltage multi-bundle substation junctions.',
    application: 'Twin bundle mainline to twin bundle tap branch.',
    specPage: 13,
    featured: true
  },

  // 4. CLAMPS & BUS POST SUPPORTS
  {
    id: 'bpi-support-twin',
    name: 'BPI Support Clamp Twin Connector',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Aluminium',
    conductorRange: 'ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Post insulator support clamp with slotted base mounting plate for dual bundled horizontal conductors.',
    application: 'Bus post insulator (BPI) mounting for twin conductor support.',
    specPage: 9,
    featured: true
  },
  {
    id: 'bpi-support-single',
    name: 'BPI Support Clamp Single Connector',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Aluminium',
    conductorRange: 'ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Insulator cap-mounted clamping bracket supporting single rigid conductor lines on station post insulators.',
    application: 'Single conductor support on substation post insulators.',
    specPage: 10,
    featured: false
  },
  {
    id: 'bpi-support-quad',
    name: 'BPI Support Clamp Suitable for Quadruple Conductor',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA',
    description: 'Heavy-duty 4-conductor spacer-support clamp assembly for 400kV / 765kV quadruple bundled substation buses.',
    application: 'Quadruple bundled conductor bus support on high-voltage BPIs.',
    specPage: 30,
    featured: true
  },
  {
    id: 'bus-post-clamp-4ips',
    name: 'Through Type Bus Post Clamp Suitable for 4” IPS Tube',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Aluminium',
    conductorRange: 'ALL SIZE OF IPS TUBE',
    description: 'Substantial split-saddle clamp for securing 4-inch IPS tubular aluminium busbars to substation support insulators.',
    application: 'Tubular busbar support in 132kV, 220kV, and 400kV substations.',
    specPage: 15,
    featured: true
  },
  {
    id: 'angular-clamp-4ips',
    name: 'Angular Clamp for 4” IPS Tube on Main and Tap',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Aluminium',
    conductorRange: 'ALL SIZE OF IPS TUBE',
    description: 'High-strength angular clamp providing 90-degree and angled transitions between main and tap 4" IPS aluminium tubes.',
    application: 'Rigid tubular busbar cross-junctions and equipment feeds.',
    specPage: 16,
    featured: false
  },
  {
    id: 'inverted-v-clamp-4ips',
    name: '4” IPS Tube on Main and Tap “Inverted V Type”',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'Inverted V-configuration bus connector providing structural flexibility and high current path between intersecting tubes.',
    application: 'Substation tubular bus crossovers and seismic relief joints.',
    specPage: 17,
    featured: false
  },

  // 5. TERMINAL CONNECTORS & EXPANSION HARDWARE
  {
    id: 'terminal-4ips-twin',
    name: 'Terminal Connector Suitable for 4” IPS Tube to Twin Conductor',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: 'ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Transition clamp connecting 4-inch IPS tubular busbar to twin flexible stranded overhead conductors.',
    application: 'Tubular bus to overhead flexible conductor drop transition.',
    specPage: 14,
    featured: true
  },
  {
    id: 'terminal-4ips-quad',
    name: 'Terminal Connector Suitable for 4” IPS Tube to Quadruple Conductor',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA',
    description: '400kV+ heavy transmission connector linking 4" IPS tube to 4-bundle overhead conductors.',
    application: 'EHV substation bus transition to quadruple bundle overhead line.',
    specPage: 31,
    featured: false
  },
  {
    id: 'expansion-terminal-cb-pg',
    name: 'Expansion Type Terminal Connector on CB/PG ISO. to Suit 4” IPS AL Tube',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Aluminium Tube',
    description: 'Expansion connector with flexible laminated/stranded aluminum jumpers to absorb thermal expansion and equipment vibrations.',
    application: 'Circuit Breaker and Pantograph Isolator terminals on 4" IPS tubular bus.',
    specPage: 18,
    featured: true
  },
  {
    id: 'expansion-terminal-bpi',
    name: 'Expansion Type Terminal Connector on BPI to Suit 4” IPS AL Tube',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Aluminium Tube',
    description: 'Thermal compensating expansion connector mounted on bus post insulators for long tubular busbar runs.',
    application: 'Long span tubular bus runs requiring thermal expansion absorption.',
    specPage: 19,
    featured: false
  },
  {
    id: 'expansion-terminal-ct-twin',
    name: 'Expansion Type Terminal Connector on CT Twin Stud to Suit 4” IPS AL Tube',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Aluminium Tube',
    description: 'Dual-stud flexible expansion connector connecting CT terminals to 4" IPS tubular busbars.',
    application: 'Current transformer stud to IPS bus with thermal strain relief.',
    specPage: 20,
    featured: false
  },
  {
    id: 'rigid-terminal-ct-plate',
    name: 'Rigid Type Terminal Connector Suitable for 4” IPS Tube to CT (Plate Type)',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'Rigid pad-to-tube connector bolted to flat CT terminal plates.',
    application: 'Flat terminal pad to tubular bus direct connection.',
    specPage: 21,
    featured: false
  },
  {
    id: 'rigid-terminal-cvt',
    name: 'Rigid Type Terminal Connector Suitable for 4” IPS Tube to CVT',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'Direct clamp terminal connector engineered specifically for Capacitive Voltage Transformer (CVT) studs.',
    application: 'CVT equipment connection to tubular bus.',
    specPage: 22,
    featured: false
  },
  {
    id: 'rigid-terminal-cb-pg',
    name: 'Rigid Type Terminal Connector Suitable for 4” IPS Tube to CB/PG Isolator',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'Rigid heavy-duty clamping connector for circuit breakers and disconnect switches.',
    application: 'Switchgear and isolator terminal interfacing.',
    specPage: 23,
    featured: false
  },
  {
    id: 'rigid-terminal-single-cond',
    name: 'Rigid Type Terminal Connector Suitable for 4” IPS Tube to Single Conductor',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube to Conductor',
    description: 'Inline transition connector connecting tubular bus directly to a single overhead conductor.',
    application: 'Bus end termination to line conductor.',
    specPage: 24,
    featured: false
  },
  {
    id: 'rigid-terminal-ct-twin-stud',
    name: 'Rigid Type Terminal Connector Suitable for 4” IPS Tube to CT Twin Stud',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'Twin-stud rigid connector linking CT primary terminals to 4" IPS pipe.',
    application: 'High current CT dual stud interface.',
    specPage: 25,
    featured: false
  },
  {
    id: 'rigid-terminal-stud-twin-universal',
    name: 'Rigid Type Terminal Connector Suitable for Stud to Twin Conductor (Universal Type)',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: 'Twin Conductor',
    description: 'Universal adjustable stud clamp accommodating twin conductor drops.',
    application: 'Substation equipment stud termination.',
    specPage: 26,
    featured: false
  },
  {
    id: 'rigid-terminal-earthswitch',
    name: 'Rigid Type Terminal Connector Suitable for Earthswitch to Twin Conductor',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: 'Twin Conductor',
    description: 'Specialized earth switch terminal clamp providing low-impedance short-circuit fault ground path.',
    application: 'Earthing switch terminal to overhead twin conductor.',
    specPage: 27,
    featured: false
  },
  {
    id: 'rigid-terminal-twin-morculla',
    name: 'Rigid Type Terminal Connector Suitable for Twin Stud to Twin Morculla Through Type',
    category: 'terminals',
    categoryLabel: 'Terminal & Equipment Connections',
    material: 'Aluminium',
    conductorRange: 'Twin Morculla Conductor',
    description: 'Through-type clamp connector designed specifically for high-capacity heavy Morculla conductor bundles.',
    application: '765kV / 400kV high capacity line terminal points.',
    specPage: 28,
    featured: false
  },

  // 6. SPACERS & PG CLAMPS
  {
    id: 'spacer-std',
    name: 'Spacer',
    category: 'suspension-tension',
    categoryLabel: 'Suspension & Tension Hardware',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Twin conductor spacer maintaining uniform sub-conductor spacing along the span, preventing clashing under wind and fault currents.',
    application: 'Overhead twin-bundle transmission line spans.',
    specPage: 8,
    featured: true
  },
  {
    id: 'spacer-quad',
    name: 'Spacer Suitable for Quadruple Conductor',
    category: 'suspension-tension',
    categoryLabel: 'Suspension & Tension Hardware',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA',
    description: 'Cross-pattern 4-conductor bundle spacer engineered for aerodynamic stability and mechanical retention.',
    application: '400kV / 765kV quad-bundle transmission spans.',
    specPage: 32,
    featured: false
  },
  {
    id: 'pg-clamp-std',
    name: 'PG Clamp (Parallel Groove Clamp)',
    category: 'connectors',
    categoryLabel: 'Electrical Connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Extruded parallel groove clamp with three high-tensile hot-dip galvanized steel bolts for non-tension jumper loops and tap connections.',
    application: 'Tension tower jumper loops and electrical tap connections.',
    specPage: 34,
    featured: false
  },

  // 7. SUSPENSION & TENSION HARDWARE
  {
    id: 'suspension-hw-twin',
    name: 'Suspension Hardware for Twin Conductor',
    category: 'suspension-tension',
    categoryLabel: 'Suspension & Tension Hardware',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Complete suspension string hardware assembly with yoke plate, suspension clamps, and forged hook for twin conductor strings.',
    application: 'Suspension towers on 220kV / 400kV transmission lines.',
    specPage: 35,
    featured: true
  },
  {
    id: 'single-suspension-hw',
    name: 'Single Suspension Hardware',
    category: 'suspension-tension',
    categoryLabel: 'Suspension & Tension Hardware',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Single-conductor suspension clamp assembly with ball/socket and clevis attachment for transmission and distribution lines.',
    application: 'Single conductor transmission line suspension points.',
    specPage: 36,
    featured: false
  },
  {
    id: 'single-tension-hw',
    name: 'Single Tension Hardware for Single Conductor',
    category: 'suspension-tension',
    categoryLabel: 'Suspension & Tension Hardware',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Dead-end tension assembly with compression/bolted strain clamp and extension links engineered to hold maximum working tensile load.',
    application: 'Angle and dead-end tension towers for single conductor.',
    specPage: 37,
    featured: false
  },
  {
    id: 'tension-hw-twin',
    name: 'Tension Hardware for Twin Conductor',
    category: 'suspension-tension',
    categoryLabel: 'Suspension & Tension Hardware',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Twin-bundle strain tension assembly with heavy forged steel yoke plate and dual compression dead-end clamps.',
    application: 'Dead-end and heavy angle towers for twin bundle lines.',
    specPage: 38,
    featured: true
  },

  // 8. EARTHING & SPECIAL COMPONENTS
  {
    id: 'flexible-copper-earth-bond',
    name: 'Flexible Copper Earth Bond',
    category: 'earthing',
    categoryLabel: 'Earthing Components',
    material: 'Copper',
    conductorRange: 'Standard & Custom Lengths',
    description: 'High-flexibility tinned/bare copper braided bonding jumper with robust compression end terminals for grounding steel structures and equipment frames.',
    application: 'Equipment grounding, gate earthing, and structure bonding.',
    specPage: 39,
    featured: true
  },
  {
    id: 'earthwire-tension-clamp',
    name: 'Earthwire Tension Clamp',
    category: 'earthing',
    categoryLabel: 'Earthing Components',
    material: 'MS (HDGI)',
    conductorRange: 'Standard Galvanized Steel Ground Wire',
    description: 'Hot-dip galvanized forged steel dead-end tension clamp for terminating optical ground wire (OPGW) or standard steel earthwire.',
    application: 'Transmission tower peak earthwire termination.',
    specPage: 40,
    featured: true
  },
  {
    id: 'transformer-bushing-clamp',
    name: 'Transformer Bushing Clamp',
    category: 'clamps',
    categoryLabel: 'Clamps & Support Systems',
    material: 'Copper / Brass',
    conductorRange: 'Standard Transformer Bushing Studs',
    description: 'Cast copper/brass alloy heavy-duty angle clamp with 4-hole terminal spade for high-current low-loss transformer bushing connection.',
    application: 'Power and distribution transformer primary and secondary bushing studs.',
    specPage: 33,
    featured: true
  },
  {
    id: 'u-type-connecting-plates-breaker',
    name: 'U Type Connecting Plates for Breaker',
    category: 'custom',
    categoryLabel: 'Custom Engineering Solutions',
    material: 'Aluminium',
    conductorRange: 'Custom Breaker Terminals',
    description: 'Precision fabricated U-profile aluminium bus adapter plate with pre-drilled terminal hole matrices for circuit breaker bus interconnection.',
    application: 'Circuit breaker terminal interconnection and phase bridging.',
    specPage: 29,
    featured: true
  }
];

export const COMPANY_DETAILS = {
  name: 'Varad Engineering',
  legalName: 'M/s. Varad Engineering',
  tagline: 'Engineering Connections. Powering Infrastructure.',
  subTagline: 'Manufacturers of high-quality electrical clamps, connectors and custom-built engineering products for transmission and substation applications.',
  establishedYear: 2003,
  yearsOfExperience: 23,
  phone: '+91 9011022536',
  displayPhone: '+91 9011022536',
  contactPerson: 'ADESH ANKUSH KOREGAVE',
  email: 'Varadengineering2008@gmail.com',
  address: {
    plot: 'Plot No. 78, Gat No. 447',
    landmark: 'Nr Vinzai Comp, Wadmukhwadi',
    locality: 'Charholi',
    city: 'Pune',
    pincode: '412 105',
    state: 'Maharashtra',
    country: 'India',
    full: 'Plot No. 78, Gat No. 447, Nr Vinzai Comp, Wadmukhwadi, Charholi, Pune – 412 105, Maharashtra, India.'
  },
  testingApproval: 'Tested & Approved by C.P.R.I. Bangalore',
  materialsSupported: ['Aluminium', 'Copper', 'Brass', 'MS (HDGI)'],
  voltageClass: 'H.T. / L.T. / EHV Lines & Substations'
};
