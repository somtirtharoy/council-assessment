import React from 'react'
import AOSection from './AOSection';
import InformationSection from './InformationSection';
import {get_sub_section_name_prefix} from '../utils/utils';
import { useState } from 'react';

const POSection = ({props}) => {
    const {title, content, handleInputChange} = props;

    const [infoRequired, setInfoRequired] = useState(false);

    const handleRadioYesClick = (event, id) => {
        
        var no_el = document.getElementById(id);
        console.log(no_el);
        no_el.removeAttribute('checked');

        if(!infoRequired) {
            setInfoRequired(true)
        }
        
        // unset checked attribute for no radio button
    }

    const handleRadioNoClick = () => {
        if(infoRequired) { 
            setInfoRequired(false);
        }
        // unset checked attribute for yes radio button

    }
    
    const getUniqueKey = (content) => {
        return `${title.toLowerCase().split(' ').join('_')}_${content.PO.name}`
    }

    const sub_section_name_prefix = get_sub_section_name_prefix(title, content.PO.name);

    return (
    <>
        <div className='form-section-contents'>
            <div className='form-section-po-container'>
                {content.PO.text}
            </div>
            <div className='form-section-info-required-container'> 
                {content.info_required.map( (info_required) => 
                    <AOSection 
                        // ADD THIS: key={getUniqueKey(content)} 
                        props={{info_required, sub_section_name_prefix, handleRadioYesClick, handleRadioNoClick}} 
                    /> 
                    )
                }
            </div>
            <InformationSection infoRequired={infoRequired} handleInputChange={handleInputChange} sub_section_name_prefix={sub_section_name_prefix}/>
        </div>
    </>
    )
}

export default POSection
