package com.example.backend.service;

import com.example.backend.dto.Shartnoma;
import com.example.backend.dto.Uzb_NewsDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface New_NewService {
    HttpEntity<?> getAll();

    HttpEntity<?> getById(UUID id);
    HttpEntity<?>post(Uzb_NewsDto uzbNewsDto);
    HttpEntity<?> deleteNews(UUID id);
    HttpEntity<?> editNews(UUID id, Uzb_NewsDto uzbNewsDto);
}
