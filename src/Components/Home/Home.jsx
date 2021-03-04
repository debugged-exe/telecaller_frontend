import React from 'react';
import 'tachyons';
import './Home.css';
import OurTraining from '../OurTraining/ourTraining';
import OurCourses from '../OurCourses/OurCourses';
import StillConfusing from '../StillConfusing/StillConfusing';
import OpenAccount from '../OpenAccount/OpenAccount';
import BackgroundCarousel from '../BackgroundCarousel/BackgroundCarousel';

const Home = ({onRouteChange}) => {
    return (
        <>
            <BackgroundCarousel/>
            <OurTraining/>
            <OurCourses onRouteChange={onRouteChange}/>
            <StillConfusing/>
            <OpenAccount/>
        </>
    );
}

export default Home;