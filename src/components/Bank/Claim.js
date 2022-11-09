import Header from "./Header";

const Claim = () => {
    return(
        <>
        <Header />
        <div class='mx-32'>
            <div class='flex justify-center border border-grey border-opacity-20 rounded my-12 mx-80'>
                <div class='grid grid-col-3 gap-6 pb-12'>
                    <div class='flex justify-center col-start-2 text-2xl text-grey py-9'>Claim Rewards </div>
                    <div class=' col-start-2 text-grey pl-9'><span class='text-3xl font-medium'>0</span> <span class='text-sm'>iUSD+</span></div>

                    <div class='col-start-1 -ml-28 text-xs py-4  text-grey'>Tx Fee</div>
                    <div class='col-start-3 -mr-28 text-xs flex justify-end py-4 text-grey'>0.25 iUSD+</div>

                    <button class='col-start-1 col-span-3 -mx-28 border border-grey border-opacity-20 bg-green text-white text-sm px-32 py-1 hover:bg-hovergreen rounded'>Claim</button>
                </div>
                
            </div>
            </div>
        </>
    );
}

export default Claim;