import Header from "./Header";
import Footer2 from "./Footer2";

const Basset = () => {
    return(
        <>
        <Header />
            <div class="md:text-xl text-lg font-bold md:pl-[98px] pl-6 md:pr-6 pr-8 pt-14 md:mr-48 text-grey">iASSET</div>
            <div class='grid grid-col-4 gap-9 border border-grey border-opacity-20 rounded md:mx-[98px] mx-4 py-8 pl-8 md:mr-24 md:my-8 my-4 md:pr-0  pr-8'>

                <span class="col-start-1 col-span-2 md:inline-grid grid grid-cols-2">
                    <div class='col-start-1 col-span-2 md:text-xs text-[10px] font-medium text-grey'>CLAIMABLE REWARDS</div>
                    <div class='col-start-1 col-span-2 font-medium text-grey'><span class='md:text-xl text-sm'>0</span> <span class='md:text-xs text-[10px]'>iUSD+</span></div>
                    <div class='col-start-2 col-span-2 flex justify-end'><a href="/Claim"><button class='border border-grey border-opacity-20 bg-green text-white md:text-sm text-[10px] md:px-9 px-3 py-1 hover:bg-hovergreen rounded'>Claim Rewards</button></a></div>
                </span>

                
                <span class="md:col-start-3 col-start-1 col-span-2 md:inline-grid grid grid-cols-2 md:border-l md:border-t-0 md:pl-8 border-t border-grey border-opacity-20">
                    <div class='col-start-1 col-span-2 md:text-xs text-[10px] font-medium pt-8 text-grey'>WITHDRAWABLE indexx</div>
                    <div class='col-start-1 col-span-2 font-medium text-grey'><span class='md:text-xl text-sm'>0</span> <span class='md:text-xs text-[10px]'>indexx</span></div>
                    <div class='col-start-2 col-span-2 flex justify-end'><button class='border border-grey border-opacity-20 text-green md:text-sm text-[10px] md:px-9 px-6 py-1 hover:bg-green hover:text-white rounded md:mr-8'><a href="/Withdraw" class='text-grey'>Withdraw</a></button></div>
                </span>

            </div>
            <Footer2 />
        </>
    );
}

export default Basset;