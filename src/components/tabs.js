import '../styling/tabs.css'
import basketball from "../images/basketball.jpg"
import friends from "../images/friends.jpg"
import home from "../images/home.jpg"
import map from "../images/map.jpg" 
import settings from "../images/settings.jpg"  

import { NavLink } from 'react-router-dom';

function Tabs() {
    return (
    <div className="TabsShell">
        <div className='ImgShell'>
            <NavLink to='/home'>
                <img className='HomeImg' src={home} alt="Home Icon"/>
            </NavLink>
        </div>
        <div className='ImgShell'>
            <NavLink to='/map'>
                <img className='Img' src={map} alt="Map Icon"/>
            </NavLink>
        </div>
        <div className='ImgShell'>
            <NavLink to='/play'>
                <img className='Img' src={basketball} alt="Play Icon"/>
            </NavLink>
        </div>
        <div className='ImgShell'>
            <NavLink to='/friends'>    
                <img className='Img' src={friends} alt="Friends Icon"/>
            </NavLink>
        </div>
        <div className='ImgShell'>
            <NavLink to='/settings' >
                <img className='Img' src={settings} alt="Profile Icon"/>
            </NavLink >
        </div>
    </div>
    )
}

export default Tabs;