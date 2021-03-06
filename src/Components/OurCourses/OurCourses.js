import React from "react";
import 'tachyons';
import './OurCourses.css';
export default function OurCourses({onRouteChange}) {
    return (
        <section className={'mr-auto w-100 bg-black white'}>
            <div className={'pv5 pb5 w-80-ns ml-auto-ns mr-auto-ns'}>
                <div className={''}>

                    <div className={''}>
                        <p className={'pl3 pt1 mb0-ns downMove'}>Let's Have a look on our services</p><h1
                        className={'w-50-ns pl3 f1-ns tl-ns'}><span>Our <span
                        className={'red'}>Courses</span> </span></h1></div>
                </div>
                <div className={'flex flex-wrap flex-column'}>
                    <article className="w-50-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 className={'f2 tc '}>Begineer's Course</h1>
                                <h1 className="f3">Free of Cost</h1>
                                <hr className="w-50 white" color={'red'}/>
                                <h4 className={'f4'}>For Equity Traders</h4>
                                <ul className={''}>
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
                                <a  style={{outline:'none'}} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" href="#0" onClick={() => onRouteChange('form')}>Session Joining Form</a>
                            </div>
                        </div>
                    </article>
                    <article className="w-50-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 className={'f2 tc '}>PRO Trader Course</h1>
                                <h1 className="f3">Charges : 5999/-</h1>
                                <hr className="w-50 white" color={'red'}/>
                                <h4 className={'f4'}>For Option Traders</h4>
                                <ul className={''}>
                                    <li>Basics of Option Trading</li>
                                    <li>Option Greeks</li>
                                    <li>Analysis of Option Chain</li>
                                    <li>Impact of Global Market</li>
                                    <li>Option buying Strategies
                                        <ul>
                                            <li>Pyschocological View</li>
                                            <li>Inside Candle with Averaging</li>
                                            <li>Bull Call/Put Spread</li>
                                            <li>Bear Call/Put Spread</li>
                                            <li>Bear Call Ladder</li>
                                        </ul>
                                    </li>
                                    <li>Option Selling Strategies
                                        <ul>
                                            <li>Double Straddle</li>
                                            <li>Triple Straddle</li>
                                            <li>Adjustment Techniques</li>
                                            <li>Selection of Strike Price</li>
                                        </ul>
                                    </li>
                                    <li>Time of Trade</li>
                                    <li>Positional F&O Trades</li>
                                    <li>Impact of IV</li>
                                </ul>
                                <a style={{outline:'none'}} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" href="#0" onClick={() => onRouteChange('form')}>Session Joining Form</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    );
}