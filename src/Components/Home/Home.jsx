import React from 'react';
import 'tachyons';
import './Home.css';
import OurTraining from '../OurTraining/ourTraining';
import OurCourses from '../OurCourses/OurCourses';
import StillConfusing from '../StillConfusing/StillConfusing';
import OpenAccount from '../OpenAccount/OpenAccount';
import BackgroundCarousel from '../BackgroundCarousel/BackgroundCarousel';
import JoinOurTelegram from '../JoinOurTelegram/JoinOurTelegram';

const Home = ({onRouteChange}) => {
    return (
        <>
            <BackgroundCarousel/>
            <OurTraining/>
            <OurCourses onRouteChange={onRouteChange}/>
            <StillConfusing/>
            <JoinOurTelegram/>
            <OpenAccount/>
        </>
    );
}

export default Home;