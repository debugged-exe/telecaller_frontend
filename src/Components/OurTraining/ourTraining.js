import React from "react";
import 'tachyons';
import './OurTraining.css';
import Logo from './Logo.svg';

export default function OurTraining() {
    return (
        <section className={'mr-auto w-100 bgImage white'}>
            <div className={'pv5 pb5 w-70-ns ml-auto-ns mr-auto-ns'}>
                <div className={'flex flex-wrap'}>
                    <div className={'pl2 pr3 w-50-ns f4-ns tl pr4-ns mt6-ns'}>
                        <div className={'w-100-ns pl3 f3-ns tl-ns'}><h1>Our <span className={'red'}>Training</span></h1>
                        </div>
                        <h4 className={'pl3 pr6-ns pt4-ns lh-copy'}>
                            “Money Needs To Be Invested To Cover The Cost Of Inflation. This Opens Us To The Stock Market. However Is It Safe Or Is It Way To Risky Or Probably Gambling.... NO!”
                        </h4>
                    </div>
                    <div className={'pl2 pr3 w-50-ns f4-ns tc lh-copy'}>
                        <div className={'w-100-ns pl3 f3-ns tl-ns flex flex-column '}>
                            <img src={Logo} alt=" Soham Kahde" style={{
                                width: "120px",
                                height: "120px",
                                backgroundColor: "white",
                                borderRadius: '50%'
                            }}/>
                            <h1 className='ma0'><span>Cyberking <span className={'red'}>Capitals</span> </span></h1>
                            <p className={'ma0 mb4 f3'}>We Rise by Lifting Others</p>
                            </div>CYBERKING CAPITALS Presents You Best Stock Market Trainings Free Of Cost To Beginners Who Are Eager To Learn Of All Age Groups. This Leading Institute Is Started By Youngsters (YOUTH OF INDIA) With The Aim Of Helping Communities To Expand Horizon And Knowledge. Not Only They Are Teaching But Also Inspiring And Guiding Rural Maharashtra Locals To Follow The Leads. 
Get In Touch With This Fantastic Team To Grab Such A Great Opportunity In Today's Era.
                        <br/>
                        <span><hr style={{float: "left"}} color={'red'} className={'mt5'} width={"15%"}/></span>
                    </div>
                </div>
            </div>

        </section>

    );
}