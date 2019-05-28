import React from 'react'
import ReactContactForm from 'react-mail-form';
 

const Contact = () => {
    return (
        <div className = "contact" id = '4' >
        <div className = "contact1">
            <h1>Contact me: </h1>
            
            <ReactContactForm  className = 'contactForm' to="nemechekalexander@gmail.com" />

        </div>
        </div>
    )
}

export default Contact