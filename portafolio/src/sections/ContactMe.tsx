import React, { forwardRef } from 'react'
import { EmailForm } from '../components/EmailForm'
import '../styles/ContactMe.css'
import resume from '../assets/adrianBarrosRes.pdf';
import linkedIn from '../assets/logos/linkedIn.png';
import github from '../assets/logos/github.png';
import gmail from '../assets/logos/gmail.png';
import { motion } from 'framer-motion'



export const ContactMe = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className='contact-section' ref={ref} id="contact">
            <div className='contact-right'>

                <div className='contact-subtitle'>Follow me in my socials</div>
                <div className='Social-links'>
                    <motion.img
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
                        whileHover={{ scale: 1.5 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -20,
                        }}
                        src={github}
                    />
                    <motion.img
                        className='link-logo'
                        whileHover={{ scale: 1.2, rotateX: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotateX: -180,
                        }}
                        src={gmail}
                    />

                </div>

            </div>
            <div className='contact-left'>
                <div className='contact-title'>Send me a message!</div>
                <EmailForm />


            </div>

        </div>
    )
})
