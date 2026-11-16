export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryLabel: string;
  category: 'connectors' | 'clamps' | 'terminals' | 'suspension-tension' | 'earthing' | 'custom' | string;
  material: string;
  conductorRange?: string;
  description: string;
  application: string;
  image?: string;
  gallery?: string[];
  specPage?: number;
  featured?: boolean;
  subGroup?: string;
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

export interface ProductCategoryItem {
  id: string;
  label: string;
}

export const PRODUCT_CATEGORIES: ProductCategoryItem[] = [
  { id: 'substation-clamps-connectors', label: 'Substation Clamps & Connectors' },
  { id: 'substation-hardware', label: 'Substation Hardware' },
  { id: 'earthwire-hardware', label: 'Earthwire Hardware' },
  { id: 'bimetallic-sheets-sleeves', label: 'Bimetallic Sheets & Sleeves' },
  { id: 'transmission-line-hardware', label: 'Transmission Line Hardware' },
  { id: 'clamps-connectors-400kv-above', label: 'Clamps & Connectors for 400 kV and Above' }
];

export const PRODUCTS: Product[] = [
  // =========================================================================
  // 1. Substation Clamps & Connectors
  // =========================================================================
  {
    id: 'palm-80x80',
    name: '80 × 80 Palm Connector',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'High-conductivity aluminium 80 × 80 mm palm connector with 4-hole mounting pad for heavy-duty electrical conductor terminations.',
    application: 'Substation conductor termination to equipment terminal palms (H.T. / EHV).',
    image: '/images/products/substation-clamps/80-80-12.png',
    specPage: 1,
    featured: true
  },
  {
    id: 'palm-100x100-12',
    name: '100 × 100 Palm Connector',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Heavy-gauge aluminium 4-hole palm connector (100 × 100 mm) designed for medium-to-large cross-section ACSR conductors.',
    application: 'Switchyard busbar and transformer terminal connections.',
    image: '/images/products/substation-clamps/100-100-12.png',
    gallery: [
      '/images/products/substation-clamps/100-100-12.png',
      '/images/products/substation-clamps/100-100-20.png'
    ],
    specPage: 2,
    featured: false
  },
  {
    id: 'palm-100x100-20',
    name: '100 × 100 Palm Connector (20mm Pad)',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'High-ampacity 20mm thick palm connector (100 × 100 mm) for high thermal and fault current handling.',
    application: 'High-current transmission and EHV substation terminal interfaces.',
    image: '/images/products/substation-clamps/100-100-20.png',
    specPage: 3,
    featured: false
  },
  {
    id: 'palm-125x125',
    name: '125 × 125 Palm Connector',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Heavy-duty 125 × 125 mm palm connector providing ultra-low contact resistance for maximum power transfer.',
    application: 'Large power transformer bushings and high-capacity circuit breaker terminals.',
    image: '/images/products/substation-clamps/125-125-20.png',
    specPage: 4,
    featured: true
  },
  {
    id: 'pg-clamp',
    name: 'PG Clamp',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Extruded parallel groove clamp with high-tensile hot-dip galvanized steel bolts for non-tension jumper loops and tap connections.',
    application: 'Tension tower jumper loops and electrical tap connections.',
    image: '/images/products/substation-clamps/pg_clamp.png',
    specPage: 34,
    featured: false
  },
  {
    id: 'substation-spacer',
    name: 'Spacer',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'suspension-tension',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Twin conductor spacer maintaining uniform sub-conductor spacing along the span, preventing clashing under wind and fault currents.',
    application: 'Overhead twin-bundle transmission line spans and substation bus runs.',
    image: '/images/products/substation-clamps/spacer.png',
    specPage: 8,
    featured: true
  },
  {
    id: 'support-clamp-single',
    name: 'Single Support Clamp',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: 'ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Insulator cap-mounted clamping bracket supporting single rigid conductor lines on station post insulators.',
    application: 'Single conductor support on substation post insulators (BPI).',
    image: '/images/products/substation-clamps/support-clamp-single.png',
    specPage: 10,
    featured: false
  },
  {
    id: 'support-clamp-twin',
    name: 'Twin Support Clamp',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: 'ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Post insulator support clamp with slotted base mounting plate for dual bundled horizontal conductors.',
    application: 'Bus post insulator (BPI) mounting for twin conductor support.',
    image: '/images/products/substation-clamps/support-clamp-twin.png',
    specPage: 9,
    featured: true
  },
  {
    id: 't-twin-to-single',
    name: 'Twin to Single T Connector',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Asymmetric tee clamp connecting a single dropline tap to twin bundled horizontal conductors.',
    application: 'Substation bay tap-offs from bundled bus conductors.',
    image: '/images/products/substation-clamps/t-twin-to-single.png',
    gallery: [
      '/images/products/substation-clamps/t-twin-to-single.png',
      '/images/products/substation-clamps/t-twin-2-singaal-225-.png'
    ],
    specPage: 12,
    featured: false
  },
  {
    id: 't-connector-twin-to-twin',
    name: 'T Connector Twin to Twin Conductor',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Dual bundled tee clamp connector (225mm spacing) for high-voltage multi-bundle substation junctions.',
    application: 'Twin bundle mainline to twin bundle tap branch.',
    image: '/images/products/substation-clamps/t-twin-2-twin-225-zebra.png',
    specPage: 13,
    featured: true
  },
  {
    id: 'u-terminal-connector',
    name: 'U Terminal Connector',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '2" to 4" IPS Tube / Conductor',
    description: 'U-configuration terminal connector designed for secure equipment stud and bus pipe termination.',
    application: 'Substation equipment terminal interface and bus transitions.',
    image: '/images/products/substation-clamps/u-terminalips2.png',
    specPage: 14,
    featured: true
  },
  {
    id: 'terminal-connector-earthswitch',
    name: 'Terminal Connector for Earth Switch',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: 'Standard Earth Switch Terminal / Twin Conductor',
    description: 'Specialized earth switch terminal clamp providing low-impedance short-circuit fault ground path.',
    application: 'Earthing switch terminal to overhead twin conductor.',
    image: '/images/products/substation-clamps/terminalconnectorearthswitch.png',
    specPage: 27,
    featured: false
  },
  {
    id: 'ct-connector-std',
    name: 'CT Connector',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Precision-cast aluminium CT clamp connector with bolted keeper for secure conductor connection to current transformers.',
    application: 'Current transformer (CT) primary terminal connection.',
    image: '/images/products/substation-clamps/rigid_connector_ct_to_ips_tube.png',
    specPage: 5,
    featured: true
  },
  {
    id: 'palm-type-ct-twin',
    name: 'Palm Type CT Connector (Stud Twin)',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Dual-barrel twin conductor palm CT connector for multi-bundle transmission lines entering substation CT bays.',
    application: 'Twin conductor termination on CT primary terminal studs.',
    image: '/images/products/substation-clamps/ct_twin_stud_to_conductor.png',
    gallery: [
      '/images/products/substation-clamps/ct_twin_stud_to_conductor.png',
      '/images/products/substation-clamps/rigid_type_ct_twin_stud.png'
    ],
    specPage: 6,
    featured: false
  },
  {
    id: 'palm-type-ct-single',
    name: 'Palm Type CT Connector (Stud Single)',
    categoryId: 'substation-clamps-connectors',
    categoryLabel: 'Substation Clamps & Connectors',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'DOG, PANTHER, ZEBRA, MOOSE, MORCULLA CONDUCTOR',
    description: 'Single-barrel stud clamp CT connector engineered for seamless current transfer and vibration resistance.',
    application: 'Single conductor CT terminal connection.',
    image: '/images/products/substation-clamps/stud_to_universal_twin_cond.png',
    specPage: 7,
    featured: false
  },

  // =========================================================================
  // 2. Substation Hardware
  // =========================================================================
  {
    id: 'sub-single-single-tension',
    name: 'Single to Single Tension Hardware',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Dead-end tension assembly with heavy-duty strain clamp, ball-eye, socket-clevis, and hardware fittings for terminating single conductor on substation structures.',
    application: 'Substation gantry tension and dead-end termination for single conductors.',
    image: '/images/products/substation-hardware/single to single tension hardware.png',
    specPage: 37,
    featured: true
  },
  {
    id: 'sub-single-single-suspension',
    name: 'Single to Single Suspension Hardware',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Complete suspension assembly with suspension clamp, socket eye, and ball link for flexible conductor suspension on substation gantries.',
    application: 'Substation gantry conductor suspension for single conductor string.',
    image: '/images/products/substation-hardware/single to single suspension hardware.png',
    specPage: 36,
    featured: false
  },
  {
    id: 'sub-single-single-suspension-d-shackle',
    name: 'Single to Single Suspension D-Shackle Type',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Single conductor suspension assembly featuring heavy-duty forged D-shackle connection for increased articulation and mechanical strength.',
    application: 'Substation suspension points requiring D-shackle anchor fittings.',
    image: '/images/products/substation-hardware/single to single suspension hardware d shackle.png',
    featured: false
  },
  {
    id: 'sub-single-single-drop-suspension',
    name: 'Single to Single Drop Type Suspension Hardware',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Specialized drop-type suspension assembly designed for overhead dropper conductor connections and bus run transitions.',
    application: 'Substation dropper suspension and equipment lead support.',
    image: '/images/products/substation-hardware/single to single drop suspension hardware.png',
    featured: false
  },
  {
    id: 'sub-single-twin-tension',
    name: 'Single to Twin Tension Hardware',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Heavy-duty strain tension assembly with triangular yoke plate (225mm spacing) and dual compression strain clamps connecting a single anchor point to twin bundled conductors.',
    application: 'Substation gantry dead-end termination transitioning from structure anchor to twin bundle lines.',
    image: '/images/products/substation-hardware/single to twin tension hardware.png',
    specPage: 38,
    featured: true
  },
  {
    id: 'sub-single-twin-suspension',
    name: 'Single to Twin Suspension Hardware',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Complete twin-conductor suspension assembly with triangular yoke plate and twin suspension clamps for supporting bundled conductors.',
    application: 'Substation twin conductor bundle suspension on support gantries.',
    image: '/images/products/substation-hardware/single to twin suspension hardware.png',
    specPage: 35,
    featured: true
  },
  {
    id: 'sub-single-twin-suspension-d-shackle',
    name: 'Single to Twin Suspension D-Shackle Type',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Twin-conductor suspension assembly with forged D-shackle top attachment and triangular yoke plate for articulated suspension of twin bundles.',
    application: 'Heavy-duty articulated twin suspension on substation gantry towers.',
    image: '/images/products/substation-hardware/single to twin suspension d shackle.png',
    featured: false
  },
  {
    id: 'sub-single-twin-drop-suspension',
    name: 'Single to Twin Drop Type Suspension Hardware',
    categoryId: 'substation-hardware',
    categoryLabel: 'Substation Hardware',
    category: 'suspension-tension',
    material: 'Aluminium / MS (HDGI)',
    conductorRange: 'PANTHER, ZEBRA, MOOSE, MORCULLA',
    description: 'Twin-conductor drop type suspension assembly for vertical and angled dropper runs in substation bays.',
    application: 'Substation twin-conductor drop connections and transformer bay leads.',
    image: '/images/products/substation-hardware/single to twin drop suspension hardware.png',
    featured: false
  },

  // =========================================================================
  // 3. Earthwire Hardware
  // =========================================================================
  {
    id: 'earthwire-tension-clamp',
    name: 'Earthwire Tension Clamp',
    categoryId: 'earthwire-hardware',
    categoryLabel: 'Earthwire Hardware',
    category: 'earthing',
    material: 'MS (HDGI)',
    conductorRange: 'Standard Galvanized Steel Ground Wire / Earthwire',
    description: 'Hot-dip galvanized forged steel dead-end tension clamp for terminating optical ground wire (OPGW) or standard steel earthwire.',
    application: 'Transmission tower peak and substation gantry earthwire termination.',
    specPage: 40,
    featured: true
  },
  {
    id: 'earthwire-suspension-clamp',
    name: 'Earthwire Suspension Clamp',
    categoryId: 'earthwire-hardware',
    categoryLabel: 'Earthwire Hardware',
    category: 'earthing',
    material: 'MS (HDGI)',
    conductorRange: 'Standard Galvanized Steel Ground Wire',
    description: 'Hot-dip galvanized suspension clamp assembly engineered for overhead ground wire suspension with low vibration fatigue.',
    application: 'Transmission tower and substation peak overhead ground wire suspension.',
    featured: false
  },
  {
    id: 'flexible-copper-earth-bond',
    name: 'Flexible Copper Earth Bond',
    categoryId: 'earthwire-hardware',
    categoryLabel: 'Earthwire Hardware',
    category: 'earthing',
    material: 'Electrolytic Grade Copper',
    conductorRange: 'Standard & Custom Lengths',
    description: 'High-flexibility tinned/bare copper braided bonding jumper with robust compression end terminals for grounding steel structures and equipment frames.',
    application: 'Substation equipment grounding, gate earthing, and structure bonding.',
    specPage: 39,
    featured: true
  },

  // =========================================================================
  // 4. Bimetallic Sheets & Sleeves
  // =========================================================================
  {
    id: 'bimetallic-sheets',
    name: 'Bimetallic Sheets & Plates',
    categoryId: 'bimetallic-sheets-sleeves',
    categoryLabel: 'Bimetallic Sheets & Sleeves',
    category: 'custom',
    material: 'Aluminium-Copper Friction Welded / Explosive Clad',
    conductorRange: 'Standard & Custom Dimensions',
    description: 'High-conductivity transition plates composed of metallurgically bonded copper and aluminium faces to prevent galvanic corrosion between dissimilar metal interfaces.',
    application: 'Substation transformer palms, circuit breaker copper terminals, and aluminium busbars.',
    featured: true
  },
  {
    id: 'bimetallic-sleeves',
    name: 'Bimetallic Transition Sleeves',
    categoryId: 'bimetallic-sheets-sleeves',
    categoryLabel: 'Bimetallic Sheets & Sleeves',
    category: 'custom',
    material: 'High Conductivity Aluminium & Copper',
    conductorRange: 'Standard Cable & Conductor Sizes',
    description: 'Compression transition sleeves for splicing or terminating copper and aluminium conductors without electrochemical degradation.',
    application: 'Cable-to-bus transitions, grounding taps, and bi-metallic conductor joints.',
    featured: false
  },

  // =========================================================================
  // 5. Transmission Line Hardware
  // =========================================================================
  {
    id: 'line-single-string-single-susp-norm',
    name: 'Single String for Single Suspension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Cast Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Standard single-string suspension insulator hardware assembly with ball/socket fittings and suspension clamp for normal overhead spans.',
    application: 'Intermediate suspension towers on high-voltage transmission lines.',
    image: '/images/products/line-hardware/single  string for single suspension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: true
  },
  {
    id: 'line-single-string-single-susp-appr',
    name: 'Single String for Single Suspension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Cast Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Approach tower single-string suspension assembly engineered for approach angles and increased mechanical loads near substations.',
    application: 'Substation approach towers and angled suspension spans.',
    image: '/images/products/line-hardware/single  string for single suspension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-single-string-single-tens-norm',
    name: 'Single String for Single Tension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Single-string tension dead-end assembly with compression strain clamp and extension links engineered to hold maximum working tensile load.',
    application: 'Section, angle, and dead-end tension towers for single conductor.',
    image: '/images/products/line-hardware/single string for single tension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-single-string-single-tens-appr',
    name: 'Single String for Single Tension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Single-string tension dead-end assembly configured for line approach angles entering substation gantry structures.',
    application: 'Approach tension towers and terminal gantry dead-ends.',
    image: '/images/products/line-hardware/single  string for single tension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-double-string-single-susp-norm',
    name: 'Double String for Single Suspension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Cast Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Dual insulator string suspension assembly with yoke plates providing mechanical redundancy for critical highway and river crossings.',
    application: 'Long span crossings and heavy load suspension towers.',
    image: '/images/products/line-hardware/double string for single suspension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: true
  },
  {
    id: 'line-double-string-single-susp-appr',
    name: 'Double String for Single Suspension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Cast Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Dual string suspension assembly tailored for approach spans with higher uplift and angle stress near terminal substations.',
    application: 'Terminal approach towers requiring double string mechanical security.',
    image: '/images/products/line-hardware/double string for single suspension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-double-string-single-tens-norm',
    name: 'Double String for Single Tension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Heavy-duty double string tension dead-end assembly with dual yoke plates and high-strength compression dead-ends.',
    application: 'Heavy angle and dead-end transmission towers requiring redundant mechanical safety.',
    image: '/images/products/line-hardware/double string for single tension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: true
  },
  {
    id: 'line-double-string-single-tens-appr',
    name: 'Double String for Single Tension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: 'Standard Transmission Line Conductors',
    description: 'Double string tension assembly optimized for substation approach towers with high horizontal line tension.',
    application: 'Substation approach dead-end towers.',
    image: '/images/products/line-hardware/double string for single tension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-04-single-string-single-susp-norm',
    name: '0.4 Single String for Single Suspension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Cast Aluminium (HDGI)',
    conductorRange: '0.4 Specification Conductors',
    description: '0.4 rated single string suspension assembly engineered to specific clearance and mechanical rating standards for overhead lines.',
    application: '0.4 rated transmission line intermediate suspension points.',
    image: '/images/products/line-hardware/0.4 single  string for single suspension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-04-single-string-single-susp-appr',
    name: '0.4 Single String for Single Suspension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Cast Aluminium (HDGI)',
    conductorRange: '0.4 Specification Conductors',
    description: '0.4 rated approach single string suspension assembly for transition spans.',
    application: '0.4 rated approach spans near line angle towers.',
    image: '/images/products/line-hardware/0.4 single  string for single suspension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-04-single-string-single-tens-norm',
    name: '0.4 Single String for Single Tension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: '0.4 Specification Conductors',
    description: '0.4 rated single string tension dead-end assembly designed for high mechanical grip.',
    application: '0.4 rated section and dead-end transmission towers.',
    image: '/images/products/line-hardware/0.4 single  string for single tension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-04-single-string-single-tens-appr',
    name: '0.4 Single String for Single Tension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: '0.4 Specification Conductors',
    description: '0.4 rated single string tension approach assembly for terminal line entries.',
    application: '0.4 rated terminal approach towers.',
    image: '/images/products/line-hardware/0.4 single  string for single tension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-04-double-string-single-tens-norm',
    name: '0.4 Double String for Single Tension – Normal',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: '0.4 Specification Conductors',
    description: '0.4 rated dual string tension assembly providing double insulator reliability.',
    application: '0.4 rated dead-end towers and heavy angle positions.',
    image: '/images/products/line-hardware/0.4 double string for single tension normal.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  {
    id: 'line-04-double-string-single-tens-appr',
    name: '0.4 Double String for Single Tension – Approach',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Forged Steel & Compression Aluminium (HDGI)',
    conductorRange: '0.4 Specification Conductors',
    description: '0.4 rated double string approach tension assembly for terminal switchyard approaches.',
    application: '0.4 rated approach dead-end points.',
    image: '/images/products/line-hardware/0.4 double string for single tension approch.jpg',
    subGroup: 'Line Hardware Assemblies',
    featured: false
  },
  // HTLS Hardware Group
  {
    id: 'htls-hardware-set',
    name: 'HTLS Hardware Set (Complete Assembly)',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Aluminium & High-Strength Steel',
    conductorRange: 'Drake / HTLS Conductors',
    description: 'Complete High Temperature Low Sag (HTLS) conductor dead-end tension hardware assembly designed to operate reliably under high thermal and mechanical stress.',
    application: 'HTLS high capacity transmission line dead-end anchoring.',
    image: '/images/products/htls-hardware/htls hardware set.png',
    gallery: [
      '/images/products/htls-hardware/htls hardware set.png',
      '/images/products/htls-hardware/htls hardware set iso.png'
    ],
    subGroup: 'HTLS Hardware',
    featured: true
  },
  {
    id: 'htls-drake-aluminium-dead-end',
    name: 'Drake Aluminium Dead End (HTLS)',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'High-Conductivity Aluminium',
    conductorRange: 'HTLS Drake Conductor',
    description: 'Aluminium dead-end outer body for high temperature current conduction and mechanical retention of HTLS conductors.',
    application: 'Dead-end tension termination for HTLS Drake conductor.',
    image: '/images/products/htls-hardware/drake_aluminium_dead_end.png',
    subGroup: 'HTLS Hardware',
    featured: false
  },
  {
    id: 'htls-steel-deadend-drake',
    name: 'Steel Dead End Drake (HTLS)',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'High-Strength Forged Steel (HDGI)',
    conductorRange: 'HTLS Drake Steel/Composite Core',
    description: 'High-tensile steel dead-end gripping the inner core of HTLS Drake conductor to withstand high line tensions.',
    application: 'Core gripping component of HTLS tension assembly.',
    image: '/images/products/htls-hardware/steel_deadend_drake.png',
    subGroup: 'HTLS Hardware',
    featured: false
  },
  {
    id: 'htls-dend-in-pipe',
    name: 'HTLS Dead End in Pipe Assembly',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Aluminium & Steel Assembly',
    conductorRange: 'HTLS Conductor Assembly',
    description: 'HTLS compression dead-end sleeve inserted into aluminium pipe assembly for high thermal mechanical anchoring.',
    application: 'High-voltage HTLS line tension joint.',
    image: '/images/products/htls-hardware/dend_in_pipe.png',
    subGroup: 'HTLS Hardware',
    featured: false
  },
  {
    id: 'htls-jumper-cone',
    name: 'HTLS Jumper Cone',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Aluminium Alloy',
    conductorRange: 'HTLS Conductor Jumper Loop',
    description: 'Conical terminal fitting for jumper loop connections on HTLS tension towers.',
    application: 'HTLS jumper lead connection.',
    image: '/images/products/htls-hardware/jumper_cone.png',
    subGroup: 'HTLS Hardware',
    featured: false
  },
  {
    id: 'htls-drake-stud',
    name: 'Drake Stud (HTLS)',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'Aluminium Alloy / High-Tensile Steel',
    conductorRange: 'HTLS Drake Fittings',
    description: 'Precision threaded terminal stud for Drake size HTLS hardware terminations and connections.',
    application: 'HTLS hardware terminal interfacing.',
    image: '/images/products/htls-hardware/drake_stud.png',
    subGroup: 'HTLS Hardware',
    featured: false
  },
  {
    id: 'htls-collet',
    name: 'HTLS Collet',
    categoryId: 'transmission-line-hardware',
    categoryLabel: 'Transmission Line Hardware',
    category: 'suspension-tension',
    material: 'High Strength Alloy',
    conductorRange: 'HTLS Core Grip',
    description: 'Precision-machined locking collet providing high friction retention without damaging composite/steel conductor core.',
    application: 'Core clamping within HTLS tension hardware.',
    image: '/images/products/htls-hardware/collet.png',
    subGroup: 'HTLS Hardware',
    featured: false
  },

  // =========================================================================
  // 6. Clamps & Connectors for 400 kV and Above
  // =========================================================================
  {
    id: '400kv-t-conn-single-quad-horiz',
    name: 'T Connector Single to Quad Conductor Horizontal',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA, 400kV Quad Bundle',
    description: 'Horizontal tee connector clamp designed for tapping single dropper conductor from 400kV quad-bundle horizontal conductor run.',
    application: '400kV EHV substation horizontal bay tap-off.',
    image: '/images/products/400kv-clamps-connectors/t connector single to quad conductor horizontal.png',
    featured: true
  },
  {
    id: '400kv-t-conn-single-quad',
    name: 'T Connector Single to Quad Conductor',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA, 400kV Quad Bundle',
    description: 'T-connector engineered to branch single conductor leads from quad-bundle conductor buses in 400kV substations.',
    application: '400kV / 765kV substation busbar dropper connections.',
    image: '/images/products/400kv-clamps-connectors/t connector single to quad conductor.png',
    featured: false
  },
  {
    id: '400kv-t-conn-twin-twin',
    name: 'T Connector Twin to Twin',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'Twin Morculla / Zebra Conductor',
    description: 'Dual-run tee connector connecting twin-bundle main bus runs to twin-bundle branch feeds with heavy bolted keepers.',
    application: '400kV switchyard twin-to-twin bus branching.',
    image: '/images/products/400kv-clamps-connectors/t_connect_twin_morq_twin_morcul.png',
    featured: true
  },
  {
    id: '400kv-t-type-ips-ips',
    name: 'T Type IPS to IPS Tube Clamp',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: '3" / 4" / 4.5" IPS Aluminium Tube',
    description: '90-degree heavy-duty split-body clamp connecting main IPS tubular busbar to branch IPS tube.',
    application: 'Tubular bus cross-connections in 400kV substations.',
    image: '/images/products/400kv-clamps-connectors/t_type_ips_to_ips_tube_clamp.png',
    featured: false
  },
  {
    id: '400kv-t-conn-twin-quad',
    name: 'T Connector Twin to Quad',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'Twin to Quad Bundle Conductor',
    description: 'Transition tee clamp connecting twin-bundle feeders to quadruple-bundle main bus lines.',
    application: '400kV substation bay expansion and bay entrance junctions.',
    image: '/images/products/400kv-clamps-connectors/t-connector twin-to quad.png',
    featured: false
  },
  {
    id: '400kv-t-conn-twin',
    name: 'T Connector for Twin Conductor',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'ZEBRA, MOOSE, MORCULLA',
    description: 'Precision tee clamp designed for 400kV twin conductor lines ensuring corona-free high current transfer.',
    application: '400kV twin conductor busbar branching.',
    image: '/images/products/400kv-clamps-connectors/tconnectorfortwin.png',
    featured: false
  },
  {
    id: '400kv-tee-conn-quad-twin',
    name: 'Tee Connector Quad to Twin',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'connectors',
    material: 'Aluminium',
    conductorRange: 'Quad Morculla to Twin Morculla',
    description: 'High-voltage tee clamp connecting quad-bundle bus to twin-bundle dropper lines with robust clamping geometry.',
    application: '400kV busbar tap-offs to equipment bays.',
    image: '/images/products/400kv-clamps-connectors/tee_connector_quad_to_twin_morc.png',
    featured: true
  },
  {
    id: '400kv-terminal-conn-earth-switch',
    name: 'Terminal Connector Earth Switch',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '400kV Earth Switch Terminals / Conductor',
    description: 'Heavy-duty terminal connector engineered for 400kV earth switch assemblies to ensure reliable fault current dissipation.',
    application: '400kV earthing switch blade and structure ground connections.',
    image: '/images/products/400kv-clamps-connectors/terminalconnectorearthswitch.png',
    featured: false
  },
  {
    id: '400kv-u-connecting-plate',
    name: 'U Connecting Plate',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'custom',
    material: 'Aluminium',
    conductorRange: '400kV Breaker / Isolator Terminals',
    description: 'Heavy aluminium U-shaped bridging adapter plate for high-current equipment terminal interconnection.',
    application: '400kV circuit breaker and isolator terminal bridging.',
    image: '/images/products/400kv-clamps-connectors/uconnectingplate.png',
    featured: true
  },
  {
    id: '400kv-u-connecting-plate-80x80',
    name: 'U Connecting Plate 80 × 80',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'custom',
    material: 'Aluminium',
    conductorRange: '80 × 80 mm Terminal Pad Spacing',
    description: 'Precision-drilled U-profile connecting plate with 80 × 80 mm hole matrix for high-voltage breaker terminals.',
    application: 'Equipment terminal linking in 400kV switchgear bays.',
    image: '/images/products/400kv-clamps-connectors/uconnectingplate80x80.png',
    featured: false
  },
  {
    id: '400kv-v-type-ips-two-ips',
    name: 'V Type IPS to Two IPS Tube Clamp',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: 'IPS Tubular Aluminium Bus',
    description: 'Inverted V-configuration connector joining a main IPS tube to two angled IPS tubes for seismic and thermal flexibility.',
    application: 'Substation tubular bus crossovers and flexible junctions.',
    image: '/images/products/400kv-clamps-connectors/v_type_ips_to_2 ips_tube_clamp.png',
    featured: false
  },
  {
    id: '400kv-4inch-ips-twin-cond',
    name: '4 Inch IPS to Twin Conductor',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube to Twin MOOSE / MORCULLA',
    description: 'Transition terminal connector linking 4-inch IPS tubular busbar to twin flexible stranded overhead conductors.',
    application: 'Tubular busbar to overhead twin line conductor interface.',
    image: '/images/products/400kv-clamps-connectors/4 inch ips to twin conductor.png',
    featured: true
  },
  {
    id: '400kv-10-deg-ips-ips',
    name: '10 Degree IPS to IPS',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: '4” IPS Aluminium Tube',
    description: '10-degree angled rigid clamp connector connecting two adjoining IPS aluminium bus tubes at slight angles.',
    application: 'Bus alignment correction and angled tubular bus transitions in 400kV bays.',
    image: '/images/products/400kv-clamps-connectors/10_deg_ips_to_ips.png',
    featured: false
  },
  {
    id: '400kv-bpi-ips-support',
    name: 'BPI IPS Support',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube / Bus Post Insulators',
    description: 'Heavy-duty support clamp mounted on bus post insulators (BPI) to support 4" IPS aluminium tubular busbars.',
    application: '400kV bus post insulator mounting and tubular bus support.',
    image: '/images/products/400kv-clamps-connectors/bpi_ips_support.png',
    featured: true
  },
  {
    id: '400kv-brass-bushing-clamp',
    name: 'Brass Bushing Clamp',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'High-Tensile Brass / Copper Alloy',
    conductorRange: 'Transformer Bushing Studs',
    description: 'Cast brass angle clamp with bolted pad for mounting directly to transformer primary and secondary bushing studs.',
    application: 'Power transformer bushing stud connections.',
    image: '/images/products/400kv-clamps-connectors/bushing_clamp_brass.png',
    featured: true
  },
  {
    id: '400kv-corona-bell',
    name: 'Corona Bell',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'custom',
    material: 'Aluminium Alloy',
    conductorRange: '4” IPS Tube End',
    description: 'Smooth electrostatic shield bell fitted at the open ends of 4" IPS aluminium tubes to eliminate corona discharge and RIV.',
    application: 'Open tube end shielding on 400kV and 765kV tubular busbars.',
    image: '/images/products/400kv-clamps-connectors/corona_bell.png',
    featured: false
  },
  {
    id: '400kv-ct-twin-stud-60',
    name: 'CT Twin Stud 60',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '60mm CT Primary Studs',
    description: 'Heavy-duty dual stud terminal clamp engineered specifically for 60mm diameter CT primary terminal studs.',
    application: 'Current transformer stud termination in 400kV substations.',
    image: '/images/products/400kv-clamps-connectors/ct_twin_stud_60.png',
    featured: false
  },
  {
    id: '400kv-ct-twin-stud-cond',
    name: 'CT Twin Stud to Conductor',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: 'Twin ACSR Conductor / CT Studs',
    description: 'Dual-barrel connector linking CT primary twin studs to overhead twin bundled conductors.',
    application: '400kV CT terminal to overhead line conductor bay transition.',
    image: '/images/products/400kv-clamps-connectors/ct_twin_stud_to_conductor.png',
    featured: true
  },
  {
    id: '400kv-hp-brass-bushing-clamp',
    name: 'HP Brass Bushing Clamp',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'High-Performance Brass',
    conductorRange: 'High Power Transformer Bushings',
    description: 'High-performance heavy-duty cast brass bushing clamp engineered for superior ampacity and low thermal rise.',
    application: 'High power transformer and reactor bushing connections.',
    image: '/images/products/400kv-clamps-connectors/hp bushing_clamp_brass.png',
    featured: false
  },
  {
    id: '400kv-rigid-conn-ips',
    name: 'Rigid Connector IPS',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube to Equipment Pad',
    description: 'Rigid clamping connector for terminating 4" IPS aluminium pipe directly to equipment terminal pads.',
    application: 'Tubular busbar termination to switchgear equipment.',
    image: '/images/products/400kv-clamps-connectors/rigid_connector_ips to.png',
    featured: false
  },
  {
    id: '400kv-rigid-conn-ips-tube',
    name: 'Rigid Connector IPS Tube',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'In-line sleeve clamp connector for rigid jointing of two tubular aluminium busbars.',
    application: 'Tubular busbar coupling and straight jointing.',
    image: '/images/products/400kv-clamps-connectors/rigid_connector_ips_tube.png',
    featured: false
  },
  {
    id: '400kv-rigid-type-to-ips',
    name: 'Rigid Type to IPS',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube',
    description: 'Rigid heavy-duty transition connector for connecting substation equipment terminal pads to 4" IPS tube.',
    application: 'Equipment pad to tubular busbar connections.',
    image: '/images/products/400kv-clamps-connectors/rigid_type__to_ips.png',
    featured: false
  },
  {
    id: '400kv-rigid-type-ct-twin-stud',
    name: 'Rigid Type CT Twin Stud',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: 'CT Twin Stud to IPS / Conductor',
    description: 'Twin-stud rigid connector linking CT primary terminals to substation busbar.',
    application: 'Current transformer dual stud rigid terminal interface.',
    image: '/images/products/400kv-clamps-connectors/rigid_type_ct_twin_stud.png',
    featured: false
  },
  {
    id: '400kv-rigid-type-hcb-isolator',
    name: 'Rigid Type HCB Isolator',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: '4” IPS Tube / Isolator Pad',
    description: 'Rigid clamping connector designed for Horizontal Center Break (HCB) disconnect isolator terminals.',
    application: '400kV isolator switch terminal connections.',
    image: '/images/products/400kv-clamps-connectors/rigid_type_hcb_isolator.png',
    featured: false
  },
  {
    id: '400kv-rigid-type-stud-to-ips',
    name: 'Rigid Type Stud to IPS',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: 'Equipment Stud to 4” IPS Tube',
    description: 'Direct stud-to-tube rigid clamp for coupling equipment cylindrical studs to 4" IPS aluminium pipe.',
    application: 'Substation equipment stud to tubular busbar interfacing.',
    image: '/images/products/400kv-clamps-connectors/rigid_type_stud_to_ips.png',
    featured: false
  },
  {
    id: '400kv-quadruple-spacer',
    name: 'Quadruple Spacer',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'suspension-tension',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA (4-Bundle)',
    description: 'High-voltage 4-conductor spacer maintaining sub-conductor spacing and aerodynamic stability across 400kV spans.',
    application: '400kV / 765kV quad-bundle transmission spans and substation bus runs.',
    image: '/images/products/400kv-clamps-connectors/spacerquadruplemorqulla.png',
    featured: true
  },
  {
    id: '400kv-stud-to-twin-conductor',
    name: 'Stud to Twin Conductor',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'terminals',
    material: 'Aluminium',
    conductorRange: 'Twin ACSR Conductor / Stud',
    description: 'Universal stud clamp providing dual bolted keepers to connect equipment studs directly to twin overhead conductors.',
    application: 'Equipment stud termination to twin bundled conductors.',
    image: '/images/products/400kv-clamps-connectors/stud to twin conductor.png',
    featured: false
  },
  {
    id: '400kv-quad-support-clamp',
    name: 'Quad Support Clamp',
    categoryId: 'clamps-connectors-400kv-above',
    categoryLabel: 'Clamps & Connectors for 400 kV and Above',
    category: 'clamps',
    material: 'Aluminium',
    conductorRange: 'MOOSE, MORCULLA (Quad Bundle)',
    description: 'Heavy-duty post insulator support clamp supporting 4-bundle horizontal conductors on 400kV bus post insulators.',
    application: '400kV quadruple bundled conductor bus support on BPIs.',
    image: '/images/products/400kv-clamps-connectors/support-clamp-quad.png',
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

export const CATALOG_IMAGES: Record<number, string> = {
  1: '/images/catalog_extracted/page_01_1428x1009.jpeg',
  2: '/images/catalog_extracted/page_02_1428x1009.jpeg',
  3: '/images/catalog_extracted/page_03_1428x1009.jpeg',
  4: '/images/catalog_extracted/page_04_1428x1009.jpeg',
  5: '/images/catalog_extracted/page_05_1428x1009.jpeg',
  6: '/images/catalog_extracted/page_06_1428x1009.jpeg',
  7: '/images/catalog_extracted/page_07_1428x1009.jpeg',
  8: '/images/catalog_extracted/page_08_1428x1009.jpeg',
  9: '/images/catalog_extracted/page_09_1428x1009.jpeg',
  10: '/images/catalog_extracted/page_10_1428x1009.jpeg',
  11: '/images/catalog_extracted/page_11_1428x1009.jpeg',
  12: '/images/catalog_extracted/page_12_1307x923.jpeg',
  13: '/images/catalog_extracted/page_13_1428x1009.jpeg',
  14: '/images/catalog_extracted/page_14_1431x1105.jpeg',
  15: '/images/catalog_extracted/page_15_1431x1105.jpeg',
  16: '/images/catalog_extracted/page_16_1431x1104.jpeg',
  17: '/images/catalog_extracted/page_17_1428x1009.jpeg',
  18: '/images/catalog_extracted/page_18_1431x1104.jpeg',
  19: '/images/catalog_extracted/page_19_1431x1104.jpeg',
  20: '/images/catalog_extracted/page_20_1431x1104.jpeg',
  21: '/images/catalog_extracted/page_21_1431x1105.jpeg',
  22: '/images/catalog_extracted/page_22_1431x1104.jpeg',
  23: '/images/catalog_extracted/page_23_1431x1104.jpeg',
  24: '/images/catalog_extracted/page_24_1431x1104.jpeg',
  25: '/images/catalog_extracted/page_25_1431x1104.jpeg',
  26: '/images/catalog_extracted/page_26_1431x1104.jpeg',
  27: '/images/catalog_extracted/page_27_1431x1104.jpeg',
  28: '/images/catalog_extracted/page_28_1431x1104.jpeg',
  29: '/images/catalog_extracted/page_29_1431x1104.jpeg',
  30: '/images/catalog_extracted/page_30_970x1256.jpeg',
  31: '/images/catalog_extracted/page_31_1431x1104.jpeg',
  32: '/images/catalog_extracted/page_32_1431x1104.jpeg',
  33: '/images/catalog_extracted/page_33_1428x1009.jpeg',
  34: '/images/catalog_extracted/page_34_1428x1009.jpeg',
  35: '/images/catalog_extracted/page_35_1467x1037.jpeg',
  36: '/images/catalog_extracted/page_36_1542x1089.jpeg',
  37: '/images/catalog_extracted/page_37_1458x1031.jpeg',
  38: '/images/catalog_extracted/page_38_1516x1071.jpeg',
  39: '/images/catalog_extracted/page_39_1458x1031.jpeg',
  40: '/images/catalog_extracted/page_40_1565x1106.jpeg',
};

export function getProductCategory(specPageOrProduct?: number | Product): string {
  if (!specPageOrProduct) return 'substation-clamps-connectors';
  if (typeof specPageOrProduct === 'object') {
    return specPageOrProduct.categoryId || 'substation-clamps-connectors';
  }
  const specPage = specPageOrProduct;
  if (specPage >= 1 && specPage <= 14) return 'substation-clamps-connectors';
  if (specPage >= 35 && specPage <= 38) return 'substation-hardware';
  if (specPage >= 39 && specPage <= 40) return 'earthwire-hardware';
  if (specPage >= 15 && specPage <= 34) return 'clamps-connectors-400kv-above';
  return 'substation-clamps-connectors';
}
