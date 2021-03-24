import React from 'react';
import Carousel from 'react-elastic-carousel'
import './BackgroundCarousel.css';
import Logo from '../../Container/Images/Logo_3D.png';

const BackgroundCarousel = () => {
    return(
        <div style={{marginLeft:'-10px',marginRight:'-10px'}}>
            <img src={Logo} style={{height:'100px',width:'180px'}} className='center-logo' alt='Logo'/>
        <div className='center-tagline red b f4 pointer'>We Rise by Lifting Others</div>
        <aside className="left-side side-nav">
        <ul className="mr-auto ml-auto">
          <li className="di pl3 grow">
            <a
              href="https://twitter.com"
              className="white f6 fw6 di black link1"
              title="TWITTER"
            >
              TWITTER
            </a>
          </li>
          <li className="di pl3">
            <a
              href={"https://instagram.com/cyberking_capitals?igshid=mjv77zi1djho"} target={'_blank'}
              className="white f6 fw6 di black grow link1"
              title="INSTAGRAM"
            >
              INSTAGRAM
            </a>
          </li>
          <li className="di pl3 grow">
            <a
            href="https://wa.me/9191566104002" target={'_blank'}
              className="white f6 fw6 di black link1"
              title="TWITTER"
            >
              WHATSAPP
            </a>
          </li>
        </ul>
      </aside>
            <Carousel enableAutoPlay={true} autoPlaySpeed={2000}>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        CREATE
                    </div>
                    <div className='b white stroke tl'>
                        WEALTH
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        ACCURATE
                    </div>
                    <div className='b white stroke tl'>
                        SIGNALS
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        EXPERTISED
                    </div>
                    <div className='b white stroke tl'>
                        TEACHING
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        CREATE
                    </div>
                    <div className='b white stroke tl'>
                        WEALTH
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        ACCURATE
                    </div>
                    <div className='b white stroke tl'>
                        SIGNALS
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        EXPERTISED
                    </div>
                    <div className='b white stroke tl'>
                        TEACHING
                    </div>
                </div>
                <div className='slide1 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        CREATE
                    </div>
                    <div className='b white stroke tl'>
                        WEALTH
                    </div>
                </div>
                <div className='slide2 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        ACCURATE
                    </div>
                    <div className='b white stroke tl'>
                        SIGNALS
                    </div>
                </div>
                <div className='slide3 flex justify-center items-center font-size flex-column'>
                    <div className='red b tl'>
                        EXPERTISED
                    </div>
                    <div className='b white stroke tl'>
                        TEACHING
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default BackgroundCarousel