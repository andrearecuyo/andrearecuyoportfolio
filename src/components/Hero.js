import React from 'react'
import HeroAvatar from '../assets/img/avatar/ar-hero-avatar.png'
import '../styles/hero.css'

const hello = "<HelloWorld />";
const SmileyEmoji = "\uD83D\uDE00";
const WavingHandEmoji = "\uD83D\uDC4B";

function Hero() {
    
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-text">
                    <code>{hello}</code>
                    <h1>I'm Andrea Recuyo</h1>
                    <h2>Front-End Developer {SmileyEmoji} </h2>
                    <a className="a-contact" href="#contact">
                        <button className="btn-dark" data-menuanchor="contact">Say Hi {WavingHandEmoji}</button>
                    </a>
                    <a className="a-works" href="#works">
                        <button className="btn-transparent" data-menuanchor="works">Discover my works</button>
                    </a>
                </div>
                <div className="hero-avatar">
                    <img src={HeroAvatar} alt="Andrea Recuyo Avatar" className="avatar"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero;