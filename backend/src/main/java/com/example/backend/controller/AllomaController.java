package com.example.backend.controller;

import com.example.backend.dto.AllomaDto;
import com.example.backend.dto.Buxoro;
import com.example.backend.service.AllomaService;
import com.example.backend.service.Buxoro_islomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/alloma")
@RequiredArgsConstructor
public class AllomaController {
    final AllomaService allomaService;

    @GetMapping
    public HttpEntity<?> getAll() {
        return allomaService.getAlloma();
    }
    @PostMapping
    public HttpEntity<?> postBuxoro(@RequestBody AllomaDto allomaDto) {
        return allomaService.postAlloma(allomaDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteBuxoro(@PathVariable UUID id) {
        return allomaService.deleteAlloma(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editManaviayt(@PathVariable UUID id, @RequestBody AllomaDto allomaDto) {
        return allomaService.editAlloma(id, allomaDto);
    }
}

