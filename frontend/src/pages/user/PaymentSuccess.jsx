import React from 'react';
import '../../App.css'; // Import CSS file for animation
import logelement from '../../assets/login/element1.png';

function PaymentSuccess() {
  return (
    <div className="relative bg-gray-100 h-screen flex justify-center items-center">
      <img className='absolute h-full left-0' src={logelement} alt="Left Element" />

      {/* Content */}
      <div className="bg-white p-6 md:mx-auto flex flex-col justify-center items-center rounded-3xl drop-shadow-2xl shadow-2xl"> {/* Include the animation class here */}
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6 payment-success">
          <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
          </path>
        </svg>
        <div className="text-center payment-success">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center payment-success">Recharge Successful!</h3>
          <p className="text-gray-600 my-2 payment-success">Your mobile recharge has been successfully processed.</p>
          <p className="text-gray-600 my-2 payment-success">Thank you for using our service!</p>
          <div className="py-10 text-center payment-success">
            <a href="/EZpay/user/home" className="rounded-3xl px-12 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3">
              GO BACK
            </a>
          </div>
        </div>
      </div>

      {/* Right element */}
      <img className='absolute h-full right-0 transform rotate-180' src={logelement} alt="Right Element" />
    </div>
  );
}

export default PaymentSuccess;
