import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import React from "react";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
    axios
        .post(
            'http://localhost:5000/login/verifyLogin',
            data,
            { headers: { 'Content-Type': 'application/json' }}
        )
        .then(response => {})
        .catch(error => {console.log(error.data)});
    // e.target.reset()
    // navigate("/")
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

         <input type="submit" className="btn btn-default btn-primary mt-3" />
       </form>
     </>
  )
}