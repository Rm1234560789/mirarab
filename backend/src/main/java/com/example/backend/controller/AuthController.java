package com.example.backend.controller;

import com.example.backend.service.AuthService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKey;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private static final String JWT_SECRET = "your-256-bit-secret-your-256-bit-secret"; // This should be a base64 encoded string

    @PostMapping("/login")
    public HttpEntity<?> loginUser(@RequestParam String username, @RequestParam String password) {
        return authService.login(username, password);
    }

    @GetMapping("/test")
    public String test(@RequestHeader String token) {
        SecretKey key = Keys.hmacShaKeyFor(JWT_SECRET.getBytes());
        Claims claims;
        try {
            claims = Jwts.parser()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            return "Invalid token";
        }

        String username = claims.getSubject();
        return "Token is valid for user: " + username;
    }
}
