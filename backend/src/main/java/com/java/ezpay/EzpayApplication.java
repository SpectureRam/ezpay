	package com.java.ezpay;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.java.ezpay.Repository.UserRepository;
import com.java.ezpay.model.User;
import com.java.ezpay.model.enumerate.Role;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
@ComponentScan({"com.java.ezpay"})
@EntityScan({"com.java.ezpay.model"})                                                 
public class EzpayApplication {

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(EzpayApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository){
		return args -> {
			if(userRepository.count() > 0) return;
			var admin = User.builder()
			.name("Admin1")
			.email("admin1@gmail.com")
			.password(passwordEncoder.encode("Admin1"))
			.role(Role.ADMIN)
			.build();
		};
	}

}
