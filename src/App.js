import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './components/Products';
import Courses from './components/Courses';
import About from './components/About';
import Cart from './components/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './components/Error/Error';
import Profile from './components/profile/Profile';
import ShowDetails from './components/cardDetails/ShowDetails';
import Category from './components/Category';
import CategoryDetails from './components/categoryDetails/CategoryDetails';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/category/:categoryid' element={<CategoryDetails/>}/>


        <Route path='/products/:productId' element={<ShowDetails/>}/>

        
        <Route path='*' element={<Error/>}/>





      </Routes>
    </div>
  );
}

export default App;
