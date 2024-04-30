package com.java.ezpay.dto.Request;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RechargeRequest {
    private String mobileNumber;
    private String operator;
    private double rechargeAmount;
    private Date rechargeDate;
    private String planId;
    private String addonId;
}
