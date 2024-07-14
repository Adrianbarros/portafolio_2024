import React from "react";
import '../styles/Header.css'
import scrollToSection from '../utils/ScrollToSection'; // Adjust the import path as necessary


export const Header = () => {
    return (
        <div className="header">
            <div className="name">Adrian Barros</div>
            <div className="tags">
                <button onClick={() => scrollToSection('about')} className="tag-button">
                    <div className="tag">About Me</div>
                </button>
                <button onClick={() => scrollToSection('experience')} className="tag-button">
                    <div className="tag">Experience</div>
                </button>
                <button onClick={() => scrollToSection('skills')} className="tag-button">
                    <div className="tag">Skills</div>
                </button>
            </div>
            <div className="contact">
                <button className="button">Contact Me!</button>
            </div>
        </div>
    );
};