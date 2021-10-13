import React from 'react';
import contact from '../../images/contact.jpg'
const Contact = () => {
    return (
        <div className='container        p-4 mb-4 d-flex'
        >
            <div className='p-4    contact'>
            <h1 className='home-title p-4 m-4 text-dark'>Contact</h1>
                
            <h2> <i class="fas fa-map-marker-alt"></i> Address</h2>
                <p>24/3 dhanmondi,Dhaka.Bangladesh</p>
                <h2> <i class="fas fa-envelope-open-text"></i> Email</h2>
                <p>cookbook1@gmail.com</p>
                <h2> <i class="fab fa-facebook-square"></i> Facebook</h2>
                <p>www.facebook.com/cookbook</p>
                <h2> <i class="fas fa-phone-square-alt"></i> Phone</h2>
                <p>+88017222222</p>
            </div>
            <div className=''>
                <img src={contact} className='img-fluid' alt='' />
            </div>

           </div>
    );
};

export default Contact;