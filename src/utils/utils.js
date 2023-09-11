

const get_sub_section_name_prefix = (title, po_name) => {
    return `${title.toLowerCase().split(' ').join('_')}_${po_name}`;
}

const create_initial_form_state = (form_data) => {
    
    const initial_form_state = {};
    for(const [section_name, section_data] of Object.entries(form_data)) {
        for(const po_data of section_data.content) {
            const form_key_name = `${get_sub_section_name_prefix(section_data.title, po_data.PO.name)}_textarea`
            initial_form_state[form_key_name] = '';
        }
    }

    return initial_form_state; 
}

const create_input_field_metadata = (form_data) => {
    
    const inputFieldMetadata = {};
    for(const [section_name, section_data] of Object.entries(form_data)) {
        for(const po_data of section_data.content) {
            const form_key_name = `${get_sub_section_name_prefix(section_data.title, po_data.PO.name)}_textarea`
            inputFieldMetadata[form_key_name] = {'PO': po_data.PO.name, 'section': section_data.title};
        }
    }

    console.log(inputFieldMetadata);
    return inputFieldMetadata; 
}




export {create_initial_form_state, create_input_field_metadata, get_sub_section_name_prefix};

