import Carousel from "../components/carousel/Carousel";
import carousel_infos from "../data/carousel.json";
import Cards from "../components/cards/Cards";
import cards_infos from "../data/cards.json";

function Home() {
    return ( 
        
        <div className="home-container h-[200vh]">

            <Carousel slider={carousel_infos} autoSlide={false} />

            <div className="mx-auto mt-28 mb-10 lg:text-5xl md:text-4xl sm:text-3xl font-semibold flex justify-center">
                <h2>Descubra o Mundo da Formula E</h2>
            </div>
            
            <Cards cards_props={cards_infos} />

        </div>
        
     );
}

export default Home;