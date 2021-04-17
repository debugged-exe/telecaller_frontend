import React from 'react';
import './TeamViewer.css';
import TeamRow from './TeamRow.js';
import 'tachyons';

const TeamViewer = ({header, content, teamLang, setJrCallerArray}) => {
	return (
		<div className="team-viewer ma2 pa4">
			<div>
				<table className="f6 mw8 center" cellSpacing='0'>
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
							content
							.filter(item => item.preferred_lang===teamLang && item.des==='SrCaller')
							.map((item, index) => {
								return(
									<tr>
										<TeamRow rowObject={item} key={index} />
										<td>
											<div 
											className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
											onClick={() => setJrCallerArray(item.telecaller_id)}
											>
												View Team
											</div>
										</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TeamViewer;