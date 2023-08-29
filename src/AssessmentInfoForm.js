import {exportFormData} from './utils/export';
import React, { useState } from 'react'
import FormSection from './FormSection';
import Navbar from './Navbar';

const AssessmentInfoForm = () => {

    // Note: the keys of this dict are derived from the title in the data
    const [formInputData, setFormInputData] = useState({
        'mixed_used_zone_code_PO16_textarea': '',
        'low_impact_industry_zone_code_PO4_textarea': '',
        'coast_erosion_hazard_overlay_code_PO2_textarea': '',
    });

    const handleInputChange = (id) => {
        var element = document.getElementById(id);

        var updatedData= {}
        updatedData[id] = element.value;
        
        setFormInputData({
            ...formInputData,
            ...updatedData,
        })
    };

    const assessmentData = {
        subject_matter: {
          mixed_use_zone: {
            title: 'Mixed used zone code',
            content: [{
                PO: {
                    "name": "PO16",
                    "text": 'PO16 - Filling and excavation (Bermuda Point precinct)\
                    The development does not cause changes to the Flood discharge capacity\
                    that would adversely affect land and/or premises external to the site \
                    to an extent likely to be actionable.'
                },
                info_required: 'PO 16 AO16',
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
                info_required: 'PO4 (b) (d) No AO provided',
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
                info_required: 'AO 2.1 - Erosion prevention devices, including building footings, \
                are certified YN by a Registered Professional Engineer of Queensland (RPEQ) specialising \
                n civil engineering with a suitable specialty.',
            },
            {
                PO: {
                    "name": "PO2",
                    "text": 'Erosion protection \
                    All buildings and structures \
                    (including any refurbishment works to existing buildings or structures) \
                    on land near the open coast have adequate footings, designed and certified by \
                    a Registered Professional Engineer of Queensland (RPEQ) specialising in \
                    civil engineering, and constructed to ensure that they are erosion resistant to safe standards.',
                },
                info_required: 'AO 2.1 - Erosion prevention devices, including building footings, \
                are certified YN by a Registered Professional Engineer of Queensland (RPEQ) specialising \
                n civil engineering with a suitable specialty.',
            },],
          }
        }
      };

    const mixed_use_zone_data = assessmentData.subject_matter.mixed_use_zone;
    const low_impact_industry_data = assessmentData.subject_matter.low_impact_industry;
    const coastal_erosion_hazard_overlay = assessmentData.subject_matter.coastal_erosion_hazard_overlay;

    return (
    <React.Fragment>
        <Navbar/> 
        <h1>Assessment Form</h1>
        <FormSection sectionContent={mixed_use_zone_data} handleInputChange={handleInputChange}/>
        <FormSection sectionContent={low_impact_industry_data} handleInputChange={handleInputChange}/>
        <FormSection sectionContent={coastal_erosion_hazard_overlay} handleInputChange={handleInputChange}/>
        <div className='submit-button-container'>
            <input 
                type="submit"
                value="Export as Doc"
                className='submit-button'
                onClick={()=> exportFormData(formInputData)}
            />
        </div>
    </React.Fragment>
    )
}

export default AssessmentInfoForm
