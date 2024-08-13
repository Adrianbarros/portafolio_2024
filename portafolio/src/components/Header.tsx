import React from "react";
import '../styles/Header.css'
import { SectionRefs } from '../types'
import { scrollToSection } from "../utils/ScrollToSection";
import { motion } from 'framer-motion';
type HeaderProps = {
    sectionRef: SectionRefs
}

export const Header: React.FC<HeaderProps> = ({ sectionRef }) => {
    console.log(sectionRef.about)
    return (
        <div className="header">
            <div className="tags">
                <div className="line" />
                <button onClick={() => scrollToSection(sectionRef.about)} className="tag-button">
                    <div className="tag">Home</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.experience)} className="tag-button">
                    <div className="tag">Experience</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.skills)} className="tag-button">
                    <div className="tag">Skills</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.contact)} className="tag-button">
                    <div className="tag">Contact</div>
                </button>
                <div className="line" />
            </div>
        </div>
    );
};