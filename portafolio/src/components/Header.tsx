import React from "react";
import '../styles/Header.css'



export const Header = () => {
    return (
        <div className="header">
            <div className="name"> Adrian Barros</div>
            <div className="tags">
                <div className="tag">About Me</div>
                <div className="tag">Expirience</div>
                <div className="tag">Skills</div>
            </div>
            <div className="contact">
                <button className="button">Contact Me!</button>
            </div>
        </div>
    )
}