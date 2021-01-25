import React from 'react';
import './Row.css';

const Row = ({rowObject}) => {
	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	return(
		<>
		{
			elementArray.map((item,index) => {
				if(index!==elementArray.length-1)
				{
					return(
						<td key={index} className="pv3 pr3 bb b--black-20"><input type='text' autoComplete='blej' value={item}></input></td>
					);
				}
				else
				{
					return(
						<td key={index} className="pv3 pr3 bb b--black-20"><input type='checkbox' autoComplete='blej' value={item}></input></td>
					);
				}
			})
		}
		</>
	);
}

export default Row;