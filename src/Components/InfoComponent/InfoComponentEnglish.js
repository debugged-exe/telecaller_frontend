import React from 'react';
import './InfoComponentEnglish.css';
import logo3D from '../../Container/Images/Logo_3D.png';
import {Link} from "react-router-dom";
import InfoComponentFooter from "./InfoComponentFooter/InfoComponentFooter";

const InfoComponentEnglish = () => {
    return (
        <section className={'info-component-english-section pt3 bg-black white'}>
            <div className={'info-component-english-container'}>
                <img className={'info-component-english-img-container'} src={logo3D} alt={'not visible'}
                     width={'200px'}/>
            </div>
            <div className={'info-component-english-content-container w-80-l w-80-m w-80-ns w-90'}>
                <h1 data-aos="fade-down" data-aos-duration={"1000"}
                    className={'info-component-english-content-container-header tc'}>
                    Cyberking Capitals Has Brought FREE Share Market Course
                </h1>
                <ul>
                    <li data-aos="fade-up" data-aos-delay={"10"}>
                        Cyberking Capitals is a leading organization which is started by young entrepreneurs with an
                        objective to impart Financial Literacy in our community.
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"20"}>
                        In India, only 2.5% of people actually invest in the Stock Market. Though many people aspire to
                        invest in the shares, many of them step back due to a lack of proper knowledge about the Stock
                        Market.
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"30"}>
                        The Stock Market became a hot topic during the COVID-19 pandemic. Some people started courses
                        which had only fancy fees but the content provided under them was not up to the point. At
                        Cyberking Capitals, it is our mission to provide the right information to the people.
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"40"}>
                        There will be 20 Live Sessions. These sessions will be taken every night between 8.30 and 10.00
                        pm through the Microsoft teams app. Teaching time is from 8:30 to 9:30 pm and doubt solving will
                        be done from 9:30 to 10:00 pm.
                    </li>
                    <li data-aos="fade-up" data-aos-delay={"50"}>
                        The content listed below will be taught at the CYBERKING CAPITALS COURSE.
                    </li>
                </ul>
            </div>
            <div className={'tc'}>
                <p className={'lh-copy'}>
                    <b>
                        FILL THE FORM BELOW FOR GETTING A CONSULTANT FROM CYBERKING
                    </b>
                </p>
                <Link style={{outline: 'none'}} data-aos="fade-up" data-aos-delay={"60"}
                      className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="/basicform">
                    Session Joining Form</Link>
            </div>
            <div className={'flex flex-column justify-center items-center'}>
                <div className={'info-component-english-session-details pa2-l pa4-m pa4-ns pa2 tl'}>
                    <h4 data-aos="fade-up" data-aos-delay={"70"}>20 Sessions As :</h4>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"80"}><span className={'b'}>Session 1 </span>:
                        Introduction Of Stock market </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"90"}><span className={'b'}>Session 2</span> :
                        Basic Terms Of Stock market </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"100"}><span className={'b'}>Session 3</span> :
                        Segments/Types Of Stockmarket </p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"110"}><span className={'b'}>Session 4 </span>:
                        Basics Of Technical Analysis</p>
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"120"}><span className={'b'}>Session 5 </span>:
                        How To Use Demat Account</p>
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
                    <p className={'pl4 lh-copy'} data-aos="fade-up" data-aos-delay={"190"}><span className={'b'}>Session 12 </span>:
                        Live Practice of Price
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

export default InfoComponentEnglish;