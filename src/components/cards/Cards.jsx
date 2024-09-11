function Cards(props) {

    const cards_props = props.cards_props;

    return ( 
        <div className="flex justify-center items-center">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 size-fit max-w-screen-2xl mx-10">

                {cards_props.map(({ title, description, type, time, img }) => (
                    <div className="bg-white rounded-lg shadow-md w-[310px] h-[410px]">

                        <div className="rounded-t-lg h-[250px] bg-center bg-cover" style={{backgroundImage: `url(${img})`}}>
                            {/* <img src="/slide-show/carro-5.jpg" alt="" /> */}
                        </div>

                        <div className="flex flex-col justify-between h-[160px] p-3">

                            <div className="">
                                <h4 className="font-bold text-lg leading-5 mb-2">{title}</h4>
                                <p className="text-wrap font-light leading-5">{description}</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-royal-blue text-sm font-semibold">{type}</p>
                                <p className="text-sm font-extralight">{time}</p>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
     );
}

export default Cards;