import React from "react";
import { Form, Button } from "react-bootstrap";
import fb from "../../Assets/fb.png";
import google from "../../Assets/search.png";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <>
      <h1>Create Account</h1>
      <Form>
        <Form.Group className=" d-flex ">
          <Form.Control type="fname" placeholder="Firstname" />
          <Form.Control type="Lname" placeholder="Lastname" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted mb-3"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/user" style={{ textDecoration: "none", color: "black" }}>
          <Button variant="primary" className="rounded-pill px-5 w-100">
            SignIn
          </Button>
        </Link>
      </Form>
      <Button
        variant="outline-light"
        className="mt-5 border w-100 rounded-pill"
      >
        <div style={{ color: "black" }}>
          <img src={fb} alt="" /> Sign up with Facebook
        </div>
      </Button>
      <Button
        variant="outline-light"
        className="mt-1 border w-100 rounded-pill"
      >
        <div style={{ color: "black" }}>
          <img src={google} alt="" /> Sign up with Google
        </div>
      </Button>
    </>
  );
};

export default SigninForm;
