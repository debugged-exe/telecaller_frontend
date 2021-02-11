import React,{useState} from 'react';
import 'tachyons';
import './Row.css';

const Row = ({rowObject, showHandler}) => {
	const {lead_id} = rowObject;
	const keyArr = Object.keys(rowObject);
	const elementArray = []
	Object.keys(rowObject).forEach((key) => {
				elementArray.push(rowObject[key])
			})

	const [read, setRead] = useState(true)
	const [username, setUsername] = useState(rowObject.username)
	const [lead_name, setLeadName] = useState(rowObject.lead_name)
	const [whatsapp_number, setWhatsapp] = useState(rowObject.whatsapp_number)
	const [accountopening_number, setAccountOpening] = useState(rowObject.accountopening_number)
	const [call_status_1, setStatus1] = useState(rowObject.call_status_1)
	const [call_status_2, setStatus2] = useState(rowObject.call_status_2)
	const [updatehandover, setUpdateHandover] = useState(rowObject.updatehandover)
	const [lead_city, setLeadCity] = useState(rowObject.lead_city)
	const [knowledge, setKnowledge] = useState(rowObject.prior_knowledge)
	const [dmat_acc, setDmat_acc] = useState(rowObject.dmat_acc)
	const [broker, setBroker] = useState(rowObject.broker)
	const [preferred_lang, setLanguage] = useState(rowObject.preferred_lang)
	const [coded, setCoded] = useState(rowObject.coded)

	const onChange = (event) => {
		const {value, name} = event.target;
		if(name==='username')
		{
			if(!value)
			{
				return setUsername(rowObject.username)
			}
			setUsername(value)
		}
		else if(name==='lead_name')
		{
			if(!value)
			{
				return setLeadName(rowObject.lead_name)
			}
			setLeadName(value);
		}
		else if(name==='call_status_1')
		{
			if(!value)
			{
				return setStatus1(rowObject.call_status_1)
			}
			setStatus1(value)
		}
		else if(name==='call_status_2')
		{
			if(!value)
			{
				return setStatus2(rowObject.call_status_2)
			}
			setStatus2(value)
		}
		else if(name==='updatehandover')
		{
			if(!value)
			{
				return setUpdateHandover(rowObject.updatehandover)
			}
			setUpdateHandover(value)
		}
		else if(name==='lead_city')
		{
			if(!value)
			{
				return setLeadCity(rowObject.lead_city)
			}
			setLeadCity(value)
		}
		else if(name==='prior_knowledge')
		{
			if(!value)
			{
				return setKnowledge(rowObject.prior_knowledge)
			}
			setKnowledge(value)
		}
		else if(name==='dmat_acc')
		{
			if(!value)
			{
				return setDmat_acc(rowObject.dmat_acc)
			}
			setDmat_acc(value)
		}
		else if(name==='broker_name')
		{
			if(!value)
			{
				return setBroker(rowObject.broker_name)
			}
			setBroker(value)
		}
		else if(name==='preferred_lang')
		{
			if(!value)
			{
				return setLanguage(rowObject.preferred_lang)
			}
			setLanguage(value)
		}
		else if(name==='coded')
		{
			setCoded(value)
		}
		else if(name==='whatsapp_number')
		{
			if(!value)
			{
				return setWhatsapp(rowObject.whatsapp_number)
			}
			setWhatsapp(value);
		}
		else if(name='accountopening_number')
		{
			if (!value) {
				return setAccountOpening(rowObject.accountopening_number)
			}
			setAccountOpening(value);
		}
	}

	const onCheck = (event) => {
		const {name, checked} = event.target;
		if (name==='whatsapp') 
		{
			if(checked)
			{
				setWhatsapp(rowObject.lead_phone_number)
			}
			else{
				setWhatsapp(rowObject.whatsapp_number)
			}
		}
		else if (name==='accountopening')
		{
			if (checked) 
			{
				setAccountOpening(rowObject.lead_phone_number)
			}
			else{
				setAccountOpening(rowObject.accountopening_number)
			}
		}
	}

	const onSave = () => {
		fetch('http://localhost:3001/admin/update', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                username: username,
                lead_name: lead_name,
                lead_phone_number: rowObject.lead_phone_number,
                whatsapp_number: whatsapp_number,
                accountopening_number: accountopening_number,
                call_status_1: call_status_1,
                call_status_2: call_status_2,
                updatehandover: updatehandover,
                lead_city: lead_city,
                prior_knowledge: knowledge,
                dmat_acc: dmat_acc,
                broker_name: broker,
                preferred_lang: preferred_lang,
                coded: coded
                })
             })
	        .then(response => response.json())
	        .then(resp => {
	       		if (resp==='Success') {
	       			alert('Success')
	       			showHandler()
	       		}
	       		else if(resp==='Not Unique')
	       		{
	       			alert('The given whatsapp/accountopening number is already registered.Please enter other contact and try again.')
	       		}
	        })
	        .catch(err => {
	        	console.log(err)
	        	alert('OOPSS...something went wrong please try again.')
	        })
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

	return(
		<>
		{
			elementArray.map((item,index) => {
				if(index===0 || index===3)
				{
					return(
						<td key={index} className={`pv3 pr4 bb b--black-20 ${coded==='coded'?'bg-green white fw6':(coded==='notCoded'?'bg-red white fw6':null)}`}>{item}</td>
					);
					
				}
				else if(index===4)
				{
					return(
						<td key={index} className={`pv3 pr4 bb b--black-20 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':null)}`}>
							<input 
							name='whatsapp' 
							type='checkbox'
							autoComplete='blej'  
							disabled={read}
							onClick={(event) => onCheck(event)}
							/>
							<span style={{padding: '2px'}} className={`${coded!=='null'?'fw6 white':null}`}>Same as Lead Contact</span>
							<input 
							name={keyArr[index]} 
							type='text' 
							autoComplete='blej' 
							placeholder={`${whatsapp_number}`} 
							readOnly={read}
							onChange={(event) => onChange(event)}
							/>
						</td>
					);
				}
				else if(index===5)
				{
					return(
							<td key={index} className={`pv3 pr4 bb b--black-20 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':null)}`}>
								<input 
								name='accountopening' 
								type='checkbox'
								autoComplete='blej'  
								disabled={read}
								onClick={(event) => onCheck(event)}
								/>
								<span style={{padding: '2px'}} className={`${coded!=='null'?'fw6 white':null}`}>Same as Lead Contact</span>
								<input 
								name={keyArr[index]} 
								type='text' 
								autoComplete='blej' 
								placeholder={`${accountopening_number}`} 
								readOnly={read}
								onChange={(event) => onChange(event)}
								/>
							</td>
						);	
				}
				else if(index!==elementArray.length-1)
				{
					return(
						<td key={index} className={`pv3 pr4 bb b--black-20 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':null)}`}>
							<input 
							name={keyArr[index]} 
							type='text' 
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
						<td key={index} className={`pv3 pr4 bb b--black-20 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':null)}`}>
							<select
							name={keyArr[index]}  
							autoComplete='blej'
							value={coded}
							disabled={read}
							onChange={(event) => onChange(event)}
							>
								<option value='null'>Null</option>
								<option value='coded'>Coded</option>
								<option value='notCoded'>Not Coded</option>
							</select>
						</td>
					);
				}
			})
		}
		<div className="flex">
			<td
			style={{cursor: 'pointer'}}
			className={`f6 tc ph3 pv2 mb2 dib br2 ma2 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':'bg-white')}`}
			>
			{`Leadno:${lead_id}`}
			</td>
			<td
			style={{cursor: 'pointer'}}
			className={`f6 tc link dim ph3 pv2 mb2 white dib br2 ma2 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':'bg-dark-blue')}`}
			onClick={() => onEditHandler()}
			>
				{
					read===false?x:Edit
				}
			</td>
			<td
			style={{cursor: 'pointer'}}
			className={`f6 tc link dim ph3 pv2 mb2 white dib br2 ma2 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':'bg-dark-blue')}`}
			onClick={() => onSave()}>
				SaveChanges
			</td>
			<td
			style={{cursor: 'pointer'}}
			className={`f6 tc link dim ph3 pv2 mb2 white dib br2 ma2 ${coded==='coded'?'bg-green':(coded==='notCoded'?'bg-red':'bg-dark-blue')}`}
			>
				Remove
			</td>
		</div>
		</>
	);
}

export default Row;