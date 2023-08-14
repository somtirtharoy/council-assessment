import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';

const AssessmentForm = props => {
    return (
        <>
            <p>This is the Assessment Form</p>
            <div>
                <FormSection/>
                {/* <FormSection/>
                <FormSection/> */}
            </div>
        </>
    );
};

AssessmentForm.propTypes = {
    
};

export default AssessmentForm;