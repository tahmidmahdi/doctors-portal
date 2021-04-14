import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import picture from '../../../images/picture.png'
import './Doctor.css'

const Doctors = () => {
    return (
        <div className="container mt-5 pt-5">
            <h3 className="text-center text-brand">Our Doctors</h3>
            <div className="row mt-5">
                <div className="col-md-4 me-5 " style={{ width:'25rem'}}>
                    <img style={{height:'300px'}} className="center"  src={picture} alt=""/>
                    <h6 className="text-center">Dr. Caudi</h6>
                    <p className="text-center"> <FontAwesomeIcon icon={faPhoneAlt} /> Cell: +15789565646554</p>
                </div>
                <div className="col-md-4 me-5" style={{ width:'25rem'}}>
                    <img style={{height:'300px'}} className="center" src={picture} alt=""/>
                    <h6 className="text-center">Dr. Caudi</h6>
                    <p className="text-center"> <FontAwesomeIcon icon={faPhoneAlt} /> Cell: +15789565646554</p>
                    
                </div>
                <div className="col-md-4" style={{ width:'25rem'}}>
                    <img style={{height:'300px'}} className="center" src={picture} alt=""/>
                    <h6 className="text-center">Dr. Caudi</h6>
                    <p className="text-center"> <FontAwesomeIcon icon={faPhoneAlt} /> Cell: +15789565646554</p>

                </div>
            </div>
        </div>
    );
};

export default Doctors;