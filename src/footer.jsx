import React from 'react'
import './footer.css';
import { Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <Row className='footer'>
            <Col sm={4} className="content">
                <h4>Get to Know Us</h4>
                <p>Careers</p>
                <p>Blog</p>
                <p>About Amazon</p>
                <p>Investor Relations</p>
                <p>Amazon Devices</p>
                <p>Amazon Science</p>
            </Col>

            <Col sm={4} className="content">
                <h4>Make Money with Us</h4>
                <p>Sell products on Amazon</p>
                <p>Sell on Amazon Business</p>
                <p>Sell apps on Amazon</p>
                <p>Become an Affiliate</p>
                <p>Advertise Your Products</p>
                <p>Host an Amazon Hub</p>
            </Col>
            <Col sm={4} className="content">
                <h4>Amazon Payment Products</h4>
                <p>Amazon Business Card</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
                <p>Amazon Currency Converter</p>

            </Col>


        </Row>
    )
}

export default Footer