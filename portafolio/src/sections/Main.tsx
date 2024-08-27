import React from "react";
import Lottie from 'react-lottie';
import '../styles/Main.css'
import Highlight from '../assets/highlight.svg'
import Arrow from '../assets/arrow.svg'
import ArrowCircle from '../assets/arrowCircle.svg'
import manCoding from '../assets/manCoding.json'
import { scrollToSection } from "../utils/ScrollToSection";
import { SectionRefs } from '../types'
import { motion, useAnimation } from 'framer-motion';


type MainProps = {
    sectionRef: SectionRefs
}


export const Main: React.FC<MainProps> = ({ sectionRef }) => {
    const arrowControls = useAnimation();
    const logoControls = useAnimation();
    const handleHoverStart = () => {
        arrowControls.start({ x: -20 });
        logoControls.start({
            x: [0, -10, 10, -10, 10, 0],
            transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
        })

    }
    const handleHoverEnd = () => {
        arrowControls.start({ x: 0 });
        logoControls.stop()
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: manCoding,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            className: "lottie-svg-class",
            id: "lottie-svg-id"
        }
    }
    return (
        <div className="container">
            <div className="lottie">
                <Lottie options={defaultOptions} />
            </div>

            <div className="intro">

                <div className="first-line">
                    <div className="greeding">
                        Hi! I am
                    </div>

                    <img className="highlight" src={Highlight} alt="highlight" />

                </div>
                <div className="greeding">
                    Adrian 👾
                </div>
                <div className="description">
                    I am a Software Engineer based in NYC.
                    I have a few years of industry experience building, maintaining and improving software products and applications.
                    I am very flexible and commited to build quality software and if you are interested on my work, click below!
                </div>
                <div className="button-section" onClick={() => scrollToSection(sectionRef.contact)}>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        whileTap={{
                            scale: 0.8,
                            y: 80,
                        }}
                        className="button-main"
                    >
                        <div className="button-text">Contact Me! </div>
                        <motion.img
                            src={ArrowCircle}
                            animate={logoControls}
                            alt="Arrow Circle" />
                    </motion.button >

                    <motion.img
                        animate={arrowControls}
                        className="curved-arrow"
                        src={Arrow}
                        alt="cruved arrow" />
                </div>
            </div>

        </div>
    )
}