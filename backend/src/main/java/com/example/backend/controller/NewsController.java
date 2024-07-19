package com.example.backend.controller;

import com.example.backend.dto.NewsDto;
import com.example.backend.entity.News;
import com.example.backend.repo.NewsRepo;
import com.example.backend.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
public class NewsController {

    final NewsService newsService;

    final NewsRepo newsRepo;
    @GetMapping
    public HttpEntity<?> getNews() {
        return newsService.getNews();
    }

    @GetMapping("/{id}")
    public HttpEntity<?> getNewsById(@PathVariable UUID id) {
        News news = newsRepo.findById(id).orElseThrow();
        System.out.println(news);
        return ResponseEntity.ok(news);
    }

    @PostMapping
    public HttpEntity<?> addNews(@RequestBody NewsDto newsDto) {
        return newsService.addNews(newsDto);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteNews(@PathVariable UUID id) {
        return newsService.deleteNews(id);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> updateNews(@PathVariable UUID id, @RequestBody NewsDto newsDto) {
        System.out.println("news put");
        System.out.println(id);
        System.out.println(newsDto);
        return newsService.updateNews(id, newsDto);
    }
}
