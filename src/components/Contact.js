import React, { useState } from 'react';
import '../styles/contact.css';
import ContactAvatar from '../assets/img/avatar/ar-contact-avatar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faBehance, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import emailjs from 'emailjs-com';
import ThanksMessage from './ThanksMessage';

const iconGoogle = <FontAwesomeIcon icon={faGoogle} />
const iconBehance = <FontAwesomeIcon icon={faBehance} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />
const iconLinkedIn = <FontAwesomeIcon icon={faLinkedin} />
const iconInstagram = <FontAwesomeIcon icon={faInstagram} />

const linkBehance = "https://www.behance.net/andrearecuyo";
const linkGithub = "https://github.com/andrearecuyo";
const linkLinkedIn = "https://www.linkedin.com/in/andrearecuyo/";
const linInstagram = "https://www.instagram.com/andrearecuyo/";

function Contact() {
    const [show, setShow] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_npm6x9q', 'template_axnny8j', e.target, 'user_4SuOC4uQqqnFbfn5vsu09')
        .then((result) => {
            setShow(!show); 
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div>
            <div className="container-footer">
                <div className="contact-content">
                    <div className="contact-header">
                        <h1>Have a question or want to work together?</h1>
                        <p>Let me contact you or reach out to me on my email.</p>
                        {!show && (
                        <form onSubmit={sendEmail} className="contact-form">
                            <div className="input-group mt-5">
                                <input
                                  type="email"
                                  placeholder="😃 enter your email"
                                    name="from_email"
                                    required="required"
                                ></input>
                                <button type="submit" className="btn-dark">Let me in!</button>
                            </div>
                            </form>
                            )}
                        {show && <ThanksMessage />}
                    </div>
                    <div className="contact-img">
                        <img src={ContactAvatar} alt="Andrea Recuyo Contact Avatar"></img>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-network">
                        <a href="mailto:andrearecuyo@gmail.com">
                            <button type="button" className="btn-light">{iconGoogle}</button>
                        </a>
                        <a href={linkBehance} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn-light">{iconBehance}</button>
                        </a>
                        <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn-light">{iconGithub}</button>
                        </a>
                        <a href={linkLinkedIn} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn-light">{iconLinkedIn }</button>
                        </a>
                        <a href={linInstagram} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn-light">{iconInstagram}</button>
                        </a>
                    </div>
                    <div className="copyright">
                        <span>© 2021 Andrea Recuyo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;