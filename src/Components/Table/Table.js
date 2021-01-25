import React from 'react';
import Row from './Row.js';
import './Table.css';

const Table = ({headerArray, ContentArray}) =>{

	return(
		<div className="pa4">
            <div className="overflow-auto">
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
            							<Row rowObject={item} />
            							<div
            							style={{cursor: 'pointer'}}
                						className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" href="#0" 
                    					>
                   						Remove
                    					</div>
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

export default Table;