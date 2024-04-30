import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Snackbar } from '@mui/material'; // Import CircularProgress and Snackbar from MUI
import BASE_URL from '../../Config';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State variable to manage loading state
  const [successMessage, setSuccessMessage] = useState(''); // State variable to manage success message
  const [openSnackbar, setOpenSnackbar] = useState(false); // State variable to manage snackbar visibility

  useEffect(() => {
    const fetchUsers = async () => {
      const url = `${BASE_URL}/users`;
      const bearerToken = localStorage.getItem('token');
      const header = { 'Authorization': `Bearer ${bearerToken}` };
      try {
        const response = await axios.get(url, { headers: header });
        setUsers(response.data);
        setLoading(false); // Set loading to false once users are fetched
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchUsers();
  }, []);

  const suspendAccount = async (userId) => {
    try {
      setLoading(true);
      const url = `${BASE_URL}/users/suspend/${userId}`;
      const bearerToken = localStorage.getItem('token');
      const header = { 'Authorization': `Bearer ${bearerToken}` };
      await axios.put(url, null, { headers: header });
      setUsers(users.map(user => user.id === userId ? { ...user, suspended: true } : user));
      setSuccessMessage('User suspended successfully'); // Set success message
      setOpenSnackbar(true); // Open snackbar
    } catch (error) {
      console.error('Error suspending account:', error);
    }
    setLoading(false);
  };
  
  const ActivateAccount = async (userId) => {
    try {
      setLoading(true)
      const url = `${BASE_URL}/users/activate/${userId}`;
      const bearerToken = localStorage.getItem('token');
      const header = { 'Authorization': `Bearer ${bearerToken}` };
      await axios.put(url, null, { headers: header });
      setUsers(users.map(user => user.id === userId ? { ...user, suspended: false } : user));
      setSuccessMessage('User activated successfully'); // Set success message
      setOpenSnackbar(true); // Open snackbar
    } catch (error) {
      console.error('Error activating account:', error);
    }
    setLoading(false)
  };


  return (
    <div className='h-full w-full text-center bg-gray-200 px-10'>
    <h2 className="text-3xl font-semibold mb-4 p-3 text-sec">User Management</h2>
    {loading ? (
        <CircularProgress className='w-full h-full flex justify-center items-center' />  
      ) :
      (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><span className='font-bold'>Name</span></TableCell>
            <TableCell><span className='font-bold'>Email</span></TableCell>
            <TableCell><span className='font-bold'>Mobile Number</span></TableCell>
            <TableCell><span className='font-bold'>Role</span></TableCell>
            <TableCell><span className='font-bold'>Status</span></TableCell>
            <TableCell><span className='font-bold'>Actions</span></TableCell> {/* New column for actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.mobileNumber}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                {user.suspended == false ?(
                  <p className='bg-green-400 text-white w-fit px-2 rounded-2xl'>Active</p>
                ) : (
                  <p className='bg-red-400 text-white w-fit px-2 rounded-2xl'>Inactive</p>
                )}
              </TableCell>
              <TableCell>
              {/*  <button className="bg-blue-500 hover:bg-blue-700 rounded-2xl text-white font-bold py-2 px-2  ">
                  View Details
              </button>*/}
                { user.suspended == false ?
               ( <button 
                 onClick={() => suspendAccount(user.id)}
                 className="bg-red-500 hover:bg-red-700 rounded text-white font-bold py-1 px-2  ">
                  Suspend Account
                </button>):
                (
                  <button 
                 onClick={() => ActivateAccount(user.id)}
                 className="bg-green-500 hover:bg-green-700   text-white font-bold py-1 px-2   ml-2">
                  Activate Account
                </button>
                )
                 }
              </TableCell> {/* Action buttons */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
  </div>

);
};

export default UserDetails;