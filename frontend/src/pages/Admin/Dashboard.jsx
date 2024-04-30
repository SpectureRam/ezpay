import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TEChart } from "tw-elements-react";

const Dashboard = () => {
  const [totalRecharge, setTotalRecharge] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchTotalRecharge = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the bearer token in localStorage
        const response = await axios.get('http://18.207.243.242:8181/ezpay/api/v1/recharge', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTotalRecharge(response.data.length);
      } catch (error) {
        console.error('Error fetching total recharge:', error);
      }
    };

    const fetchTotalUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming you store the bearer token in localStorage
        const response = await axios.get('http://18.207.243.242:8181/ezpay/api/v1/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTotalUsers(response.data.length);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalRecharge();
    fetchTotalUsers();
  }, []);

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4 mt-4">
        <div className="bg-primary text-white text-center py-4">
          <h3 className="font-bold text-lg">Total Recharge & Users</h3>
        </div>
        <div className="py-6 text-center">
          <div className="flex justify-around mb-4">
            <div>
              <h1 className="text-3xl font-bold">{totalRecharge}</h1>
              <p className="text-sm text-gray-500">Recharges Done</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{totalUsers}</h1>
              <p className="text-sm text-gray-500">Total Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/plan/add" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md block">
          <h4 className="font-bold">Plan Add</h4>
          <p className="text-sm">Click here to add a plan</p>
        </Link>
        {/* Add more Link components for other routes */}
         <Link to="/plan/edit" className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg shadow-md block">
          <h4 className="font-bold">Plan Edit</h4>
          <p className="text-sm">Click here to edit a plan</p>
        </Link>
        <Link to="/recharge/list" className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg shadow-md block">
          <h4 className="font-bold">Recharge List</h4>
          <p className="text-sm">Click here to view recharge list</p>
        </Link>
        <Link to="/user/list" className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg shadow-md block">
          <h4 className="font-bold">User List</h4>
          <p className="text-sm">Click here to view user list</p>
        </Link>
      </div>
      <TEChart
      type="line"
      data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
          },
        ],
      }}
    />
    </div>
  );
};

export default Dashboard;
