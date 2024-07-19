package com.example.backend.service;

import com.example.backend.dto.ProfessorDto;
import com.example.backend.dto.RahbariyatDto;
import com.example.backend.entity.Rahbariyat;
import com.example.backend.repo.Professor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProfessorServiceImpl implements ProfessorService {
    final Professor professor;
    @Override
    public HttpEntity<?> getProfessor() {
        return ResponseEntity.ok(professor.findAll());
    }

    @Override
    public HttpEntity<?> postProfessor(ProfessorDto professorDto) {
        com.example.backend.entity.Professor p = new com.example.backend.entity.Professor();
        p.setName(professorDto.getName());
        p.setTitle(professorDto.getTitle());
        p.setImg(professorDto.getImg());
        p.setCreatedAt(LocalDateTime.now());
        professor.save(p);
        return ResponseEntity.ok("Saved!");

    }

    @Override
    public HttpEntity<?> deleteProff(UUID id) {
        if (professor.existsById(id)) {
            professor.deleteById(id);
            return ResponseEntity.ok(" deleted successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
    @Override
    public HttpEntity<?> editProff(UUID id, ProfessorDto professorDto) {
        Optional<com.example.backend.entity.Professor> optionalPro = professor.findById(id);
        if (optionalPro.isPresent()) {
            com.example.backend.entity.Professor professors = optionalPro.get();
            professors.setName(professorDto.getName());
            professors.setTitle(professorDto.getTitle());
            professors.setImg(professorDto.getImg());
            professor.save(professors);
            return ResponseEntity.ok(" updated successfully");
        } else {
            return ResponseEntity.status(404).body(" not found");
        }
    }
}
