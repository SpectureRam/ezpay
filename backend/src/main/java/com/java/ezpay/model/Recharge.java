package com.java.ezpay.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne; 
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "recharge")

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Recharge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rechargeId;
    @Column(nullable = false)
    private String mobileNumber;
    @Column(nullable = false)
    private String operator;
    @Column(nullable = false)
    private double rechargeAmount;
    @Column(nullable = false)
    private Date rechargeDate;

    @ManyToOne
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @ManyToOne
    @JoinColumn(name = "addon_id")
    private Addon addon;
    

}
