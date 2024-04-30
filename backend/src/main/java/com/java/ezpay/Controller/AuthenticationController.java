package com.java.ezpay.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange; 
import com.java.ezpay.Service.AuthenticationService;
import com.java.ezpay.dto.Request.ForgotPasswordRequest;
import com.java.ezpay.dto.Request.LoginRequest;
import com.java.ezpay.dto.Request.RegisterRequest;
import com.java.ezpay.dto.Response.BasicResponse;
import com.java.ezpay.dto.Response.LoginResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor; 

@RestController
@RequiredArgsConstructor
@RequestMapping("/ezpay/api/v1/authentication")
@Tag(name = "Authentication", description = "It is used to authenticate and authorize the user.")
public class AuthenticationController {
    
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @Operation(summary = "User Registration", description = "This is used to register a new user.")
    public ResponseEntity<?> register( @RequestBody RegisterRequest registerRequest){
        BasicResponse<String> response = new BasicResponse<>();
        try{
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response , HttpStatus.ACCEPTED);
        }
        catch(Exception e){
            response.setMessege("Something went wrong!");
            response.setData("");
            return new ResponseEntity<>(response , HttpStatus.EXPECTATION_FAILED);
        }

    }
    @PostMapping("/login")
    @Operation(summary = "User Authentication", description = "Upon successful authtication , a  json web token will be generated.")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        BasicResponse <LoginResponse> response = new BasicResponse<>();
        try {
            response = authenticationService.login(loginRequest);
             return new ResponseEntity<>(response , HttpStatus.OK);
            
        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setMessege("Something went wrong!");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response , HttpStatus.EXPECTATION_FAILED);
        }
    }


    @PatchExchange("/forgot-password")
    @Operation(summary = "Forgot Password", description = "This is used to reset the password.")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest){
        BasicResponse <String> response = new BasicResponse<>();

        try {
        
            
            response = authenticationService.forgotPassword(forgotPasswordRequest);
            return new ResponseEntity<>(response , HttpStatus.OK);
        } catch (Exception e) {
            response.setMessege("Something wen wrong");
            response.setData("");
            return new ResponseEntity<>(response , HttpStatus.EXPECTATION_FAILED);
        }
    }

}
