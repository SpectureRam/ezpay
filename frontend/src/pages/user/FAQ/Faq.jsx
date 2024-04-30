import React, { useState } from 'react'
import Faqs from './Faqs'; 
import faqs from './FaqData';

function Faq() {

  

    return (
    <div className='mt-20 mb-20 md:p-10 p-3'>
        <section>
            <div>
                <h1 className='pt-4 md:pl-16 pl-4 text-black  font-bold md:text-4xl text-xl'>
                    Frequently Asked Questions
                </h1>
                <p>

                </p>
            </div>

            {faqs.map((faqs)=>(
                <Faqs key={faqs.id} faqs={faqs}/>
            ))}
        </section>
    </div>
  )
}

export default Faq