import React from 'react'
import AOSection from './AOSection';
import InformationSection from './InformationSection';
import {get_sub_section_name_prefix} from '../utils/utils';
import { useState } from 'react';

const POSection = ({props}) => {
    const {title, content, handleInputChange} = props;

    const [infoRequired, setInfoRequired] = useState(false);
    
    const getUniqueKey = (content) => {
        return `${title.toLowerCase().split(' ').join('_')}_${content.PO.name}`
    }

    const sub_section_name_prefix = get_sub_section_name_prefix(title, content.PO.name);

    return (
    <React.Fragment>
        <div className='form-section-contents'>
            <div className='form-section-po-container'>
                {content.PO.text}
            </div>
            <div className='form-section-info-required-container'> 
                {content.info_required.map( (info_required) => 
                    <AOSection 
                        // ADD THIS: key={getUniqueKey(content)} 
                        props={{info_required, sub_section_name_prefix, infoRequired, setInfoRequired}} 
                    /> 
                    )
                }
            </div>
            <InformationSection infoRequired={infoRequired} handleInputChange={handleInputChange} sub_section_name_prefix={sub_section_name_prefix}/>
        </div>
    </React.Fragment>
    )
}

export default POSection
