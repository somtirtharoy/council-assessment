import React from 'react';
import POSection from './POSection.js';


const FormSubSection = props => {

    const {title, content, handleInputChange} = props;

    const getUniqueKey = (content) => {
        return `${title.toLowerCase().split(' ').join('_')}_${content.PO.name}`
    }

    return (
        <div>
            {content.map( (po_content) => <POSection  key= {getUniqueKey(po_content)} props={{title, content: po_content, handleInputChange}}/>)}
        </div>
    );
};

FormSubSection.propTypes = {
    
};

export default FormSubSection;