import React from 'react';
import JrRow from './JrRow.js';
import './JrTable.css';

const JrTable = ({headerArray, ContentArray, onRefresh}) =>{

	return(
		<div className="ma2 pa4 table">
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
            				ContentArray.map((item,index) => {
            					return(
            						<tr key={index} className={item.coded==='Yes'?"bg-green":(item.coded==='No'?"bg-red":"")}>
            							<JrRow rowObject={item} onRefresh={onRefresh}/>
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

export default JrTable;