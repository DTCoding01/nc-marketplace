import { useEffect, useState, useContext } from "react";
import { getOrdersByUsername } from "../../../api";
import { UserContext } from "../../context/User";
import ItemList from "../ItemList";
export default function OrdersPage() {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrdersByUsername(user).then((items) => {
      setOrders(items);
    });
  }, []);
  return <ItemList itemList={orders} />;
}
