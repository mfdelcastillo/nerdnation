import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function Carousel(){
    return(
        <Splide aria-label="My Favorite Images" options={{autoplay:true, type:'loop', interval: 1000}}>
            <SplideSlide>
                 <img src="https://via.placeholder.com/100/000000" alt="A THING"/>
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/100/FF0000" alt="A SECOND THING"/>
            </SplideSlide>
        </Splide>
    )}