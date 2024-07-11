import React, { useState } from 'react';
import '../styles/Card.css';
import { Employment } from '../types';
import { motion } from 'framer-motion';

interface Props {
    data: Employment;
}

const Card: React.FC<Props> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            className='card-container'
            onClick={handleFlip}
        >
            <motion.div
                className='card-content'
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <motion.div
                    className='card-front'
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img className='card-img' src={data.image} alt={`${data.company} logo`} />
                    <div className='company-name'>{data.company}</div>
                    <div className='position'>{data.title}</div>
                </motion.div>
                <motion.div
                    className='card-back'
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className='card-summary'>{data.statement}</div>
                    <div className='card-skills-container'>
                        {data.skills.map((skill, index) => (
                            <div key={index} className='card-skills'>{skill}</div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Card;