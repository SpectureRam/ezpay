import React, { useState } from 'react'
import img1 from '../../assets/recharge/1.png'
import { useNavigate } from 'react-router-dom';
function Postpaid() {
    const navigate = useNavigate();
    const [mobileNumber, setMobileNumber] = useState('');
    const [msg1, setMsg1] = useState('')
    const [msg2, setMsg2] = useState('')
    const [msg3, setMsg3] = useState('')
    const [selectedOperator, setSelectedOperator] = useState('none');
    const [selectedCircle, setSelectedCircle] = useState('none');
    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleOperatorChange = (e) => {
        setSelectedOperator(e.target.value);
    };

    const handleCircleChange = (w) => {
        setSelectedCircle(w.target.value);
    };
    const showPlans = () => {
        if(mobileNumber.length!=10){
            setMsg1('Please enter a valid mobile number')
            return;
        }
        else
        setMsg1('')
        if(selectedOperator==='none'){  
            setMsg2('Please select an operator')
        }
        else
        setMsg2('')

        if(selectedCircle==='none'){
            setMsg3('Please select a circle')
        }
        else
        setMsg3('')

        if (mobileNumber.length === 10 && selectedOperator !== 'none' && selectedCircle !== 'none') {
            navigate("plans", {
                state: {
                    mobileNumber: mobileNumber,
                    operator: selectedOperator,
                    circle: selectedCircle
                }
            });
        }

    // navigate("plans")
}
  return (
    <>
    <div className='md:flex flex-row w-  md:h-screen md:p-10 md:px-20 p-5 bg-teal-50'>
        


        <div className='md:h-full h-[550px] md:w-1/2 md:pt-20 md:px-14 p-1 md:py-0 py-10 '> 
        <section className='bg-white h-full w-full rounded-3xl  md:p-10 p-10 shadow-2xl'>
            <h1 className='text-sec font-bold text-2xl'>Recharge / Pay Bills</h1>
            <div className='flex flex-col  justify-around h-full'>
                <div className='flex flex-col'>
                <span className='text-base font-light text-teal-900'>Mobile Number</span>
                <input 
                className='py-2  outline-sec rounded-lg px-5 border-2'
                value={mobileNumber} 
                onChange={handleMobileNumberChange} 
                type="text" placeholder="Enter Mobile Number" />
                {msg1 && <span className='text-red-500 text-sm'>{msg1}</span>}
                </div>
              
               <div className='flex flex-col'>
               <span className='text-base font-light text-teal-900'>Operator</span>
               <select
               value={selectedOperator} 
               onChange={handleOperatorChange}
               name="operator" id="operator" class="bg-transparent border-2 py-2 px-5 rounded-lg">

                <option value="none" disabled selected>Select Operator</option>
                <option value="Airtel">Airtel</option>
                <option value="Jio">Jio</option>
                <option value="Vi">Vi</option>
                <option value="BSNL">BSNL</option>
                <option value="MTNL">MTNL</option> 
            </select>
            {msg2 && <span className='text-red-500 text-sm'>{msg2}</span>}
               </div>

               <div class='flex-col flex'>
    <span class='text-base font-light text-teal-900'>Circle</span>
    <select name="circle" id="circle"
    value={selectedCircle}
    onChange={handleCircleChange}
    class="bg-transparent border-2 py-2 px-5 rounded-lg ">
        <option value="none" disabled selected>Select Circle</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar & Jharkhand">Bihar & Jharkhand</option>
        <option value="Delhi & NCR">Delhi & NCR</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh & Chhattisgarh">Madhya Pradesh & Chhattisgarh</option>
        <option value="Maharashtra & Goa">Maharashtra & Goa</option>
        <option value="Mumbai">Mumbai</option>
        <option value="North East">North East</option>
        <option value="Orissa">Orissa</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Uttar Pradesh (East)">Uttar Pradesh (East)</option>
        <option value="Uttar Pradesh (West) & Uttarakhand">Uttar Pradesh (West) & Uttarakhand</option>
        <option value="West Bengal & Sikkim">West Bengal & Sikkim</option>
    </select>
    {msg3 && <span className='text-red-500 text-sm'>{msg3}</span>}
</div>


                <div>
                    <button
                    onClick={showPlans}
                    className='bg-sec hover:bg-teal-800 text-white rounded-lg w-full p-2'>Recharge Now</button>
                </div>
                 
            </div>

        </section> 

        </div>

        <div className='bg--500 flex flex-col h-screen md:w-1/2 justify-evenly '>
                <div>
                    <h1 className=' md:text-xl text-sec font-bold'>Trusted by Over 1M Customers</h1>
                </div>
                <div>
                    <h1 className='md:text-5xl text-2xl text-teal-900 font-bold -mb-24 -mt-10'>Instant Postpaid Mobile Recharge Solution</h1>
                </div>
                <div>
                    <p className='text-black  md:text-xl'>Simplify your connectivity with our instant postpaid mobile recharge solution. Seamlessly blending convenience with cutting-edge technology, we make managing your postpaid account effortless, so you can stay connected without the hassle.</p>
                </div>
                {/* <div className='h-full md:pt-16'>
                    <img src={img1} alt="img1" />
                </div> */}

        </div>
    </div>
    </>
  )
}

export default Postpaid