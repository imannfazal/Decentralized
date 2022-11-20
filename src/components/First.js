import "./First.css";
import { Select, Button, Alert, Tabs, Segmented , Image, Card, Input, Typography} from "antd";

import { useState } from "react";
import Chartt from "./Chartt";
import { Link } from "react-router-dom";
import btc from "../assets/BTC.png";
import eth from "../assets/eth.png";
import ada from "../assets/ADA.png";
import algo from "../assets/ALGO.png";
import enj from "../assets/ENJ.png";
import token from '../assets/indexx500.png';
import bg from '../assets/bgForUi.png';

const  {Text} = Typography;
const { Option } = Select;


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
                    <span class='inline-flex'><span class='inline-flex text-2xl text-grey pb-7'><Image alt='Image' src={token} style={{ width: 25, height: 25, marginTop: 4, marginRight: 5 }} />IN500<span class='text-grey text-opacity-50'>/USD </span></span><div className="chart_inner_right"><Segmented options={['24H', '1W', '1M', '1Y']} style={{ color: '#5f5f5f', marginLeft: 256, marginBottom: 6 }} selectedSegmentTintColor='#5f5f5f' /></div></span>
                    <span class='pl-5'><Chartt /></span>
                </span>
                <span style={{textAlign:"center"}}>
                  <Text style={{fontSize:40,color:"#5F5F5F"}}>Crypto Exchange<br/></Text>
                  <Text style={{fontSize:20,color:"#5F5F5F"}}>Free from sign-up, limits, complications</Text>
            

                    <Card  style={{
                 
                  width: 510,
                  textAlign: "center",
                  alignItems: "center",
                  height:518
                }}>



                    
                <Tabs defaultActiveKey="1" tabBarGutter={140} centered size={"large"} tabBarStyle={{fontSize:30,color:"black",backgroundColor:"white",opacity:100,selectedSegmentTintColor:{color:"black"}}} >
                            <Tabs.TabPane tab="Swap" key="1" style={{ alignSelf:"center", color:"black"}}>
                                <Input bordered={true} placeholder='You send' size={"large"} style={{width:287,marginTop:40}} value={value} onChange={onGet} />
                                <span class='inline-flex ml-4 text-grey'>
                                    <Select
                                        defaultValue='Select'
                                        size={"large"}
                                        onChange={handleChange} 
                                        dropdownMatchSelectWidth={true}
                                        style={{fontSize:20,width:148, alignItems:"center", alignContent:"center"}}
                                        >
                                            

                                        <Option value="ada"><Image preview={false} style={{width:20}} src={ada}></Image> ADA</Option>
                                        <Option value="btc"><Image preview={false} style={{width:20}} src={btc}></Image> BTC</Option>
                                        <Option value="eth"><Image preview={false} style={{width:20}} src={eth}></Image> ETH
                                        </Option>
                                        <Option value="algo"><Image preview={false} style={{width:20}} src={algo}></Image> ALGO</Option>
                                        <Option value="enj"><Image preview={false} style={{width:20}} src={enj}></Image> ENJ</Option>
                                    </Select>
                                </span>
                                <Text style={{backgroundColor:"#CCE2FF",color:"#006DFF",width:400,marginTop:16,marginLeft:0,marginRight:57,fontSize:13}}>Min amount: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.00184853</Text><br/>
                                
                                {/* <div class='w-[186px] text-blue text-[10px] bg-blue bg-opacity-20 ml-[22px] mt-1 mb-4 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                   0.00184853</div> */}
                                
                                <Input bordered={true} placeholder='You get' size={"large"} style={{width:287,marginTop:10}} value={value2}/>
                              
                                <span class="inline-flex ml-4">
                                    <Select
                                         defaultValue='Select'
                                        size={"large"}
                                        onChange={handleChange} 
                                        dropdownMatchSelectWidth={true}
                                        style={{fontSize:20,width:148}}
                                    >
                                         <Option value="ada"><Image preview={false} style={{width:20}} src={ada}></Image> ADA</Option>
                                        <Option value="btc"><Image preview={false} style={{width:20}} src={btc}></Image> BTC</Option>
                                        <Option value="eth"><Image preview={false} style={{width:20}} src={eth}></Image> ETH
                                        </Option>
                                        <Option value="algo"><Image preview={false} style={{width:20}} src={algo}></Image> ALGO</Option>
                                        <Option value="enj"><Image preview={false} style={{width:20}} src={enj}></Image> ENJ</Option>
                                    </Select>
                                </span>
                                <Link to="/Exchange">
                                    <Button type="primary" style={{ height:56,width:450, marginTop: 50 ,fontSize:20}} >
                                        Exchange
                                    </Button>
                                </Link>
                            </Tabs.TabPane>
                            <Tabs.TabPane
                                tab="Buy/ Sell Crypto"
                                key="2"
                                style={{ color: "#5f5f5f" }}
                            >
                             <Input bordered={true} placeholder='You send' size={"large"} style={{width:287,marginTop:40}} value={value} onChange={onGet} />
                                <span class='inline-flex ml-4 text-grey'>
                                    <Select
                                        defaultValue='Select'
                                        size={"large"}
                                        onChange={handleChange} 
                                        dropdownMatchSelectWidth={true}
                                        style={{fontSize:20,width:148, alignItems:"center", alignContent:"center"}}
                                        >
                                            

                                        <Option value="ada"><Image preview={false} style={{width:20}} src={ada}></Image> ADA</Option>
                                        <Option value="btc"><Image preview={false} style={{width:20}} src={btc}></Image> BTC</Option>
                                        <Option value="eth"><Image preview={false} style={{width:20}} src={eth}></Image> ETH
                                        </Option>
                                        <Option value="algo"><Image preview={false} style={{width:20}} src={algo}></Image> ALGO</Option>
                                        <Option value="enj"><Image preview={false} style={{width:20}} src={enj}></Image> ENJ</Option>
                                    </Select>
                                </span>
                                <Text style={{backgroundColor:"#CCE2FF",color:"#006DFF",width:400,marginTop:16,marginLeft:50,marginRight:57,fontSize:13,justifyContent:"space-between"}}>Min amount: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50</Text><br/>
                                
                                {/* <div class='w-[186px] text-blue text-[10px] bg-blue bg-opacity-20 ml-[22px] mt-1 mb-4 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                   0.00184853</div> */}
                                
                                <Input bordered={true} placeholder='You get' size={"large"} style={{width:287,marginTop:10}} value={value2}/>
                              
                                <span class="inline-flex ml-4">
                                    <Select
                                         defaultValue='Select'
                                        size={"large"}
                                        onChange={handleChange} 
                                        dropdownMatchSelectWidth={true}
                                        style={{fontSize:20,width:148}}
                                    >
                                         <Option value="ada"><Image preview={false} style={{width:20}} src={ada}></Image> ADA</Option>
                                        <Option value="btc"><Image preview={false} style={{width:20}} src={btc}></Image> BTC</Option>
                                        <Option value="eth"><Image preview={false} style={{width:20}} src={eth}></Image> ETH
                                        </Option>
                                        <Option value="algo"><Image preview={false} style={{width:20}} src={algo}></Image> ALGO</Option>
                                        <Option value="enj"><Image preview={false} style={{width:20}} src={enj}></Image> ENJ</Option>
                                    </Select>
                                </span>
                                <Link to="/Exchange">
                                    <Button type="primary" style={{ height:56,width:450, marginTop: 50,fontSize:20 }} >
                                        Exchange
                                    </Button>
                                </Link>
                          
                        </Tabs.TabPane>
                        
                    </Tabs>
                    </Card>
        </span>

            </div >
        </div >
    );
};

export default First;
