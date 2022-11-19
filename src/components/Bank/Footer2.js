import lady from '../../assets/womanFlipCoin.svg';
import yt from '../../assets/youtTubeIcon.svg';
import insta from '../../assets/instagramIcon.svg';
import twi from '../../assets/twitterIcon.svg';
import red from '../../assets/redditIcon.svg';
import index from '../../assets/indexxGrey.png';
import need from '../../assets/need.png';
const Footer2 = () => {
    return(
        <>
        <div class="relative h-[460px] w-full">
        <div class='flex justify-end w-28 ml-[1200px] mt-64 mb-5 items-end'><img alt='img' src={need}></img></div>
            <span class="absolute inset-x-0 bottom-0 h-[350px] w-full bg-fbg">
            <span class="absolute bottom-0 right-0 w-[550px] pr-4"><img alt='img' src={lady}></img></span>
            <span class="flex justify-center items-center w-[100px] ml-16 mt-24"><img alt='img' src={insta} width="25" class='mr-1' /><img alt='img' src={red} width="25" class='mr-1'/><img alt='img' src={yt} width="25" class='mr-1'/><img alt='img' src={twi} width="25" /></span>
            <span class='flex justify-center items-center -mt-28 mr-24'><img alt='img' src={index} width="150"/></span>
            <span class='flex justify-center items-center text-light text-xs text-center leading-relaxed mr-24'>Indexx stock token is the world first coin <br/>pegged with world largest stock market <br/>index the S&P 500. Pioneered the concept in <br/>the cryptocurrency space. <br/><br/>949-228-9079<br/><br/>indexx Limited, CUB Financial Centre,

            <br/>GF6, Lyford Cay, Nassau, Bahamas.<br/><br/> 550 Newport Center Drive<br/>Newport Beach,<br/>CA 92660 United State</span>
            </span>
        </div>
        </>
    );
}

export default Footer2;