import React from "react";
import { Link } from 'react-router-dom';
import 'tachyons';
import './OurCourses.css';

export default function OurCourses({ onRouteChange }) {
    return (
        <section className={'mr-auto w-100 bg-black white'}>
            <div className={'pv5 pb5 w-80-ns ml-auto-ns mr-auto-ns'}>
                <div className={''}>
                    <div className={'tc'}>
                        <p className={'pl3 pt1 mb0-ns downMove tc'}>Let's Have a look on our services</p>
                        <h1 className={'pl3 f1-ns tc'}><span>Our <span
                            className={'red tc'}>Courses</span> </span></h1></div>

                </div>
                <div className={'flex flex-wrap flex-column'}>
                    <article className="w-70-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 className={'f2 tc '}>Beginner's Course</h1>
                                <h1 className="f3 tc">Free of Cost</h1>
                                <hr className="w-50 white" color={'red'} />
                                <h4 className={'f4'}>For Equity Traders</h4>
                                <ul className={'tl'}>
                                    <li>Basic Terms of Stock-Market</li>
                                    <li>Use of Demat Account</li>
                                    <li>Technical Analysis
                                    <ul>
                                            <li>Candlestick Patterns</li>
                                            <li>Support and Resistance</li>
                                            <li>Chart Reading</li>
                                            <li>Use of Indicators</li>
                                            <li>Market Direction</li>
                                        </ul>
                                    </li>
                                    <li>Fundamental Analysis</li>
                                    <li>Long Term Picks</li>
                                    <li>Price Action Strategies</li>
                                    <li>Live Market Sessions</li>
                                    <li>Risk Management</li>
                                </ul>
                                <Link style={{ outline: 'none' }} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="/form">Session Joining Form</Link>
                            </div>
                        </div>
                    </article>
                    <article className="w-70-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 className={'f2 tc '}>PRO Trader Course</h1>
                                <h1 className="f3 tc">Charges : 9999/-</h1>
                                <hr className="w-50 white" color={'red'} />
                                <h4 className={'f4'}>For Option Traders</h4>
                                <ul className={'tl'}>
                                    <li>Basics of Option Trading</li>
                                    <li>Option Greeks</li>
                                    <li>Analysis of Option Chain</li>
                                    <li>Impact of Global Market</li>
                                    <li>Option buying Strategies</li>
                                    <li>Pyschocological View</li>
                                    <li>Inside Candle with Averaging</li>
                                    <li>Bull Call/Put Spread</li>
                                    <li>Bear Call/Put Spread</li>
                                    <li>Bear Call Ladder</li>
                                    <li>Option Selling Strategies</li>
                                    <li>Short Straddle</li>
                                    <li>Short Strangle</li>
                                    <li>Long Straddle</li>
                                    <li>Long Strangle</li>
                                    <li>Adjustment Techniques</li>
                                    <li>Leverage Hedging</li>
                                    <li>Selection of Strike Price</li>
                                    <li>Time of Trade</li>
                                    <li>POC Level Trading</li>
                                    <li>Fibonacci Confirmations</li>
                                    <li>Options & Equity BTST Strategy</li>
                                    <li>Positional F&O Trades</li>
                                    <li>Equity Swing Trades</li>
                                    <li>Behaviour of Market</li>
                                </ul>
                                <a style={{ outline: 'none' }} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" href="https://surveyheart.com/form/608f89d91ff2fc715c435b07" >Session Joining Form</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    );
}