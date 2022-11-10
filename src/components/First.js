import './First.css';
import { Select, Tabs, Segmented } from 'antd';
import Chartt from './Chartt';
const First = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <div class='mx-[185px] inline-flex  mt-16 text-grey '>
                <span class='w-[700px] border border-grey border-opacity-20 rounded-sm px-5 mr-6 py-7'>
                    <span class='ml-[403px]  pb-[6px] '><Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} style={{ backgroundColor: '#006DFF', color: 'white  ' }} /></span>
                    <span class='py-5'><Chartt /></span>
                </span>
                <span class=''>
                    <div class='flex justify-center text-grey text-4xl mb-3'>Crypto Exchange</div>
                    <div class='flex justify-center text-lg text-grey'>Free from sign-up, limits, complications</div>
                    <div  class='border border-grey border-opacity-20 px-5 pt-9 pb-[68px] mt-6 rounded-sm'>
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Swap" key="1">
                                <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-16 mt-6' />
                                <span class='inline-flex ml-4 text-grey'>
                                    <Select
                                        defaultValue="BTC"
                                        style={{
                                            width: 75,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'ada',
                                                label: 'ADA',
                                            },
                                            {
                                                value: 'algo',
                                                label: 'ALGO',
                                            },
                                            {
                                                value: 'enj',
                                                label: 'ENJ',
                                            },
                                            {
                                                value: 'eth',
                                                label: 'ETH',
                                            },
                                        ]}
                                    />
                                </span>
                                <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-28 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                           0.00184853</div>

                                <input placeholder='You get' class='py-1 border border-opacity-20 border-grey px-3 pr-16 my-6 ' />
                                <span class='inline-flex ml-4'>
                                    <Select
                                        defaultValue="ETH"
                                        style={{
                                            width: 75,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'ada',
                                                label: 'ADA',
                                            },
                                            {
                                                value: 'algo',
                                                label: 'ALGO',
                                            },
                                            {
                                                value: 'enj',
                                                label: 'ENJ',
                                            },
                                            {
                                                value: 'eth',
                                                label: 'ETH',
                                            },
                                        ]}
                                    />
                                </span>
                                <a href='/ExchangeSwap'><div class='bg-blue hover:bg-hblue  flex justify-center text-white rounded-sm py-2 mb-6'>Exchange</div></a>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Buy/ Sell Crypto" key="2">
                                <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-16 mt-6' />
                                <span class='inline-flex ml-3 text-grey'>
                                    <Select
                                        defaultValue="USD"
                                        style={{
                                            width: 75,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'ada',
                                                label: 'ADA',
                                            },
                                            {
                                                value: 'algo',
                                                label: 'ALGO',
                                            },
                                            {
                                                value: 'enj',
                                                label: 'ENJ',
                                            },
                                            {
                                                value: 'eth',
                                                label: 'ETH',
                                            },
                                        ]}
                                    />
                                </span>
                                <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-24 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                                           50</div>
                                <input placeholder='You get' class='py-1 border border-opacity-20 border-grey px-3 pr-16 my-6 ' />
                                <span class='inline-flex ml-3'>
                                    <Select
                                        defaultValue="BTC"
                                        style={{
                                            width: 75,
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'ada',
                                                label: 'ADA',
                                            },
                                            {
                                                value: 'algo',
                                                label: 'ALGO',
                                            },
                                            {
                                                value: 'enj',
                                                label: 'ENJ',
                                            },
                                            {
                                                value: 'eth',
                                                label: 'ETH',
                                            },
                                        ]}
                                    />
                                </span>
                                <a href='/Exchange'><div class='bg-blue hover:bg-hblue flex justify-center text-white rounded-sm py-2 mt-8'>Exchange</div></a>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                </span>


            </div>


        </>
    );
}

export default First;
