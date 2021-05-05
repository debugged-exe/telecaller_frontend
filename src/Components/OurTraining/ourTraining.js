import React from "react";
import 'tachyons';
import './OurTraining.css';
import Logo from '../../Container/Images/Logo_3D2.png';

export default function OurTraining() {
    return (
        <section className={'mr-auto w-100 bgImage white'} style={{marginTop: "-15px"}}>
            <div className={'pv5 pb5 w-90-m w-70-ns ml-auto-ns mr-auto-ns'}>
                <div className={'flex flex-wrap'}>
                    <div className={'pl2 pr3 w-50-ns f4-ns tl pr4-ns mt6-ns'}>
                        <div data-aos="fade-right" data-aos-duration={"1000"} className={'w-100-ns pl3 f3-ns tl-ns'}><h1>Our <span className={'red'}>Training</span></h1>
                        </div>
                        <h4 data-aos="fade-right" data-aos-duration={"1500"} className={'pl3 pr4-m pr6-ns pt4-ns lh-copy'}>
                            “Money Needs To Be Invested To Cover The Cost Of Inflation. This Opens Us To The Stock Market. However Is It Safe Or Is It Way To Risky Or Probably Gambling.... NO!”
                        </h4>
                    </div>
                    <div className={'pl2 pr3 w-50-ns f4-ns tc lh-copy scroll-none-x'}>
                        <div className={'w-100-ns pl3 f3-ns tl-l tl-m flex-column scroll-none-x'}>
                            <img data-aos="fade-left" data-aos-duration="1000" src={Logo} alt=" Soham Khade" style={{
                                width: "180px",
                                height: "100px"
                            }} className={'scroll-none-x'}/>
                            <h1 data-aos="fade-left" data-aos-duration="1500" className='ma0 scroll-none-x'><span>Cyberking <span className={'red'}>Capitals</span> </span></h1>
                            <p data-aos="fade-left" data-aos-duration="2000"className={'ma0 mb4 f3 scroll-none-x'}>We Rise by Lifting Others</p>
                            </div>
                        <p data-aos={"fade-left"} data-aos-duration={"2500"} className={'scroll-none-x'}>CYBERKING CAPITALS Presents You Best Stock Market Trainings Free Of Cost To Beginners Who Are Eager To Learn Of All Age Groups. This Leading Institute Is Started By Youngsters (YOUTH OF INDIA) With The Aim Of Helping Communities To Expand Horizon And Knowledge. Not Only They Are Teaching But Also Inspiring And Guiding Rural Maharashtra Locals To Follow The Leads.
                        Get In Touch With This Fantastic Team To Grab Such A Great Opportunity In Today's Era.</p>
                        <br/>
                        <span><hr style={{float: "left"}} color={'red'} className={'mt5'} width={"15%"}/></span>
                    </div>
                </div>
            </div>

        </section>

    );
}