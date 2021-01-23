import React, { useState } from 'react';
import 'tachyons';
import './SignInPage.css';
import {BeatLoader} from 'react-spinners';

const SignInPage = ({ onSubmitHandler }) => {

  const [username, setUserName] = useState("");
  const [usernameFlag, setUserNameFlag] = useState(false);
  const [usernameErr, setUserNameErr] = useState("");

  const setUserNameField = (event) => {
    setUserName(event.target.value);
  }

  const usernameValidate = (event) => {
    if (username !== "") {
      setUserNameFlag(true);
      setUserNameErr("");
    }
    else {
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
    if (password !== "") {
      setPasswordFlag(true);
      setPasswordErr("");
    }
    else {
      setPasswordFlag(false);
      setPasswordErr("*password Field is compulsary");
    }
  }

  const [popState, setPopState] = useState('none');
  const submit = () => {
    if (
      usernameFlag === true &&
      passwordFlag === true
    ) {
      //onSubmitHandler(username, password);
      setPopState('block');
    }
    else {
      usernameValidate();
      passwordValidate();
    }
  }

  return (
    <div style={{ height: '100vh' }} className='flex justify-center items-center'>
      <div id='pop-up' className='bg-white shadow-4 pop-up f2' style={{ display: `${popState}` }}>
         <div className='flex items-center justify-center h-100'>
          <p className=''>Signing You In Hold Tight</p>
          <BeatLoader/>
          </div>
      </div>
        <main className="shadow-3 bg pa6 black-0">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">UserName</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="blej"
                  onChange={(event) => setUserNameField(event)}
                  onBlur={() => usernameValidate()}
                  placeholder="Enter your username" />
                <div className="f4 red">{`${usernameErr}`}</div>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(event) => setPasswordField(event)}
                  onBlur={() => passwordValidate()}
                  placeholder="Enter your password" />
                <div className="f4 red">{`${passwordErr}`}</div>
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba white bg-dark-blue grow pointer f6 dib"
                type="button"
                value="Sign in"
                onClick={() => submit()}
              />
            </div>

          </form>
        </main>
      </div>
    );
}

export default SignInPage;