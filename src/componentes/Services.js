//Servicies
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import ImageDevelop from '../img/image-develop.jpg';
import ImageMarketing from '../img/image-marketing.jpg';
import ImageBranding from '../img/image-brand.jpg';
import ImageUxUi from '../img/image-ux-ui.jpg';
import '../App.css';

function Servicies() {
    return (
        <div className='servicies' id="servicies">
            <div className='servicies-container'>
                <div className='servicies-container-text'>
                    <h1 data-aos="fade-right">Our services</h1>
                    <p> we design brands, we develop websites, design UX-UI, create applications, launch campaigns, tell stories,
                        do digital marketing, train teams in deferents platforms and more. </p>
                    <button> <a href='#' target='_blank'>Get started </a>  <FaArrowRight /> </button>
                </div>
            </div>
            <div className='container-card-services'>
                <div className="card" data-aos="fade-left">
                    <h4>Development</h4>
                    <img src={ImageDevelop} className="card-img-top" alt="..." />

                    <button className='btn-services-get'>
                        <a href='#' target='_blank'>Get service   <FaArrowRight /></a>
                    </button>

                </div>
                <div className="card" data-aos="fade-left" data-aos-delay='100'>
                    <h4>Marketing Digital</h4>
                    <img src={ImageMarketing} className="card-img-top" alt="..." />


                    <button className='btn-services-get'>
                        <a href='#' target='_blank'>Get service  <FaArrowRight /></a>
                    </button>

                </div>
                <div className="card" data-aos="fade-left" data-aos-delay='200'>
                    <h4>Branding</h4>
                    <img src={ImageBranding} className="card-img-top" alt="..." />

                    <button className='btn-services-get'>
                        <a href='#' target='_blank'>Get service   <FaArrowRight /></a>
                    </button>

                </div>
                <div className="card" data-aos="fade-left" data-aos-delay='300'>
                    <h4>Ux ui Design</h4>
                    <img src={ImageUxUi} className="card-img-top" alt="..." />

                    <button className='btn-services-get'>
                        <a href='#' target='_blank'>Get service   <FaArrowRight /></a>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Servicies;