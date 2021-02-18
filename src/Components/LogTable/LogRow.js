import React from 'react';
import './LogRow.css'

const LogRow = ({rowObject}) => {
	console.log(rowObject)
	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	return(
		<>
			{
				elementArray.map((item, index) => {
					return(
						<td key={index} className="pv3 pr4 bb b--black-20">{item}</td>
					);
				})
			}
		</>
	);

}

export default LogRow;