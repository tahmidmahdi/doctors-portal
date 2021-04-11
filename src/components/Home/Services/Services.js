import React from 'react';
import fluoride from '../../../images/flouride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    },
]

const Services = () => {
    return (
        <section className='services-container mt-5'>
           <div className="text-center ">
                <h5 className="fw-bold" style={{color:'#1CC7C1'}}>Our Services</h5>
                <h2 className="fw-bold">Services We Provide</h2>
           </div>
           <div className="d-flex justify-content-center mt-5 pt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
           </div>
        </section>
    );
};

export default Services;