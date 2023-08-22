import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import {gen_section_HTML, section_data, showInfoColumn} from './utils/utils.js';


const FormSection = props => {

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
                        Radio buttons
                    </div>
                </div>
                <div className='form-section-info-container'>
                    Information required
                </div>
            </div>
        </div>
    );
};

FormSection.propTypes = {
    
};

export default FormSection;