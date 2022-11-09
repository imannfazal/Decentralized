import Header from "./Header";
import Pie2 from "./Pie2";
const Mypage = () => {
    return (
    <>
    <Header />
        <span class="md:text-xl text-xl font-bold text-grey md:pl-[96px] pl-4 pt-14 mr-56 flex justify-start">MY PAGE</span>
        <br/><span class="md:inline-grid grid grid-cols-4 md:gap-4 gap-2 md:ml-40 ml-4 md:mr-7 mr-4 border border-grey border-opacity-20 rounded mt-2 pl-3 pr-3 py-4">
            <span class="col-start-1 col-span-2 md:pl-4 pl-2 text-xs text-grey pt-3">TOTAL VALUE
            </span>
            <span class="col-start-1 md:pl-4 pl-2 text-grey"><span class='text-xl font-medium'>0</span> <span class='text-xs'>USD</span></span>
            <span class="md:col-start-5 col-start-2 col-span-4 md:w-88 w-56 h-56 md:pb-4 pl-9"><Pie2 /></span>
            
        </span>

        <span class="md:inline-grid grid grid-cols-3 md:gap-4 gap-2 ml-4 md:mr-9 mr-4 border border-grey border-opacity-20 rounded mt-4 pl-3 pr-3 py-4 my-3 md:pl-7 md:pr-12">
            <span class="col-start-1 col-span-2 md:pl-4 pl-2 text-xs text-grey pt-3">TOTAL CLAIMABLE REWARDS </span>
            <span class="col-start-1 md:pl-4 pl-2 text-grey"><span class='text-xl font-medium'></span> <span class='text-xs text-light'>0 USD</span></span>
            <span class="col-start-1 md:pl-4 pl-2 text-xs text-grey pt-9">indexx PRICE</span>
            <span class="col-start-1 md:pl-4 pl-2 text-grey"><span class='text-xl font-medium'>2.94</span> <span class='text-xs'>USD</span></span>
            <span class="col-start-1 col-span-full pt-1"> </span>
            <span class="col-start-1 col-span-full flex justify-center bg-green text-white py-2 md:mx-3 mx-2 text-xs my-2 hover:bg-hovergreen cursor-pointer"><button class="md:px-36">Claim All Rewards</button> </span>
            
        </span>
        <div class="text-sm font-medium text-grey md:pl-40 pl-4 pt-6  flex justify-start mt-2 pb-4">REWARDS</div>
        <div class='overflow-auto ml-4 mr-4'>
        <table class="table-fixed border border-grey border-opacity-20 rounded md:ml-36 ">
            <thead class='border-b border-grey border-opacity-20 md:text-xs text-[10px] text-grey'>
                <tr >
                    <th class='px-9 py-5 text-grey'>Rewards Pool</th>
                    <th class='px-9'>APR</th>
                    <th class='px-9'>Staked</th>
                    <th class='px-9'>Stakeable</th>
                    <th class='px-9'>Reward</th>
                    <th class='px-9'>Actions</th>
                </tr>
            </thead>
            <tbody class='md:text-sm text-xs text-grey'>
                <tr>
                    <td class='px-9 py-5'>Indexx Governance</td>
                    <td class='px-9'>0.11%</td>
                    <td class='px-9'>0 indexx</td>
                    <td class='px-9'>0 indexx</td>
                    <td class='px-9'>Automatically re-staked</td>
                    <td class='px-9'><span><button class='border border-grey border-opacity-20 py-2 px-4 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                </tr>
                <tr>
                    <td class='px-9 py-5'>iNEX-USD LP</td>
                    <td class='px-9'>11.5%</td>
                    <td class='px-9'>0 LP</td>
                    <td class='px-9'>0 LP</td>
                    <td class='px-9'> </td>
                    <td class='px-9'><span><button class='border border-grey border-opacity-20 py-2 px-4 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                </tr>
                <tr>
                    <td class='px-9 py-5'>USD Borrow</td>
                    <td class='px-9'>10,912,724,212.65 %</td>
                    <td class='px-9'></td>
                    <td class='px-9'> </td>
                    <td class='px-9'>0 indexx</td>
                    <td class='px-9'><span><button class='border border-grey border-opacity-20 py-2 px-4 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="text-sm font-medium text-grey md:pl-40 pl-4 pt-6  flex justify-start mt-2 pb-4">EARN</div>
        <div class='overflow-auto ml-4 mr-4'>
            
        <table class="table-fixed border border-grey border-opacity-20 rounded md:ml-36">
        <tr>
            <td class='px-9 py-5'> </td>
            <td class='px-7 py-5'> </td>
            <td class='pl-8 pr-6 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='px- py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='px-9 py-5 md:text-sm text-xs text-green'><a href="/Earn">Go To Earn {">"}</a></td>
        </tr>
        </table>
        </div>
        <div class="text-sm font-medium text-grey md:pl-40 pl-4 pt-6  flex justify-start mt-2 pb-4">BORROW</div>
        <div class='overflow-auto ml-4 mr-4'>
            
        <table class="table-fixed border border-grey border-opacity-20 rounded md:ml-36">
        <tr>
            <td class='px-9 py-5'> </td>
            <td class='px-5 py-5'> </td>
            <td class='pl-8 pr-6 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='px- py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='px-9 py-5 md:text-sm text-xs'><a href="/Borrow">Go To Borrow {">"}</a></td>
        </tr>
        </table>
        </div>

        <div class="text-sm font-medium text-grey md:pl-40 pl-4 pt-6  flex justify-start mt-2 pb-4">GOVERN</div>
        <div class='overflow-auto ml-4 mr-4'>
            
        <table class="table-fixed border border-grey border-opacity-20 rounded mb-7 md:ml-36">
        <tr>
            <td class='px-9 py-5'> </td>
            <td class='px-7 py-5'> </td>
            <td class='px-7 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            <td class='md:px-9 py-5'> </td>
            
            <td class='md:px-9 py-5'> </td>
            <td class='px-9 py-5 md:text-sm text-xs'><a href="/Govern">Create Poll {">"}</a></td>
        </tr>
        </table>
        </div>
    </>
)}

export default Mypage;