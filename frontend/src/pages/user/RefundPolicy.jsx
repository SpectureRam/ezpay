const RefundPolicy = () => {
    return (
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 py-32 -mb-32">
        <div className="mb-12 max-w-[750px] sm:mb-16 mx-auto text-center" style={{ maxWidth: '900px' }}>
          <h2 className="mb-3 mt-0 text-2xl font-extrabold leading-tight tracking-[-1.2px] dark:text-black xs:text-3xl sm:text-4xl sm:leading-tight md:text-[45px] md:leading-tight text-dark">
            Refund Policy
          </h2>
          <p className="w-full text-base leading-relaxed text-body-color dark:text-dark-text-2 mx-auto">
            This Refund Policy outlines the terms and conditions for refunds on services provided by EZpay.
          </p>
        </div>
        <div className="rounded-xl bg-white px-6 py-10 pb-5 shadow-features sm:p-[70px] sm:pb-8 md:p-10 md:pb-5 lg:p-[70px] lg:pb-8 dark:bg-dark-2 dark:shadow-features-dark -mt-20">
          <div className="pb-6">
            <h3 className="m-0 mb-5 text-2xl font-semibold tracking-[-1.2px] text-dark sm:text-4xl dark:text-black">
              Eligibility for Refunds
            </h3>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-text">
              To be eligible for a refund, you must meet the following criteria:
              <ul className="list-disc pl-6">
                <li>Request for refund within the specified refund period.</li>
                <li>Provide valid proof of purchase or transaction details.</li>
                <li>The service or product purchased is eligible for a refund as per our terms and conditions.</li>
              </ul>
            </p>
          </div>
          <div className="pb-6">
            <h3 className="m-0 mb-5 text-2xl font-semibold tracking-[-1.2px] text-dark sm:text-4xl dark:text-black">
              Refund Process
            </h3>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-text">
              Once your refund request is received and approved, we will initiate the refund process. The refund will be processed to the original method of payment within a certain number of days, depending on the payment gateway&apos;s policies.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="m-0 mb-5 text-2xl font-semibold tracking-[-1.2px] text-dark sm:text-4xl dark:text-black">
              Exceptions
            </h3>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-text">
              Please note that certain services or products may not be eligible for refunds. These exceptions will be clearly stated in the terms and conditions for each service or product.
            </p>
          </div>
          <div className="pb-6">
            <h3 className="m-0 mb-5 text-2xl font-semibold tracking-[-1.2px] text-dark sm:text-4xl dark:text-black">
              Contact Us
            </h3>
            <p className="text-base leading-relaxed text-body-color dark:text-dark-text">
              If you have any questions about our Refund Policy, please contact us at <b>support@ezpay.com</b>.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default RefundPolicy;
  