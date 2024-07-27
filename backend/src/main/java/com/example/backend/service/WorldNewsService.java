package com.example.backend.service;

import com.example.backend.dto.Uzb_NewsDto;
import com.example.backend.dto.WorldNewsDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface WorldNewsService {
    HttpEntity<?> getAll();

    HttpEntity<?> getById(UUID id);
    HttpEntity<?>post(WorldNewsDto worldNewsDto);
    HttpEntity<?> deleteNews(UUID id);
    HttpEntity<?> editNews(UUID id, WorldNewsDto worldNewsDto);
}
