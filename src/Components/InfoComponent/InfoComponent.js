import React from 'react';
import './InfoComponent.css';
import logo3D from '../../Container/Images/Logo_3D.png';
import {Link} from "react-router-dom";
import InfoComponentFooter from "./InfoComponentFooter/InfoComponentFooter";

const InfoComponent = () => {
    return (
        <section className={'info-component-section pt3 bg-black white'}>
            <div className={'info-component-container'}>
                <img className={'info-component-img-container'} src={logo3D} alt={'not visible'} width={'200px'}/>
            </div>
            <div className={'info-component-content-container w-80-l w-80-m w-80-ns w-90'}>
                <h1 data-aos="fade-down" data-aos-duration={"1000"}
                    className={'info-component-content-container-header tc'}>
                    मराठी बांधवांसाठी Cyberking Capitals घेऊन आले आहे FREE शेयर मार्केट कोर्स
                </h1>
                <ul>
                    <li data-aos="fade-up" data-aos-delay={"10"}>
                        या अग्रगण्य संस्थेची सुरुवात युवा उद्योजकांनी मराठी समाजामध्ये आर्थिक साक्षरता पोहोचवण्याच्या
                        उद्देशाने केली आहे.
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"20"}>
                        भारतातील केवळ 2.5% लोक शेयर मार्केट मधे गुंतवणुक करतात. बऱ्याच लोकांना Share Market मध्ये
                        गुंतवणुक करायची असते परंतू शेयर मार्केट विषयी योग्य माहिती नसल्यामुळे लोकांना गुंतवणूक करून
                        त्याचा फायदा घेऊ शकत नाहीत .
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"30"}>
                        2020 च्या corona च्या काळात शेयर मार्केट हा चर्चेचा विषय बनला, ज्यामध्ये काही लोकांनी अनावश्यक
                        फी आकारुन course चालू केला ज्यामध्ये बर्याच लोकांना योग्या महीती मिळाली नाही.
                        लोकांपर्यंत योग्या महीती पोहोचावणे हा देखील आमच्या उद्देशाचा भाग आहे .
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"40"}>
                        यामध्ये 20 LIVE SESSIONS घेतले जातील. हे SESSIONS रोज रात्री 8.30 ते 10.00 या दरम्यान MICROSOFT
                        TEAMS या App द्वारे घेतले जातात. 8:30 ते 9:30 या कालावधीत शिकवले जाते(Teaching Time) व 9:30 ते
                        10:00 या कालावधीत Doubt Solving केले जाते.
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"50"}>
                        CYBERKING CAPITALS च्या COURSE मध्ये जे TOPICS शिकवले जातात त्याची यादी खालीलप्रमाणे नमुद केली
                        असुन तुम्ही त्याची फेड पडताळणी करु शकता.
                    </li>
                </ul>
            </div>
            <div className={'tc'}>
                <p className={'lh-copy'}>
                    <b>
                        FILL THE BELOW FORM FOR GETTING CONSULTANT FROM CYBERKING
                        सायबरकिंग कन्सल्टंट मिळविण्यासाठी खालील फॉर्म भरा
                    </b>
                </p>
                <Link style={{outline: 'none'}} data-aos="fade-up" data-aos-delay={"60"}
                      className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="/basicform">Session Joining
                    Form</Link>
            </div>
            <div className={'flex flex-column justify-center items-center'}>
                <div className={'info-component-session-details pa2-l pa4-m pa4-ns pa2 tl'}>
                    <h4 data-aos="fade-up" data-aos-delay={"70"}>20 Sessions As :</h4>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"80"}><span className={'b'}>Session 1 </span>:
                        Introduction Of Stockmarket स्टॉकमार्केटचा परिचय</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"90"}><span className={'b'}>Session 2</span> :
                        Basic Terms Of Stockmarket स्टॉकमार्केटच्या मूलभूत अटी</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"100"}><span className={'b'}>Session 3</span> :
                        Segments/Types Of Stockmarket स्टॉक मार्केटचे विभाग / प्रकार</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"110"}><span className={'b'}>Session 4 </span>:
                        Basics Of Technical Analysis तांत्रिक विश्लेषणाची मूलभूत माहिती</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"120"}><span className={'b'}>Session 5 </span>:
                        How To Use Demat Account डिमॅट खाते कसे वापरावे.</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"130"}><span className={'b'}>Session 6</span> :
                        Introduction of Price Action.
                        Supply & Demand Zone.
                        Volume in Market / Trading
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"140"}><span className={'b'}>Session 7</span> :
                        Study of Candlestick Pattern.</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"150"}><span className={'b'}>Session 8</span> :
                        The Direction of Market.
                        Continuation Chart Patterns.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"160"}><span className={'b'}>Session 9 </span>:
                        Study of Chart Patterns.
                        Reversal & Bilateral Chart Patterns.</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"170"}><span className={'b'}>Session 10 </span>:
                        Price Action Confirmations.
                        Paper Trading.</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"180"}><span className={'b'}>Session 11 </span>:
                        Trades With Target & Stop Loss.</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"190"}><span className={'b'}>Session 12 </span>: Live Practice of Price
                        Action.
                        Doubts.</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"200"}><span className={'b'}>Session 13 </span>:
                        Selection of Stocks For Intraday.
                        Be Familiar With Stocks & Sectors With Their Weitages.</p>

                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"210"}><span className={'b'}>Session 14</span> :
                        Basics of Options.
                        Option Chain Analysis.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"220"}><span className={'b'}>Session 15</span> :
                        Selection of Strike Price.
                        Jackpot Trade on Expiry.
                        Concept of Option Selling.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"230"}><span className={'b'}>Session 16</span> :
                        Psychologies of Price Action.
                        Inside Candle Trading Setup.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"240"}><span className={'b'}>Session 17</span> :
                        Long-Term Wealth Creation.
                        Fundamental Analysis of Stocks.
                        Deprecation of Assets.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"250"}><span className={'b'}>Session 18</span> :
                        Future Vision About Sectors.
                        Chemical Sector, Modern Basket.
                        Display of Personal Portfolio.
                        Portfolio Management / Diversification.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"260"}><span className={'b'}>Session 19</span> :
                        Screnarioes For Intraday Trading.
                        Trading Setup.
                        Risk Management.
                    </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"270"}><span className={'b'}>LIVE SESSION 20</span> :
                        Trading in Live Market.</p>
                </div>
                <div className={'tc'}>
                    <p className={'lh-copy'} data-aos="fade-up" data-aos-delay={"280"}>
                        <b>
                            FILL THE BELOW FORM FOR GETTING CONSULTANT FROM CYBERKING
                            सायबरकिंग कन्सल्टंट मिळविण्यासाठी खालील फॉर्म भरा
                        </b>
                    </p>
                    <Link style={{outline: 'none'}} data-aos="fade-up" data-aos-delay={"290"}
                          className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b"
                          to="/basicform">
                        Session Joining Form
                    </Link>
                </div>
            </div>
            <InfoComponentFooter/>
        </section>
    )
};

export default InfoComponent;