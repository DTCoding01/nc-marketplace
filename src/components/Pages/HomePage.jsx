import Search from "../Search";
import ItemList from "../ItemList";
import { useState, useEffect, useContext } from "react";
import { getItems } from "../../../api";
import "../../../css/HomePage.css";
import { IsLoadingContext } from "../../context/IsLoading";
import Loading from "../Loading";
function HomePage({ setBasket }) {
  const [itemList, setItemList] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    order: "asc",
    sort_by: "price",
    category: "All",
  });
  const [searchItem, setSearchItem] = useState("");
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  useEffect(() => {
    setIsLoading(true)
    getItems(searchQuery).then((items) => {
      setItemList(items);
      setIsLoading(false);
    });
  }, [searchQuery]);
  return (
    <main>
      <Search setSearchQuery={setSearchQuery} setSearchItem={setSearchItem} />

      {isLoading ? (
        <Loading />
      ) : (
        <ItemList
          showButton={true}
          setBasket={setBasket}
          itemList={itemList}
          searchItem={searchItem}
        />
      )}
    </main>
  );
}

export default HomePage;
