import React, { forwardRef } from 'react'
import '../styles/ContactMe.css'
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/adrianBarrosRes.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;


export const ContactMe = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className='contact-section' ref={ref} id="contact">
            <div className='contact-left'>
                <div className='contact-title'>Lets Connect!</div>
                <div className='contact-document'>
                    <Document file={resume}>
                        <Page pageNumber={1} />
                    </Document>
                </div>

            </div>
            <div className='contact-links'></div>
        </div>
    )
})
