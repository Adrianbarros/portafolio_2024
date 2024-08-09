import React, { useState, useRef } from 'react';
import '../../styles/EmailForm.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const EmailForm = () => {
    const form: any = useRef();

    const emailID = process.env.REACT_APP_EMAIL_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const [showForm, updateShowForm] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(`${emailID}`, `${templateID}`, form.current, {
            publicKey: publicKey,
        })
            .then(
                () => {
                    updateShowForm(false)
                },
                (error) => {
                    console.log('email failed to sent', error.text);
                },
            );

    };

    return (
        <>
            {showForm ? <form ref={form} className='email-card' onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Email' />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder='Subject' />
                <textarea className='message-box' name="message" value={formData.message} onChange={handleChange} required placeholder='Write your message here! Or just say hi!' />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8, }}
                    className='email-submit' type="submit">Send</motion.button>
            </form> : <div className='contact-title'> Message Sent!</div>}

        </>
    );
};

export default EmailForm;