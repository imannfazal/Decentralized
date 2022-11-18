import Header from "./Header";
import { Tabs } from 'antd';
import Footer2 from "./Footer2";
const Mypage = () => {
    return (
        <>
            <Header />

            <span class="md:text-xl text-xl font-bold text-grey md:pl-[96px] pl-4 pt-14 mr-56 flex justify-start">MY PAGE</span>
            <br /><span class="md:inline-grid grid grid-cols-7 gap-2 md:ml-[96px] ml-4 md:mr-3 mr-4 border border-grey border-opacity-20 rounded-sm mt-2 pl-3 pr-14 py-4">
                <span class="col-start-1 col-span-2 md:pl-6 pl-2 text-xs text-grey pt-3">TOTAL VALUE
                </span>
                <span class="col-start-1 md:pl-6 pl-2 text-grey"><span class='text-xl font-medium'>0</span> <span class='text-xs'>USD</span></span>
                <span class="md:col-start-1 col-span-7 text-white bg-green rounded-sm flex justify-center ml-6 py-1 mt-16 mb-[103px] cursor-pointer hover:bg-hovergreen">Send</span>

            </span>

            <span class="md:inline-grid grid grid-cols-3 md:gap-4 gap-2  md:mr-9 mr-4 border border-grey border-opacity-20 rounded-sm mt-4 pl-3 pr-3 py-4 my-3 md:pl-7 md:pr-7">
                <span class="col-start-1 col-span-2 md:pl-4 pl-2 text-xs text-grey pt-3">TOTAL CLAIMABLE REWARDS </span>
                <span class="col-start-1 md:pl-4 pl-2 text-grey"><span class='text-xl font-medium'></span> <span class='text-xs text-light'>0 USD</span></span>
                <span class="col-start-1 md:pl-4 pl-2 text-xs text-grey pt-9">indexx PRICE</span>
                <span class="col-start-1 md:pl-4 pl-2 text-grey"><span class='text-xl font-medium'>2.94</span> <span class='text-xs'>USD</span></span>
                <span class="col-start-1 col-span-full pt-1"> </span>
                <span class="col-start-1 col-span-full flex justify-center bg-green text-white py-2 md:mx-3 mx-2 text-xs my-2 hover:bg-hovergreen cursor-pointer"><button class="md:px-56">Claim All Rewards</button> </span>

            </span>

            <div class='md:pl-[96px] mt-12 pr-[175px]'>
                <Tabs defaultActiveKey="1" type="card" tabBarGutter={10} tabPosition="top" >
                    <Tabs.TabPane tab="All" key="1" >
                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">REWARDS</div>
                        <div class='overflow-auto '>
                            <table class="table-fixed border border-grey border-opacity-20 rounded ">
                                <thead class='border-b border-grey border-opacity-20 text-[10px] text-grey'>
                                    <tr >
                                        <th class='pr-12 pl-24 py-5 text-grey'>Rewards Pool</th>
                                        <th class='px-12'>APR</th>
                                        <th class='px-12'>Staked</th>
                                        <th class='px-12'>Stakeable</th>
                                        <th class='px-12'>Reward</th>
                                        <th class='px-12'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody class='text-xs text-grey'>
                                    <tr>
                                        <td class='px-12 py-5'>Indexx Governance</td>
                                        <td class='px-12'>0.11%</td>
                                        <td class='px-12'>0 indexx</td>
                                        <td class='px-12'>0 indexx</td>
                                        <td class='px-12'>Automatically re-staked</td>
                                        <td class='px-12'><span><button class='border border-grey border-opacity-20 py-2 px-4 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                                    </tr>
                                    <tr>
                                        <td class='px-12 py-5'>iNEX-USD LP</td>
                                        <td class='px-12'>11.5%</td>
                                        <td class='px-12'>0 LP</td>
                                        <td class='px-12'>0 LP</td>
                                        <td class='px-12'> </td>
                                        <td class='px-12'><span><button class='border border-grey border-opacity-20 py-2 px-4 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                                    </tr>
                                    <tr>
                                        <td class='px-12 py-5'>USD Borrow</td>
                                        <td class='px-12'>10,912,724,212.65 %</td>
                                        <td class='px-12'></td>
                                        <td class='px-12'> </td>
                                        <td class='px-12'>0 indexx</td>
                                        <td class='pl-12 pr-24'><span><button class='border border-grey border-opacity-20 py-2 px-4 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">EARN</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <a href="/TradeToEarn"><div class="text-sm font-normal flex justify-center text-white bg-green hover:bg-hovergreen cursor-pointer mx-[500px] rounded-sm py-1">Go to Earn</div></a>
    
                        </div>


                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">BORROW</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <a href="/indexx-bank/Borrow"><div class="text-sm font-normal flex justify-center text-white bg-green hover:bg-hovergreen cursor-pointer mx-[500px] rounded-sm py-1">Go to Borrow</div></a>
    
                        </div>

                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">Invest</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <a href="/indexx-bank/Invest"><div class="text-sm font-normal flex justify-center text-white bg-green hover:bg-hovergreen cursor-pointer mx-[500px] rounded-sm py-1">Go to Invest</div></a>
    
                        </div>

                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">TRANSACTION HISTORY</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <div class="text-lg font-normal flex justify-center text-grey">No Transaction History</div>
                            <div class="text-xs font-normal flex justify-center text-grey">Looks like you haven't made any transactions yet.</div>
                        </div>

                        
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Rewards" key="2">
                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">REWARDS</div>
                        <div class='overflow-auto mr-4'>
                            <table class="table-fixed border border-grey border-opacity-20 rounded  mb-12">
                                <thead class='border-b border-grey border-opacity-20 md:text-xs text-[10px] text-grey'>
                                    <tr >
                                        <th class='px-12 py-5 text-grey'>Rewards Pool</th>
                                        <th class='px-12'>APR</th>
                                        <th class='px-12'>Staked</th>
                                        <th class='px-12'>Stakeable</th>
                                        <th class='px-12'>Reward</th>
                                        <th class='px-12'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody class='text-xs text-grey'>
                                    <tr>
                                        <td class='text-xs px-12 py-5'>Indexx Governance</td>
                                        <td class='px-12 text-xs'>0.11%</td>
                                        <td class='px-12 text-xs'>0 indexx</td>
                                        <td class='px-12'>0 indexx</td>
                                        <td class='px-12'>Automatically re-staked</td>
                                        <td class='px-12'><span><button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                                    </tr>
                                    <tr>
                                        <td class='px-12 py-5'>iNEX-USD LP</td>
                                        <td class='px-12'>11.5%</td>
                                        <td class='px-12'>0 LP</td>
                                        <td class='px-12'>0 LP</td>
                                        <td class='px-12'> </td>
                                        <td class='px-12'><span><button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                                    </tr>
                                    <tr>
                                        <td class='px-12 py-5'>USD Borrow</td>
                                        <td class='px-12'>10,912,724,212.65 %</td>
                                        <td class='px-12'></td>
                                        <td class='px-12'> </td>
                                        <td class='px-12'>0 indexx</td>
                                        <td class='px-12'><span><button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Stake</button> <button class='border border-grey border-opacity-20 py-2 px-3 text-xs hover:bg-lighthover'>Unstake</button></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Earn" key="3">
                    <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">Earn</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <div class="text-sm font-normal flex justify-center text-white bg-green hover:bg-hovergreen cursor-pointer mx-[500px] rounded-sm py-1">Go to Earn</div>
    
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Borrow" key="4">
                    <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">Borrow</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <div class="text-sm font-normal flex justify-center text-white bg-green hover:bg-hovergreen cursor-pointer mx-[500px] rounded-sm py-1">Go to Borrow</div>
    
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Invest" key="5">
                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">Invest</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <div class="text-sm font-normal flex justify-center text-white bg-green hover:bg-hovergreen cursor-pointer mx-[500px] rounded-sm py-1">Go to Invest</div>
    
                        </div>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="History" key="6">
                        <div class="text-sm font-medium text-grey pt-6  flex justify-start mt-2 pb-4">TRANSACTION HISTORY</div>
                        <div className=" border border-grey border-opacity-20 rounded-sm py-12">
                            <div class="text-lg font-normal flex justify-center text-grey">No Transaction History</div>
                            <div class="text-xs font-normal flex justify-center text-grey">Looks like you haven't made any transactions yet.</div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>

            </div>

            <Footer2 />
        </>
    )
}

export default Mypage;