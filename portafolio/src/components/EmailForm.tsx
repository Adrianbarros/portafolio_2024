import React from 'react'

export const EmailForm = () => {
    return (
        <form className='email-card'>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Subject:
                <input type="text" name="subject" />
            </label>
            <input type="message" name="message" />
        </form>
    )
}
