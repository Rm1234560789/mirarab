package com.example.backend.controller;


import com.example.backend.dto.BxObida;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.service.ObidaService;
import com.example.backend.service.RahbariyatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/obida")
public class ObidaController {
    final ObidaService obidaService;

    @GetMapping
    public HttpEntity<?> getObida() {
        return obidaService.getObida();
    }
    @PostMapping
    public HttpEntity<?> postObida(@RequestBody BxObida bxObida) {
        return obidaService.postObida(bxObida);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteObida(@PathVariable UUID id) {
        return obidaService.deleteObida(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editObida(@PathVariable UUID id, @RequestBody BxObida bxObida) {
        return obidaService.editObida(id, bxObida);
    }
}
