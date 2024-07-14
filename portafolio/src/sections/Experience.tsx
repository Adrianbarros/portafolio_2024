import React, { useState } from "react";
import '../styles/Experience.css';
import Card from "../components/Card";
import data from '../data/employment.json'


export const Experience = () => {
    const employment = data.data

    return (
        <div className="title" id="experience">
            <div className="experence-section">
            </div>

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
}