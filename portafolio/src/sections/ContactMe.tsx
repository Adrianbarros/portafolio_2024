import React, { forwardRef } from 'react'
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
    const handleOpenLink = (link: string) => {
        window.open(link, '_blank');
    };
    const handleOpenEmail = () => {
        window.open('mailto:adriansbarros1@gmail.com')
    }
    return (
        <div className='contact-section' ref={ref} id="contact">

            <div className='contact-title'> My professional statement</div>
            <div className='contact-text'>I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.</div>

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
