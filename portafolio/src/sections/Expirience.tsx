import React from "react";
import '../styles/Expirience.css';
import Card from "../components/Card";
import data from '../data/employment.json'


export const Expirience = () => {
    const employment = data.data
    console.log(employment)
    return (
        <div className="title">
            <div className="expirience-section">
            </div>

            <div className="title-text">Expirience</div>
            <div className="card-row">
                {employment.map((item, index) => {
                    return (
                        <Card />
                    )
                })}
            </div>

        </div>
    )
}