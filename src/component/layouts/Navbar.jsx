import React from "react";
import { Link } from "react-router-dom";
import "./layouts.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src="img/shoesfylogo.jpg" alt="" className="logoimg" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 hoverable">
              <li className="nav-item">
                <Link to="/show" className="nav-link active " aria-current="page">
                  <span className="navhover">FASHION</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page">
                  <span className="navhover">PAGES</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page">
                  <span className="navhover">BLOGS</span>
                </Link>
              </li>

              <form className="d-flex" role="search">
                <input
                  className=" imputclass me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page">
                  <span className="navhover">Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page">
                  <span className="navhover">Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
