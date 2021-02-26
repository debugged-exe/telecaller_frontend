import React,{useState, useEffect} from 'react';
import SrTable from '../SrTable/SrTable.js';

const SrCaller = ({user}) => {

  const {username, telecaller_id} = user;
    const leadDataHeader = [
              'Username',
              'Jr_Id',
              'Check_out'  ]

const [data,setData]=useState([]);
useEffect(()=>{
  fetch('https://frozen-river-89705.herokuapp.com/sr/fetch',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        username: username,
        telecaller_id: telecaller_id
    })
  })
  .then(response => response.json())
  .then(resp => {
    if(resp[0].username)
    {
      setData(resp);
    }

  })
    .catch(err => console.log(err))
},[]);


    return (
        <div className="pa4">
               <SrTable headerArray={leadDataHeader}/>
        </div>
    );
}

export default SrCaller;
