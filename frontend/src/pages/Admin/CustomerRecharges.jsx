import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../Config';

const CustomerRecharges = () => {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [filters, setFilters] = useState({
    userId: '',
    date: '',
    paymentStatus: '',
    minAmount: '',
    maxAmount: ''
  });
  const bearerToken = localStorage.getItem('token'); // Assuming you store token in localStorage

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${bearerToken}`
        };
        const response = await axios.get(`${BASE_URL}/payment/all`, { headers });
        setPayments(response.data);
        setFilteredPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, [bearerToken]); // Dependency array ensures this effect runs only once on component mount

  // Extract unique user IDs
  const uniqueUserIds = [...new Set(payments.map(payment => payment.userId))];

  // Function to apply filters
  const applyFilters = () => {
    let filtered = payments;

    if (filters.userId) {
      filtered = filtered.filter(payment => payment.userId === filters.userId);
    }

    if (filters.date) {
      filtered = filtered.filter(payment => new Date(payment.recharge.rechargeDate).toLocaleDateString() === filters.date);
    }

    if (filters.paymentStatus) {
      filtered = filtered.filter(payment => payment.paymentStatus === filters.paymentStatus);
    }

    if (filters.minAmount && filters.maxAmount) {
      filtered = filtered.filter(payment => payment.totalAmount >= parseFloat(filters.minAmount) && payment.totalAmount <= parseFloat(filters.maxAmount));
    }

    setFilteredPayments(filtered);
  };

  // Function to clear filters
  const clearFilters = () => {
    setFilters({
      userId: '',
      date: '',
      paymentStatus: '',
      minAmount: '',
      maxAmount: ''
    });
    setFilteredPayments(payments); // Reset filtered payments to original data
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Handle filter submission
  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-sec text-center">Customer Recharges</h1>

      {/* Filter Form */}
      <form onSubmit={handleSubmit} className="mb-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700">User ID:</label>
            <select id="userId" name="userId" value={filters.userId} onChange={handleFilterChange} className="block w-full mt-1 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
              <option value="">Select User ID</option>
              {/* Generate options dynamically */}
              {uniqueUserIds.map(userId => (
                <option key={userId} value={userId}>{userId}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">Date:</label>
            <input type="date" id="date" name="date" value={filters.date} onChange={handleFilterChange} className="block w-full mt-1 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentStatus" className="block text-gray-700">Payment Status:</label>
            <select id="paymentStatus" name="paymentStatus" value={filters.paymentStatus} onChange={handleFilterChange} className="block w-full mt-1 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
              <option value="">Select Payment Status</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="minAmount" className="block text-gray-700">Min Amount:</label>
            <input type="number" id="minAmount" name="minAmount" value={filters.minAmount} onChange={handleFilterChange} className="block w-full mt-1 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="maxAmount" className="block text-gray-700">Max Amount:</label>
            <input type="number" id="maxAmount" name="maxAmount" value={filters.maxAmount} onChange={handleFilterChange} className="block w-full mt-1 rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
          </div>
           
        </div>
      </form>
        <button type="submit" className="bg-teal-800 text-white px-4 py-2 rounded hover:bg-sec">Apply Filters</button>
        <button type="button" onClick={clearFilters} className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">Clear Filters</button>
      </form>
      {/* Table */}
      <div className='w-[98%] overflow-scroll h-full'>
      <table className="w-full border-collapse border border-gray-300 bg-white ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Payment ID</th>
            <th className="border border-gray-300 px-4 py-2">Mode of Payment</th>
            <th className="border border-gray-300 px-4 py-2">Payment Status</th>
            <th className="border border-gray-300 px-4 py-2">Total Amount</th>
            <th className="border border-gray-300 px-4 py-2">Recharge Date</th>
            <th className="border border-gray-300 px-4 py-2">Recharge Time</th>
            <th className="border border-gray-300 px-4 py-2">Response ID</th>
            <th className="border border-gray-300 px-4 py-2">User ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map(payment => (
            <tr key={payment.paymentId}>
              <td className="border border-gray-300 px-4 py-2">{payment.paymentId}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.modeOfPayment}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.paymentStatus}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.totalAmount}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(payment.recharge.rechargeDate).toLocaleDateString()}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(payment.recharge.rechargeDate).toLocaleTimeString()}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.payment_responseId}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CustomerRecharges;
