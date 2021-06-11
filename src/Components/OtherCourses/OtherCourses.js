import React from 'react';
import './OtherCourses.css';
import {Link} from "react-router-dom";

const OtherCourses = () => {
    return (
        <section className={'other-courses-section pb6-ns pb5'}>
            <div className={'Heading-container pt4'}>
                <div data-aos="fade-down" data-aos-duration="1000" className={'tc'}>
                    <h1 className={'pl3 f1-ns tc'}><span>Explore <span className={'red tc'}>Global Markets</span> </span>
                    </h1>
                </div>

            </div>
            <div className={'other-courses-main-container mt5'}>
                <div className={'column-1 ml6-l'}>
                    <h1 data-aos="fade-down" data-aos-duration={"1000"} className={'f2 tc'}>Commodity</h1>
                    <ul className={'tl'}>
                        <li data-aos="fade-up" data-aos-delay={"10"}>What is commodity trading</li>
                        <li data-aos="fade-up" data-aos-delay={"20"}>History of commodities trading</li>
                        <li data-aos="fade-up" data-aos-delay={"30"}>Characteristics of commodity market</li>
                        <li data-aos="fade-up" data-aos-delay={"40"}>Types of commodities</li>
                        <li data-aos="fade-up" data-aos-delay={"50"}>Future trading in commodities</li>
                        <li data-aos="fade-up" data-aos-delay={"60"}>Fundamentals Of Commodities</li>
                        <li data-aos="fade-up" data-aos-delay={"70"}>Impact Of Global Cues</li>
                    </ul>
                </div>
                <div className={'column-2 ml5-l'}>
                    <h1 data-aos="fade-down" data-aos-duration={"1000"} className={'f2 tc'}>Forex Trading</h1>
                    <ul className={'tl'}>
                        <li data-aos="fade-up" data-aos-delay={"10"}>Forex trading introduction</li>
                        <li data-aos="fade-up" data-aos-delay={"20"}>Structure of the forex market</li>
                        <li data-aos="fade-up" data-aos-delay={"30"}>Major currencies entry systems</li>
                        <li data-aos="fade-up" data-aos-delay={"40"}>Types of market analysis</li>
                        <li data-aos="fade-up" data-aos-delay={"50"}>Kinds of foreign exchange market</li>
                        <li data-aos="fade-up" data-aos-delay={"60"}>Benefits of trading forex</li>
                        <li data-aos="fade-up" data-aos-delay={"70"}>Fundamental Market forces</li>
                        <li data-aos="fade-up" data-aos-delay={"80"}>Role of inflation</li>
                        <li data-aos="fade-up" data-aos-delay={"90"}>Commodity connection</li>
                        <li data-aos="fade-up" data-aos-delay={"100"}>Position sizing and money management</li>
                        <li data-aos="fade-up" data-aos-delay={"110"}>Forex exchange risks</li>
                    </ul>
                </div>
                <div className={'column-3'}>
                    <h1 data-aos="fade-down" data-aos-duration={"1000"} className={'f2 tc'}>Index Trading</h1>
                    <ul className={'tl'}>
                        <li data-aos="fade-up" data-aos-delay={"10"}>Global Indices Trading</li>
                        <li data-aos="fade-up" data-aos-delay={"20"}>Weightage wise Indices</li>
                        <li data-aos="fade-up" data-aos-delay={"30"}>Indices Driving Sectors</li>
                        <li data-aos="fade-up" data-aos-delay={"40"}>Dependancies Of Global Indices</li>
                        <li data-aos="fade-up" data-aos-delay={"50"}>Inflation Related Moves</li>
                        <li data-aos="fade-up" data-aos-delay={"60"}>Global Rallies & Movements</li>
                    </ul>
                </div>
            </div>
            <div className={'flex justify-center items-center tc pt4-ns'}>
                <Link style={{outline: 'none'}} data-aos="fade-up" data-aos-delay={"150"}
                      className=" f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="https://www.finq.com/en/live-registration/?bid=310055"> Course Joining Form</Link>
            </div>
        </section>
    );
}

export default OtherCourses;