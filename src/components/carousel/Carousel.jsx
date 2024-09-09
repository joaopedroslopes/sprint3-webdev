function Carousel() {
    return ( 
        <>
            <div className="slider h-4/6 w-full overflow-hidden">
                <div className="slides flex w-[500%] h-full">
                    {/* Radio buttons */}
                    <div className="hidden">
                        <input type="radio" name="radio-slider" id="radio-slider-1" />
                        <input type="radio" name="radio-slider" id="radio-slider-2" />
                        <input type="radio" name="radio-slider" id="radio-slider-3" />
                        <input type="radio" name="radio-slider" id="radio-slider-4" />
                        <input type="radio" name="radio-slider" id="radio-slider-5" />
                    </div>
                    {/* Radio buttons */}

                    {[
                        ['/slide-show/carro-vermelho-audi.jpg', 'imagem 1'],
                        ['/slide-show/carro-1.jpg', 'imagem 2'],
                        ['/slide-show/carro-2.jpg', 'imagem 3'],
                        ['/slide-show/carro-3.jpg', 'imagem 4'],
                        ['/slide-show/carro-4.jpg', 'imagem 5']
                    ].map(([href, alt]) => (
                        <div className="slide w-1/5">
                            <img className="w-full" src={href} alt={alt} />
                        </div>
                    ))}

                    {/* Navigation auto */}
                    <div className="auto-navigation">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                    </div>
                    {/* Navigation auto */}
                </div>

                <nav className="manual-navigation absolute mt-[-20px] w-full h-[2px] flex gap-2 justify-center items-end">
                    {[
                        'radio-slider-1',
                        'radio-slider-2',
                        'radio-slider-3',
                        'radio-slider-4',
                        'radio-slider-5'
                    ].map((tagId) => (
                        <label htmlFor={tagId} className="manual-btn bg-hover-grey w-10 h-1 opacity-75 rounded-full cursor-pointer 
                        hover:bg-hover-light-grey hover:h-1.5 hover:rounded-md ease-in-out duration-300"></label>
                    ))}
                </nav>
            </div>
        </>
     );
}

export default Carousel;