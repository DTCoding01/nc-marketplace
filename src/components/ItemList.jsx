import ItemCard from "./ItemCard";

function ItemList({ itemList, searchItem, setBasket }) {
  function handleClick(item) {
    setBasket((currBasket) => {
      return [...currBasket, item];
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
        .map((item) => {
          return (
            <li key={item.item_id} className="list-item">
              <ItemCard
                itemName={item.item_name}
                imgUrl={item.img_url}
                price={item.price}
                handleClick={() => handleClick(item)}
              />
            </li>
          );
        })}
    </ol>
  );
}

export default ItemList;
