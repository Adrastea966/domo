//Contact
import React from 'react';
import { TbSend } from "react-icons/tb";
import '../App.css';

function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className='contact' id="contact">
            <div className='container-contact'>
                <h1 data-aos="fade-right">Contact us</h1>
                <p> Would you like to enhance your brand and take your business further? Write to us, we will put together
                    a personalized plan for you and your business. What are you waiting for?</p>
            </div>
            <form id="form" action="" className="form" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="200" htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
                    <input data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="300" type="email" className="form-control" id="exampleFormControlInput1" placeholder="yourname@example.com" />
                </div>
                <div className="mb-3">
                    <label data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="400" htmlFor="exampleFormControlTextarea1" className="form-label">Write us your message*</label>
                    <textarea data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="600" className="btn custom-btn">Send <TbSend /></button>

            </form>
            <a href="mailto:liu_creations@outlook.com" id="mail-to">mail</a>
        </div>
    );
}

export default Contact;