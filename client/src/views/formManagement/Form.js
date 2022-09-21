import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export function Form() {
  const notify = () =>
    toast.success("Added", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyError = (name) =>
    toast.error(`${name}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phone, setPhone] = useState();
  const onSubmit = (data, e) => {
    axios
      .post("http://localhost:4000/form", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        notify();
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((error) => {
        notifyError(error.response.data.msg);
      });
  };

  return (
    <>
      <div className="relative py-40 w-full h-full bg-blueGray-200">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <h1 className={"text-4xl my-2 mx-auto"}>Add to your contacts</h1>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
                <form onSubmit={handleSubmit(onSubmit)} className={"mt-10"}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      {...register("phone", { required: true })}
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    {errors.phone && <span>This field is required</span>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Country
                    </label>
                    <select
                      name={"Country"}
                      className="bg-blueGray-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      {...register("country", { required: true })}
                    >
                      <option value="Turkey ">Turkey</option>
                      <option value="Ukraine ">Ukraine</option>
                      <option value="Russian ">Russian</option>
                    </select>
                    {errors.country && <span>This field is required</span>}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Gender
                    </label>
                    <select
                      name={"Gender"}
                      className="bg-blueGray-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      {...register("gender", { required: true })}
                    >
                      <option value="male ">Male</option>
                      <option value="female ">Female</option>
                      <option value="other ">Other</option>
                    </select>
                    {errors.gender && <span>This field is required</span>}
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
