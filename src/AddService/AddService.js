import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        //using axios fetch to post data
        axios.post('https://morning-brushlands-58353.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='booking-confirmation'>
            <h1 className="mt-5 mb-3 text-success">Add Service <span><i className="far fa-thumbs-up text-dark"></i></span></h1>
            <div className="container">

                <div className="form-body p-4 shadow bg-light mb-5 w-50">
                    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control mb-3' {...register("name")} placeholder="Tour place Name" />
                        <textarea className='form-control mb-3' {...register("description")} placeholder="Description" />
                        <input className='form-control mb-3' {...register("tour")} placeholder="Packages" />
                        <input className='form-control mb-3' {...register("simg")} placeholder="Image Url" />
                        <input className='form-control mb-3' {...register("price")} placeholder="price" />
                        <input className=" btn btn-primary w-100 fs-5" value="Add Service" type="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddService;