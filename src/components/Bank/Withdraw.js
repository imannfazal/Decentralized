import Header from "./Header";
import inex from '../../assets/indexx500.png';
import btc from '../../assets/BTC.png';
import eth from '../../assets/eth.png';
import inxc from '../../assets/inxc.png';
import bnb from '../../assets/bnb.png';
import ML from '../../assets/ML.png';
import { Select } from 'antd';
import Footer2 from "./Footer2";
const { Option } = Select;

const Withdraw = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Header />
            <span class="md:text-xl text-xl font-bold text-grey md:pl-[96px] pl-4 pt-14 mr-56 flex justify-start">Withdraw Crypto</span>
            <div class='flex justify-center'>
                <div class='border border-grey border-opacity-20 rounded-sm p-4 text-grey'>
                    <div class='text-sm mb-1.5 font-medium'>Select a Coin</div>
                    <div class="text-[10px] text-grey text-opacity-70">Coin</div>
                    <Select
                        defaultValue="Select a Coin"
                        style={{
                            width: 265,
                            color: '#5f5f5f',
                            fontSize: 12,
                        }} >
                        onChange={handleChange}
                        <Option value="eth"><img src={inex} class='w-6 inline pb-1 mr-1 text-grey' />IN500</Option>
                        <Option value="inxc"><img src={inxc} class='w-6 inline pb-1 mr-1' />INXC</Option>
                        <Option value="eth"><img src={eth} class='w-6 inline pb-1 mr-1' />ETH</Option>
                        <Option value="btc"><img src={btc} class='w-6 inline pb-1 mr-1' />BTC</Option>
                        <Option value="bnb"><img src={bnb} class='w-6 inline pb-1 mr-1' />BNB</Option>
                    </Select>
                    <div class='text-sm mt-6 font-medium'>Send To</div>
                    <div class="text-[10px] text-grey text-opacity-70 mt-2">Address</div>
                    <input placeholder="Enter Address" class='border border-grey border-opacity-20 rounded-sm py-1'
                        style={{
                            color: '#5f5f5f',
                            fontSize: 12,
                            paddingRight: 111,
                            paddingLeft: 12
                        }}>
                    </input>
                    <div class="text-[10px] text-grey text-opacity-70 mt-4">Network</div>
                    <Select
                        defaultValue="Select a Coin"
                        style={{
                            width: 265,
                            color: '#5f5f5f',
                            fontSize: 12,
                        }} >
                        onChange={handleChange}
                        <Option value="bsc">BSC<div class='text-grey text-opacity-40 text-[10px]'>Binance Smart Chain (BEP20) </div></Option>
                        <Option value="btc">BTC<div class='text-grey text-opacity-40 text-[10px]'>Bitcoin</div></Option>
                        <Option value="bnb">BNB<div class='text-grey text-opacity-40 text-[10px]'>Binance Beacon Chanin (BEP2)</div></Option>
                        <Option value="eth">ETH<div class='text-grey text-opacity-40 text-[10px]'>Ethereum (ERC20)</div></Option>
                        <Option value="ltc">LTC<div class='text-grey text-opacity-40 text-[10px]'>Litecoin</div></Option>
                    </Select>
                    <div></div>
                    <div class='inline-flex'>
                        <span class='mt-9'>
                            <div class='text-grey font-normal text-[10px]'>iN500 Balance</div>
                            <div class='text-grey font-semibold text-[11px]'>0 iN500</div>

                            <div class='text-grey font-normal text-[10px] mt-3'>Network Fee</div>
                            <div class='text-grey font-semibold text-[11px]'>0</div>
                        </span>
                        <span class='mt-9 ml-6'>
                            <div class='text-grey font-normal text-[10px] flex justify-end'>Minimum Withdrawal</div>
                            <div class='text-grey font-semibold text-[11px] flex justify-end'>0.00000084 iN500</div>

                            <div class='text-grey font-normal text-[10px] mt-3 flex justify-end'>24h remaining limit</div>
                            <div class='text-grey font-semibold text-[11px]'>0,000,000.00/8,000,000.00 BUSD</div>
                        </span>
                    </div>

                    <div></div>
                    <div class='inline-flex'>
                        <div>
                            <div class="text-[10px] text-grey mt-4">Receive Amount</div>
                            <div class="text-sm text-grey font-medium">0 iN500</div>
                            <div class="text-[10px] text-grey">0.00 Fee</div>
                        </div>
                        <div>
                            <div class="text-white text-xs font-medium bg-green rounded-sm px-3 py-2 mt-7 ml-[105px] hover:bg-hovergreen cursor-pointer">Withdraw</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:text-xl text-xl font-medium text-grey md:pl-[96px] pl-4 pt-36 mr-56 flex justify-start">Recent Withdrawals</div>
            <div class="text-white text-xs font-medium bg-green rounded-sm flex justify-center py-2 mt-7 ml-[96px] hover:bg-hovergreen cursor-pointer w-36">Crypto Address</div>
            <div class='border-t ml-[96px] mr-[96px] mt-0.5 border-opacity-20 border-grey'></div>
            <div class='flex justify-center mt-16'><img src={ML} /></div>
            <div class='flex justify-center mt-8 text-grey text-opacity-60 font-medium'>No recent withdrawal reports</div>
            <div class='flex justify-center mt-24 text-grey text-opacity-60 hover:text-opacity-90 font-medium underline cursor-pointer'>View All</div>
            <Footer2 />
        </>
    );
}


export default Withdraw;