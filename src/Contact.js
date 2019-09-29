import React from 'react'
import ReactContactForm from 'react-mail-form';
 

const Contact = () => {
    return (
        <div className = "contact" id = '4' >
            <div className = "contact1">
                <h1 className = 'conAir'>Contact me:</h1>
                <h1 className = "h1">Tel: <a  href = {`tel:5065014008`}>506-501-4008</a></h1> 
                <ReactContactForm  className = 'contactForm' to="nemechekalexander@gmail.com" />
            </div>
        </div>
    )
}

export default Contact