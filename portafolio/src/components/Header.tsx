import React from "react";
import '../styles/Header.css'
import { SectionRefs } from '../types'

type HeaderProps = {
    sectionRef: SectionRefs
}

export const Header: React.FC<HeaderProps> = ({ sectionRef }) => {
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref && ref.current) {
            const topOffset = ref.current.offsetTop;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="header">
            <div className="name">Adrian Barros</div>
            <div className="tags">
                <button onClick={() => scrollToSection(sectionRef.about)} className="tag-button">
                    <div className="tag">About Me</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.experience)} className="tag-button">
                    <div className="tag">Experience</div>
                </button>
                <button onClick={() => scrollToSection(sectionRef.skills)} className="tag-button">
                    <div className="tag">Skills</div>
                </button>
            </div>
            <div className="contact">
                <button className="button">Contact Me!</button>
            </div>
        </div>
    );
};