import Header from "./Header";
import Footer2 from "./Footer2";
import './Borrow.css';
import { Select } from 'antd';
import inex from '../../assets/indexx500.png';
import btc from '../../assets/BTC.png';
import eth from '../../assets/eth.png';
import bnb from '../../assets/bnb.png';
const { Option } = Select;
const Repay = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Header />
            <span class="md:text-xl text-xl font-bold text-grey md:pl-[96px] pl-4 pt-14 mr-56 flex justify-start">REPAY</span>
            <div class="flex justify-center">
                <div class='border border-grey border-opacity-20 rounded w-[300px] mt-8 text-grey text-xs'>
                    <div class='flex justify-center'><img src={inex} style={{ width: 70, paddingTop: 44, paddingBottom: 14 }} /></div><div class='text-grey flex justify-center mb-6 text-[20px]'>IN500</div>
                    
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 mb-1 whitespace-pre'><span class='border-r border-grey border-opacity-20 pr-[22px]'>Amount</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    <div class='border border-grey border-opacity-20 rounded pl-6 mx-4 mb-1 whitespace-pre'><span class='w-[124px] border-r border-grey border-opacity-20 pr-5'>Quantity</span><input type='text' style={{ marginLeft: 5, paddingTop: 3, paddingBottom: 3 }} ></input></div>
                    <button class='text-white bg-green hover:bg-hovergreen flex justify-center w-[264px] rounded mx-4 py-2 mb-7 mt-6'>Repay</button>

                </div>
            </div>
            

            <Footer2 />

        </>
    );
}

export default Repay;