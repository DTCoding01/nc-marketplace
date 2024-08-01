import Search from "./Search";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getItems } from "../../api";
import '../../css/HomePage.css'
function HomePage() {
  const [itemList, setItemList] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    order: "asc",
    sort_by: "price",
    category: "all",
  });

  console.log(searchQuery);

  useEffect(() => {
    getItems(searchQuery).then((items) => {
      setItemList(items);
    });
  }, [searchQuery]);
  return (
    <main>
      <Search setSearchQuery={setSearchQuery} />

      <ItemList itemList={itemList} />
    </main>
  );
}

export default HomePage;
