import React from 'react';

const AppointmentList = ({appointments}) => {
    return (
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{appointments.name}</td>
          <td>{appointments.date}</td>
          <td><button className="btn btn-primary">Schedule</button></td>
        </tr>
        
      </tbody>
        
        // <div className="row">
        //     <div className="col-md-4">
        //         <p className="table-row">{appointments.name}</p>
        //     </div>
        //     <div className="col-md-4">
        //         <p className="table-row">{appointments.date}</p>
        //     </div>
        //     <div className="col-md-4">
        //         <button  className="btn btn-primary ">Schedule</button>
        //     </div>

        // </div>
    );
};

export default AppointmentList;