import { lazy } from 'react'; 
import { Navigate, Route, Routes } from 'react-router-dom';
import LazySuspense from './components/LazySuspense';
const LazyLogin = lazy(() => import("./pages/Auth/Login"));
const LazyUserLayout = lazy(() => import("./pages/user/UserLayout"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAdminLayout = lazy(() => import("./pages/Admin/AdminLayout"));
const LazyDashboard = lazy(()=>import("./pages/Admin/Dashboard"))
const LazyRegister = lazy(()=>import("./pages/Auth/Register"))
const LazyPrepaid = lazy(()=>import("./pages/user/Prepaid"))
const LazyPostpaid = lazy(()=>import("./pages/user/Postpaid"))
const LazyPlans = lazy(()=>import("./pages/user/Plans"))
const LazyPostpaidPlans = lazy(()=>import("./pages/user/PostpaidPlans"))
const LazyPayment = lazy(()=>import("./components/Payment/Payment"))
const LazyFaq = lazy(()=>import("./pages/user/FAQ/Faq"))
const LazyAbout = lazy(()=>import("./pages/user/AboutUs"))
const LazyTransactionHistory = lazy(()=>import("./pages/user/TransactionHistory")) 
const LazyUserManagement = lazy(()=>import("./pages/Admin/UserDetails"))
const LazyCustomerRecharges= lazy(()=>import("./pages/Admin/CustomerRecharges"))
const LazyManagePlans= lazy(()=>import("./pages/Admin/ManagePlans"))

const LazyPrivacyPolicy = lazy(()=>import("./pages/user/PrivacyPolicy"))
const LazyTermsAndConditions = lazy(()=>import("./pages/user/TermsAndConditions"))
const LazyRefundPolicy = lazy(()=>import("./pages/user/RefundPolicy"))
const LazyCompanyMission = lazy(()=>import("./pages/user/CompanyMission"))
const LazyStripeCheckout = lazy(()=>import("./pages/user/StripeCheckoutPage"))
const LazyAddPlans = lazy(()=>import("./pages/Admin/AddPlans"))
const LazyContactUs= lazy(()=>import("./pages/user/ContactUs"))
const LazyPaymentSuccess= lazy(()=>import("./pages/user/PaymentSuccess"))
// const LazyPaymen= lazy(()=>import("./pages/user/PaymentSuccess"))

import './App.css'
import ScrollToTop from './ScrollToTop';
import RazorpayComponent from './components/Payment/Payment';
import ReactChatBot from './components/ReactChatBot';
const UserRoutes =()=> (
  <LazyUserLayout>
    <Routes>
      {/* <Route path='/home' element={<LazySuspense component={LazyHome}/>}/> */}
      <Route path='/home' element={<LazySuspense component={LazyHome}/>}/>
      <Route path='/prepaid' element={<LazySuspense component={LazyPrepaid}/>}/>
      <Route path='/postpaid' element={<LazySuspense component={LazyPostpaid}/>}/>
      <Route path='/prepaid/plans' element={<LazySuspense component={LazyPlans}/>}/>
      <Route path='/postpaid/plans' element={<LazySuspense component={LazyPostpaidPlans}/>}/>
      <Route path='/payment' element={<LazySuspense component={LazyPayment}/>}/>
      <Route path='/faq' element={<LazySuspense component={LazyFaq}/>}/>
      <Route path='/about' element={<LazySuspense component={LazyAbout}/>}/>
      <Route path='/transaction-history' element={<LazySuspense component={LazyTransactionHistory}/>}/> 
      <Route path='/privacy-policy' element={<LazySuspense component={LazyPrivacyPolicy}/>}/> 
      <Route path='/terms-and-conditions' element={<LazySuspense component={LazyTermsAndConditions}/>}/> 
      <Route path='/refund-policy' element={<LazySuspense component={LazyRefundPolicy}/>}/> 
      <Route path='/company-mission' element={<LazySuspense component={LazyCompanyMission}/>}/> 
      <Route path='/stripe-payment' element={<LazySuspense component={LazyStripeCheckout}/>}/> 
      <Route path='/Contact-us' element={<LazySuspense component={LazyContactUs}/>}/> 
      <Route path='
      payment-successfull' element={<LazySuspense component={LazyPaymentSuccess}/>}/> 
    </Routes>
  </LazyUserLayout>
)

const AdminRoutes =()=> (
  <LazyAdminLayout>
    <Routes>
      <Route path='/dashboard' element={<LazySuspense component={LazyDashboard}/>}/>
      <Route path='/user-management' element={<LazySuspense component={LazyUserManagement  }/>}/>
      <Route path='/add-plans' element={<LazySuspense component={LazyAddPlans }/>}/>
      <Route path='/customer-recharges' element={<LazySuspense component={LazyCustomerRecharges }/>}/>
      <Route path='/manage-plans' element={<LazySuspense component={LazyManagePlans }/>}/>
    </Routes>
  </LazyAdminLayout>
)

function App() {
  return ( 
    <>
      <ScrollToTop />
      <ReactChatBot/>
      <Routes>
        <Route path="/" element={<Navigate to="/EZpay/Login" />} />
        <Route path="/EZpay/Login" element={<LazySuspense component ={LazyLogin} />} />
        <Route path="/EZpay/register" element={<LazySuspense component ={LazyRegister} />} />
        <Route path="/EZpay/user/*" element={<LazySuspense component ={UserRoutes} />} />
        <Route path = "/EZpay/admin/*" element={<LazySuspense component ={AdminRoutes} />} /> 
        <Route path = "/EZpay" element={<RazorpayComponent />} /> 
      </Routes>
    </>
  );
}

export default App;
