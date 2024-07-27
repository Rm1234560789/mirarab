package com.example.backend.config;


import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private MyFilter myFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET,"/izohlar/for/user","/api/savol","/api/fikr").permitAll()
                        .requestMatchers(HttpMethod.GET,"/qadam/{id}","/bux/{id}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/savol","/api/fikr","/api/worldnews","/api/newnews","/auth/login","/maqola","/manaviyat","/madrasahq","/professor","/qadam","/izohlar").permitAll()
                        .requestMatchers("/api/files/pdf/{id}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/files/img","/api/files/video","/video","/news","/rahbariyat","/bux","/obida","/alloma","/qabul","/xalqaro","/xorij","/vd","/audio","/raddiya","/ustoz","/talaba").permitAll()
                        .requestMatchers(HttpMethod.GET, "/obida/{id}","/api/files/img","/manaviyat","/maqola","/madrasahq","/professor","/izohlar","/news","api/files/img/pdf","/bux","/obida","/qadam","/alloma","/qabul","/xalqaro","/xorij","/vd","/audio","/raddiya","/talaba","/ustoz").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/worldnews","/api/worldnews/{id}","/api/newnews","/api/newnews/{id}","/alloma/{id}","/api/files/video","/video","/news/{id}","/rahbariyat","/maqola/{id}","/madrasahq/{id}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/savol/{id}","/api/fikr/{id}","/api/worldnews/{id}","/api/newnews/{id}","/video/{id}","/news/{id}","/rahbariyat/{id}","/maqola/{id}","/manaviyat/{id}","/madrasahq/{id}","/professor/{id}","/bux/{id}","/obida/{id}","/qadam/{id}","/alloma/{id}","/qabul/{id}","/xalqaro/{id}","/xorij/{id}","/vd/{id}","/audio/{id}","/raddiya/{id}","/talaba/{id}","/ustoz/{id}","/izohlar/{id}").permitAll()
                        .requestMatchers(HttpMethod.DELETE,"/api/savol/{id}", "/api/fikr/{id}","/api/worldnews/{id}","/api/newnews/{id}","/video/{id}","/news/{id}","/rahbariyat/{id}","/maqola/{id}","/manaviyat/{id}","/madrasahq/{id}","/professor/{id}","/bux/{id}","/obida/{id}","/qadam/{id}","/alloma/{id}","/qabul/{id}","/xalqaro/{id}","/xorij/{id}","/vd/{id}","/audio/{id}","/raddiya/{id}","/talaba/{id}","/ustoz/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/alloma/{id}","/api/files/video","/video","/news/{id}","/rahbariyat","/maqola/{id}","/madrasahq/{id}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/video/{id}","/news/{id}","/rahbariyat/{id}","/maqola/{id}","/manaviyat/{id}","/madrasahq/{id}","/professor/{id}","/bux/{id}","/obida/{id}","/qadam/{id}","/alloma/{id}","/qabul/{id}","/xalqaro/{id}","/xorij/{id}","/vd/{id}","/audio/{id}","/raddiya/{id}","/talaba/{id}","/ustoz/{id}","/izohlar/{id}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/video/{id}","/news/{id}","/rahbariyat/{id}","/maqola/{id}","/manaviyat/{id}","/madrasahq/{id}","/professor/{id}","/bux/{id}","/obida/{id}","/qadam/{id}","/alloma/{id}","/qabul/{id}","/xalqaro/{id}","/xorij/{id}","/vd/{id}","/audio/{id}","/raddiya/{id}","/talaba/{id}","/ustoz/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET,"/api/turli/mavzu").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/turli/mavzu").permitAll()
                        .requestMatchers(HttpMethod.DELETE,"/api/turli/mavzu").permitAll()
                        .requestMatchers(HttpMethod.PUT,"/api/turli/mavzu").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(myFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> userRepo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}

