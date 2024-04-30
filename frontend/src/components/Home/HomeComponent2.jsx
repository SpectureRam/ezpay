import React from 'react'
import { AiFillThunderbolt  } from "react-icons/ai";
import img1 from '../../assets/Home/component2.png'
import { motion } from 'framer-motion';
import {fadeIn} from '../../Varient'

function HomeComponent2() {
  return (
    <div className='bg-s4  '>
        <div className='h-full flex-row md:flex md:h-screen px-10 md:pt-0 pt-10  lg:px-28 justify-center items-center'>
                <div className=' w-full '>
                    <h1 className='text-2xl lg:text-6xl font-bold text-sec'>
                        Simplifying the way <br/>you pay
                    </h1>

                    <div>
                        <ul
                          className=' flex-row md:mt-20 mt-5 md:text-2xl justify-center items-center '>
                            
                            <motion.li
                            variants={fadeIn('right',0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false , amount:0.7}}
                             className='flex  p-2 px-5 w-fit mb-6 bg-teal-100 rounded-2xl'>
                                <span className='flex justify-center items-center'>
                                <AiFillThunderbolt  className='text-green-500 fill-red-500  text-2xl' />
                                <span>Get rewarded for every recharge</span>
                                </span>
                            </motion.li>
                            <motion.li
                            variants={fadeIn('right',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false , amount:0.7}}
                             className='flex  p-2 px-5 w-fit mb-6 bg-teal-100 rounded-2xl'>
                                <span className='flex justify-center items-center'>
                                <AiFillThunderbolt  className='text-green-500 fill-red-500  text-2xl' />
                                <span>Top up your phone with ease</span>
                                </span>
                            </motion.li>
                            <motion.li
                            variants={fadeIn('right',0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false , amount:0.7}} 
                            className='flex  p-2 px-5 w-fit mb-6 bg-teal-100 rounded-2xl'>

                                <span className='flex justify-center items-center'>
                                <AiFillThunderbolt  className='text-green-500 fill-red-500  text-2xl' />
                                <span>Simple, secure, and rewarding</span>
                                </span>
                            </motion.li>
                             
                          
                        </ul>
                    </div>
                </div>

                <motion.div
                variants={fadeIn('up',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:true , amount:0.6}}
                className=' md:h-screen    '>
                    <img className='md:h-screen  md:w-[700px]' src={img1}/>
                </motion.div>
        </div>
    </div>
  )
}

export default HomeComponent2