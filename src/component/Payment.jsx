import React, { useState } from "react";

const Payment = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setmobile] = useState();
  const handelSubmit = (event) => {
    event.preventDefault();

    const options = {
      key: "rzp_live_HGCsLV5PjSYo8F",
      amount: "10000",
      currency: "INR",
      name: "DigiCoders Technologies",
      description: "Fees Payment",
      image: "",
      order_id: "order_NUPAq2E4Z1AyF3",
      callback_url: "",
      prefill: {
        name: name,
        email: email,
        contact: mobile,
      },
      notes: {
        address: "22-23, IT Chauraha, Lucknow",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function (response) {
        console.log("Payment ID = " + response.razorpay_payment_id);
        console.log("Order ID = " + response.razorpay_order_id);
        console.log("payment Success");
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (
    <div>
      <center>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            required
            placeholder="Enter Your name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br /> <br />
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br /> <br />
          <input
            type="number"
            required
            placeholder="Enter Your number"
            onChange={(e) => setmobile(e.target.value)}
          />{" "}
          <br /> <br />
          <button>Pay Now</button>
        </form>
      </center>
    </div>
  );
};

export default Payment;
