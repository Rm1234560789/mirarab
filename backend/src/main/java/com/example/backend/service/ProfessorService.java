package com.example.backend.service;

import com.example.backend.dto.ProfessorDto;
import com.example.backend.dto.RahbariyatDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface ProfessorService {
    HttpEntity<?>getProfessor();
    HttpEntity<?>postProfessor(ProfessorDto professorDto);
    HttpEntity<?> deleteProff(UUID id);
    HttpEntity<?> editProff(UUID id, ProfessorDto professorDto);
}
