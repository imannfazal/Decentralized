import React from 'react';
import Header from './Header';

const Second = () => {
    return(
        <>
        <Header />
        <div class="container mx-auto flex flex-wrap pt-6 pb-1 flex-col md:flex-row items-center bg-black">
            <div class="md:text-xl text-lg font-bold text-all pt-6 md:pb-6 md:mb-8">iNEX-USD LP</div><br />
        </div>
        <div class='md:flex md:justify-center md:pl-16 px-6'>
        <div class='md:inline-grid grid-col-3 border border-grey border-opacity-20 rounded md:ml-4 p-8'>
            <div class='col-start-1 pb-6'>Provide</div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Input</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Input iUSD+</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 col-span-3 flex justify-center'><button class='border border-grey border-opacity-20 rounded md:px-56 px-[95px] md:py-3 py-2 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Add Liquidity</button></div>
        </div>
        <div class='md:inline-grid grid-col-3 border border-grey border-opacity-20 rounded md:ml-4 p-8 mt-16 md:mt-0'>
            <div class='col-start-1 pb-6'>Withdraw</div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Input</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Output</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2 text-xs'>
            iNEX  : <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5 mb-2" placeholder="0.00" required /><div class='mt-1'>
            iUSD+ :  <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div></div>
            
            <div class='col-start-1 col-span-3 flex justify-center'><button class='border border-grey border-opacity-20 rounded md:px-56 px-[85px] md:py-3 py-2 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Remove Liquidity</button></div>
        </div>
        </div>
        </>
    );
}

export default Second;