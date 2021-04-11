import React from 'react';
import picture from '../../../images/picture.png';
import './Appointment.css'
import background from '../../../images/appointmentbg.png'

const Appointment = () => {
    return (
        <div className="d-flex justify-content-center div-main ">
            <div className="w-75 row main">
                <div className="col-md-5">
                    <img className="appointment-img img-fluid" style={{height:'620px'}} src={picture} alt=""/>
                </div>

                <div className="col-md-7 mt-5 pt-5 appointment-text text-white">
                    <h5>APPOINTMENT</h5>
                    <h2>Make An Appointment <br/> Today</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam provident in officiis eius quia quas quidem nisi voluptas ratione rerum, reiciendis error repudiandae modi obcaecati voluptatibus iusto dolore distinctio fugiat totam deserunt? Sint animi consequatur dolores delectus cupiditate deleniti accusamus earum repellendus quaerat! </p>
                    <br/><br/>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;