import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllPatients = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/allPatients`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data.length);
    return (
        <div className="row">
            <div className="col-md-3 text-center">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1>{data.length}</h1>
            </div>
        </div>
    );
};

export default AllPatients;