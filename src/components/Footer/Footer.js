import React from 'react';
import logo from '../../images/cooking-school.png'

const Footer = () => {
    return (
        <div className='bg-light text-dark'>
            <div className='text-center'>
                <img src={logo} className='img-fluid' height='50' width='100' alt=''/>
                <h2>Cooking School</h2>
            </div>
            <div className='text-center'> 
            <div className='fs-2'>
            <i class="fas fa-map-marker-alt p-2"></i> 
            <i class="fas fa-envelope-open-text p-2"></i>
            <i class="fab fa-facebook-square p-2"></i>
            <i class="fas fa-phone-square-alt p-2"></i>
            </div>
            <p>Copyright 2021 © Cook Book . Designed by  Rupa</p>
            </div>
        </div>
    );
};

export default Footer;