import Carousel from "../../components/Carousel/Carousel";
export default function UserHome(){
    return(
        <div className="divTwo">
            <div className="carouselDiv">
                <Carousel />
            </div>
            <div className="connectionsDiv">
                <p>This is where the feed goes </p>
            </div>
        </div>

    )
}