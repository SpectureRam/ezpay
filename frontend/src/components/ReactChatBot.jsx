import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

function ReactChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: "Greet",
      message: "Hello! Welcome to EZpay. How can I assist you today?",
      trigger: "IssueSelection",
    },
    {
      id: "IssueSelection",
      options: [
        {
          value: "Recharge",
          label: "Recharge my mobile",
          trigger: "RechargeProcess",
        },
        {
          value: "Payment",
          label: "Issues with payment",
          trigger: "PaymentIssues",
        },
        {
          value: "Plans",
          label: "Questions about recharge plans",
          trigger: "PlanDetails",
        },
        {
          value: "Account",
          label: "Account-related queries",
          trigger: "AccountHelp",
        },
      ],
    },
    {
      id: "RechargeProcess",
      component: (
        <div>
          <p>
            Please go to the respective page below to address the issue:{" "}
            <a href="http://18.207.243.242:5174/EZpay/user/prepaid" target="_blank" rel="noopener noreferrer">
              <b>EZpay Prepaid Page</b>
            </a>
          </p>
        </div>
      ),
      end:true
    },
    {
      id: "MobileNumberInput",
      user: true,
      trigger: "RechargeConfirmation",
    },
    {
      id: "RechargeConfirmation",
      message: "Confirm recharge of {previousValue}.",
      trigger: "RechargeCompleted",
    },
    {
      id: "RechargeCompleted",
      message: "Your recharge has been processed successfully.",
      end: true,
    },
    {
      id: "PaymentIssues",
      message: "What specific issue are you facing with payment?",
      trigger: "PaymentOptions",
    },
    {
      id: "PaymentOptions",
      options: [
        {
          value: "TransactionFailed",
          label: "My transaction failed",
          trigger: "TransactionFailedSolution",
        },
        {
          value: "PaymentMethod",
          label: "Change payment method",
          trigger: "PaymentMethodChange",
        },
      ],
    },
    {
      id: "TransactionFailedSolution",
      message: "We apologize for the inconvenience. Please try again later or contact support.",
      end: true,
    },
    {
      id: "PaymentMethodChange",
      message: "You can change your payment method in your account settings.",
      end: true,
    },
    {
      id: "PlanDetails",
      message: "Which plan details do you need?",
      trigger: "PlanOptions",
    },
    {
      id: "PlanOptions",
      options: [
        {
          value: "PrepaidPlans",
          label: "Prepaid plans",
          trigger: "PrepaidPlanDetails",
        },
        {
          value: "PostpaidPlans",
          label: "Postpaid plans",
          trigger: "PostpaidPlanDetails",
        },
      ],
    },
    {
      id: "PrepaidPlanDetails",
      message: "Here are the details of our prepaid plans...",
      end: true,
    },
    {
      id: "PostpaidPlanDetails",
      message: "Here are the details of our postpaid plans...",
      end: true,
    },
    {
      id: "AccountHelp",
      message: "What assistance do you need with your account?",
      trigger: "AccountOptions",
    },
    {
      id: "AccountOptions",
      options: [
        {
          value: "LoginIssue",
          label: "Login issues",
          trigger: "LoginIssueSolution",
        },
        {
          value: "ProfileUpdate",
          label: "Update profile information",
          trigger: "ProfileUpdateSteps",
        },
      ],
    },
    {
      id: "LoginIssueSolution",
      message: "You can reset your password or contact support for further assistance.",
      end: true,
    },
    {
      id: "ProfileUpdateSteps",
      message: "You can update your profile information in your account settings.",
      end: true,
    },
  ];  

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-80 bg-white rounded shadow-lg">
          <div className="flex justify-end p-2">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-9.293a1 1 0 011.414 1.414L11.414 10l1.707 1.707a1 1 0 01-1.414 1.414L10 11.414l-1.707 1.707a1 1 0 01-1.414-1.414L8.586 10 6.879 8.293a1 1 0 011.414-1.414L10 8.586l1.707-1.707a1 1 0 111.414 1.414L11.414 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ChatBot steps={steps} />
        </div>
      )}

      {
        isOpen ?( <button
          className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-xl "
          onClick={toggleChatbot}
        >
         <span>Close</span> 
        </button>):(
           <button
           className="bg-black hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-tr-full rounded-bl-full rounded-tl-full shadow-xl "
           onClick={toggleChatbot}
         >
          <span>Chat with us</span> 
         </button>
        )
      }
     
    </div>
  );
}

export default ReactChatBot;
