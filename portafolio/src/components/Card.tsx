import React, { useState } from 'react'
import '../styles/Card.css'
import { Employment } from '../types'

interface Props {
    data: Employment
}
const Card: React.FC<Props> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div className='card-container' onClick={handleFlip}>
            <div className={`card-content ${isFlipped ? 'is-flipped' : ''}`}>
                <img className='card-img' src={data.image} />
                <div className='company-name'>{data.company}</div>
                <div className='position'>{data.title}</div>
            </div>

        </div>
    )
}



export default Card