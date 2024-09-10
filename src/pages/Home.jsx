import Carousel from "../components/carousel/Carousel";
import carousel_infos from "../assets/infos/carousel.json";
import Cards from "../components/cards/Cards";
import cards_infos from "../assets/infos/cards.json";

function Home() {
    return ( 
        
        <div className="home-container h-[200vh]">

            <Carousel slider={carousel_infos} autoSlide={false} />

            <div className="mx-auto mt-28 mb-6 text-5xl font-semibold flex justify-center">
                <h2>Descubra o Mundo da Formula E</h2>
            </div>
            
            <Cards cards_props={cards_infos} />

        </div>
        
     );
}

export default Home;