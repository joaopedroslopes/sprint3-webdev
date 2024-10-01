function FooterHome() {
    return (
        <div className="z-[2] h-[240px] md:h-[180px] flex flex-col md:flex-row justify-between items-center px-[20px] md:px-[80px] py-[20px] md:py-0">

            <img src="./icons/logo-footer.svg" alt="" />

            <div className="flex gap-5">
                <a target="_blank" href="https://www.tiktok.com/@fiaformulae?lang=en"><img src="./icons/tiktok.svg" alt="" /></a>
                <a target="_blank" href="https://www.snapchat.com/add/fiaformulae"><img src="./icons/snap.svg" alt="" /></a>
                <a target="_blank" href="https://twitter.com/FIAFormulaE"><img src="./icons/twitter.svg" alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/fiaformulae/"><img src="./icons/insta.svg" alt="" /></a>
            </div>

        </div>
    );
}

export default FooterHome;