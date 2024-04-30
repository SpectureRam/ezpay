package com.java.ezpay.model; 
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "payment")
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private  String paymentId;
    private String modeOfPayment;
    private String paymentStatus;
    private double totalAmount;
    private String payment_responseId;
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "user_id")
    private String userId;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recharge_id")
    private Recharge recharge;

}
