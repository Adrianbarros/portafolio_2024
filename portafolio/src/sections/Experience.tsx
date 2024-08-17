import React, { forwardRef } from "react";
import '../styles/Experience.css';
import data from '../data/employment.json'
import temp from '../assets/images/temp.png'


export const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    const employment = data.data
    const currentImage = '../assets/images/temp.png'

    return (
        <div className="experence-section" ref={ref} id="experience" style={{ backgroundImage: `url(${temp})` }}>



        </div>
    )
})