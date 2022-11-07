import Liquidations from "./Liquidations";
import { useState } from "react";
import Header from "./Header";

const Borrow = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Header />
            <span class='inline-flex'>
                <span class="md:text-xl text-lg font-bold text-all md:pl-24 pl-6 md:pr-14 pr-8 pt-6 md:mr-48 ">BORROW</span>
                <span class="md:text-xs text-[10px] font-normal text-all md:pl-96 md:ml-96 ml-24 pt-6 justify-end"><button class='border border-grey border-opacity-20 py-2 px-3 rounded hover:bg-lighthover' onClick={()=> setShowModal(true)}>Participate in Liquidations</button></span>
            </span>
        <div class='border border-grey border-opacity-20 rounded md:ml-24 md:mr-16 ml-6 mr-6 mt-4 w-[350px] md:w-[1266px]'>
            <div class='grid grid-col-6 gap-4  py-6   md:pr-6 pr-3 pl-3'>
                <div class='col-start-1 col-span-4 md:text-xs text-[10px] md:pl-4 text-all'>POSITION MANAGEMENT</div>
                <span class='col-start-5 col-span-2 text-all md:text-xs text-[10px] flex justify-end'><button class='border border-grey border-opacity-20 bg-green text-white md:px-9 px-3 py-1 hover:bg-hovergreen rounded mr-1'>Borrow</button><button class='border border-grey border-opacity-20 bg-green text-white md:px-9 px-4 py-1 hover:bg-hovergreen rounded'>Repay</button></span>
            </div>
            <div class='flex justify-center'>
            <div class='md:inline-grid grid md:grid-col-8 grid-col-2 md:gap-4 gap-2  py-6 md:pr-6 pr-2 border border-grey border-opacity-20 rounded mx-4 mb-8'>
                <div class='col-start-1 md:text-xs text-[8px] text-all md:pr-64 md:pl-4 pl-2'>COLLATERAL VALUE</div>
                <div class='col-start-1 md:text-xl text-xs text-all md:pb-12 md:pl-4 pl-2'>$0</div>
            </div>
            <div class='md:inline-grid grid grid-col-2 md:gap-4 gap-2 py-6 md:pr-6 pr-2 md:pl-3 border border-grey border-opacity-20 rounded mb-8'>
                <div class='col-start-1 md:text-xs text-[8px] text-all md:pr-64 md:pl-4 pl-2'>BORROWED VALUE</div>
                <div class='col-start-1 md:text-xl text-xs text-all md:pb-12 md:pl-4 pl-2'>$0</div>
            </div>
            <div class='md:inline-grid grid grid-col-2 md:gap-4 gap-2 py-6 md:pr-6 pr-2 md:pl-3 border border-grey border-opacity-20 rounded mx-4 mb-8 text-green'>
                <div class='col-start-1 md:text-xs text-[8px] md:pr-80 md:pl-4 pl-2'>NET APR</div>
                <div class='col-start-1 md:text-xl text-xs md:pb-12 md:pl-4 pl-2'>10,912,724.75 %</div>
            </div>
        </div>
            </div>
            <div class='overflow-auto ml-6 md:ml-8 mr-4 md:w-[1394px]' >
            <div class='grid grid-col-6 gap-4  py-6   pr-6 pl-3 border border-grey border-opacity-20 rounded md:mx-16 mt-4'>
                <div class='col-start-1 col-span-3 md:text-xs text-[10px] md:pl-4 pl-1 text-all font-bold'>Collateral List</div>
                <span class='col-start-4 col-span-1 text-all md:text-xs text-[10px] flex justify-end text-grey md:pr-0 pr-3'>Price</span>
                <span class='col-start-5 col-span-1 text-all md:text-xs text-[10px] flex justify-end text-grey'>Provided</span>
                <span class='col-start-6 col-span-1 text-all md:text-xs text-[10px] flex justify-end text-grey md:pr-0 pr-3'>Actions</span>

                <div class='col-start-1 col-span-3 md:text-xs text-[10px] md:pl-4 pl-1 text-all font-bold md:pr-0 pr-16'>bETH</div>
                <span class='col-start-4 md:col-span-1 text-all md:text-xs text-[10px] flex justify-end'>$ 560M</span>
                <span class='col-start-5 col-span-1 text-all md:text-xs text-[10px] flex justify-end'>0 bETH</span>
                <span class='col-start-6 col-span-1 text-all md:text-xs text-[8px] flex justify-end'><button class='border border-grey border-opacity-20 py-1 px-3 mr-1 rounded hover:bg-lighthover'>Provide</button><button class='border border-grey border-opacity-20 py-1 px-3 rounded hover:bg-lighthover'>Withdraw</button></span>

                <div class='col-start-1 col-span-3 md:text-xs text-[10px] md:pl-4 pl-1 text-all font-bold'>bLUNA</div>
                <span class='col-start-4 col-span-1 text-all md:text-xs text-[10px] flex justify-end'>$ 560M</span>
                <span class='col-start-5 col-span-1 text-all md:text-xs text-[10px] flex justify-end'>0 bLuna</span>
                <span class='col-start-6 col-span-1 text-all md:text-xs text-[8px] flex justify-end'><button class='border border-grey border-opacity-20 py-1 px-3 mr-1 rounded hover:bg-lighthover'>Provide</button><button class='border border-grey border-opacity-20 py-1 px-3 rounded hover:bg-lighthover'>Withdraw</button></span>

            </div>
            </div>
            <Liquidations isVisible={showModal} onClose={()=> setShowModal(false)}/>
            

            
        </>
    );
}

export default Borrow;