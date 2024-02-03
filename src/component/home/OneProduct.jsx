import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useLocation } from "react-router-dom";

const OneProduct = () => {
  // const { id } = useParams("");
  const [Image, setImage] = useState("");
  const [ onePro , setOnePro] = useState([])
  const location = useLocation();
  const [id] = useState(new URLSearchParams(location.search).get("id"));
  async function OneData() {
    const res = await axios.get(
      `http://localhost:8080/api/Product/product/${id}`
    );
    setImage(res.data.oneData.productIagePath);
    setOnePro(res.data.oneData)
    // console.log(res.data);
  }
  useEffect(() => {
    OneData();
  }, []);
  // console.log(onePro);
  return (
    <>
      <div className="continer">
        <div className="row">
          <div className="col-sm-6">
            <div style={{ width: "400px", height: "400px", overflow:"hidden", marginLeft:"50px", marginTop:"50px" }}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "",
                    isFluidWidth: true,
                    src: Image,
                  },
                  largeImage: {
                    src: Image,
                    width: 1500,
                    height: 1200,
                  },
                }}
              />
            </div>
          </div>
          <div className="col-sm-6">
                <div>
                <br />
                <br />
                <br />
                  <h4>Name - {onePro.productName} </h4>
                  <p>Color - {onePro.productColor} </p>
                  <p>Desc -  {onePro.productDesc}</p>
                  <br />
                  <hr />
                  <p>Size - {onePro.productSize} </p>
                  <p> Price -   {onePro.productPrice}  </p>
                </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default OneProduct;
