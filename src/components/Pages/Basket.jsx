import ItemCard from "../ItemCard"
import { deleteItemFromBasket, getBasketByUsername } from "../../../api"
import { UserContext } from "../../context/User"
import { useContext } from "react"
import "../../../css/Basket.css"
export default function Basket({basket, setBasket}){
    const {user} = useContext(UserContext)
    function handleClick(itemId) {
        deleteItemFromBasket(user.username, itemId)
        .then(() => {
            return getBasketByUsername(user.username)
        })
        .then((items) => {
            setBasket(items)
        })
    }
    return (
        <section className="basket">
            <h2>My Basket</h2>
            <ul>
            {basket.map((item) => {
                return <li key={item.item_id}>
                    <ItemCard itemName={item.item_name} imgUrl={item.img_url} price={item.price}/>
                    <button onClick={() => {handleClick(item.item_id)}}>Remove</button>
                </li>

             })}
        </ul>
        </section>
        
        
    )
}