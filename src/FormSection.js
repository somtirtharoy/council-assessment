import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSubSection from './FormSubSection';

const FormSection = ({sectionContent}) => {
    const { title, content } = sectionContent;
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion">
            <div 
                className="accordion-title" 
                onClick={ () => setIsActive(!isActive)}
            >
                <div>{title}</div>
                <div>{ isActive ? '+' : '-'}</div>
            </div>
            {/* {!isActive && <div className="accordion-content">{content}</div>} */}
                {!isActive && <div className="accordion-content">
                <FormSubSection title={title} content={content}/>
            </div>}
        </div>
      );
};

FormSection.propTypes = {
    
};

export default FormSection;