import axios from "axios";
import React, { useEffect, useState } from "react";

function Api() {
    const [data, setData] = useState([]); 
    const apiData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    //  console.log(res);
  };

  //  apiData()
  useEffect(() => {
    apiData();
  }, []);
//   console.log(data);
  return (
<>
{
    data.map((e , i)=>    {
        return <div key={i} style={{width:"400px" , height:"200px", float:"left", overflow:"hidden"}} >
      <h3>{e.title}</h3>
      <img src={e.image} alt=""  />
      <p>Price {e.price} </p>
    </div>
    })
}
    
</>
  );
}

export default Api;
