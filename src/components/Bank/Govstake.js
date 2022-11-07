import React from 'react';
import Header from './Header';

const Govtstake = () => {
    return(
        <>
        <Header />
        <div class="container mx-auto flex flex-wrap pt-6 pb-1 flex-col md:flex-row items-center bg-black">
            <div class="md:text-xl text-lg font-bold text-all pt-6 md:pb-6">ANC Governance</div><br />
        </div>
        <div class='md:flex md:justify-center md:pl-16 px-6'>
        <div class='md:inline-grid grid-col-3 border border-grey border-opacity-20 rounded md:ml-4 p-8'>
            <div class='col-start-1 pb-6 text-sm'>Stake</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-20 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 col-span-3 flex justify-center'><button class='border border-grey border-opacity-20 rounded md:px-56 px-32 md:py-3 py-2 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Stake</button></div>
        </div>
        <div class='md:inline-grid grid-col-3 border border-grey border-opacity-20 rounded md:ml-4 p-8'>
            <div class='col-start-1 pb-6 text-sm'>Unstake</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-20 rounded md:pr-72 py-2 pl-2'><input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00"  /></div>
            <div class='col-start-1 col-span-3 flex justify-center'><button class='border border-grey border-opacity-20 rounded md:px-56 px-28 md:py-3 py-2 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Unstake</button></div>
        </div>
        </div>
        </>
       
    );
}

export default Govtstake;
