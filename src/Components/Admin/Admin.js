import React, { useState, useEffect } from 'react';
import Table from '../Table/Table.js';
import LogTable from '../LogTable/LogTable.js';
import BatchTable from '../BatchTable/BatchTable.js';
import TeamViewer from './TeamViewer/TeamViewer.js';
import JrCallerViewer from './JrCallerViewer/JrCallerViewer.js';
import JrCountViewer from './JrCountViewer/JrCountViewer.js';
import './Admin.css';

const Admin = () => {

	const SrcallerArray = [
		{
			username: 'Tejas',
			telecaller_id: 'SR001'
		},
		{
			username: 'Soham',
			telecaller_id: 'SR002'
		},
		{
			username: 'Tanmay',
			telecaller_id: 'SR003'
		}
	]

	const leadDataHeader = [
		'LeadId',
		'Assigned To',
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
		'Broker',
		'Preffered Language',
		'Microsoft Id',
		'Coded',
		'Payment'
	]

	const logDataHeader = [
		'Username',
		'Telecaller Id',
		'Handover Count'
	]

	const [leadData, setLeadData] = useState([])

	const [filter, setFilter] = useState('*')
	const [languageFilter, setLanguageFilter] = useState('Marathi')

	const setFilterField = (event) => {
		setFilter(event.target.value);
	}

	const setLanguageFilterField = (event) => {
		setLanguageFilter(event.target.value);
	}

	const [username, setUsername] = useState('')
	const [usernameFlag, setUsernameFlag] = useState(false)
	const [usernameErr, setUsernameErr] = useState('')

	const setUsernameField = (event) => {
		setUsername(event.target.value)
	}

	const usernameValidate = () => {
		if (username === '') {
			setUsernameFlag(false)
			setUsernameErr('Set username field')
		}
		else {
			setUsernameFlag(true)
			setUsernameErr('')
		}
	}

	// ---------------------------Prefferrred Language Validations----------------------------------------------
	const [language, setLanguage] = useState('')
	const [languageFlag, setLanguageFlag] = useState(false)
	const [languageErr, setLanguageErr] = useState('')

	const setLanguageField = (event) => {
		setLanguage(event.target.value)
	}

	const languageValidate = () => {
		if (language === 'none') {
			setLanguageFlag(false)
			setLanguageErr('Set TeleCaller Language')
		}
		else {
			setLanguageFlag(true)
			setLanguageErr('')
		}
	}
	// -----------------------------------------------------------------------------
	const [password, setPassword] = useState('')
	const [passwordFlag, setPasswordFlag] = useState(false)
	const [passwordErr, setPasswordErr] = useState('')

	const setPasswordField = (event) => {
		setPassword(event.target.value)
	}

	const passwordValidate = () => {
		if (password === '') {
			setPasswordFlag(false)
			setPasswordErr('Set password field')
		}
		else {
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
		if (telecaller_id === '') {
			setTelecallerFlag(false)
			setTelecallerErr('Set Telecaller Id')
		}
		else {
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
		if (des === 'none') {
			setDesFlag(false)
			setDesErr('Set Designation of caller')
		}
		else if (des !== 'JrCaller') {
			setAssigned('')
			document.getElementById('assigned_to').value = ''
			console.log(document.getElementById('assigned_to').value)
		}
		{
			setDesFlag(true)
			setDesErr('')
		}
	}

	const [assigned, setAssigned] = useState('')
	const [assignedFlag, setAssignedFlag] = useState(false)
	const [assignedErr, setAssignedErr] = useState('')

	const setAssignedField = (event) => {
		setAssigned(event.target.value);
	}

	const assignedValidate = () => {
		if (des === 'JrCaller') {
			console.log(des)
			if (assigned === '') {
				console.log(assigned)
				setAssignedFlag(false)
				setAssignedErr('Assigned to field compulsary.')
			}
			else {
				setAssignedFlag(true)
				setAssignedErr('')
			}
		}
		else {
			setAssignedFlag(true)
			setAssignedErr('')
		}
	}

	const addTelecaller = () => {
		if (assigned === '' && des !== 'JrCaller') {
			setAssignedFlag(true)
			setAssignedErr('')
		}
		if (
			usernameFlag &&
			passwordFlag &&
			telecallerFlag &&
			languageFlag &&
			desFlag &&
			assignedFlag
		) {
			fetch('https://frozen-river-89705.herokuapp.com/register', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: username,
					password: password,
					telecaller_id: telecaller_id,
					language: language,
					des: des,
					assigned: assigned
				})
			})
				.then(response => response.json())
				.then(resp => {
					if (resp === 'Registered') {
						alert('Telecaller registered successfully')
					}
					else if (resp === 'Not Unique.') {
						alert('Looks like telecaller with same Telecaller Id is already registered.')
					}
					else {
						alert('OOPs....something went wrong.Please try again.')
					}
				})
				.catch(err => console.log(err))
		}
		else {
			usernameValidate()
			passwordValidate()
			telecallerValidate()
			languageValidate()
			desValidate()
		}
	}

	const showHandler = () => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/show', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				filter: filter,
				languageFilter:languageFilter
			})
		})
			.then(response => response.json())
			.then(resp => {
				if (resp !== 'Unable to fetch') {
					setLeadData(resp)
				}
				else {
					alert('Unable to fetch.Please try again.')
				}
			})
			.catch(err => console.log(err))
	}

	const [popState, setPopState] = useState('none');

	const setPopStateField = () => {
		if (popState === 'none') {
			setPopState('block');
		}
		else {
			setPopState('none')
		}
	}

	const [popPayState, setPopPayState] = useState('none');
	
	const setPopPayStateField = () => {
		if (popPayState === 'none') {
			fetchCallers();
			setPopPayState('block');
		}
		else {
			setPopPayState('none')
		}
	}

	const [popBatch, setPopBatch] = useState('none')
	const setPopBatches = () => {
		if (popBatch === 'none') {
			setPopBatch('block')
		}
		else {
			setPopBatch('none')
		}
	}

	const fetchBatch = () => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/batch/fetch', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				batch: batch
			})
		})
			.then(response => response.json())
			.then(resp => {
				if (resp !== 'fail') {
					setBatchContentArray(resp)
				}
				else {
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
		if (batch === 'current') {
			setBatch('next')
		}
		else {
			setBatch('current')
		}
	}

	const batchHandler = (event) => {
		const name = event.target.getAttribute('name');
		fetch('https://frozen-river-89705.herokuapp.com/admin/batch/modify', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: name
			})
		})
			.then(response => response.json())
			.then(resp => {
				if (resp === 'Success') {
					alert('Success')
					fetchBatch()
				}
			})
			.catch(err => {
				console.log(err)
				alert('OOPs...something went wrong.Please try again.')
			})
	}

	const [srCaller, setSrCaller] = useState([])

	const fetchSrCallers = () => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/srcaller')
			.then(response => response.json())
			.then(resp => {
				if (resp[0].username) {
					setSrCaller(resp);
				}
			})
			.catch(err => {
				console.log(err)
			})
	}

	const [leadNameFilter, setLeadNameFilter] = useState('')

	const fetchByName = () => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/name', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				leadNameFilter: leadNameFilter
			})
		})
			.then(response => response.json())
			.then(resp => {
				if (resp !== 'Unable to fetch') {
					setLeadData(resp)
				}
				else if (resp === 'Incorrect submission') {
					alert(resp);
				}
				else {
					alert('Unable to fetch.Please try again.')
				}
			})
			.catch(err => {
				console.log(err)
				alert('OOPs...something went wrong.Please try again.');
			})
	}

	const TeamHeader = [
		'Username',
		'TeleCaller Id',
		'Preffered Language',
		'Designation'
	];

	const [teamLang, setTeamLang] = useState('none');

	const setTeamLangField = (event) => {
		setTeamLang(event.target.value);
	}

	const [caller, setCaller] = useState([]);

	const fetchCallers = () => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/caller')
		.then(response => response.json())
		.then(resp => {
			if(resp[0].username)
			{
				setCaller(resp);
			}
		})
		.catch(err => {
			console.log(err)
			alert('Failed to fetch teams');
		})
	}

	const JrHeader = [
		'Username',
		'TeleCaller Id',
		'Preffered Language',
		'Designation',
		'Assigned to'
	]

	const [jrcaller, setJrCaller] = useState([]);

	const setJrCallerArray = (telecaller_id) => {
		let tempArray;
		if (caller.length>0) {
			tempArray = caller.filter(item => item.assigned_to===telecaller_id);
			setJrCaller(tempArray);
		}
		else
		{
			setJrCaller([]);
		}
	}

	const setJrLog = (telecaller_id) => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/jrlog', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				telecaller_id: telecaller_id
			})
		})
		.then(response => response.json())
		.then(resp => {
			if(resp !== 'Unable to fetch')
			{
				setLeadData(resp);
				setPopPayState('none');
			}
			else
			{
				alert('Unable to fetch jr caller logs');
			}
		})
		.catch(err => {
			console.log(err);
		})
	}

	const countHeader = [
		'Telecaller Id',
		'Status1 Count',
		'Status2 Count',
		'Both Status Count',
		'Handover Count',
	]

	const [count, setCount] = useState([]);

	const fetchJrCount = (telecaller_id) => {
		fetch('https://frozen-river-89705.herokuapp.com/admin/jrcount', {
			method: 'post',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({
				telecaller_id: telecaller_id
			})
		})
		.then(response => response.json())
		.then(resp => {
			setCount(resp);
		})
		.catch(err => {
			console.log(err)
			alert('Unable to fetch count details.');
		})
	}

	useEffect(() => {
		fetchBatch()
		fetchSrCallers()
	}, [batch])

	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyCenter: 'center', itemsCenter: 'flex-end' }}>
			<div id='pop-up' className='bg-white shadow-4 pop-up' style={{ display: `${popState}` }}>
				<div
					onClick={() => setPopStateField()}
					className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2"
				>
					X
                </div>
				<div style={{ height: '100%' }} className='flex justify-center items-center flex-column'>
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

					{/* ------------------------------Language Section------------------------------------------- */}
					<div>
						<p>Select Language</p>
						<select
							style={{ width: '185px' }}
							onChange={(event) => setLanguageField(event)}
							onBlur={() => languageValidate()}
						>
							<option value='none'>None</option>
							<option value='Marathi'>Marathi</option>
							<option value='Hindi'>Hindi</option>
						</select>
					</div>
					<div className="f4 red">{languageErr}</div>
					{/* -------------------------------------------------------------------------------------------------- */}

					<div>
						<p>Designation</p>
						<select
							style={{ width: '185px' }}
							onChange={(event) => setDesField(event)}
							onBlur={() => desValidate()}
						>
							<option value='none'>None</option>
							<option value='SrCaller'>Senior Caller</option>
							<option value='JrCaller'>Junior Caller</option>
						</select>
					</div>

					<div className="flex flex-column justify-center items-center ma2 pa3" style={{ display: `${des === 'JrCaller' ? 'flex' : 'none'}` }}>
						<p>Assigned to:</p>
						<div className="flex justify-center items-center pa2">
							<input
								id="assigned_to"
								type="text"
								autoComplete="blej"
								placeholder='Enter SrCaller Id'
								className='ma1'
								onChange={(event) => setAssignedField(event)}
								onBlur={() => assignedValidate()}
							></input>
							<select>
								<option value=''>Select SrCaller</option>
								{
									srCaller
										.filter(item => item.preferred_lang === language)
										.map((item) => {
											return (
												<option value={item.telecaller_id}>{`${item.username}(${item.telecaller_id})/${item.preferred_lang}`}</option>
											);
										})
								}
							</select>
							<div className="f4 red">{assignedErr}</div>
						</div>
					</div>
					<div className="f4 red">{telecallerErr}</div>

					<div className="f4 red">{desErr}</div>

					<div
						style={{ cursor: "pointer" }}
						className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2"
						onClick={() => addTelecaller()}
					>
						Add Telecaller
                    </div>
				</div>
			</div>

			{/*-------------- PopUp fpr Payment CheckOut ----------------------------*/}
			<div id='pop-up' className='bg-white shadow-4 pop-up-payment-checkout' style={{ display: `${popPayState}`, zIndex: '1' ,width:'80vw'}}>
				<div
					onClick={() => setPopPayStateField()}
					className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2"
				>
					X
                </div>
				<div style={{ height: '100%' }} className='flex justify-center items-center flex-column'>
					<h2>TELECALLER LOGS</h2>
					<div>
						<p>Select Language</p>
						<select
							style={{ width: '185px' }}
							onChange={(event) => setTeamLangField(event)}
						>
							<option value='none'>None</option>
							<option value='Marathi'>Marathi</option>
							<option value='Hindi'>Hindi</option>
						</select>
					</div>
					<TeamViewer 
					header={TeamHeader} 
					content={caller} 
					teamLang={teamLang} 
					setJrCallerArray={setJrCallerArray}
					/>
					<div className="jrcaller-drawer">
						<JrCallerViewer 
						header={JrHeader} 
						content={jrcaller} 
						setJrLog={setJrLog}
						fetchJrCount={fetchJrCount}
						/>
					</div>
					<div className="count-drawer">
						<JrCountViewer header={countHeader} content={count} />
					</div>
				</div>
			</div>

			{/* ---------------------------------------------------- */}


			{/*----------------- PopUp fpr Batches ----------------------------*/}
			<div id='pop-up' className='bg-white shadow-4 pop-up-batches' style={{ display: `${popBatch}`, zIndex: '1' }}>
				<div
					onClick={() => setPopBatches()}
					className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2">
					X
                </div>
				<div style={{ height: '100%' }} className='flex justify-center items-center flex-column'>
					<hr style={{ width: '99%', padding: '1px', backgroundColor: 'black' }} />
					<h2>BATCHES</h2>
					<hr style={{ width: '99%', padding: '1px', backgroundColor: 'black' }} />
					<div className="flex justify-center items-center">
						<h3
							className={`ma2 pa2 f4 b tc pointer ${batch === 'current' ? 'active1' : 'effect1 effect1-left'}`}
							onClick={() => changeBatch()}>
							Current
	                    </h3>
						<h3
							className={`ma2 pa2 f4 b tc pointer ${batch === 'next' ? 'active1' : 'effect1 effect1-left'}`}
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
							{batch === 'current' ? 'Clear Batch' : 'Transfer to Current'}
						</div>
					</div>

				</div>
			</div>

			{/* ---------------------------------------------------- */}

			<div className="admin-container overflow-auto">
				<div className='flex justify-center items-center flex-column'>

					<div>
						<select className='mr2'
							onChange={(event) => setLanguageFilterField(event)}
						>
							<option value="none">--Select Language--</option>
							<option value='Marathi'>Marathi</option>
							<option value='Hindi'>Hindi</option>
						</select>
						<select
							onChange={(event) => setFilterField(event)}
						>
							<option value="*">--Select Filter--</option>
							<option value='*'>All</option>
							<option value='no'>Unassigned</option>
							<option value='Jryes'>Assigned to Jr Caller</option>
							<option value="Handed Over">IsHandedOver(Y)</option>
							<option value="Not Handed Over">IsHandedOver(N)</option>
							<option value="processed">Processed</option>
						</select>
						<div
							className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
							href="#0"
							onClick={() => showHandler()}
						>
							Show Data
		                    </div>
						<div
							className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
							onClick={() => showHandler()}
						>
							Refresh
		                    </div>
					</div>





					<div className="flex justify-center">
						<input
							type="text"
							className="ma2"
							placeholder="Search by telecallerName"
							style={{ width: "190px" }}
							onChange={(event) => setLeadNameFilter(event.target.value)}
						/>
						<div
							className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
							onClick={() => fetchByName()}
						>
							Search
		                	</div>
					</div>
					<div className="unassigned-count flex">
						<div className="h-unassigned b ma2">
							<p>Hindi Unassigned Count: {}</p>
						</div>
						<div className="m-unassigned b ma2">
							<p>Marathi Unassigned Count: {}</p>
						</div>
					</div>
					<Table showHandler={showHandler} headerArray={leadDataHeader} ContentArray={leadData} />
					<div className="flex">
						<div
							className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
							onClick={() => setPopStateField()}>
							Register New Telecallers
			            	</div>
						<div
							className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
							onClick={() => setPopPayStateField()}>
							Check Telecaller Logs
			            	</div>
						<div
							className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer"
							onClick={() => setPopBatches()}>
							Check Batches
			            	</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Admin;