import React from 'react'

function PlanDetailsModal({plan , onClose , onRecharge}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-70 justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl  mx-auto my-6">
                <div className="relative flex flex-col lg:w-[500px] bg-white border-0  shadow-lg outline-none focus:outline-none  rounded-3xl ">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">Plan Details</h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                        </button>

                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                   
                  
                    <div className="relative p-6 flex-col justify-center items-center ">
                        <div className="flex-col  px-3 pt-2 -mt-3">
                            <button className='bg-sec text-white px-1 rounded-lg'>{plan.planType}</button>
                            <h1 className="text-3xl font-semibold">₹ {plan.planPrice}</h1>
                        </div>
                            <h1 className="px-3 font-semibold">Details</h1>
                        <div className='w-full flex  justify-center items-center px-3 py-3'>
                        <table   table className="table-auto border border-gray-500 w-full px-10">
                            <tbody>
                                <tr className="border border-gray-300">
                                    <td className="border border-gray-300 p-3">Plan Type</td>
                                    <td className="border border-gray-300 p-3">{plan.planType}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border border-gray-300 p-3">Plan Validity</td>
                                    <td className="border border-gray-300 p-3">{plan.planValidity}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border border-gray-300 p-3">Plan Category</td>
                                    <td className="border border-gray-300 p-3">{plan.planCategory}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border border-gray-300 p-3">Total Data</td>
                                    <td className="border border-gray-300 p-3">{plan.totalData}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border border-gray-300 p-3">SMS</td>
                                    <td className="border border-gray-300 p-3">{plan.sms}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="border border-gray-300 p-3">Voice</td>
                                    <td className="border border-gray-300 p-3">{plan.voice}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                      
                        <button
                        onClick={() => onRecharge(plan.planPrice, plan.planId)}
                        className='bg-sec   w-full px-5 py-3 rounded-3xl text-white text-xl text-center hover:bg-teal-700 font-bold'>
                            Recharge
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PlanDetailsModal