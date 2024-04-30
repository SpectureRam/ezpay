package com.java.ezpay.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.ezpay.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, String> {
   
    Optional<User>findByEmail(String email);
}
