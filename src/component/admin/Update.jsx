import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const Navigate =useNavigate()
  const location = useLocation();
  const [id] = useState(new URLSearchParams(location.search).get("id"));
  const [productName, setproductName] = useState("");
  const [productDesc, setproductDesc] = useState("");
  const [productColor, setproductColor] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productSize, setproductSize] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productIagePath, setproductIagePath] = useState(null);
  

useEffect(  ()=>{
oneData();
// console.log("Update ");
}, [])

async function oneData(){
  const onePro = await axios.get(`http://localhost:8080/api/Product/product/${id}`)
// console.log(onePro.data.oneData);
if (onePro.data.oneData) {
  setproductName(onePro.data.oneData.productName)
  setproductDesc(onePro.data.oneData.productDesc)
  setproductColor(onePro.data.oneData.productColor)
  setproductCategory(onePro.data.oneData.productCategory)
  setproductSize(onePro.data.oneData.productSize)
  setproductPrice(onePro.data.oneData.productPrice)
  setproductPrice(onePro.data.oneData.productPrice)
}
}
  const handelSubmit = async (e) => {
    e.preventDefault();
    try { await axios({
        method: "put",
        url: `http://localhost:8080/api/Product/product/${id}`,
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
                  value={productName}
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
                  value={productDesc}
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
                  value={productColor}
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
                  value={productCategory}
                  onChange={(e) => setproductCategory(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="productSize"
                  placeholder="Product Size"
                  value={productSize}
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
                  value={productPrice}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
