package com.java.ezpay.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.java.ezpay.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String>{

   @Query("SELECT p FROM Payment p WHERE p.userId = :userId")
    List<Payment> findByUserId(String userId);
  
}
