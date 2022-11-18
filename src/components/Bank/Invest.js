import Header from "./Header";
import Footer2 from "./Footer2";
import './Borrow.css';
import { Select } from 'antd';
import inex from '../../assets/indexx500.png';
import btc from '../../assets/BTC.png';
import eth from '../../assets/eth.png';
import inxc from '../../assets/inxc.png';
import bnb from '../../assets/bnb.png';
const { Option } = Select;

const Invest = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return(
        <>
        <Header />
        <span class="md:text-xl text-xl font-bold text-grey md:pl-[96px] pl-4 pt-14 mr-56 flex justify-start">INVEST</span>
        <div class="flex justify-center">
                <div class='border border-grey border-opacity-20 rounded w-[300px] mt-8 text-grey text-xs py-5'>
                    <div class='flex justify-start text-grey ml-4 mt-4 mb-7 text-sm font-medium'>Select Token to invest</div>
                    <div class=' mx-4 mb-1'>
                    <Select
                                defaultValue="Select Token"
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
                    </div>
                    <div class='border border-grey border-opacity-20 rounded-sm pl-3 mx-4 mb-1 whitespace-pre'><span class='w-[124px] border-r border-grey border-opacity-20 pr-5'>Quantity</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    
                    <div class='border border-grey border-opacity-20 rounded-sm pl-3 mx-4 mb-1 whitespace-pre'><span class='border-r border-grey border-opacity-20 pr-[22px]'>Amount</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    <div class='border border-grey border-opacity-20 rounded-sm pl-3 mx-4 whitespace-pre mb-6'><span class='border-r border-grey border-opacity-20 pr-[19px]'>Duration</span>
                        <Select
                            defaultValue='Select'
                            style={{
                                width: 85,
                                fontSize: 12,
                                color: '#5f5f5f'
                            }}
                            onChange={handleChange}
                            bordered={false}
                            showArrow={false}
                            dropdownMatchSelectWidth={10}
                            dropdownStyle={{ width: 40, color: '#5f5f5f' }}
                            options={[
                                {
                                    value: '10',
                                    label: '10 Days',
                                },
                                {
                                    value: '20',
                                    label: '20 Days',
                                },
                                {
                                    value: '30',
                                    label: '30 Days',
                                },
                                {
                                    value: '60',
                                    label: '60 Days',
                                },
                            ]}
                        /> <span class='text-[9px] text-grey ml-4'>Interest: 10%</span> <span class='text-sm text-opacity-40'> {">"} </span>
                    </div>
                    <a href="/indexx-bank/Borrow/BorrowAwait"><button class='text-white bg-green hover:bg-hovergreen flex justify-center w-[264px] rounded mx-4 py-2 mb-7'>Invest</button></a>

                </div>
            </div>

            <div class='flex justify-center mt-24'>
                <table class="table-fixed border border-grey border-opacity-20 rounded">
                    <thead class='border-b border-grey border-opacity-20 text-[10px] text-grey'>
                        <tr >
                            <th class='px-12 py-5 text-grey'>Token Invested</th>
                            <th class='px-12'>Amount</th>
                            <th class='px-12'>Duration</th>
                            <th class='px-12'>Interest</th>
                            <th class='px-12'>Profit</th>
                            <th class='px-12'></th>
                        </tr>
                    </thead>
                    <tbody class='text-xs text-grey'>
                       
                        <tr>
                            <td class='px-12 py-5 font-normal inline-flex'><img src={inex} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>IN500 </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>indexx 500</span></td>
                            <td class='px-12'>12 USD</td>
                            <td class='px-12'>30 Days</td>
                            <td class='px-12'>5.0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Reinvest</button><a href="/index-bank/Invest/Withdraw-Crypto"><button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs ml-4'>Withdraw</button></a></td>
                        </tr>
                        <tr>
                            <td class='px-12 py-5 font-normal inline-flex'><img src={inxc} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>INXC </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>indexxcrypto</span></td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'>0 Days</td>
                            <td class='px-12'>0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Reinvest</button><a href="/index-bank/Invest/Withdraw-Crypto"><button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs ml-4'>Withdraw</button></a></td>
                        </tr>
                        <tr>
                            <td class='px-12 py-5 font-normal inline-flex'><img src={btc} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>BTC </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>Bitcoin</span></td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'>0 Days</td>
                            <td class='px-12'>5.0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Reinvest</button><a href="/index-bank/Invest/Withdraw-Crypto"><button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs ml-4'>Withdraw</button></a></td>
                        </tr>
                        <tr>
                            <td class='px-12 py-5 inline-flex'><img src={eth} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>ETH </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>Ethereum</span></td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'>0 Days</td>
                            <td class='px-12'>0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Reinvest</button><a href="/index-bank/Invest/Withdraw-Crypto"><button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs ml-4'>Withdraw</button></a></td>
                        </tr>
                        <tr>
                            <td class='px-12 py-5 inline-flex'><img src={bnb} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>BNB </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>Binance</span></td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'>0 Days</td>
                            <td class='px-12'>0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Reinvest</button><a href="/index-bank/Invest/Withdraw-Crypto"><button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs ml-4'>Withdraw</button></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer2 />
        </>
    );
}

export default Invest;