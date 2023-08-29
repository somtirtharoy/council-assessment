import React, { useState } from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import {gen_section_HTML, section_data, showInfoColumn} from '../utils/utils.js';
import POSection from './POSection.js';


const FormSubSection = props => {

    const {title, content, handleInputChange} = props;

    const getUniqueKey = (content) => {
        return `${title.toLowerCase().split(' ').join('_')}_${content.PO.name}`
    }

    return (
        <div>
            {content.map( (po_content) => <POSection key= {getUniqueKey(po_content)} props={{title, content: po_content, handleInputChange}}/>)}
        </div>
    );
};

FormSubSection.propTypes = {
    
};

export default FormSubSection;