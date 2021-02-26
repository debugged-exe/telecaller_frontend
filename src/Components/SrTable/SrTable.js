import React from 'react';
import './SrTable.css';

const SrTable = ({headerArray}) =>{

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

            		</tbody>
            	</table>
            </div>
        </div>
	);
}

export default SrTable;
