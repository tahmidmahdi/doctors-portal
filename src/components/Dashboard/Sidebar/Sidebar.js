import { faCalendarWeek, faCog, faFileAlt, faTh, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { emailContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(emailContext)
    const [isDoctor, setIsDoctor] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:4000/isDoctor`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    return (
        <div className="sidebar ">
            <Link className="link" to="/appointment">
                <h5> <FontAwesomeIcon icon={faTh} />Dashboard</h5>
                <br />
            </Link>

            <br />
            {/* */}
            { isDoctor &&  <div>  
                <Link className="link" to="/appointment"> <h5> <FontAwesomeIcon icon={faCalendarWeek} /> Appointment</h5></Link>
                <Link to="/allPatients"> <h5> <FontAwesomeIcon icon={faUserFriends} /> Patients</h5></Link>
                <br />
                <Link to="/addDoctor"> <h5>Add Doctor</h5></Link>
                <br />
                <h5> <FontAwesomeIcon icon={faFileAlt} />Prescription</h5>
                <br />
                <h5> <FontAwesomeIcon icon={faCog} />Setting</h5>
            </div>}
        </div>
    );
};

export default Sidebar;