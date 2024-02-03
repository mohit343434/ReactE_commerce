import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function UserLogin() {
  const navgate = useNavigate()
  const [loginData, setLoginData] = useState({});
  const handelChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData
      , [name]: value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const respons = await axios.post(
        `http://localhost:8080/api/auth/login`,
        loginData
      );
      // console.log(respons);
      if (respons.data.status === 21) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "User not found",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 16) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Password is rong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 14) {
        Swal.fire(` ${respons.data.message}`, "You are Login ", "success");
        localStorage.setItem("token", respons.data.token)
        localStorage.setItem("data",JSON.stringify(respons.data.user));
        // console.log(respons.data.user.role);
        if (respons.data.user.role ===  1) {
          navgate('/admin/das')
        }else{
          navgate("/user/show")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm="6">
            <img src="img/home/login.jpg" alt="" className="w-100 image" />
          </Col>
          <Col sm="6 mt-5">
            <h3>
              Login <span className="signup-form-text">Form</span>{" "}
            </h3>
            <p>
              If your are allready register then{" "}
              <span className="signup-form-text">Enter Your Deatails</span>
            </p>
            <form>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
                onChange={handelChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="form-control mt-3"
                autoComplete="123"
                onChange={handelChange}
              />
              <Link to="/forgot">
                <p>are you forgot password?</p>
              </Link>
              <div className="d-grid gap-2 mt-2">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handelSubmit}
                >
                  Submit
                </button>
                <Link to="/signup" className="d-grid gap-2 mt-2">
                  <button className="btn btn-primary" type="button">
                    Go to Signup
                  </button>
                </Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserLogin;
