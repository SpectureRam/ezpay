package com.java.ezpay.model;           
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.java.ezpay.model.enumerate.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("unused")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "ez_user")
public class User implements UserDetails {
        @Id
        @GeneratedValue(strategy = GenerationType.UUID)
        @Column(name = "user_id")
        private String id;

        @Column(nullable=false)
        private String email;

        private String password;

        @Column(nullable=false, length = 10)
        private String mobileNumber;

        @Column(nullable=false) 
        private String name;

        @Column(name = "suspended")
        private boolean suspended;


        // @OneToMany(mappedBy = "user")
        // private List<Token> tokens;
      
        @Enumerated(EnumType.STRING)
        @Builder.Default
        private Role role = Role.USER;
        
        // @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
        // private List<Payment> payments;

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
             return role.getAuthorities();
        }
    
        @Override
        public boolean isAccountNonExpired() {
            return true;
        }
    
        @Override
        public boolean isAccountNonLocked() {
            return true;
        }
    
        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }
    
        @Override
        public boolean isEnabled() {
            return true;
        }

        @Override
        public String getUsername() {
                return email;
        }
        @Override
        public String getPassword() {
                return password;
        }

      

     
    
    
    }
    