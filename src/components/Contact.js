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
                            <img src={item.photo} width="100dp" height="100dp"/>
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
        {
            // contacts.map((item) => {
            //     return <li key="{item.name}">{`${item.name} : ${item.phone}`}</li>
            // })
        }
        </div>
    )
}

export default Contact;