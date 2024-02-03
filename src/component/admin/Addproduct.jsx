import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Addproduct() {
  const  Navigate  = useNavigate()
  const [productName, setproductName] = useState("");
  const [productDesc, setproductDesc] = useState("");
  const [productColor, setproductColor] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productSize, setproductSize] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productIagePath, setproductIagePath] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("productIagePath", productIagePath);
    try {
      await axios({
        method: "post",
        url: "http://localhost:8080/api/Product/product",
        data: {
          productName,
          productDesc,
          productColor,
          productCategory,
          productSize,
          productPrice,
          productIagePath,
        },
        headers: { "Content-Type": "multipart/form-data" },
      });
      Navigate("/admin/show")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container-fluid add-product-container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="https://webmarkinc.com/wp-content/uploads/2018/11/home-2-slide-2.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-sm-6 mt-5">
            <h3>
              Add Product <span style={{ color: "blue" }}>Form</span>{" "}
            </h3>
            <form encType="multipart/form-data">
              <div className="mb-3">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  onChange={(e) => setproductName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="productDesc"
                  placeholder="Product Description"
                  onChange={(e) => setproductDesc(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="productColor"
                  placeholder="Product Color"
                  onChange={(e) => setproductColor(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="productCategory"
                  placeholder="Product Category"
                  onChange={(e) => setproductCategory(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="productSize"
                  placeholder="Product Size"
                  onChange={(e) => setproductSize(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="productPrice"
                  placeholder="Product Price"
                  onChange={(e) => setproductPrice(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  required
                  name="setproductIagePath"
                  placeholder="Product Image"
                  onChange={(e) => setproductIagePath(e.target.files[0])}
                  className="form-control"
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={handelSubmit}>
                  Submit
                </button>
                <Link to="/admin/das" >Back to </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addproduct;
