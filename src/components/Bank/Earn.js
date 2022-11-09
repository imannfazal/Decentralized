import { useState } from 'react';
import Modal2 from './Modal2';
import './Earn.css';
import img from '../../assets/graph.png';
import Modal3 from './Modal3';
import Header from './Header';
const Earn = () => { 
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    return (
        <>
            <Header />
            <span class='inline-flex'>
                <span class="md:text-xl text-lg font-bold text-grey md:pl-[106px] pl-6 pr-6 pt-14 md:mr-32 ">STAKE TO EARN</span>
                <span class="md:text-xs text-[10px] font-normal text-grey md:ml-88 ml-32 pt-14 md:justify-end"><button class='border border-grey border-opacity-20 py-2 md:px-5 px-1 md:ml-[565px] rounded mr-1 mb-1 hover:bg-lighthover' onClick={()=> setShowModal(true)}>Protect Your Deposit</button><button onClick={()=> setShowModal2(true)} class='border border-grey border-opacity-20 py-2 md:px-12 px-7 rounded mr-1 mb-1 hover:bg-lighthover'>Buy iUSD+</button></span>
            </span>
            <div class='inline-flex justify-start'>
            <div class='grid grid-col-6 md:gap-7 gap-3 md:ml-[106px] ml-4 md:py-6 py-3 border border-grey border-opacity-20 rounded mt-4 md:px-6 px-3'>
                <div class='col-start-1 md:col-span-1 col-span-2  md:text-xs text-[10px] text-grey'>TOTAL DEPOSIT</div>
                <div class='col-start-1 col-span-5 md:pl-4 text-grey'><span class='text-xl font-medium'>0</span> <span class='md:text-xs text-[10px]'>USD</span></div>
                <div class='col-start-5 text-grey md:text-xs text-[10px] pt-9 pb-3'><button class='border border-grey border-opacity-20 bg-green text-white px-9 py-1 hover:bg-hovergreen rounded'>Deposit</button></div>
                <div class='col-start-6 md:text-xs text-[10px] pt-9 pb-3'><button class='border border-grey border-opacity-20 py-1 px-9 rounded hover:bg-lighthover text-grey rounded'>Withdraw</button></div>
                <div class='col-start-1 col-span-6 md:text-xs text-[10px] text-grey border-t border-grey border-opacity-20 pt-5'>EXPECTED INTEREST</div>
                <div class='col-start-1 col-span-5 md:pl-4 text-grey'><span class='md:text-xl text-lg font-medium'>0</span> <span class='md:text-xs text-[10px]'>USD</span></div>
                <div class='col-start-1 col-span-6 md:pl-4 text-grey md:text-xs text-[10px]'><div class="grid grid-cols-4">
                    <div><button class='border border-grey border-opacity-20 text-grey md:px-9 px-6 py-1 -mr-6 hover:bg-light rounded'>Year</button></div>
                    <div><button class='border border-grey border-opacity-20  text-grey md:px-9 px-6 py-1 mr-1  -ml-2 hover:bg-light rounded'>Month</button></div>
                    <div><button class='border border-grey border-opacity-20 text-grey md:px-9 px-6 py-1 hover:bg-light rounded'>Week</button></div>
                    <div><button class='border border-grey border-opacity-20 text-grey md:px-9 px-7 py-1 hover:bg-light rounded'>Day</button></div>
                </div></div>
            </div>
            </div>
            <div class='inline-flex justify-end border border-grey border-opacity-20 rounded md:ml-8 ml-6 mr-8 mt-7 md:mt-0 pr-28 md:pr-0'>
            <div class="md:text-xs text-[10px] md:pl-9 pl-3 text-grey pt-6 md:mr-56 flex justify-start">INTEREST <br /> <br /></div><br />
            <div><br /><img class='md:w-32 w-28 md:flex md:justify-center md:mr-80 py-9 ml-16 md:ml-0' src={img}></img></div>
            </div>

            <Modal2 isVisible={showModal} onClose={()=> setShowModal(false)}/>

            <Modal3 isVisible={showModal2} onClose={()=> setShowModal2(false)}/>

            
        


        </>
    );
}

export default Earn;