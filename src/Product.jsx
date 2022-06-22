import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Product = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue();

    //console.log("this is basket", basket);
    const addToBasket = () => {
        //dispatch action (ite into data layer)

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <Card className="product cards" key={id}>
            {/* <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}

                </div>
            </div>
            <img src={image} alt="" />
            <button
                onClick={addToBasket}
                className="product_button">Add to Basket</button> */}
            {/* <Card className='cards'> */}
            <div className='px-1 py-4'>

                <Card.Text style={{ fontWeight: "500" }}>
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_, i) => (
                            <p>🌟</p>
                        ))}

                    </div>
                </Card.Text>
            </div>
            <Card.Img variant="top"
                className="product_img"
                src={image}
            />

            <div className='px-3 py-4'>

                <button
                    onClick={addToBasket}
                    className="product_button">Add to Basket</button>

            </div>

        </Card>

    )
}

export default Product