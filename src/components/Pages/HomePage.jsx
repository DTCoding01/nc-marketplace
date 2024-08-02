import Search from "../Search";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { getItems } from "../../../api";
import '../../../css/HomePage.css'
function HomePage({setBasket}) {
  const [itemList, setItemList] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    order: "asc",
    sort_by: "price",
    category: "All",
  });
  const [searchItem, setSearchItem] = useState("")
  useEffect(() => {
    getItems(searchQuery).then((items) => {
      setItemList(items);
    });
  }, [searchQuery]);
  return (
    <main>
      <Search setSearchQuery={setSearchQuery} setSearchItem = {setSearchItem} />
      <ItemList showButton = {true} setBasket={setBasket} itemList={itemList} searchItem = {searchItem}/>
    </main>
  );
}

export default HomePage;
