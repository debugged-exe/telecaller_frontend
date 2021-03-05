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
                <div className={'flex flex-wrap'}>
                    <article className="w-50-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 className={'f2 tc '}>step 1</h1>
                                <h1 className="f3">Gold Membership</h1>
                                <hr className="w-50 white" color={'red'}/>
                                <h4 className={'f4'}>For Equity Traders</h4>
                                <ul className={''}>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                </ul>
                                <a  style={{outline:'none'}} className="f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" href="#0" onClick={() => onRouteChange('form')}>Session Joining Form</a>
                            </div>
                        </div>
                    </article>
                    <article className="w-50-ns  shadow-2 center br3 pa3 pa4-ns mv3 ">
                        <div className={'flex flex-wrap justify-center'}>
                            <div className="">
                                <h1 className={'f2 tc '}>step 2</h1>
                                <h1 className="f3">Gold Membership</h1>
                                <hr className="w-50 white" color={'red'}/>
                                <h4 className={'f4'}>For Equity Traders</h4>
                                <ul className={''}>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
                                    <li>some basics</li>
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