import ItemCard from "./ItemCard";

function ItemList({ itemList }) {
 
  return (
    <ol className="item-list">
      {itemList.map((item) => {
        return (
          <li key={item.item_id}>
            <ItemCard
              itemName={item.item_name}
              imgUrl={item.img_url}
              price={item.price}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ItemList;
