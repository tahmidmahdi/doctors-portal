import React from 'react';
import { useForm } from 'react-hook-form';
import './ContractUs.css'

const ContractUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container contract'>
            <h1 className='text-brand text-center'>Contract Us</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='text-center form'>
                <label htmlFor="name">Name</label>
                <br/>
                <input className='input'  {...register("name", { required: true })} placeholder='Enter Your Name'/>
                {errors.name && <span>This field is required</span>}
                <br/>

                <label htmlFor="email">Email</label> 
                <br/>
                <input className='input'  {...register("email", { required: true })} placeholder='Enter Your Name'/>
                {errors.name && <span>This field is required</span>}
                <br/>

                <label htmlFor="name">Whats On Your Mind</label> 
                <br/>
                <input  className='input' {...register("mind", { required: true })} placeholder='Whats On Your Mind'/>
                {errors.mind && <span>This field is required</span>}
                <br/><br/>
                <button className="btn btn-primary button">Submit</button>
            </form>

        </div>
    );
};

export default ContractUs;