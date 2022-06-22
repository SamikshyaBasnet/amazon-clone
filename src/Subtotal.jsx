import React from 'react'
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const totalPrice = basket.reduce((acc, array) => acc + array.price, 0);


    const navigate = useNavigate();
    //console.log("total Price", totalPrice);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) :
                            <strong>
                                {/* ${totalPrice} */}
                                {value}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} //part of hw
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button

                onClick={e => navigate('/payment')}
            >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal