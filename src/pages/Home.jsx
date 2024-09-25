import Carousel from "../components/carousel/Carousel";
import carousel_infos from "../data/carousel.json";
import Cards from "../components/cards/Cards";
import cards_infos from "../data/cards.json";
import FooterHome from "../components/!-footer/FooterHome";
import Calendar from "../components/calendar/Calendar";
import race_infos from "../data/races.json"

function Home() {
    return ( 
        
        <div className="h-[375vh]">

            <Carousel slider={carousel_infos} autoSlide={false} />

            <Cards cards_props={cards_infos} />

            <div className="gradient bg-black h-[175vh]">

                <Calendar statistics={race_infos} />
                <FooterHome />

            </div>

        </div>
        
     );
}

export default Home;