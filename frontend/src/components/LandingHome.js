import React from 'react';
import '../Stylesheets/LandingHome.css';
import background from '../media/2.jpg';
const LandingHome = () => {
    return ( 
        <div>
            <div className='LpHome' style={{ backgroundImage: `url(${background})`,
                    height:'110vh',
                    marginTop:'-70px',
                    fontSize:'50px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', }}>
                <h1>Save </h1>
                <h1>Orphans</h1>
                <div>
                    
                </div>
            </div>
            <div>
                <h1>Donate and change the life</h1>
            </div>

        </div>
     );
}
 
export default LandingHome;