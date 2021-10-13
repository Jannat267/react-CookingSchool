import React from 'react';


const Service = (props) => {
    // destructure all needed value
    const { name, img, onlineFee, offlineFee,lectures } = props.service;
    

    return (
        // jsx for service
      <div className='col'>
             <div className="service card shadow">
             {/* all data  */}
            <div>
                <img src={img} alt="" className='card-img-top img-fluid' />
            </div>
            <div className='card-body p-2'>
                <h4 className="class-name card-title">{name}</h4>
                
                <p className="card-text"> Total Lectures:  <span className=''>{lectures}</span> </p>
                <p className="card-text"> Course Fee(Online) :  <span className='text-coral fw-bold'>$ {onlineFee}</span> </p>
                <p> Course Fee(Offline) : <span className='text-coral fw-bold'>${offlineFee}</span> </p>
                {/* learn more button */}
                <button className='btn btn-coral fw-bold'> Enroll Now</button>
                <br />
            </div>
        </div>
      </div>
    );
};

export default Service;