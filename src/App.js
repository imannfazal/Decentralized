import Exchange from "./components/Exchange";
import Home from "./components/Home2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange1 from "./components/Exhange1";
import Await from "./components/Await";
import Header from "./components/Header";

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
      </Routes>
      
    </BrowserRouter>
  </>
  );
}

export default App;
