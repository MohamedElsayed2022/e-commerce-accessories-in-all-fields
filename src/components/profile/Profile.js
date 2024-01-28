import React from 'react'
import Navbar from '../../components/Navbar'
import './profile.css'
import {BiLogOut} from 'react-icons/bi'
import { Navigate, useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate()    
    let user = JSON.parse(localStorage.getItem("user-info"))
    function Logout(){
     localStorage.clear()
     navigate("/register")
    }

    // console.log("User Data " , userData)
  return (
   <>

   <Navbar/>
   <section class="vh-100 bg-dark" style={{backgroundColor: ""}}>
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col col-lg-6 mb-4 mb-lg-0 shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card mb-3" style={{borderRadius: ".5rem"}}>
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white "
              style={{borderTopLeftRadius: ".5rem" , borderBottomLeftRadius: ".5rem"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style={{width: "80px"}} />
              <h5>Marie Horwitz</h5>
              <p>Web Designer</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                <div class="col-6 mb-3">
                    <h6>Name :</h6>
                    <p class="text-muted">
                        {user.fname} {user.lname}
                    </p>
                  </div>
                  
                  <div class="col-6 mb-3">
                    <h6>Password</h6>
                    <p class="text-muted">{user.password}</p>
                  </div>
                </div>
                <h6>Projects</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{user.email}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p class="text-muted">Dolor sit amet</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
                <button className='btn btn-danger w-100'  onClick={Logout}> <BiLogOut className='me-2 mb-1' />Logout</button>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Profile