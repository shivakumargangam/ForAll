import React from 'react';
import '../Stylesheets/LandingHome.css';
import background from '../media/2.jpg';
import orp1 from '../media/orp1.jpg';
const LandingHome = () => {
    return ( 
        <div>
            <div className='LpHome' style={{ backgroundImage: `url(${background})`,
                    height:'110vh',
                    fontSize:'50px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', }}>
                <div className='blur'>
                    <h1>Save </h1>
                    <h1>Orphans</h1>
                </div>
                
            

        </div>
        <div style={{backgroundColor:'black'}}>
                {/* <h1>Donate and change the life</h1> */}
                <div className='LpPreviewdiv'>
                    <div className='LpPrevBox' style={{
                            backgroundImage: `url(${orp1})`,
                            height:'50vh',
                            width:'50vh',
                            fontSize:'50px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='blur'>
                            <h1 className='LpHeaddiv'>Orphanage 1</h1>
                            <h1 className='Lpcontentdiv'>content of Orphanage</h1>
                        </div>
                    </div>
                    <div className='LpPrevBox'>
                        <h1 className='LpHeaddiv'>Orphanage 1</h1>
                        <h1 className='Lpcontentdiv'>content of Orphanage</h1>
                    </div>
                    <div className='LpPrevBox'>
                        <h1 className='LpHeaddiv'>Orphanage 1</h1>
                        <h1 className='Lpcontentdiv'>content of Orphanage</h1>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LandingHome;