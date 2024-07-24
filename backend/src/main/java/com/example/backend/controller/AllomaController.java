package com.example.backend.controller;

import com.example.backend.dto.AllomaDto;
import com.example.backend.dto.Buxoro;
import com.example.backend.entity.News;
import com.example.backend.entity.UlugAllomalar;
import com.example.backend.repo.AllomaRepo;
import com.example.backend.service.AllomaService;
import com.example.backend.service.Buxoro_islomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/alloma")
@RequiredArgsConstructor
public class AllomaController {
    final AllomaService allomaService;
    final AllomaRepo allomaRepo;

    @GetMapping
    public HttpEntity<?> getAll() {
        return allomaService.getAlloma();
    }
    @GetMapping("/{id}")
    public HttpEntity<?> getAllomaById(@PathVariable UUID id) {
        UlugAllomalar alloma=allomaRepo.findById(id).orElseThrow();
        return ResponseEntity.ok(alloma);
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

