import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useRef } from "react";

function Calendar(props) {
    const stats = props.statistics;
    const containerRef = useRef(null);

    const handleCardClick = (index) => {
        const container = containerRef.current;
        const card = container.children[0].children[index];
        const cardWidth = card.offsetWidth;
        const containerWidth = container.offsetWidth;
        const cardLeft = card.offsetLeft;

        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div ref={containerRef} className="h-[700px] w-full flex overflow-x-auto relative hide-scrollbar">
                <div className="flex w-max" style={{ paddingLeft: "50%", paddingRight: "50%" }}>

                    {/* CARDS */}
                    {stats.map((race, index) => {
                        const { country, flag, city, date, img, positions } = race;

                        return (
                            <div
                                className="h-full w-fit flex items-center relative flex-shrink-0 cursor-pointer"
                                key={country}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="h-fit w-[200px]">
                                    {/* conteudo principal */}
                                    <div className="flex flex-col items-center gap-1 mx-auto -mt-56">
                                        <div className="w-fit rounded-md overflow-hidden">
                                            <span className={`fi fi-${flag} text-[50px]`}></span>
                                        </div>
                                        <h5 className="text-text-grey uppercase">{country}</h5>
                                    </div>
                                </div>

                                {/* conteudo secundario */}
                                <div className="h-full w-[700px]">
                                    <div className="h-full w-full flex justify-center items-center flex-col">

                                        <div>
                                            <div className="flex justify-center items-center gap-5">
                                                <h3 className="text-light-grey uppercase text-[45px] font-semibold">{city} E-PRIX REVIEW</h3>
                                                <div className="w-fit h-fit rounded-md overflow-hidden">
                                                    <span className={`fi fi-${flag} text-[35px]`}></span>
                                                </div>
                                            </div>
                                            <p className="flex justify-center -mt-3 text-text-grey font-light">{date}</p>
                                        </div>

                                        <div className="w-[400px] h-fit mx-auto my-10 rounded-lg overflow-hidden">
                                            <img src={`./race-highlights/${img}.webp`} alt={`${city} E-PRIX`} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="w-full px-10">
                                            {Object.entries(positions).map(([positionKey, driver], posIndex) => (
                                                <div key={posIndex} className="flex text-light-grey font-semibold text-[40px] items-center gap-6">
                                                    <div className="flex items-center justify-between w-[50px]">
                                                        <p className="min-w-[25px] text-center">{posIndex + 1}</p>
                                                        <div className={`h-[30px] w-[5px] bg-${driver.team_color}`}></div>
                                                    </div>
                                                    <h5>{driver.name} {driver.surname}</h5>
                                                </div>
                                            ))}
                                        </div>

                                        {/* linha azul vertical */}
                                        {index !== stats.length - 1 && (
                                            <div className="bg-line-blue w-[1px] h-[90%] absolute right-0 top-0 bottom-0 my-auto"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* linha azul horizontal */}
            <div className="bg-line-blue w-[97%] h-[1px] mx-auto"></div>
        </>
    );
}

export default Calendar;