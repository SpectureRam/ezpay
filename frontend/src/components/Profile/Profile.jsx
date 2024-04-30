import React, { useState } from 'react'
import { MdOutlineEdit } from "react-icons/md";
import profile from '../../assets/Home/profile.jpg'
import reward from '../../assets/Home/Reward.gif'
import tran from '../../assets/Home/tran.gif'
import cash from '../../assets/Home/cash.gif' 
import { IoMdClose } from "react-icons/io";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import {motion} from 'framer-motion' 
import {fadeIn} from '../../Varient'
import AlertDialogSlide from './Logout';
import { useNavigate } from 'react-router-dom';



const Profile= ({ onClose }) =>{
    const navigate = useNavigate();

    const nav = () => {
        onClose()
        navigate('transaction-history')
    }

    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

    const handleLogoutClick = () => {
      setIsLogoutDialogOpen(true);
    };
  
    const handleCloseLogoutDialog = () => {
      setIsLogoutDialogOpen(false);
    };
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <motion.div 
    variants={fadeIn('down' , 0.7)} 
    initial='hidden' 
    whileInView={'show'}
    viewport={{once:false , amount : 0.7 }}
    transition={{duration:0.1}} 
    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center ">
    <div className="bg-white p-3  px-10 rounded-3xl shadow-md w-[850px] h-2/3">
      <div className='flex w-full h-full'>
        <div className='w-[22%] h-full  bg-white flex flex-col justify-between border-r-2 border-sec'>
                    <section className='h-2/12 flex-row justify-between'>
                    <div className='w-24 h-24 bg-black rounded-full mb-8 border-sec border-4'>
                        <img className='rounded-full' src={ profile} alt='profile'/>
                    </div>
                    <div className='mr-7 text-center space-y-3'>
                        <h1 className='py-1 bg-s4 rounded-md hover:bg-sec'>User Profile</h1>
                        <h1 onClick={()=>{nav()}} className='py-1 bg-s4 rounded-md hover:bg-sec'>My Transactions</h1>
                        <h1 className='py-1 bg-s4 rounded-md hover:bg-sec'>Saved Card</h1>
                        <h1></h1>
                        <h1></h1>
                    </div>
                    </section>
                    <section>
                    <div>
                        {/* <h1>Log out</h1> */}
                        <AlertDialogSlide open={isLogoutDialogOpen} handleClose={handleCloseLogoutDialog} />
                    </div>
                    </section>
        </div>
        <div className='w-4/5 h-full p-5 '>

            <div>
            <span className='flex justify-between'>
            <h1 className='font-bold text-2xl underline underline-offset-4 text-sec'>USER PROFILE</h1>
            <IoMdClose onClick={onClose}  className='h-8 w-8  hover:text-sec' />
            </span>
            <div className='grid grid-cols-2 mt-10 h-1/2 place-items-center'>
                <div className=''>
                    <div className=''>
                        <span className='flex-col'>
                        <h1 className='text-sm'>Username</h1>
                        <input type='text' 
                        value="Aswanth"
                        className='md:w-52 p-1 border-2 rounded-lg outline-sec text-teal-900 font-light'/>
                        </span>
                        <span className='flex-row mt-24'>
                        <h1 className='mt-8 text-sm'>Email</h1>
                        <input type='text' 
                        value="aswanth@gmail.com"
                        className='md:w-52 p-1 border-2 rounded-lg outline-sec text-teal-900 font-light'/>
                        </span>
                      
                         
                    </div>
                </div>
                <div className=''>
                        <div className=''>
                        <h1 className='text-sm'>Mobile Number </h1>
                        <input type='text' 
                        value="+91 9080583122"
                        className='md:w-52 p-1 border-2 rounded-lg outline-sec text-teal-900 font-light'/>
                        </div>
                        <div className='mt-8'>
                            <span className='flex items-center gap-3'>
                            <h1 className='text-sm'>Password </h1>
                            {showPassword ? <FaEyeSlash onClick={togglePasswordVisibility} /> : <FaEye onClick={togglePasswordVisibility} />}
                            </span>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                value="123456789"
                                className='md:w-52 p-1 border-2 rounded-lg outline-sec text-teal-900 font-light'
                            />
                            </div>

                       {/* <div className='mt-9'>
                    <button class="bg-sec flex justify-center items-center  hover:bg-sec text-white font-bold py-1 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                    <MdOutlineEdit className='mr-1' />Edit
                    </button>
                       </div> */}
                       </div>
            </div>
        </div>

            <div className='flex justify-evenly'>
                <div className='text-center p-5 mt-8'>
                    <img className='ml-2' width={100} src={tran} alt='reward'/>
                    <h1 className='-mt-5 text-sm font-bold'>Transaction Done</h1>
                    <h1 className='text-sec text-xl'>120</h1>
                </div>
                <div className='text-center p-5 mt-8'>
                    <img className='ml-2' width={100} src={cash} alt='reward'/>
                    <h1 className='-mt-5 text-sm font-bold'><span className='text-sec'>EZ</span> cash Earned</h1>
                    <h1 className='text-sec text-xl'>₹ 12.0</h1>
                </div>
            </div>

        </div>
      </div>
      
      {/* <button onClick={onClose}>Close</button> */}
    </div>
  </motion.div>
  )
}

export default Profile