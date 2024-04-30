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

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "addon")
public class Addon {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String addonId;
    private String addonName;
    private String addonType;
    private String addonDetails;
    private double addonPrice;
    private int addonValidity;
    private String planCategory;

    //  @OneToMany(mappedBy = "addon", cascade = CascadeType.ALL)
    // private List<Recharge> recharges;
    


    
}
