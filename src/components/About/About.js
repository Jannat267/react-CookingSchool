import React from 'react';
import about from '../../images/about.jpg'
const About = () => {
    return (
    <div className='container-fluid text-dark p-4 mb-4 row'>
         <h1 className='fs-1 m-4 text-dark text-center'>Welcome to Cooking School</h1>
        <div className='col-6'>
           <div className='p-4 rounded border fs-4'>
               <h2 className='text-center fw-bold'>Our Story</h2>
               <p >
               This is the top leading site of Bangladesh from last few years where you can learn so many things about cooking.Top chefs of Bangladesh take classes and share their experiences.They teach very friendly and help you to find your creativity. Beside cooking we offer some other services like...
               </p>
               <ul className='fw-bolder list'><li>Certificate of Completion</li>
               <li>2 Recipe Books </li>
               <li>Notes with Tips and Tricks</li>
               <li>Lifetime Access for Online Courses</li>
               <li>Free Instruments on offline course</li>
               </ul>
             </div>
            </div>
        <div className='col-6'>
            <img className='img-fluid' src={about} alt=''/>
        </div>
    </div>
       
    );
};

export default About;