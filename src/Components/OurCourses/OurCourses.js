import React from "react";
import { Link } from 'react-router-dom';
import 'tachyons';
import './OurCourses.css';

export default function OurCourses({ onRouteChange }) {
    return (
        <section className={'mr-auto w-100 bg-black white'}>
            <div className={'pv5 pb5 w-80-ns ml-auto-ns mr-auto-ns'}>
                <div className={''}>
                    <div data-aos="fade-down" data-aos-duration="1000"  className={'tc'}>
                        <p  className={'pl3 pt1 mb0-ns downMove tc'}>Let's Have a look on our services</p>
                        <h1  className={'pl3 f1-ns tc'}><span>Our <span className={'red tc'}>Courses</span> </span></h1></div>

                </div>
                <div className={'flex flex-wrap flex-column'}>
                    <article className="w-70-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 data-aos="fade-down" data-aos-duration={"1000"} className={'f2 tc '}>Beginner's Course</h1>
                                <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"className="f3 tc">Free of Cost</h1>
                                <hr className="w-50 white" color={'red'} />
                                <h4 data-aos="fade-up" className={'f4'}>For Equity Traders</h4>
                                <ul className={'tl'}>
                                    <li data-aos="fade-up" data-aos-delay={"10"}>Basic Terms of Stock-Market</li>
                                    <li data-aos="fade-up" data-aos-delay={"20"}>Use of Demat Account</li>
                                    <li data-aos="fade-up" data-aos-delay={"30"}>Technical Analysis
                                    <ul>
                                            <li data-aos="fade-up" data-aos-delay={"50"}>Candlestick Patterns</li>
                                            <li data-aos="fade-up" data-aos-delay={"60"}>Support and Resistance</li>
                                            <li data-aos="fade-up" data-aos-delay={"70"}>Chart Reading</li>
                                            <li data-aos="fade-up" data-aos-delay={"80"}>Use of Indicators</li>
                                            <li data-aos="fade-up" data-aos-delay={"90"}>Market Direction</li>
                                        </ul>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={"100"}>Fundamental Analysis</li>
                                    <li data-aos="fade-up" data-aos-delay={"110"}>Long Term Picks</li>
                                    <li data-aos="fade-up" data-aos-delay={"120"}>Price Action Strategies</li>
                                    <li data-aos="fade-up" data-aos-delay={"130"}>Live Market Sessions</li>
                                    <li data-aos="fade-up" data-aos-delay={"140"}>Risk Management</li>
                                </ul>
                                <Link style={{ outline: 'none' }} data-aos="fade-up" data-aos-delay={"150"} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="/basicform">Session Joining Form</Link>
                            </div>
                        </div>
                    </article>
                    <article className="w-70-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 data-aos="fade-down" data-aos-duration={"1000"} className={'f2 tc '}>PRO Trader Course</h1>
                                <h1 data-aos="fade-down" data-aos-delay={"100"}className="f3 tc">Charges : 9999/-</h1>
                                <hr className="w-50 white" color={'red'} />
                                <h4 data-aos="fade-up"className={'f4'}>For Option Traders</h4>
                                <ul className={'tl'}>
                                    <li data-aos={"fade-up"} data-aos-delay={"10"}>Basics of Option Trading</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"20"}>Option Greeks</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"30"}>Analysis of Option Chain</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"40"}>Impact of Global Market</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"50"}>Option buying Strategies</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"60"}>Pyschocological View</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"70"}>Inside Candle with Averaging</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"80"}>Bull Call/Put Spread</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"90"}>Bear Call/Put Spread</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"100"}>Bear Call Ladder</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"110"}>Option Selling Strategies</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"120"}>Short Straddle</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"130"}>Short Strangle</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"140"}>Long Straddle</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"150"}>Long Strangle</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"160"}>Adjustment Techniques</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"170"}>Leverage Hedging</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"180"}>Selection of Strike Price</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"190"}>Time of Trade</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"200"}>POC Level Trading</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"200"}>Fibonacci Confirmations</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"210"}>Options & Equity BTST Strategy</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"220"}>Positional F&O Trades</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"230"}>Equity Swing Trades</li>
                                    <li data-aos={"fade-up"} data-aos-delay={"240"}>Behaviour of Market</li>
                                </ul>
                                <a style={{ outline: 'none' }} data-aos={"fade-up"} data-aos-delay={"250"} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" href="https://surveyheart.com/form/60a162ae45e3e052c717728d" >Session Joining Form</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    );
}