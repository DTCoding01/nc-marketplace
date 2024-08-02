import ItemCard from "./ItemCard";

function ItemList({
  itemList,
  searchItem = "",
  setBasket,
  showButton = false,
  showDelete = false,
  handleRemove,
}) {
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
