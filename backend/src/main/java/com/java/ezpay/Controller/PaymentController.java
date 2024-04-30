package com.java.ezpay.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.ezpay.Service.PaymentService;
import com.java.ezpay.dto.Request.PaymentRequest;
import com.java.ezpay.model.Payment;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;


@RequiredArgsConstructor
@RestController
@RequestMapping("/ezpay/api/v1/payment")
@Tag(name = "Payment", description = "Endpoints for managing payments")
public class PaymentController {

    private final PaymentService paymentService;

     @PostMapping("/make-payment")
    public ResponseEntity<Payment> makePayment(@RequestBody PaymentRequest paymentRequest) {
        Payment payment = paymentService.makePayment(paymentRequest);
        return new ResponseEntity<>(payment, HttpStatus.CREATED);
    }

    @DeleteMapping("/{paymentId}")
    public ResponseEntity<Void> deletePayment(@PathVariable String paymentId) {
        paymentService.deletePayment(paymentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{paymentId}")
    public ResponseEntity<Payment> updatePayment(@PathVariable String paymentId, @RequestBody PaymentRequest paymentRequest) {
        Payment updatedPayment = paymentService.updatePayment(paymentId, paymentRequest);
        return new ResponseEntity<>(updatedPayment, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public List<Payment> getAllPaymentsByUserId(@PathVariable String userId) {
        return paymentService.getAllPaymentsByUserId(userId);
    }
    @GetMapping("/all")
public ResponseEntity<List<Payment>> getAllPayments() {
    List<Payment> payments = paymentService.getAllPayments();
    if (payments.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }
}


    
}
