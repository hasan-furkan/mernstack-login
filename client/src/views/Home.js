import React, {useEffect, useState} from "react";
import axios from "axios";

export function Home() {

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

    async function callBackData() {
        await axios.get("http://localhost:5000/register/callUser")
            .then((res) => {
                setCallData(res.data.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    useEffect(()=> {
        callBackData()
    }, [callData])
    return (
        <>
            <div>
                {callData.map((data) => {
                    return (
                        <div key={data._id} className="card text-center d-inline-flex p-5 m-2 border-5">
                            <div className="card-header align-self-center m-3">{data.name}</div>
                            <div className="card-body">
                                <h5 className="card-title">{data.email}</h5>
                                <p className="card-text">{data.phone}</p>
                                <a href="#" className="btn btn-primary">{data.gender}</a>
                            </div>
                            <div className="card-footer text-muted">{data.date}</div>
                            <button className="btn btn-default btn-danger mt-3" onClick={handleDelete}>Delete</button>
                            <button className="btn btn-default btn-warning mt-3" onClick={handleEdit}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}