import React from "react";
import 'tachyons';
import './OpenAccount.css';
import ZerodhaImg from './Zerodha.jpg';
import Angel from './Angel-Broking.jpg';

export default function OpenAccount() {
    return (
        <section className={'mr-auto w-100 bg-black white tl'}>
            <div className={'pv5 pb5 w-80-ns ml-auto-ns mr-auto-ns'}>
                <div className={''}>

                    <div className={''}>
                        <p className={'pl3 pt1 mb0-ns downMove'}>Open An Online Trading Account</p><h1
                        className={'w-50-ns pl3 f1-ns tl-ns'}><span>Open Your<span
                        className={'red'}> DEMAT</span> </span></h1></div>
                </div>
                <div className={'flex flex-wrap'}>
                    <article className="w-50-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="tc">
                                <div>
                                    <img width="290px" height='130px' className="img-fluid partner_img" src={ZerodhaImg}
                                         alt="Zerodha Logo"/>
                                </div>
                                <p className={'w-70-ns f4-ns mr-auto ml-auto '}>
                                With high-class technology, unique trading tools, and three-way trading platform,
                                    Zerodha is giving its clients an edge in trading and decision making. Pioneer in
                                    introducing low brokerage scheme.
                                </p>
                                <div className={'db custom-link w-60-ns f3-ns hoverLine mr-auto ml-auto mt5 ba pt3 pl3 pb3 b--red br3'}>
                                    <a className={'noDecoration'} target='_blank' href={'https://zerodha.com/open-account?c=ZMPAIV'}>
                                        <div className={'lines'}>
                                            <hr className={'colorWhite'}/>
                                        </div>
                                        <b className={'pl3 f5'}>Open Account Now</b>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="w-50-ns  shadow-2 center br3 pa3 pa4-ns mv3">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="tc">
                                <div>
                                    <img width="290px" height='130px' className="img-fluid partner_img" src={Angel}
                                         alt="Zerodha Logo"/>
                                </div>
                                <p className={'w-70-ns f4-ns mr-auto ml-auto '}>
                                Angel Broking is a low brokerage stock broker in India. They are among the cheapest stock broker online. Angel Broking simple pricing model offers trading across segments for same flat brokerage fee of maximum ₹20 per executed order.</p>
                                <div className={'db custom-link w-60-ns hoverLine f3-ns mr-auto ml-auto mt5 ba pt3 pl3 pb3 b--red br3'}>
                                    <a className={'noDecoration'} target='_blank' href={'http://tinyurl.com/ybanzogq'}>
                                        <div className={'lines'}>
                                            <hr className={'colorWhite '}/>
                                        </div>
                                        <b className={'pl3 f5'}>Open Account Now</b>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    );
}