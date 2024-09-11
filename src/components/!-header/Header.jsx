import { Link } from "react-router-dom";

function Header() {

    const awarning = () => alert("Ainda estamos trabalhando nisso! Desculpem-nos o transtorno...");

    return ( 
        <>
            <div className="header-container z-[200] fixed flex items-center w-full px-10 py-4">
                <div className="fixed logo-container size-fit">
                    <Link to="/Home">
                        <img src="../../public/logo.svg" alt="Logo da Fórmula E" className="w-44" />
                    </Link>
                </div>

                <nav className="mx-auto py-1 px-8 text-xl font-normal text-light-grey rounded-full bg-header-blue bg-opacity-55 backdrop-blur-[2px] border border-light-grey/40">
                    <ul className="flex gap-11">
                        {[
                            ['Notícias', '#'],
                            ['Comunidade', '#'],
                            ['Estatísticas', '#'],
                            ['Equipes', '#']
                        ].map(([titulo, url]) => (
                            <li><Link to={url} className="hover:text-white ease-in-out duration-300">{titulo}</Link></li>
                        ))}
                    </ul>
                </nav>

                <div className="fixed right-10 flex items-center gap-3 text-royal-blue">
                    <button onClick={awarning}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{fill: 'rgba(244, 244, 244, 0.77)', transform: '', msFilter:''}}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></button>
                    <button onClick={awarning}><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z"/></svg></button>
                </div>
                
            </div>
        </>
        
     );
}

export default Header;