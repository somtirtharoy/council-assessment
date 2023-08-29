import {exportFormData} from '../utils/export';
import React, { useState } from 'react'
import FormSection from './FormSection';
import Navbar from './Navbar';
import assessmentData from '../data/assessmentData';

const AssessmentInfoForm = () => {

    // Note: the keys of this dict are derived from the title in the data
    // NOTE: dynamically change this dictionary so that each time the data changes we dont have to update this
    const [formInputData, setFormInputData] = useState({
        'mixed_used_zone_code_PO16_textarea': '',
        'low_impact_industry_zone_code_PO4_textarea': '',
        'coast_erosion_hazard_overlay_code_PO2_textarea': '',
        'coast_erosion_hazard_overlay_code_PO4_textarea': '',
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
