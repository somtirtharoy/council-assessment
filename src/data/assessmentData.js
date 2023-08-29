
const assessmentData = {
    subject_matter: {
      mixed_use_zone: {
        title: 'Mixed used zone code',
        content: [{
            // key: ''
            PO: {
                "name": "PO16",
                "text": 'PO16 - Filling and excavation (Bermuda Point precinct)\
                The development does not cause changes to the Flood discharge capacity\
                that would adversely affect land and/or premises external to the site \
                to an extent likely to be actionable.'
            },
            info_required: ['PO 16 AO16'],
        },],  
      },
      low_impact_industry: {
        title: 'Low impact industry zone code',
        content: [{
            PO: {
                "name": "PO4",
                "text": 'Out of sequence development \
                PO4 - Where development does not have an immediate connection to adequate \
                infrastructure the proposal must demonstrate that:\
                (b) downstream property owner agreements are secured for the \
                provision of the necessary infrastructure through their land;\
                (d) the necessary infrastructure is provided to Council’s standards, at no cost to Council.',
            },
            info_required: ['PO4 (b) (d) No AO provided'],
        },],  
      },
      // medium_impact_industry: {
      //   title: 'Medium impact industry zone code',

      // },
      // high_impact_industry: {
      //   title: 'High impact industry zone code',

      // },
      coastal_erosion_hazard_overlay: {
        title: 'Coast erosion hazard overlay code',
        content: [{
            PO: {
                "name": "PO2",
                "text": 'Erosion protection \
                All buildings and structures \
                (including any refurbishment works to existing buildings or structures) \
                on land near the open coast have adequate footings, designed and certified by \
                a Registered Professional Engineer of Queensland (RPEQ) specialising in \
                civil engineering, and constructed to ensure that they are erosion resistant to safe standards.',
            },
            info_required: ['AO 2.1 - Erosion prevention devices, including building footings, \
            are certified YN by a Registered Professional Engineer of Queensland (RPEQ) specialising \
            n civil engineering with a suitable specialty.'],
        },
        {
            PO: {
                "name": "PO4",
                "text": 'Erosion protection \
                All buildings and structures \
                (including any refurbishment works to existing buildings or structures) \
                on land near the open coast have adequate footings, designed and certified by \
                a Registered Professional Engineer of Queensland (RPEQ) specialising in \
                civil engineering, and constructed to ensure that they are erosion resistant to safe standards.',
            },
            info_required: ['AO 2.1 - Erosion prevention devices, including building footings, \
                are certified YN by a Registered Professional Engineer of Queensland (RPEQ) specialising \
                n civil engineering with a suitable specialty.',
                'AO 2.1 - Erosion prevention devices, including building footings, \
                are certified YN by a Registered Professional Engineer of Queensland (RPEQ) specialising \
                n civil engineering with a suitable specialty.'
                ],
        },],
      }
    }
  };

  export default assessmentData;