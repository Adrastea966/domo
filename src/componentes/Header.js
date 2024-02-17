import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import BurgerButton from './BurgerButton.js';
import Logo from '../img/logo-domo.svg';

function Header() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav className='navbar'>
            <ul className={`navbar-list ${clicked ? 'active' : ''}`} >
                <li className='about-link'>
                    <a href='#about'>About</a>
                </li>
                <li className='service-link'>
                    <a href='#servicies'>Servicies</a>
                </li>
                <li className='tips-link'>
                    <a href='#tips'>Tips</a>
                </li>
                <li className='contact-link'>
                    <a href='#contact'>Contact</a>
                </li>
                <li className='faqs-link'>
                    <a href='#' target='_blank'>FAQs</a>
                </li>
                <li className='join-us-link'>
                    <button className="btn custom-btn">Join us</button>
                </li>
            </ul>
            <BurgerButton cliked={clicked} handleClick={handleClick} />

            <div className='networks'>
                <ul className='networks-list'>
                    <li className='instagram-link'>
                        <a href='#' target='_blank'><FaInstagram /></a>
                    </li>
                    <li className='whatssapp-link'>
                        <a href='https://api.whatsapp.com/send/?phone=541124013978&text&type=phone_number&app_absent=0' target='_blank' ><AiOutlineWhatsApp /></a>
                    </li>
                    <li className='linkedin-link'>
                        <a href='https://www.linkedin.com/in/eliana-ballian-a47816228/' target='_blank'><FaLinkedinIn /></a>
                    </li>
                </ul>
            </div>

            <div className='logo-container'>
                <img className='logo' src={Logo} alt="Company logo" />
                <div className='container-text-domo'>
                    <span>D</span>
                    <span>O</span>
                    <span>M</span>
                    <span>O</span>
                </div>
            </div>

        </nav>
    );
}

export default Header;