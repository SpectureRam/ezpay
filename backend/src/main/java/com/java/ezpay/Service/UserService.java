package com.java.ezpay.Service;

import java.util.List;

import com.java.ezpay.model.User;

public interface UserService {
    User getUserById(String userId); 
    List<User> getAllUsers();
    public void suspendUser(String userId);
    void activateUser(String userId);
}

