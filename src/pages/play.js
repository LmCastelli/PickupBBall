import '../styling/play.css'
import rating from '../images/Rating.jpg'
import casual from '../images/Casual.png'
import serious from '../images/Serious.png'
import basketball from '../images/ColoredBasketball.png'
import { useState } from "react";
import Tabs from '../components/tabs'

function Play () {

    const [hopIn, setHopIn] = useState(false)


    /*
    modal to show player names
    */

return (
    <div className="PlayPageShell">
        <div className="ParkNameDiv">
            <h2 className='PlayText'>FlatWoods Park</h2>
        </div>
        <div className="RatingDiv">
            <img className='RatingImg' src={rating} alt='Rating' />
        </div>
        <div className="PlayerContainer">
            <div className='CasualDiv'>
                <img src={casual} className='CasualImg' alt='CasualPlayer' />
            </div>
            <div className='SeePlayersDiv'>
                <h3 className='PlayersText'>See Players</h3>
            </div>
            <div className='SeriousDiv'>
                <img src={serious} className='SeriousImg' alt='SeriousPlayer' />
            </div>
        </div>
        <div className="BasketballContainer">
            <img src={basketball} className="BasketballImg" alt='Basketball'/>
        </div>
        <div className="HopDiv" onClick={()=>setHopIn(!hopIn)}>
            {hopIn === false ?
            <h2 className='PlayersText'>Hop In</h2>
            :
            <h2 className='PlayersText'>Hop Out</h2>
            }
        </div>

        <Tabs />
    </div>
)

}

export default Play;