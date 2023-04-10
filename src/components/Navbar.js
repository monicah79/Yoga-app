import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true);
        }
    };

    useEffect (()=>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton)
     

  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                Ababil Yoga<i className='fa-regular fa-dove'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
               < i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
               </li>
               <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>
               </li>
               <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
               </li>
               <li className='nav-item'>
                <Link to='/Calendar' className='nav-links' onClick={closeMobileMenu}>
                    Calender
                </Link>
               </li>
               <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
               </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact us</Button>}
        </div>
        
     </nav> 
    </>
  )
}

export default Navbar
