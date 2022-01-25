import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props) {
    const [{basket}, dispatch] = useStateValue();
 
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    };

    return (
        <>
            <div className="product">
                <img
                    src={props.image}
                    alt=""
                />
                <div className="product_info">
                    <p>{props.title}</p>
                    <div className="product_rating">
                        {Array(props.rating).fill().map((_,i) => (
                            <p style={{ color: "orange" }}>★</p>
                        ))}
                    
                    </div>
                    <p className="product_price">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                    </p>
                </div>
                <button onClick={addToBasket}>Add to Cart</button>
            </div>
        </>
    )
}

export default Product
