import React from 'react';
import Header from './Header';

const Buy = () => {
    return(
        <>
        <Header />
        <div class='md:flex md:justify-center md:pl-16 pl-4 pr-4 md:pr-0 mt-24'>
        <div class='md:inline-grid grid grid-col-3 border border-grey border-opacity-30 rounded  p-8'>
            <div class='col-start-1 pb-6 text-sm font-medium'>Buy</div>
            <div class='col-start-1 bg-allbg text-grey md:text-sm text-xs pb-0.5'>From</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 md:py-2 pl-2 text-xs'>
            iUSD+ : <input type="text" id="first_name" class="bg-allbg text-gray-900 md:text-sm text-xs  p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 bg-allbg text-grey md:text-sm text-xs pb-0.5'>To</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 md:py-2 pl-2 text-xs'>
            iNEX : <input type="text" id="first_name" class="bg-allbg text-gray-900 md:text-sm text-xs  p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 col-span-3 flex justify-center font-medium'><button class='border border-grey border-opacity-20 rounded md:px-56 px-32 py-3 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Proceed</button></div>
        </div>
        <div class='md:inline-grid grid grid-col-3 border border-grey border-opacity-30 rounded md:ml-9 p-8 mt-16 md:mt-0'>
            <div class='col-start-1 pb-6 text-sm font-medium'>Sell</div>
            <div class='col-start-1 bg-allbg text-grey md:text-sm text-xs pb-0.5'>From</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 md:py-2 pl-2 text-xs'>iNEX : <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  p-2.5" placeholder="0.00"  /></div>
            <div class='col-start-1 bg-allbg text-grey md:text-sm text-xs pb-0.5'>To</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 md:py-2 pl-2 text-xs'>
            iUSD+ : <input type="text" id="first_name" class="bg-allbg text-gray-900 md:text-sm text-xs  p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 col-span-3 flex justify-center font-medium'><button class='border border-grey border-opacity-20 rounded md:px-56 px-32 py-3 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Proceed</button></div>
        </div>
        </div>
        </>
       
    );
}

export default Buy;