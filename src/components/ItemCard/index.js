import "./index.css"
import { FiShoppingCart } from 'react-icons/fi';
import date from 'date-and-time';
import { useState } from "react";


const ItemCard=(props)=>{
    const [quantity,setQuantity] = useState(1)
    const [orderPlaced,setOrderPlaced] = useState(false)
    const {details,onPlaceOrder} = props
    const {
        name,
        actual_price,
        final_price,
        available_units,
        deal_start_time,
        expiry_time
    } = details
    let status = ""
    let isAllowed = true
    let isComingSoon = false
    let isExpired = false
    const current_time = new Date().getUTCHours()
    const diff_1 = current_time - deal_start_time
    const diff_2 = expiry_time - current_time
    if(diff_1<0){
        status = "Coming Soon"
        isComingSoon = true
        isAllowed = false
    }
    else if(diff_2<0){
        status = "Expired"
        isExpired = true
        isAllowed = false
    }
    else if(diff_2>=0){
        status = "Hurry"
    }

    const onQuantityChange=(event)=>{
        setQuantity(event.target.value)
    }

    const onPlaceOrderClick=async()=>{
        let status = ""
        await fetch("http://localhost:3000/status")
            .then((res) => res.json())
            .then((data) => status = data.Status);
        setOrderPlaced(true)
        onPlaceOrder({name:name,quantity:quantity,status:status})
        setQuantity(1)
    }

    return(
        <li id={name} className={isAllowed ?  "card" : "card disable-card"}>
            <div className="item-wrapper">
                <FiShoppingCart className="item-icon"/>
                <h1>{name}</h1>
            </div>
            
            <p><span className="price">{final_price}</span> MRP:<span className="actual-price">  RS {actual_price}</span></p>
            <p>{available_units} Items left</p>
            <p className="time-text">Deal starts at : <span className="time">{deal_start_time}:00:00</span> UTC</p>
            <p className="time-text">Expires at : <span className="time">{expiry_time}:00:00</span> UTC</p>
            <div className="place-order-wrapper">
                <div className={isAllowed ? "quantity-wrapper": "quantity-wrapper disable-action"}>
                    <p>Qu</p>
                    <select className="quantity-selector" disabled={isAllowed ? false : true} onChange={onQuantityChange} value={quantity}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <button
                 className={isAllowed ? "place-order-button" : "place-order-button disable-action"}
                 disabled={isAllowed ? false : true}
                 onClick = {onPlaceOrderClick}
                >
                    Place Order
                </button>
            </div>
            <p className={isExpired ? "expired" : ""} style={{textAlign:"center",color : isComingSoon && "green"}}>{status}</p>
            {orderPlaced && <p style={{textAlign:"center",fontWeight:"bold"}}>Order Placed check details in MyOrders</p>}
        </li>
    )
}
export default ItemCard