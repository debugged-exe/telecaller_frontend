import React from 'react';
import './OtherCourses.css';
import {Link} from "react-router-dom";

const OtherCourses = () => {
    return (
        <section className={'other-courses-section pb6'}>
            <div className={'Heading-container pt4'}>
                <div data-aos="fade-down" data-aos-duration="1000" className={'tc'}>
                    <h1 className={'pl3 f1-ns tc'}><span>Our Other <span className={'red tc'}>Courses</span> </span>
                    </h1>
                </div>

            </div>
            <div className={'other-courses-main-container mt5'}>
                <div className={'column-1 ml6-l ml6-m'}>
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
                    <Link style={{ outline: 'none' }} data-aos="fade-up" data-aos-delay={"150"} className=" f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b " to="">Commodity Joining Form</Link>
                </div>
                <div className={'column-2 ml5-l ml5-m'}>
                    <h1 data-aos="fade-down" data-aos-duration={"1000"} className={'f2 tc'}>FOREX TRADING</h1>
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
                    <Link style={{ outline: 'none' }} data-aos="fade-up" data-aos-delay={"150"} className=" f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="">Forex Joining Form</Link>
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
                    <Link style={{ outline: 'none' }} data-aos="fade-up" data-aos-delay={"150"} className=" f5 link dim br1 ph3 pv2 mb2 dib white bg-red br2 b" to="">Index Joining Form</Link>
                </div>
            </div>
        </section>
    );
}

export default OtherCourses;