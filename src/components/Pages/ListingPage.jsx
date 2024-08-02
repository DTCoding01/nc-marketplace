import { useEffect, useState, useContext } from "react";
import { getListingsByUserId } from "../../../api";
import { UserContext } from "../../context/User";
import ItemList from "../ItemList";
import { deleteListingByItemId } from "../../../api";
export default function ListingPage() {
  const { user } = useContext(UserContext);
  const [listings, setListings] = useState([]);

  function handleRemove(e) {
    e.preventDefault();
    deleteListingByItemId(e.target.id).then(() => {
      setListings(listings);
    });
  }

  useEffect(() => {
    getListingsByUserId(user.user_id).then((items) => {
      setListings(items);
    });
  }, [listings]);
  return (
    <ItemList
      showDelete={true}
      handleRemove={handleRemove}
      itemList={listings}
    />
  );
}
