import '../styling/settings.css'
import Tabs from "../components/tabs";

function Settings () {
    return (
        <div className="SettingsShell">
            <h1>Settings</h1>
            <div className="AccountContainer">
                
                <div className='SettingsDiv'>
                    <h4>Edit Profile</h4>
                    <h3> {'>'} </h3>
                </div>
                <hr className='Line'></hr>
                <div className='SettingsDiv'>
                    <h4>Privacy and Security </h4>
                    <h3> {'>'} </h3>
                </div>
                <hr className='Line'></hr>

                <div className='SettingsDiv'>
                    <h4>Notifications</h4>
                    <h3> {'>'} </h3>
                </div>
                <hr className='Line'></hr>
                <div className='SettingsDiv'>
                    <h4>Appearance</h4>
                    <h3> {'>'} </h3>
                </div>
                <hr className='Line'></hr>
                <div className='SettingsDiv'>
                    <h4>App info</h4>
                    <h3> {'>'} </h3>
                </div>
                <hr className='Line'></hr>
                <div className='SettingsDiv'>
                    <h4>Contact Support</h4>
                    <h3> {'>'} </h3>
                </div>   
                <hr className='Line'></hr>    
                <div className='SettingsDiv'>
                    <h4>Log Out</h4>
                    <h3> {'>'} </h3>
                </div>   
                <hr className='Line'></hr>                    
            </div>
            <Tabs />
        </div>
    )
}

export default Settings; 