package com.java.ezpay.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;


@Builder
@RequiredArgsConstructor
@Data
@AllArgsConstructor
public class PaymentRequest {
    private String paymentId;
    private String modeOfPayment;
    private String paymentStatus;
    private Long rechargeId;
    private double totalAmount;
    private String payment_responseId;
    private String userId;
} 
