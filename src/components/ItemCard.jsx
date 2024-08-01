function ItemCard({ itemName, imgUrl, price }) {
  return (
    <section className="item-card">
      <img src={imgUrl}></img>
      <p>{itemName}</p>
      <p>£{price / 100}</p>
    </section>
  );
}

export default ItemCard;
