import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';

const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    const ticketNotVisibleState = {
        transform: "translateX(-100%)",
        opacity: 0.1
    };
    return (
        <FlipMove
            enterAnimation={{
                from: ticketNotVisibleState,
                to: {}
            }}
            leaveAnimation={{
                from: {},
                to: ticketNotVisibleState
            }}
        >
            <div className="checkoutProduct py-2 px-2 mb-3">
                <img alt={title}
                    src={image}
                />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {
                            Array(rating).fill()
                                .map(() => (
                                    <p>*</p>
                                ))
                        }
                    </div>

                    {!hideButton &&
                        <button
                            onClick={removeFromBasket}
                        >
                            Remove from basket
                        </button>}

                </div>
            </div>
        </FlipMove>
    )
}

export default CheckoutProduct