export const siteContent = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sourcing Capabilities', path: '/capabilities' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ],
  companyInfo: {
    name: 'Bear Harbor',
    tagline: 'Structured Global Sourcing of Industrial Raw Materials & Bulk Commodities',
    description: 'We are a U.S.-based global sourcing and trade facilitation firm focused on containerized and bulk industrial commodities.',
    email: 'info@bearharbor.com',
    phone: '+1 (555) TRADE-BH',
    location: 'United States',
  },
  home: {
    hero: {
      headline: 'Structured Global Sourcing of Industrial Raw Materials & Bulk Commodities',
      subheadline: 'We specialize in structured sourcing of industrial raw materials and bulk commodities from India and select global origins — delivering reliable, compliant, and scalable supply solutions for B2B clients worldwide.',
      cta: [
        { label: 'Request a Quote', path: '/contact', primary: true },
        { label: 'Schedule Consultation', path: '/contact', primary: false },
      ],
    },
    whoWeAre: {
      headline: 'Who We Are',
      description: 'We are a U.S.-based global sourcing and trade facilitation firm focused on containerized and bulk industrial commodities. Our expertise combines structured procurement, supplier validation, quality control, and international logistics coordination to deliver dependable supply solutions across manufacturing, infrastructure, and industrial sectors.',
    },
    whatWeSource: [
      {
        title: 'Industrial Raw Materials',
        items: [
          'Industrial minerals (calcium carbonate, bentonite, silica, dolomite, bauxite)',
          'Construction inputs',
          'Energy-related raw materials',
          'Industrial fillers & additives'
        ],
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=75&w=600'
      },
      {
        title: 'Industrial Chemicals',
        items: [
          'Soda ash',
          'Caustic soda',
          'Industrial solvents',
          'Processing chemicals'
        ],
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=75&w=600'
      },
      {
        title: 'Agro & Bulk Commodities',
        items: [
          'Bulk grains & pulses',
          'Oilseeds & edible oils',
          'Animal feed ingredients',
          'Food processing inputs'
        ],
        image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=75&w=600'
      },
      {
        title: 'Industrial Inputs & Packaging',
        items: [
          'PP woven bags',
          'Bulk packaging materials',
          'Plastic granules',
          'Contract manufacturing inputs'
        ],
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=75&w=600'
      }
    ],
    approach: [
      { step: 1, title: 'Buyer Requirement Assessment', description: 'Deep analysis of technical specs, volume needs, and target delivery timelines.' },
      { step: 2, title: 'Supplier Identification & Vetting', description: 'Rigorous validation of production capability, compliance, and QC history.' },
      { step: 3, title: 'Contract Structuring', description: 'Transparent commercial and legal frameworks including Incoterms and LC support.' },
      { step: 4, title: 'Quality Inspection & Documentation', description: 'Pre-shipment verification, third-party audits, and full export compliance.' },
      { step: 5, title: 'Freight & Logistics Coordination', description: 'End-to-end transport management across ocean, air, and land.' },
      { step: 6, title: 'Delivery & Post-Shipment Support', description: 'Long-term reliability and support for repeat programs.' }
    ],
    ctaBand: {
      headline: 'Looking for a reliable sourcing partner?',
      buttons: [
        { label: 'Submit RFQ', path: '/contact' },
        { label: 'Contact Our Team', path: '/contact' }
      ]
    }
  },
  about: {
    overview: {
      headline: 'Company Overview',
      description: 'We are a structured global sourcing firm specializing in industrial raw materials and bulk commodities. Headquartered in the United States, with established sourcing networks in India and select international markets, we support manufacturers, distributors, and industrial buyers with reliable and scalable supply solutions.',
    },
    mission: {
      headline: 'Our Mission',
      description: 'To simplify global industrial sourcing through structured trade processes, compliance-focused logistics, and long-term supply partnerships.',
    },
    values: [
      { title: 'Integrity in trade', description: 'Upholding the highest ethical standards in all global dealings.' },
      { title: 'Transparent pricing structures', description: 'Clear and open commercial frameworks for all partners.' },
      { title: 'Compliance-driven operations', description: 'Rigorous adherence to international trade regulations.' },
      { title: 'Long-term client relationships', description: 'Building value through durable supply partnerships.' },
      { title: 'Operational excellence', description: 'Precision in execution from procurement to delivery.' }
    ],
    leadership: {
      headline: 'Leadership Expertise',
      description: 'Our leadership combines engineering knowledge, project management discipline, and multi-sector trade experience to deliver structured sourcing solutions across industries.',
    }
  },
  capabilities: [
    {
      title: 'Industrial Minerals',
      description: 'We source container-level and bulk shipments of:',
      items: ['Bentonite', 'Calcium Carbonate', 'Silica', 'Dolomite', 'Bauxite', 'Customized mineral grades upon request'],
      packaging: ['25kg bags', '50kg bags', 'Jumbo bags', 'Bulk vessel shipments (project-based)']
    },
    {
      title: 'Industrial Chemicals',
      description: 'We support sourcing of:',
      items: ['Soda Ash', 'Caustic Soda', 'Industrial-grade solvents', 'Processing additives'],
      note: 'All chemical sourcing follows applicable export/import documentation and safety standards.'
    },
    {
      title: 'Agro & Bulk Commodities',
      items: ['Animal feed ingredients', 'Oilseeds', 'Pulses & grains', 'Edible oils', 'Processing raw materials'],
      note: 'Structured for containerized and bulk supply.'
    },
    {
      title: 'Custom Sourcing',
      description: 'We provide requirement-based sourcing for industrial buyers needing:',
      items: ['Specific grades', 'Customized packaging', 'Private labeling', 'Contract manufacturing partnerships']
    }
  ],
  services: [
    {
      title: 'Structured Sourcing & Procurement',
      description: 'We identify qualified suppliers, validate production capability, and negotiate competitive pricing aligned with buyer requirements.'
    },
    {
      title: 'Supplier Vetting & Quality Control',
      items: [
        'Production capability assessment',
        'Third-party inspection coordination',
        'Pre-shipment quality verification',
        'Documentation review'
      ]
    },
    {
      title: 'Trade Structuring & Contracts',
      items: [
        'Incoterms coordination (FOB, CIF, CFR)',
        'Letter of Credit support',
        'Contract drafting support',
        'Risk mitigation strategies'
      ]
    },
    {
      title: 'Logistics & Documentation',
      items: [
        'Container and bulk freight coordination',
        'Customs documentation support',
        'Export/import compliance assistance',
        'Freight forwarding coordination'
      ]
    },
    {
      title: 'Ongoing Supply Partnerships',
      description: 'We support long-term contracts and repeat shipment programs for industrial clients requiring stable supply.'
    }
  ],
  industries: [
    {
      title: 'Tech & Electronics',
      icon: 'developer_board',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      items: [
        'Semiconductors & IC',
        'Physical / active electronic components',
        'Printed Circuit Board (PCB)',
        'Power electronics modules',
        'Sensors & electronic modules',
        'Electronics manufacturing sub-assemblies',
        'Tools & equipment for electronics manufacturing'
      ]
    },
    {
      title: 'Distribution & Warehousing',
      icon: 'inventory_2',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      items: [
        'Storage & material handling equipment',
        'Material handling',
        'Shelving & accessories',
        'Packaging & system products',
        'Industrial tools, clamps & fittings',
        'Cold storage & temperature control',
        'Warehouse technology equipment'
      ]
    },
    {
      title: 'Tech & Semiconductors',
      icon: 'memory',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      items: [
        'Semi-conductors & ICs',
        'Passive & Active electronic components',
        'Printed Circuit Boards (PCBs)',
        'Board electronics & modules',
        'Electronics manufacturing sub-assemblies',
        'Tools & consumables for electronics manufacturing'
      ]
    },
    {
      title: 'Retail & E-Commerce',
      icon: 'shopping_bag',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      items: [
        'Home textiles',
        'Kitchenware',
        'Yoga & wellness products',
        'Bathroom accessories'
      ]
    },
    {
      title: 'Food & Beverage',
      icon: 'restaurant',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
      items: [
        'Spices & cooking ingredients',
        'Snacks & confectionery',
        'Baking & beverage products',
        'Oil & ghee',
        'Dairy products',
        'Health & diagnostic foods',
        'Rice and basmati rice'
      ]
    }
  ]
};

