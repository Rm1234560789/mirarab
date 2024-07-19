package com.example.backend.config;

import com.example.backend.entity.Role;
import com.example.backend.entity.Users;
import com.example.backend.repo.RoleRepo;
import com.example.backend.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class CommandLineConfig implements CommandLineRunner {
    final PasswordEncoder passwordEncoder;
    final UserRepo userRepo;
    final RoleRepo roleRepo;

    @Override
    public void run(String... args) throws Exception {
        List<Role> all = roleRepo.findAll();
        if (all.isEmpty()) {
            List<Role> roles = roleRepo.saveAll(List.of(
                    new Role("ROLE_SUPERADMIN"),
                    new Role("ROLE_USER")
            ));
            Users user = Users.builder()
                    .username("superadmin")
                    .password(passwordEncoder.encode("123"))
                    .roles(roles)
                    .build();
            userRepo.save(user);
        }
    }
}



