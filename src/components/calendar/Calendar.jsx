import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useRef, useState } from "react";

function Calendar(props) {
    const stats = props.statistics;
    const containerRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCard(index);
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
        <div className="z-[2]">
            <div ref={containerRef} className="h-[600px] w-full flex overflow-x-auto relative hide-scrollbar">
                <div className="flex w-max" style={{ paddingLeft: "50%", paddingRight: "50%" }}>

                    {/* CARDS */}
                    {stats.map((race, index) => {
                        const { country, flag, city, date, img, positions } = race;

                        const dateParts = date.split(' ');
                        const day = dateParts[0];
                        const month = dateParts[1];

                        return (
                            <div
                                className="h-full w-fit flex items-center relative flex-shrink-0 cursor-pointer"
                                key={country}
                                onClick={() => handleCardClick(index)}
                            >
                                {selectedCard === index ? (
                                    <div className="h-full w-[600px] sm:w-[500px] md:w-[550px] lg:w-[600px]">
                                        <div className="h-full w-full flex justify-center items-center flex-col">

                                            {/* conteudo secundario */}

                                            <div>
                                                <div className="flex justify-center items-center gap-4">
                                                    <h3 className="text-light-grey uppercase text-[40px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold">{city} E-PRIX REVIEW</h3>
                                                    <div className="w-fit h-fit rounded-md overflow-hidden">
                                                        <span className={`fi fi-${flag} text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px]`}></span>
                                                    </div>
                                                </div>
                                                <p className="flex justify-center -mt-3 text-text-grey font-light text-[12px] sm:text-[10px] md:text-[11px] lg:text-[12px]">{date}</p>
                                            </div>

                                            <div className="w-[350px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-fit mx-auto my-8 rounded-lg overflow-hidden">
                                                <img src={`./race-highlights/${img}.webp`} alt={`${city} E-PRIX`} className="w-full h-full object-cover" />
                                            </div>

                                            <div className="w-full px-8 sm:px-6 md:px-7 lg:px-8">
                                                {Object.entries(positions).map(([positionKey, driver], posIndex) => (
                                                    <div className="flex justify-between flex-wrap">
                                                        <div key={posIndex} className="flex text-light-grey font-semibold text-[30px] sm:text-[20px] md:text-[25px] lg:text-[30px] items-center gap-5 sm:gap-3 md:gap-4 lg:gap-5">
                                                            <div className="flex items-center justify-between w-[45px] sm:w-[35px] md:w-[40px] lg:w-[45px]">
                                                                <p className="min-w-[23px] sm:min-w-[18px] md:min-w-[20px] lg:min-w-[23px] text-center">{posIndex + 1}</p>
                                                                <div className="h-[25px] sm:h-[15px] md:h-[20px] lg:h-[25px] w-[4px] sm:w-[2px] md:w-[3px] lg:w-[4px]" style={{ backgroundColor: `${driver.team_color}` }}></div>
                                                            </div>
                                                            <h5><span className="font-extralight">{driver.name}</span> {driver.surname}</h5>
                                                            <p className="text-[13px] sm:text-[10px] md:text-[11px] lg:text-[13px] text-text-grey font-light">{driver.team}</p>
                                                        </div>
                                                        <div className="flex items-center text-royal-blue">
                                                            <div className="text-[11px] sm:text-[9px] md:text-[10px] lg:text-[11px] size-fit px-[9px] sm:px-[7px] md:px-[8px] lg:px-[9px] py-[1.5px] sm:py-[0.5px] md:py-[1px] lg:py-[1.5px] bg-white rounded-full">
                                                                {driver.time}
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))}
                                            </div>

                                            
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-fit w-[180px] sm:w-[140px] md:w-[160px] lg:w-[180px]">

                                        {/* conteudo principal */}
                                        <div className="flex flex-col items-center gap-0 mx-auto -mt-40">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-fit rounded-md overflow-hidden">
                                                    <span className={`fi fi-${flag} text-[45px] sm:text-[35px] md:text-[40px] lg:text-[45px]`}></span>
                                                </div>
                                                <h5 className="text-text-grey uppercase text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]">{country}</h5>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                    <p className="text-light-grey uppercase text-[40px] font-semibold sm:text-[30px] md:text-[35px] lg:text-[40px]">{day}</p>
                                                    <p className="text-text-grey uppercase font-light text-[14px] sm:text-[10px] md:text-[12px] lg:text-[14px] -mt-3">{month}</p>
                                            </div>
                                        </div>

                                    </div>
                                )}

                                {/* linha azul vertical */}
                                {index !== stats.length - 1 && (
                                    <div className="bg-line-blue w-[1px] h-[85%] sm:h-[75%] md:h-[80%] lg:h-[85%] absolute right-0 top-0 bottom-0 my-auto"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* linha azul horizontal */}
            <div className="bg-line-blue w-[97%] h-[1px] mx-auto"></div>
            
        </div>
    );
}

export default Calendar;