package com.example.backend.controller;

import com.example.backend.service.IzohlarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/izohlar")
@RequiredArgsConstructor
public class IzohlarController {
    final IzohlarService izohlarService;
    @GetMapping
    public HttpEntity<?> getAllIzohlar() {
        return izohlarService.getIzohlar();
    }
}
