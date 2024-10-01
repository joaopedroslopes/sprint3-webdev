import Carousel from "../components/carousel/Carousel";
import carousel_infos from "../data/carousel.json";
import Cards from "../components/cards/Cards";
import cards_infos from "../data/cards.json";
import FooterHome from "../components/!-footer/FooterHome";
import Calendar from "../components/calendar/Calendar";
import race_infos from "../data/races.json";
import CommunityShower from "../components/community-shower/CommunityShower";

function Home() {
    return (
        <div className="h-[350vh]">
            <Carousel slider={carousel_infos} autoSlide={false} />
            <Cards cards_props={cards_infos} />

            <div className="gradient bg-black h-[150vh] flex flex-col justify-between relative overflow-hidden">

                {/* Imagem de fundo à direita */}
                <div className="z-[1] absolute top-[58%] right-[-400px] w-[800px] h-[760px] bg-no-repeat bg-right bg-cover transform -translate-y-1/2 -rotate-[20deg] lg:right-[-200px] lg:w-[800px] lg:h-[760px] md:w-[600px] md:h-[570px] sm:w-[400px] sm:h-[380px]" style={{ backgroundImage: "url('./images/e.svg')" }}></div>
                {/* Imagem de fundo à esquerda */}
                <div className="z-[1] absolute top-[58%] left-[-400px] w-[800px] h-[760px] bg-no-repeat bg-left bg-cover transform -translate-y-1/2 -rotate-[190deg] lg:left-[-200px] lg:w-[800px] lg:h-[760px] md:w-[600px] md:h-[570px] sm:w-[400px] sm:h-[380px]" style={{ backgroundImage: "url('./images/e.svg')" }}></div>
                {/* Imagem de fundo em baixo */}
                <div className="z-[1] absolute bottom-[-400px] left-1/2 w-[800px] h-[760px] bg-no-repeat bg-center bg-cover transform -translate-x-1/2 rotate-[70deg] lg:bottom-[-200px] lg:w-[800px] lg:h-[760px] md:w-[600px] md:h-[570px] sm:w-[400px] sm:h-[380px]" style={{ backgroundImage: "url('./images/e.svg')" }}></div>

                <Calendar statistics={race_infos} />
                <CommunityShower />
                <FooterHome />
            </div>
        </div>
    );
}

export default Home;