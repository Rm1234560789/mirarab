package com.example.backend.controller;

import com.example.backend.dto.MaqolaDto;
import com.example.backend.entity.Maqolalar;
import com.example.backend.repo.MaqolaRepo;
import com.example.backend.service.MaqolaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/maqola")
@RequiredArgsConstructor
public class MaqolaController {
    final MaqolaService maqolaService;
    private final MaqolaRepo maqolaRepo;

    @GetMapping
    public HttpEntity<?> getMaqola() {
        return maqolaService.getMaqola();
    }

    @GetMapping("/{id}")
    public HttpEntity<?> getNewsById(@PathVariable UUID id) {
        Maqolalar maqolalar = maqolaRepo.findById(id).orElseThrow();
        System.out.println(maqolalar);
        return ResponseEntity.ok(maqolalar);
    }

    @PostMapping
    public HttpEntity<?> postMaqola(@RequestBody MaqolaDto maqolaDto) {
        return maqolaService.postMaqola(maqolaDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteMaqola(@PathVariable UUID id) {
        return maqolaService.deleteMaqola(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody MaqolaDto maqolaDto) {
        return maqolaService.editMaqola(id, maqolaDto);
    }
}
