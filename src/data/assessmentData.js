
const assessmentData = {
    subject_matter: {
      mixed_use_zone: {
        title: 'Mixed used zone code',
        content: [{
            PO: {
                "name": "PO16",
                "text": 'PO16 - Filling and excavation (Bermuda Point precinct) \
                The development does not cause changes to the Flood discharge capacity \
                that would adversely affect land and/or premises external to the site to \
                an extent likely to be actionable.'
            },
            info_required: ['AO16'],
        },],  
      },
      low_impact_industry: {
        title: 'Low impact industry zone code',
        content: [{
            PO: {
                "name": "PO4",
                "text": 'Out of sequence development \
                PO4 - Where development does not have an immediate connection to adequate infrastructure \
                the proposal must demonstrate that: \
                (b) downstream property owner agreements are secured for the provision of the necessary \
                infrastructure through their land; \
                (d) the necessary infrastructure is provided to Council’s standards, at no cost to Council.',
            },
            info_required: ['No AO provided'],
        },],  
      },
      medium_impact_industry:{
        title: 'Medium impact industry zone code',
        content: [{
            PO: {
                "name": "PO4",
                "text": 'Out of sequence development \
                PO4 - Where development does not have an immediate connection to adequate \
                infrastructure the proposal must demonstrate that: \
                (b) downstream property owner agreements are secured for the provision of \
                the necessary infrastructure through their land; \
                (d) the necessary infrastructure is provided to Council’s standards, at no cost to Council.',
            },
            info_required: ['No AO provided'],
        },],  
      },
      high_impact_industry: {
        title: 'High impact industry zone code',
        content: [{
          PO: {
              "name": "PO4",
              "text": 'Out of sequence development \
              PO4 - Where development does not have an immediate connection to adequate \
              infrastructure the proposal must demonstrate that: \
              (b) downstream property owner agreements are secured for the provision of \
              the necessary infrastructure through their land; \
              (d) the necessary infrastructure is provided to Council’s standards, at no cost to Council.',
          },
          info_required: ['No AO provided'],
      },],  
      },
      coastal_erosion_hazard_overlay: {
        title: 'Coast erosion hazard overlay code',
        content: [{
            PO: {
                "name": "PO2",
                "text": 'PO2 - Erosion protection \
                All buildings and structures (including any refurbishment works \
                to existing buildings or structures) on land near the open coast have \
                adequate footings, designed and certified by a Registered Professional \
                Engineer of Queensland (RPEQ) specialising in civil engineering, and \
                constructed to ensure that they are erosion resistant to safe standards.',
            },
            info_required: ['AO 2.1 - Erosion prevention devices, including building footings, \
              are certified by a Registered Professional Engineer of Queensland (RPEQ) \
              specialising in civil engineering with a suitable specialty.',
              'AO2.2 - Buildings with a height up to 25m that are wholly or partly located \
              within land identified on the Coastal erosion hazard overlay map as an ‘area \
              from seawall to 40m west requiring special building footings’ are located and \
              designed, constructed and certified for scour to at least at RL 0.0 metres AHD.',
              'AO2.3 - Buildings with a height up to 25m that are wholly or partly located \
              within land identified on the Coastal erosion hazard overlay map as an ‘area \
              from 40m west of seawall to 75m west of seawall requiring special building footings’ \
              are located and designed, constructed and certified for scour to at least at RL +1.0 metres AHD.',
              'AO2.4 - Buildings with a height exceeding 25m that are wholly or partly located \
              within land identified on the Coastal erosion hazard overlay map as an ‘area from \
              seawall to 40m west requiring special building footings’ are located and designed, \
              constructed and certified  for scour to at least at RL –3.0 metres AHD.',
              'AO2.5 - Buildings with a height exceeding 25m that are wholly or partly located \
              within land identified on Coastal erosion hazard overlay map as an ‘area from 40m \
              west of seawall to 75m west of seawall requiring special building footings’ are \
              located and designed, constructed and certified  for scour to at least at RL 0.0 metres AHD.',
              'AO2.6 - Buildings that are wholly or partly located within 75m of the foreshore \
              seawall line shown on the Coastal erosion hazard overlay map are located and designed, \
              constructed and certified for resisting wave attack to at least at RL +6.0 metres AHD.',
            ],
        },
        {
            PO: {
                "name": "PO3",
                "text": 'PO3 - Erosion protection \
                For development on land identified as a ‘Foreshore Seawall \
                site’ on the Coastal erosion hazard overlay map a foreshore seawall \
                (boulder wall) certified by Registered Professional Engineer of Queensland \
                (RPEQ) specialising in civil engineering is in place to protect persons and \
                property from erosion and other coastal hazards.',
            },
            info_required: ['AO3.1 Development on land identified as a ‘Foreshore Seawall site’ \
              on Coastal erosion hazard overlay map : \
              a foreshore seawall (boulder wall) is constructed, for the full \
              width of the property, on the foreshore seawall line shown on the \
              Coastal erosion hazard overlay map; and a Registered Professional \
              Engineer of Queensland (RPEQ) specialising in civil engineering has \
              certified that the foreshore seawall (boulder wall) is in accordance \
              with SC6.12 City Plan policy – Land development guidelines – standard \
              drawings (standard drawing 04-001 and 04-002).',
              'AO3.2 Prior to the commencement of the construction or reconstruction \
              of a foreshore seawall (boulder wall), sufficient security is provided \
              to Council to ensure that: \
              it is constructed in accordance with Council requirements; \
              appropriate dune restoration will be undertaken in accordance with \
              SC6.4 City Plan policy – Coastal dune management.',
            ],
        },
        {
            PO: {
                "name": "PO4",
                "text": 'PO4 - Restoration and replenishment of beach sand \
                Development on land near the open coast contributes to the maintenance \
                of the beach zone through replenishment of excavated sand.',
            },
            info_required: ['AO4.1 The development is on a site wholly or partly identified \
              on the Coastal erosion hazard overlay map as ‘0 to 500m west of seawall’ requires \
              sand excavated in this area to be dumped on beach as directed. Excess sand that \
              is excavated in the course of development is: \
              (a)	cleaned using a 20mm sieve to remove all material other than clean sand; and \
              (b)	delivered and deposited to a beach as directed by Council; and \
              (c)	if the sand excavated on the site exceeds 1,500 cubic metres, a supervisor \
              appointed by Council shall be employed for the duration of the sand excavation \
              and deposition at the expense of the applicant.',
              'AO4.2 Prior to the commencement of sand extraction and deposition, sufficient \
              security is provided to Council to ensure that: \
              (d)	it is sieved and placed on an ocean beach in accordance with \
              Council requirements; and \
              (e)	appropriate beach protection and/or restoration measures are used.'
            ],
        },
        {
            PO: {
                "name": "PO9",
                "text": 'PO9 - Setbacks Buildings and structures are setback from waterways to: \
                a.	maintain the long term integrity of the foreshore stability structure and public access areas; \
                b.	ensure the hydraulic performance of the waterway is not compromised; \
                c.	provide for the undertaking of future maintenance of the foreshore stability \
                structure and public access areas; and \
                d.	ensure unimpeded access through to neighbouring properties for revetment wall maintenance.',
            },
            info_required: ['AO9.1 Buildings and structures are not located beyond the waterway regulation line. \
              Note: 	For guidance applicants should refer to SC6.12 City Plan policy – Land development guidelines \
              - standard drawings (standard drawing 04-004). \
              Note:	The applicant will be required to contact Council to determine the \
              location of the waterway regulation line.',
              'AO9.2 For properties identified on the Coastal Erosion Hazard Overlay \
              Map as ‘Area Affected by Waterway Building Setback (Nominated)’, buildings \
              and structures are set back from waterways in accordance with the waterway \
              building setback line. \
              Note: 	Applicants are advised to contact Council for the location of the \
              waterway building setback line for their property. Refer to SC6.12 City Plan \
              policy - Land development guidelines - standard drawings (standard drawing 04-004) \
              to determine the relationship of the waterway building setback line to waterways. \
              OR For properties identified on the Coastal Erosion Hazard Overlay Map as \
              ‘Area Affected by Waterway Building Setback (To be Advised)’ or \
              ‘Refer to CGC for Waterway Building Setback’ where no waterway building setback line is nominated \
              or determined as part of the condition/s of a development permit, buildings and \
              structures are setback from waterways in accordance with the setback line determined \
              by Council following submission of a report prepared in accordance with SC6.12 City \
              Plan policy – Land development guidelines (Section 8.3.3 Waterways report (canals, \
              lakes, tidal waters, creeks, rivers and other waterways)). \
              The following buildings and structures may intrude into the setback area as follows: \
              PROVIDE A TABLE HERE'
              ],
        },
        {
            PO: {
                "name": "PO12",
                "text": 'PO12 - Protection of the coastal environment Development on land \
                adjoining a waterway ensures the water quality and quantity of the adjoining \
                waterway is maintained having regard to: \
                (a)  current or intended uses of the waterway; and \
                (b) water quality of adjacent waterways.',
            },
            info_required: ['AO12 For development on land adjoining a waterway, a water quality \
              management plan is prepared by a suitably qualified person and demonstrates that: \
              (a)	the proposed use will not adversely impact the water quality and quantity of the waterway; \
              (b)	the proposed non-residential development will comply with Water Quality Standards \
              for Specific Waterbodies or the AWQ Guidelines; and \
              (c)	overland flow does not impact on the structural integrity of the foreshore stability structure.'
            ],
        },
      ],
      },
      flood_overlay_code: {

        title: 'Flood overlay code',
        content: [{
            PO: {
                "name": "PO1",
                "text": 'PO1 - Flood storage All development activity conducted on land \
                below the designated flood level must not detrimentally affect the flood \
                storage capacity of the catchment and the drainage regime.',
            },
            info_required: ['AO1 The flood storage volume on the site is maintained up to the Designated Flood Level.',
            ],
        },
        {
            PO: {
                "name": "PO2",
                "text": 'PO2 - Building floor levels Development that is located on flood \
                prone land shall not be inundated by floodwaters during a designated flood \
                and allowance must be made for elements that could result in an elevated flood, \
                including: \
                (a)	the hydraulic gradient above the main floodway \
                (b)	The impact of events such as wind and wave action on the flood surface; and \
                (c)	Uncertainty associated with the designated flood level.',
            },
            info_required: ['AO2.1 Building floor levels of habitable rooms must be at or above \
              the height of the combined designated flood level and minimum freeboard derived from \
              Table 8.2.8-6 – table to acceptable outcome AO2.1',
              'AO2.2 Where a proposed land use does not reasonably apply to any land use listed \
              in the Table 8.2.8-6: Table to acceptable outcome AO2.1, the applicant is to submit: \
              (a)	the proposed minimum flood AEP for building floor levels; \
              (b)	the proposed design freeboard above the specified flood level; and \
              (c)	a flood hazard and flood risk assessment for the proposed development, assessing \
              the effects on costs, safety, access and potential losses.',
            ],
        },
        {
            PO: {
                "name": "PO3",
                "text": 'PO3 - Building floor levels Building floor levels of garages and \
                non-habitable rooms must be constructed at a height that reflects an acceptable \
                flood risk for their purpose. Note:	PO3 does not apply to: \
                •	extensions to existing buildings; \
                •	structures detached from a dwelling, for which the use is ancillary to that \
                of a dwelling, provided that use is not listed in column 1 of Table 8.2.8-3: \
                Table to performance outcome PO7.',
            },
            info_required: ['AO3.1 Building floor levels of garages and non-habitable rooms, \
              constructed at approximately the same level as, and attached to, the main dwelling, \
              are constructed at a height above the Designated Flood Level, except where the \
              dwelling has a suspended floor, constructed one metre or more above ground, or \
              where the building is to be constructed within a Rural zone.',
              'AO3.2 Garages and car parks detached from the building are not inundated to \
              cause more than a medium hazard, as identified within Table 8.2.8-5 Table to \
              acceptable outcome AO11, for the designated flood.'
            ],
        },
        {
            PO: {
                "name": "PO4",
                "text": 'PO4 - Overland flow Development must not obstruct free open surface \
                flow of stormwater through a site.',
            },
            info_required: ['AO4 Overland flowing stormwater is allowed free open surface flow \
            between the street and any waterway at the rear of the property, in accordance \
            with the provisions of the Building Code of Australia.'
            ],
        },
        {
            PO: {
                "name": "PO5",
                "text": 'PO5 - Flooding risk Development in flood affected areas must not \
                cause, or have the cumulative potential to cause, damage, must not increase \
                the level of risk to life, or be to the detriment of flood evacuation procedures.',
            },
            info_required: ['AO5 Development does not: \
            (a)	increase the number of people calculated to be at risk from flooding; \
            (b)	increase the number of people likely to need evacuation; \
            (c)	shorten flood warning times; \
            (d)	impact on the ability of traffic to use evacuation routes, or unreasonably increase \
            traffic volumes on evacuation routes, or as identified within Council\'s Counter Disaster Plan (flooding); \
            (e)	place additional burdens on Council\'s resources or emergency services; \
            (f)	increase the duration of flooding, unless that increase is part of a Council \
            approved flood mitigation strategy.'
            ],
        },
        {
            PO: {
                "name": "PO6",
                "text": 'PO6 - Flood storage and conveyance Development with plans for earthworks \
                in a floodplain on or over a water body or within a flood affected area below \
                the Designated Flood Level must allow for the maintenance of flood storage, \
                and flood conveyance of flood and drainage channels and overland flow paths. ',
            },
            info_required: ['AO6.1 Provide flood storage calculations that demonstrate that \
            flood storage volume, over the site below the Designated Flood Level, is maintained or increased.',
            'AO6.2 A certified hydraulic study (and, if necessary, a hydrologic study) is prepared by a \
            suitably qualified and experienced engineer to investigate the hydraulic characteristics of \
            both the undeveloped and developed site and make comparisons between them. \
            Proposed developments in, on or over a water body, or within a flood affected area, must be tested for: \
            (a)	the 50%, 20%, 10%, 5%, 2% and 1% Annual Exceedance Probability (AEP) for local flood events; \
            (b)	the 5%, 2%, and 1% AEP floods.  For the Nerang River Catchment Hinze Dam stage 2 condition \
            must be used. (as specified in Table 8.2.8-3: Table to performance outcome PO7); and \
            (c)	any resultant afflux or increase in flood velocities sufficient to cause real damage to \
            premises. The Assessment Manager may also require the development to be assessed against rarer floods.',
            ],
        },
        {
            PO: {
                "name": "PO7",
                "text": 'PO7 - Development for certain pourposes Development is constructed at \
                or above the Designated Flood Level, shown in Table 8.2.8-3: Table to performance outcome PO7. \
                Note:  The designated flood level for the Nerang River is based on Hinze Dam Stage 2 condition.',
            },
            info_required: ['No AO Provided'
            ],
        },
        {
            PO: {
                "name": "PO8",
                "text": 'PO8- Development for certain purposes Development must \
                consider hydrologic and hydraulic impacts of development in flood affected areas \
                with regard to future climate change.',
            },
            info_required: ['No AO Provided'
            ],
        },
        {
            PO: {
                "name": "PO9",
                "text": 'PO9 - Hazard considerations for development Development listed in the \
                Table 8.2.8-4: Table to acceptable outcome AO9 below must be designed and \
                constructed to avoid causing exposure to undue flood hazard.',
            },
            info_required: ['AO9 Development is to be designed and constructed so that users \
            are not exposed to a greater degree of hazard than shown in Table 8.2.8-4: \
            Table to acceptable outcome AO9 for the range of flows specified in Table 8.2.8-5: \
            Table to acceptable outcome AO11.'
            ],
        },
        {
            PO: {
                "name": "PO10",
                "text": 'PO10 - Storage of hazardous chemicals (exceeding a threshold) in a \
                flood hazard area Storage, handling or manufacturing areas that are identified \
                on the Flood overlay map and contain hazardous chemicals in quantities greater than \
                2500L or 2500kg must be located and designed to minimise the likelihood of: \
                1. Inundation by flood waters from creeks, rivers, lakes or estuaries and \
                2. The possibility of spills to flood waters',
            },
            info_required: ['AO10.1 The base of any tank with a capacity >2500L or >2500kg is higher \
            than the designated flood level identified in Table 8.2.8-3: Table to performance \
            outcome PO7 (where the designated flood level is not specified a minimum flood level \
            of 1% AEP must be applied).',
            'AO10.2 Bulk tanks with a capacity >2500L or >2500kg: \
            (a)	are anchored so they remain stable and cannot float or topple if submerged or \
            inundated by water, and \
            (b)	tank openings not provided with a liquid tight seal, i.e. an atmospheric vent, \
            are extended above the designated flood level identified in Table 8.2.8-3: Table to \
            performance outcome PO7 (where the designated flood level is not specified a minimum \
            flood level of 1 in 100 must be applied). ',
            'AO10.3 The lowest point of any storage area for packages >2500L or >2500kg within \
            an area identified on the Flood overlay map must be higher than the designated \
            flood level identified in Table 8.2.8-3: Table to performance outcome PO7 \
            (where the designated flood level is not specified a minimum flood level of 1% AEP must be applied). \
            OR Package stores, for packages >2500L or >2500kg, are provided with impervious bund walls or \
            racking systems higher than the designated flood level identified in Table 8.2.8-3: Table to \
            performance outcome PO7 (where the designated flood level is not specified a minimum flood level of \
            1% AEP must be applied).'
            ],
        },
        {
            PO: {
                "name": "PO11",
                "text": 'PO11 - Access with respect to hazards All proposed development must \
                demonstrate that sufficient access or egress will be available to enable evacuation \
                during a range of floods, up to and including the designated flood.',
            },
            info_required: ['AO11 Development, not including underground car parks, \
            must ensure that evacuation opportunities exist in accordance with the minimum levels of \
            exposure outlined in Table 8.2.8-5: Table to acceptable outcome AO11, where means of access \
            or egress may be: \
            (a)	an access route that is below the level of the designated flood, provided that route \
            is classed as a low hazard, as defined in Table 8.2.8-5: Table to acceptable outcome AO11; or \
            (b)	an access route that is not the main access route. However, it must remain \
            effective for the duration of a range of flood events, up to and including the designated flood; or \
            (c)	a temporary access arrangement, provided that access can be gained without \
            significant preparation time being required. \
            The access or egress must: \
            (a)	in the event of a designated flood: \
            (i)	not expose users to undue risk; \
            (ii)	not cause, or have the cumulative potential to cause, real damage to land and/or premises; \
            (iii)	not interrupt or materially change the surface water drainage from or onto adjoining land; \
            (b)	not create, in the event of a flood, a sudden change in flow distributions, flood level or \
            velocity that could result in: \
            (i)	the breaking of a levee; or \
            (ii)	the establishment of blockage of a breakout; or \
            (iii)	excessive scour; or \
            (iv)	sedimentation; or \
            (v)	increased flood hazard.'
            ],
        },
        {
            PO: {
                "name": "PO12",
                "text": 'PO12 - Filling, excavation and contouring Any change to ground level, by way \
                of filling, excavation or contouring, must not result in damage, flood hazard or \
                impediment to any Counter Disaster Plan, measure or create unreasonable change in the \
                exposure to flood hazard.',
            },
            info_required: ['AO12 Changes to ground level, by way of filling, excavating or contouring, \
            comply with a hydraulic master plan approved by Council. \
            OR A flood study is prepared in accordance with the requirements set out in AO6.1 \
            and AO6.2, is approved by Council, and it is established that the development \
            complies with, or does not impede, any Counter Disaster Plan measure.'
            ],
        },
        {
            PO: {
                "name": "PO13",
                "text": 'PO13 - Filling, excavation and contouring Filling, excavation or \
                contouring must not cause sedimentation, erosion or adverse impact on the City\'s drainage network.',
            },
            info_required: ['AO13 No acceptable outcome provided. \
            For guidance, please refer to the Healthy waters code.'
            ],
        },
      ],
      },
      landslide_hazard_overlay: {
        title: 'Landslide hazard overlay code',
        content: [{
            PO: {
                "name": "PO2",
                "text": 'PO2 - Stormwater drainage Development must ensure that stormwater \
                runoff does not increase the susceptibility of the site to landslide and does \
                not cause any detriment to the natural environment or to any other lots.',
            },
            info_required: ['AO2.1 Stormwater drainage (including roof guttering and rainwater tank overflows) \
            is managed to avoid an increase in on-site groundwater, ponding of water and water concentration \
            into slopes and discharges to a lawful point of discharge.',
            'AO2.2 Stormwater drainage is in accordance with SC6.12 City Plan policy – Land development \
            guidelines, Section 4 – Stormwater drainage and water sensitive urban design.'
          ],
        },],  
      },
      water_resources_catchment_overlay: { 
        title: 'Water resources catchment overlay code',
        content: [{
            PO: {
                "name": "PO2",
                "text": 'PO2 - Solid or liquid waste The capture of solid or liquid waste from all \
                land use, development and activities is designed, constructed and managed to prevent \
                the release of contaminants to surface water or groundwater bodies.',
            },
            info_required: ['AO2.1 Run-off and sediment from roadways and impervious surfaces are \
            intercepted and treated on-site to remove oil, grease, chemicals, silt, trace metals and \
            nutrients such as nitrogen and phosphorous.',
            'AO2.2 Management, handling and storage of substances (including fuelling) must be \
            undertaken in secured, climate controlled, weather proof (roofed), level and bunded enclosures.'
          ],
        },
        {
            PO: {
                "name": "PO4",
                "text": 'PO4 - Rural activities Development and associated activities are managed in a \
                sustainable manner, to ensure water quality is maintained and protected.',
            },
            info_required: ['AO4.1 Where development is for the purposes of a permanent plantation there \
            must be no movement of sediment or nutrients beyond the boundary of the site.',
            'AO4.2 Fertilisers, treated wastewater and soil conditioners are placed in soils before \
            mulching and not via surface spreading following planting.',
            'AO4.3 15% of runoff from irrigation events is captured via recovery dams, drainage systems \
            and first flush/sediment controls, including vegetated filters.'
          ],
        },
        {
            PO: {
                "name": "PO6",
                "text": 'PO6 - Water quality Development must maintain or enhance water quality in water \
                resource catchment areas. Note:	refer to the Seqwater Development Guidelines: Development\
                Guidelines for Water Quality Management in Drinking Water Catchments 2012.',
            },
            info_required: ['No AO Provided'],
        },
      ],  
      },
      forestry_for_wood_production_code: {
        title: 'Forestry for wood production code',
        content: [{
            PO: {
                "name": "PO2",
                "text": 'PO2 - Impacts on soil structure, fertility and stability The impacts of the forest \
                for wood production on soil structure, fertility and stability are minimised through \
                appropriate management of the site.',
            },
            info_required: ['AO2.1 The establishment and maintenance (including associated tracks and roads) \
            of the forest for wood production utilises one or more of the following methods: \
            (a)	mechanical strip cultivation on the contour, spot cultivation or manual cultivation is \
            used for establishment on slopes greater than 10 per cent and less than 25 per cent; \
            (b)	either spot cultivation or manual cultivation is used for establishment on slopes equal to \
            or greater than 25 per cent; \
            (c)	tracks and roads are established away from natural drainage features and areas that are \
            subject to erosion and landslips.',
            'AO2.2 Any part of a track or road established and maintained as part of the forest \
            for wood production is appropriately drained and adopts the following measures: \
            (a)	establish and maintain a stable surface; \
            (b)	drain the track or road with crossfall drainage (preferably with a slope greater than \
              4 per cent) or by shaping the track or road to a crown so that water drains to both of its sides; \
            (c)	establish and maintain drainage structures to convey water away from the track or road \
            formation (for example, crossdrains, mitre drains, turnouts and diversion drains or relief culverts).'
          ],
        },],  
      },
      industrial_design_code: {
        title: 'Industrial design code',
        content: [{
            PO: {
                "name": "PO4",
                "text": 'PO4 - Design and appearance Development is designed to prevent contaminants \
                being discharged to land or water.',
            },
            info_required: ['AO4 Areas where potentially contaminating substances are used or stored, are: \
            (a)	roofed or covered to prevent the ingress of rainfall and run-off; and \
            (b)	sealed with an impervious surface and bunded so that any spills are retained on site for removal.'
          ],
        },],  
      },
      change_ground_level_creation_waterways_code: {
        title: 'Change to ground level and creation of new waterways code',
        content: [{
              PO: {
                  "name": "PO3",
                  "text": 'PO3 - Woongoolba Flood Mitigation Scheme Catchment Area In the Woongoolba Flood \
                  Mitigation Scheme Catchment Area, shown on the Water catchments and dual supply system \
                  area overlay map, peak outflow and its timing for Q2, Q5 and Q10 for rainfall events up \
                  to 72 hours does not change as a result of development.',
              },
              info_required: ['AO3 No acceptable outcome provided.'],
          },
            {
              PO: {
                  "name": "PO6",
                  "text": 'PO6 - Hydraulic considerations Any change to the level of the land does not \
                  have adverse flooding and drainage impacts.',
              },
              info_required: ['AO6 An Hydraulic report is prepared by a suitably qualified professional \
              to accord with the Council’s hydraulic requirements, demonstrating that the change to the \
              level of the land does not: \
              (a)	cause ponding on the site or nearby land; \
              (b)	increase flooding which adversely affects the safety or use of any land upstream and downstream; \
              (c)	adversely affect the flow of water in any overland flow path, or otherwise.'
            ],
          },
            {
              PO: {
                  "name": "PO14",
                  "text": 'PO14 - Created new waterways The created waterway location is compatible with \
                  the land-use constraints of the site protecting water environmental values in existing \
                  natural waterways.',
              },
              info_required: ['AO14.1 The created waterway within the Operational work \
              (change to ground level) application achieves the following: \
              (a)	environmental values in downstream waterways are protected; \
              (b)	groundwater recharge areas are not affected; \
              (c)	the waterway location incorporates low-lying areas of a catchment connected to \
              an existing waterway; and \
              (d)	any existing areas of ponded water are included.',
              'AO14.2 Created waterways: \
              (a)	are located outside natural wetlands, waterways and associated buffer areas; \
              (b)	avoid soil or sediment disturbance; and \
              (c)	avoid alteration of the natural hydrologic regime in acid sulfate soil and nutrient hazard areas.'
            ],
          },
          {
              PO: {
                  "name": "PO15",
                  "text": 'PO15 - Created new waterways The created waterway’s location is compatible \
                  with existing tidal waterways.',
              },
              info_required: ['AO15 Where the created waterway is adjacent or connected to a tidal \
              waterway by a weir, lock, pumping system or similar: \
              (a)	there is sufficient flushing or a tidal range of >0.3m; \
              OR (b)	any tidal flow alteration does not adversely impact on the tidal waterway; \
              OR (c)	there is no introduction of salt water into freshwater environments.'],
          },
          {
              PO: {
                  "name": "PO16",
                  "text": 'PO16 - Created new waterways Created waterways are designed and managed \
                  to support the legislated environmental values and water quality objectives \
                  within Environmental Protection (Water) Policy 2009 of connected receiving water environments.',
              },
              info_required: ['AO16.1 The created waterway within the Operational work \
              (change to ground level) application is designed, constructed and managed by a suitably \
              qualified Registered Professional Engineer Queensland (RPEQ) with specific artificial \
              waterway experience.',
              'AO16.2 The created waterway within the Operational work (change to ground level) \
              application is supported by a Water Quality Management Plan, prepared by a suitably \
              qualified professional, demonstrating the following: \
              (a)	water quality of the created waterway is the same or higher standard as the existing water quality; \
              (b)	long-term maintenance of the  water quality standard is achieved; and \
              (c)	breeding potential of biting insects is minimised.',
              'AO16.3 The created waterway does not have deep, isolated holes that stratify and increase \
              the possibility of algal blooms occurring.',
              'AO16.4 Pumping from a created waterway to maintain water quality is avoided.',
              'AO16.5 The created waterway is designed with a suitable outlet to ensure that \
              flooding is possible, if required.',
              'AO16.6 Stormwater is treated before any stormwater enters a created waterway.',
            ],
          },
          {
              PO: {
                  "name": "PO18",
                  "text": 'PO18 - Created new waterways The waterway is managed and operated to achieve \
                  the water quality objectives (Environmental Protection (Water) Policy 2009) in natural waterways.',
              },
              info_required: ['AO18.1 Monitoring and maintenance programs manage the waterway to achieve \
              the water quality objectives downstream.',
              'AO18.3 The created waterway is managed and operated under agreement by an \
              appropriate entity for the life of the waterway. A Waterway Management Plan is incorporated \
              within the Community Management Statement for the principal body corporate that: \
              (a)	 identifies the waterway; \
              (b)	 states the period of responsibility of the entity; \
              (c)	 states a process for transfer of responsibility for the waterway; \
              (d)	 states required actions for monitoring water quality of the waterway and receiving waters; \
              (e)	 states required actions for maintaining the waterway to achieve the policy \
              outcomes of the Environmental Protection (Water) Policy 2009 and approval conditions; and \
              (f)	 identifies funding sources for the above matters including bonds, headworks charges or levies.',
            ],
          },
        ],  
      },
      driveways_and_vehicle_crossings_code: {
        title: 'Driveways and vehicle crossings code',
        content: [{
            PO: {
                "name": "PO2",
                "text": 'PO2 - Design Design of the vehicle crossing is certified by a RPEQ \
                confirming compliance with: \
                (a)	Disability Discrimination Act 1992; \
                (b)	Applicable requirements in AS2890: 2009 – Parking Facilities; and \
                (c)	QUDM (Queensland Urban Drainage Manual).',
            },
            info_required: ['AO2 The vehicle crossing is designed in accordance with SC6.12 \
            City Plan policy – Land development guidelines, Section 2 – Transport network standards.'
          ],
        },],  
      },
      general_development_provisions_code: {
        title: 'General development provisions code',
        content: [{
            PO: {
                "name": "PO10",
                "text": 'PO10 - Stormwater drainage Development does not cause adverse stormwater \
                drainage impacts on or off the site.',
            },
            info_required: ['AO10 All development incorporates stormwater drainage works to comply \
            with the requirements of SC6.12 City Plan policy – Land development guidelines, Section 4 \
            – Stormwater drainage and water sensitive urban design standards.'
          ],
        },],  
      },
      healthy_waters_code: {
        title: 'Healthy waters code',
        content: [{
              PO: {
                  "name": "PO1",
                  "text": 'PO1 - Erosion and sediment control Stormwater discharge from a development site \
                  achieves the construction phase water quality objectives of SC6.12 City Plan policy – \
                  Land development guidelines, Section 4 – Stormwater drainage and water sensitive urban \
                  design standards.',
              },
              info_required: ['No AO provided'],
          },
          {
              PO: {
                  "name": "PO2",
                  "text": 'PO2 - Erosion and sediment control Erosion, sediment and dust is appropriately \
                  managed during the construction phase.',
              },
              info_required: ['AO2 The level of risk for soil erosion and sediment pollution to the \
              environment is determined by an erosion hazard assessment, completed by a suitably-qualified \
              person in accordance with the criteria in Table 9.4.5-4: Erosion hazard assessment. \
              Where the erosion hazard assessment has a risk score of: \
              (a)	 less than or equal to 10: \
              A deemed to comply report is prepared by a suitably qualified person for Council approval, \
              including conceptual location and design drawings of each treatment measure in plan and section \
              views, in accordance with the Best Practice Erosion and Sediment Control: International \
              Erosion Control Association, (IECA) 2008, Australasia Chapter 2008. \
              (b)	 greater than 10 or developments involving multiple stages of disturbance or more than \
              1.25 ha of land: \
              (i)	 For material change of use or reconfiguring a lot, a conceptual erosion and sediment \
              control	plan (ESCP) is prepared by a suitably-qualified person for Council approval in \
              accordance with SC6.12 City Plan policy – Land development guidelines, Section 4 – Stormwater \
              drainage and water sensitive urban design standards, and the Best Practice Erosion and \
              Sediment Control: International Erosion Control Association (IECA) 2008, Australasia Chapter 2008.\
              (ii)	 For operational work, a detailed ESCP is prepared by a suitably-qualified person \
              in accordance with SC6.12 City Plan policy – Land development guidelines, Section 4 – \
              Stormwater drainage and water sensitive urban design standards, and Best Practice Erosion \
              and Sediment Control: International Erosion Control Association (IECA) 2008, Australasia Chapter 2008. \
              The ESCP is to detail appropriate treatment measures for the construction phase of development, \
              demonstrating how the minimum design objectives in Table 9.4.5-5: Stormwater design objectives \
              are achieved, including: \
              (a)	 measures to ensure the release of sediment-laden stormwater for the nominated design \
              storm are minimised when the design storm is exceeded; \
              (b) 	detailed design, installation, construction, monitoring and maintenance requirements of \
              all approved proprietary products in accordance with local conditions and manufacturer’s \
              recommendations; and \
              (c)	details of how the ESCP aligns with the approved development staging plan.'
            ],
          },
          {
              PO: {
                  "name": "PO3",
                  "text": 'PO3 - Stormwater quality Development appropriately manages stormwater quality to: \
                  (a)	protect natural ecosystems; \
                  (b)	protect water quality; \
                  (c)	reduce runoff and peak flows; and \
                  (d)	meet the water quality objectives and environmental values for Queensland waters. \
                  Note:	Water quality objectives and environmental values for Queensland waters are \
                  contained within Schedule 1 of the Environmental Protection (Water) Policy 2009. \
                  Water quality objectives are locally specific and vary between and within river catchments. \
                  Note: 	A stormwater quality management plan prepared by a suitably qualified person \
                  in accordance with SC6.12 City Plan policy – Land development guidelines, \
                  Section 4 – Stormwater drainage and water sensitive urban design standards, is \
                  Council’s preferred method for addressing this performance outcome.',
              },
              info_required: ['AO3.1 For post developed sites, the following minimum pollutant \
              reduction targets are achieved: \
              (a)	 Gross pollutants (>5mm) – 90%; \
              (b)	 Total Suspended Solids (TSS) – 80%, \
              (c)	 Total Phosphorus (TP) – 60%; and \
              (d)	 Total Nitrogen (TN) – 45%. ',
              'AO3.2 For development on land less than 1.25ha, a deemed to comply solution for stormwater \
              quality is achieved in accordance with Table 9.4.5-6: Stormwater quality deemed to comply solutions.',
              'AO3.3 For development on land greater than 1.25ha, a stormwater quality management plan is \
              to be prepared by a suitably qualified person in accordance with SC6.12 City Plan policy – \
              Land development guidelines, Section 4 – Stormwater drainage and water sensitive urban design \
              standards, is required.',
            ],
          },
          {
              PO: {
                  "name": "PO4",
                  "text": 'PO4 - Waterway stability In-stream erosion, downstream of urban development \
                  is prevented by controlling the rate (or magnitude) and duration of sediment transporting flows.',
              },
              info_required: ['AO4 Post-development peak 0.632 Annual Exceedance Probability (AEP) event \
              discharge within receiving waterway is limited to pre-development peak 0.632 AEP event \
              discharge and is in accordance with SC6.12 City Plan policy – Land development guidelines, \
              Section 4 – Stormwater drainage and water sensitive urban design standards.   '
            ],
          },
          {
              PO: {
                  "name": "PO5",
                  "text": 'PO5 - Stormwater quantity control Stormwater quantity management outcomes \
                  demonstrate no adverse impact on stormwater flooding or the drainage of properties \
                  external to the subject site.',
              },
              info_required: ['AO5 The following is achieved external to the development site: \
              (a)	 no increase in peak flood flow rate from the development site for all events up to \
              and including the 1% AEP; \
              (b)	 no increase in peak flood velocities from the development site for all events up \
              to and including the 1% AEP; \
              (c)	 no increase in peak flood level from the development site for all events up to and \
              including the 1% AEP; and \
              (d)	 stormwater outfalls or discharge is located to avoid conflict with existing usage \
              of downstream land or impacts on existing watercourse or drainage.'
            ],
          },
          {
              PO: {
                  "name": "PO6",
                  "text": 'PO6 - Lawful point of discharge Development ensures the stormwater systems \
                  are designed to not cause actionable nuisance that would adversely affect adjoining \
                  (upstream or downstream) properties.',
              },
              info_required: ['AO6 A lawful point of discharge must be identified and demonstrated \
              that all discharge point/s from the development are in accordance with SC6.12 City Plan \
              policy – Land development guidelines, Section 4 – Stormwater drainage and water sensitive \
              urban design standards.   '
            ],
          },
          {
              PO: {
                  "name": "PO7",
                  "text": 'PO7 - Overland flow paths Development must not obstruct free open \
                  surface flow of stormwater through a site.',
              },
              info_required: ['AO7 Overland flowing stormwater is allowed free open surface flow \
              between the street and any waterway at the rear or sides of a property, in accordance \
              with the provisions of the Building Code of Australia.'
            ],
          },
          {
              PO: {
                  "name": "PO8",
                  "text": 'PO8 - Whole of life costs Stormwater infrastructure is designed and constructed to: \
                  (a)	remain fit for purpose for the life of the development and maintains full \
                  functionality in the design flood event; \
                  (b)	be cost effective to maintain; and \
                  (c)	ensure no structural damage to existing stormwater infrastructure.',
              },
              info_required: ['AO8 No acceptable outcome provided.'],
          },
          {
              PO: {
                  "name": "PO9",
                  "text": 'PO9 - Landscape integration Stormwater treatment devices and stormwater \
                  infrastructure are designed to: \
                  (a)	integrate with the urban design and landscape outcomes of the development; \
                  (b)	complement natural environments, wetlands and watercourses; \
                  (c)	protect environmental values; \
                  (d)	enhance visual amenity; and \
                  (e)	incorporate CPTED principles in accordance with SC6.12 City Plan policy – \
                  Land development guidelines, Section 4 – Stormwater drainage and water sensitive \
                  urban design standards.',
              },
              info_required: ['AO9.2 Stormwater treatment devices are located offline to any upstream catchment. \
                Note:	This provision relates to the integration of stormwater treatment devices and stormwater \
                infrastructure into the landscape. Development identified on the Environmental significance – \
                wetlands and watercourse overlay map will still require assessment against the Environmental \
                significance overlay code.',
                'AO9.3 All stormwater outlets that are located adjacent to watercourses, creeks and drainage \
                paths are aligned at a maximum of 45 degrees to the downstream direction of flow, and \
                energy dissipation measures installed to minimise scour.'
            ],
          },
          {
              PO: {
                  "name": "PO10",
                  "text": 'PO10 - Public safety Stormwater treatment devices and stormwater infrastructure \
                  minimise impacts on public health and safety.',
              },
              info_required: ['AO10 All stormwater quantity control measures are designed in \
              accordance with SC6.12 City Plan policy – Land development guidelines, Section 4 – \
              Stormwater drainage and water sensitive urban design standards.   '
            ],
          },
          {
              PO: {
                  "name": "PO11",
                  "text": 'PO11 - Maintenance access \
                  Maintenance access is provided for all stormwater management systems and considers: \
                  (a)	the type of vehicle or machinery needed to service particular assets; and \
                  (b)	the need to ensure a safe working environment for maintenance personnel and the public.',
              },
              info_required: ['AO11.1 All weather vehicle access is to be provided to inlet zones of \
              the stormwater treatment systems in accordance with Table 9.4.5-7: Maintenance access \
              requirements (slope).',
              'AO11.2 Maintenance access is to be provided around the perimeter of all stormwater \
              treatment systems in accordance with Table 9.4.5-8: Maintenance access requirements (size).',
              'AO11.3 A maintenance buffer is provided around the perimeter of all stormwater treatment \
              devices and adjoining private property equal to: \
              (a)	 1m in width; or \
              (b)	 the width of a perimeter maintenance access, as delivered in AO11.2, plus 0.5m. \
              The maintenance buffer is measured from the adjacent allotment boundary to the top of \
              batter around the treatment measure. The maximum slope on the maintenance buffer is 1 in 10.',
            ],
          },
          {
              PO: {
                  "name": "PO14",
                  "text": 'PO14 - Dewatering management Dewatering occurs in accordance with an \
                  approved Dewatering management plan.',
              },
              info_required: ['No AO provided'
            ],
          },
          {
              PO: {
                  "name": "PO15",
                  "text": 'PO15 - Woongoolba flood mitigation catchment area In the Woongoolba flood \
                  mitigation catchment area, shown on the Water catchments and dual supply system area \
                  overlay map, peak outflow and its timing for Q2, Q5 and Q10 for rainfall events up to \
                  72 hours does not change as a result of development.',
              },
              info_required: ['No AO provided'
            ],
          },
        ],  
      },
    }
  };

  export default assessmentData;