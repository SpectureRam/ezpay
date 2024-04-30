package com.java.ezpay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity 
@Table(name = "plan")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String planId;
    private String operator;    
    private String planType;    
    private String planDetails;
    private String Voice;
    private String talkTime;
    private String TotalData;
    private String DataPerDay;
    private String SMS;
    private double planPrice;
    private int planValidity;
    private String planCategory;


    



}
