import React from 'react';
import img from '../../images/life-style.jpg'
import hat from '../../images/42350-removebg-preview.png'
import Service from '../Services/Service';
import useServices from '../../hooks/useServices';
import chef from '../../images/chef.png'
import { Link } from 'react-router-dom';


const Home = () => {
    
    // home componant
     const [services] = useServices();
     const popularServices=services.slice(0,4);
    
    return (
        <div className=' mb-4'>           
           <div className=' row g-0'>
            <div className='side-img col-8'>
              <img src={img} className='img-fluid'  height='auto' alt="" />
            </div>
             <div className='side-details bg-coral     text-white text-center col-4'>
            
                <div className='w-50 mx-auto'><img src={hat} alt='' height='auto' max-width='' className='img-fluid'/></div>
                <h1 className='home-title'> <span>Passion</span> <br /> For Cooking</h1>
                <p className='fs-4 m-4'>Do you want to learn how to cook <span className=''> ? </span>Our cooking class will help you become a professional chef...</p>
                <button className='btn btn-light mb-2'> Learn More</button>
                
            </div>
           </div>
           
            <div className=' container text-center '>
               <h2 className='home-title p-4'>Popular Classes</h2>
               <div className='row card-group'>
                {popularServices.map(service=>
                    <Service 
                    key={service.key}
                    service={service}
                    >
                    </Service>
                    )}
              </div>
             </div>
             <div className='container d-flex bg-coral text-white mt-5'>
                    <div>
                        <img src={chef} alt='' className='img-fluid chef'  />
                    </div>
                     <div className='my-auto'>
                         <h1 className='title'>Do You Want To Become a Chef ?</h1>
                         
                             <Link to='/contact'>
                             <button className='btn btn-light m-2 fw-bold'>
                             Contact Us
                           
                            
                         </button>
                         </Link>
                     </div>
             </div>
        </div>
    );
};

export default Home;