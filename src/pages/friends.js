import '../styling/friends.css'
import pals from '../images/FriendsOnline.png'
import search from '../images/MagnifyingGlass.png'
import profile from '../images/ProfileBball.png'
import add from '../images/Add.png'
import message from '../images/Message.png'
import Tabs from '../components/tabs';

function Friends () {

    const onlineFriends = ['BBallDude13', 'CheekyUserName', 'IOnlyPlayHorse'];
    const offlineFriends = ['KingOfTheCourt', 'User_Name'];

    return (
        <div className="FriendListShell">
            <div className='UserDiv'>
                <div className='SearchContainer'>
                    <img  src={search} className='SearchImg' alt='SearchIcon'/>
                </div>
                <h2>MyUserName</h2>
                <div className='OnlineFriendsContainer'>
                    <img src={pals} className='OnlineFriendsImg' alt='OnlineFriends'/>
                </div>
                <h3 className='Friends'>5</h3>
            </div>
            <div className='OnlineShell'>
                <h2 className='OnlineStatus'>Online:</h2>
            </div>
            
            {onlineFriends.length !==0 ? 
                onlineFriends.map((friend)=>{
                    return (
                        <div className='OnlineFriendDiv'>
                            <div className='ProfileContainer'>
                                <img className='ProfileImg' src={profile} alt='ProfileImg'/>
                            </div>
                            <h3 className='UserNameText'>{friend}</h3>
                            <div className='AddContainer'>
                                <img className='AddImg' src={add} alt='AddImg' />
                            </div>
                            <div className='MessageContainer'>
                                <img className='MessageImg' src={message} alt='MessageBubble'/>
                            </div>
                        </div> 
                    )
                })
                : <h2>No Friends Online</h2>
            }
            <div className='OnlineShell'>
                <h2 className='OnlineStatus'>Offline:</h2>
            </div>
            {offlineFriends.length !== 0 ? 
                offlineFriends.map((friend)=>{
                    return(
                        <div className='OfflineFriendDiv'>
                            <div className='ProfileContainer'>
                                <img className='ProfileImg' src={profile} alt='ProfileImg'/>
                            </div>
                            <h3 className='UserNameText'>{friend}</h3>
                            <div className='AddContainer'>
                                <img className='AddImg' src={add} alt='AddImg' />
                            </div>
                            <div className='MessageContainer'>
                                <img className='MessageImg' src={message} alt='MessageBubble'/>
                            </div>
                        </div>
                    )
                })
                : <h2>All Friends Online</h2>
            }
            <Tabs />
        </div>
    )
}
export default Friends;