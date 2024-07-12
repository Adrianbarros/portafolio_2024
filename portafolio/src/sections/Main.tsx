import React from "react";
import Lottie from "lottie-react";
import '../styles/Main.css'
import Highlight from '../assets/highlight.svg'
import Arrow from '../assets/arrow.svg'
import ArrowCircle from '../assets/arrowCircle.svg'
import animationData from '../assets/animation.json'
export const Main = () => {


    return (
        <div className="container">
            <div className="intro">

                <div className="first-line">
                    <div className="greeding">
                        Hi! My Name
                    </div>

                    <img className="highlight" src={Highlight} alt="highlight" />

                </div>
                <div className="greeding">
                    is Adrian 💻
                </div>
                <div className="description">
                    I am a Software Engineer based in NYC.
                    I have a few years of industry expirience building, maintaining and improving software products and applications.
                    I am very flexible and commited to build quality software and if you are interested on my work, click below!
                </div>
                <div className="button-section">
                    <button className="button-main">
                        <div className="button-text">Contact Me! </div>
                        <img src={ArrowCircle} alt="Arrow Circle" />
                    </button>

                    <img className="curved-arrow" src={Arrow} alt="cruved arrow" />
                </div>
            </div>
            <div className="image">
                {/* <Lottie animationData={animationData} /> */}
            </div>

        </div>
    )
}