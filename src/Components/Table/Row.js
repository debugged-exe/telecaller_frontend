import React,{useState} from 'react';
import './Row.css';

const Row = ({rowObject}) => {
	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	const [read, setRead] = useState(true)

	const onEditHandler = () => {
		if(read===true)
		{
			setRead(false)
		}
		else
		{
			setRead(true)
		}
	}

	const x = 'X'
	const Edit = 'Edit'

	return(
		<>
		{
			elementArray.map((item,index) => {
				if(index!==elementArray.length-1)
				{
					return(
						<td key={index} className="pv3 pr3 bb b--black-20"><input type='text' autoComplete='blej' placeholder={`${item}`} readOnly={read}/></td>
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
		<div className="flex">
			<td
			style={{cursor: 'pointer'}}
			className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" href="#0"
			onClick={() => onEditHandler()}
			>
				{
					read===false?x:Edit
				}
			</td>
			<td
			style={{cursor: 'pointer'}}
			className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" href="#0" 
			>
				Remove
			</td>
		</div>
		</>
	);
}

export default Row;