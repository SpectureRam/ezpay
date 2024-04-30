package com.java.ezpay.dto.Response;

import com.java.ezpay.model.User.UserBuilder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    
    private String accessToken;
    private String username;
    private String email;
    private String mobileNumber;
    private String role;
    private String userId;
    
}
