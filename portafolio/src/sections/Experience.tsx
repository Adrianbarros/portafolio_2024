import React, { forwardRef } from "react";
import '../styles/Experience.css';
import data from '../data/employment.json'
import temp from '../assets/images/temp.png'
import arrow from '../assets/arrowCircle.svg'


export const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    const employment = data.data
    const currentImage = '../assets/images/temp.png'

    return (
        <div className="experence-section" ref={ref} id="experience" style={{
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${temp})`
        }}>
            <div className="experience-content">
                <div className="experience-info">
                    <div className="data-title"> TITLE</div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className="vertical-line" />
                        <div className="data-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                    <div className="data-tags">
                        <div className="data-tag">
                            Lorem ipsum
                        </div>
                        <div className="data-tag">
                            Lorem ipsum dolor
                        </div>
                    </div>
                    <div className="data-button"> View More</div>
                </div>
                <div className="date-slider">
                    <div></div>
                    <div className="date"> 2024</div>
                    <img className="arrows" src={arrow} />
                </div>
            </div>

        </div>
    )
})