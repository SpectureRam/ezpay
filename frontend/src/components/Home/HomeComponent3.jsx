import React from 'react'
import { AiFillThunderbolt  } from "react-icons/ai";
import img1 from '../../assets/Home/lock.png'
import { motion } from 'framer-motion';
import {fadeIn} from '../../Varient'

function HomeComponent3() {
  return (
    <div className='bg-sec  w-screen'>
        <div className='h-full  flex-row md:flex md:h-screen px-10 md:pt-0 pt-10  lg:px-16 justify-center items-center'>
        <motion.div
                variants={fadeIn('right',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:true , amount:0.6}}
                className=' md:h-screen  w-1/2 mt-32'>
                    <img className='md:h-[500px]  md:w-[500px] ' src={img1}/>
                </motion.div>



                <div className=' w-1/2 '>
                    <motion.h1
                    variants={fadeIn('up',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false , amount:0.7}}
                     className='text-2xl lg:text-6xl font-bold text-[#fbb91d]'>
                         Security above everything else 
                    </motion.h1>
                    <motion.div
                    variants={fadeIn('left',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false , amount:0.7}}>
                    <p className='text-lg mt-6 text-white'>All your personal information and transactions are for your eyes only. </p>
                    <p className='text-lg mt-3 text-white'>Our top-notch encryption and tight security ensures it stays that way</p>
                    </motion.div>
                    <div>
                        <ul
                          className=' flex-row md:mt-20 mt-5 md:text-2xl justify-center items-center '>
                            
                            <motion.li
                            variants={fadeIn('left',0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false , amount:0.7}}
                             className='flex  p-2 px-5 w-fit mb-6 bg-teal-100 rounded-2xl'>
                                <span className='flex justify-center items-center'>
                                <AiFillThunderbolt  className='text-green-500 fill-red-500  text-2xl' />
                                <span>Secure Streamlined login</span>
                                </span>
                            </motion.li>
                            <motion.li
                            variants={fadeIn('left',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false , amount:0.7}}
                             className='flex  p-2 px-5 w-fit mb-6 bg-teal-100 rounded-2xl'>
                                <span className='flex justify-center items-center'>
                                <AiFillThunderbolt  className='text-green-500 fill-red-500  text-2xl' />
                                <span>Track all transactions</span>
                                </span>
                            </motion.li>
                            <motion.li
                            variants={fadeIn('left',0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false , amount:0.7}} 
                            className='flex  p-2 px-5 w-fit mb-6 bg-teal-100 rounded-2xl'>

                                <span className='flex justify-center items-center'>
                                <AiFillThunderbolt  className='text-green-500 fill-red-500  text-2xl' />
                                <span>Secure payments made simple</span>
                                </span>
                            </motion.li>
                             
                          
                        </ul>
                    </div>
                </div>

              
        </div>
    </div>
  )
}

export default HomeComponent3