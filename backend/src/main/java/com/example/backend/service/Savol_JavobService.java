package com.example.backend.service;

import com.example.backend.dto.SavolJavobDto;
import com.example.backend.dto.Uzb_NewsDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface Savol_JavobService {
    HttpEntity<?> getAll();
    HttpEntity<?>post(SavolJavobDto savolJavobDto);
    HttpEntity<?> deleteNews(UUID id);
    HttpEntity<?> editNews(UUID id, SavolJavobDto savolJavobDto);
}
