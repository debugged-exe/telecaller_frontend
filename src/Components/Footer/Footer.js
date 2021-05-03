import React from "react";
import './Footer.css';
import {FiInstagram} from "react-icons/fi";
import {SiGmail} from "react-icons/si";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaWhatsapp,FaTelegramPlane} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo3D from '../../Container/Images/Logo_3D.png'
function Footer() {
    return (
        <div className="body tl" style={{display: 'inline-block', width: "100%"}}>
            <footer className="footer">
                <div className="footer-left mr4">
                    <span style={{}}>
                        <img src={Logo3D} alt="Logo" style={{width: "180px", height: "100px"}} />
                    </span>
                    <div className={''}>
                        <Link style={{outline:'none'}} className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-blue" to="/signin">Sign In</Link>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <ul className="box lh-copy f4">
                            <li><div className={'mt2 flex flex-wrap'}><a href={'tel:919156104002'}>+91 91561 04002</a></div></li>
                            <li><div className={'mt2 flex flex-wrap'}><a href={'https://mailto:cyberkingcapitals@gmail.com'} className={'f4-l f5-m f4-s'} target={'_blank'}>cyberkingcapitals@gmail.com</a></div></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2 className={'h2 dark-blue mt1'}> CONNECT WITH US</h2>
                        <ul style={{display:'flex'}} className="box">
                            <li><a href={"https://instagram.com/cyberking_capitals?igshid=mjv77zi1djho"} target={'_blank'} className={'flex items-center'}><FiInstagram size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a href="https://mailto:cyberkingcapitals@gmail.com" target={'_blank'} className={'flex items-center'} ><SiGmail size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a href="https://google.com" target={'_blank'} className={'flex items-center'} ><AiOutlineTwitter size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a href="https://wa.me/9191566104002" target={'_blank'} className={'flex items-center'} ><FaWhatsapp size="2rem" color="white" className={'pr3'}/></a></li>
                            <li><a href="https://t.me/cyberkingcapitals" target={'_blank'} className={'flex items-center'} ><FaTelegramPlane size="2rem" color="white" className={'pr3'}/></a></li>
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