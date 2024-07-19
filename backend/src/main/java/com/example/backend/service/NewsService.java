package com.example.backend.service;

import com.example.backend.dto.NewsDto;
import org.springframework.http.HttpEntity;

import java.util.UUID;

public interface NewsService {
    HttpEntity<?> getNews();
    HttpEntity<?> addNews(NewsDto newsDto);
    HttpEntity<?> deleteNews(UUID id);
    HttpEntity<?> updateNews(UUID id, NewsDto newsDto);
}
