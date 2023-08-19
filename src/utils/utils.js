
// NOTE: take this out of here and put in another file
const section_data = {
    subject_matter: {
        'title': 'Subject Matter',
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


// format the html accrding to the format metadata 
const add_formatted_html = (section_data, section, node) => {
    if(section_data[section]['format'][node] === null ||
        section_data[section]['format'][node] === undefined) {
        html_string = `<th>${node}</th>`;
        
    } else {
        html_string = `<th rowSpan="${section_data[section]['format'][node]['rowspan']}">${node}</th>`;
    } 
    return html_string;
}

// recursively build html for the section
const recursive_gen_section_HTML = (node, section_data, section, html_string, height, ) => {
    console.log(node);
    console.log(section_data[section]['layout'][node]);
    console.log(html_string);

    height +=1;
    // BASE CASE
    if(section_data[section]['layout'][node].length === 0){
        console.log("At the end of the path");
        
        // add the formatted html
        html_string = add_formatted_html(section_data, section, node);
        console.log(html_string);
        return html_string;
    }
    
    // add the formatted html for current node
    html_string = '<tr>';
    html_string += add_formatted_html(section_data, section, node);

    // recursively add html for all children nodes
    for(let [index, child] of section_data[section]['layout'][node].entries()) {
        console.log('---------------------');
        console.log(child);
        console.log('height ', height);
        console.log('index ', index);
        console.log('---------------------');
        html_string += recursive_gen_section_HTML(child, section_data, section, html_string, height)
        if(index > 0){
            console.log('Add a <tr> tag');
            html_string += '<tr>';
        }
    }
    
    // add closing </tr> tag here before it returns to previous level
    if(height > 3){
        console.log('Add a </tr> tag');
        html_string += '</tr>';
    }
    return html_string;
}


// Global variables
let section_html = {};
let html_string = '';
let height = 0;


// generate html for all sections
const gen_section_HTML = (section_data) => {
    for( let section in section_data) {
        html_string = '<table>'
        html_string += recursive_gen_section_HTML('root', section_data, section, html_string, height); 
        html_string += '</table>'

        console.log('*********************');
        console.log(html_string);
        console.log('*********************');
        section_html[section] = html_string;
    }

    return section_html;
}

const showInfoColumn = (section, row_index) => {
    console.log('Show info section');
    // add information required column only if it does not exist
    const radio_element = document.querySelectorAll(`div.${section}_radio_group_${row_index} > input.yes`);
    if(radio_element[0].checked) {
        // add header row if not added
        if( document.querySelectorAll('.information_column_header').length === 0) {
            var header_row = document.querySelectorAll('.section_header_row')[0];
            var information_column_header = Object.assign(
                document.createElement('th'), 
                {
                    className: 'information_column_header',
                    innerHTML: 'Information'
                }); 
            header_row.appendChild(information_column_header)
        }
    
        // add text information column to the row
        if( document.querySelectorAll(`.${section}_information_input_${row_index}`).length === 0) {
            var information_column = `<input type='text' class='information_text_area' placeholder='Type your information here'/>`;
            var information_input = Object.assign(
                document.createElement("div"),
                {
                    className: `${section}_information_input_${row_index} information_text_area`,
                    innerHTML: information_column,
                });
            // information_input.innerHTML = information_column;
            var radio_group_parent = document.querySelectorAll(`.${section}_radio_group_${row_index}`)[0].parentNode;
            radio_group_parent.parentNode.insertBefore(information_input, radio_group_parent.nextSibling);
        }
    }
}

export {gen_section_HTML, showInfoColumn, section_data}; 

