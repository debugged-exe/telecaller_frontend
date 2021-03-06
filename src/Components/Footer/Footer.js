import React from "react";
import './Footer.css';
import {FiInstagram} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {FaWhatsapp,FaTelegramPlane} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo3D from '../../Container/Images/Logo_3D.png'
function Footer(){
    return (
        <div className="body tl" style={{display: 'inline-block', width: "100%"}}>
            <footer className="footer">
                <div data-aos="fade-right" data-aos-duration="1000" className="footer-left mr4">
                    <span style={{}}>
                        <img src={Logo3D} alt="Logo" style={{width: "180px", height: "100px"}} />
                    </span>
                    <div className={''}>
                        <Link style={{outline:'none'}} className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-blue" to="/signin">Sign In</Link>
                        <a style={{outline:'none'}} className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-blue ml2" target={'new'} href="https://friendly-heyrovsky-7949cc.netlify.app">New Sign In</a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li data-aos="fade-right" data-aos-duration="1000">
                        <ul className="box lh-copy f4">
                            <li><div className={'mt2 flex flex-wrap'}><a href={'tel:919156104002'}>+91 91561 04002</a></div></li>
                            <li><div className={'mt2 flex flex-wrap'}><a href={'https://mailto:cyberkingcapitals@gmail.com'} className={'f4-l f5-m f4-s'} target={'_blank'}>cyberkingcapitals@gmail.com</a></div></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2 data-aos="fade-right" data-aos-duration="1000" className={'h2 dark-blue mt1'}> CONNECT WITH US</h2>
                        <ul style={{display:'flex'}} className="box">
                            <li><a data-aos="fade-up" data-aos-duration={"1000"} href={"https://instagram.com/cyberking_capitals?igshid=mjv77zi1djho"} target={'_blank'} className={'flex items-center'}><FiInstagram size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a data-aos="fade-up" data-aos-duration={"1000"} data-aos-delay="100" href="https://mailto:cyberkingcapitals@gmail.com" target={'_blank'} className={'flex items-center'} ><SiGmail size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a data-aos="fade-up" data-aos-duration={"1000"} data-aos-delay="200" href="https://google.com" target={'_blank'} className={'flex items-center'} ><AiOutlineTwitter size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a data-aos="fade-up" data-aos-duration={"1000"} data-aos-delay="300" href="https://wa.me/919156104002" target={'_blank'} className={'flex items-center'} ><FaWhatsapp size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a data-aos="fade-up" data-aos-duration={"1000"} data-aos-delay="400" href="https://t.me/cyberkingcapitals" target={'_blank'} className={'flex items-center'} ><FaTelegramPlane size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a data-aos="fade-up" data-aos-duration={"1000"} data-aos-delay="500" href="https://www.youtube.com/channel/UCiuu7LUkcQFM8vAvFh3dsrA" target={'_blank'} className={'flex items-center'} ><AiOutlineYoutube size="2.3rem" color="white" className={'pr3'}/></a></li>
                        </ul>
                    </li>
                </ul>
            </footer>
            <footer className="pv4 ph3 ph5-m ph6-l white flex justify-center" style={{backgroundColor: "red"}}>
                <small className="f6 db" style={{textAlign: 'center'}}>© 2021 <b className="ttu">Developed by
                   <a className="b black" href="https://debuggedexe.com" target="_blank"> Debugged.exe </a></b>| All Rights
                    Reserved</small>
            </footer>
        </div>
    );
}

export default Footer;