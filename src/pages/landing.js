import '../styling/landing.css'
import { NavLink } from 'react-router-dom';

function Landing() {
    return (
        <div className="LandingShell">
            <div className='LogoShell'>
                <img className='LogoImg' src='https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='Basketball'/>
            </div>
            <div className='AppleSignUpDiv'>
                <NavLink className='Link' to='/home'>
                    <h3 className='LandingText'>Continue with Apple</h3>
                </NavLink>
            </div>
            <div className='EmailSignUpDiv'>
                <NavLink className='Link' to='/home' >
                    <h3 className='LandingText'>Continue with Email</h3>
                </NavLink>
            </div>
        </div>
    )
}

export default Landing;