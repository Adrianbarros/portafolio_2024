import React, { useState } from 'react'
import { Employment } from '../types';
import arrow from '../assets/arrowCircle.svg'
import { motion } from 'framer-motion'
import { handleOpenLink } from '../utils/utils';

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
        setImageIndex(index => {
            if (index <= 0) return imageUrls.length - 1
            return index - 1
        })
    }


    return (
        <motion.div className='entry-container'>
            {data.map(entry => (
                <motion.div style={{
                    backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, .9)), url(${imageUrls[entry.id]})`,
                    width: '100vw', height: '100vh', backgroundSize: 'cover', flexShrink: '0', display: 'flex', overflow: 'hidden',
                }}
                    animate={{
                        translateX: `${-100 * imageIndex}%`,
                        scale: imageIndex === entry.id ? 1 : 0.85
                    }}
                    transition={{
                        type: 'keyframes',
                        duration: 0.8
                    }}
                >
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
                            <motion.button
                                className="data-button"
                                onClick={() => handleOpenLink(entry.website)}
                                whileHover={{ scale: 1.2 }}
                            > View More</motion.button>
                        </div>
                        <div className="date-slider" >
                            <img className='arrows' alt='arrow left' src={arrow} onClick={() => handlePrevImage()} style={{ transform: 'rotateY(180deg)' }} />
                            <div className="date"> {entry.year}</div>
                            <img className="arrows" alt='arrow right' src={arrow} onClick={() => handleNextImage()} />
                        </div>
                    </div>


                </motion.div >
            ))}
        </motion.div>

    )
}
