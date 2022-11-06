import logo from '../assets/white.png';
import poly from '../assets/Polygon.png';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header class="text-gray-600 bg-blue ">
            <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a class="flex title-font font-normal items-center text-white mb-4 md:mb-0">
                    <img src={logo} class='w-20 h-10' />
                    <a href='/*'><span class="ml-3 text-xl text-white">Decentralized</span></a>
                </a>
                <nav class="ml-[230px] flex flex-wrap items-center text-white justify-center pt-2">
                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-normal text-base ">
                                <a class='text-white'>Products</a>
                                <div class="dropdown-menu absolute top-0 hidden h-auto flex pt-4 mt-3">
                                    <ul class="block w-[130px] bg-blue bg-opacity-80 px-5 py-4 ">
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">Centralized</a></li>
                                        <li class="py-1"><a class="block text-white font-normal text-sm  cursor-pointer">Decentralized</a></li>
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">indexx Tokens</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <img src={poly} class='w-1 h-[4px] mt-[13px]' />
                    </a>
                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-normal text-base">
                                <a class='text-white'>Earn</a>
                                <div class="dropdown-menu absolute top-0 hidden h-auto flex pt-4 mt-3">
                                    <ul class="block w-[130px] bg-blue bg-opacity-80 px-5 py-4 ">
                                        <li class="py-1"><a href='/TradeToEarn' class="block text-white font-normal text-sm cursor-pointer">Trade to earn</a></li>
                                        <li class="py-1"><a class="block text-white font-normal text-sm cursor-pointer">indexx Bank</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <img src={poly} class='w-1 h-[4px] mt-[13px]' />
                    </a>
                    <a class="mr-20 text-white inline-flex">
                        <ul class="w-full">
                            <li class="dropdown relative inline pr-1 text-white cursor-pointer font-normal text-base">
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


                </nav>

            </div>



        </header>
    );
}

export default Header;