import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {addToCartCategory, fetchAllCategories} from '../RTK/Slices/categorySlice'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

// import { FetchAllCategory } from "../RTK/Slices/categoryFetchApi";
const Category = () => {
  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  //pagination
  const items = 12;
  const [current, setCurrent] = useState(1);

  const NbPage = Math.ceil(data.length / items); //4
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const DatePerPage = data.slice(startIndex, endIndex);
  const filteredProducts = DatePerPage.filter((product) =>
    product.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products); // Use response.data.products
        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   dispatch(FetchAllCategory());
  // }, []);
  const logged = localStorage.getItem("logged");
  console.log("Loging : ", logged);
  const navigate = useNavigate()
  
  return (
    <>
      <div className=" py-5 mt-5 bg-primary">
        <Navbar />
        {logged ? <>
          <div className="d-flex justify-content-between align-items-center">
          <h1 className=" text-muted w-50 mx-3 " style={{ marginTop: "-20px" }}>
            Our Products
          </h1>
          <input
            className="form-control w-50 mx-5"
            type="text"
            placeholder="Search About Product"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <style>
            {`
      @media (max-width: 350px) {
        .d-flex {
          flex-direction: column;
        }
        .form-control, h1 {
          width: 100%;
          margin: 10px 0;
        }
        
      }
    `}
          </style>
        </div>
        <div className="container-fluid mt-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {filteredProducts.map((pro) => (
              <div className="col" key={pro.id}>
                <div
                  class="card shadow-lg p-3 mb-5 bg-white rounded"
                  style={{ width: "18rem" }}
                >
                  <img
                    class="card-img-top"
                    src={pro.images[0]}
                    style={{
                      height: "300px",
                      padding: "3px",
                      borderRadius: "10px",
                    }}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{pro.title.slice(0, 20)}</h5>
                    <p class="card-text">
                      {pro.description.slice(0, 35)}...etc
                    </p>
                    <div className="d-flex gap-2">
                    <Link
                      variant="primary"
                      className="w-100 mt-1 btn btn-primary "
                      to={`/category/${pro.id}`}
                    >
                       Details
                    </Link>
                    <Button
                      onClick={() => dispatch(addToCartCategory(pro))}
                      variant="info"
                      className="w-100 mt-1"
                    >
                      Add Cart
                    </Button>
                    </div>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center my-5">
            {Array.from({ length: NbPage }, (_, i) => i + 1).map((page) => {
              return (
                <Button
                  className="d-flex justify-contnet-between page-item page-link"
                  onClick={() => setCurrent(page)}
                >
                  {page}
                </Button>
              );
            })}
          </ul>
        </nav>
        </> : 
        navigate("/login")
        }
  
      </div>

      <Footer />
    </>
  );
};

export default Category;
