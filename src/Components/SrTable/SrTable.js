import React from 'react';
import SrRow from './SrRow.js';
import './SrTable.css';

const SrTable = ({headerArray, contentArray, setJrCaller}) =>{

	return(
		<div className="ma2 pa4">
            <div>
            	<table className="f6 mw8 center" cellSpacing="0">
            		<thead>
	            		<tr>
	            			{
	            				headerArray.map((item,index) => {
	            					return(
	            						<th key = {index} className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{item}</th>
	            					);
	            				})
	            			}
	            		</tr>
            		</thead>
            		<tbody className="lh-copy">
            		{
            			contentArray.map((item,index) => {
            				return(
                                          <tr key={index}>
                  					<SrRow 
                                                key={index} 
                                                rowObject={item}
                                                setJrCaller={setJrCaller}
                                                />
                                          </tr>
            				);
            			})
            		}
            		</tbody>
            	</table>
            </div>
        </div>
	);
}

export default SrTable;
