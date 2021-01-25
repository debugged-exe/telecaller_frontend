import React,{useState} from 'react';
import Table from '../Table/Table.js';
import './Admin.css';

const Admin = () => {

	const leadDataHeader = [
		'LeadId',
		'Username',
		'First Status',
		'Second Status',
		'Hand-Over Status',
		'Update After Hand-Over',
        'LeadName',
        'LeadContact',
        'City',
        'Knowledge', 
        'Demat',
        'Broker' ,
        'Preffered Language',
        'Coded'
	]

	const [leadData, setLeadData] = useState([
			{
				lead_id: '123',
				username: 'Tejas',
				first_status: '',
				second_status: '',
				handover: '',
				updateHandover: '',
				lead_name: 'Hansa',
				lead_contact: '9764661522',
				city: 'Pune',
				knowledge: 'Yes',
				demat: 'No',
				broker: '',
				preffered_lang: 'Marathi',
				coded: ''
			}
		])

	return(
		<div className="admin-container overflow-auto">
			<div className='flex justify-center items-center flex-column'>
				<div>
                    <select>
                        <option value="*">--Select--</option>
                        <option value='*'>All</option>
                        <option value='no'>Unassigned</option>
                        <option value='Sryes'>Assigned to Sr Caller</option>
                        <option value='Jryes'>Assigned to Jr Caller</option>
                        <option value="Handed Over">IsHandedOver(Y)</option>
                        <option value="Not Handed Over">IsHandedOver(N)</option>
                    </select>
                    <div 
                    className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" href="#0" 
                    >
                    Show Data
                    </div>
                </div>
                <Table headerArray={leadDataHeader} ContentArray={leadData} />
			</div>
		</div>
	);
}

export default Admin;