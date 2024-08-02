function ItemCard({
  itemName,
  imgUrl,
  price,
  item_id,
  handleClick,
  showButton,
  showDelete,
  handleRemove,
}) {
  return (
    <section className="item-card">
      <img className="item-image" src={imgUrl}></img>
      <div className="item-card-content">
        <div className="item-card-text">
          <p>{itemName}</p>
          <p>£{(price / 100).toFixed(2)}</p>
        </div>
        {showButton && (
          <button className="add-to-cart-button" onClick={handleClick}>
            Add to cart
          </button>
        )}
        {showDelete && (
          <button
            id={item_id}
            onClick={handleRemove}
            className="delete-from-listings-button"
          >
            Remove
          </button>
        )}
      </div>
    </section>
  );
}

export default ItemCard;
