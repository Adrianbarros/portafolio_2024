import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import '../styles/EmailForm.css';

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
        <form className='email-card' onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Subject:
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </label>
            <label>
                Message:
                <textarea className='message-box' name="message" value={formData.message} onChange={handleChange} required ></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default EmailForm;