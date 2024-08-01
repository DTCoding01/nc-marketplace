function ItemCard({ itemName, imgUrl, price }) {
  return (
    <section className="item-card">
      <img className = "item-image" src={imgUrl}></img>
      <p>{itemName}</p>
      <p>£{(price / 100).toFixed(2)}</p>
    </section>
  );
}

export default ItemCard;
