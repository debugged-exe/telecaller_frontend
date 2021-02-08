import React,{useState} from 'react';
import Table from '../Table/Table.js';
import './Admin.css';

const Admin = () => {

	const leadDataHeader = [
		'LeadId',
		'Username',
		'LeadName',
		'LeadContact',
		'First Status',
		'Second Status',
		'Update After Hand-Over',
        'City',
        'Knowledge', 
        'Demat',
        'Broker' ,
        'Preffered Language',
        'Coded'
	]

	const [leadData, setLeadData] = useState([])

	const [filter, setFilter] = useState('*')

	const setFilterField = (event) => {
		setFilter(event.target.value);
	}

	const [username, setUsername] = useState('')
	const [usernameFlag, setUsernameFlag] = useState(false)
	const [usernameErr, setUsernameErr] = useState('')

	const setUsernameField = (event) => {
		setUsername(event.target.value)
	}

	const usernameValidate = () => {
		if(username==='')
		{
			setUsernameFlag(false)
			setUsernameErr('Set username field')
		}
		else
		{
			setUsernameFlag(true)
			setUsernameErr('')
		}
	}

	const [password, setPassword] = useState('')
	const [passwordFlag, setPasswordFlag] = useState(false)
	const [passwordErr, setPasswordErr] = useState('')

	const setPasswordField = (event) => {
		setPassword(event.target.value)
	}

	const passwordValidate = () => {
		if(password==='')
		{
			setPasswordFlag(false)
			setPasswordErr('Set password field')
		}
		else
		{
			setPasswordFlag(true)
			setPasswordErr('')
		}
	}

	const [telecaller_id, setTelecaller] = useState('')
	const [telecallerFlag, setTelecallerFlag] = useState(false)
	const [telecallerErr, setTelecallerErr] = useState('')

	const setTelecallerField = (event) => {
		setTelecaller(event.target.value);
	}

	const telecallerValidate = () => {
		if(telecaller_id==='')
		{
			setTelecallerFlag(false)
			setTelecallerErr('Set Telecaller Id')
		}
		else
		{
			setTelecallerFlag(true)
			setTelecallerErr('')
		}
	}

	const [des, setDes] = useState('none')
	const [desFlag, setDesFlag] = useState(false)
	const [desErr, setDesErr] = useState('')

	const setDesField = (event) => {
		setDes(event.target.value)
	}

	const desValidate = () => {
		if (des==='none') {
			setDesFlag(false)
			setDesErr('Set Designation of caller')
		}
		else
		{
			setDesFlag(true)
			setDesErr('')
		}
	}

	const addTelecaller = () => {
		if(
			usernameFlag &&
			passwordFlag &&
			telecallerFlag &&
			desFlag
		)
		{
			fetch('http://localhost:3001/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                username: username,
                password: password,
                telecaller_id: telecaller_id,
                des: des
                })
             })
	        .then(response => response.json())
	        .then(resp => {
	       		if (resp==='Registered') {
	       			alert('Telecaller registered successfully')
	       		}
	       		else if(resp==='Not Unique.')
	       		{
	       			alert('Looks like telecaller with same Telecaller Id is already registered.')
	       		}
	       		else{
	       			alert('OOPs....something went wrong.Please try again.')
	       		}
	        })
	        .catch(err => console.log(err))
		}
		else
		{
			usernameValidate()
			passwordValidate()
			telecallerValidate()
			desValidate()
		}
	}

	const showHandler = () => {
		fetch('http://localhost:3001/admin/show', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                filter: filter
                })
             })
	        .then(response => response.json())
	        .then(resp => {
	       		if(resp!=='Unable to fetch')
	       		{
	       			setLeadData(resp)
	       		}
	       		else
	       		{
	       			alert('Unable to fetch.Please try again.')
	       		}
	        })
	        .catch(err => console.log(err))
	}

	const [popState, setPopState] = useState('none');

	const setPopStateField = () => {
        if(popState==='none')
        {
            setPopState('block');
        }
        else
        {
        	setPopState('none')
        }
    }

	return(
		<div style={{display: 'flex', flexDirection: 'column', justifyCenter: 'center', itemsCenter: 'flex-end'}}>
			 <div id='pop-up' className='bg-white shadow-4 pop-up' style={{display: `${popState}`}}>
                <a 
                onClick={() => setPopStateField()} 
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" 
                href="#0">
                    X
                </a>
                <div style={{height:'100%'}} className='flex justify-center items-center flex-column'>
                    <h2>Add New Telecaller</h2>
                    <div>
                        <p>New Username</p>
                        <input
                        id="number" 
                        type="text" 
                        autoComplete="blej"
                        onChange={(event) => setUsernameField(event)}
                        onBlur={() => usernameValidate()}
                        />
                    </div>
                    <div className="f4 red">{usernameErr}</div>
                    <div>
                        <p>Password</p>
                        <input
                        id="password"
                        type="password"
                        autoComplete="blej"
                        onChange={(event) => setPasswordField(event)}
                        onBlur={() => passwordValidate()}
                        />
                    </div>
                    <div className="f4 red">{passwordErr}</div>
	                <div>
						<p>Telecaller Id</p>
						<input
						id="telecaller_id"
						type="text"
						autoComplete="blej"
						onChange={(event) => setTelecallerField(event)}
						onBlur={() => telecallerValidate()}
						/>
                    </div>
                    <div className="f4 red">{telecallerErr}</div>
                    <div>
						<p>Designation</p>
						<select 
						style={{width: '185px'}}
						onChange={(event) => setDesField(event)}
						onBlur={() => desValidate()}
						>
							<option value='none'>None</option>
							<option value='SrCaller'>Senior Caller</option>
							<option value='JrCaller'>Junior Caller</option>
						</select>
                    </div>
                    <div className="f4 red">{desErr}</div>
                    <div
                    style={{cursor: "pointer"}}
                    className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" 
                    href="#0"
                    onClick={() => addTelecaller()}
                    >
                    Add Telecaller
                    </div>
                </div>
            </div>
			<div className="admin-container overflow-auto">
					<div className='flex justify-center items-center flex-column'>
						<div>
		                    <select
		                    onChange = {(event) => setFilterField(event)}
		                    >
		                        <option value="*">--Select--</option>
		                        <option value='*'>All</option>
		                        <option value='no'>Unassigned</option>
		                        <option value='Sryes'>Assigned to Sr Caller</option>
		                        <option value='Jryes'>Assigned to Jr Caller</option>
		                        <option value="Handed Over">IsHandedOver(Y)</option>
		                        <option value="Not Handed Over">IsHandedOver(N)</option>
		                    </select>
		                    <div 
		                    className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
		                    href="#0"
		                    onClick = {() => showHandler()} 
		                    >
		                    Show Data
		                    </div>
		                    <div 
		                    className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
		                    href="#0"
		                    onClick = {() => showHandler()} 
		                    >
		                    Refresh
		                    </div>
		                </div>
		                <Table showHandler={showHandler} headerArray={leadDataHeader} ContentArray={leadData} />
		                <div
		                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
		                href="#0"
		                onClick={() => setPopStateField()}>
		                Register New Telecallers            
		            </div>
					</div>
				</div>
		</div>
	
	);
}

export default Admin;