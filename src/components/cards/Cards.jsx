function Cards(props) {

    const cards_props = props.cards_props;

    return ( 
        <div className="h-screen flex justify-center items-center flex-col">
            <div className="mb-10 lg:text-4xl md:text-3xl font-semibold flex justify-center">
                <h2>Descubra o Mundo da Formula E</h2>
            </div>

            
            <div className="grid gap-6 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 size-fit max-w-screen-2xl">

                {cards_props.map(({ title, description, type, time, img }) => (
                    <div className="bg-white rounded-lg shadow-md w-[310px] h-[410px] lg:h-[330px] lg:w-[270px]">

                        <div className="rounded-t-lg h-[250px] lg:h-[200px] bg-center bg-cover" style={{backgroundImage: `url(${img})`}}></div>

                        <div className="flex flex-col justify-between h-[160px] lg:h-[130px] p-3">

                            <div className="">
                                <h4 className="font-bold text-lg lg:text-base lg:leading-4 leading-5 mb-2">{title}</h4>
                                <p className="text-wrap lg:text-sm font-light lg:leading-4 leading-5">{description}</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-royal-blue text-sm lg:text-xs font-semibold">{type}</p>
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