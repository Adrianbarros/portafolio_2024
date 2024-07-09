import React, { useState } from 'react'
import '../styles/Card.css'
import { Employment } from '../types'
import { motion } from 'framer-motion'

interface Props {
    data: Employment
}
const Card: React.FC<Props> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <motion.div className='card-container' onClick={handleFlip}
            style={{ width: "20rem", height: "10rem" }}
            transition={{ duration: 0.7 }}
            animate={{ rotateY: isFlipped ? 0 : 180 }}>
            <div className='card-content'>
                <img className='card-img' src={data.image} />
                <div className='company-name'>{data.company}</div>
                <div className='position'>{data.title}</div>
            </div>

        </motion.div>
    )
}



export default Card