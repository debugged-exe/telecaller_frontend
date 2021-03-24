import React,{useState} from 'react';
import Logo from '../../Container/Images/Logo_3D.png';
import 'tachyons';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

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
                    <div style={{height:'50px', width:'110px'}} className='mh2'>
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
                        <Link 
                        style={{outline:'none'}}
                        className={`none ph3 white f4 mv0 b tc pt2 pointer`}
                        to='/'
                        >
                        	Home
                    	</Link>
                        <Link 
                        style={{outline:'none'}}
                        className={`none ph3 white f4 mv0 b tc pt2 pointer `}
                        to='/signin'
                        >
                        	SignIn
                        </Link>
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