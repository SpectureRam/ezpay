package com.java.ezpay.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.ezpay.model.Plan;

// @Service
public interface PlanService {

    List<Plan> getAllPlans();
    Optional<Plan> getPlanById(String planId);
    Plan createPlan(Plan plan);
    Optional<Plan> updatePlan(String planId, Plan plan);
    void deletePlan(String planId);

}
