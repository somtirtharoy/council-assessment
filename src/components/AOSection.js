import React, { useState } from 'react'

const AOSection = ({props}) => {

    const {info_required, sub_section_name_prefix, yesRadioButton, noRadioButton, handleRadioYesClick, handleRadioNoClick} = props;
    

    return (
    <>
        <div className='form-section-ao-radio-container'>
            <div className='form-section-po-ao-container'>
                {info_required}
            </div>
            <div className='form-section-radio-button-container'>
                <div className="form-check radio_group">
                    <input 
                        className="form-check-input yes" 
                        type="radio" 
                        value="yes"
                        checked={yesRadioButton == 'yes'}
                        name={`${sub_section_name_prefix}_radio_yes`}
                        id={`${sub_section_name_prefix}_radio_yes`} 
                        onChange= {(event) => {handleRadioYesClick(event, `${sub_section_name_prefix}_radio_no`)}}
                    />
                    <label className="form-check-label" htmlFor={`${sub_section_name_prefix}_radio_yes`}>
                        Y
                    </label>
                </div>
                <div className="form-check radio_group_2">
                    <input 
                        className="form-check-input no" 
                        type="radio" 
                        value="no"
                        checked={noRadioButton == 'no'}
                        name={`${sub_section_name_prefix}_radio_no`} 
                        id={`${sub_section_name_prefix}_radio_no`} 
                        onChange= {(event) => {handleRadioNoClick(event)}}
                    />
                    <label className="form-check-label" htmlFor={`${sub_section_name_prefix}_radio_no`}>
                        N
                    </label>
                </div> 
            </div>
        </div>
        
    </>
    )
}

export default AOSection
