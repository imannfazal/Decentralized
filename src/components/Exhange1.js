import './First.css';
import { Alert } from 'antd';
import { Select, Segmented } from 'antd';
import { useState } from 'react';
import Chartt from './Chartt';
import Footer from './Footer';
import Header from './Header';
const Exchange1 = () => {

    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onGet = (event) => {
        console.log("inside function");
        setValue(event.target.value);
        if (parseFloat(value) < 0.00184853) {
            console.log(value);
        }
        else {
            setValue2(value * 13.3);
        }
    }

    return (
        <>
            <Header />
            <div class='mx-[170px] inline-flex  mt-16 text-grey '>
                <span class='w-[700px] border border-grey border-opacity-20 rounded-sm px-5 mr-6 py-7'>
                    <span class='ml-[403px]  pb-[6px] '><Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} style={{ backgroundColor: '#006DFF', color: 'white  ' }} /></span>
                    <span class='py-5'><Chartt /></span>
                </span>
                <div class='border border-grey border-opacity-20 rounded-sm px-5 py-3 text-grey'>
                    <div class='text-grey text-xl flex justify-center'>Add Exchange Details</div>
                    <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-16 mt-6' value={value} onChange={onGet} />
                    <span class='inline-flex ml-3 text-grey'>
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
                    <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-36 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                               0.00184853</div>

                    <input placeholder='You get' class='py-1 border border-opacity-20 border-grey px-3 pr-16 my-6 ' value={value2} />

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
                    <div>Enter Wallet Address</div>
                    <input placeholder='The recipients address' class='py-1 border border-opacity-20 border-grey pl-3 mt-3 mb-1 pr-[157px]' />
                    <div class='mb-8 mt-2 text-xs'><Alert message="Please be careful not to provide a smart contract as your Ethereum payout address." type="info" showIcon /></div>
                    <a href='/Await'><div class='bg-blue hover:bg-hblue  flex justify-center text-white rounded-sm py-2 mt-4 mb-2'>Create and Exchange</div></a>

                </div>
            </div>
            <Footer />

        </>
    );
}
export default Exchange1;