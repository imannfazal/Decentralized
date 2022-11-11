import logo from "../../assets/logonew.png";
const Header = () => {
    return (
        <header class="text-white sticky top-0 z-20">
            <div class="bg-blackbg h-[70px]">
                <div class="container mx-auto md:flex md:flex-wrap pt-6 pb-1 md:flex-row items-center bg-black ">
                    <a href="https://www.indexx.ai/"><img class="leading-normal w-[60px] mt-2 " src={logo} alt="index logo" /></a>
                    <nav class="md:static fixed botttom-0 top-0 bg-grey w-10/12 md:w-auto md:bg-transparent md:ml-4 pb-5 p-2 md:pl-4 md:flex md:flex-wrap items-center md:text-base md:space-x-5 md:visible space-y-5 md:space-y-0 text-whitebg">
                        <a class="mr text-white text-sm hover:text-selected" href="/indexxBank">DASHBOARD</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/MyPage">MY PAGE</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Earn">STAKE TO EARN</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Borrow">BORROW</a>
                        <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/bASSET">iASSET</a>
                        <a class="text-white text-sm hover:text-selected" href="/indexx-bank/Govern">GOVERN</a>
                    </nav>
                    <button class="inline-flex border rounded-full border-lgreen hover:border-green py-0.5 px-3 text-xs hover:text-green text-lgreen md:ml-[450px]  mr-5 md:mt-0 mb-5"><a href="/*" class='text-lgreen'>indexx.ai</a></button>
                    <button class="inline-flex items-center border rounded-full border-lgreen hover:border-green py-0.5 px-3 text-xs hover:text-lgreen text-lgreen md:mt-0 mb-5">Connect Wallet</button>
                </div>
            </div>
        </header>
    );
}

export default Header;