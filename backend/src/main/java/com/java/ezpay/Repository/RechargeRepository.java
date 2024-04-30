package com.java.ezpay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.ezpay.model.Recharge;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Long>{
    
}
