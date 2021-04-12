import React from 'react';
import './StillConfusing.css';
import {FiInstagram} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';
export default function stillConfusing() {
    return (
        <section className={'mr-auto bg-dark-blue pv6 tl'}>
            <div className={'pv5 pb5 w-70-ns ml-auto-ns mr-auto-ns white'}>
                <div className={'pl3'}>
                    <p className={'pt1 mb0-ns downmove'}>START LEARNING WITH US</p>
                    <h1 className={'f1-ns'}>Still <span className={'red'}>Confused ?</span></h1>
                </div>
                <div className={'w-60-ns pl3 pr3 mr2'}>
                    <p className={'w-80-ns pb3-ns f4-ns'}>We understand your problems. You may have many questions boiling up in your mind. To address your
                        concerns we recommend you sign up for a Premium consultation with us.</p>
                    <a href={''} className={'f2'}><FiInstagram color={'white'} /></a>
                    <a href={''} className={'f2 pl2'}><AiOutlineMail color={'white'}/></a>
                    <a href={''} className={'f2 pl2'}><FaWhatsapp color={'white'}/></a>
                </div>
            </div>
        </section>
    );
}