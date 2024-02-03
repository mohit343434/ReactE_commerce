import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './layouts.css'

function Footer() {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col sm='4' className='footer-img'>
                        <img src="https://steps-workdo.myshopify.com/cdn/shop/files/logo_small.png?v=1665034610" alt="" />
                        <h6 className='mt-3 nav-heading'>STEP 2023 EDITION</h6>
                        <p className='mt-3'>
                            Step into the forefront of fashion with our latest collection of shoes. From sleek heels to trendy sneakers.
                        </p>
                        <p>
                            <i className="bi bi-facebook icon"></i>
                            <i className="bi bi-whatsapp icon ms-1"></i>
                            <i className="bi bi-linkedin icon ms-1"></i>
                        </p>
                    </Col>
                    <Col sm='2'>
                        <h6 className="nav-heading">NAVIGATION:</h6>
                        <p>Search <br />
                            All collections <br />
                            All products <br />
                            privacy policy</p>
                    </Col>
                    <Col sm='2 '>
                        <h6 className="nav-heading">EXTRA:</h6>
                        <p>
                            about us <br />
                            Contact Us <br />
                            Faq's <br />
                            Shipping & Delivery <br />
                            Terms & Conditions
                        </p>
                    </Col>
                    <Col sm='2 '>
                        <h6 className="nav-heading">CATEGORIES:</h6>
                        <p>
                            Women <br />
                            Kids <br />
                            Men <br />
                            Featured <br />
                            Bestseller <br />
                            Latest
                        </p>
                    </Col>
                    <Col sm='2'>
                        <h6 className="nav-heading">QUICK LINKS:</h6>
                        <p>
                            Sneakers <br />
                            Brogue boots <br />
                            Leather Shoes <br />
                            Running Shoes <br />
                            Sports Shoes <br />

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer