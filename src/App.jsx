import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SellItem from "./components/Pages/SellItem";
import SignUpLogIn from "./components/Pages/SignUp-LogIn";
import AccountPage from "./components/Pages/AccountPage";
import Basket from "./components/Pages/Basket";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <Navbar basket={basket} />
      <Routes>
        <Route path="/" element={<HomePage setBasket={setBasket} />} />
        <Route path="/sell" element={<SellItem />} />
        <Route path="/sign-up" element={<SignUpLogIn />} />
        <Route path="/account" element={<AccountPage />} />
        <Route
          path="/basket"
          element={<Basket basket={basket} setBasket={setBasket} />}
        />
      </Routes>
    </>
  );
}

export default App;
