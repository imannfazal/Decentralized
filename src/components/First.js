import "./First.css";
import { Select, Alert, Tabs, Segmented } from "antd";
import { useState } from "react";
import Chartt from "./Chartt";
import btc from "../assets/BTC.png";
import ada from "../assets/ADA.png";
import algo from "../assets/ALGO.png";
import enj from "../assets/ENJ.png";
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
        <>
            <div class='mx-[185px] inline-flex  mt-16 text-grey '>
                <span class='w-[700px] border border-grey border-opacity-20 rounded-sm px-5 mr-6 py-7'>
                    <span class='ml-[403px]  pb-[6px] text-grey'><Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} style={{ color: '#5f5f5f' }} selectedSegmentTintColor='#5f5f5f' /></span>
                    <span class='py-5'><Chartt /></span>
                </span>
                <span class=''>
                    <div class='flex justify-center text-grey text-4xl mb-3'>Crypto Exchange</div>
                    <div class='flex justify-center text-lg text-grey'>Free from sign-up, limits, complications</div>
                    <div class='border border-grey border-opacity-20 px-5 pt-9 pb-[68px] mt-6 rounded-sm'>
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Swap" key="1" style={{ color: '#5f5f5f' }}>
                                <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-9 mt-6' value={value} onChange={onGet} />
                                <span class='inline-flex ml-4 text-grey'>
                                    <Select
                                        defaultValue='BTC'
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
                                <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-28 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                           0.00184853</div>

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
                  class="py-1 border border-opacity-20 border-grey px-3 pr-9 my-6 "
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
                <div class="text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-24 rounded-sm py-[1px] px-2 whitespace-pre">
                  Min amount: 50
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
    </>
  );
};

export default First;
