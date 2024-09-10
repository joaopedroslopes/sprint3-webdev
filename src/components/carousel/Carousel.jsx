import { ChevronLeft, ChevronRight } from "react-feather";
import { useEffect, useState } from "react";

function Carousel(props, {autoSlide=false, autoSlideInterval=5000}) {

    const [curr, setCurr] = useState(0);

    const slider = props.slider;

    const prev = () => setCurr((curr) => (curr === 0 ? slider.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slider.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval);
    }, [])

    return ( 
        <div className="relative z-[100] h-4/6 w-full overflow-hidden">
            <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${curr * 100}%)`}}>
                {slider.map(({ path, alt }) => (
                    <img className="brightness-[.6] w-full h-full object-cover" src={path} alt={alt} />
                ))}
            </div>

            <div className="px-3 absolute inset-0 flex items-center justify-between">
                <button onClick={prev} className="p-1 hover:bg-black rounded-full hover:bg-opacity-20 ease-in-out duration-300">
                    <ChevronLeft strokeWidth={1.1} color="#F4F4F4" size={50} />
                </button>
                <button onClick={next} className="p-1 hover:bg-black rounded-full hover:bg-opacity-20 ease-in-out duration-300">
                    <ChevronRight strokeWidth={1.1} color="#F4F4F4" size={50} />
                </button>
            </div>
            <div className="absolute z-[300] bottom-4 right-0 left-0">
                <div className="flex items-end justify-center gap-2">
                    {slider.map((_, i) => (
                        <div 
                            key={i}
                            onClick={() => setCurr(i)} 
                            className={`
                                transition-all bg-hover-grey w-10 h-1 opacity-75 rounded-full cursor-pointer hover:bg-hover-light-grey hover:h-1.5 hover:rounded-md ease-in-out duration-300
                                ${curr === i ? "bg-hover-light-grey h-1.5" : "bg-hover-grey h-1"}
                            `} 
                        />
                    ))}
                </div>
            </div>
            
        </div>
     );
}

export default Carousel;

