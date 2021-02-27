import React from 'react';
import ModalRow from './ModalRow.js'

const ModalTable = ({headerArray, contentArray}) => {
	return(
		<div className="ma2 pa4">
			<div>
				<table className="f6 mw8 center" cellSpacing="0">
				<thead>
					<tr>
						{
							headerArray.map((item, index) => {
								return(
									<th key={index} className="fw6 bb b--black-20 tl pb3 pr3 bg-white">{item}</th>
								);
							})
						}
					</tr>
				</thead>
				<tbody>
				{
					contentArray.map((item,index) => {
						return(
							<tr key={index} className={item.coded==='Yes'?"bg-green":(item.coded==='No'?"bg-red":"")}>
								<ModalRow rowObject={item} />
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

export default ModalTable;