import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form";
import axios from "axios";


export const Register = () => {

    const handleDelete = (data) => {
        axios.delete("http://localhost:5000/register/deleteUser:id", {
            data: {
                source: data._id
            }
        })
    }

    const handleEdit = (data) => {
        axios.put("http://localhost:5000/register/changeUser:id", {
            data: {
                source: data._id
            }
        })
    }

    const [callData, setCallData] = useState([]);
    useEffect(()=> {
       async function callBackData() {
           await axios.get("http://localhost:5000/register/callUser")
               .then((res) => {
                   setCallData(res.data.data)
               })
               .catch((e) => {
                   console.log(e)
               })
       }
       callBackData()
    }, [callData])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios
            .post(
                'http://localhost:5000/register/addUser',
                data,
                { headers: { 'Content-Type': 'application/json' }}
            )
            .then(response => {console.log(response)})
            .catch(error => {console.log(error.data)});
    };



    return (

        <div className="container">
            <h1 className="text-center">Register Page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column mt-3">

                <label>Name</label>
                <input {...register("name", { required: true })}  className="mb-2" />
                {errors.name && <span>This field is required</span>}
                <label>Email</label>
                <input type="email" {...register("email", { required: true })} className="mb-2" />
                {errors.email && <span>This field is required</span>}
                <label>Phone Number</label>
                <input type="number" {...register("phone", { required: true })} className="mb-2" />


                {errors.phone && <span>This field is required</span>}
                <label>Gender</label>
                <select {...register("gender")} className="mb-2">
                    <option disabled value="select">SELECT</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" className="mt-2" />
            </form>

            <div>
                {callData.map((data) => {
                    return (
                    <div key={data._id} className="card text-center d-flex flex-row w-0 m-2">
                        <div className="card-header">{data.name}</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.email}</h5>
                            <p className="card-text">{data.phone}</p>
                            <a href="#" className="btn btn-primary">{data.gender}</a>
                        </div>
                        <div className="card-footer text-muted">{data.date}</div>
                        <button className="btn btn-default btn-danger" onClick={handleDelete}>Delete</button>
                        <button className="btn btn-default btn-warning" onClick={handleEdit}>Edit</button>
                    </div>
                    )
                })}
            </div>
        </div>

    )
}