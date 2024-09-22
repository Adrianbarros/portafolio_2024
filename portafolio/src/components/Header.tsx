import React, { useContext } from "react";
import '../styles/Header.css'
import { SectionRefs } from '../types'
import { scrollToSection } from "../utils/ScrollToSection";
import { VisibilityContext } from "../utils/VIsibilityContext";

type HeaderProps = {
    sectionRef: SectionRefs
}

export const Header: React.FC<HeaderProps> = ({ sectionRef }) => {
    const context = useContext(VisibilityContext);

    if (!context) {
        throw new Error('Header must be used within a VisibilityProvider');
    }

    const { isExperienceVisible } = context;
    return (
        <div className={`header ${isExperienceVisible ? 'header-in-experience' : ''}`} >
            <div className="tags">
                <div className={` ${isExperienceVisible ? 'white-line' : 'line'}`} />
                <button onClick={() => scrollToSection(sectionRef.about)} className="tag-button">
                    <div className={`tag ${isExperienceVisible ? 'header-in-experience' : ''}`}>Home</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.skills)} className="tag-button">
                    <div className={`tag ${isExperienceVisible ? 'header-in-experience' : ''}`}>Skills</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.experience)} className="tag-button">
                    <div className={`tag ${isExperienceVisible ? 'header-in-experience' : ''}`}>Experience</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.contact)} className="tag-button">
                    <div className={`tag ${isExperienceVisible ? 'header-in-experience' : ''}`}>Contact</div>
                </button>
                <div className={` ${isExperienceVisible ? 'white-line' : 'line'}`} />
            </div>
        </div>
    );
};