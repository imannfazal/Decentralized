import img from '../../assets/new.png';
import React from 'react';
import Header from './Header';
const Govern = () => {
    return (
        <>
            <Header />
            <div class="md:text-xl text-lg font-bold text-grey md:pl-[104px] pl-6 md:pr-6 pr-8 pt-14 md:mr-48 ">GOVERNANCE</div>
            <div class=''>
                <span class="inline-grid grid-col-3 gap-2 flex justify-start border border-grey border-opacity-20 rounded md:ml-[104px] ml-6 mb-9 md:mb-0 px-7 md:px-0" >
                    <div class='md:text-xs text-[10px] font-normal md:pl-9 md:pt-9 pt-4 pb-4'>iNDEXX PRICE</div> 
                    <div class='md:pl-9 md:pb-9 pb-4 text-grey'><span class='md:text-2xl text-lg font-medium'>1.755</span> <span class='text-lg'>iUSD+</span></div>

                    <div class='col-start-1 col-span-full border-t border-grey border-opacity-20'><div class='md:text-xs text-[10px] font-normal  md:pl-9 md:pt-9 pt-4 pb-4'>TOTAL STAKED </div></div>
                    <div class='md:pl-9  md:pb-9 pb-6 text-grey'><span class='md:text-2xl text-lg font-medium'>38.47M</span> <span class='text-lg pr-40'>indexx</span></div>
                </span>
                <span class='inline-grid grid-col-3 gap-2 pb-12 border border-grey border-opacity-20 rounded md:ml-8 mb-4 md:pr-9 ml-6 mr-6 md:mr-0'>
                    <div class='flex justify-center col-start-1 col-span-3 text-2xl text-grey pt-9 pl-12'><img src={img} width="80"></img></div>
                    <div class='flex justify-center col-start-1 col-span-3 md:text-2xl text-lg text-grey py-9 pl-12'>iNDEXX BANK (iNEX)</div>
                    <div class=' col-start-2 text-grey md:pl-9 pb-6'><span class='md:text-xs text-[10px] border border-grey border-opacity-20 rounded py-1 px-4 bg-white'>APR</span> <span class='text-sm'>0.11 %</span></div>
                    <div class='col-start-1 col-span-1 ml-9'><a href='/Buy&Sell'><button class='border border-grey border-opacity-20 bg-green text-white md:text-xs text-[10px] md:px-7 px-4 py-1 hover:bg-hovergreen rounded'>Trade iNEX</button></a></div>
                    <div class='col-start-3 col-span-1 pr-6 md:pr-0'><a href='/GovStake'><button class=' border border-grey border-opacity-20 md:px-7 px-4 py-1 bg-green text-white md:text-xs text-[10px] hover:bg-hovergreen rounded'>Gov Stake</button></a></div>
                </span>
                <a href='/Provide'><span class='inline-grid grid-col-3 gap-2 pb-12 border border-grey border-opacity-20 rounded md:ml-8 ml-6 mr-6 md:mr-0 mb-4 md:pr-28 hover:bg-light px-20'>
                    <div class='flex justify-center col-start-1 col-span-3 md:text-2xl text-lg text-grey pt-9 md:pl-12'><img src={img} width="80"></img></div>
                    <div class='flex justify-center col-start-1 col-span-3 md:text-2xl text-lg text-grey py-9 md:pl-12'>iNEX-USD LP {'>'}  </div>
                    <div class='col-start-1 col-span-1  md:ml-12 pt-7'><span class='md:text-xs text-[10px] border border-grey border-opacity-20 rounded py-1 px-7'>APR</span> <div class='text-sm pl-5 pt-2'>16.94%</div></div>
                    <div class='col-start-3 col-span-1  pt-7'><span class='md:text-xs text-[10px] border border-grey border-opacity-20 rounded-sm py-1 px-3'>Total Staked</span> <div class='text-sm pl-7 pt-2'>6.7M</div></div>
                </span></a>
            </div>
            <div class="container mx-auto flex flex-wrap pt-6 pb-1 flex-col md:flex-row items-center bg-black md:text-sm text-xs">
                <div class="pt-6 md:mr-64 md:pr-16 justify-end"><a href='https://forum.anchorprotocol.com/'><button class='border border-grey border-opacity-20 bg-green text-white px-9 py-1 hover:bg-hovergreen rounded mr-3'>Join Forum</button></a><a href='/Poll'><button class='border border-grey border-opacity-20 py-1 px-9 rounded hover:bg-lighthover text-grey rounded'>Create Poll</button></a></div>
            </div>
        </>
    );
}

export default Govern;