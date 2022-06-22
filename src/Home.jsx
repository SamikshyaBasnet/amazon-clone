import React from 'react';
import './Home.css';
import Product from './Product';
import { Row, Col, Carousel } from 'react-bootstrap';

function Home() {
    return (
        <div className="home pb-3">
            <Carousel>
                <Carousel.Item>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt="banner"
                        className="home__image" />

                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        alt="banner"
                        className="home__image" />


                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                        alt="banner"
                        className="home__image" />

                </Carousel.Item>
            </Carousel>
            {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="banner"
                className="home__image" /> */}

            <Row className="home__row">
                <Col sm={6}>

                    <Product
                        id={12312}
                        title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
                        price={199.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
                    />
                </Col>
                <Col sm={6}>
                    <Product
                        id={34567}
                        title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
                        price={4051.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
                    />
                </Col>
            </Row>
            <Row className="home__row">
                <Col sm="4">
                    <Product
                        id={22222}
                        title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
                        price={883.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
                    />
                </Col>
                <Col sm="4">
                    <Product
                        id={988534}
                        title="Learning React: Functional Web Development with React and Redux Paperback 1"
                        price={950.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
                    />
                </Col>
                <Col sm="4">
                    <Product
                        id={76530}
                        title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
                        price={140.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
                    />
                </Col>

            </Row>

            <Row className="home__row">
                <Col>
                    <Product
                        id={200203}
                        title="Natural Life Fda Approved Disinfectant Surface Sanitizer, Citrus 500 Ml (Pack Of 3)"
                        price={710.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg"
                    />
                </Col>

            </Row>
        </div >
    )
}

export default Home