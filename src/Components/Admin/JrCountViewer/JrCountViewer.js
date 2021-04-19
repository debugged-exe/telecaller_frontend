import React from 'react';
import 'tachyons';


const JrCountViewer = ({header, content}) => {
	return (
		<div className="jrcount-viewer ma2 pa4">
			<table className="f6 mw8 center" cellSpacing="0">
				<thead>
					<tr>
						{
							header.map((item,index) => {
								return(
									<th className="fw6 bb b--black-20 tl pb3 pr3 bg-white" key={index}>{item}</th>
								);
							})
						}
					</tr>
				</thead>
				<tbody className="lh-copy">
					<tr>
						{
							content.map((item, index) => {
								return(
									<td className="pv3 pr4 bb b--black-20" key={index}>{item}</td>
								);
							})
						}
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default JrCountViewer;