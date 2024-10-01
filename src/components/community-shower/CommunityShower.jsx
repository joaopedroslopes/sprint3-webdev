function CommunityShower() {

    const awarning = () => alert("Ainda estamos trabalhando nisso! Desculpem-nos o transtorno...");

    return (
        <>
            <div className="z-[2] w-full flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:max-w-[660px]">
                        <p className="text-cyan-e">NOVIDADE</p>
                        <h5 className="text-light-grey font-semibold leading-tight mb-4 text-2xl sm:text-3xl lg:text-[40px]">FAÇA PARTE DA NOVA COMUNIDADE DE FÃS DA FÓRMULA E!</h5>
                        <p className="text-light-grey font-extralight leading-6 mb-6 text-justify text-base sm:text-lg lg:text-[18px]">Foi lançado a nova aba de comunidade da Fórmula E!!! Agora você pode dar apoio à sua equipe, postar comentários, conversar com as equipes, postar e assistir vídeos curtos, e muito mais! Acesse a BETA agora mesmo e seja um dos primeiros fanáticos por Fórmula E!!</p>
                        <button onClick={awarning} className="px-8 py-2 bg-light-grey rounded-full font-bold text-royal-blue text-base sm:text-lg lg:text-[18px]">ACESSE O BETA</button>
                    </div>
                    <div className="w-full lg:max-w-[660px]">
                        <div className="rounded-lg overflow-hidden">
                            <img src="./images/unplugged.webp" alt="" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommunityShower;