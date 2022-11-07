import React from 'react';
import Header from './Header';

const Poll = () => {
    return(
        <>
        <Header />
        <div class="container mx-auto flex flex-wrap pt-6 pb-1 flex-col md:flex-row items-center bg-black">
            <div class="md:text-xl text-lg font-bold text-all pt-6 md:pb-6">Choose a proposal</div><br />
        </div>
        <div class='flex justify-center'>
        <div class='inline-grid grid-col-7 border border-grey border-opacity-20 rounded md:ml-4 p-8'>
            <div class='col-start-1 bg-allbg text-all md:text-lg text-sm pb-0.5'><a href='/modify-anc-distribution'>Modify iNEX Distribution <span class='md:ml-56 ml-9'>{'>'}</span> </a></div>
            

            <div class='col-start-1 bg-allbg text-all md:text-lg text-sm pb-0.5'><a href='/modify-borrow-interest'>Modify Borrow Interest <span class='md:ml-60 ml-[46px]'>{'>'}</span></a></div>
      
            <div class='col-start-1 bg-allbg text-all md:text-lg text-sm pb-0.5'>Modify Collateral Attribute <span class='md:ml-52 ml-[24px]'>{'>'}</span></div>
            
        </div>
        </div>
        </>
    );
}
export default Poll;

