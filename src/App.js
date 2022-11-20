import Exchange from "./components/Exchange";
import Home2 from "./components/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange1 from "./components/Exhange1";
import Await from "./components/Await";
import TradeToEarn from "./components/TradeToEarn";

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
   
 
      </Routes>
      
    </BrowserRouter>
    
  </>
  );
}

export default App;
