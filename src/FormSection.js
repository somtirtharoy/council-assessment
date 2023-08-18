import React from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import {gen_section_HTML, section_data, showInfoColumn} from './utils/utils.js';


// console.log(gen_section_HTML(section_data));

const FormSection = props => {

    console.log(gen_section_HTML(section_data));


    return (
        <div>
            <table>
                <tbody>
                    <tr className='section_header_row'>
                        <th>Subject matter</th>
                        <th>PO</th>
                        <th>AO</th>
                        <th>Information required</th>
                    </tr>
                    <tr>
                        {/* <th rowspan="8" scope="rowgroup">Erosion protection</th> */}
                        <th rowSpan="8">Erosion protection</th>
                        {/* <th rowspan="6" scope="row">PO2</th> */}
                        <th rowSpan="6">PO2</th>
                        <th>AO2.1</th>
                        {/* <th>Choose an item</th>  */}
                        <td>
                            <div className="subject_matter_radio_group_1">
                                <label><input className='yes' type="radio" onClick={() => showInfoColumn('subject_matter', 1)}/>Yes</label>
                                <label><input className='no' type="radio" />No</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">AO2.2</th>
                        {/* <th>Choose an item</th>  */}
                        <td>
                            <div className="subject_matter_radio_group_2">
                                <label><input className='yes' type="radio" onClick={() => showInfoColumn('subject_matter', 2)}/>Yes</label>
                                <label><input className='no' type="radio" />No</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">AO2.3</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th scope="row">AO2.4</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th scope="row">AO2.5</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th scope="row">AO2.6</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th rowSpan="2" scope="row">PO3</th>
                        <th>AO3.1</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th scope="row">AO3.2</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th rowSpan="2">Restoration and replenishment of beach sand</th>
                        <th rowSpan="2">PO4</th>
                        <th>AO4.1</th>
                        <th>Choose an item</th>
                    </tr>
                    <tr>
                        <th scope="row">AO4.2</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th rowSpan="2">Setbacks</th>
                        <th rowSpan="2">PO9</th>
                        <th>AO9.1</th>
                        <th>Choose an item</th>
                    </tr>
                    <tr>
                        <th scope="row">AO9.2</th>
                        <th>Choose an item</th> 
                    </tr>
                    <tr>
                        <th>Protection of the coastal environment</th>
                        <th>PO12</th>
                        <th>AO12</th>
                        <th>Choose an item</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

FormSection.propTypes = {
    
};

export default FormSection;