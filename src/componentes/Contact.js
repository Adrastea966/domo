//Contact
import React from 'react';
import { TbSend } from "react-icons/tb";
import '../App.css';

function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className='contact'>
            <div className='container-contact'>
                <h1>Contact us</h1>
                <p> Would you like to enhance your brand and take your business further? Write to us, we will put together 
                    a personalized plan for you and your business. What are you waiting for?</p>
            </div>
            <form id="form" action="" className="form" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="yourname@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write us your message*</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn custom-btn">Send <TbSend/></button>

            </form>
            <a href="mailto:liu_creations@outlook.com" id="mail-to">mail</a>
        </div>
    );
}

export default Contact;