import React from 'react' 
import tick from '../../assets/login/tick.png'
import logelement from '../../assets/login/element1.png'
import otploading from '../../assets/login/OTPloading.gif'
import { useState } from 'react';
import { auth } from '../../Firebase/Firebaseconfig'; 
import {RecaptchaVerifier , signInWithPhoneNumber} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { TbLoader3 } from "react-icons/tb";

import logo from  '../../assets/login/logo2.png'
import { animate } from 'framer-motion';
// import { useDispatch } from 'react-redux';
// import { setAuth ,setUser,setRole,setToken } from '../../redux/UserSlice';
// import UserSlice from '../../redux/UserSlice';

function ForgetPassword() {

  const navigate  = useNavigate();
  const [loading1 ,SetLoading1] = useState(false)
  // const dispatch = useDispatch()
  // const SaveDetails = (auth,user,token,role)=>{
  //   dispatch(setAuth(auth))
  //   dispatch(setUser(user))
  //   dispatch(setRole(role))
  //   dispatch(setToken(token))
  // }
  
  const [phone,setPhone] = useState('');
  const [msg,SetMsg] = useState("")
  const [msgclr,SetMsgclr] = useState("")
  const [user ,setUser] = useState(null) 
  const [otp ,SetOtp] = useState('') 
  const[loading ,SetLoading] = useState(false)
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
      if(/^\d{10}$/.test(phone)){
        console.log('Submitted phone number:', phone);
        SetMsgclr("s3")
        try{
          const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
          const confirmation = await signInWithPhoneNumber(auth , "+91"+phone,recaptcha )
          if(confirmation!=''){
            SetLoading(true)
            setTimeout(()=>{
              SetLoading(false); 
            },2000)
            setUser(confirmation)
          }
          console.log(confirmation);
          // SetMsg("OTP Sent Successfully")
          }catch(error){
            console.log("error")
            console.log(error);
          }
      }
      else{ 
        console.log(msgclr)
        SetMsgclr("bg-red-500")
        console.log(msgclr)
        SetMsg("Invalid Phone Number")
        console.log("Invalid ph");
        setTimeout(()=>{
          SetMsg(""); 
        },2000)
      }
      // setPhone('');
      SetLoading(false)
    }
    // const data=undefined
    // console.log(data.res);

    const verifyOtp = async()=>{
      SetLoading1(!loading1)
      try{
        const data = await user.confirm(otp)
        SetMsg("OTP Successfully Verified")
        SetMsgclr("bg-sec")
        // SaveDetails(true , phone,'1212','user')
        
        setTimeout(()=>{
          SetMsg(""); 
          navigate("/EZpay/user/home")
        },2000)
      
        console.log(data);
      }
      catch(error){
        console.log(error)
        SetMsg("Invalid OTP")
        SetMsgclr("s5")
        setTimeout(()=>{
          SetMsg(""); 
        },2000)
        
        SetLoading1(false)
      }
      SetLoading1(false)
      // SetLoading1(!loading1)
    }

console.log(msgclr)
  return (

    <>
    
     {msg && (
  <div className={`rounded-[20px] fixed top-1 w-1/2 left-1/4 flex justify-center items-center ${msgclr}`}>
    <p className="text-center text-white">{msg}</p>
  </div>
)}
<img className='absolute   h-screen  ' src={logelement}/>
<img className='absolute   h-screen right-0 rotate-180' src={logelement}/>


   <div className='w-screen h-screen flex bg-white p-6 md:p-10 lg:px-44 '>
  
    <div className='hidden md:flex flex-col w-1/2 h-full bg-secondary rounded-l-[50px] shadow-2xl border-black'>
      {/* <h1 className='flex text-s3 text-4xl font-bold ml-20 mt-10'>
        EZpay
      </h1> */}
        <img src={logo} alt='logo' className='w-28 flex text-sec  text-4xl font-bold ml-20 mt-10'/>


      <div className='  md:w-2/3 md:flex-col  ml-20 mt-16 justify-center items-center h-1/2'>
          <span>
            <h3 className='text-s3 font-bold md:text-3xl'>One stop. Easy login. Effortless payments.</h3>
          </span>
          <span>
            <p className='font-thin text-s4 '>
            Make payments, send & receive money
instantly & all with a tap!
            </p>
          </span>

          <ul className='p-10 justify-between text-s3'>
          <li className='p-2 flex'><img className='mr-2' src={tick} alt="" height={2} width={25} />  Scan any QR</li>
          <li className='p-2 flex'><img className='mr-2'  src={tick} alt="" h-10 width={25} /> Send/Receive from any app</li>
          <li className='p-2 flex '><img className='mr-2' src={tick} alt="" h-10 width={25} /> Pay any phone number</li> 

          </ul>
      </div>
    </div>

    {/* ///right */}
    
    <div className='md:flex md:flex-col md:w-1/2 md:h-full bg-white md:rounded-r-[50px] md:rounded-none 
     sm:rounded-2xl w-full shadow-2xl md:p-[10px] lg:p-[50px] pb-[30px] justify-between  rounded-3xl' >
      
           <h1 className='md:hidden mt-10 block text-3xl font-bold text-teal-400 text-center'>EZpay</h1>
      {
        !user ?(loading ?(

          <>
          <div className='h-full flex justify-center items-center'>
            <img src={otploading} alt="" />
          </div>
          </>
        ):(
          <div className='md:mt-0 mt-10 md:h-full h-1/2  h  w-full  flex  items-center justify-center lg:ml-0 md:ml-10'>
          <form onSubmit={handleSubmit} className='md:h-3/4  flex flex-col  justify-between   '>
          <p className='font-bold md:text-2xl lg:text-3xl text-2xl '>Welcome Back!</p>
          <p className='md:text-sm lg:text-lg md:mb-0 mb-10'>Please login to access your account </p>
          

          <div>
          <label className='text-teal-700 font-semibold md:text-sm lg:text-lg'  htmlFor="phone">Enter Mobile Number</label>
          <input type="text"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          placeholder='Enter Mobile Number'  
          className='px-2 outline-none border-l-0 border-r-0 border-t-0 md:mb-0 mb-10 mt-3 
           placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>


          <div id="recaptcha"></div>
          <button
          type='submit'
          className='bg-s3 w-36 h-10 rounded-3xl text-center text-secondary  lg-w-auto' > Login </button>

        </form>
        </div>)
        ):
        (
          <div className='md:mt-0 mt-10 md:h-full h-1/2  h  w-full  flex  items-center justify-center lg:ml-0 md:ml-10'>
          <section  className='md:h-3/4  flex flex-col  justify-between   '>
          <p className='font-bold md:text-2xl lg:text-3xl text-2xl '>Verify Your OTP!</p>
          <p className='md:text-sm lg:text-md md:mb-0 mb-10'>OTP is sent successfully to your primary number ending in *******{phone.slice(6,9)} </p>
          

          <div>
          <label className='text-teal-700 font-semibold md:text-sm lg:text-lg' htmlFor="phone">Enter OTP</label>
          <input type="text"
          value={otp}
          onChange={(e)=>SetOtp(e.target.value)}
          placeholder='Enter Your OTP'  
          className=' outline-none flex md:mb-0 mb-10  placeholder-s4 w-1/3 px-3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>

          <button
          type='submit' 
          onClick={verifyOtp}
          className='bg-s3 w-36 h-10 rounded-3xl text-center text-secondary  lg-w-auto' > 
          {!loading1?'verify':<TbLoader3 className =' text-white text-4xl text-center w-full animate-spin' />} </button>

        </section>
        </div>
        )
      }
      
{/* //otp */}


          <div className='flex flex-col mt-0  md:mt-0'>
          <div className='md:h-3 h-28'></div>
          {/* //line */}
          <div className='h-[1px]  md:my-5 bg-gray-400 flex justify-center items-center  mx-10'></div>

            <div className=''>
              <h1 className='font-semibold text-center lg:text-sm md:text-sm'> Start your EZpay journey!  <Link to={"/EZpay/register"}><span className='text-teal-400'>Register Now</span></Link></h1>
            </div>
            </div>

                    
 
    </div>
 

   </div>
   </>
  )
}

export default ForgetPassword