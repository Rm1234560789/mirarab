package com.example.backend.controller;


import com.example.backend.dto.BxObida;
import com.example.backend.dto.Qadamlar;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.service.ObidaService;
import com.example.backend.service.QadamService;
import com.example.backend.service.RahbariyatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/qadam")
public class QadamController {
    final QadamService qadamService;

    @GetMapping
    public HttpEntity<?> getQadam() {
        return qadamService.getQadam() ;
    }
    @PostMapping
    public HttpEntity<?> postObida(@RequestBody Qadamlar qadamlar) {
        return qadamService.postQadam(qadamlar);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteObida(@PathVariable UUID id) {
        return qadamService.deleteQadam(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editObida(@PathVariable UUID id, @RequestBody Qadamlar qadamlar) {
        return qadamService.editQadam(id, qadamlar);
    }
    @GetMapping("/{id}")
    public HttpEntity<?> getCurrentQadamjo(@PathVariable UUID id) {
        return qadamService.getCurrentQadamjo(id);
    }
}
