import './Landing.css';
import Carousel from '../../components/Carousel/Carousel'
import {Link} from 'react-router-dom'

export default function Landing({setUser}){
    return(
        
        <div className="divOne">
            <div className="signUpDiv">
                <p>Welcome to Nerd Nation, a place where nerds, fanatics, and all around obsessive lovers of content can connect and gather. </p>
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="demoDiv1">
                <h1>Insert Carousel Title Here</h1>
            <Carousel></Carousel>
            </div>
            <div className="demoDiv2">
                <h1>Second title thing</h1>
                <h2>An image here or something</h2>
            </div>
            <div className="loginDiv">
                <Link to='/login'>Log In</Link>
                <p>More lorem ipsum because I hate typing</p> 
                </div>
        </div>
    )
}