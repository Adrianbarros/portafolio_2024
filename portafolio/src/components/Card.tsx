import React from 'react'
import '../styles/Card.css'
import { Employment } from '../types'

interface Props {
    data: Employment
}
const Card: React.FC<Props> = ({ data }) => {
    console.log(data)
    return (
        <div className='card-container'>
            <div className='card-content'>
                <img className='card-img' src={data.image} />
                <div className='company-name'>{data.company}</div>
                <div className='position'>{data.title}</div>
            </div>

        </div>
    )
}

export default Card