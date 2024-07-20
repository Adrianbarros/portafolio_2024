import React, { forwardRef } from 'react'
import '../styles/ContactMe.css'
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/adrianBarrosRes.pdf';
import linkedIn from '../assets/logos/linkedIn.png';
import github from '../assets/logos/github.png';
import gmail from '../assets/logos/gmail.png';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;


export const ContactMe = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className='contact-section' ref={ref} id="contact">
            <div className='contact-right'>

                <div className='contact-subtitle'>Follow me in my socials</div>
                <div className='Social-links'>
                    <img className='link-logo' src={linkedIn} alt="LinkedIn logo" />
                    <img className='link-logo' src={github} alt="LinkedIn logo" />
                    <img className='link-logo' src={gmail} alt="LinkedIn logo" />
                </div>

            </div>
            <div className='contact-left'>
                <div className='contact-title'>Lets Connect!</div>
                <div className='contact-document'>
                    <Document file={resume}>
                        <Page pageNumber={1} />
                    </Document>
                </div>


            </div>

        </div>
    )
})
