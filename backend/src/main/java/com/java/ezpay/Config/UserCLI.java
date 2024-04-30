package com.java.ezpay.Config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.ezpay.Repository.UserRepository;
import com.java.ezpay.model.User;
import com.java.ezpay.model.enumerate.Role;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserCLI implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
       if(userRepository.count()>0){
        return; } 

        var admin = User.builder()  
                    .name("Admin1")
                    .email("admin1@gmail.com")
                    .password(passwordEncoder.encode("admin1"))
                    
                    .mobileNumber("9080583122")
                    .role(Role.ADMIN)
                    .build();
        userRepository.save(admin);
    }
    
}
