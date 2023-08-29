import React from 'react'

const InformationSection = ({infoRequired, handleInputChange, sub_section_name_prefix}) => {
  return (
    <>
        <div className='form-section-info-container'>
            {infoRequired ? 
                <textarea 
                    id = {`${sub_section_name_prefix}_textarea`} 
                    type='text' 
                    className='information_text_area' 
                    placeholder='Type your information here' 
                    name={`${sub_section_name_prefix}_textarea`}
                    onChange={() => handleInputChange(`${sub_section_name_prefix}_textarea`)}
                /> 
                : 
                <textarea 
                    id = {`${sub_section_name_prefix}_textarea`} 
                    type='text' 
                    className='information_text_area' 
                    placeholder='Type your information here' 
                    name={`${sub_section_name_prefix}_textarea`} 
                    disabled
                />
            } 
        </div>      
    </>
  )
}

export default InformationSection
