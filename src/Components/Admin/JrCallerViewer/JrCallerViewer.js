import React from 'react';
import JrViewRow from './JrViewRow.js';
import 'tachyons';


const JrCallerViewer = ({header,content, setJrLog}) => {
	console.log(content);
	return (
		<div className="jrcaller-viewer ma2 pa4">
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
					{
						content.map((item,index) => {
							return(
								<tr>
									<JrViewRow rowObject={item} key={index} />
									<td>
										<div 
										className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
										onClick = {() => setJrLog(item.telecaller_id)}
										>
											View Logs
										</div>
									</td>
									<td>
										<div 
										className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
										>
											View Count
										</div>
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default JrCallerViewer;