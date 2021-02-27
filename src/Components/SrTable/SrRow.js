import React from 'react';

const SrRow = ({rowObject, setJrCaller}) => {
	const {username, telecaller_id} = rowObject;
	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	return(
		<>
		{
			elementArray.map((item, index) =>{
				return(
					<td key={index} className="pv3 pr4 bb b--black-20">{item}</td>
				);
			})
		}
		<td
		style={{cursor: 'pointer'}}
		className="f6 tc link dim ph2 pv2 mb2 white dib br2 ma2 bg-blue"
		onClick = {() => {
			setJrCaller(username, telecaller_id)
		}}
		>
		View Caller Logs
		</td>
		</>
	);
}

export default SrRow;