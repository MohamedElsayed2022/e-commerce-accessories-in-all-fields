import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import { useState } from "react";
import { addUser, deleteUser } from "../RTK/Slices/fromSlice";
import { useDispatch, useSelector } from "react-redux";
function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email)
  const dispatch = useDispatch();
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//  const regxEMail= email.match(emailRegex)
  const users = useSelector((state) => state.users.data);
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100 btn btn-dark"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addUser({ id:users.length+1, email, password }));
            setEmail("")
            setPassword("")
          }}
        >
          Submit
        </Button>
      </Form>
      <Table striped bordered hover responsive className="mt-4" variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <button className="btn btn-danger" 
              onClick={()=>dispatch(deleteUser(user))}
              >Delete</button>
            </td>
          </tr>
          ))}





          {/* {users.length > 0 &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))} */}
        </tbody>
      </Table>
    </div>
  );
}

export default BasicExample;
