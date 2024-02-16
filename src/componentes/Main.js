import React from 'react';
import { Carousel } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Row, Col } from 'react-bootstrap';
import FirstImage from '../img/imagen-carrusel-1.jpg';
import SecondImage from '../img/imagen-carrusel-2.jpg';
import ThirdImage from '../img/imagen-carrusel-3.jpg';
import '../App.css';

function Main() {
    return (
        <div className='main'>
            <div className='text-container'>
                <h1>We create solutions</h1>
                <p>We promote the strategy and the solution, we design brands, we develop websites, design UX-UI, create applications,
                    launch campaigns, tell stories, do digital marketing, train teams in deferents platforms and more. In all things, we are
                    focused on solutions for our visionary clients to create experiences that promote your needs for the future of your company.</p>
                <button className="btn btn-primary">Start</button>
            </div>
            <button className="arrow-down"><IoIosArrowDown /></button>
            <div className='main-container'>
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide"
                            src={FirstImage}
                            alt="Man at work using a tablet"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide"
                            src={SecondImage}
                            alt="Man at work using a whiteboard"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slide"
                            src={ThirdImage}
                            alt="Woman at work using a tablet and cell phone"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container-info-cards'>
                <Row xs={1} md={2} lg={4} className='g-4'>
                    <Col>
                        <div className='first-info-card'>
                            <h2>Branding for your brand</h2>
                            <p>Start enhancing your brand identity with our comprehensive branding services,
                                where we guide you every step of the way to foster your brand's growth.</p>
                            <div className='btn-arrow-go'>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='second-info-card'>
                            <h2>How to gain presence?</h2>
                            <p>Explore our blog to stay up to date with the latest design news, our courses, podcasts and more.</p>
                            <div className='btn-arrow-go'>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='third-info-card'>
                            <h2>Avoid mistakes</h2>
                            <p>Join our community on Instagram where we share daily tips on the latest technologies.
                                Don't let your business fall behind, improve it with us.</p>
                            <div className='btn-arrow-go'>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='fourth-info-card'>
                            <h2>Do you need a website?</h2>
                            <p>Your brand has already gained momentum and you need more
                                presence in networks. Contact us to start designing your website.</p>
                            <div className='btn-arrow-go'>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Main;

