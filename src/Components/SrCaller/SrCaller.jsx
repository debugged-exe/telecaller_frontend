import React,{Component} from 'react';
import SrTable from '../SrTable/SrTable.js';
import ModalTable from '../ModalTable/ModalTable.js';
import useStateWithCallback from 'use-state-with-callback';
import Modal from 'react-modal';

  class SrCaller extends Component{
    constructor(props){
      super(props);
      this.state = {
        setPreview: false,
        user: this.props.user,
        jrCaller: {
          jrName:'',
          jrTeleId: ''
        },
        data: [],
        jrContent: [],
      }
    }

    setPreviewState = (s1) => {
      this.setState({
        setPreview: s1
      },() =>{
        console.log('')
      })
    }

    fetchLogs = () => {
      fetch('https://frozen-river-89705.herokuapp.com/sr/log',{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          username: this.state.jrCaller.jrName,
          telecaller_id: this.state.jrCaller.jrTeleId
        })
      })
      .then(response => response.json())
      .then(resp => {
        if(resp[0].lead_id)
        {
          this.setState({
            jrContent: resp
          }, () => {
            console.log('')
          })
          this.setState({
            setPreview: true
          }, () => {
            console.log('')
          })
          console.log(this.state.jrContent)
        }
        else if(resp==='empty')
        {
          alert(`No leads assigned to ${this.state.jrCaller.jrName}`)
        }
      })
      .catch(err => {
        console.log(err)
        alert('Failed to load telecaller logs.Please try again.')
      })
    }

    setJrCaller = (username1, telecaller_id1) => {
      var user = {
        jrName: '',
        jrTeleId: ''
      }
      user.jrName = username1
      user.jrTeleId = telecaller_id1
      this.setState({
        jrCaller: user
      }, () => {
        this.fetchLogs()
      })
    }

    componentDidMount(){
      fetch('https://frozen-river-89705.herokuapp.com/sr/fetch',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: this.state.user.username,
            telecaller_id: this.state.user.telecaller_id
        })
      })
      .then(response => response.json())
      .then(resp => {
        if(resp[0].username)
        {
          this.setState({
            data: resp
          }, () => {
            console.log('')
          })
        }
      })
      .catch(err => console.log(err))
    }

    render(){
      const {data,setPreview,jrContent} = this.state;
      const {jrName, jrTeleId} = this.state.jrCaller;
      const leadDataHeader = [
        'Username',
        'Jr_Id'
      ]

      const jrHeader = [
        'LeadId',
        'LeadName',
        'LeadContact',
        'Status1',
        'Status2',
        'HandoverStatus',
        'Coded Status'
      ]

      const {username, telecaller_id} = this.state.user;

      return(
        <div className="pa4">
          <SrTable 
          headerArray={leadDataHeader} 
          contentArray={data} 
          setPreviewState={this.setPreviewState} 
          setJrCaller={this.setJrCaller}
          />
          <Modal 
          isOpen={setPreview}
          ariaHideApp={false} 
          >
            <div className="flex justify-end">
              <p
              className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br2 ma2 pointer flex justify-end items-center" 
              onClick={() => this.setPreviewState(false)}
              >X</p> 
            </div>
            <div className='flex flex-column justify-center items-center'>
              <h1>{`LOGS OF ${jrName}(${jrTeleId})`}</h1>
              <ModalTable headerArray={jrHeader} contentArray={jrContent}/>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default SrCaller;