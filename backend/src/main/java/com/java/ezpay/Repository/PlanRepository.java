package com.java.ezpay.Repository;
import com.java.ezpay.model.Plan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepository  extends JpaRepository<Plan, String>{
    
}
