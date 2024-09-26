    function Cards(props) {

        const cards_props = props.cards_props;

        return (
            <div className="min-h-screen flex justify-center items-center flex-col py-10">
                <div className="mb-10 lg:text-4xl md:text-3xl font-semibold flex justify-center">
                    <h2>Descubra o Mundo da Formula E</h2>
                </div>

                <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full max-w-screen-lg justify-items-center">

                    {cards_props.map(({ title, description, type, time, img }) => (
                        <div className="bg-white rounded-lg shadow-md w-full h-auto lg:h-[300px] lg:w-[240px]">

                            <div className="rounded-t-lg h-[200px] lg:h-[180px] bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}></div>

                            <div className="flex flex-col justify-between h-auto lg:h-[120px] p-3">

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