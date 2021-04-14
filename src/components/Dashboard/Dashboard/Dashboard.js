import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { emailContext } from '../../../App';
const containerStyle={
    // position: 'absolute',
    // right:0,
    backgroundColor: '#F4FDFB',
    height:'100%'
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(emailContext)
    console.log('loggedin user', loggedInUser);
    
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date =>{
        console.log(date);
        setSelectedDate(date)

        
    }
    // const [loggedInUser, setLoggedInUser] = React.useContext(React.emailContext)

    useEffect(()=>{
        fetch(`http://localhost:4000/appointmentsByDate`,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser})
        })
        .then(res=> res.json())
        .then(data => {
            setAppointments(data)
        })
    },[selectedDate])
   
    return (
        <div className="mt-5">
            <section>
                <div style={containerStyle} className="container-fluid row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-5 calender-main d-flex justify-content-center">
                    <Calendar className="calender"
                    onChange={handleDateChange}
                    value={new Date()}
                />
                    </div>
                    <div className="col-md-5">
                        <AppointmentsByDate appointments={appointments} selectedDate={selectedDate}></AppointmentsByDate>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;