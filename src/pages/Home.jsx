import Carousel from "../components/carousel/Carousel";
import carousel_infos from "../assets/infos/carousel.json"

function Home() {
    return ( 
        
        <div className="home-container h-screen">

            <Carousel slider={carousel_infos} autoSlide={false} />

        </div>
        
     );
}

export default Home;