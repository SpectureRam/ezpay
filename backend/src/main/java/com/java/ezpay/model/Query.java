package com.java.ezpay.model;

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

@Entity
@Table(name = "query")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Query {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @JoinColumn(nullable = false)
    private String name;

    @JoinColumn(nullable = false)
    private String email;

    @JoinColumn(nullable = false)
    private String message;

    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
