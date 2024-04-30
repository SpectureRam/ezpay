import React, { useEffect, useState } from 'react';
import { IoPhonePortrait } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/login/logo2.png';
import useRazorpay from "react-razorpay";
import PaymentForm from '../../components/Payment/Payment';
import BASE_URL from '../../Config';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Prepaid from './Prepaid';
import PlanDetailsModal from './PlanDetailsModal';
import { CircularProgress } from '@mui/material';

function Plans() {
    const location = useLocation();
    const {mobileNumber, operator, circle} = location.state;
    console.log(mobileNumber, operator, circle);
    const nav = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('');
    const[selectedPlan , setSelectedPlan] = useState(''); 
    const [showModal, setShowModal] = useState(false);
    const [order, setOrder] = useState();
    const [Razorpay] = useRazorpay();
    const [planDetails , setPlanDetails] = useState([]);
    const [plans , setPlans] = useState([]);
    const [filter , setFilter] = useState(false);
    const [loading, setLoading] = useState(true); // State variable to manage loading state
    const [successMessage, setSuccessMessage] = useState(''); // State variable to manage success message
    const [openSnackbar, setOpenSnackbar] = useState(false); 

    const handleViewPlanDetails = (plan)=>{
        setSelectedPlan(plan);
        setShowModal(true);
    }

    
    const backendUrl = `${BASE_URL}/plans`; 
    const bearerToken = localStorage.getItem('token'); 
    const headers = {
    'Authorization': `Bearer ${bearerToken}`
    };
    useEffect(() => {
        
        const backendUrl = `${BASE_URL}/plans`;
        const bearerToken = localStorage.getItem('token');
        const headers = {
            'Authorization': `Bearer ${bearerToken}`
        };
        axios.get(backendUrl, { headers })
            .then(response => {
                console.log('Plans fetched successfully:');
                setPlans(response.data);
                console.log(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching plans:', error.message);
                setLoading(false)
            });
        }, []);
         

        // planDetails.forEach(plan => {
        //     // Assuming each plan is an object with properties like amount, validity, data, etc.
        //     // Access the properties of the plan object as needed
        //     console.log(plan);
        //     console.log(plan.validity);
        //     console.log(plan.data);
        // });

    
    const handleRecharge = (amount , planId) => {
            
    const backendUrl = "http://18.207.243.242:8181/ezpay/api/v1/recharge";
    const bearerToken = localStorage.getItem('token'); 
    const headers = {
    'Authorization': `Bearer ${bearerToken}`
    };
    axios.post(backendUrl,
        {
            "mobileNumber": mobileNumber,
            "operator": operator,
            "rechargeAmount": amount,
            "rechargeDate": new Date(),
            "plan": {
              "planId": planId,
              
            }
          },
          { headers }
)
    .then(response => {
        handlePayment(amount , response.data.rechargeId)
       
    })
    .catch(error => {
        console.error('Error fetching plans:', error.message);
    });

    };

    const handlePayment = (amount , rechargeId) => {    
        var name = localStorage.getItem('username');
        var email = localStorage.getItem('email');
        var phone = localStorage.getItem('mobileNumber');
        console.log(name,email,phone)
        const options = {
            key: "rzp_test_7CP7Bn1wx5RNKG",
            amount: amount * 100,
            currency: "INR",
            name: "EZ pay",
            description: "Test Transaction",
            image: './weblogo.png', 
            handler: (res) => {
                console.log(res);
                handlePaymentSuccess(res,amount,rechargeId);
            },
            prefill: {
                name: name,
                email: email,
                contact: phone,
            },
            notes: {     
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#008080",
            },
        };
        const rzpay = new Razorpay(options);
        rzpay.open();
    }


    const  handlePaymentSuccess = (res ,amount , rechargeId) => {
        // console.log(res);
        var pay_id = res.razorpay_payment_id;
        var userId = localStorage.getItem('userId');
        console.log(rechargeId , amount, pay_id , userId)
        const backendUrl = "http://18.207.243.242:8181/ezpay/api/v1/payment/make-payment";
        const bearerToken = localStorage.getItem('token'); 
        const headers = {
        'Authorization': `Bearer ${bearerToken}`
        };
        axios.post(backendUrl,
        {
            "paymentId":"1",
            "modeOfPayment": "Online",
            "paymentStatus": "Success",
            "rechargeId": rechargeId,
            "totalAmount": amount,
            "payment_responseId":pay_id,
            "userId": userId,

        }, 
        {headers}
    )
    .then(response => {
        nav("/EZpay/user/payment-successfull")
    }) 

    }

    const planCategories = [
        { label: 'Popular Plans', value: 'popular_plans' },
        { label: 'Entertainment Plans', value: 'Entertainment Plans' },
        { label: 'Data Booster', value: 'data_booster' },
        { label: 'Annual Plans', value: 'annual_plans' },
        { label: 'Data Packs', value: 'data_packs' },
        { label: 'No Daily Limit', value: 'no_daily_limit' },
        { label: 'International Roaming', value: 'international_roaming' },
        { label: '5G Upgrade', value: '5g_upgrade' },
        { label: 'ISD', value: 'isd' }
    ];

    const plans1 = [
        {
            category: 'popular_plans',
            amount: '₹ 479',
            validity: '54 days',
            data: '2.5 GB/Day',
        },
        {
            category: 'popular_plans',
            amount: '₹ 599',
            validity: '84 days',
            data: '3 GB/Day',
        },
        {
            category: 'popular_plans',
            amount: '₹ 799',
            validity: '56 days',
            data: '2 GB/Day',
        },
        {
            category: 'popular_plans',
            amount: '₹ 999',
            validity: '70 days',
            data: '5 GB/Day',
        },
        {
            category: 'popular_plans',
            amount: '₹ 1499',
            validity: '365 days',
            data: '1.5 GB/Day',
        },
        {
            category: 'Entertainment Plans',
            amount: '₹ 1499',
            validity: '365 days',
            data: '1.5 GB/Day',
        },
        {
            category: 'Entertainment Plans',
            amount: '₹ 1499',
            validity: '365 days',
            data: '1.5 GB/Day',
        },
        {
            category: 'Entertainment Plans',
            amount: '₹ 1499',
            validity: '365 days',
            data: '1.5 GB/Day',
        },
        {
            category: 'Entertainment Plans',
            amount: '₹ 1499',
            validity: '365 days',
            data: '1.5 GB/Day',
        },
    ];

    const filteredPlans = selectedCategory ? plans.filter(plan => plan.planType.toLowerCase() === selectedCategory.toLowerCase() && plan.planCategory=== "prepaid" && plan.operator.toLowerCase()===operator.toLowerCase()) : plans.filter(plan=> plan.planCategory === "prepaid" && plan.operator.toLowerCase()===operator.toLowerCase());
    const clearFilter = () => {
        setSelectedCategory('');
    }

    return (
        <div className='md:mt-36 md:px-20 h-full w mt-20'>
            <div className='bg-teal-50 w-[350px] h-[80px] rounded-lg px-4 md:grid md:grid-cols-5 justify-between items-center hidden'>
                <div className='col-span-1'>
                    <IoPhonePortrait className='text-4xl' />
                </div>
                <div className=' col-span-3 '>
                    <div className='flex md:flex-col'>
                        <h1>Recharging For</h1>
                        <h1 className='text-black font-bold text-2xl'>{mobileNumber}</h1>
                    </div>
                </div>
                <div className='col-span-1'>
                    <h1 className='font-bold text-sec'><Link to={"/EZpay/user/prepaid"}>Change</Link></h1>
                </div>
            </div>
            {/* mobile */}
            <div className='w-full h-[50px] bg-teal-50 flex  justify-center items-center md:hidden'>
                <h1><span>Recharging For  </span><span className='text-xl font-bold'> {mobileNumber} </span> <span className='text-sec font-bold text-xl'> Change </span></h1>
            </div>
            {/* mobile */}
            <div className='md:flex flex-row w-  pt-5'>
                <div className='md:w-3/12 bg- h-screen'>
                    <h1 className='py-5 font-semibold' >Plan category <span className='text-xs text-blue-700 font-normal cursor-pointer ml-3' 
                    onClick={()=>{clearFilter()}}>clear filters </span></h1>
                    <div className='flex md:flex-col'>
                        {planCategories.map((category, index) => (
                              <button key={index} onClick={() => {setSelectedCategory(category.label)}} 
                              className={`text-sm md:text-base flex p-1 px-2
                                  bg-gray-200 hover:bg-sec hover:text-white text-black w-full md:w-4/6 border-1 border-2 border-white border-b-2 md:py-3 md:pl-4 ${selectedCategory === category.label && 'bg-sec text-white'}`}>
                                  {selectedCategory === category.label && <span className="font-bold">{category.label}</span>}
                                  {selectedCategory !== category.label && category.label}
                              </button>
                        ))}
                    </div>
                </div>
                <div className='4/6'>
                    <h1 className='text-2xl font-bold pb-3'>Plans</h1>
                    {
                        !
                        loading ?
                        
                        (
                        <div className='grid grid-cols-3 gap-7'>
                        {filteredPlans.map((plan, index) => (
                            <div key={index} className='bg-teal-50 h-[240px] w-[300px] rounded-2xl p-4 flex flex-col justify-between shadow-xl transition-transform transform  hover:scale-[102%] ease-in-out'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='font-bold text-2xl'>₹  {plan.planPrice}</h1>
                                    <p
                                    onClick={() => { handleViewPlanDetails(plan) }}
                                    className='cursor-pointer text-sm text-sec'>View Details</p>
                                </div>
                                <div className='h-[1px] bg-gray-400 '></div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='font-light'>Validity</p>
                                        <h1 className='font-semibold'>{plan.planValidity} days</h1>
                                    </div>
                                    <div>
                                        <p className='font-light'>Data</p>
                                        <h1 className='font-semibold'>{plan.dataPerDay}</h1>
                                    </div>
                                </div>
                                <div className='flex '>
                                    <button onClick={() => { handleRecharge(plan.planPrice , plan.planId) }} className='text-white bg-sec hover:bg-teal-800 w-full rounded-lg p-2'>Recharge</button>
                                </div>
                            </div>
                        ))}
                    </div>
                        )
                        :
                        (
                            <div className='absolute w-screen h-screen top-20  right-32 left-32 justify-center items-center flex'>
                            <CircularProgress className=' ' />  
                       </div>
                        )
                    }

                    
                </div>
            </div>
            {showModal && selectedPlan &&(
                <PlanDetailsModal
                plan={selectedPlan}
                onRecharge={() => {setShowModal(false)
                    handleRecharge(selectedPlan.planPrice, selectedPlan.planId)}}
                onClose={() => setShowModal(false)}/>
            )}
        </div>
    );
}

export default Plans;
