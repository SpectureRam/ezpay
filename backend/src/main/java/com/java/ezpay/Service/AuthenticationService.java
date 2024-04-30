package com.java.ezpay.Service;

import com.java.ezpay.dto.Request.ForgotPasswordRequest;
import com.java.ezpay.dto.Request.LoginRequest;
import com.java.ezpay.dto.Request.RegisterRequest;
import com.java.ezpay.dto.Response.BasicResponse;
import com.java.ezpay.dto.Response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
    
}
