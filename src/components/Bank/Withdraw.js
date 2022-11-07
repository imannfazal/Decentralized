const Withdraw = () => {
    return(
        <>
        <div class='mx-32'>
            <div class='flex justify-center border border-grey border-opacity-20 rounded my-12 mx-80'>
                <div class='grid grid-col-3 gap-6 pb-12'>
                    <div class='flex justify-center col-start-2 text-2xl text-all py-9'>Withdrawable indexx</div>
                    <div class=' col-start-2 text-all pl-12 pb-9'><span class='text-3xl font-medium'>0</span> <span class='text-lg'>indexx</span></div>

                    

                    <button class='col-start-1 col-span-3 -mx-28 border border-grey border-opacity-20 bg-green text-white text-sm px-32 py-1 hover:bg-hovergreen rounded'>Withdraw</button>
                </div>
                
            </div>
            </div>
        </>
    );
}


export default Withdraw;