import React from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { AiFillGold } from "react-icons/ai";
import { CiFloppyDisk } from "react-icons/ci";
import { GiSteeltoeBoots } from "react-icons/gi";
import { LuScreenShare } from "react-icons/lu";
import { CgRing } from "react-icons/cg";
import { GiGemChain } from "react-icons/gi";
const Home = () => {
  return (
    <div className="mt-5 p-1 bg-dark">
      <Navbar />
      <section class="py-5 text-center container ">
        <div class="row py-lg-5 ">
          <div class="col-lg-6 col-md-8 mx-auto ">
            <h1 class="fw-light text-white">E-Commerce Project</h1>
            <p class="lead text-white">
              It is a project to manage and control products through logical
              operations. It contains resources for the largest possible number
              of courses that can be used.
            </p>
            <p>
              <Link to="/products" class="btn btn-primary my-2">
                Show Products
              </Link>
              <Link to="/profile" class="btn btn-secondary my-2 mx-3">
                Secondary action
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="text-center text-light">My Products</h1>
        <div className="d-flex justify-content-between mt-5 con-1">
          <div className="text-center shadow-lg p-5 mb-4 p1 " style={{ borderRadius:"15px"}}>
            <GiClothes className="text-info" size={60} />
            <h3 className="text-info mt-2">Accessories</h3>
          </div>
          <div className="text-center shadow-lg p-5 mb-4 p1 " style={{ borderRadius:"15px"}}>
            <BsHandbagFill className="text-info" size={60} />
            <h3 className="text-info mt-2">Accessories</h3>
          </div>
          <div className="text-center shadow-lg p-5 mb-4 p1 " style={{ borderRadius:"15px"}}>
            <AiFillGold className="text-info" size={60} />
            <h3 className="text-info mt-2">Accessories</h3>
          </div>
          <div className="text-center shadow-lg p-5 mb-4 p1 " style={{ borderRadius:"15px"}}>
            <CiFloppyDisk className="text-info" size={60} />
            <h3 className="text-info mt-2">Accessories</h3>
          </div>
       
       
          
        </div>
        <div className="d-flex justify-content-between mt-5 con-2">
        <div className="text-center shadow-lg p-5 mb-4 p8 " style={{ borderRadius:"15px"}}>
            <GiSteeltoeBoots className="text-info" size={60} />
            <h3 className="text-info mt-2"> Shoes</h3>
          </div>
          <div className="text-center shadow-lg p-5 mb-4 p5" style={{ borderRadius:"15px"}}>
            <LuScreenShare className="text-info" size={60} />
            <h3 className="text-info mt-2">Screens</h3>
          </div>
          <div className="text-center shadow-lg p-5 mb-4 p6" style={{ borderRadius:"15px"}}>
            <CgRing className="text-info" size={60} />
            <h3 className="text-info mt-2">Rings</h3>
          </div>
          <div className="text-center shadow-lg p-5 mb-4 p7" style={{ borderRadius:"15px"}}>
            <GiGemChain className="text-info" size={60} />
            <h3 className="text-info mt-2">Gold Chains</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
