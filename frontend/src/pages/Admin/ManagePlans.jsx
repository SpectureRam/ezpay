import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const ManagePlans = () => {
    const [plans, setPlans] = useState([]);
    const [token, setToken] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null); // State for selected plan
    const [editModalVisible, setEditModalVisible] = useState(false); // State for edit modal visibility
    const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete modal visibility
    const [loading, setLoading] = useState(true); // State variable to manage loading state
    const [successMessage, setSuccessMessage] = useState(''); // State variable to manage success message
    const [openSnackbar, setOpenSnackbar] = useState(false); 

    useEffect(() => {
        // Get token from local storage
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }

        // Fetch plans
        const fetchPlans = async () => {
            try {
                const response = await axios.get('http://18.207.243.242:8181/ezpay/api/v1/plans', {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                });
                setPlans(response.data);
            setLoading(false); // Set loading to false in case of error

            } catch (error) {
                console.error('Error fetching plans:', error);
            setLoading(false); // Set loading to false in case of error

            }
        };

        fetchPlans();
    }, []);

    const handleEdit = (plan) => {
        setSelectedPlan(plan); // Set the selected plan
        setEditModalVisible(true); // Show the edit modal
    };

    const handleDelete = async (planId) => {
        try {
            await axios.delete(`http://18.207.243.242:8181/ezpay/api/v1/plans/${planId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Remove the deleted plan from the plans state
            setPlans(plans.filter(plan => plan.planId !== planId));
            setDeleteModalVisible(false); // Hide the delete modal
        } catch (error) {
            console.error('Error deleting plan:', error);
        }
    };

    const handleSaveEdit = async (updatedPlan) => {
        try {
            const response = await axios.put(`http://18.207.243.242:8181/ezpay/api/v1/plans/${updatedPlan.planId}`, updatedPlan, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Update the plans state with the updated plan
            setPlans(plans.map(plan => (plan.planId === updatedPlan.planId ? updatedPlan : plan)));
            setEditModalVisible(false); // Hide the edit modal
        } catch (error) {
            console.error('Error updating plan:', error);
        }
    };

    return (
        <div className="container mx-auto p-4 w-full">
            <div className="w-[98%] overflow-scroll  ">
                <h1 className="text-3xl font-bold mb-4 text-center   text-teal-500">Plan List</h1>
                {loading ? (
                    <div className='flex absolute right-0 left-52 top-52 justify-center items-center '>
                        <CircularProgress className='justify-center items-center' />  
                        </div>
            ):
            (
        <table className="w-full border border-gray-300">
        <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-2 py-1">ID</th>
                <th className="border border-gray-300 px-2 py-1">Operator</th>
                <th className="border border-gray-300 px-2 py-1">Type</th>
                <th className="border border-gray-300 px-2 py-1">Details</th>
                <th className="border border-gray-300 px-2 py-1">Voice</th>
                <th className="border border-gray-300 px-2 py-1">Talk Time</th>
                <th className="border border-gray-300 px-2 py-1">Total Data</th>
                <th className="border border-gray-300 px-2 py-1">Data Per Day</th>
                <th className="border border-gray-300 px-2 py-1">SMS</th>
                <th className="border border-gray-300 px-2 py-1">Price</th>
                <th className="border border-gray-300 px-2 py-1">Validity</th>
                <th className="border border-gray-300 px-2 py-1">Category</th>
                <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
        </thead>
        <tbody>
            {plans.map((plan) => (
                <tr key={plan.planId} className="bg-white">
                    <td className="border border-gray-300 px-2 py-1">{plan.planId}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.operator}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.planType}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.planDetails}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.Voice}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.talkTime}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.TotalData}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.DataPerDay}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.SMS}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.planPrice}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.planValidity}</td>
                    <td className="border border-gray-300 px-2 py-1">{plan.planCategory}</td>
                    <td className="border border-gray-300 px-2 py-1 flex flex-col items-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mb-1"
                        onClick={() => handleEdit(plan)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => setDeleteModalVisible(true)}
                    >
                        Delete
                    </button>
                </td>

                </tr>
            ))}
        </tbody>
    </table>
      )}
               
                {/* Edit modal */}
                {editModalVisible && selectedPlan && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-gray-800 bg-opacity-75">
                        <div className="bg-white p-4 rounded-md mt-2h-[600px] overflow-scroll">
                            <h2 className="text-xl font-bold mb-2 text-sec text-center mb-3 underline-offset-3 underline">Edit Plan</h2>
                            {/* Input fields */}
                            <div className="grid grid-cols-2 gap-4 gap-x-10">
  {/* Add input fields for editing */}
  {/* Input fields */}
  <div className="flex flex-col">
    <label htmlFor="planId" className="mb-1">Plan ID</label>
    <input
      type="text"
      id="planId"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.planId}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, planId: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="operator" className="mb-1">Operator</label>
    <input
      type="text"
      id="operator"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.operator}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, operator: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="planType" className="mb-1">Plan Type</label>
    <input
      type="text"
      id="planType"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.planType}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, planType: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="planDetails" className="mb-1">Plan Details</label>
    <input
      type="text"
      id="planDetails"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.planDetails}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, planDetails: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="voice" className="mb-1">Voice</label>
    <input
      type="text"
      id="voice"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.Voice}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, Voice: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="talkTime" className="mb-1">Talk Time</label>
    <input
      type="text"
      id="talkTime"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.talkTime}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, talkTime: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="totalData" className="mb-1">Total Data</label>
    <input
      type="text"
      id="totalData"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.TotalData}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, TotalData: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="dataPerDay" className="mb-1">Data Per Day</label>
    <input
      type="text"
      id="dataPerDay"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.DataPerDay}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, DataPerDay: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="sms" className="mb-1">SMS</label>
    <input
      type="text"
      id="sms"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.SMS}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, SMS: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="planPrice" className="mb-1">Plan Price</label>
    <input
      type="text"
      id="planPrice"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.planPrice}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, planPrice: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="planValidity" className="mb-1">Plan Validity</label>
    <input
      type="text"
      id="planValidity"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.planValidity}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, planValidity: e.target.value })}
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="planCategory" className="mb-1">Plan Category</label>
    <input
      type="text"
      id="planCategory"
      className="border border-gray-300 px-3 py-1 rounded"
      value={selectedPlan.planCategory}
      onChange={(e) => setSelectedPlan({ ...selectedPlan, planCategory: e.target.value })}
    />
  </div>
</div>

                            <button
                                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4"
                                onClick={() => handleSaveEdit(selectedPlan)}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
                                onClick={() => setEditModalVisible(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                {/* Delete modal */}
                {deleteModalVisible && selectedPlan && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-xl font-bold mb-2">Delete Plan</h2>
                            <p>Are you sure you want to delete this plan?</p>
                            <div className="flex justify-end mt-4">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => {
                                        handleDelete(selectedPlan.planId);
                                        setDeleteModalVisible(false);
                                    }}
                                >
                                    Confirm Delete
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    onClick={() => setDeleteModalVisible(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManagePlans;
