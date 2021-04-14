import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        console.log(e.target.value);
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:4000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-4 pr-4" >
                <h5 className="text-brand">Add A Doctor </h5>
                <br />
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload A Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" placeholder="Picture" />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;