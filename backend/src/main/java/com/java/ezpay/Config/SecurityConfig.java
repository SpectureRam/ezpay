package com.java.ezpay.Config;
 
import java.security.Security;
import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final String[] WHITELIST_URL={
        "/ezpay/api/v1/authentication/**",
        "/swagger-ui/**",
        "/swagger-ui.html",
        "/v3/api-docs/**",

    };
    
    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final LogoutHandler logoutHandler;

   @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity.csrf(AbstractHttpConfigurer::disable)
                        .cors(cors->cors.configurationSource(corsConfigurationSource()))
                        .authorizeHttpRequests(authorize -> authorize.requestMatchers(WHITELIST_URL).permitAll().anyRequest().authenticated())
                        .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                        .authenticationProvider(authenticationProvider)
                        .addFilterBefore(jwtAuthenticationFilter,UsernamePasswordAuthenticationFilter.class)
                        .logout(logout -> logout.logoutUrl("/")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request,response,authentication) -> SecurityContextHolder.clearContext()))
                        .build();
    }


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
            CorsConfiguration corsConfiguretion = new CorsConfiguration();
            corsConfiguretion.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
            corsConfiguretion.setAllowedMethods(Arrays.asList(HttpMethod.GET.name(),HttpMethod.POST.name(),HttpMethod.PUT.name(),HttpMethod.DELETE.name(),HttpMethod.OPTIONS.name(),HttpMethod.PATCH.name()));
            corsConfiguretion.setAllowedHeaders(Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE));
            corsConfiguretion.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguretion);
        return source;
    }
}
