package com.example.backend.controller;

import com.example.backend.dto.Buxoro;
import com.example.backend.dto.ManaviyatRukniDto;
import com.example.backend.entity.Buxoro_Islom;
import com.example.backend.service.Buxoro_islomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/bux")
@RequiredArgsConstructor
public class BuxoroController {
    final Buxoro_islomService buxoro_islomService;

    @GetMapping
    public HttpEntity<?> getAll() {
        return buxoro_islomService.getBuxoro();
    }

    @PostMapping
    public HttpEntity<?> postBuxoro(@RequestBody Buxoro buxoro) {
        return buxoro_islomService.postBuxoro(buxoro);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteBuxoro(@PathVariable UUID id) {
        return buxoro_islomService.deleteBuxoro(id);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editManaviayt(@PathVariable UUID id, @RequestBody Buxoro buxoro) {
        return buxoro_islomService.editBuxoro(id, buxoro);
    }
    @GetMapping("/{id}")
    public HttpEntity<?> getBuxoroIslomById(@PathVariable UUID id) {
        Buxoro_Islom islomBuxoroById = buxoro_islomService.getIslomBuxoroById(id);
        return ResponseEntity.ok(islomBuxoroById);
    }
}
