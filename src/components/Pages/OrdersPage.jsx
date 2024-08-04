import { useEffect, useState, useContext } from "react";
import { getOrdersByUsername } from "../../../api";
import { UserContext } from "../../context/User";
import { IsLoadingContext } from "../../context/IsLoading";
import ItemList from "../ItemList";
import Loading from "../Loading";

export default function OrdersPage() {
  const { user } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user.username) {
      setIsLoading(true);
      getOrdersByUsername(user.username)
        .then((items) => {
          setOrders(items);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user.username, setIsLoading]);

  return <>{isLoading ? <Loading /> : <ItemList itemList={orders} />}</>;
}
