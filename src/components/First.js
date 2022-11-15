import "./First.css";
import { Select, Alert, Tabs, Segmented } from "antd";
import { useState } from "react";
import Chartt from "./Chartt";
import btc from "../assets/BTC.png";
import ada from "../assets/ADA.png";
import algo from "../assets/ALGO.png";
import enj from "../assets/ENJ.png";
import token from '../assets/indexx500.png';
import bg from '../assets/bgForUi.png';
const { Option, OptGroup } = Select;
const First = () => {
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onGet = (event) => {
        console.log("inside function");
        setValue(event.target.value);
        if (parseFloat(value) < 0.00184853) {
            <Alert message="Info Text" type="info" />
            console.log(value);
        }
        else {
            setValue2(value * 13.3);
        }
    };
    return (
        <div class='h-[696px] bg-no-repeat' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} >
            <div class='mx-[185px] inline-flex  mt-16 text-grey bg-white'>
                <span class='w-[700px] border border-grey border-opacity-20 rounded-sm pl-7 pr-5 mr-6 py-7'>
                    <span class='inline-flex'><span class='inline-flex text-2xl text-grey pb-7'><img src={token} style={{ width: 25, height: 25 , marginTop: 7 }} />IN500<span class='text-grey text-opacity-50'>/USD </span></span><div className="chart_inner_right"><Segmented options={['24H', '1W', '1M', '1Y']} style={{ color: '#5f5f5f', marginLeft: 256, marginBottom: 6 }} selectedSegmentTintColor='#5f5f5f' /></div></span>
                    <span class='pl-5'><Chartt /></span>
                </span>
                <span class=''>
                    <div class='flex justify-center text-grey text-4xl mb-5 mt-4'>Crypto Exchange</div>
                    <div class='flex justify-center text-lg text-grey mb-3'>Free from sign-up, limits, complications</div>
                    <div class='border border-grey border-opacity-20 px-5 pt-9 pb-[68px] mt-8 rounded-sm'>
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Swap" key="1" style={{ color: '#5f5f5f' }}>
                                <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-9 mt-6' value={value} onChange={onGet} />
                                <span class='inline-flex ml-4 text-grey'>
                                    <Select
                                        defaultValue='Select'
                                        style={{
                                            width: 110,
                                            color: '#5f5f5f',
                                        }}
                                        onChange={handleChange} >
                                        <Option value="ada"><img src={ada} class='w-6 inline pb-1 mr-1' />ADA</Option>
                                        <Option value="btc"><img src={btc} class='w-6 inline pb-1 mr-1' />BTC</Option>
                                        <Option value="algo"><img src={algo} class='w-6 inline pb-1 mr-1' />ALGO</Option>
                                        <Option value="enj"><img src={enj} class='w-6 inline pb-1 mr-1' />ENJ</Option>
                                    </Select>
                                </span>
                                <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-32 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                     0.00184853</div>

                                <input
                                    placeholder="You get"
                                    class="py-1 border border-opacity-20 border-grey px-3 pr-9 my-6 "
                                    value={value2}
                                />
                                <span class="inline-flex ml-4">
                                    <Select
                                        defaultValue="Select"
                                        style={{
                                            width: 110,
                                            color: "#5f5f5f",
                                        }}
                                        onChange={handleChange}
                                    >
                                        <Option value="ada">
                                            <img src={ada} class="w-6 inline pb-1 mr-1" />
                                            ADA
                                        </Option>
                                        <Option value="btc">
                                            <img src={btc} class="w-6 inline pb-1 mr-1" />
                                            BTC
                                        </Option>
                                        <Option value="algo">
                                            <img src={algo} class="w-6 inline pb-1 mr-1" />
                                            ALGO
                                        </Option>
                                        <Option value="enj">
                                            <img src={enj} class="w-6 inline pb-1 mr-1" />
                                            ENJ
                                        </Option>
                                    </Select>
                                </span>
                                <a href="/ExchangeSwap">
                                    <div class="bg-blue hover:bg-hblue  flex justify-center text-white rounded-sm py-2 mb-6">
                                        Exchange
                                    </div>
                                </a>
                            </Tabs.TabPane>
                            <Tabs.TabPane
                                tab="Buy/ Sell Crypto"
                                key="2"
                                style={{ color: "#5f5f5f" }}
                            >
                                <input
                                    placeholder="You send"
                                    class="py-1 border border-opacity-20 border-grey px-3 pr-9 mt-6 "
                                />
                                <span class="inline-flex ml-3 text-grey">
                                    <Select
                                        defaultValue="Select"
                                        style={{
                                            width: 110,
                                        }}
                                        onChange={handleChange}
                                    >
                                        {" "}
                                        <Option value="ada">
                                            <img src={ada} class="w-6 inline pb-1 mr-1" />
                                            ADA
                                        </Option>
                                        <Option value="btc">
                                            <img src={btc} class="w-6 inline pb-1 mr-1" />
                                            BTC
                                        </Option>
                                        <Option value="algo">
                                            <img src={algo} class="w-6 inline pb-1 mr-1" />
                                            ALGO
                                        </Option>
                                        <Option value="enj">
                                            <img src={enj} class="w-6 inline pb-1 mr-1" />
                                            ENJ
                                        </Option>
                                    </Select>
                                </span>
                                <div class="text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-32 rounded-sm py-[1px] px-2 whitespace-pre">
                                    Min amount:                                   50
                                </div>
                                <input
                                    placeholder="You get"
                                    class="py-1 border border-opacity-20 border-grey px-3 pr-9 my-6  "
                                />
                                <span class="inline-flex ml-3">
                                    <Select
                                        defaultValue="Select"
                                        style={{
                                            width: 110,
                                        }}
                                        onChange={handleChange}
                                    >
                                        {" "}
                                        <Option value="ada">
                                            <img src={ada} class="w-6 inline pb-1 mr-1" />
                                            ADA
                                        </Option>
                                        <Option value="btc">
                                            <img src={btc} class="w-6 inline pb-1 mr-1" />
                                            BTC
                                        </Option>
                                        <Option value="algo">
                                            <img src={algo} class="w-6 inline pb-1 mr-1" />
                                            ALGO
                                        </Option>
                                        <Option value="enj">
                                            <img src={enj} class="w-6 inline pb-1 mr-1" />
                                            ENJ
                                        </Option>
                                    </Select>
                                </span>
                                <a href="/Exchange">
                                    <div class="bg-blue hover:bg-hblue flex justify-center text-white rounded-sm py-2 mt-8">
                                        Exchange
                                    </div>
                                </a>
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default First;
