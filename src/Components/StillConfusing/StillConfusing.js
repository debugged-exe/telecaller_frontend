import React from 'react';
import './StillConfusing.css';
import {FiInstagram} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
export default function stillConfusing() {
    return (
        <section className={'mr-auto bg-dark-blue pv6-ns tl'}>
            <div className={'pv5 pb5 w-70-ns ml-auto-ns mr-auto-ns white scroll-none-x'}>
                <div className={'pl3'}>
                    <p data-aos="fade-left" data-aos-duration={"1000"} style={{overflow: "hidden"}} className={'pt1 mb0-ns downmove scroll-none-x'}>START LEARNING WITH US</p>
                    <h1 data-aos="fade-left"  data-aos-duration={"1000"} style={{overflow: "hidden"}} className={'f1-ns scroll-none-x'}>Still <span className={'red'}>Confused ?</span></h1>
                </div>
                <div className={'w-60-ns pl3 pr3 mr2 scroll-none-x'} style={{overflow: "hidden"}}>
                    <p data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" style={{overflow: "hidden"}} className={'scroll-none-x w-80-ns pb3-ns f4-ns'}>We understand your problems. You may have many questions boiling up in your mind. To address your
                        concerns we recommend you sign up for a Premium consultation with us.</p>
                    <a data-aos="fade-up" data-aos-duration="1000"href={'https://instagram.com/cyberking_capitals?igshid=mjv77zi1djho'} className={'f2'}><FiInstagram color={'white'} /></a>
                    <a data-aos="fade-up" data-aos-delay={"100"} data-aos-duration="1500" href={''} className={'f2 pl2'}><AiOutlineMail color={'white'}/></a>
                    <a data-aos="fade-up" data-aos-delay={"200"} data-aos-duration="2000" href={'https://wa.me/9191566104002'} className={'f2 pl2'}><FaWhatsapp color={'white'}/></a>
                    <a data-aos="fade-up" data-aos-delay={"300"} data-aos-duration="2500" href={'https://t.me/cyberkingcapitals'} className={'f2 pl2'}><FaTelegramPlane color={'white'}/></a>
                </div>
            </div>
        </section>
    );
}