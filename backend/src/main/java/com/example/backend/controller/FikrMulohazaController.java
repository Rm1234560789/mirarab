package com.example.backend.controller;

import com.example.backend.dto.FikrMulohazaDto;
import com.example.backend.dto.WorldNewsDto;
import com.example.backend.service.FikrMulohazaService;
import com.example.backend.service.Savol_JavobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/fikr")
public class FikrMulohazaController {
    final FikrMulohazaService fikrMulohazaService;
    @GetMapping
    public HttpEntity<?> getAll(){
        return fikrMulohazaService.getAll();
    }
    @PostMapping
    public HttpEntity<?> postNews(@RequestBody FikrMulohazaDto fikrMulohazaDto) {
        return fikrMulohazaService.post(fikrMulohazaDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable UUID id) {
        return fikrMulohazaService.deleteNews(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editNews(@PathVariable UUID id, @RequestBody FikrMulohazaDto fikrMulohazaDto) {
        return fikrMulohazaService.editNews(id, fikrMulohazaDto);
    }
}
