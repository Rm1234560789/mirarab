package com.example.backend.controller;

import com.example.backend.dto.MadrasaHqDto;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Madrasa_hq;
import com.example.backend.entity.News;
import com.example.backend.repo.MadrasaHq;
import com.example.backend.service.MadrasaHqService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/madrasahq")
@RequiredArgsConstructor
public class MadrasaHqController {
    final MadrasaHqService madrasaHqService;
    final MadrasaHq madrasaHq;
    @GetMapping
    public HttpEntity<?> getMadrasaHq() {
        return madrasaHqService.getMadrasaHq();
    }
    @GetMapping("/{id}")
    public HttpEntity<?> getNewsById(@PathVariable UUID id) {
       Madrasa_hq madrasa_hq = madrasaHq.findById(id).orElseThrow();
        System.out.println(madrasa_hq);
        return ResponseEntity.ok(madrasa_hq);
    }

    @PostMapping
    public HttpEntity<?> postRahbariyat(@RequestBody MadrasaHqDto madrasaHqDto) {
        return madrasaHqService.postMadrasa(madrasaHqDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteMadrasa(@PathVariable UUID id) {
        return madrasaHqService.deleteMadrasa(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editRahbariyat(@PathVariable UUID id, @RequestBody MadrasaHqDto madrasaHqDto) {
        return madrasaHqService.editMadrasa(id, madrasaHqDto);
    }
}
