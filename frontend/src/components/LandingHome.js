import React from 'react';
import '../Stylesheets/LandingHome.css';
import background from '../media/3.svg';
const LandingHome = () => {
    return ( 
        <div className='LpHome' style={{ backgroundImage: `url(${background})`,backgroundRepeat  : 'no-repeat',backgroundSize: 'cover', }}>
            <h1>Save</h1>
            <h1>Orphans</h1>
        </div>

     );
}
 
export default LandingHome;