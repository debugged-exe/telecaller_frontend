import React from 'react';
import FormBg from '../../Container/Images/FormBg.png';

const Form = () => {
    return (
        <div className='flex items-center bg-black pv4 justify-center'>
            <div className='w-100'>
            <form style={{backgroundImage:`url(${FormBg})`}} className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph4 mh0">

                <legend className="f2 fw6 ph0 mh0 tc">Session Joining Form</legend>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Name</label>
		                <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Phone</label>
		                <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">City</label>
		                <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" />
                    </div>
                    
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Trading Knowledge</label>
		                <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' >Yes</option>
		        	        <option className = 'db fw6 lh-copy f4' >No</option>
		                </select>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Demat</label>
		                <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' >Yes</option>
		        	        <option className = 'db fw6 lh-copy f4' >No</option>
		                </select>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Broker Name</label>
		                <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" placeholder='eg: Zerodha, Upstocks' />
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f4">Preferred Language</label>
		                <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100">
		        	        <option className = 'db fw6 lh-copy f4 greyed' value='None'>---Select---</option>
		        	        <option className = 'db fw6 lh-copy f4' >English</option>
		        	        <option className = 'db fw6 lh-copy f4' >Marathi</option>
		        	        <option className = 'db fw6 lh-copy f4' >Hindi</option>
		                </select>
                    </div>
                </fieldset>
                <div className="flex justify-center items-center">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib mb3" type="submit" value="Submit" />
                </div>
            </form>
            </div>
        </div>
    );
}

export default Form;