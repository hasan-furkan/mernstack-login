import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form";
import axios from "axios";
import {Home} from "../../Home";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        axios
            .post(
                'http://localhost:5000/register/addUser',
                data,
                { headers: { 'Content-Type': 'application/json' }}
            )
            .then(response => {
            })
            .catch(error => {console.log(error.data)});
        e.target.reset()
        navigate("/login")
    };

    return (
           <>
               <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column mt-3">

                   <label>Name</label>
                   <input  {...register("name", { required: true })}  className="form-control" />
                   {errors.name && <span>This field is required</span>}
                   <label>Email</label>
                   <input type="email" {...register("email", { required: true })} className="form-control" />
                   {errors.email && <span>This field is required</span>}
                   <label>Phone Number</label>
                   <input type="number" {...register("phone", { required: true })} className="form-control" />
                   {errors.phone && <span>This field is required</span>}
                   <label>Gender</label>
                   <select {...register("gender")} className="form-control dropdown">
                       <option disabled value="select">SELECT</option>
                       <option value="female">female</option>
                       <option value="male">male</option>
                       <option value="other">other</option>
                   </select>

                   <input type="submit" className="btn btn-default btn-primary mt-3" />
               </form>
           </>

    )
}