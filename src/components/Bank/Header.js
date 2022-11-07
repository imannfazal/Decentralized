import logo from "../../assets/logonew.png";
const Header = () => {
    return (
        <header class="text-white sticky top-0 z-20">
            <div class="bg-blackbg">
            <div class="container mx-auto md:flex md:flex-wrap pt-6 pb-1 md:flex-row items-center bg-black ">
                <a class="flex title-font font-medium md:items-center text-gray-900 ">
                    <a href="https://www.indexx.ai/"><img class="leading-normal w-20" src={logo}  alt="index logo" /></a>
                </a>
                <nav class="md:static fixed botttom-0 top-12 bg-grey w-10/12 md:w-auto md:bg-transparent md:ml-4 md:py-1 p-2 md:pl-4 md:flex md:flex-wrap items-center md:text-base md:space-x-5 md:visible space-y-5 md:space-y-0 text-whitebg">
                    <a class="mr-5 text-white text-sm hover:text-selected" href="/indexxBank">DASHBOARD</a>
                    <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/MyPage">MY PAGE</a>
                    <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Earn">STAKE TO EARN</a>
                    <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Borrow">BORROW</a>
                    <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/bASSET">iASSET</a>
                    <a class="mr-5 text-white text-sm hover:text-selected" href="/indexx-bank/Govern">GOVERN</a>
                </nav>
                <a href="/*"><button class="inline-flex border rounded-full border-white hover:border-selected py-1 px-3 text-xs hover:text-selected text-white md:ml-[456px] mt-4 mr-1 md:mt-0">indexx.ai</button></a>
                <button class="inline-flex items-center border rounded-full border-white hover:border-selected py-1 px-3 text-xs hover:text-selected text-white mt-4 md:mt-0">Connect Wallet</button>
            </div>
            </div>
        </header>
    );
}

export default Header;