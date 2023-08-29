import React from 'react'

const AOSection = ({props}) => {

    const {content, sub_section_name_prefix, handleRadioYesClick, handleRadioNoClick} = props;

    return (
    <>
        <div className='form-section-info-required-container'>
            <div className='form-section-po-ao-container'>
                {content.info_required}
            </div>
            <div className='form-section-radio-button-container'>
                <div className="form-check radio_group">
                    <input 
                        className="form-check-input yes" 
                        type="radio" 
                        name={`${sub_section_name_prefix}_radio_yes`}
                        id={`${sub_section_name_prefix}_radio_yes`} 
                        onClick= {(event) => {handleRadioYesClick(event, `${sub_section_name_prefix}_radio_no`)}}
                    />
                    <label className="form-check-label" htmlFor={`${sub_section_name_prefix}_radio_yes`}>
                        Y
                    </label>
                </div>
                <div className="form-check radio_group_2">
                    <input 
                        className="form-check-input no" 
                        type="radio" 
                        name={`${sub_section_name_prefix}_radio_no`} 
                        id={`${sub_section_name_prefix}_radio_no`} 
                        onClick= {(event) => {handleRadioNoClick(event)}}
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
