import Exchange from "./components/Exchange";
import Home2 from "./components/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange1 from "./components/Exhange1";
import Await from "./components/Await";
import TradeToEarn from "./components/TradeToEarn";
import Home from "./components/Pages/Home";
import Mypage from "./components/Bank/Mypage";
import Earn from "./components/Bank/Earn";
import Govern from "./components/Bank/Govern";
import Basset from "./components/Bank/Basset";
import Borrow from "./components/Bank/Borrow";
import Poll from "./components/Bank/Poll";
import Bi from "./components/Bank/Bi";
import Polls from "./components/Bank/Polls";
import Govtstake from "./components/Bank/Govstake";
import Buy from "./components/Bank/Buy";
import Second from "./components/Bank/Second";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home2 />} />
        <Route path="/Exchange" element={<Exchange />} />
        <Route path="/ExchangeSwap" element={<Exchange1 />} />
        <Route path="/Await" element={<Await />} />
        <Route path="/TradeToEarn" element={<TradeToEarn />} />
        <Route path="/indexxBank" element={<Home />} />
        <Route path="/indexx-bank/MyPage" element={<Mypage />} />
        <Route path="/indexx-bank/Earn" element={<Earn />} />
        <Route path="/indexx-bank/bASSET" element={<Basset />} />
        <Route path="/indexx-bank/Govern" element={<Govern />} />
        <Route path="/indexx-bank/Borrow" element={<Borrow />} />
        <Route path="/Poll" element={<Poll />} /> 
        <Route path="/modify-borrow-interest" element={<Bi />} /> 
        <Route path="/modify-inex-distribution" element={<Polls />} />
        <Route path="/GovStake" element={<Govtstake />} />
        <Route path="/Buy&Sell" element={<Buy />} /> 
        <Route path="/Provide" element={<Second />} />
        
      </Routes>
      
    </BrowserRouter>
    
  </>
  );
}

export default App;
