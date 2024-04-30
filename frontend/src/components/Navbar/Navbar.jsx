import React, { useEffect, useState } from 'react';
import logo from '../../assets/login/logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../Profile/Profile';
import { ImDiamonds } from "react-icons/im";
import { BiSolidUpArrow } from "react-icons/bi"; 


function Navbar() {

  // const {isAuth , user} = useSelector(state=>state.auth)
  // console.log(isAuth)
  const navigate = useNavigate();
  // console.log(user)
  const [user ,setUser] = useState("");
  const[showProfile , setShowProfile] = useState(false)
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) { // Add a condition to prevent unnecessary re-renders
      console.log(token);
      setUser(localStorage.getItem('username'));
    } 

  }, [user]); // Add 'user' to the dependency array
  // if(token){
  //   console.log(token)
  //   setUser(true)
    
  // }
  // else{
  //   console.log("login to continue")
  // }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const toggleModel=()=>{
    setShowProfile(!showProfile)
    console.log(showProfile)
    console.log("showProfile")
  }
  const toggleOptions1 = () => {
    setShowOptions1(!showOptions1);
  };

   
    const handleLogout = () => {
      navigate("/");
      localStorage.clear();
    };
    

  return (
    <div className='bg-white fixed top-0 w-full z-50'>  
      <div className='flex bg-white h-[85px]   px-3 py-7  items-center shadow-xl' >
        
        <div className='ml-10 flex w-[10%]'>
        <img className=" h-10" src={logo} alt='logo' />
        </div>

        
        <div className='flex justify-'>
          <ul className='hidden md:flex w-full gap-10 text-black   text-md '>
          <li  className='hover:text-sec transition-transform transform hover:scale-110 p-1'><Link to={"/EZpay/user/home"}>Home</Link>
          </li>
          <li className='hover:text-sec p-1'
          onMouseEnter={toggleOptions1}
          ><Link className='flex items-center space-x-2' to={"/EZpay/user/home"}><span>Services</span><span
           className={`text-[13px] rotate-180 ${showOptions1 ? '' : 'rotate-0'} transition ease-in-out-1s  mt-[2px]`}><BiSolidUpArrow/></span> </Link>
          {showOptions1 && 
          <div 
          // onMouseLeave={toggleOptions1}
          className="absolute -ml-4 bg-white rounded-xl px-2 mt-3 border-gray-3 shadow-xl00 border-[1px]">
          <div className='absolute -top-[10px] left-10'><BiSolidUpArrow className='text-sm text-sec '/></div>
          <div className='p-2 py-4 space-y-2'>
            <div className='flex p-2 bg- -300 w-[220px] space-x-4 justify-start items-center 
            hover:bg-gray-200 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105'>
                <span className='bg-white rounded-md  shadow-lg p-1'> 
                  <img className='' width="20" height="20" src="https://img.icons8.com/ios/50/019d91/flash-on.png" alt="flash-on"/>

                  </span>
                  <h1 className="text-black cursor-pointer hover:text-sec  rounded-md">
                  <Link to={"/EZpay/user/prepaid"}>
                  Prepaid
                  </Link>
                  </h1>
            </div>
           
            <div className='flex p-2 bg- -300 w-[220px] space-x-4 justify-start items-center hover:bg-gray-200 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105'>
                <span className='bg-white rounded-md  shadow-lg p-1'> 
                <img className='' width="20" height="20" src="https://img.icons8.com/ios/50/019d91/flash-on.png" alt="flash-on"/>

                </span>
                <h1 className="cursor-pointer text-black  hover:text-sec  rounded-md">
                <Link to={"/"}>
                Postpaid Recharge
                </Link>
                </h1>
            </div>
           
            <div className='flex p-2 bg- -300 w-[220px] space-x-4 justify-start items-center hover:bg-gray-200 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105'>
                <span className='bg-white rounded-md  shadow-lg p-1'> 
                <img width="20" height="20" src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/019d91/external-bills-business-inkubators-glyph-inkubators.png" alt="external-bills-business-inkubators-glyph-inkubators"/>
                </span>
                <h1 className="cursor-pointer text-black    rounded-md">
                <Link to={"/"}>
                Pay Bills
                </Link>
                </h1>
            </div>
           
          </div>
        </div>}

          </li>
        
          <li className='hover:text-sec transition-transform transform hover:scale-110 p-1'><Link to={"/EZpay/user/prepaid"}>Prepaid</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110 p-1'><Link to={"/EZpay/user/postpaid"}>Postpaid</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110 p-1'><Link to={"/EZpay/user/contact-us"}>HelpLine</Link></li>
          <li className='hover:text-sec transition-transform transform hover:scale-110 p-1'><Link to={"/EZpay/user/about"}>About US</Link></li>
        </ul>
        </div>

        <div className='flex absolute right-0  justify-between items-center'>
          {
            !user?(
<ul className=' flex text-black gap-4 right-0 w-1/6 mr-10'>
          <li className='hover:text-sec hover:text-sectransition-transform transform hover:scale-110'><Link to={"/"}>Login</Link></li>
          <h1>|</h1>
          <li className='hover:text-sec transition-transform transform hover:scale-110'><Link to={"/EZpay/register"} >SignUp</Link></li>
          
        </ul>
            ):(
              <>
                {user&& <p className='text-sm font-light mr-12'>{user}</p>}
              <div className="relative">
      <div
        onClick={toggleModel}
        onMouseEnter={toggleOptions}
        className="transition-transform transform hover:scale-110 hover:text-sec relative w-10 h-10 bg-s2 rounded-full right-10 cursor-pointer"
        >

        </div>
      {showOptions && (
        <div className="absolute right-12 bg-sec px-5 my-3 border-2  text-white rounded shadow-lg  w-[130px] ">
         
          <div className='absolute -top-[10px] -right-[2px]'><ImDiamonds className='text-xl text-sec'/></div>
          <h1 className="cursor-pointer hover:text-white py-2 border-b-2">My Profile</h1>
          <button onClick={()=>handleLogout()} className="cursor-pointer hover:text-white py-2">Logout</button>
        </div>
      )}
    </div>
    </>
            )
          }
        
        </div>
        

        </div>
        {showProfile && < Profile onClose={toggleModel} />}
   
    </div>
  );
}

export default Navbar;
