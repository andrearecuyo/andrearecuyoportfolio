import React from 'react'
import '../styles/about.css'
import Logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance, faGithub } from "@fortawesome/free-brands-svg-icons"

const iconBehance = <FontAwesomeIcon icon={faBehance} />
const iconGithub = <FontAwesomeIcon icon={faGithub} />

function About() {
    return (
        <div className="container">
            <div className="about-header">
                <h1>About</h1>
                <h2>I’m a Front-End Developer from the Philippines.</h2>
            </div>
            <div className="about-content">
                <div className="tablet">
                    <div className="tablet-text">
                        <div className="tablet-header">
                            <h1>Front-End Developer.</h1>
                            <img src={Logo} alt="Andrea Recuyo Avatar logo"></img>
                        </div>
                        <p className="mt-5">I am sa self-taught Designer and Front-End Developer,
                        currently developing more skills using ReactJS and Vue.js.
                        I enjoy crafting clean & user-friendly experiences.
                        </p>
                        <p className="mt-5">Follow my journey, as I learn, design and code more websites! </p>
                        <div className="network mt-5">
                            <a href="https://www.behance.net/andrearecuyo" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn-light">{iconBehance} <span>andrearecuyo</span> </button>
                            </a>
                            <a href="https://github.com/andrearecuyo" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn-light">{iconGithub} <span>andrearecuyo</span> </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
