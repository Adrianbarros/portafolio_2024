import React, { forwardRef } from "react";
import '../styles/Experience.css';
import Card from "../components/Card";
import data from '../data/employment.json'


export const Experience = forwardRef<HTMLDivElement>((props, ref) => {
    const employment = data.data

    return (
        <div className="experence-section" ref={ref} id="experience">
            <div className="title-text">Experience</div>
            <div className="card-row">
                {employment.map((item, index) => {
                    return (
                        <Card key={index} data={item} />
                    )
                })}
            </div>

        </div>
    )
})