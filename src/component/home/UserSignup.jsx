import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function UserSignup() {
  const Navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handeChange = (e) => {
    const { name , value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const respons = await axios.post(
        `http://localhost:8080/api/auth/singnup`,
        data
      );
      console.log(respons);
      if (respons.data.status === 12) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Name is requir",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 14) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Email is requir",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 15) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Creact The email",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 17) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Password is requir",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 18) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Phone no. is requir",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 188) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Phone no. is increact",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (respons.data.status === 19) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Address is requir",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      if (respons.data.status === 20) {
        Swal.fire(
          `Good job! ${respons.data.newUser.name}`,
          "You are SignUp ",
          "success"
        );
        Navigate("/login");
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
            <img src="img/home/signup.png" alt="" className="w-100 image" />
          </Col>
          <Col sm="6 mt-5">
            <h3>
              Signup <span className="signup-form-text">Form</span>{" "}
            </h3>
            <p>
              You can fill Your Deatails{" "}
              <span className="signup-form-text">it's Totaly free</span>
            </p>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mt-2"
                onChange={handeChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mt-2"
                onChange={handeChange}
              />
              <input
                type="password"
                autoComplete="123"
                name="password"
                placeholder="Password"
                className="form-control mt-2"
                onChange={handeChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-control mt-2"
                onChange={handeChange}
              />
              <div className="form-floating mt-2">
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  name="address"
                  onChange={handeChange}
                ></textarea>
                <label htmlFor="floatingTextarea2">Address</label>
              </div>
              <div className="d-grid gap-2 mt-2">
                <button className="btn btn-primary" onClick={handelSubmit}>
                  Submit
                </button>
                <Link className="d-grid gap-2 mt-2" to="/login">
                  <button className="btn btn-primary" type="button">
                    Go to Login
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

export default UserSignup;
