import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {BiRegistered} from 'react-icons/bi'
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: ""
  });
  const [errors, setErrors] = useState({})
  const [validate, setValidate] = useState(true)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    let isvalidate = true
    let validationErrors = {}
    if (formData.fname === "" || formData.fname === null) {
      isvalidate = false
      validationErrors.fname = "First Name Required"
    }
    if (formData.lname === "" || formData.lname === null) {
      isvalidate = false
      validationErrors.lname = "Last Name Required"
    }
    if (formData.email === "" || formData.email === null) {
      isvalidate = false
      validationErrors.email = "Email is Required"
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      isvalidate = false
      validationErrors.email = "Email is Not Valid"

    }

    if (formData.password === "" || formData.password === null) {
      isvalidate = false
      validationErrors.email = "Password is Required"
    } else if (formData.password.length < 6) {
      isvalidate = false
      validationErrors.password = "Password Length at least 6 Char"

    }
    if (formData.cpassword === "" || formData.cpassword === null) {
      isvalidate = false
      validationErrors.cpassword = "Password is Required"
    }
    // if (formData.image === "" || formData.image === null) {
    //   isvalidate = false
    //   validationErrors.fname = "Image Is Required"
    // }
    setErrors(validationErrors)
    setValidate(isvalidate)
    if (formData.cpassword !== formData.cpassword) {
      isvalidate = false
      validationErrors.cpassword = "CPassword Not Matched"
    }

    if (Object.keys(validationErrors).length === 0) {
      axios.post("http://localhost:3000/users", formData)
        .then((result) => {
          alert("Registeration Success ")
         localStorage.setItem("user-info" , JSON.stringify(formData))


          navigate('/login')
        })
        .catch(err => console.log(err))
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">

              <form action="" class="mt-5 border p-4 bg-dark shadow-lg p-3 mb-5 rounded" onSubmit={handleSubmit}>

                <h4 class="mb-5 text-light">Create Your Account</h4>
                {
                  validate ? <></> :
                    <span className="text-danger">
                      {errors.fname} ,  {errors.lname} , {errors.email} , {errors.password} , {errors.cpassword}


                    </span>
                }
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label className="text-light">
                      First Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      class="form-control"
                      onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                      placeholder="Enter First Name"
                    />
                  </div>

                  <div class="mb-3 col-md-6">
                    <label className="text-light">
                      Last Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      onChange={(e) => setFormData({ ...formData, lname: e.target.value })}

                      class="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label className="text-light">
                      Gmail<span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                      placeholder="Enter Last Name"
                    />
                  </div>

                  <div class="mb-3 col-md-12">
                    <label className="text-light">
                      Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}

                      placeholder="Enter Password"
                    />
                  </div>
                  <div class="mb-3 col-md-12">
                    <label className="text-light">
                      Confirm Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      class="form-control"
                      onChange={(e) => setFormData({ ...formData, cpassword: e.target.value })}

                      placeholder="Confirm Password"
                    />
                  </div>
                 
                  <div class="col-md-12">
                    <button class="btn btn-primary float-end">
                      <BiRegistered className="me-2 mb-1"/>
                      Signup Now
                    </button>
                  </div>
                </div>
              </form>
              <p class="text-center mt-3 text-secondary">
                If you have account, Please <Link to="/login">Login Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
