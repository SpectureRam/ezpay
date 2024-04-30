package com.java.ezpay.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.java.ezpay.Service.PlanService;
import com.java.ezpay.model.Plan;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("ezpay/api/v1/plans")
@Tag(name = "Plans", description = "Endpoints for managing plans")
public class PlanController {

    private final PlanService planService;

    @GetMapping
    @Operation(summary = "Get all plans", description = "Get a list of all plans")
    public ResponseEntity<List<Plan>> getAllPlans() {
        List<Plan> plans = planService.getAllPlans();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{planId}")
    @Operation(summary = "Get plan by ID", description = "Get a plan by its ID")
    public ResponseEntity<Plan> getPlanById(@Parameter(description = "Plan ID") @PathVariable String planId) {
        Optional<Plan> plan = planService.getPlanById(planId);
        return plan.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(summary = "Create plan", description = "Create a new plan")
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
        Plan createdPlan = planService.createPlan(plan);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlan);
    }

    @DeleteMapping("/{planId}")
    @Operation(summary = "Delete plan", description = "Delete a plan by its ID")
    public ResponseEntity<String> deletePlan(@Parameter(description = "Plan ID") @PathVariable String planId) {
        planService.deletePlan(planId);
        return ResponseEntity.ok("Plan deleted successfully");
    }

    @PutMapping("/{planId}")
    @Operation(summary = "Update plan", description = "Update an existing plan")
    public ResponseEntity<Plan> updatePlan(@Parameter(description = "Plan ID") @PathVariable String planId, @RequestBody Plan plan) {
        var updatedPlan = planService.updatePlan(planId, plan);
        return updatedPlan.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
