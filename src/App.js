import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import SignInPage from './Components/SignInPage/SignInPage';
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

    onSubmitHandler = (username, password) => {
        fetch('http://localhost:3001/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                username: username,
                password: password
                })
             })
        .then(response => response.json())
        .then(resp => {
        if(resp.des)
        {
            this.loadUser(resp);
            this.onRouteChange(resp.des);
        }
        })
        .catch(err => console.log(err))
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
                <div>
                    <Navbar onRouteChange={this.onRouteChange}/>
                    <SignInPage onSubmitHandler={this.onSubmitHandler} />
                </div>
            );   
        }
        else if(route==='Admin')
        {
            return(
                <div>
                    <Navbar onRouteChange={this.onRouteChange} />
                    <Admin />
                </div>
            );
        }
        else if(route==='JrCaller')
        {
            return(
                <div>
                    <Navbar onRouteChange={this.onRouteChange} />
                    <JrCaller />
                </div>
            );
        }
    }
}
 
export default App;
