import React, { useState } from 'react'

const AOSection = ({props}) => {

    const {info_required, sub_section_name_prefix, index, infoRequired, setInfoRequired} = props;
    
    const [yesRadioButton, setYesRadioButton] = useState('');
    const [noRadioButton, setNoRadioButton] = useState('no');

    const handleRadioYesClick = (event, id) => {
        
        setYesRadioButton(event.target.value);
        if(!infoRequired) {
            setInfoRequired(true)
        }
        
        // unset checked attribute for no radio button
        setNoRadioButton("");
    }

    const handleRadioNoClick = (event, id) => {

        setNoRadioButton(event.target.value);

        if(infoRequired) { 
            setInfoRequired(false);
        }

        // unset checked attribute for yes radio button
        setYesRadioButton("");
    }

    const ao_section_prefix = `${sub_section_name_prefix}_${index}`;
    const radio_group_1 = `form-check radio_group_${index}_1`;
    const radio_group_2 = `form-check radio_group_${index}_2`;

    return (
    <>
        <div className='form-section-ao-radio-container'>
            <div className='form-section-po-ao-container'>
                {info_required}
            </div>
            <div className='form-section-radio-button-container'>
                <div className={radio_group_1}>
                    <input 
                        className="form-check-input yes" 
                        type="radio" 
                        value="yes"
                        checked={yesRadioButton == 'yes'}
                        name={`${ao_section_prefix}_radio_yes`}
                        id={`${ao_section_prefix}_radio_yes`} 
                        onChange= {(event) => {handleRadioYesClick(event, `${ao_section_prefix}_radio_no`)}}
                    />
                    <label className="form-check-label" htmlFor={`${ao_section_prefix}_radio_yes`}>
                        Y
                    </label>
                </div>
                <div className={radio_group_2}>
                    <input 
                        className="form-check-input no" 
                        type="radio" 
                        value="no"
                        checked={noRadioButton == 'no'}
                        name={`${ao_section_prefix}_radio_no`} 
                        id={`${ao_section_prefix}_radio_no`} 
                        onChange= {(event) => {handleRadioNoClick(event)}}
                    />
                    <label className="form-check-label" htmlFor={`${ao_section_prefix}_radio_no`}>
                        N
                    </label>
                </div> 
            </div>
        </div>
        
    </>
    )
}

export default AOSection
