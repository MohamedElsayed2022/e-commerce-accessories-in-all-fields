import React from 'react'
import './error.css'
import {  useNavigate } from 'react-router-dom'
// import Navbar from '../Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
const Error = () => {
  const cart = useSelector((state) => state.cart.cart);

  const logged = localStorage.getItem("logged");
  console.log("Loging : ", logged);
  const navigate = useNavigate()
  return (
    <>
        <Navbar fixed="top" expand="lg" className="bg-dark "  style={{ boxShadow: '0 4px 2px -2px rgba(0,0,0,0.1)' }} >
      <Container>
        <Link to="/" className="navbar-brand text-white">Navbar</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className='nav-link text-white' >Home</Link>
            {/* <Link to="/courses" className='nav-link text-white'>Courses</Link> */}
          
            {logged ? <>
              <Link to="/products" className='nav-link text-white'>Products</Link>
            <Link to="/category" className='nav-link text-white'>Category</Link>
            <Link to="/cart" className='nav-link text-white'>Cart ({cart.length})</Link>

              <Link to="/profile" className='nav-link text-white'><BsFillPersonFill size={25}/></Link> 

            </> :
            <>
             <Link to="/register" className='nav-link text-white'>Register</Link>
            <Link to="/login" className='nav-link text-white'>Login</Link>
            </>
           
            }

            






          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
         <div class="notfound-page">
    <div class="wrapper">
      <h1>404!</h1>
      <h5>Sorry, Page not found</h5>
      <p>Which page you are looking for might have been removed had its name changed or is tempoarial unaviable</p>
      <div class="buttons">
        <Link to="/"><i class="fas fa-home"></i> Go to Home</Link>
        <a href="#"><i class="fas fa-envelope"></i> Contact Us</a>
      </div>
     
    </div>
  </div>
    </div>
    </>
  
  )
}

export default Error