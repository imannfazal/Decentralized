import Exchange from "./components/Exchange";
import Home2 from "./components/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange1 from "./components/Exhange1";
import Await from "./components/Await";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TradeToEarn from "./components/TradeToEarn";
import Home from "./components/Pages/Home";
import Mypage from "./components/Bank/Mypage";
import Earn from "./components/Bank/Earn";
import Govern from "./components/Bank/Govern";
import Basset from "./components/Bank/Basset";
import Borrow from "./components/Bank/Borrow";

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
      </Routes>
      
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
