import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import {exportToDoc, exportAssessmentToDoc} from './utils/export';

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
            {/* <div id="exportContent">
                <h1>
                    <center>CodersFever</center>
                </h1>
                <h2>Easy Learing Plateform</h2>
                <p>
                    CodesFever emerged from the concept that there is a category of readers who respond best to online web content and prefer to learn new skills from the comforts of their drawing rooms at their own place.
                </p>
                <p>
                    Individual, corporate and academic members have access to learn anything on codesfever.com likes video tutorials, blogs content etc. From many years, we worked our way to adding new fresh articles on topics ranging from programming languages that helps students, leaders, IT and design professionals, project managers or anyone who is working with software development, creatives and business skills.
                </p>
            </div> */}
            {/* <input type="submit" value="Submit" onClick={() => exportToDoc('exportContent', 'word_doc')}></input> */}
            <input type="submit" value="Submit" onClick={() => exportAssessmentToDoc('container', 'word_doc')}></input>
            {/* </form> */}
        </>
    );
};

AssessmentForm.propTypes = {
    
};

export default AssessmentForm;