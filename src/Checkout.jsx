import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Link } from "react-router-dom";

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const ticketNotVisibleState = {
        transform: "translateX(-100%)",
        opacity: 0.1
    };
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"

                    className="checkout_ad"
                    alt="" />
                <div>
                    <h3>{user ? `Hello, ${user.email}` : ""}</h3>
                    <h2 className="checkout__title">
                        Your Shopping basket
                    </h2>

                    {basket.length === 0 ?
                        <div>
                            <h1>
                                You do not have any product right now here!
                            </h1>
                            <Link to="/">
                                <button className='product__button'>
                                    Buy Products
                                </button>
                            </Link>

                        </div>
                        :
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
                            <div>
                                {basket.map((product) => (
                                    <CheckoutProduct
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        rating={product.rating}
                                    />
                                ))}
                            </div>

                        </FlipMove>
                    }

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout