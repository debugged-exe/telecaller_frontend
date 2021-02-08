import React,{useState} from 'react';
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
	const [call_status_1, setStatus1] = useState(rowObject.call_status_1)
	const [call_status_2, setStatus2] = useState(rowObject.call_status_2)
	const [updatehandover, setUpdateHandover] = useState(rowObject.updatehandover)
	const [lead_city, setLeadCity] = useState(rowObject.lead_city)
	const [knowledge, setKnowledge] = useState(rowObject.prior_knowledge)
	const [dmat_acc, setDmat_acc] = useState(rowObject.dmat_acc)
	const [broker, setBroker] = useState(rowObject.broker)
	const [preferred_lang, setLanguage] = useState(rowObject.preferred_lang)

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
	}

	const onSave = () => {
		fetch('http://localhost:3001/admin/update', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                username: username,
                lead_name: lead_name,
                lead_phone_number: rowObject.lead_phone_number,
                call_status_1: call_status_1,
                call_status_2: call_status_2,
                updatehandover: updatehandover,
                lead_city: lead_city,
                prior_knowledge: knowledge,
                dmat_acc: dmat_acc,
                broker_name: broker,
                preferred_lang: preferred_lang 
                })
             })
	        .then(response => response.json())
	        .then(resp => {
	       		if (resp==='Success') {
	       			alert('Success')
	       			showHandler()
	       		}
	       		else
	       		{
	       			alert('OOPPSS...something is wrong')
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

	return(
		<>
		{
			elementArray.map((item,index) => {
				if(index===0 || index===3)
				{
					return(
						<td key={index} className="pv3 pr4 bb b--black-20">{item}</td>
					);
					
				}
				else if(index!==elementArray.length-1)
				{
					return(
						<td key={index} className="pv3 pr3 bb b--black-20">
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
						<td key={index} className="pv3 pr3 bb b--black-20">
							<input 
							name={keyArr[index]} 
							type='checkbox' 
							autoComplete='blej' 
							value={item}
							/>
						</td>
					);
				}
			})
		}
		<div className="flex">
			<td
			style={{cursor: 'pointer'}}
			className="f6 tc link dim ph3 pv2 mb2 dib br2 ma2"
			>
			{`Leadno:${lead_id}`}
			</td>
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
			className="f6 tc link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" href="#0" 
			onClick={() => onSave()}>
				SaveChanges
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