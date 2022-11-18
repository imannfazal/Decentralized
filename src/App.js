import Exchange from "./components/Exchange";
import Home2 from "./components/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange1 from "./components/Exhange1";
import Await from "./components/Await";
import TradeToEarn from "./components/TradeToEarn";
import Home from "./components/Pages/Home";
import Mypage from "./components/Bank/Mypage";
import Invest from "./components/Bank/Invest";
import Borrow from "./components/Bank/Borrow";
import BorrowAwait from "./components/Bank/BorrowAwait";
import Repay from "./components/Bank/Repay";
import Withdraw from "./components/Bank/Withdraw";

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
        <Route path="/indexx-bank/Invest" element={<Invest />} />
        <Route path="/indexx-bank/Borrow" element={<Borrow />} />
        <Route path="/indexx-bank/Borrow/BorrowAwait" element={<BorrowAwait />} />
        <Route path="/indexx-bank/Borrow/Repay" element={<Repay />} />
        <Route path="/index-bank/Invest/Withdraw-Crypto" element={<Withdraw />} />
      </Routes>
      
    </BrowserRouter>
    
  </>
  );
}

export default App;
