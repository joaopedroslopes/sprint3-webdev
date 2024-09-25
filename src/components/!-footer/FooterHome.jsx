function FooterHome() {
    return ( 
        <div className="h-[240px] flex justify-between items-center px-[80px]">

            <img src="./icons/logo-footer.svg" alt="" />

            <div className="flex gap-5">
                <a href="#"><img src="./icons/tiktok.svg" alt="" /></a>
                <a href="#"><img src="./icons/snap.svg" alt="" /></a>
                <a href="#"><img src="./icons/twitter.svg" alt="" /></a>
                <a href="#"><img src="./icons/insta.svg" alt="" /></a>
            </div>

        </div>
     );
}

export default FooterHome;