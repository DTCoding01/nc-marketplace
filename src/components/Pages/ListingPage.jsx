import { useEffect, useState, useContext } from "react";
import { getListingsByUserId, deleteListingByItemId } from "../../../api";
import { UserContext } from "../../context/User";
import { IsLoadingContext } from "../../context/IsLoading";
import ItemList from "../ItemList";
import Loading from "../Loading"; 

export default function ListingPage() {
  const { user } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const [listings, setListings] = useState([]);

  function handleRemove(e) {
    e.preventDefault();
    const itemId = e.target.id;
    setIsLoading(true);
    deleteListingByItemId(itemId).then(() => {
      setListings((prevListings) =>
        prevListings.filter((item) => item.id !== itemId)
      );
      setIsLoading(false);
    });
  }

  useEffect(() => {
    if (user.user_id) {
      setIsLoading(true);
      getListingsByUserId(user.user_id).then((items) => {
        setListings(items);
        setIsLoading(false);
      });
    }
  }, [user.user_id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ItemList
          showDelete={true}
          handleRemove={handleRemove}
          itemList={listings}
        />
      )}
    </>
  );
}
