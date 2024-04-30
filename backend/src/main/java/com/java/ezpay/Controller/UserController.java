package com.java.ezpay.Controller;
 

import com.java.ezpay.Service.UserService;
import com.java.ezpay.model.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("ezpay/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable String userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PutMapping("/suspend/{userId}")
    public ResponseEntity<String> suspendUserAccount(@PathVariable String userId) {
        try {
            userService.suspendUser(userId);
            return new ResponseEntity<>("User suspended successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Failed to suspend user: " + e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/activate/{userId}")
    public ResponseEntity<String> activateUserAccount(@PathVariable String userId) {
        try {
            userService.activateUser(userId);
            return new ResponseEntity<>("User activated successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Failed to activate user: " + e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
