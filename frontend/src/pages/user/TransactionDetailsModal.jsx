import React from 'react';

function TransactionDetailsModal({ transaction, onClose }) {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);

        const formatedDate = formatDate(transaction.recharge.rechargeDate);
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center bg-black bg-opacity-70 justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">Transaction Details</h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={onClose}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                        </button>
                    </div>
                    <div className="relative p-6">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td>Payment ID:</td>
                                    <td>{transaction.paymentId}</td>
                                </tr>
                                <tr>
                                    <td>Mode of Payment:</td>
                                    <td>{transaction.modeOfPayment}</td>
                                </tr>
                                <tr>
                                    <td>Payment Status:</td>
                                    <td>{transaction.paymentStatus}</td>
                                </tr>
                                <tr>
                                    <td>Total Amount:</td>
                                    <td>₹{transaction.totalAmount}</td>
                                </tr>
                                <tr>
                                    <td>Payment Reference ID:</td>
                                    <td>{transaction.payment_responseId}</td>
                                </tr>
                                <tr>
                                    <td>Mobile Number:</td>
                                    <td>{transaction.recharge.mobileNumber}</td>
                                </tr>
                                <tr>
                                    <td>Operator:</td>
                                    <td>{transaction.recharge.operator}</td>
                                </tr>
                                <tr>
                                    <td>Recharge Amount:</td>
                                    <td>{transaction.recharge.rechargeAmount}</td>
                                </tr>
                                <tr>
                                    <td>Recharge Date:</td>
                                    <td>{formatDate(transaction.recharge.rechargeDate)}</td>
                                </tr>
                                <tr>
                                    <td>Plan Type:</td>
                                    <td>{transaction.recharge.plan.planType}</td>
                                </tr>
                          
                                <tr>
                                    <td>Plan Validity:</td>
                                    <td>{transaction.recharge.plan.planValidity}</td>
                                </tr>
                                <tr>
                                    <td>Plan Category:</td>
                                    <td>{transaction.recharge.plan.planCategory}</td>
                                </tr>
                                <tr>
                                    <td>Total Data:</td>
                                    <td>{transaction.recharge.plan.totalData}</td>
                                </tr>
                                <tr>
                                    <td>SMS:</td>
                                    <td>{transaction.recharge.plan.sms}</td>
                                </tr>
                                <tr>
                                    <td>Voice:</td>
                                    <td>{transaction.recharge.plan.voice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransactionDetailsModal;
