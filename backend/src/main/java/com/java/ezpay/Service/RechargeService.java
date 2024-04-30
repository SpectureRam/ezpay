package com.java.ezpay.Service;

import com.java.ezpay.model.Recharge;

import java.util.List;

public interface RechargeService { 
    Recharge saveRecharge(Recharge recharge);
    Recharge getRechargeById(Long id);
    List<Recharge> getAllRecharges();
    void deleteRecharge(Long id);
}
