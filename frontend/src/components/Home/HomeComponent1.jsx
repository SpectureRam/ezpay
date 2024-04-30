import React from 'react'
import { TypeAnimation} from 'react-type-animation' 
import {motion} from 'framer-motion'
import logo from '../../assets/login/logo1.png'
import {fadeIn} from '../../Varient'
function HomeComponent1() {
  return (
    <div>
        
       <div className='bg-sec md:h-screen h-full  flex flex-col items-center justify-evenly '>
    <div className='mt-28'>
      <motion.div 
      variants={fadeIn('down',0.2)} initial='hidden'
      whileInView={'show'} viewport={{once:true , amount : 0.7 }}
         
      className=''>
        <img src={logo}></img>
        </motion.div>

        <motion.div 
         variants={fadeIn('down' , 0.4)} 
         initial='hidden' 
         whileInView={'show'}
         viewport={{once:false , amount : 0.7 }}

         className=' text-[36px] lg:text-[40px] font-secondary
        font-semibold uppercase text-white justify-center items-center flex '>
          <TypeAnimation sequence={['Simple' ,1000,
          'Secure' ,1000 ,
          'Quick',1000,
          'Eazy',1000,
          // <TypeAnimation sequence={['Pay' ,2000,
          // 'Recharge' ,1000 ,
          Infinity]}
          speed={50}
          className='text-accent '
          wrapper='span'
          repeat={Infinity}
          />
          {/* <span className='text-black mr-4 '>Easy</span> */}
        </motion.div>
        </div>

    <motion.div
   
    variants={fadeIn('down' , 0.6)} 
    initial='hidden' 
    whileInView={'show'}
    viewport={{once:false , amount : 0.7 }} 
    
    className='md:flex justify-around w-full px-32 md:mt-0 mt-10 md:mb-0 mb-10'>
        <div className='flex-col justify-center items-center'>
          <h2 className='text-[45px] font-bold text-[#fbb91d]'>10M+</h2>
          <p className='text-white  text-xl'>Users</p>
          </div>

          <div class=" md:rotate-0 rotate-90 mx-20 w-[4px] h-24 rounded-full  bg-gradient-to-br from-transparent via-gray-200 to-transparen"></div>

          <div className='flex-col justify-center items-center'>
          <h2 className='flex justify-center items-center text-[45px] font-bold text-[#fbb91d]'>4.1<span><img width={20} src='https://www.mobikwik.com/assets/images/revampMBK/root_page/rating_star.png'/></span></h2>
          <p className='text-white  text-xl'>Playstore</p>
          </div>
        
          <div class="md:rotate-0 rotate-90 mx-20 w-[4px] h-24 rounded-full  bg-gradient-to-br from-transparent via-gray-200 to-transparen"></div>
  
          <div className='flex-col justify-center items-center'>
          <h2 className='text-[45px] font-bold text-[#fbb91d]'>4k+</h2>
          <p className='text-white  text-xl'>Partners</p>
          </div>
        
    </motion.div>
    </div>
    </div>
  )
}

export default HomeComponent1