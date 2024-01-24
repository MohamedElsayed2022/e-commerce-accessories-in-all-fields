import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { deleteCart, setCart } from "../RTK/Slices/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import "./cart/Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const category = useSelector((state) => state.category.category);
  const AllData = { ...cart, ...category };
  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, []);
  return (
    <>
   

      <div className="mt-5  bg-secondary" >
      <Navbar/>
      <div className="bg-primary p-3 ">
      <h1 className="text-center bg-dark opacity-2 p-3 mt-3  text-white shadow-lg rounded"> Total Price :{" "}{total} $ </h1>

      </div>
      <Table striped bordered hover variant="dark" className="shadow-lg rounded" responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th> Title</th>
            <th> Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>َQuantity</th>
            <th>Rating</th>


            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                {product.description && product.description.length > 30
                  ? `${product.description.substring(0, 20)}...`
                  : product.description}
              </td>

              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "80px", height: "80px" }}
                />
              </td>

              <td>{product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>{product.rating.rate}</td>


              <td>
                <Button variant="danger" onClick={()=>dispatch(deleteCart(product))}>Delete</Button>
              </td>
            </tr>
          // ))): (
          //   <h1 className="text-danger text-center">Product Not Found</h1>
          // )}
          ))}
        </tbody>
       
      </Table>
    </div>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
