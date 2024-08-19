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
    const handleOpenLink = (link: string) => {
        window.open(link, '_blank');
    };
    const handleOpenEmail = () => {
        window.open('mailto:adriansbarros1@gmail.com')
    }
    return (
        <div className='contact-section' ref={ref} id="contact">


        </div>
    )
})
