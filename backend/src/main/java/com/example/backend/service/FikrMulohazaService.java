package com.example.backend.service;

import com.example.backend.dto.FikrMulohazaDto;
import com.example.backend.dto.Uzb_NewsDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface FikrMulohazaService {
    HttpEntity<?> getAll();
    HttpEntity<?>post(FikrMulohazaDto fikrMulohazaDto);
    HttpEntity<?> deleteNews(UUID id);
    HttpEntity<?> editNews(UUID id, FikrMulohazaDto fikrMulohazaDto);
}
