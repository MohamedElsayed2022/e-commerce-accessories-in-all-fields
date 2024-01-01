import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import './login.css'
import {FiLogIn} from "react-icons/fi"
const Login = () => {
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });
  const [errors , setErrors] = useState({})
  const [validate , setValidate]= useState(true)
  const [logged , setLogged] = useState(false)
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault()
    let isvalidate = true
    let validationErrors = {}
    
    if(formData.email === "" || formData.email=== null){
     isvalidate = false
     validationErrors.email = "Email is Required"
    }else if(!/\S+@\S+\.\S/.test(formData.email)){
     isvalidate = false
     validationErrors.email = "Email is Not Valid"
 
    }
 
    if(formData.password === "" || formData.password=== null){
     isvalidate = false
     validationErrors.email = "Password is Required"
    }else if(formData.password.length < 6){
     isvalidate = false
     validationErrors.password = "Password Length at least 6 Char"
 
    }
   
  
    if(formData.cpassword !==  formData.cpassword){
     isvalidate = false
     validationErrors.cpassword = "CPassword Not Matched"
    }
 
     axios.get("http://localhost:3000/users")
     .then((result)=>{
      result.data.map(user=>{
        if(user.email === formData.email){
          if(user.password === formData.password){
            // alert("Login Successfuly")
            setLogged(true)
            navigate("/home")
            localStorage.setItem("email" , formData.email)
            localStorage.setItem("password" , formData.password)
            localStorage.setItem("logged" ,!logged )


          }else{
            isvalidate = false
            validationErrors.password = "Wrong Password"
          }
        }
        else if(formData.email !== ""){
          isvalidate = false
          validationErrors.email = "Wrong Email"
        }
      })
      setErrors(validationErrors)
  setValidate(isvalidate)
     })
     .catch(err=>console.log(err))
    
   }
  return (
    <>
      {/* <Navbar /> */}
      <div class="container mt-5 py-5">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
             
              <form action="" class="mt-5 border p-4  shadow-lg p-3 mb-5 bg-dark rounded" onSubmit={handleSubmit}>
                
                <h4 class="mb-5 text-light">Login</h4>
                {
                validate ? <></> :
                <span className="text-danger">
                  {errors.email} , {errors.password} 

                  
                </span>
              }
                <div class="row">
                

                 
                  <div class="mb-3 col-md-12">
                    <label className="text-light">
                      Gmail<span class="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      onChange={(e)=>setFormData({...formData , email:e.target.value})}

                      placeholder="Enter Your Email"
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
                      onChange={(e)=>setFormData({...formData , password:e.target.value})}

                      placeholder="Enter Password"
                    />
                  </div>
                
                  <div class="col-md-12">
                    <button class="btn btn-primary float-end">
                      <FiLogIn className="me-2"/>
                      Login Now
                    </button>
                  </div>
                </div>
              </form>
              <p class="text-center mt-3 text-secondary">
                If you don't have account, Please <Link to="/register">Registeration</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
