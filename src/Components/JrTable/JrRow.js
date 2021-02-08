import React,{useState} from 'react';
import './JrRow.css';

const JrRow = ({rowObject, onRefresh}) => {
	const {lead_id, lead_phone_number, handoverstatus, call_status_1, call_status_2} = rowObject;
	var disable;

	if (handoverstatus==='Handed') {
		disable=true;
	}
	else
	{
		disable=false;
	}

	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	const [status1, setStatus1] = useState(call_status_1)
	const [status2, setStatus2] = useState(call_status_2)

	const status1Handler = (event) => {
		setStatus1(event.target.value);
	}

	const status2Handler = (event) => {
		setStatus2(event.target.value);
	}

	const onChange = (event) => {
		const {value, name} = event.target;
		if(name==='call_status_1')
		{
			setStatus1(value);
		}
		else
		{
			setStatus2(value);
		}
	}

	const onSubmit = () => {
		if(handoverstatus!=='Handed')
		{
			fetch('http://localhost:3001/jr/update', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            	lead_phone_number: lead_phone_number,
                call_status_1: status1,
                call_status_2: status2
            })
	        })
	        .then(response => response.json())
	        .then(resp => {
	            if (resp==='Success') {
	            	alert('Status updated successfully.')
	            	onRefresh();
	            }
	            else
	            {
	            	alert('OOps something went wrong.Please try again.')
	            }
	        })
	        .catch(err => console.log(err))
		}
	}

	const [read, setRead] = useState(true)

	const onEditHandler = () => {
		if(handoverstatus!=='Handed')
		{
			if(read===true)
			{
				setRead(false)
			}
			else
			{
				setRead(true)
			}
		}
	}

	const x = 'Done'
	const Edit = 'Edit'

	const onHandover = () => {
		if(handoverstatus!=='Handed')
		{
			fetch('http://localhost:3001/jr/handover', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            	lead_id: lead_id,
            	lead_phone_number: lead_phone_number
            })
	        })
	        .then(response => response.json())
	        .then(resp => {
	            if (resp==='Success') {
	            	alert('Status updated successfully.Refresh to view changes.')
	            }
	            else
	            {
	            	alert('OOps something went wrong.Please try again.')
	            }
	        })
	        .catch(err => console.log(err))
		}
	}

	return(
		<>
		{
			elementArray.map((item,index) => {
				if(index===0 || index===1 || index===2)
				{
					return(
						<td key={index} className={`${handoverstatus==='Handed'?'bg-moon-gray':null} pv3 pr3 bb b--black-20`}>{item}</td>
					);
				}
				else if(index===3)
				{
					return(
						<td key={index} className={`${handoverstatus==='Handed'?'bg-moon-gray':null} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="call_status_1" 
							autoComplete='blej'
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							disabled={disable}/>
						</td>
					);
				}
				else if(index===4)
				{
					return(
						<td key={index} className={`${handoverstatus==='Handed'?'bg-moon-gray':null} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="call_status_2" 
							autoComplete='blej' 
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							disabled={disable}/>
						</td>
					);
				}
				else
				{
					return(
						<td key={index} className={`${handoverstatus==='Handed'?'bg-moon-gray':null} pv3 pr3 bb b--black-20`}>
							{item}
						</td>
					);
				}
			})
		}
		<div className={`${handoverstatus==='Handed'?'bg-moon-gray':null} flex`}>
			<td
			style={{cursor: 'pointer'}}
			className={`${handoverstatus==='Handed'?'bg-moon-gray black':'bg-dark-blue white'} f6 link dim ph3 pv2 mb2 dib br2 ma2`} href="#0"
			onClick={() => onEditHandler()}
			>
				{
					read===false?x:Edit
				}
			</td>
			<td
			style={{cursor: 'pointer'}}
			className={`${handoverstatus==='Handed'?'bg-moon-gray black':'bg-dark-blue white'} f6 link dim ph3 pv2 mb2 dib br2 ma2`}
			href="#0"
			onClick = {() => onSubmit()} 
			>
				UpdateStatus
			</td>
			<td
			style={{cursor: 'pointer'}}
			className={`${handoverstatus==='Handed'?'bg-moon-gray black':'bg-dark-blue white'} f6 link dim ph3 pv2 mb2 dib br2 ma2`} href="#0" 
			onClick = {() => onHandover()} 
			>
				Handover
			</td>
		</div>
		</>
	);
}

export default JrRow;