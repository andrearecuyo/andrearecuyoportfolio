import React from 'react'
import Logo from '../assets/img/logo.png';
import '../styles/header.css';

function showNav(){
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}

function hideNav(){
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}

function Header() {
    return (
        <div className="header-content">
            <header>
                <div className="logo" data-menuanchor="hello">
                    <a href="#hello">
                        <img src={Logo} alt="Andrea Recuyo Avatar Logo"></img>
                    </a>
                </div>
                <div className="navigation">
                    <div className="ham-btn" onClick={showNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    <div className="sample">
                        
                        <div className="content">
                            <ul className="links">
                                <li data-menuanchor="hello" className="link active" onClick={hideNav}><a className="nav-item a-hello" href="#hello">Hello</a></li>
                                <li data-menuanchor="about" className="link" onClick={hideNav}><a className="nav-item a-about" href="#about">About</a></li>
                                <li data-menuanchor="skills" className="link" onClick={hideNav}><a className="nav-item a-skills" href="#skills">Skills</a></li>
                                <li data-menuanchor="works" className="link" onClick={hideNav}><a className="nav-item a-works" href="#works">Works</a></li>
                                <li data-menuanchor="contact" className="link" onClick={hideNav}><a className="nav-item a-contact" href="#contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;