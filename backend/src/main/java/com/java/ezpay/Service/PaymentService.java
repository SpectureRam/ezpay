package com.java.ezpay.Service;

import java.util.List;

import com.java.ezpay.dto.Request.PaymentRequest;
import com.java.ezpay.model.Payment;

public interface PaymentService {
    Payment makePayment(PaymentRequest paymentRequest); 
    void deletePayment(String paymentId) ;
    public Payment updatePayment(String paymentId, PaymentRequest paymentRequest);
    List<Payment> getAllPaymentsByUserId(String userId);
    public List<Payment> getAllPayments();
    


}
