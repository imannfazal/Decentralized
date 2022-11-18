import './First.css';
import { Alert } from 'antd';
import Footer from './Footer';
import { Select, Segmented } from 'antd';
import { useState } from 'react';
import Chartt from './Chartt';
import Header from './Header';
import btc from '../assets/BTC.png'
import ada from '../assets/ADA.png'
import bg from '../assets/bgForUi.png';
import token from '../assets/indexx500.png';
import algo from '../assets/ALGO.png'
import enj from '../assets/ENJ.png'
const { Option, OptGroup } = Select;
const Exchange = (props) => {
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onGet = (event) => {
        console.log("inside function");
        setValue(event.target.value);
        if (parseFloat(value) < 50) {
            <Alert message="Info Text" type="info" />
            console.log(value);
        }
        else {
            setValue2(value * 0.000049);

        }
    }
    return (
        <>
            <div class='h-[696px]' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} >

                <Header />
                <div class='mx-[170px] inline-flex  mt-16 text-grey '>
                    <span class='w-[700px] border border-grey border-opacity-20 rounded-sm pl-7 pr-5 mr-6 py-7 bg-white'>
                        <span class='inline-flex'><span class='inline-flex text-2xl text-grey pb-7'><img src={token} style={{ width: 25, height: 25 , marginTop: 4, marginRight: 5 }} />IN500<span class='text-grey text-opacity-50'>/USD </span></span><div className="chart_inner_right"><Segmented options={['24H', '1W', '1M', '1Y']} style={{ color: '#5f5f5f', marginLeft: 256, marginBottom: 6 }} selectedSegmentTintColor='#5f5f5f' /></div></span>
                        <span class='pl-5'><Chartt /></span>
                    </span>
                    <div class='border border-grey border-opacity-20 rounded-sm px-5 py-3 text-grey bg-white'>
                    <div class='text-grey text-xl flex justify-center'>Add Exchange Details</div>
                        <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-9 mt-9' value={value} onChange={onGet} />
                        <span class='inline-flex ml-3 text-grey'>
                            <Select
                                defaultValue='Select'
                                style={{
                                    width: 100,
                                    color: '#5f5f5f',
                                }}
                                onChange={handleChange} >
                                <Option value="ada"><img src={ada} class='w-6 inline pb-1 mr-1' />ADA</Option>
                                <Option value="btc"><img src={btc} class='w-6 inline pb-1 mr-1' />BTC</Option>
                                <Option value="algo"><img src={algo} class='w-6 inline pb-1 mr-1' />ALGO</Option>
                                <Option value="enj"><img src={enj} class='w-6 inline pb-1 mr-1' />ENJ</Option>
                            </Select>
                        </span>
                        <div class='w-[186px] text-blue text-[10px] bg-blue bg-opacity-20 ml-[21px] mt-0.5 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                                50</div>

                        <input placeholder='You get' class='py-1 border border-opacity-20 border-grey px-3 pr-9 mt-9' value={value2} />

                        <span class='inline-flex ml-4'>
                            <Select
                                defaultValue="Select"
                                style={{
                                    width: 95,
                                    color: '#5f5f5f',
                                }} >
                                onChange={handleChange}
                                <Option value="ada"><img src={ada} class='w-6 inline pb-1 mr-1' />ADA</Option>
                                <Option value="btc"><img src={btc} class='w-6 inline pb-1 mr-1' />BTC</Option>
                                <Option value="algo"><img src={algo} class='w-6 inline pb-1 mr-1' />ALGO</Option>
                                <Option value="enj"><img src={enj} class='w-6 inline pb-1 mr-1' />ENJ</Option>
                            </Select>
                        </span>
                        <div class='mt-12'>Enter Wallet Address</div>
                        <input placeholder='The recipients address' class='py-1 border border-opacity-20 border-grey pl-3 mt-3 mb-1 pr-[157px]' />
                        <div class=' mt-2 text-xs w-[330px]'><Alert style={{ color: '#5f5f5f' }} message="Please be careful not to provide a smart contract as your Ethereum payout address." type="info" showIcon /></div>
                        <a href='/Await'><button class='w-[330px] bg-blue hover:bg-hblue  flex justify-center text-white rounded-sm py-2 mt-12 mb-2'>Create and Exchange</button></a>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Exchange;