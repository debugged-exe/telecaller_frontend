import React,{useState, useEffect} from 'react';
import Table from '../Table/Table.js';
import Modal from 'react-modal';
import LogTable from '../LogTable/LogTable.js';
import BatchTable from '../BatchTable/BatchTable.js';
import './Admin.css';
Modal.setAppElement('#root');
const Admin = () => {

	const leadDataHeader = [
		'LeadId',
		'Username',
		'LeadName',
		'LeadContact',
		'WhatsApp Number',
		'Account Opening Number',
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

	const logDataHeader = [
		'Username',
		'Telecaller Id',
		'Handover Count'
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
			fetch('https://frozen-river-89705.herokuapp.com/register', {
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
		fetch('https://frozen-river-89705.herokuapp.com/admin/show', {
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

    const [popPayState, setPopPayState] = useState('none');
    const [teleId, setTeleId] = useState('');
    const [logContentArray, setLogContentArray] = useState([]);

    const setTeleIdField = (event) => {
    	setTeleId(event.target.value);
    }

	const setPopPayStateField = () => {
        if(popPayState==='none')
        {
            setPopPayState('block');
        }
        else
        {
        	setPopPayState('none')
        	setTeleId('')
        	setLogContentArray([])
        }
    }

    const [popBatch, setPopBatch] = useState('none')
    const setPopBatches = () => {
    	if(popBatch==='none')
    	{
    		setPopBatch('block')
    	}
    	else
    	{
    		setPopBatch('none')
    	}
    }

    const fetchBatch = () => {
    	fetch('https://frozen-river-89705.herokuapp.com/admin/batch/fetch', {
    			method: 'post',
    			headers: {'Content-Type': 'application/json'},
    			body: JSON.stringify({
    				batch: batch
    			})
    		})
    		.then(response => response.json())
    		.then(resp => {
    			if(resp!=='fail')
    			{
    				setBatchContentArray(resp)
    			}
    			else
    			{
    				console.log('Fetch call to batches failed')
    			}
    		})
    		.catch(err => console.log(err))
    }

    const batchDataHeader = [
    	'LeadId',
    	'LeadName',
    	'LeadContact',
    	'WhatsApp Number',
		'Account Opening Number',
		'City',
		'Knowledge',
		'Demat',
		'Broker',
		'Preffered Language'
    ]

    const [batchContentArray, setBatchContentArray] = useState([]);

    const [batch, setBatch] = useState('current')
    const changeBatch = () => {
    	if(batch==='current')
    	{
    		setBatch('next')
    	}
    	else
    	{
    		setBatch('current')
    	}
    }

    const onShowDetails = () => {
    	fetch('https://frozen-river-89705.herokuapp.com/admin/log', {
    		method: 'post',
    		headers: {'Content-Type': 'application/json'},
    		body: JSON.stringify({
    			teleId: teleId
    		})
    	})
    	.then(response => response.json())
    	.then(resp => {
    		if (resp[0].username) {
    			setLogContentArray(resp)
    		}
    		else if(resp==='Incorrect Submission')
    		{
    			alert('Incorrect submission')
    		}
    	})
    	.catch(err => console.log(err))
    }

    const batchHandler = (event) => {
    	const name = event.target.getAttribute('name');
    	fetch('https://frozen-river-89705.herokuapp.com/admin/batch/modify', {
    		method: 'post',
    		headers: {'Content-Type': 'application/json'},
    		body: JSON.stringify({
    			name: name
    		})
    	})
    	.then(response => response.json())
    	.then(resp => {
    		if(resp==='Success')
    		{
    			alert('Success')
    			fetchBatch()
    		}
    	})
    	.catch(err => {
    		console.log(err)
    		alert('OOPs...something went wrong.Please try again.')
    	})
    }

    useEffect(() => {
    	fetchBatch()
    }, [batch])


	const [setPreview,setPreviewState] = useState(false);


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

{/*-------------- PopUp fpr Payment CheckOut ----------------------------*/}
			<div id='pop-up' className='bg-white shadow-4 pop-up-payment-checkout' style={{display: `${popPayState}`, zIndex: '1'}}>
                <a 
                onClick={() => setPopPayStateField()} 
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2" 
                href="#0">
                    X
                </a>
                <div style={{height:'100%'}} className='flex justify-center items-center flex-column'>
                    <h2>TELECALLER LOGS</h2>
                    <div>
						<input
						className="pv1 ma2"
						autoComplete="blej"
						onChange={(event) => setTeleIdField(event)} 
						placeholder='Enter Telecaller name'
						/>
						<span 
						class="f6 link dim ph3 pv2 mb2 dib white br2 bg-dark-blue"
						onClick = {() => onShowDetails()}
						>
						ShowDetails
						</span>
					</div>
					<LogTable headerArray={logDataHeader} ContentArray={logContentArray} />
                </div>
            </div>

{/* ---------------------------------------------------- */}


{/*-------------- PopUp fpr Batches ----------------------------*/}
			<div id='pop-up' className='bg-white shadow-4 pop-up-batches' style={{display: `${popBatch}`, zIndex: '1'}}>
                <a 
                onClick={() => setPopBatches()} 
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2">
                    X
                </a>
                <div style={{height:'100%'}} className='flex justify-center items-center flex-column'>
                	<hr style={{width:'99%', padding: '1px', backgroundColor: 'black'}}/>
                    <h2>BATCHES</h2>
                    <hr style={{width:'99%', padding: '1px', backgroundColor: 'black'}}/>
                    <div className="flex justify-center items-center">
	                    <h3 
	                    className={`ma2 pa2 f4 b tc pointer ${batch==='current'?'active1':'effect1 effect1-left'}`}
	                    onClick={() => changeBatch()}>
	                    Current
	                    </h3>
	                    <h3 
	                    className={`ma2 pa2 f4 b tc pointer ${batch==='next'?'active1':'effect1 effect1-left'}`}
	                    onClick={() => changeBatch()}>
	                    Next
	                    </h3>
					</div>
					<BatchTable headerArray={batchDataHeader} ContentArray={batchContentArray} />
					<div className="flex">
						<div 
						name={batch} 
						className="pointer f6 link dim ph3 pv2 mb2 dib white br2 bg-dark-blue mh2"
						onClick={(event) => batchHandler(event)}>
						{batch==='current'?'Clear Batch':'Transfer to Current'}
						</div>
					</div>
					
                </div>
            </div>

{/* ---------------------------------------------------- */}

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
		                <div className="flex">
			                <div
			                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
			                href="#0"
			                onClick={() => setPopStateField()}>
			                Register New Telecallers            
			            	</div>
			                <div
			                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
			                href="#0"
			                onClick={() => setPopPayStateField()}>
			                Check Telecaller Logs            
			            	</div>
			            	<div
			                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
			                onClick={() => setPopBatches()}>
			                Check Batches    
			            	</div>
			            	<div
			                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
			                onClick={() => setPreviewState(true)}>
			                Preview    
			            	</div>
							<Modal isOpen={setPreview}>
			            		<div
			                	className="flex justify-end">
								<p
			                	className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer flex justify-end items-center" 
			                	onClick={() => setPreviewState(false)}
								>X</p> 
			            		</div>
								<h1>HEllo Modal</h1>
								<p>Modal Body</p>
							</Modal>
		            	</div>
					</div>
				</div>
		</div>
	
	);
}

export default Admin;