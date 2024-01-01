import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
function BasicExample() {
  // const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log("Products :-" , cart)
  return (
    <Navbar fixed="top" expand="lg" className="bg-dark "  style={{ boxShadow: '0 4px 2px -2px rgba(0,0,0,0.1)' }} >
      <Container>
        <Link to="/" className="navbar-brand text-white">Navbar</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className='nav-link text-white' >Home</Link>
            {/* <Link to="/courses" className='nav-link text-white'>Courses</Link> */}
            <Link to="/products" className='nav-link text-white'>Products</Link>
            <Link to="/category" className='nav-link text-white'>Category</Link>

            <Link to="/cart" className='nav-link text-white'>Cart ({cart.length})</Link>
            {/* <Link to="/register" className='nav-link text-white'>Register</Link>
            <Link to="/login" className='nav-link text-white'>Login</Link> */}
            <Link to="/profile" className='nav-link text-white'><BsFillPersonFill size={25}/></Link>






          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;