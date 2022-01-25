import './CartItem.css';
import React from 'react'
import { useStateValue } from './StateProvider';

function CartItem(props) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromCart = () => {
        // remove item
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id
        });
    }

    return (
        <div className="cartItem">
            <img src={props.image} alt="" className="cartItem_image" />
            <div className="cartItem_info">
                <p className="cartItem_title" >{props.title}</p>
                <p className="cartItem_price">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="cartItem_rating">
                    {Array(props.rating).fill().map((_,i) => (
                        <p style={{ color: "orange" }}>★</p>
                    ))}
                </div>
                <button onClick={removeFromCart} >Remove From Basket</button>
            </div>
        </div>
    )
}

export default CartItem
