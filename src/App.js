import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin';
import Admin from './Components/Admin/Admin';
import Navbar from './Components/Navbar/Navbar';
import Background from './Container/Images/Background.png';
import JrCaller from './Components/JrCaller/JrCaller';

const initialState = {
	route: 'home',
    user: {
        username: '',
        telecaller_id: '',
        des: ''
    }
}

class App extends Component {
	constructor(){
		super();
		this.state = initialState;
	}

	onRouteChange = (route) => {
		this.setState({route: route})
	}

    loadUser = (user) => {
        this.setState({user:{
            username: user.username,
            telecaller_id: user.telecaller_id,
            des: user.des
        }})
    }

  	render()
  	{
  		const {route} = this.state;
    	if(route==='home')
    	{
    		return(
				<div>
                    <Navbar onRouteChange={this.onRouteChange} />
    			    <Home onRouteChange={this.onRouteChange} />
                    <JrCaller/>
	    		</div>
    		);	
    	}
    	else if(route==='form')
    	{
    		return(
				<div className="back">
                    <Navbar onRouteChange={this.onRouteChange}/>
    				<Form />
    			</div>
    		);
    	}
        else if(route==='signin')
        {
            return(
                <div style={{backgroundImage: `url(${Background})`, height: '100vh'}}>
                    <Navbar onRouteChange={this.onRouteChange}/>
                    <Signin onRouteChange={this.onRouteChange}/>
                </div>
            );   
        }
        else if(route==='admin')
        {
            return(
                <div>
                    <Navbar onRouteChange={this.onRouteChange} />
                    <Admin />
                </div>
            );
        }
    }
}
 
export default App;
