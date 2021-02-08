import React,{useState} from 'react';
import Logo from '../../Container/Images/Logo.jpeg';
import 'tachyons';
import './Navbar.css';

const Navbar = ({onRouteChange, route}) => {

	const [navbar,setNavbar] = useState('navbar')
    const [dropdown, setDropdown]  = useState('hidden');
    const [line, setLine]  = useState('show');
    const hamburger = () => {
        if (dropdown==='hidden'){
            setDropdown('visible')
            setNavbar('navbar-resp')
            setLine('hide')
        }
        else{
            setDropdown('hidden');
            setNavbar('navbar')
            setLine('show')
        }
    }

	return(
        <div>
            <nav style={{backgroundColor: '#232B2B', color: 'white'}}className={`flex items-center justify-between pv0 mv0 flex-wrap w-100 shadow-2 ${navbar}`}>
                <span>
                    <div style={{height:'60px', width:'60px'}} className='mh2'>
                        <img style={{height:'100%', width:'100%'}} src={Logo} alt='Logo'/>
                    </div>
                </span>
                <span className={`hamburger ${line} pr2 pointer`}
                onClick={()=>hamburger()}
                >
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
            </span>
                <span className={`${dropdown}`}>
                    <ul style={{listStyle:'none'}} className={`flex ph4 ${navbar} justify-center items-center ${dropdown}`}>
                        <li 
                        style={{backgroundColor: '#DC3D24'}}
                        className='f4 pointer grow ph3 mv0 br2 white b pa2'
                        onClick={() => onRouteChange('form')}
                        >
                            Session Joining Form
                        </li>
                        <li 
                        className={`none ph3 f4 mv0 b tc pt2 pointer ${route==='home'? 'active': 'effect effect-left'}`}
                        href='#0'
                        onClick={() => onRouteChange('home')}>
                        	Home
                    	</li>
                        <li className='none ph3 f4 mv0 b tc pt2 pointer effect effect-left' href='#0'>About Us</li>
                        <li className='none ph3 f4 mv0 b tc pt2 pointer effect effect-left' href='#0'>Contact Us</li>
                        <li 
                        className={`none ph3 f4 mv0 b tc pt2 pointer ${route==='signin'? 'active': 'effect effect-left'}`}
                        href='#0'
                        onClick={() => onRouteChange('signin')}>
                        	SignIn
                        </li>
                        <li className='tc'><p className={`f6 link dim ph3 pv2 mb2 dib white bg-dark-blue cross pointer`} href='#0'
                        onClick={()=>hamburger()}
                        >
                        X
                        </p>
                        </li>
                    </ul>
                </span>
            </nav>
        </div>
	);
}

export default Navbar;