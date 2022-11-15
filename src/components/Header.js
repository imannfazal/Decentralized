import logo from '../assets/white.png';
import poly from '../assets/Polygon.png';
import background from '../assets/bg33.png';
import './Header.css';

const Header = () => {
    return (
        <header class="text-gray-600 bg-blue bg-opacity-90 bg-fill" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>

            <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a class="flex title-font font-normal items-center text-white mb-4 md:mb-0">
                    <img src={logo} class='w-20 h-8' />
                    <a href='/*'><span class="ml-3 text-xl text-white font-medium hover:text-opacity-80">Decentralized</span></a>
                </a>
                <nav class="ml-[130px] flex flex-wrap items-center text-white justify-center mt-5">
                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-medium text-base">
                                <a class='text-white '>Products</a>
                                <div class="dropdown-menu absolute top-0 hidden h-auto flex pt-4 mt-3">
                                    <ul class="block w-[130px] bg-blue bg-opacity-80 px-5 py-4 ">
                                        <li class="py-1"><a href='https://inex.indexx.ai/indexx-exchange/buy-sell' class="block text-white font-normal text-sm cursor-pointer">Centralized</a></li>
                                        <li class="py-1"><a href='/*' class="block text-white font-normal text-sm  cursor-pointer">Decentralized</a></li>
                                        <li class="py-1"><a href='/*' class="block text-white font-normal text-sm cursor-pointer">indexx Tokens</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <img src={poly} class='w-1 h-[4px] mt-[13px]' />
                    </a>
                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-medium text-base">
                                <a class='text-white'>Earn</a>
                                <div class="dropdown-menu absolute top-0 hidden h-auto flex pt-4 mt-3">
                                    <ul class="block w-[130px] bg-blue bg-opacity-80 px-5 py-4 ">
                                        <li class="py-1"><a href='/TradeToEarn' class="block text-white font-normal text-sm cursor-pointer">Trade to earn</a></li>
                                        <li class="py-1"><a href='/indexxBank' class="block text-white font-normal text-sm cursor-pointer">Grow Fortune</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <img src={poly} class='w-1 h-[4px] mt-[13px]' />
                    </a>
                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-medium  text-base">
                                <a class='text-white'>Company</a>
                                <div class="dropdown-menu absolute top-0 hidden h-auto flex pt-4 mt-3">
                                    <ul class="block w-[170px] bg-blue bg-opacity-80 px-5 py-4">
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">About</a></li>
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">Hybrid Exchange</a></li>
                                        <li class="py-1 "><a href='https://register.affiliate.indexx.ai/' class="block text-white font-normal text-sm cursor-pointer">Affiliate Program</a></li>
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">Blog</a></li>
                                        
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <img src={poly} class='w-1 h-[4px] mt-[13px]' />
                    </a>

                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-medium  text-base">
                                <a class='text-white'>Fortune</a>
                                <div class="dropdown-menu absolute top-0 hidden h-auto flex pt-4 mt-3">
                                    <ul class="block w-[170px] bg-blue bg-opacity-80 px-5 py-4">
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">Fortune Daily</a></li>
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">Hedge Edge</a></li>
                                        
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <img src={poly} class='w-1 h-[4px] mt-[13px]' />
                    </a>

                </nav>

            </div>



        </header>
    );
}

export default Header;