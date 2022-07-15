// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    const {photo, name, phone, email} = data;
    return (
        <div className='Contact'>
            <div className='Left'>
                <img src={photo} alt={name}/>
            </div>
            <div className='Right'>
                <p>
                    <b>{name}</b> <br/>
                    {phone} <br/>
                    {email}
                </p>
            </div>
        </div>
    )
}

export default Contact;