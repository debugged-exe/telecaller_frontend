import React,{useState, useEffect} from 'react';
import JrTable from '../JrTable/JrTable.js';

const JrCaller = ({user}) => {

    const {username, telecaller_id} = user;

    const leadDataHeader = [
        'LeadId',
        'LeadName',
        'LeadContact',
        'Status 1',
        'Status 2',
        'Handedover Status',
        ''
    ]

    const [leadData, setLeadData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/jr/fetch/old', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                telecaller_id: telecaller_id
            })
        })
        .then(response => response.json())
        .then(resp => {
            if(resp!=='Unable to fetch' && resp[0].lead_id)
            {
                setLeadData(resp)
            }
            else
            {
                alert('OOPS...something went wrong in fetching old leads.')
            }
        })
        .catch(err => console.log(err))
    }, []);

    const onRefresh = () => {
        fetch('http://localhost:3001/jr/fetch/old', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                telecaller_id: telecaller_id
            })
        })
        .then(response => response.json())
        .then(resp => {
            if(resp!=='Unable to fetch' && resp[0].lead_id)
            {
                setLeadData(resp)
            }
            else
            {
                alert('OOPS...something went wrong in fetching old leads.')
            }
        })
        .catch(err => console.log(err));
    }

    const onFetch = () => {
        fetch('http://localhost:3001/jr/fetch/new', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                telecaller_id: telecaller_id
            })
        })
        .then(response => response.json())
        .then(resp => {
            if((resp!=='Unable to fetch' || resp!=='Unable to insert') && resp[0].lead_id)
            {
                var newArr = leadData;
                newArr.push(...resp)
                setLeadData(newArr);
            }
            else if(resp==='Not enough leads')
            {
                alert('Not enough leads')
            }
            else
            {
                alert('OOPS...something went wrong.Please try again.')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="pa4">
            <div className="overflow-auto flex flex-column justify-center items-center">
            <div className="flex justify-center">
                <div 
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
                href="#0"
                onClick = {() => onFetch()}
                >
                    Fetch New Leads            
                </div>
                <div 
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer" 
                href="#0"
                onClick = {() => onRefresh()}
                >
                    Refresh          
                </div>
            </div>
               <JrTable headerArray={leadDataHeader} ContentArray={leadData} onRefresh={onRefresh}/>
            </div>
        </div>

    );
}

export default JrCaller;