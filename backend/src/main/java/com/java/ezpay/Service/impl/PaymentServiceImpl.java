package com.java.ezpay.Service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.ezpay.Repository.PaymentRepository;
import com.java.ezpay.Repository.RechargeRepository;
import com.java.ezpay.Repository.UserRepository;
import com.java.ezpay.Service.PaymentService;
import com.java.ezpay.dto.Request.PaymentRequest;
import com.java.ezpay.model.Payment;
import com.java.ezpay.model.Recharge;
import com.java.ezpay.model.User;

import io.swagger.v3.oas.annotations.servers.Server;
import lombok.RequiredArgsConstructor;

@Service
// @RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
 
    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;
    private final RechargeRepository rechargeRepository;

    // Constructor with dependencies injected
    public PaymentServiceImpl(PaymentRepository paymentRepository, UserRepository userRepository, RechargeRepository rechargeRepository) {
        this.paymentRepository = paymentRepository;
        this.userRepository = userRepository;
        this.rechargeRepository = rechargeRepository;
    }

    @Override
    public Payment makePayment(PaymentRequest paymentRequest) {
        // User user = userRepository.findById(paymentRequest.getUserId()).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Recharge recharge = rechargeRepository.findById(paymentRequest.getRechargeId()).orElseThrow(() -> new IllegalArgumentException("Recharge not found"));

        Payment payment = Payment.builder()
                .modeOfPayment(paymentRequest.getModeOfPayment())
                .paymentStatus(paymentRequest.getPaymentStatus())
                .totalAmount(paymentRequest.getTotalAmount())
                .payment_responseId(paymentRequest.getPayment_responseId())
                .userId(paymentRequest.getUserId())
                .recharge(recharge)
                .build();

        return paymentRepository.save(payment);
    }


    @Override
    public void deletePayment(String paymentId) {
        paymentRepository.deleteById(paymentId);
    }

    @Override
    public Payment updatePayment(String paymentId, PaymentRequest paymentRequest) {
        Optional<Payment> optionalPayment = paymentRepository.findById(paymentId);
        if (optionalPayment.isPresent()) {
            Payment payment = optionalPayment.get();
            payment.setModeOfPayment(paymentRequest.getModeOfPayment());
            payment.setPaymentStatus(paymentRequest.getPaymentStatus());
            payment.setTotalAmount(paymentRequest.getTotalAmount());
            return paymentRepository.save(payment);
        } else {
            throw new IllegalArgumentException("Payment not found");
        }
    }

    @Override
    public List<Payment> getAllPaymentsByUserId(String userId) {
        return paymentRepository.findByUserId(userId);
    }
    public List<Payment> getAllPayments() {
        // Implement logic to fetch all payments from your data source
        return paymentRepository.findAll(); // Assuming you're using JPA repositories
    }
    
}
