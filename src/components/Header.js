import logo from '../assets/white.png';
import poly from '../assets/Polygon.png';

const Header = () => {
    return (
        <header class="text-gray-600 bg-blue">
            <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a class="flex title-font font-normal items-center text-white mb-4 md:mb-0">
                    <img src={logo} class='w-20 h-10'/>
                    <span class="ml-3 text-xl">Decentralized</span>
                </a>
                <nav class="ml-[230px] flex flex-wrap items-center text-white justify-center">
                    <a class="mr-20 text-white inline-flex">Products<img src={poly} class='w-1 h-[4px] ml-1.5 mt-3'/></a>
                    <a class="mr-20 text-white inline-flex">Earn<img src={poly} class='w-1 h-[4px] ml-1.5 mt-3'/></a>
                    <a class="mr-5 text-white inline-flex">Company<img src={poly} class='w-1 h-[4px] ml-1.5 mt-3'/></a>
  
                </nav>
            </div>
        </header>
    );
}

export default Header;