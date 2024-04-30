// PaymentForm.js
import React from "react";
import useRazorpay from "react-razorpay";

const PaymentForm = () => {
  const [Razorpay] = useRazorpay();

  const handlePayment = () => {
    const options = {
        key: "rzp_test_7CP7Bn1wx5RNKG",
        amount: 500*100,
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo", 
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
    const rzpay = new Razorpay(options);
    rzpay.open();
  };

  return (
    <div className=" mt-20">
      {/* Payment form UI */}
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
