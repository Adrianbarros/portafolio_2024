import React, { forwardRef } from "react";
import '../styles/Experience.css';
import data from '../data/employment.json'

import bohringer from '../assets/images/swe.jpg'
import west from '../assets/images/agile_team.jpg'
import tracflo from '../assets/images/construction_tech.jpg'
import nikeLogo from '../assets/images/nike.jpg'
import agileBoard from '../assets/images/agileBoard.jpg'
import { ImageSlider } from "../components/ImageSlider";


const backgroundImages = [bohringer, west, tracflo, nikeLogo, agileBoard]


export const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    const employment = data.data
    return (
        <div className='experince-section' ref={ref} id="experience" >
            <ImageSlider imageUrls={backgroundImages} data={employment} />
        </div>
    )
})