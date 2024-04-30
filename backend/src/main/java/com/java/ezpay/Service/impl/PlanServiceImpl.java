package com.java.ezpay.Service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.ezpay.Repository.PlanRepository;
import com.java.ezpay.Service.PlanService;
import com.java.ezpay.model.Plan;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService{

    private final PlanRepository planRepository;
    @Override
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
        
    }

    @Override
    public Optional<Plan> getPlanById(String planId) { 
        return planRepository.findById(planId);    
    }

    @Override
    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);     
    }

    @Override
    public Optional<Plan> updatePlan(String planId, Plan updatedPlan) {
        Optional<Plan> existing = planRepository.findById(planId);
        if(existing.isPresent()){
            updatedPlan.setPlanId(planId);
            return Optional.of(planRepository.save(updatedPlan));
        }
        return Optional.empty();
    }

    @Override
    public void deletePlan(String planId) {
        planRepository.deleteById(planId);
    }
        

}