import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import instance from './axios';
import axios from "./axios";
import { db } from './firebase';

const Payment = () => {

    const navigate = useNavigate();


    const [{ user, basket }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);

    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generte the stripe secret which allows is to charge a customer
        const getClientSecret = async () => {
            const res = await axios({
                method: 'POST',

                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(res.data.clientSecret);

        }
        getClientSecret();
    }, [basket]);


    console.log("The secret is ", clientSecret);
    console.log("person", user);
    console.log("person");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            //paymentintent = payemnt confirmation

            db
                .collection('users')
                .doc(user.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });


            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            });

            navigate('/orders', { replace: true })

        })
    }


    const handleChange = (e) => {
        //listens for changes in the cardelement 
        //and display the as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }
    return (
        <div className='payment'>

            <div className="payment__container">
                {/* Payment section = delivery address */}
                <h1>
                    Checkout (<Link className='link' to="/checkout">{basket.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user ? user.email : ""}</p>
                        <p>123 React Made</p>
                        <p>Nepal</p>
                    </div>

                </div>

                {/* Payment section = review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(product => (
                            <CheckoutProduct
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={product.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section = payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} //part of hw
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <Link to="/orders">
                                    {/* <button disabled>
                                        Buy Now
                                    </button> */}
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>
                                            {processing ? "Processing" : "Buy Now"}
                                        </span>
                                    </button>
                                </Link>

                            </div>
                        </form>
                        {error && <div>{error}</div>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment