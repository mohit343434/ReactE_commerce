import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ShowProduct() {
 const navigate  = useNavigate()
  const [data, setData] = useState([]);
  async function getProduct() {
    const res = await axios.get(`http://localhost:8080/api/Product/product`);
    setData(res.data.data);
  }

  function productByClick (){
    const userData = localStorage.getItem("data");
    if (!userData) {
      alert("You have not login")
      navigate("/login")
    }
    if (userData) {
      alert("thanks for bay this product")
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((e, i) => (
            <div className="col-sm-3" key={i}>
              <div className="card mt-5" style={{ width: "18rem" }}>
              <Link to={`/oneShow?id=${e._id}`}>
              <img
                  src={e.productIagePath}
                  className="card-img-top"
                  style={{ height: "300px" }}
                  alt=""
                />
            </Link>
                
                <div className="card-body">
                  <h5 className="card-title">{e.productName} </h5>
                  <p
                    className="card-text"
                    style={{
                      width: "270px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {e.productDesc}{" "}
                  </p>
                  <p className="fw-bold">Price : ₹ {e.productPrice}</p>
                  <Link className="btn btn-primary" onClick={productByClick} style={{ float: "left" }}>
                    By Product
                  </Link>
                  <Link className="btn btn-primary" style={{ float: "right" }}>
                    Add to Card
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowProduct;
