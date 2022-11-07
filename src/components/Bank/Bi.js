import Header from "./Header";

const Bi = () => {
    return(
        <>
        <Header />
        <div class="container mx-auto flex flex-wrap pt-6 pb-1 flex-col md:flex-row items-center bg-black">
            <div class="md:text-xl text-lg font-bold text-all pt-6 md:pb-6">Modify Borrow Interest</div><br />
        </div>
        <div class='flex justify-center'>
        <div class='inline-grid grid-col-3 border border-grey border-opacity-20 rounded md:ml-4 p-8'>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Title</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="Title" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Proposal Rational</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="Proposal Rational" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Information Link</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="Information Link" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Base Borrow Rate</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Borrower Emission Floor</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Interest Multiplier</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="0.00" required /></div>
            <div class='col-start-1 bg-allbg text-grey text-sm pb-0.5'>Deposit</div>
            <div class='col-start-1 col-span-3   mb-8 border border-grey border-opacity-30 rounded md:pr-72 py-2 pl-2'>
            <input type="text" id="first_name" class="bg-allbg text-gray-900 text-sm  md:p-2.5" placeholder="1000" required /></div>
            <div class='col-start-1 col-span-3 flex justify-center'><button class='border border-grey border-opacity-20 rounded md:px-56 px-28 md:py-3 py-2 bg-green text-white text-xs  hover:bg-hovergreen rounded'>Submit</button></div>
        </div>
        </div>
        </>
    );
}

export default Bi;