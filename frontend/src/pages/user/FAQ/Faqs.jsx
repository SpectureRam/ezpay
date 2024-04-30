
import {PiQuestionLight} from 'react-icons/pi' 

import React, { useState } from 'react'
import faqs from './FaqData';

function Faqs({faqs}) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleFAQ = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
         <div className="  md:ml-16 md:mr-14 mt-5">
          <div className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer ${isOpen ? 'bg-white' : ''}`}>
            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
             onClick={toggleFAQ}
             >
           
              <span className="flex font-extrabold font-mono text-xl"> <span className='flex mr-3 mt-1'><PiQuestionLight className='bg-sec rounded-full'/></span> {faqs.q}</span>
              <svg className={`w-6 h-6 text-gray-400 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {!isOpen && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className='font-light text-gray-700 tracking-wider'>
                    {faqs.a}
                </p>
              </div>
            )} 
          </div>
        
        </div>
    </div>
  )
}

export default Faqs