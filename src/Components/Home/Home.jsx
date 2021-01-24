import React from 'react';
import 'tachyons';
import Logo from '../../Container/Images/Logo.jpeg';
import './Home.css';

const Home = ({onRouteChange}) => {
    return (
        <div>
            <div style={{ height: '50px'  }} className='flex bg-black justify-start items-center flex-wrap'>
<<<<<<< HEAD
                <a style={{outline:'none'}} className="f3 mh2 fw6 db white link dim" href="#0">Home </a>
                <a 
                style={{outline:'none'}} 
                className="f3 mh2 fw6 db white link dim" 
                href="#0"
                onClick={() => onRouteChange('signin')}>
                    SignIn
=======
                <a style={{outline:'none'}} 
                className="f3 mh2 fw6 db white link dim" 
                href="#0"
                >
                Home
                </a>
                <a style={{outline:'none'}} 
                className="f3 mh2 fw6 db white link dim" 
                href="#0"
                >
                SignIn
>>>>>>> df8bb04ea1e271ee543a93871b69b03fb5f06912
                </a>
            </div>
            <div className='flex justify-center flex-wrap items-center pa2'>
                <div className='w-40'>
                    <div >
                        <img style={{width:'100%',height:'100%'}} src={Logo} alt='Logo'/>
                    </div>
                </div>
                <div className='w-60 pa2 ph2'>
                    <p className='f1 b'>Cyberking Capitals</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <a 
                    className="f4 link dim ph3 pv2 mb2 dib white br2 grow bg-dark-blue" 
                    href="#0"
                    onClick = {() => onRouteChange('form')}
                    >
                        Session Joining Form
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;