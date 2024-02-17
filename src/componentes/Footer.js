//Footer
import React from 'react';
import LogoLiu from '../img/liu.svg'
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import 'leaflet/dist/leaflet.css';
import { IconMap } from './IconMap';
import '../App.css';

function Footer() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='footer' id="footer">
            <div className='footer-container'>
                <div className='footer-container-text'>
                    <img className='logo-liu' src={LogoLiu} alt="Personal logo" />
                </div>
                <div className='footer-container-map-and-items'>
                    <div className='footer-container-map'>
                        <MapContainer center={{ lat: -34.668775, lng: -58.6578058 }} zoom={13}>
                            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                            <Marker position={{ lat: -34.6483278, lng: -58.6215016 }} icon={IconMap} />
                        </MapContainer>
                    </div>
                    <div className='footer-container-items'>
                        <ul>
                            <li>
                                <FaRegHeart /> Eliana Ballian
                            </li>
                            <li>
                                <MdOutlineMailOutline />   liu_creations@outlook.com
                            </li>
                            <li>
                                < GrLocation />  Buenos Aires province
                            </li>
                            <li>
                                <IoMdPhonePortrait />  <a href='https://api.whatsapp.com/send/?phone=541124013978&text&type=phone_number&app_absent=0' target='_blank'>+54 9 11 2401-3978</a>
                            </li>
                            <li>
                                <MdOutlineWorkOutline />   <a href='https://liucreations.netlify.app/' target='_blank'>Porfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-container-networks'>
                <ul className='networks-list-footer'>
                    <li className='instagram-link'>
                        <a href='#' target='_blank'><FaInstagram /></a>
                    </li>
                    <li className='whatssapp-link'>
                        <a href='https://api.whatsapp.com/send/?phone=541124013978&text&type=phone_number&app_absent=0' target='_blank'><AiOutlineWhatsApp /></a>
                    </li>
                    <li className='linkedin-link'>
                        <a href='https://www.linkedin.com/in/eliana-ballian-a47816228/' target='_blank'><FaLinkedinIn /></a>
                    </li>
                </ul>
            </div>
            <div className='copy-and-up'>
                <h4>©copyright DOMO 2024 | Sitio desarrollado por Liu</h4>
                <div className='up' onClick={() => scrollToSection('main')}><FaArrowUp /></div>
            </div>
        </div>
    );
}

export default Footer;