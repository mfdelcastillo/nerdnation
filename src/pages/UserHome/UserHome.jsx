import Carousel from "../../components/Carousel/Carousel";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { getUser } from "../../utilities/users-service";

export default function UserHome(){
    const [user, setUser] = useState(getUser())
    console.log(user)
    return(
        <div className="divTwo">
            <Link to="/profile">Click here to set up your profile</Link>
            <div className="carouselDiv">
                <Carousel />
            </div>
            <div className="connectionsDiv">
                <p>This is where the connections feed goes </p>
            </div>
            <Link onClick={()=>{localStorage.removeItem('token')}} to='/'>Logout With This</Link>
        </div>

    )
}