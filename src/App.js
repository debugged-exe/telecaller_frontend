import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
<<<<<<< HEAD
import Signin from './Components/Signin/Signin';
=======
import SignInPage from './Components/SignInPage/SignInPage';
>>>>>>> df8bb04ea1e271ee543a93871b69b03fb5f06912
import Background from './Container/Images/Background.png';

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
    			     <Home onRouteChange={this.onRouteChange} />
	    		</div>
    		);	
    	}
    	else if(route==='form')
    	{
    		return(
				<div className="back">
    				<Form />
    			</div>
    		);
    	}
        else if(route==='signin')
        {
            return(
                <div style={{backgroundImage: `url(${Background})`, height: '100vh'}}>
                    <Signin />
                </div>
            );   
        }
    }
}
 
export default App;
