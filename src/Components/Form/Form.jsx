import React,{useState} from 'react';
import FormBg from '../../Container/Images/FormBg.png';
import Background from '../../Container/Images/Background.png';

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

    const setDematField = (event) => {
        setDemat(event.target.value);
    }

    const [broker, setBroker] = useState('')

    const setBrokerField = (event) => {
        setBroker(event.target.value);
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
            preferredLangFlag===true
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
            mobileValidate();
            permCityValidate();
            preferredLangValidate();
            setSubmitErr('Check if all fields are set correclty.')
        }
    }

    return (
        <div style={{backgroundImage: `url(${Background})`}}className='flex items-center pv4 justify-center'>
            <div className='w-100'>
            <form style={{backgroundImage:`url(${FormBg})`}} className="measure center br3 shadow-2">
                <fieldset id="sign_up" className="ba b--transparent ph4 mh0">

                <legend className="f2 fw6 ph0 mh0 pv2 tc">Session Joining Form</legend>
                <hr/>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Name</label>
		                <input 
                        autoComplete="blej" 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        onChange={(event) => setNameField(event)}
                        onBlur={() => nameValidate()}/>
                        <div className="f4 red">{`${nameErr}`}</div>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Phone</label>
		                <input 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        onChange={(event) => setMobileField(event)}
                        onBlur={() => mobileValidate()}
                        onInput={(event) => numericFilter(event)}/>
                        <div className="f4 red">{`${mobileErr}`}</div>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">City</label>
		                <input  
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        onChange={(event) => setPermCityField(event)}
                        onBlur={() => permCityValidate()}
                        />
                        <div className="f4 red">{`${permCityErr}`}</div>
                    </div>
                    
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Trading Knowledge</label>
		                <select 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={(event) => setKnowledgeField(event)}
                        >
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' value='Yes'>Yes</option>
		        	        <option className = 'db fw6 lh-copy f4' value='No'>No</option>
		                </select>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Demat</label>
		                <select 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={(event) => setDematField(event)}>
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='No'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' value='Yes'>Yes</option>
		        	        <option className = 'db fw6 lh-copy f4' value='No'>No</option>
		                </select>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Broker Name</label>
		                <input  
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        placeholder='eg: Zerodha, Upstocks' 
                        onChange={(event) => setBrokerField(event)}
                        />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Preferred Language</label>
		                <select 
                        autoComplete="blej"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        onChange={(event) => setPreferredLangField(event)}
                        onBlur={() => preferredLangValidate()}
                        >
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' value="English">English</option>
		        	        <option className = 'db fw6 lh-copy f4' value="Marathi">Marathi</option>
		        	        <option className = 'db fw6 lh-copy f4' value="Marathi">Hindi</option>
		                </select>
                        <div className="f4 red">{`${preferredLangErr}`}</div>
                    </div>
                </fieldset>
                <div className="flex justify-center items-center">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib mb3" 
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