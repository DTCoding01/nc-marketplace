import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SellItem from "./components/SellItem";
import SignUpLogIn from "./components/SignUp-LogIn";
function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Navbar basket={basket} />
      <Routes>
        <Route path="/" element={<HomePage setBasket={setBasket} />}></Route>
        <Route path="/sell" element={<SellItem />}></Route>
        <Route path="/sign-up" element={<SignUpLogIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
