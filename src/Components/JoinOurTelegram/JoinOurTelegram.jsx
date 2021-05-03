import React from 'react';
import './JoinOurTelegram.css';
import {FaTelegramPlane} from 'react-icons/fa';
export default function JoinOurTelegram() {
    return (
        <section className={'mr-auto bg-white pv6-ns tl'}>
            <div className={'pv5 pb5 w-70-ns ml-auto-ns mr-auto-ns white'}>
                <div className={'pl3'}>
                    <h1 className={'f1-ns black'}>Join Our <span className={'red'}>Telegram Community!</span></h1>
                </div>
                <div className={'w-60-ns pl3 pr3 mr2'}>
                    <p className={'w-80-ns pb3-ns f4-ns black'}>We understand your problems. You may have many questions boiling up in your mind. To address your
                        concerns we recommend you sign up for a Premium consultation with us.</p>
                      <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2"
                       href="https://t.me/cyberkingcapitals" title="Telegram">
                        <FaTelegramPlane color={'white'}/>
                        <span className="f4-ns ml3 pr2">Join <span className={''}>Now</span></span>
                    </a>
                </div>
            </div>
        </section>
    );
}