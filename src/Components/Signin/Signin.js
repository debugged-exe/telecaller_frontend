import React,{useState} from 'react';
import FormBg from '../../Container/Images/FormBg.png';
import Background from '../../Container/Images/Background.png';
import './Signin.css';

const Signin = () => {

    const [username, setUserName] = useState("");
    const [usernameFlag, setUserNameFlag] = useState(false);
    const [usernameErr, setUserNameErr] = useState("");

    const setUserNameField = (event) => {
        setUserName(event.target.value);
    }

    const usernameValidate = (event) => {
    if(username!=="")
    {
      setUserNameFlag(true);
      setUserNameErr("");
    }
    else
    {
      setUserNameFlag(false);
      setUserNameErr("*username Field is compulsary");
    }
  }

    const [password, setPassword] = useState("");
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [passwordErr, setPasswordErr] = useState("");

    const setPasswordField = (event) => {
        setPassword(event.target.value);
    }

    const passwordValidate = (event) => {
    if(password!=="")
    {
      setPasswordFlag(true);
      setPasswordErr("");
    }
    else
    {
      setPasswordFlag(false);
      setPasswordErr("*password Field is compulsary");
    }
  }

  const submit = () => {
    if(
        usernameFlag===true &&
        passwordFlag===true
    )
    {
        console.log(username, password)
    }
    else
    {
        usernameValidate();
        passwordValidate();
    }
  }

    return (
    	<main className="pa4 black-80">
		  	<form style={{backgroundImage: `url(${FormBg})`}} className="flex flex-column items-center measure center br3 pa3 shadow-2 cardContainer">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="tc f2 fw6 ph0 mh0">Sign-In</legend>
			      <div className="mt3">
			        <label className="mv2 db fw6 lh-copy f4" htmlFor="email-address">UserName:</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address" 
			        id="email-address" 
			        autoComplete='blej'
			        onChange={(event) => setUserNameField(event)}
			        onBlur={() => usernameValidate()}
			        />
			        <div className="f4 red">{`${usernameErr}`}</div>
			      </div>
			      <div className="mv3">
			        <label className="mv2 db fw6 lh-copy f4" htmlFor="password">Password:</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password" 
			        id="password" 
			        autoComplete='blej'
			        onChange={(event) => setPasswordField(event)}
			        onBlur={() => passwordValidate()}
			        />
			        <div className="f4 red">{`${passwordErr}`}</div>
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
			      type="button" 
			      value="Sign in" 
			      onClick={() => submit()}/>
			    </div>
		  	</form>
		</main>	
    );
}

export default Signin;