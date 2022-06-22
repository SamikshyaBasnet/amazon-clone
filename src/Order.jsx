import React, { useState } from 'react'
import './Order.css'
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
const Order = ({ order }) => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="order">
            <div className="order_infoTop">
                <p>{moment.unix(order.data.created).format('MMM Do YYYY, h:mma')}</p>
                <p className='order__id'>
                    <small>{order.id}</small>
                </p>
            </div>


            {order.data.basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100} //part of hw
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order