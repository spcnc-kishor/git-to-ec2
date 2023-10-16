import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Navigate to="/" />;
  }

  const handleLogin = () => {
    dispatch(login({ userid: 10, name: "kishor gupta" }));
    navigate("/");
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mw-100 vh-100">
        <Col
          xs="10"
          lg="4"
          className="p-4 rounded"
          style={{ backgroundColor: "grey", color: "white" }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have account?
            {/* <a
              href="ok"
              style={{ color: "white", fontWeight: 600, fontSize: 15 }}
            > */}
            <Link to={"/signup"}>SignUp</Link>
            {/* </a> */}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
