import React, { useRef } from "react";
import '../styles/Header.css'

type HeaderProps = {
    sectionRefs: React.MutableRefObject<{
        about: HTMLDivElement | null;
        experience: HTMLDivElement | null;
        skills: HTMLDivElement | null;
        contact: HTMLDivElement | null;
    }>;
};

export const Header = ({ sectionRefs }: any) => {
    const scrollToSection = (ref: any) => {
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
                <button onClick={() => scrollToSection(sectionRefs.about)} className="tag-button">
                    <div className="tag">About Me</div>
                </button>
                <button onClick={() => scrollToSection(sectionRefs.experience)} className="tag-button">
                    <div className="tag">Experience</div>
                </button>
                <button onClick={() => scrollToSection(sectionRefs.skills)} className="tag-button">
                    <div className="tag">Skills</div>
                </button>
            </div>
            <div className="contact">
                <button className="button">Contact Me!</button>
            </div>
        </div>
    );
};