import '../styling/map.css'
import map from '../images/mapScreenShot.jpg'
import Tabs from "../components/tabs";
import { NavLink } from 'react-router-dom';

function Map () {

    return(
        <div className='MapPageShell'>
            <div className='Spacer'></div>
            <div className='MapContainer'>
                <NavLink className="MapLink" to='/play'>
                    <img className='MapImg' src={map} alt='Map'/>
                </NavLink>
            </div>
            <div className='Spacer'></div>
            <Tabs />
        </div>
    )
}
export default Map;