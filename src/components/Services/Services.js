import React from 'react';
import useService from '../../hooks/useServices';
import Service from './Service';
// services components
const Services = () => {
    const [services] = useService();
    return (
        
             <div className='container mt-4 mb-4'>
                  <div className='row row-cols-1 row-cols-md-4 g-4 '>
                  {/* selecti one service from services */}
                {services.map(service=>
                // send data to service component
                    <Service 
                    key={service.key}
                    service={service}
                    >
                    </Service>
                    )}
              </div>
             </div>
        
        
    );
};

export default Services;