import React, { forwardRef } from 'react'
import { EmailForm } from '../components/emails/EmailForm'
import '../styles/ContactMe.css'
import resume from '../assets/AdrianBarros_Resume.pdf';
import linkedIn from '../assets/logos/linkedIn.png';
import github from '../assets/logos/github.png';
import gmail from '../assets/logos/gmail.png';
import { motion } from 'framer-motion'



export const ContactMe = forwardRef<HTMLDivElement>((props, ref) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "AdrianBarros_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='contact-section' ref={ref} id="contact">
            <div className='contact-right'>

                <div className='contact-subtitle'>Learn more about me!</div>
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
                <div className='other-links'>
                    <div className='contact-subtitle'>Schedule a coffee chat with me</div>

                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        className='calendary-link'>
                        Schedule time with me!
                        <motion.img className='small-logo' src='https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg' />
                    </motion.button>

                </div>
                <div className='other-links'>
                    <div className='contact-subtitle'>Or Download my Resume!</div>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        onClick={() => { handleDownload() }}
                        className='resume-link'>
                        Download PDF
                    </motion.button>
                </div>

            </div>
            <div className='contact-left'>
                <div className='contact-title'>Send me a message!</div>
                <EmailForm />


            </div>

        </div>
    )
})
