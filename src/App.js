import Exchange from "./components/Exchange";
import Home from "./components/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange1 from "./components/Exhange1";
import Await from "./components/Await";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TradeToEarn from "./components/TradeToEarn";

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Exchange" element={<Exchange />} />
        <Route path="/ExchangeSwap" element={<Exchange1 />} />
        <Route path="/Await" element={<Await />} />
        <Route path="/TradeToEarn" element={<TradeToEarn />} />
      </Routes>
      
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
