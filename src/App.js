import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Background from './Container/Images/Background.png';

const initialState = {
	route: 'home'
}

class App extends Component {
	constructor(){
		super();
		this.state = initialState;
	}

	formLinkHandler = () => {
		this.onRouteChange('form');
	}

	onRouteChange = (route) => {
		this.setState({route: route})
	}

  	render()
  	{
  		const {route} = this.state;
    	if(route==='home')
    	{
    		return(
				<div>
	    			<Home formLinkHandler={this.formLinkHandler} />		
	    		</div>
    		);	
    	}
    	else if(route==='form')
    	{
    		return(
				<div >
    				<Form style={{backgroundImage:`url(${Background})`}} />
    			</div>
    		);
    	}
    }
}
 
export default App;
