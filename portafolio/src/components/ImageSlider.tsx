import React, { useState } from 'react'
import { Employment } from '../types';
import arrow from '../assets/arrowCircle.svg'

interface Props {
    imageUrls: string[]
    data: Employment[]
}

export const ImageSlider = ({ imageUrls, data }: Props) => {

    const [imageIndex, setImageIndex] = useState(0)

    const handleNextImage = () => {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })

    }
    const handlePrevImage = () => {
        setImageIndex(imageIndex - 1)
    }


    return (
        <div className='entry-container'>
            {data.map(entry => (
                <div style={{
                    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, .9)), url(${imageUrls[entry.id]})`,
                    width: '100vw', height: '100vh', backgroundSize: 'cover', flexShrink: '0', display: 'flex', overflow: 'hidden',
                    translate: `${-100 * imageIndex}%`
                }}>
                    <div className="experience-content">
                        <div className="experience-info">
                            <div className="data-title"> {entry.title} @ {entry.company}</div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className="vertical-line" />
                                <div className="data-text">
                                    {entry.statement}
                                </div>
                            </div>
                            <div className="data-tags">
                                {entry.skills.map(skill => (
                                    <div className="data-tag">{skill}</div>
                                ))}
                            </div>
                            <div className="data-button"> View More</div>
                        </div>
                        <div className="date-slider" >
                            {imageIndex > 0 && <img className="arrows" src={arrow} onClick={() => handlePrevImage()} style={{ transform: 'rotateY(180deg)' }} />}
                            <div className="date"> {entry.year}</div>
                            <img className="arrows" src={arrow} onClick={() => handleNextImage()} />
                        </div>
                    </div>


                </div>
            ))}
        </div>

    )
}
