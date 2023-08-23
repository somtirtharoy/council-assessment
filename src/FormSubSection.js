import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import {gen_section_HTML, section_data, showInfoColumn} from './utils/utils.js';


const FormSubSection = props => {

   const {title, content} = props;

    return (
        <div>
            <div className='form-section-header'>
               {title} 
            </div>
            <div className='form-section-contents'>
                <div className='form-section-po-container'>
                    {content.PO}
                </div>
                <div className='form-section-info-required-container'>
                    <div className='form-section-po-ao-container'>
                        {content.info_required}
                    </div>
                    <div className='form-section-radio-button-container'>
                        <div className="form-check radio_group">
                            <input className="form-check-input yes" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check radio_group_2">
                            <input className="form-check-input no" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No
                            </label>
                        </div> 
                    </div>
                </div>
                <div className='form-section-info-container'>
                    <textarea type='text' class='information_text_area' placeholder='Type your information here'/>
                </div>
            </div>
        </div>
    );
};

FormSubSection.propTypes = {
    
};

export default FormSubSection;