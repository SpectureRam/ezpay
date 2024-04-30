import React, { useEffect, useState } from 'react'
import TransactionDetails from '../../components/TransactionDetails'
import BASE_URL from '../../Config'
import axios from 'axios'
import TransactionDetailsModal from './TransactionDetailsModal'
import loader from '../../assets/Loader/loader.gif'
import { CircularProgress } from '@mui/material'

function TransactionHistory() {
    const[showDetails , setShowDetails] = useState(!false)
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true); // State variable to manage loading state
    const [successMessage, setSuccessMessage] = useState(''); // State variable to manage success message
    const [openSnackbar, setOpenSnackbar] = useState(false); 
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [transactionDetails , setTransactionDetails] = useState([])
    const handleViewDetails = (transaction) => {
        setSelectedTransaction(transaction);
        setShowModal(true);
    };

    const toggleModel=()=>{ 
        setShowDetails(!showDetails)
        console.log(showDetails)
      }

      useEffect(() => {
        const userId = localStorage.getItem('userId');
        const url = `${BASE_URL}/payment/user/${userId}`;
        const bearerToken = localStorage.getItem('token');
        const header = { 'Authorization': `Bearer ${bearerToken}` };
    
        axios.get(url, { headers: header })
          .then((response) => {
            if (response.data.length > 0) {
              setTransactionDetails(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);
    
    console.log(transactionDetails);  
    
 
  return (
    <div className='w-full min-h-screen  h-full mt-20 '>
        <h1 className='text-3xl  text-center  font-bold text-sec py-5'> Transaction History</h1>
        {transactionDetails.length>0 ? 
        (
        <div>
        {!showDetails && <TransactionDetails onClose={toggleModel} />}
        <div className='px-28 space-y-5'>
        <div className='w-full space-y-5 mb-10'>
        {transactionDetails.map((transaction,index)=>(
            <div className= 'p-4 w-full h-full bg-gray-200  rounded-2xl shadow-xl'>
                <div className=' w-full h-full '>
                    <div className='flex justify-between'>
                    <div>
                    {transaction.recharge.addon === null ? (
                        <h1 className='text-gray-600'>Plan</h1>
                        ) : (
                            <h1 className='text-gray-600'>Addon</h1>
                        )}
                        
                        <h1 className='text-2xl font-bold'>₹ {transaction.totalAmount}</h1>
                        <p className='text-gray-600'>Purchased on 27 Mar, 2024 08:09 PM</p>
                    </div>
                    <div className='justify-between'>
                        <h1 className='text-gray-600'>Mobile Number</h1>
                        <span className='flex justify-center items-center space-x-2'>
                        {/* <div className='w-10 h-10 bg-sec rounded-full'></div> */}
                        <h1 className='text-2xl font-bold'>+91 {transaction.recharge.mobileNumber}</h1> 
                        </span>
                    {transaction.recharge.addon == null ? (
                        <h1 className='text-gray-600'>{transaction.recharge.plan.planCategory}</h1>
                        ):(
                            <h1 className='text-gray-600'>{transaction.recharge.addon.addonCategory}</h1>
                        )} 
                        {/* <p className='text-gray-600'>Airtel</p> */}
                    </div>
                    </div>
                    <hr className='p-1 my-3'></hr>

                    <div className='flex justify-between'>
                    <div>
                        <span className='flex '>
                        <h1 className='text-gray-600'>Payment Mode : </h1> 
                        <h1 className='text-black font-bold'> {transaction.modeOfPayment}</h1>
                        </span>
                        <span className='flex '>
                        <p className='text-gray-600'>Ref. Number : </p>
                        <h1 className=' font-bold'>{transaction.payment_responseId}</h1> 
                        </span>
                      
                    </div>
                    <div className='justify-between space-x-8'>
                        <button className='bg-sec text-white px-3 py-2 rounded-3xl'>Download Invoice</button>
                        <button   onClick={() => handleViewDetails(transaction)}  className='bg-sec text-white px-3 py-2 rounded-3xl'>View Details</button>
                    </div>
                    </div>

                </div>

            </div>
            
        ))}

            {/* ///2 */}
            
        </div>
        </div>
        </div>
        ):
        (
        <div className='mt-36 justify-center items-center flex'>
             <CircularProgress className='w-full h-full flex justify-center items-center' />  
        </div>
    )
        }
        
        {showModal && selectedTransaction && (
                <TransactionDetailsModal
                    transaction={selectedTransaction}
                    onClose={() => setShowModal(false)}
                    onRecharge={() => setShowModal(false)}
                />
            )}
    </div>
  )
}

export default TransactionHistory