import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../Config';
import {toast, Toaster} from 'react-hot-toast'
import { Select, MenuItem, TextField, Button, Grid } from '@mui/material';

const AddPlans = () => {
  const [formData, setFormData] = useState({
    operator: '',
    planType: '',
    planDetails: '',
    voice: '',
    talkTime: '',
    totalData: '',
    dataPerDay: '',
    sms: '',
    planPrice: 0,
    planValidity: 0,
    planCategory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bearerToken = localStorage.getItem('token'); 
        const headers = {
        'Authorization': `Bearer ${bearerToken}`
        };
      const url = `${BASE_URL}/plans`;
      const response = await axios.post(url, formData,{headers});
      console.log('Plan added successfully:', response.data);
      toast.success('Plan added successfully');
      setFormData({  operator: '',
      planType: '',
      planDetails: '',
      voice: '',
      talkTime: '',
      totalData: '',
      dataPerDay: '',
      sms: '',
      planPrice: 0,
      planValidity: 0,
      planCategory: ''})
      // Optionally, redirect the user to another page or display a success message
    } catch (error) {
      console.error('Error adding plan:', error);

      toast.error("Error adding plan")
    }
  };

  const operatorOptions = ['Airtel', 'Jio', 'VI', 'BSNL'];

  const planTypeOptions = ['Popular Plans', 'Entertainment Plans', 'Data Booster'];

  const planCategoryOptions = ['Prepaid', 'Postpaid'];

  return (
    <div className='bg-teal-50'>
    <Toaster/>
      <h2 className="text-3xl mb- mt-3 font-bold text-center text-sec ">Add Plan</h2>
    <div className="max-w-4xl mx-auto mt-7 p-6  bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Operator:</label>
              <Select
                value={formData.operator}
                onChange={(e) => handleChange(e)}
                name="operator"
                className="w-full"
              >
                {operatorOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Plan Type:</label>
              <Select
                value={formData.planType}
                onChange={(e) => handleChange(e)}
                name="planType"
                className="w-full"
              >
                {planTypeOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Plan Details:</label>
              <TextField
                type="text"
                name="planDetails"
                value={formData.planDetails}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Voice:</label>
              <TextField
                type="text"
                name="voice"
                value={formData.voice}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Total Data:</label>
              <TextField
                type="text"
                name="totalData"
                value={formData.totalData}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">SMS:</label>
              <TextField
                type="text"
                name="sms"
                value={formData.sms}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Plan Category:</label>
              <Select
                value={formData.planCategory}
                onChange={(e) => handleChange(e)}
                name="planCategory"
                className="w-full"
              >
                {planCategoryOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Talk Time:</label>
              <TextField
                type="text"
                name="talkTime"
                value={formData.talkTime}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Data Per Day:</label>
              <TextField
                type="text"
                name="dataPerDay"
                value={formData.dataPerDay}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Plan Price:</label>
              <TextField
                type="number"
                name="planPrice"
                value={formData.planPrice}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Plan Validity (in days):</label>
              <TextField
                type="number"
                name="planValidity"
                value={formData.planValidity}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
          </Grid>
        </Grid>
        <div className="flex items-center justify-center mt-6">
          <Button type="submit" variant="contained" color="primary">
            Add Plan
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddPlans;
