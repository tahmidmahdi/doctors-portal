import React, { useState } from 'react';
import Header from '../../Home/Header/Header';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedData, setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedData}></BookAppointment>
            <h1>This is appointment</h1> 
        </div>
    );
};

export default Appointment;