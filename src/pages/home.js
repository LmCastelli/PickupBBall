import '../styling/home.css'
import Tabs from '../components/tabs';
import {useState} from "react"
import onlineFriends from '../images/onlinefriends.jpg'


function Home () {

    const [events, setEvents] = useState([{players: ["Me ","Myself ","I "], game_type:'3 on 3', time: '5:00 PM', address: '1234 basketball st.'},])
    const [newEvent, setNewEvent] = useState({players: [], game_type:'', time: '', location: ''})
    const [modal, setModal] = useState(false)

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setNewEvent(values => ({...values, [field]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newEvent)
        setEvents([...events, newEvent])
        setModal(false)
        console.log(newEvent)
    }

    return (
        <div className="HomeShell">
            <div className='FriendsOnlineDiv'>
                <h3 className='NumberOfFriends'>4</h3>
                <div className='FriendsOnlineContainer'>
                    <img className='Img' src={onlineFriends} alt='Friends'/>
                </div>
            </div>
            {events.length !== 0  && modal === false ?
            <div className='EventShell'>
                {events.map((event, index)=> (
                    <div key={index} className='EventDiv' >
                        <h4 className='UserName'>{event.players}</h4>
                        <h1 className='EventInfo'>{event.game_type}</h1>
                        <h3 className='EventInfo'>{event.time}</h3>
                    </div>
                ))}
            </div> : null}
            <div className='AddEventDiv' onClick={() => setModal(true)}>
                <h1>Add an event!</h1>
            </div>
            {modal === true ? 
                <div className="ModalBackground">
                    <div className="ModalShell">
                        <button className='XButton' onClick={()=> setModal(false)}> X </button>
                        <div className="FormShell">
                            <form className='EventForm' onSubmit={handleSubmit}>
                                <label className='FormLabel'>
                                    Players :
                                    <input type="text" name="players" value={newEvent.players} onChange={handleChange}/>
                                </label>
                                <label className='FormLabel'>
                                    Location :
                                    <input type="text" name="location" value={newEvent.location} onChange={handleChange}/>
                                </label>
                                <label className='FormLabel'>
                                    Game Type :
                                        <input type='text' name="game_type" value={newEvent.game_type} onChange={handleChange}/>
                                </label>
                                <label className='FormLabel'>
                                    Time :
                                    <input type="text" name="time" value={newEvent.time} onChange={handleChange}/>
                                </label>
                                <button className='FormButton'>Add Event</button>
                            </form>
                        </div>
                    </div>
                </div> : null}
            <Tabs />
        </div>
    )
}

export default Home;