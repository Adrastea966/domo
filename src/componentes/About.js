//About
import React from 'react';
import '../App.css';
import { FaArrowRight } from "react-icons/fa6";
import ImageAbout from '../img/image-about.jpg';

function About() {
    return (
        <div className='about'>
           <div className='about-container-text'>
                <h1>A little of us</h1>
                <p>We create solutions and experiences that attract and engage. In everything, we are focused on solutions for our visionary clients to create experiences that advance their 
                needs for the future of their company. In addition, we tell stories that connect, implement high-performance digital marketing strategies, and train teams on various technology platforms. </p>
                <button> <a href='#'>Get started </a>  <FaArrowRight /> </button>
           </div>
           <div className='about-container-image'>
                <img src={ImageAbout} alt='business group working' />
           </div>
        </div>
    );
}

export default About;