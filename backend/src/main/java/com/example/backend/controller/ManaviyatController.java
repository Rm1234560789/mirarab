package com.example.backend.controller;

import com.example.backend.dto.ManaviyatRukniDto;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.service.ManaviyatRukniService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/manaviyat")
@RequiredArgsConstructor
public class ManaviyatController {
    final ManaviyatRukniService manaviyat_rukniService;

    @GetMapping
    public HttpEntity<?> getAll() {
     return ResponseEntity.ok(manaviyat_rukniService.getManaviyatRukni());
    }
    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody ManaviyatRukniDto manaviyatRukniDto) {
        return manaviyat_rukniService.postManaviyat(manaviyatRukniDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteManaviyat(@PathVariable UUID id) {
        return manaviyat_rukniService.deleteManaviyat(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editManaviayt(@PathVariable UUID id, @RequestBody ManaviyatRukniDto manaviyatRukniDto) {
        return manaviyat_rukniService.editManaviyat(id, manaviyatRukniDto);
    }
}
