package com.java.ezpay.Service.impl;

import com.java.ezpay.Repository.UserRepository;
import com.java.ezpay.Service.UserService;
import com.java.ezpay.model.User;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository  userRepository;

    @Override
    public User getUserById(String userId) {
        return userRepository.findById(userId).orElse(null);
    }
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional // Add @Transactional annotation
    public void suspendUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.setSuspended(true);
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void activateUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        user.setSuspended(false);  
        userRepository.save(user);
    }
}
