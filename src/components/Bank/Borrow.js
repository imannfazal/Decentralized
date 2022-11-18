import Header from "./Header";
import Footer2 from "./Footer2";
import './Borrow.css';
import { Select } from 'antd';
import inex from '../../assets/indexx500.png';
import btc from '../../assets/BTC.png';
import eth from '../../assets/eth.png';
import bnb from '../../assets/bnb.png';
const { Option } = Select;
const Borrow = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Header />
            <span class="md:text-xl text-xl font-bold text-grey md:pl-[96px] pl-4 pt-14 mr-56 flex justify-start">BORROW</span>
            <div class="flex justify-center">
                <div class='border border-grey border-opacity-20 rounded w-[300px] mt-8 text-grey text-xs'>
                    <div class='flex justify-center'><img alt="" src={inex} style={{ width: 70, paddingTop: 44, paddingBottom: 14 }} /></div><div class='text-grey flex justify-center mb-6 text-[20px]'>IN500</div>
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 mb-1 whitespace-pre'><span class='border-r border-grey border-opacity-20 pr-[22px]'>Amount</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 mb-1 whitespace-pre'><span class='w-[124px] border-r border-grey border-opacity-20 pr-5'>Quantity</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 mb-1'><span class='border-r border-grey border-opacity-20 pr-3'>Collateral</span>
                    <Select
                                defaultValue="Select"
                                bordered={false}
                                showArrow={false}
                                style={{
                                    width: 175,
                                    fontSize: 12,
                                    color: '#5f5f5f',
                                }} >
                                onChange={handleChange}
                                <Option value="eth"><img alt="" src={eth} class='w-6 inline pb-1 mr-1' />ETH</Option>
                                <Option value="btc"><img alt="" src={btc} class='w-6 inline pb-1 mr-1' />BTC</Option>
                                <Option value="bnb"><img alt="" src={bnb} class='w-6 inline pb-1 mr-1' />BNB</Option>
                            </Select>
                    </div>
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 mb-1 whitespace-pre'><span class='border-r border-grey border-opacity-20 pr-[22px]'>Amount</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 whitespace-pre mb-6'><span class='border-r border-grey border-opacity-20 pr-[19px]'>Duration</span>
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
                        /> <span class='text-[9px] text-grey '>Interest: 0.05%</span> <span class='text-sm'> {">"} </span>
                    </div>
                    <a href="/indexx-bank/Borrow/BorrowAwait"><button class='text-white bg-green hover:bg-hovergreen flex justify-center w-[264px] rounded mx-4 py-2 mb-7'>Borrow</button></a>

                </div>
            </div>
            <div class='flex justify-center mt-24'>
                <table class="table-fixed border border-grey border-opacity-20 rounded">
                    <thead class='border-b border-grey border-opacity-20 text-[10px] text-grey'>
                        <tr >
                            <th class='px-12 py-5 text-grey'>Collateral List</th>
                            <th class='px-12'>Amount</th>
                            <th class='px-12'>Duration</th>
                            <th class='px-12'>Interest</th>
                            <th class='px-12'>Payable</th>
                            <th class='px-12'></th>
                        </tr>
                    </thead>
                    <tbody class='text-xs text-grey'>
                        <tr>
                            <td class='px-12 py-5 font-normal inline-flex'><img alt="" src={btc} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>BTC </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>Bitcoin</span></td>
                            <td class='px-12'>0.101345 BTC</td>
                            <td class='px-12'>30 Days</td>
                            <td class='px-12'>5.0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <a href="/indexx-bank/Borrow/Repay"><button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Repay</button></a></td>
                        </tr>
                        <tr>
                            <td class='px-12 py-5 inline-flex'><img alt="" src={eth} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>ETH </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>Ethereum</span></td>
                            <td class='px-12'>0</td>
                            <td class='px-12'>0</td>
                            <td class='px-12'>0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Repay</button></td>
                        </tr>
                        <tr>
                            <td class='px-12 py-5 inline-flex'><img alt="" src={bnb} style={{ width: 23 }} /><span class='mt-[3px] ml-1'>BNB </span><span class='mt-[3px] ml-1 text-grey text-opacity-40'>Binance</span></td>
                            <td class='px-12'>0</td>
                            <td class='px-12'>0</td>
                            <td class='px-12'>0%</td>
                            <td class='px-12'>0 USD</td>
                            <td class='px-12'> <button class='py-1.5 px-5 text-[10px] bg-green hover:bg-hovergreen text-white rounded-sm text-xs'>Repay</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Footer2 />

        </>
    );
}

export default Borrow;