import React from 'react'
import FormSection from './FormSection';
import Navbar from './Navbar';

const AssessmentInfoForm = () => {

    const assessmentData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    
        subject_matter: {
          mixed_use_zone: {
            title: 'Mixed used zone code',
            content: {
              PO: 'PO16 - Filling and excavation (Bermuda Point precinct)\
              The development does not cause changes to the Flood discharge capacity\
              that would adversely affect land and/or premises external to the site \
              to an extent likely to be actionable.',
              info_required: 'PO 16 AO16',
            },
            
          },
          low_impact_industry: {
            title: 'Low impact industry zone code',
            content: {
              PO: 'Out of sequence development \
              PO4 - Where development does not have an immediate connection to adequate \
              infrastructure the proposal must demonstrate that:\
              (b) downstream property owner agreements are secured for the \
              provision of the necessary infrastructure through their land;\
              (d) the necessary infrastructure is provided to Council’s standards, at no cost to Council.',
              info_required: 'PO4 (b) (d) No AO provided',
            }
    
          },
          // medium_impact_industry: {
          //   title: 'Medium impact industry zone code',
    
          // },
          // high_impact_industry: {
          //   title: 'High impact industry zone code',
    
          // },
          // coastal_erosion_overlay: {
          //   title: 'Coastal erosion hazard overlay code',
    
          // }
        }
      };

    return (
    <React.Fragment>
        <Navbar/> 
        <h1>Assessment Form</h1>
        <FormSection sectionContent={assessmentData.subject_matter.mixed_use_zone}/>
        <FormSection sectionContent={assessmentData.subject_matter.low_impact_industry}/>
        <div>
        {/* <input type="submit" value="Submit" onClick={() => exportUsingDocx('container')}></input> */}
        <input type="submit" value="Submit"></input>
        </div>
    </React.Fragment>
    )
}

export default AssessmentInfoForm
