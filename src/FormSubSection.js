import React, { useState } from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import {gen_section_HTML, section_data, showInfoColumn} from './utils/utils.js';


const FormSubSection = props => {

    const {title, content, handleInputChange} = props;

    const [infoRequired, setInfoRequired] = useState(false);

    const handleRadioNoClick = () => {
        if(infoRequired) { 
            setInfoRequired(false);
        }
    }

    const sub_section_name_prefix = `${title.toLowerCase().split(' ').join('_')}_${content.PO.name}`;

    return (
        <div>
            <div className='form-section-header'>
               {title} 
            </div>
            <div className='form-section-contents'>
                <div className='form-section-po-container'>
                    {content.PO.text}
                </div>
                <div className='form-section-info-required-container'>
                    <div className='form-section-po-ao-container'>
                        {content.info_required}
                    </div>
                    <div className='form-section-radio-button-container'>
                        <div className="form-check radio_group">
                            <input 
                                className="form-check-input yes" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id={`${sub_section_name_prefix}_radio_yes`} 
                                onClick= {() => {if(!infoRequired) { setInfoRequired(true) }}}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check radio_group_2">
                            <input 
                                className="form-check-input no" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id={`${sub_section_name_prefix}_radio_no`} 
                                onClick= {() => {if(infoRequired) { setInfoRequired(false) }}}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                        </div> 
                    </div>
                </div>
                <div className='form-section-info-container'>
                    {infoRequired ? 
                        <textarea 
                            id = {`${sub_section_name_prefix}_textarea`} 
                            type='text' 
                            className='information_text_area' 
                            placeholder='Type your information here' 
                            name={`${sub_section_name_prefix}_textarea`}
                            onChange={() => handleInputChange(`${sub_section_name_prefix}_textarea`)}
                        /> 
                        : 
                        <textarea 
                            id = {`${sub_section_name_prefix}_textarea`} 
                            type='text' 
                            className='information_text_area' 
                            placeholder='Type your information here' 
                            name={`${sub_section_name_prefix}_textarea`} 
                            disabled
                        />
                    } 
                </div>
            </div>
        </div>
    );
};

FormSubSection.propTypes = {
    
};

export default FormSubSection;