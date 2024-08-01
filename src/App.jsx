import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SellItem from "./components/SellItem";
function App() {
  const [basket, setBasket] = useState([])
  return (
    <>
      <Navbar basket={basket}/>
      <Routes>
        <Route path="/" element={<HomePage setBasket={setBasket} />}></Route>
        <Route path="/sell" element={<SellItem/>}></Route>
      </Routes>
    </>
  );
}

export default App;
