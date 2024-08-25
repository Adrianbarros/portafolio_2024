import React, { forwardRef } from 'react'
import { handleOpenLink, handleOpenEmail } from '../utils/utils'

import '../styles/ContactMe.css'
import linkedIn from '../assets/logos/linkedIn.png';
import github from '../assets/logos/github.png';
import { motion } from 'framer-motion'



export const ContactMe = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div className='contact-section' ref={ref} id="contact">

            <div className='contact-title'> My professional statement</div>
            <div className='contact-text'>
                Technically skilled software engineer with 3+ years of proven experience in the development and deployment of software solutions utilizing front-end, back-end, and full stack technologies. Demonstrated ability to use teamwork, leadership, flexibility, and creative problem-solving skills to develop, maintain, and scale robust and high-performance applications within agile, fast-paced environments.

            </div>



            <div className='social-links'>
                <motion.img
                    onClick={() => { handleOpenLink('https://www.linkedin.com/in/adrian-s-barros/') }}
                    className='link-logo'
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -20,
                        borderRadius: "100%"
                    }}
                    src={linkedIn}
                />
                <motion.img
                    className='link-logo'
                    onClick={() => { handleOpenLink('https://github.com/Adrianbarros') }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -20,
                    }}
                    src={github}
                />
                <motion.img
                    className='link-logo'
                    onClick={() => { handleOpenLink('https://calendly.com/adriansbarros1/30min?month=2024-08') }}
                    whileHover={{ scale: 1.2, rotateX: 360 }}
                    whileTap={{
                        scale: 0.8,
                        rotateX: -180,
                    }}
                    src='https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg'
                />

            </div>


            <motion.button
                onClick={() => handleOpenEmail()}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    y: 80,
                }}
                className="contact-button"
            >
                <div className="button-text"> Email Me! </div>
            </motion.button>



        </div >
    )
})
