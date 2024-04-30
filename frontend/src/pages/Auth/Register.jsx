import React from 'react'
import logelement from '../../assets/login/element1.png'
import tick from '../../assets/login/tick.png' 
import { useState } from 'react';
import { auth } from '../../Firebase/Firebaseconfig'; 
import {RecaptchaVerifier , signInWithPhoneNumber} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../Config';
import { TbLoader3 } from 'react-icons/tb';
function Register() {

  const navigate  = useNavigate();
  
  const [phone,setPhone] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,SetPassword] = useState('');
  const [password1,SetPassword1] = useState('');
  const [msg,SetMsg] = useState("")
  const [msgclr,SetMsgclr] = useState("")
  const [user ,setUser] = useState(null) 
  // const [loading1 ,SetLoading1] = useState(false)
  const [otp ,SetOtp] = useState('') 
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(password);
      if(/^\d{10}$/.test(phone) && password1===password){
        console.log('Submitted phone number:', phone);
        SetMsgclr("s3")
        try{
          // const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
          // const confirmation = await signInWithPhoneNumber(auth , "+91"+phone , recaptcha)
          // console.log(confirmation);
          const backendResponse =  axios.post(`${BASE_URL}/authentication/register`,
           { 
          username: name,
          password: password,
          "email":email,
          phone: phone
          })
          .then(response => {
            if (response.data.data==="") {
              SetMsgclr('error');
              SetMsg("User already exists. Please login to continue");
              setTimeout(()=>{
                SetMsgclr();
                SetMsg();
                },2000)
            }
            else{
            console.log('Backend response:', response);
            navigate("/EZpay/login")
            }
          })
          .catch(error => {
            console.error('Error:', error); 
           
          });
          setUser(confirmation)
          // SetMsg("OTP Sent Successfully")
          }catch(error){
            console.log("error")
            console.log(error);
          }
      }
      else{  
        SetMsgclr("s5") 
        SetMsg("Invalid Phone Number")
        console.log("Invalid ph");
        setTimeout(()=>{
          SetMsg(""); 
        },2000)
      }
      // setPhone('');
    }

    const verifyOtp = async()=>{
      try{
        const data = await user.confirm(otp)
        SetMsg("OTP Successfully Verified")
        SetMsgclr("s3")
        setTimeout(()=>{
          SetMsg(""); 
          navigate("EZpay/user/home")
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
      
      }
    }

console.log(msgclr)
  return (

    <>
    
     {msg && (
  <div className={`rounded-[20px] fixed top-1 w-1/2 
  left-1/4 flex justify-center items-center bg-${msgclr}`}>
    <p className="text-center text-white">{msg}</p>
  </div>
)}
{/* <div className='flex justify-between'> */}
<img className='absolute   h-screen  inset-1' src={logelement}/>
<img className='absolute h-screen rotate-180 right-0 h-' src={logelement}/>

{/* </div> */}
   <div className='w-screen h-screen flex bg-white p-6 md:p-10 lg:px-44 '>
  
    <div className='hidden md:flex flex-col w-1/2 h-full bg-secondary rounded-l-[50px] shadow-2xl border-black'>
      <h1 className='flex text-s3 text-4xl font-bold ml-20 mt-10'>
        EZpay
      </h1>

      <div className='  md:w-2/3 md:flex-col  ml-20 mt-16 justify-center items-center h-1/2'>
          <span>
            <h3 className='text-s3 font-bold md:text-3xl '>Top up effortlessly with EZpay - your ultimate recharge companion!</h3>
          </span>
          <span>
            <p className='font-thin text-secondary '>
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
        !user ?(
          <div className='md:mt-0 mt-10 md:h-full h-1/2  h  w-full  flex-col  items-center justify-center lg:ml-0 md:ml-10'>
          <p className='font-bold md:text-2xl lg:text-3xl text-2xl mb-5'>Register Now!</p>
          <form onSubmit={handleSubmit} className='md:h-3/4 grid grid-cols-2 justify-evenly gap-y-8'>
              <div className='col-span-2 flex-col'>
              <label className='flex text-teal-700 font-semibold md:text-sm lg:text-base' htmlFor="phone">Enter Email </label>
              <input type="text"
              //  required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Enter Mobile Number'  
            className='outline-none border-l-0 border-r-0 border-t-0 w-4/5 px-5 md:mb-0 mb-10  placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
              </div>
          {/* <p className='md:text-sm lg:text-lg md:mb-0 mb-10'>Top up effortlessly with EZpay - your ultimate recharge companion!</p>
           */}

          <div>
          <label className='text-teal-700 font-semibold md:text-sm lg:text-base' htmlFor="phone">Mobile Number</label>
          <input type="text" required
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          placeholder='Enter Mobile Number' 
           className='outline-none border-l-0 border-r-0 border-t-0 md:mb-0 mb-10  placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>
          <div>
          <label className='text-teal-700 font-semibold md:text-sm lg:text-base' htmlFor="phone">User Name</label>
          <input type="text" required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Enter User Name' 
           className='outline-none border-l-0 border-r-0 border-t-0 md:mb-0 mb-10  placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>
          <div>
          <label className='text-teal-700 font-semibold md:text-sm lg:text-base' htmlFor="phone">Enter Password</label>
          <input type="text" required
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}
          placeholder='Enter Mobile Number'  
          className='outline-none border-l-0 border-r-0 border-t-0 md:mb-0 mb-10  placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>

          <div>
          <label className='text-teal-700 font-semibold md:text-sm lg:text-base' htmlFor="phone">Confirm Password</label>
          <input type="text" required
          value={password1}
          onChange={(e)=>SetPassword1(e.target.value)}
          placeholder='Enter Mobile Number'  
          className='outline-none border-l-0 border-r-0 border-t-0 md:mb-0 mb-10  placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>

        <div className='justify-center items-center flex  col-span-2'>
            <div id='recaptcha'></div>
          <button
          type='submit'
          className='bg-s3 w-36 h-10 rounded-3xl text-center  text-secondary  lg-w-auto' > Verify Mobile 
       
          </button>
          </div>

        </form>
        </div>
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
          className='outline-none flex md:mb-0 mb-10  placeholder-s4 w-2/3 h-10 rounded-md border-2 place-content-center border-gray-300'/>
          </div>

          <button
          type='submit' 
          onClick={verifyOtp}
          className='bg-s3 w-36 h-10 rounded-3xl text-center text-secondary  lg-w-auto' > Verify </button>

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
              <h1 className='font-semibold text-center'> Been here before? Dive back in!<Link to={"/EZpay/login"}><span className='text-teal-400'> Log in now.</span></Link></h1>
            </div>
            </div>

                    
 
    </div>
 

   </div>
   </>
  )
}

export default Register