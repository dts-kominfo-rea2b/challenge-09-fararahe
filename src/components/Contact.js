// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import contacts from '../data/contacts.json';

const Contact = () => {
    return (
        <div>
            {
                contacts.map((item) => {
                    return <div className='Contact'>
                        <div className='Left'>
                            <img src={item.photo} alt={item.name}/>
                        </div>
                        <div className='Right'>
                            <p>
                                <b>{item.name}</b> <br/>
                                {item.phone} <br/>
                                {item.email}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Contact;