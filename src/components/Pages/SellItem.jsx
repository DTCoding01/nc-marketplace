import { useState } from "react";
import ItemCard from "../ItemCard";
import { postItem } from "../../../api";
import "../../../css/SellItem.css";
function SellItem() {
  const [inputFields, setInputFields] = useState({
    item_name: "",
    description: "",
    img_url: "",
    price: 0,
    category_name: "",
    listed_by: 1,
  });
  function handleChange(e) {
    const id = e.target.id;
    setInputFields((currInputFields) => {
      const newInputFields = { ...currInputFields };
      newInputFields[id] = e.target.value;
      return newInputFields;
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    postItem(inputFields).then((item) => {
      return item;
    });
  }
  return (
    <section className="sell-item-page">
      <div className="sell-title">
        <h2>SELL YOUR ITEM</h2>
      </div>

      <section className="sell-item-container">
        <form className="sell-item-form" onSubmit={handleSubmit}>
          <label htmlFor="item_name" className="sell-item-label">
            Item Name:
            <input
              required
              onChange={handleChange}
              type="text"
              name="item_name"
              id="item_name"
              className="sell-item-input"
            />
          </label>
          <label htmlFor="description" className="sell-item-label">
            Description:
            <input
              onChange={handleChange}
              type="text"
              name="description"
              id="description"
              className="sell-item-input"
            />
          </label>
          <label htmlFor="img_url" className="sell-item-label">
            Image URL:
            <input
              required
              onChange={handleChange}
              type="text"
              name="img_url"
              id="img_url"
              className="sell-item-input"
            />
          </label>
          <label htmlFor="price" className="sell-item-label">
            Price:
            <input
              onChange={handleChange}
              type="text"
              name="price"
              id="price"
              className="sell-item-input"
            />
          </label>
          <label htmlFor="category_name" className="sell-item-label">
            Category:
            <input
              onChange={handleChange}
              type="text"
              name="category_name"
              id="category_name"
              className="sell-item-input"
            />
          </label>
          <button type="submit" className="sell-item-button">
            Sell
          </button>
        </form>
        <ItemCard
          itemName={inputFields.item_name}
          imgUrl={inputFields.img_url}
          price={inputFields.price}
        />
      </section>
    </section>
  );
}
export default SellItem;
