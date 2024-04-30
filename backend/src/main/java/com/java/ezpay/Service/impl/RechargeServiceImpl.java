package com.java.ezpay.Service.impl;

import com.java.ezpay.Repository.RechargeRepository;
import com.java.ezpay.Service.RechargeService;
import com.java.ezpay.model.Addon;
import com.java.ezpay.model.Plan;
import com.java.ezpay.model.Recharge;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RechargeServiceImpl implements RechargeService {

    private final RechargeRepository rechargeRepository; 

     

    @Override
    public Recharge saveRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public Recharge getRechargeById(Long id) {
        Optional<Recharge> optionalRecharge = rechargeRepository.findById(id);
        return optionalRecharge.orElseThrow(() -> new IllegalArgumentException("Recharge not found for id: " + id));
    }

    @Override
    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }

    @Override
    public void deleteRecharge(Long id) {
        if (!rechargeRepository.existsById(id)) {
            throw new IllegalArgumentException("Recharge not found for id: " + id);
        }
        rechargeRepository.deleteById(id);
    }
}