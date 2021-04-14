import React from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';

const AppointmentsByDate = ({ appointments, selectedDate }) => {
    console.log(appointments);
    console.log(selectedDate.getFullYear());
    return (
        <div>
            <h2>Appointments : {appointments.length}</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
               
                    {
                        appointments.map(app => <AppointmentList key={app._id} appointments={app}></AppointmentList>)
                    }
                
            </table>

            {/* <div style={{width: '100%'}}>
                <thead>
                    <tr >
                        <th className="table-row">Name</th>
                        <th className="table-row">Schedule</th>
                        <th className="table-row">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map(app => <AppointmentList key={app._id} appointments={app}></AppointmentList>)
                    }
                </tbody>
            </div>
        </div> */}
        </div>
    );
};

export default AppointmentsByDate;