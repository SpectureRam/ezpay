import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutPage() {
    const onToken = (token) => {
        console.log(token);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">EZpay Checkout</h1>
                <StripeCheckout
                    token={onToken}
                    name="EZpay"
                    currency="inr"
                    amount={80000}
                    stripeKey="pk_test_51P83s3SIVdxBws7UMAWYCgRLOU3Hd76bEIscKjH37JRXPhVMRZ4wSO9YWXOHaZDurHuIoblhEBMgI35Z8EDQysrh005NWTftkz"
                    className="w-full"
                    stripeOptions={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#32325d',
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default StripeCheckoutPage;
