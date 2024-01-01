import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {IoArrowBackOutline} from 'react-icons/io5'
// import {AiFillStar} from 'react-icons/ai'
import "./showDetails.css";
import { FaStar } from "react-icons/fa";
const ShowDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <div className="mt-5 p-1">
      <Navbar />
      <div className="d-flex  text-center total">
        <div className=" total_1 mt-5" >
              <img src={product.image} alt="Card image Is Avaliable"  className="img-fluid rounded mx-auto d-block" />
        </div>
        <div className="total_2" >
             <div className="all d-flex">
                  <div className="p1">Title : {product.title} </div>
                  <div className="p2">  Description : {product.description} </div>
                  <div className="p3 ">Price : {product.price} $</div>
                  {/* <div className="p4 ">Rating :{product.rating} <FaStar className="mb-1 mx-1 text-warning " /> </div> */}
                 
                  <Link to="/produts" class="btn btn-primary mt-4 "><IoArrowBackOutline className="mx-2 mb-1"/>Back</Link>



             </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
