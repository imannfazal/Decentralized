import lady from '../assets/petFooter.png';
import yt from '../assets/yt1.png';
import insta from '../assets/inst2.png';
import twi from '../assets/twit2.png';
import red from '../assets/redit2.png';
import index from '../assets/indexx.png';
import need from '../assets/need.png';
const Footer = () => {
    return(
        <>
        <div class="relative h-[430px] w-full text-white">
            <div class='flex justify-end w-28 ml-[1338px] mt-64 mb-5 items-end'><img alt='img' src={need}></img></div>
            <span class="absolute inset-x-0 bottom-0  w-full bg-blue">
            <span class="absolute bottom-0 right-0 w-[350px] h-[350px] pr-4"><img alt='img' src={lady}></img></span>
            <span class="flex justify-center items-center w-[100px] ml-16 mt-24"><img alt='img' src={insta} width="25" class='mr-2' /><img alt='img' src={red} width="25" class='mr-2'/><img alt='img' src={yt} width="25" class='mr-2'/><img alt='img' src={twi} width="25" /></span>
            <span class='flex justify-center items-center -mt-[110px] mr-3'><img alt='img' src={index} width="170"/></span>
            <span class='flex justify-center items-center text-white text-xs text-center leading-relaxed mr-24 pb-3'>Indexx stock token is the world first coin <br/>pegged with world largest stock market <br/>index the S&P 500. Pioneered the concept in <br/>the cryptocurrency space. <br/><br/>indexx Limited, CUB Financial Centre,

            <br/>GF6, Lyford Cay, Nassau, Bahamas.<br/><br/> 550 Newport Center Drive<br/>Newport Beach,<br/>CA 92660 United States.</span>
            </span>
        </div>
        </>
    );
}

export default Footer;