package com.example.backend.controller;

import com.example.backend.dto.ProfessorDto;
import com.example.backend.service.ProfessorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/professor")
@RequiredArgsConstructor
public class ProfessorController {
    final ProfessorService professorService;
    @GetMapping
    public HttpEntity<?> getProfessor() {
        return professorService.getProfessor();
    }

    @PostMapping
    public HttpEntity<?> postProff(@RequestBody ProfessorDto professorDto) {
        return professorService.postProfessor(professorDto);
    }
    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteProff(@PathVariable UUID id) {
        return professorService.deleteProff(id);
    }
    @PutMapping("/{id}")
    public HttpEntity<?> editProff(@PathVariable UUID id, @RequestBody ProfessorDto professorDto) {
        return professorService.editProff(id, professorDto);
    }
}
