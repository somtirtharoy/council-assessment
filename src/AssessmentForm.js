import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import {exportToDoc, exportAssessmentToDoc, exportUsingDocx} from './utils/export';

const AssessmentForm = props => {
    return (
        <>
            {/* <form> */}
            <div id="container">
                <p>This is the Assessment Form</p>
                <div>
                    <FormSection/>
                </div>
                {/* <div>
                    <FormSection/>
                </div> */}
            </div>
            {/* <input type="submit" value="Submit" onClick={() => exportToDoc('exportContent', 'word_doc')}></input> */}
            <input type="submit" value="Submit" onClick={() => exportUsingDocx('container')}></input>
            {/* </form> */}
        </>
    );
};

AssessmentForm.propTypes = {
    
};

export default AssessmentForm;