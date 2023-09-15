import {exportFormData} from '../utils/export';
import React, { useState } from 'react'
import FormSection from './FormSection';
import Navbar from './Navbar';
import assessmentData from '../data/assessmentData';
import {create_initial_form_state} from '../utils/utils'

const AssessmentInfoForm = () => {

    const initial_form_state = create_initial_form_state(assessmentData.subject_matter);
    const [formInputData, setFormInputData] = useState(initial_form_state);
    
    const handleInputChange = (id) => {
        var element = document.getElementById(id);

        var updatedData= {}
        updatedData[id] = element.value;
        
        setFormInputData({
            ...formInputData,
            ...updatedData,
        })
    };


    // NOTE: Change the data to get the form section data into an array 
    // so that it can be mapped thus reducing redundant code
    const mixed_use_zone_data = assessmentData.subject_matter.mixed_use_zone;
    const low_impact_industry_data = assessmentData.subject_matter.low_impact_industry;
    const medium_impact_industry = assessmentData.subject_matter.medium_impact_industry;
    const high_impact_industry = assessmentData.subject_matter.high_impact_industry;
    const coastal_erosion_hazard_overlay = assessmentData.subject_matter.coastal_erosion_hazard_overlay;
    const flood_overlay_code = assessmentData.subject_matter.flood_overlay_code;
    const landslide_hazard_overlay = assessmentData.subject_matter.landslide_hazard_overlay;
    const water_resources_catchment_overlay = assessmentData.subject_matter.water_resources_catchment_overlay;
    const forestry_for_wood_production_code = assessmentData.subject_matter.forestry_for_wood_production_code;
    const industrial_design_code = assessmentData.subject_matter.industrial_design_code;
    const change_ground_level_creation_waterways_code = assessmentData.subject_matter.change_ground_level_creation_waterways_code;
    const driveways_and_vehicle_crossings_code = assessmentData.subject_matter.driveways_and_vehicle_crossings_code;
    const general_development_provisions_code = assessmentData.subject_matter.general_development_provisions_code;
    const healthy_waters_code = assessmentData.subject_matter.healthy_waters_code;

    return (
    <React.Fragment>
        <div class="app-canvas">
            <Navbar/> 
            <div class="form-container">
                <h1>Assessment Form</h1>
                <div class="accordion-container">
                    <FormSection sectionContent={mixed_use_zone_data} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={low_impact_industry_data} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={medium_impact_industry} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={high_impact_industry} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={coastal_erosion_hazard_overlay} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={flood_overlay_code} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={landslide_hazard_overlay} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={water_resources_catchment_overlay} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={forestry_for_wood_production_code} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={industrial_design_code} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={change_ground_level_creation_waterways_code} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={driveways_and_vehicle_crossings_code} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={general_development_provisions_code} handleInputChange={handleInputChange}/>
                    <FormSection sectionContent={healthy_waters_code} handleInputChange={handleInputChange}/>
                </div>
                <div className='submit-button-container'>
                    <input 
                        type="submit"
                        value="Export as Doc"
                        className='submit-button button-3'
                        onClick={()=> exportFormData(formInputData)}
                    />
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default AssessmentInfoForm
