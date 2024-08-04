import ItemCard from "./ItemCard";
import { postToBasket } from "../../api";
import { UserContext } from "../context/User";
import { useContext } from "react";
function ItemList({
  itemList,
  searchItem = "",
  setBasket,
  showButton = false,
  showDelete = false,
  handleRemove,
}) {
  const { user } = useContext(UserContext);
  function handleClick(item) {
    postToBasket(user.username, item.item_id).then((item) => {
      setBasket((currBasket) => {
        return [...currBasket, item];
      });
    });
  }
  return (
    <ol className="item-list">
      {itemList
        .filter((item) => {
          return item.item_name
            .toLowerCase()
            .includes(searchItem.toLowerCase());
        })
        .map((item, index) => {
          return (
            <li key={index} className="list-item">
              <ItemCard
                showButton={showButton}
                itemName={item.item_name}
                imgUrl={item.img_url}
                price={item.price}
                item_id={item.item_id}
                handleClick={() => handleClick(item)}
                showDelete={showDelete}
                handleRemove={handleRemove}
              />
            </li>
          );
        })}
    </ol>
  );
}

export default ItemList;
