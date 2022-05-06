import Carousel from "../../components/Carousel/Carousel";
import {Link} from 'react-router-dom'

export default function UserHome(){
    return(
        <div className="divTwo">
            <Link to={`/home/${user.name}/profile`}>Click here to set up your profile</Link>
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