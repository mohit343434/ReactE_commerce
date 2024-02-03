import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Admin.css";
import axios from "axios";

function ProductTable() {
  const [dataa, setData] = useState([]);
  async function getProduct() {
    const res = await axios.get(`http://localhost:8080/api/Product/product`);
    setData(res.data.data);
  }
  useEffect(() => {
    getProduct()
  }, []);
  async function deleteProduct(id) {
    await axios.delete(
      `http://localhost:8080/api/Product/product/${id}`
    );
    // console.log(res);
    getProduct();
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 p-0">
            <div className="side-bar">
              <Link to="/admin/das" className="sider-link">
                DashBoard
              </Link>
              <Link to="/admin/user" className="sider-link">Users</Link>
              <Link to="/admin/product" className="sider-link">Add Product</Link>
              <Link to="/admin/show"  className="sider-link">Show Product</Link>
              <Link className="sider-link">Log-Out</Link>
            </div>
          </div>
          {/* containt  */}
          <div className="col-sm-10">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 mt-2">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col"> Product Name</th>
                        <th scope="col">Product Descrption</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataa.map((e, i) => (
                        <tr key={i}>
                          <td>{e.productName}</td>
                          <td> {e.productDesc} </td>
                          <td>{e.productPrice}</td>
                          <td>
                            <button type="button" className="btn btn-primary">
                              <Link to={`/admin/update?id=${e._id}`}>
                                <FaEdit />
                              </Link>
                            </button>{" "}
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => deleteProduct(e._id)}
                            >
                              <MdDelete />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductTable;
