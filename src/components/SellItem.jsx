import { useState } from "react"
import ItemCard from "./ItemCard"
import { postItem } from "../../api";

function SellItem() {
    const [inputFields, setInputFields] = useState({
        item_name: "",
        description: "",
        img_url: "",
        price: 0,
        category_name: "",
        listed_by: 1
    })
    function handleChange(e) {
        const id = e.target.id;
        setInputFields((currInputFields) => {
          const newInputFields = { ...currInputFields };
          newInputFields[id] = e.target.value;
          return newInputFields;
        });
      }
    function handleSubmit (e) {
        e.preventDefault()
        postItem(inputFields)
        .then((item) => {
            console.log(item)
            return item
          
        })
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item_name">
                    Item Name:
                    <input required onChange={handleChange} type="text" name="item_name" id="item_name"/>
                </label>
                <label htmlFor="description">
                    Description:
                    <input onChange={handleChange} type="text" name="description" id="description" />
                </label>
                <label htmlFor="img_url">
                    Image URL:
                    <input required onChange={handleChange} type="text" name="img_url" id="img_url" />
                </label>
                <label htmlFor="price">
                    Price:
                    <input onChange={handleChange} type="text" name="price" id="price"/>
                </label>
                <label htmlFor="category_name">
                   Category:
                    <input onChange={handleChange} type="text" name="category_name" id="category_name" />
                </label>
                <button type="submit" className="sell-item">Sell</button>
            </form>
            <ItemCard itemName={inputFields.item_name} imgUrl={inputFields.img_url} price={inputFields.price}/>
        </section>
    )
}
export default SellItem