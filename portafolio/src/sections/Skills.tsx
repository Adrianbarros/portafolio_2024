import React from "react";
import '../styles/Skills.css'
import CurvedLine from '../assets/curveLine.svg'
export const Skills = () => {
    return (
        <div className="skill-section">
            <div className="title">
                <img src={CurvedLine} />
                <div className="title-text">Skills</div>
            </div>
        </div>
    )
}