import React, { useState } from 'react';
import { Button, Html } from "@react-email/components";
import '../../styles/EmailForm.css';
import { motion } from 'framer-motion';

export const EmailForm = () => {
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

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
        //   .then((result) => {
        //     console.log(result.text);
        //     alert('Email sent successfully!');
        //   }, (error) => {
        //     console.log(error.text);
        //     alert('Failed to send email. Please try again later.');
        //   });

        // e.currentTarget.reset();
    };

    return (
        <Html>
            <form className='email-card' onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Email' />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder='Subject' />
                <textarea className='message-box' name="message" value={formData.message} onChange={handleChange} required placeholder='Write your message here! Or just say hi!' />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className='email-submit' type="submit">Send</motion.button>
            </form>
        </Html>
    );
};

export default EmailForm;