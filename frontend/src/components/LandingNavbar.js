import React from 'react';
import Logo from '../media/logo.png';
import person from '../media/person.svg';
import '../Stylesheets/LandingNav.css';
const LandingNavbar = () => {
    return ( 
    <div className='LpNavMain'>
        <img src={Logo}/>
        <div  className='LPLinksDiv'>
            <a to="/" className='LPlink'>HOME</a>
            <a to="/" className='LPlink'>HOME</a>
            <a to="/" className='LPlink'>HOME</a>
        </div>
        <div className='LPsignindiv'>
            <img src={person}/>
            {/* TODO:: contact icon */}
            <a >Signup</a>
            <h3>or</h3>
            <a>Register</a>
        </div>
    </div> );
}
 
export default LandingNavbar;