import ListingPage from "./ListingPage";
import OrdersPage from "./OrdersPage";
import "../../../css/AccountPage.css"


export default function AccountPage() {
  return (
    <section className="account-page">
      <button>My Orders</button>
      <button>My Listing</button>
      <OrdersPage />
      <ListingPage />
    </section>
  );
}
