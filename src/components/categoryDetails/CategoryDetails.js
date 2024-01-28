import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./categoryDetails.css";
import Navbar from "../Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
const CategoryDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api_url = "https://dummyjson.com/products";
  useEffect(() => {
    fetch(`${api_url}/${params.categoryid}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
    console.log(product);
  }, []);
  return (
    <div className="bg-dark" style={{ height: "93.5vh" }}>
      <div className="mt-5 p-2  ">
        <Navbar />
        <div className="d-flex  text-center total">
          <div className=" total_1 mt-5">
            <img
              src={product.images}
              alt="Card image Is Avaliable"
              className="img-fluid rounded mx-auto d-block"
            />
          </div>
          <div className="total_2">
            <div className="all d-flex">
              <div className="p1">Title : {product.title} </div>
              <div className="p2"> Description : {product.description} </div>
              <div className="private d-flex ">
                <div className="p3 ">Price : {product.price} $</div>
                <div className="p4 ">
                  Rating :{product.rating}{" "}
                  <FaStar className="mb-1 mx-1 text-warning " />{" "}
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Link to="/category" class="btn btn-primary mt-4  ">
                  <IoArrowBackOutline className="mx-2 mb-1" />
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default CategoryDetails;
