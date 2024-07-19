package com.example.backend.controller;

import com.example.backend.dto.BxObida;
import com.example.backend.dto.QabulDto;
import com.example.backend.dto.Qadamlar;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.service.ObidaService;
import com.example.backend.service.QabulService;
import com.example.backend.service.QadamService;
import com.example.backend.service.RahbariyatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/qabul")
public class QabulController {
    final QabulService qabulService;

    @GetMapping
    public HttpEntity<?> getQadam() {
        return qabulService.getQabul();
    }
    @PostMapping
    public HttpEntity<?> postObida(@RequestBody QabulDto qabulDto) {
        return qabulService.postQabul(qabulDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteObida(@PathVariable UUID id) {
        return qabulService.deleteQabul(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editObida(@PathVariable UUID id, @RequestBody QabulDto qabulDto) {
        return qabulService.editQabul(id, qabulDto);
    }
}

