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
                            “INTRADAY TRADING IS THE MOST PROFITABLE THING IF YOU ARE A DISCIPLINED TRADER.”
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
                            </div>
                        The Well Designed and Informative Lessons, Clear Instructions, and Dedicated Support Team make
                        sure that our clients get the BEST TRAINING on the Stock Market. When you train with us, you get
                        the opportunity to LEARN the skills needed to execute our CORE STRATEGY. Our proven techniques
                        will help you generate regular INCOME and create WEALTH for a secure future. Cyberking Capitals
                        offers a
                        comprehensive course covering diverse asset classes. You get the opportunity to CHOOSE the one
                        that best suits your trading or investing style.
                        <br/>
                        <span><hr style={{float: "left"}} color={'red'} className={'mt5'} width={"15%"}/></span>
                    </div>
                </div>
            </div>

        </section>

    );
}