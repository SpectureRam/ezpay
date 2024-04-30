package com.java.ezpay.Service.impl;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.java.ezpay.Repository.TokenRepository;
import com.java.ezpay.Repository.UserRepository;
import com.java.ezpay.Service.AuthenticationService;
import com.java.ezpay.Utils.JwtUtil;
import com.java.ezpay.dto.Request.ForgotPasswordRequest;
import com.java.ezpay.dto.Request.LoginRequest;
import com.java.ezpay.dto.Request.RegisterRequest;
import com.java.ezpay.dto.Response.BasicResponse;
import com.java.ezpay.dto.Response.LoginResponse;
import com.java.ezpay.model.Token;
import com.java.ezpay.model.User;
import com.java.ezpay.model.enumerate.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{

    private final UserRepository    userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final TokenRepository tokenRepository;

    @Override
    public BasicResponse<String> register(RegisterRequest registerRequest) {
           Optional <User> isUserExists = userRepository.findByEmail(registerRequest.getEmail());
            
           if(isUserExists.isPresent()){
               return BasicResponse.<String>builder()
               .messege("User already exists with email "+ registerRequest.getEmail())
               .data("")
               .build();
           }

           var user = User.builder()
           .name(registerRequest.getUsername())
           .email(registerRequest.getEmail())
           .password(passwordEncoder.encode(registerRequest.getPassword()))
           .mobileNumber(registerRequest.getPhone())
           .suspended(false)
           .role(Role.USER)
           .build();

           userRepository.save(user);
           String userData = "Name: " + user.getName() +
           ", Email: " + user.getEmail() +
           ", Mobile Number: " + user.getMobileNumber() +
           ", Role: " + user.getRole().toString();

           return BasicResponse.<String>builder()
           .messege("User registered Successfully")
           .data(userData)
           .build();
    }


    @Override
    public BasicResponse<LoginResponse> login(LoginRequest loginRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(()-> new UsernameNotFoundException("User not found"));
                
        if (user.isSuspended()) {
            return BasicResponse.<LoginResponse>builder()
                .messege("User account is suspended")
                .build();
        }
        
                Map<String,Object> claims = new HashMap<>();
                claims.put("role",user.getRole().toString());
                String accessToken = jwtUtil.generateToken(claims, user);
                revokeAllUserToken(user);
                saveUserToken(accessToken.toString(),user);

                String userData =user.getId()+","+ user.getName()+"," + user.getEmail() +"," + user.getMobileNumber() +"," + user.getRole().toString();
     
                return BasicResponse.<LoginResponse>builder()
                .messege("Login Success")
                .data(LoginResponse.builder().accessToken(accessToken.toString())
                .username(user.getUsername())
                .email(user.getEmail())
                .mobileNumber(user.getMobileNumber())
                .userId(user.getId())
                .role(user.getRole().toString())
                .build())
                .build(); 
                
    }


    private void saveUserToken(String accessToken , User user){
        var token = Token.builder()
        .token(accessToken)
        .user(user)
        .expired(false)
        .revoked(false)
        .build();

        tokenRepository.save(token);
    }  

    private void revokeAllUserToken(User user){
        var validUserTokens = tokenRepository.findAllByUser_IdAndRevokedFalseAndExpiredFalse(user.getId());

        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setRevoked(true);
            token.setExpired(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }


    @Override
    public BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest){
        var user = userRepository.findByEmail(forgotPasswordRequest.getEmail()).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        if(!passwordEncoder.matches(forgotPasswordRequest.getCurrentPassword(), user.getPassword())){
            return BasicResponse.<String>builder().messege("wrong password").data("").build();
        }
        if(!forgotPasswordRequest.getNewPassword().equals(forgotPasswordRequest.getConfirmPassword())){
            return BasicResponse.<String>builder().messege("Password mismatch").data("").build();
        }
        user.setPassword(passwordEncoder.encode(forgotPasswordRequest.getNewPassword()));
        userRepository.save(user);
        return BasicResponse.<String>builder().messege("Password updated successfully.").data("").build();
    }
        

    }
