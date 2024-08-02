import ListingPage from "./ListingPage";
import OrdersPage from "./OrdersPage";
import "../../../css/AccountPage.css";
import { useState } from "react";

export default function AccountPage() {
  const [shownPage, setShownPage] = useState("orders");
  function handleClick(e) {
    e.preventDefault();
    setShownPage(e.target.id);
  }
  return (
    <section className="account-page">
      <div>
      <button id="orders" onClick={handleClick}>
        My Orders
      </button>
      <button id="listings" onClick={handleClick}>My Listing</button>
      </div>
      {shownPage === "orders" ? <OrdersPage /> : <ListingPage />}
    </section>
  );
}
