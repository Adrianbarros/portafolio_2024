import React, { useState } from 'react'
import '../styles/Card.css'
import { Employment } from '../types'
import { motion } from 'framer-motion'

interface Props {
    data: Employment
}
const Card: React.FC<Props> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(true)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <motion.div onClick={handleFlip}
            transition={{ duration: 0.7 }}
            animate={{ rotateY: isFlipped ? 0 : 180 }}>
            <div className='card-container'>
                <motion.div
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: isFlipped ? 0 : 180 }}
                    className='card-content'>
                    <motion.div
                        className='front'
                        transition={{ duration: 0.7 }}
                        animate={{ rotateY: isFlipped ? 0 : 180 }}>
                        <img className='card-img' src={data.image} />
                        <div className='company-name'>{data.company}</div>
                        <div className='position'>{data.title}</div>
                    </motion.div>
                    <motion.div
                        className='back'
                        transition={{ duration: 0.7 }}
                        animate={{ rotateY: isFlipped ? 0 : 180 }}
                    >

                    </motion.div>

                </motion.div>
            </div>

        </motion.div>
    )
}



export default Card