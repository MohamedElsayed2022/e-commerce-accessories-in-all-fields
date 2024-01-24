import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../RTK/Slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../RTK/Slices/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "./footer/Footer";
import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [searchTitle, setSearchTitle] = useState("");

  //pagination
  const items = 12;
  const [current, setCurrent] = useState(1);

  const NbPage = Math.ceil(products.length / items); //4
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const DatePerPage = products.slice(startIndex, endIndex);
  const [id, setId] = useState(0);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const ShowDetails = () => {
    console.log("ID : ", id);
  };
  const filteredProducts = DatePerPage.filter((product) =>
    product.title.toLowerCase().includes(searchTitle.toLowerCase())
  );
  const logged = localStorage.getItem("logged");
  console.log("Loging : ", logged);
  const navigate = useNavigate()
  return (
    <>
    <div className="bg-primary rounded shadw-lg">
    <div className=" py-5 mt-5 bg-dark">
        <Navbar />
        {logged ?
        <>
            <div className="d-flex justify-content-between align-items-center">
            <h1 className=" text-white w-50 mx-4 " style={{ marginTop: "-20px" }}>
            Our Products
          </h1>
          <input
            className=" w-50 mx-5 bg-dark border-solid-red rounded p-2"
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
          <div className=""   style={{display:"grid" , gridTemplateColumns:"repeat(auto-fill , minmax(260px , 1fr)) " ,gap:"30PX" }}
        >
            {filteredProducts.length > 0 ? (
              DatePerPage.filter((product) =>
                product.title.toLowerCase().includes(searchTitle.toLowerCase())
              ).map((product) => (
                <div className="" key={product.id}>
                  <Card
                  style={{ width: "18rem" , backgroundColor:"	#404040"}}
                  className="shadow-lg p-3 mb-5  rounded carrrrd"
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ height: "250px", padding: "3px"  }}
                    />
                    <Card.Body>
                      <Card.Title style={{color:"#f5fffa"}}>
                        {product.title && product.title.length > 10
                          ? `${product.title.substring(0, 20)}..`
                          : product.title}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "small" , color:"#f5fffa"}}>
                        {product.description && product.description.length > 30
                          ? `${product.description.substring(0, 30)}...etc`
                          : product.description}
                      </Card.Text>
                      <Card.Text style={{ fontSize: "small" , color:"#f5fffa"}}>
                        {product.city && product.city.length > 30
                          ? `${product.city.substring(0, 30)}...etc`
                          : product.city}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Card.Text className="h6" style={{ color:"#f5fffa"}}>
                          Price : {product.price}$
                        </Card.Text>
                        <Card.Text className="h6" style={{  color:"#f5fffa"}}>
                          Rating : {product.rating.rate}{" "}
                          <AiFillStar className="text-warning mb-1 " />
                        </Card.Text>
                      </div>
                           <div className="d-flex gap-2 mt-2"> 
                           <Link
                        variant="info"
                        className="  btn btn-info  "
                        to={`/products/${product.id}`}
                      >
                         Details
                      </Link>
                           <Button
                        variant="primary"
                        className=" "
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add Cart
                      </Button>

                     
                           </div>
                    
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <h1 className="text-center text-danger">Product Not Found</h1>
            )}
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center my-5">
            {Array.from({ length: NbPage }, (_, i) => i + 1).map((page) => {
              return (
                <Button
                className="d-flex justify-contnet-between page-item page-link bg-dark decoration-none color-white"
                onClick={() => setCurrent(page)}
                >
                  {page}
                </Button>
              );
            })}
          </ul>
        </nav>
        </>
          : 
          navigate("/login")
          
          }

    
      </div>
    </div>
     

      <Footer />
    </>
  );
};

export default Products;
