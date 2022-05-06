import Carousel from "../../components/Carousel/Carousel";
import {Link} from 'react-router-dom'
export default function UserHome(){
    return(
        <div className="divTwo">
            <div className="carouselDiv">
                <Carousel />
            </div>
            <div className="connectionsDiv">
                <p>This is where the feed goes </p>
            </div>
            <Link onClick={()=>{localStorage.removeItem('token')}} to='/'>Logout With This</Link>
        </div>

    )
}