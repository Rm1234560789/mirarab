package com.example.backend.controller;

import com.example.backend.dto.SavolJavobDto;
import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.service.Savol_JavobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/savol")
public class Savol_JavobController {
final Savol_JavobService savolJavobService;
@GetMapping
    public HttpEntity<?> getAll(){
    return savolJavobService.getAll();
}
    @PostMapping
    public HttpEntity<?> postNews(@RequestBody SavolJavobDto savolJavobDto) {
        return savolJavobService.post(savolJavobDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable UUID id) {
        return savolJavobService.deleteNews(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editNews(@PathVariable UUID id, @RequestBody SavolJavobDto savolJavobDto) {
        return savolJavobService.editNews(id, savolJavobDto);
    }
}
