package com.java.ezpay.Controller;

import com.java.ezpay.model.Recharge;
import com.java.ezpay.Service.RechargeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("ezpay/api/v1/recharge")
@RequiredArgsConstructor
@Tag(name = "Recharge", description = "Endpoints for managing recharges")
public class RechargeController {

    private final RechargeService rechargeService;

    @PostMapping
    @Operation(summary = "Create recharge", description = "Create a new recharge")
    public ResponseEntity<Recharge> createRecharge(@RequestBody Recharge recharge) {
        Recharge createdRecharge = rechargeService.saveRecharge(recharge);
        return new ResponseEntity<>(createdRecharge, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get recharge by ID", description = "Get a recharge by its ID")
    public ResponseEntity<Recharge> getRechargeById(@Parameter(description = "Recharge ID") @PathVariable Long id) {
        Recharge recharge = rechargeService.getRechargeById(id);
        return ResponseEntity.ok(recharge);
    }

    @GetMapping
    @Operation(summary = "Get all recharges", description = "Get a list of all recharges")
    public ResponseEntity<List<Recharge>> getAllRecharges() {
        List<Recharge> recharges = rechargeService.getAllRecharges();
        return ResponseEntity.ok(recharges);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete recharge", description = "Delete a recharge by its ID")
    public ResponseEntity<Void> deleteRecharge(@Parameter(description = "Recharge ID") @PathVariable Long id) {
        rechargeService.deleteRecharge(id);
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Error: " + ex.getMessage());
    }
}
