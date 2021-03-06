import React,{useState} from 'react';
import './Form.css';
import ReCAPTCHA from "react-google-recaptcha";
require('dotenv').config();
 
const Form = () => {

    const [name, setName] = useState("");
    const [nameFlag, setNameFlag] = useState(false);
    const [nameErr, setNameErr] = useState("");

    const setNameField = (event) => {
     setName(event.target.value);
    }

    const nameValidate = (event) => {
    if(name!=="")
    {
      setNameFlag(true);
      setNameErr("");
    }
    else
    {
      setNameFlag(false);
      setNameErr("*Name Field is compulsary");
    }
    }

    const [mobile, setMobile] = useState("");
    const [mobileFlag, setMobileFlag] = useState(false);
    const [mobileErr, setMobileErr] = useState("");

    const setMobileField = (event) => {
    setMobile(event.target.value);
    }

    const numericFilter = (event) => {
    event.target.value = event.target.value.replace(/[^\0-9]/ig, "");
    }

    const mobileValidate = (event) => {
    if(mobile==="")
    {
      setMobileFlag(false);
      setMobileErr("Phone number field is compulsary");
    }
    else if(mobile.length!==10)
    {
      setMobileFlag(false);
      setMobileErr("Enter valid phone no(eg: 9123456780)")
    }
    else
    {
      setMobileFlag(true);
      setMobileErr("");
    }
    }

    const [permCity, setPermCity] = useState("none");
    const [permCityFlag, setPermCityFlag] = useState(false);
    const [permCityErr, setPermCityErr] = useState("");

    const setPermCityField = (event) => {
    setPermCity(event.target.value);
    }

    const permCityValidate = () => {
    if(permCity==="none")
    {
      setPermCityFlag(false);
      setPermCityErr("*City field is compulsary");
    }
    else
    {
      setPermCityFlag(true);
      setPermCityErr("");
    }
    }

    const [knowledge, setKnowledge] = useState("No");

    const setKnowledgeField = (event) => {
    setKnowledge(event.target.value);
    }

    const [demat, setDemat] = useState('No')
    const [brokerDisable, setDisable] = useState(false)

    const setDematField = (event) => {
        const {value} = event.target
        if(value==='Yes')
        {
            setDisable(false)
            setDemat(value)
        }
        else
        {
            setDisable(true)
            setDemat(value)
        }
    }

    const [broker, setBroker] = useState('')

    const setBrokerField = (event) => {
       setBroker(event.target.value)
    }

    const [preferredLang, setPreferredLang] = useState('None')
    const [preferredLangFlag, setPreferredLangFlag] = useState(false)
    const [preferredLangErr, setPreferredLangErr] = useState('')

    const setPreferredLangField = (event) => {
        setPreferredLang(event.target.value);
    }

    const preferredLangValidate = () => {
        if(preferredLang==='None')
        {
            setPreferredLangFlag(false)
            setPreferredLangErr('Preferred Language is compulsary.')
        }
        else
        {
            setPreferredLangFlag(true)
            setPreferredLangErr('')
        }
    }

    const [submitErr, setSubmitErr] = useState('')

    const onSubmitHandler = () => {
        if(
            nameFlag===true &&
            mobileFlag===true &&
            permCityFlag===true &&
            preferredLangFlag===true &&
            captchaFlag === true
        )
        {
            fetch('https://frozen-river-89705.herokuapp.com/form', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                name: name,
                mobile: mobile,
                city: permCity,
                knowledge: knowledge,
                demat: demat,
                broker: broker,
                preferredLang: preferredLang
                })
             })
            .then(response => response.json())
            .then(resp => {
                if(resp==='Registered')
                {
                    alert('Registered successfully.A CyberKing representative will call you shortly.')
                }
                else if(resp==='Not Unique.')
                {
                    alert('Looks like you have already registered with the given mobile no.Please enter other contact no.');
                }
                else
                {
                    alert('OOPs....something went wrong.Please try again.')
                }
            })
            .catch(err => console.log(err))
            setSubmitErr('')
        }
        else{
            nameValidate();
            captchaValidate();
            mobileValidate();
            permCityValidate();
            preferredLangValidate();
            setSubmitErr('Check if all fields are set correclty.')
        }
    }
    const recaptchaRef = React.useRef();
    const [captchaFlag, setCaptchaFlag] = useState(false);
    const [captchaErr, setCaptchaErr] = useState("");
    function onCapChange(value) {
        if(value!==""){
          setCaptchaFlag(true)
          setCaptchaErr("")
        }
      }

      const captchaValidate = (event) => {
        const val = recaptchaRef.current.getValue()
        if(val==="")
        {
          setCaptchaFlag(false);
          setCaptchaErr("*Please solve the captcha.");
  
        }
        else
        {
          setCaptchaFlag(true);
          setCaptchaErr("");
        }
    }

    return (
        <div className='form-bg flex items-center pv4 justify-center'>
            <div className='w-100'>
            <form className="measure center br3 white tl">
                <fieldset id="sign_up" className="ba b--transparent mh0">

                <legend className="f2 red fw6 ph0 mh0 pv2 tc">Session Joining Form</legend>
                <hr/>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Full Name</label>
		                <input 
                        placeholder='Enter your full name'
                        autoComplete="blej" 
                        className="pa2 input-reset ba bg-transparent hover-black w-100" 
                        type="text" 
                        onChange={(event) => setNameField(event)}
                        onBlur={() => nameValidate()}/>
                        <div className="f4 red">{`${nameErr}`}</div>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Phone Number</label>
		                <input
                        placeholder='Enter your Phone no.' 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-black w-100" 
                        type="text" 
                        onChange={(event) => setMobileField(event)}
                        onBlur={() => mobileValidate()}
                        onInput={(event) => numericFilter(event)}/>
                        <div className="f4 red">{`${mobileErr}`}</div>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">City</label>
		                <input
                        placeholder='Enter your City'  
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-black w-100" 
                        type="text" 
                        onChange={(event) => setPermCityField(event)}
                        onBlur={() => permCityValidate()}
                        />
                        <div className="f4 red">{`${permCityErr}`}</div>
                    </div>
                    
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Do you have any prior knowledge of Stock-market?</label>
		                <select 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-black w-100"
                        onChange={(event) => setKnowledgeField(event)}
                        >
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' value='Yes'>Yes</option>
		        	        <option className = 'db fw6 lh-copy f4' value='No'>No</option>
		                </select>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Do you have any Demat Account?</label>
		                <select 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-black w-100"
                        onChange={(event) => setDematField(event)}>
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='No'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' value='Yes'>Yes</option>
		        	        <option className = 'db fw6 lh-copy f4' value='No'>No</option>
		                </select>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">If you have any Demat Account mention your Broker name</label>
		                <input  
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-black w-100" 
                        type="text" 
                        placeholder='eg: Zerodha, Upstocks'
                        disabled={brokerDisable}
                        onChange={(event) => setBrokerField(event)}
                        />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f5 mb3">तुम्हाला कोणत्या भाषेत स्टॉक मार्केट बद्दल शिकायला आवडेल?</label>
                        <label className="db fw6 lh-copy f4 mb3">Which language do you prefer for Attending Trading Sessions?</label>
                        <label className="db fw6 lh-copy f5 mb2">आप कोंसी भाषा में स्टॉक मार्केट के बारेमे सीखना चाहोगे?</label>
		                <select 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-black w-100"
                        onChange={(event) => setPreferredLangField(event)}
                        onBlur={() => preferredLangValidate()}
                        >
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' value="Marathi">Marathi</option>
		        	        <option className = 'db fw6 lh-copy f4' value="Hindi">Hindi</option>
		                </select>
                        <div className="f4 red">{`${preferredLangErr}`}</div>
                    </div>
                    <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.REACT_APP_CAPTCHA_API_KEY}
                    onChange={onCapChange}
                    />
                    <div className="f4 red">{`${captchaErr}`}</div>
                </fieldset>
                <div className="flex justify-center items-center">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib mb3" 
                        style={{backgroundColor:'red',color:'white'}}
                        type="button" 
                        value="Submit" 
                        onClick = {() => onSubmitHandler()}/>
                        <div className="f4 red">{`${submitErr}`}</div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Form;