package com.java.ezpay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.ezpay.model.Addon;

@Repository
public interface AddonRepository extends JpaRepository<Addon, String>{
    
}
