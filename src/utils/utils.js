

const section_data = {
    subject_matter: {
        layout: {
            root: ['Erosion protection', 'Restoration and replenishment of beach sand', 'Setbacks', 'Protection of the coastal environment'],
            'Erosion protection': ['PO2', 'PO3'],
            'PO2': ['AO2.1','AO2.2','AO2.3','AO2.4','AO2.5','AO2.6'],
            'PO3': ['AO3.1','AO3.2'],
            'Restoration and replenishment of beach sand': ['PO4'],
            'PO4': ['AO4.1','AO4.2'],
            'Setbacks': ['PO6'],
            'PO6': ['AO6.1','AO6.2'],
            'Protection of the coastal environment': ['PO12'],
            'PO12': ['AO12'],
            'AO2.1': ['Choose an item'],
            'AO2.2': ['Choose an item'],
            'AO2.3': ['Choose an item'],
            'AO2.4': ['Choose an item'],
            'AO2.5': ['Choose an item'],
            'AO2.6': ['Choose an item'],
            'AO3.1': ['Choose an item'],
            'AO3.2': ['Choose an item'],
            'AO4.1': ['Choose an item'],
            'AO4.2': ['Choose an item'],
            'AO6.1': ['Choose an item'],
            'AO6.2': ['Choose an item'],
            'AO12': ['Choose an item'],
            'Choose an item': [],
        },
        format: {
            'Erosion protection': {rowspan: 8},
            'PO2': {rowspan: 6},
            'PO3': {rowspan: 2},
            'PO4': {rowspan: 2},
            'PO9': {rowspan: 2},
            'Restoration and replenishment of beach sand': {rowspan: 2},
            'Setbacks': {rowspan: 2},

        }
    }
};


function recursive_gen_section_HTML(node, section_data, section, html_string) {
    if(node == []){
        return;
    }
    
    html_string += '<tr>';
    for(let child of section_data[section]['layout'][node]) {
        
        if(section_data[section]['format'][child] === null ||
            section_data[section]['format'][child] === undefined) {
            html_string += `<th>${child}</th>`;
            
        } else {
            html_string += `<th rowSpan="${section_data[section]['format'][child]['rowspan']}">${child}</th>`;
        }

        // html_string += `<th rowSpan="${section_data[section]['format'][child]['rowspan']}">${child}</th>`;
        recursive_gen_section_HTML(child, section_data, section, html_string)
        html_string += '</tr>' 
    }

}

let section_html = {};
let html_string = '';
function gen_section_HTML(section_data) {
    for( let section in section_data) {
        const root = section_data[section]['layout']['root'];
        html_string += '<table>'
        for( let child of root) {
            recursive_gen_section_HTML(child, section_data, section, html_string); 
        }
        html_string += '</table>'
        section_html[section] = html_string;
    }

    return section_html;
}

export {gen_section_HTML, section_data}; 

