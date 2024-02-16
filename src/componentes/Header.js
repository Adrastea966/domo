// Header.js
import React, { useState, useEffect } from 'react';
import '../App.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from '../img/logo-domo.svg';

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`header ${isExpanded ? 'expanded' : ''}`}>
            <div className='networks'>
                <ul className='networks-list'>
                    <li className='instagram-link'>
                        <a href='#'><FaInstagram/></a>
                    </li>
                    <li className='whatssapp-link'>
                        <a href='#'><AiOutlineWhatsApp /></a>
                    </li>
                    <li className='linkedin-link'>
                        <a href='#'><FaLinkedinIn /></a>
                    </li>
                </ul>
            </div>
            <div className='header-content'>
                <div className='logo-container-dos'>
                    <img className='logo2' src={Logo} alt="Company logo" />
                </div>
                <div className='menu'>
                    <HiMenuAlt3 />
                </div>
            </div>
            <nav className='navbar container'>
                <div className='logo-container'>
                    <img className='logo' src={Logo} alt="Company logo" />
                </div>
                <ul className='navbar-list'>
                    <li className='about-link'>
                        <a href='#'>About</a>
                    </li>
                    <li className='service-link'>
                        <a href='#'>Service</a>
                    </li>
                    <li className='plans-link'>
                        <a href='#'>Plans</a>
                    </li>
                    <li className='contact-link'>
                        <a href='#'>Contact</a>
                    </li>
                    <li className='faqs-link'>
                        <a href='#'>FAQs</a>
                    </li>
                    <li className='join-us-link'>
                        <button className="btn custom-btn">Join us</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;