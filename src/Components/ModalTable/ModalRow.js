import React,{useState} from 'react';

const ModalRow = ({rowObject,fetchLogs}) => {
	const {lead_id, lead_phone_number, whatsapp_number, accountopening_number, handoverstatus, call_status_1, call_status_2, updatehandover, coded} = rowObject;

	const [status1, setStatus1] = useState(call_status_1)
	const [status2, setStatus2] = useState(call_status_2)
	const [update, setUpdate] = useState(updatehandover)
	const [whatsapp, setWhatsapp] = useState(whatsapp_number)
	const [accountopening, setAccountOpening] = useState(accountopening_number)

	const onChange = (event) => {
		const {value, name} = event.target;
		if(name==='call_status_1')
		{
			setStatus1(value);
		}
		else if(name==='call_status_2')
		{
			setStatus2(value);
		}
		else if(name==='updatehandover')
		{
			setUpdate(value);
		}
		else if(name==='whatsapp')
		{
			setWhatsapp(value);
		}
		else if(name==='accountopening')
		{
			setAccountOpening(value);
		}
	}

	const [read, setRead] = useState(true)

	const onSubmit = () => {
		fetch('https://frozen-river-89705.herokuapp.com/sr/update', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            	lead_phone_number: lead_phone_number,
                call_status_1: status1,
                call_status_2: status2,
                updatehandover: update,
                whatsapp_number: whatsapp,
                accountopening_number: accountopening
            })
	        })
	        .then(response => response.json())
	        .then(resp => {
	            if (resp==='Success') {
	            	alert('Status updated successfully.')
	            	fetchLogs()
	            }
	            else if(resp==='Not Unique')
	       		{
	       			alert('The given whatsapp/accountopening number is already registered.Please enter other contact and try again.')
	       		}
	            else
	            {
	            	alert('OOps something went wrong.Please try again.')
	            }
	        })
	        .catch(err => console.log(err))
	}

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

	const x = 'Done'
	const Edit = 'Edit'

	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	return(
		<>
		{
			elementArray.map((item,index) => {
				if(index>=0 && index<=9 && index!==3 && index!=4)
				{
					return(
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>{item}</td>
					);
				}
				else if(index===3)
				{
					return(	
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="whatsapp" 
							autoComplete='blej'
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							/>
						</td>
					);
				}
				else if(index===4)
				{
					return(	
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="accountopening" 
							autoComplete='blej'
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							/>
						</td>
					);
				}
				else if(index===10)
				{
					return(
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="call_status_1" 
							autoComplete='blej'
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							/>
						</td>
					);
				}
				else if(index===11)
				{
					return(
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="call_status_2" 
							autoComplete='blej' 
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							/>
						</td>
					);
				}
				else if(index===12)
				{
					return(
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>
							<input 
							type='text' 
							name="updatehandover" 
							autoComplete='blej' 
							placeholder={`${item}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							/>
						</td>
					);
				}
				else
				{
					return(
						<td key={index} className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} pv3 pr3 bb b--black-20`}>
							{item}
						</td>
					);
				}
			})
		}
		<div className={`${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':(handoverstatus==='Handed'?'bg-moon-gray':null))} flex`}>
			<td
			style={{cursor: 'pointer'}}
			className='bg-dark-blue white f6 link dim ph3 pv2 mb2 dib br2 ma2'
			onClick={() => onEditHandler()}
			>
				{
					read===false?x:Edit
				}
			</td>
			<td
			style={{cursor: 'pointer'}}
			className="bg-dark-blue white f6 link dim ph3 pv2 mb2 dib br2 ma2"
			onClick = {() => onSubmit()} 
			>
				UpdateStatus
			</td>
		</div>
		</>
	);
}

export default ModalRow;